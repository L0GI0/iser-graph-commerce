import { UseFormGraphQlOptions } from '@graphcommerce/ecommerce-ui'
import { useIserFormGqlMutationCart } from '@graphcommerce/magento-cart'
import { ExtendableComponent } from '@graphcommerce/next-ui'
import { Box, SxProps, Theme, useThemeProps } from '@mui/material'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Product } from '@vercel/commerce/types/product'
import {
  AddProductsToCartDocument,
  AddProductsToCartMutation,
  AddProductsToCartMutationVariables,
} from './AddProductsToCart.gql'
import {
  AddProductsToCartSnackbar,
  AddProductsToCartSnackbarProps,
} from './AddProductsToCartSnackbar'
import { toUserErrors } from './toUserErrors'
import { AddProductsToCartContext, RedirectType } from './useFormAddProductsToCart'
import { getProductVariant, getProductVariantFromName } from '../helpers'

export type AddIserProductsToCartFormProps = {
  // The props are actually used, but are passed through useThemeProps and that breaks react/no-unused-prop-types
  // eslint-disable-next-line react/no-unused-prop-types
  children: React.ReactNode
  // eslint-disable-next-line react/no-unused-prop-types
  sx?: SxProps<Theme>
  // eslint-disable-next-line react/no-unused-prop-types
  redirect?: RedirectType,
  product: Product,
} & UseFormGraphQlOptions<AddProductsToCartMutation, AddProductsToCartMutationVariables> &
  AddProductsToCartSnackbarProps

const name = 'AddProductsToCartForm'

/** Expose the component to be exendable in your theme.components */
declare module '@mui/material/styles/components' {
  interface Components {
    AddProductsToCartForm?: Pick<
      ExtendableComponent<Omit<AddIserProductsToCartFormProps, 'children' | 'product'>>,
      'defaultProps'
    >
  }
}

export type CartItemInputLocal = {
  /** An array of entered options for the base product, such as personalization text */
  entered_options?: Array<string>;
  /** For child products, the SKU of its parent product */
  parent_sku?: string;
  quantity: number;
  /** The selected options for the base product, such as color or size with  unique ID for a `CustomizableRadioOption`, `CustomizableDropDownOption`, `ConfigurableProductOptionsValues`, etc. objects */
  selected_options?: Array<string>;
  sku: string;
};

export type AddProductsToCartMutationVariablesLocal = {
  cartId: string;
  cartItems: Array<CartItemInputLocal>;
};

/**
 * Component that handles adding products to the cart. Used on the product page, but can be used for
 * any product listing.
 *
 * Can be configured globally in your theme.ts;
 *
 * - Uses react-hook-form's useForm hook under the hood and exposes the form as a context which can be
 *   consumed with `useFormAddProductsToCart` hook.
 * - Cleans up the submitted data.
 * - Redirects the user to the cart/checkout/added page after successful submission.
 */
export function AddIserProductsToCartForm(props: AddIserProductsToCartFormProps) {
  let { children, redirect, onComplete, sx, errorSnackbar, successSnackbar, product, ...formProps } =
    useThemeProps({ name, props })
  const router = useRouter()

  if (typeof redirect !== 'undefined' && redirect !== 'added' && router.pathname === redirect)
    redirect = undefined

  const form = useIserFormGqlMutationCart<
    AddProductsToCartMutation,
    AddProductsToCartMutationVariables
  >({
    ...formProps,
    // We're stripping out incomplete entered options.
    onBeforeSubmit: async (variables) => {

      console.log(`********************* AddIserProductsToCard - onBeforeSubmit()`)
      
      const variables2 = (await formProps.onBeforeSubmit?.(variables)) ?? variables
      if (variables2 === false) return false


      const { cartItems } = variables;

       const cartItems2 =  cartItems
          .filter((cartItem) => cartItem.sku)
          .map((cartItem) => ({
            ...cartItem,
            quantity: cartItem.quantity || 1,
            selected_options: cartItem.selected_options?.filter(Boolean),
            entered_options: cartItem.entered_options?.filter((option) => option?.value),
          }))

      const variant = getProductVariantFromName(product, cartItems2[0].selected_options as string[] | undefined);

      console.log(`Variant = ${JSON.stringify(variant)}`)

      return { variantId: variant?.id ?? product.variants[0]?.id, productId: product.id, quantity: cartItems2[0].quantity }

    },
    onComplete: async (result, variables) => {
      await onComplete?.(result, variables)

      console.log(`********************* AddIserProductsToCard - onComplete()`)

      // After the form has been submitted, we're resetting the submitted SKU's
      form.getValues('cartItems').forEach((item, index) => {
        if (item.sku) form.setValue(`cartItems.${index}.sku`, '')
      })

      if (toUserErrors(result.data).length || result.errors?.length || !redirect) return

      if (redirect === 'added') {
        const method = router.pathname.startsWith('/checkout/added') ? router.replace : router.push
        await method({
          pathname: '/checkout/added',
          query: { sku: variables.cartItems.map((i) => i.sku) },
        })
      } else {
        await router.push({ pathname: redirect })
      }
    },
  })

  const submit = form.handleSubmit(() => {})

  return (
    <AddProductsToCartContext.Provider
      value={useMemo(() => ({ ...form, redirect }), [form, redirect])}
    >
      <Box component='form' onSubmit={submit} noValidate sx={sx} className={name}>
        {children}
      </Box>
      <AddProductsToCartSnackbar errorSnackbar={errorSnackbar} successSnackbar={successSnackbar} />
    </AddProductsToCartContext.Provider>
  )
}
