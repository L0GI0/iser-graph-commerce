import { useQuery } from '@graphcommerce/graphql'
import { ExtendableComponent, useNumberFormat } from '@graphcommerce/next-ui'
import { useThemeProps } from '@mui/material'
import { useMemo } from 'react'
import { MoneyFragment } from './Money.gql'
import { StoreConfigDocument } from './StoreConfig.gql'
import { ProductPrice } from '@vercel/commerce/types/product'

type OverridableProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  round?: boolean
  /** @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters */
  // eslint-disable-next-line react/no-unused-prop-types
  formatOptions?: Intl.NumberFormatOptions
}

export type IserMoneyProps = ProductPrice & OverridableProps

const name = 'Money'

/** Expose the component to be exendable in your theme.components */
declare module '@mui/material/styles/components' {
  interface Components {
    Money?: Pick<ExtendableComponent<OverridableProps>, 'defaultProps'>
  }
}

export function IserMoney(props: IserMoneyProps) {
  const { currencyCode, value, round = false, formatOptions } = useThemeProps({ name, props })

  // const { data: config } = useQuery(StoreConfigDocument)
  const config = {
    storeConfig: {
      base_currency_code: "EUR"
    }
  }

  const digits = (value ?? 0) % 1 !== 0

  const options: Intl.NumberFormatOptions = useMemo(
    () => ({
      style: 'currency',
      currency: currencyCode ?? config?.storeConfig?.base_currency_code ?? '',
      ...(round && !digits && { minimumFractionDigits: 0 }),
      ...(round && digits && { minimumFractionDigits: 2 }),
      ...(!round && { minimumFractionDigits: 2 }),
      ...formatOptions,
    }),
    // [config?.storeConfig?.base_currency_code, currency, digits, formatOptions, round],
    [currencyCode, digits, formatOptions, round],

  )
  const numberFormatter = useNumberFormat(options)

  if (typeof value === 'undefined' || value === null) return null

  return <>{numberFormatter.format(value)}</>
}
