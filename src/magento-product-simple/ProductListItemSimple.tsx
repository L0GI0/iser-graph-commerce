import { ProductListItem, ProductListItemProps } from '@graphcommerce/magento-product'
import { ProductListItemSimpleFragment } from './ProductListItemSimple.gql'

export type ProductListItemSimpleProps =  ProductListItemProps

export function ProductListItemSimple(props: ProductListItemSimpleProps) {
  return <ProductListItem {...props} />
}
