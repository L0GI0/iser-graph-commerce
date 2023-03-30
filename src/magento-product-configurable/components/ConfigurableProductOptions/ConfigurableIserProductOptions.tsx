import {
  AddProductsToCartMutationVariables,
  useFormAddProductsToCart,
} from '@graphcommerce/magento-product'
import { SectionHeader, filterNonNullableKeys, ActionCardListProps } from '@graphcommerce/next-ui'
import {
  ActionCardItemBase,
  ActionCardListForm,
  IserActionCardListForm
} from '@graphcommerce/next-ui/ActionCard'
import { i18n } from '@lingui/core'
import { Alert, Box, SxProps, Theme } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo } from 'react'
import { ConfigurableOptionsFragment } from '../../graphql/ConfigurableOptions.gql'
import { useConfigurableOptionsSelection } from '../../hooks'
import { IserConfigurableOptionValue } from '../ConfigurableOptionValue'
import { ConfigurableOptionValueFragment } from '../ConfigurableOptionValue/ConfigurableOptionValue.gql'
import { Product, ProductVariant, ProductOption, ProductOptionValues } from '@vercel/commerce/types/product'

export type ConfigurableIserProductOptionsProps = {
  optionEndLabels?: Record<string, React.ReactNode>
  sx?: SxProps<Theme>
  render?: typeof IserConfigurableOptionValue
  product: Product
  index?: number
} & Pick<ActionCardListProps, 'color' | 'variant' | 'size' | 'layout' | 'collapse'>

export function ConfigurableIserProductOptions(props: ConfigurableIserProductOptionsProps) {
  const {
    optionEndLabels,
    sx,
    render = IserConfigurableOptionValue,
    product,
    index = 0,
    ...other
  } = props
  const { control, setError, clearErrors } = useFormAddProductsToCart()
  const { locale } = useRouter()

  // const options = useMemo(
  //   () =>
  //     filterNonNullableKeys<ProductVariant, Product['variants']>(product.variants, ['attribute_code', 'label']).map(
  //       (option) => ({
  //         ...option,
  //         values: filterNonNullableKeys(option.values, ['uid']).map((ov) => ({
  //           value: ov.uid,
  //           ...ov,
  //         })),
  //       }),
  //     ),
  //   [product.configurable_options],
  // )

  const options = product.options

  // const { configured } = useConfigurableOptionsSelection({ url_key: product.slug, index })
  // const unavailable =
  //   configured &&
  //   (configured?.configurable_product_options_selection?.options_available_for_selection ?? [])
  //     .length === 0

  const allLabels = useMemo(() => {
    const formatter = new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' })
    return formatter.format(options.map((o) => o.displayName))
  }, [locale, options])

  // useEffect(() => {
  //   if (unavailable) {
  //     setError(`cartItems.${index}.sku`, {
  //       message: i18n._(/* i18n */ 'Product not available in {allLabels}', { allLabels }),
  //     })
  //   }
  //   if (!unavailable) clearErrors(`cartItems.${index}.sku`)
  // }, [allLabels, clearErrors, index, setError, unavailable])

  return (
    <Box sx={(theme) => ({ display: 'grid', rowGap: theme.spacings.sm })}>
      {options.map((option, idx) => {
        const { values, displayName } = option
        const fieldName = `cartItems.${index}.selected_options.${idx}` as const

        return (
          <Box key={fieldName} sx={sx}>
            <SectionHeader
              labelLeft={displayName}
              labelRight={optionEndLabels?.['variant'] ?? ''}
              sx={{ mt: 0 }}
            />

            <IserActionCardListForm<
              ProductOptionValues,
              AddProductsToCartMutationVariables
            >
              layout='grid'
              {...other}
              name={fieldName}
              control={control}
              required
              items={values}
              render={render}
              rules={{
                required: i18n._(/* i18n*/ 'Please select a value for ‘{label}’', { displayName }),
              }}
            />
          </Box>
        )
      })}
    </Box>
  )
}
