import { ActionCardItemRenderProps, RenderType } from '@graphcommerce/next-ui'
import { ConfigurableOptionValueColor } from '../ConfigurableOptionValueColor'
import { ConfigurableOptionValueImage } from '../ConfigurableOptionValueImage/ConfigurableOptionValueImage'
import { ConfigurableOptionValueText, ConfigurableIserOptionValueText } from '../ConfigurableOptionValueText'
import { ConfigurableOptionValueFragment } from './ConfigurableOptionValue.gql'
import { Product, ProductOption } from '@vercel/commerce/types/product'


export type IserConfigurabeOptionValueProps = ActionCardItemRenderProps<ProductOption>

export function IserConfigurableOptionValue(props: IserConfigurabeOptionValueProps) {
  const { __typename, value } = props

  return (
    <RenderType
      {...props}
      __typename={__typename ?? 'MultipleChoiceOption'}
      description={value ?? ''}
      renderer={{
        // ColorSwatchData: ConfigurableOptionValueColor,
        // ImageSwatchData: ConfigurableOptionValueImage,
        MultipleChoiceOption: ConfigurableIserOptionValueText,
      }}
    />
  )
}
