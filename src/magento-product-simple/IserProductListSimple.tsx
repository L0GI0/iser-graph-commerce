import { ProductListItemSimpleFragment } from './ProductListItemSimple.gql'
import { IserProductListItem, ProductListItemProps } from '@graphcommerce/magento-product/components/ProductListItem/IserProductListItem'
import { Product } from '@vercel/commerce/types/product'

export type ProductListItemSimpleProps = ProductListItemProps

export function ProductListItemSimple(props: ProductListItemSimpleProps) {
  return <IserProductListItem {...props} />
}
