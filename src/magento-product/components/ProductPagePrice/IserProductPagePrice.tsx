import { useWatch } from '@graphcommerce/ecommerce-ui'
import { Money } from '@graphcommerce/magento-store'
import { useFormAddProductsToCart } from '../AddProductsToCart'
import { ProductPagePriceFragment } from './ProductPagePrice.gql'
import { getProductTierPrice } from './getProductTierPrice'
import { ProductPrice } from '@vercel/commerce/types/product'

type IserProductPagePriceProps = { price: ProductPrice; index?: number }

export function IserProductPagePrice(props: IserProductPagePriceProps) {
  const { price, index = 0 } = props

  // const { control } = useFormAddProductsToCart()
  // const quantity = useWatch({ control, name: `cartItems.${index}.quantity` })

  return <Money {...price} />
}
