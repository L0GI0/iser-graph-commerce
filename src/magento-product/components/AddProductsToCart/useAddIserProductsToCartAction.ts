import { useFormState } from '@graphcommerce/ecommerce-ui'
import { useEventCallback } from '@mui/material'
import { UseAddProductsToCartActionFragment } from './UseAddProductsToCartAction.gql'
import { useFormAddProductsToCart } from './useFormAddProductsToCart'
import { Product } from '@vercel/commerce/types/product'

export type UseAddIserProductsToCartActionProps = {
  index?: number
  disabled?: boolean
  loading?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  sku?: string | null | undefined
  product?: Product
}

export type UseAddIserProductsToCartActionReturn = {
  disabled: boolean
  loading: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
  onMouseDown: React.MouseEventHandler<HTMLButtonElement>
}

export function useAddIserProductsToCartAction(
  props: UseAddIserProductsToCartActionProps,
): UseAddIserProductsToCartActionReturn {
  const { setValue, getValues, control } = useFormAddProductsToCart()//Add products to cart context
  const formState = useFormState({ control })
  const {
    sku = props.product?.id,
    product,
    index = 0,
    onClick: onClickIncoming,
    disabled,
    loading,
  } = props

  // console.log(`Product = ${JSON.stringify(props.product)}`)

  console.log(`sku = ${sku}`)

  return {
    disabled:
      Boolean(formState.errors.cartItems?.[index]?.sku?.message || disabled),
    loading: loading || (formState.isSubmitting && getValues(`cartItems.${index}.sku`) === sku),
    onClick: useEventCallback((e) => {
      console.log(`useAddIserProductToCartAction - onClick()`)

      e.stopPropagation()
      if (formState.isSubmitting) return
      if (process.env.NODE_ENV !== 'production') {
        if (!sku) console.warn(`You must provide a 'sku' to useAddIserProductsToCartAction`)
      }
      setValue(`cartItems.${index}.sku`, sku ?? '')
      onClickIncoming?.(e)
    }),
    onMouseDown: useEventCallback((e) => e.stopPropagation()),
  }
}
