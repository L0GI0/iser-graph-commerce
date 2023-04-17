import { RenderType, TypeRenderer } from '@graphcommerce/next-ui'
import { Box } from '@mui/material'
import { CartItemsFragment } from '../Api/CartItems.gql'
import { IserCartItem } from '@graphcommerce/magento-cart-items/CartItem/IserCartItem'
import { LineItem } from '@vercel/commerce/types/cart'

export type IserCartItemRenderer = TypeRenderer<NonNullable<NonNullable<CartItemsFragment['items']>[0]>>

export type IserCartProps = { items: LineItem[], currencyCode: string }

export function IserCartItems(props: IserCartProps) {
  const { items, currencyCode } = props

  return (
    <>
      {items?.map((item) => {
        if (!item?.id || !item.variantId) return null
        return (
          <Box key={item.id}>
            <IserCartItem item={item} currencyCode={currencyCode}/>
          </Box>
        )
      })}
    </>
  )
}
