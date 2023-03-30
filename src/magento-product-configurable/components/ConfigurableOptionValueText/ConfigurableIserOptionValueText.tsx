import { ActionCard, ActionCardItemRenderProps } from '@graphcommerce/next-ui'
import { ConfigurableOptionValueTextFragment } from './ConfigurableOptionValueText.gql'
import { Product, ProductOption } from '@vercel/commerce/types/product'

export type ConfigurableIserOptionValueTextProps =
  ActionCardItemRenderProps<ProductOption>

export function ConfigurableIserOptionValueText(props: ConfigurableIserOptionValueTextProps) {
  const { __typename, size, value, ...actionCardProps } = props

  if (__typename !== 'MultipleChoiceOption')
    throw Error(`ConfigurableOptionValueText can not render a ${__typename}`)

  return (
    <ActionCard
      {...actionCardProps}
      value={value}
      size={size}
      title={value ?? ''}
      details={size !== 'small' && value}
    />
  )
}
