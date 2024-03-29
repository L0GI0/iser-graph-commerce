import { RenderType, responsiveVal } from '@graphcommerce/next-ui'
import { Box, BoxProps } from '@mui/material'
import { ProductListItemFragment } from '../../Api/ProductListItem.gql'
import { ProductListItemProps } from '../ProductListItem/ProductListItem'
import { ProductListItemRenderer } from './renderer'
import { ProductListItemSimple } from '@graphcommerce/magento-product-simple'
import { ProductWishlistChip } from '@graphcommerce/magento-wishlist'
import { ProductReviewSummary } from '@graphcommerce/magento-review'
import { AddProductsToCartFab } from '@graphcommerce/magento-product'
import { Product } from '@vercel/commerce/types/product'

export type ProductItemsGridProps = {
  items?:
    | Array<Product | null | undefined>
    | null
    | undefined
  loadingEager?: number
  title: string
  size?: 'normal' | 'small'
  sx?: BoxProps['sx']
} & Pick<ProductListItemProps, 'onClick' | 'titleComponent'>

export function SimpleProductItems(props: ProductItemsGridProps) {
  const {
    items,
    sx = [],
    loadingEager = 0,
    size = 'normal',
    titleComponent,
    onClick,
  } = props

  // check what is sku
  const sku = ''

  return (
    <Box
      sx={[
        (theme) => ({
          display: 'grid',
          gridColumnGap: theme.spacings.md,
          gridRowGap: theme.spacings.md,
        }),
        size === 'small' && {
          gridTemplateColumns: `repeat(auto-fill, minmax(${responsiveVal(150, 280)}, 1fr))`,
        },
        size === 'normal' && {
          gridTemplateColumns: { xs: `repeat(2, 1fr)`, md: `repeat(3, 1fr)`, lg: `repeat(4, 1fr)` },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {items?.map((item, idx) =>
        item ? (
          <ProductListItemSimple
            key={item.id ?? ''}
            sizes={
              size === 'small'
                ? { 0: '100vw', 354: '50vw', 675: '30vw', 1255: '23vw', 1500: '337px' }
                : { 0: '100vw', 367: '48vw', 994: '30vw', 1590: '23vw', 1920: '443px' }
            }
            {...item}
            loading={loadingEager > idx ? 'eager' : 'lazy'}
            titleComponent={titleComponent}
            onClick={onClick}
            aspectRatio={[1, 1]}
            bottomLeft={<ProductReviewSummary {...props} />}
            topRight={<ProductWishlistChip {...props} />}
            bottomRight={<AddProductsToCartFab sku={sku} />}
          />
        ) : null,
      )}
    </Box>
  )
}