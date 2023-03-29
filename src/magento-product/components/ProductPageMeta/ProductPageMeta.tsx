import { PageMeta } from '@graphcommerce/magento-store'
import { useCanonical } from '@graphcommerce/next-ui'
import { useProductLink } from '../../hooks/useProductLink'
import { useIserProductLink } from '@graphcommerce/magento-product/hooks/useIserProductLink'
import { ProductPageMetaFragment } from './ProductPageMeta.gql'
import { Product } from '@vercel/commerce/types/product'

export function ProductPageMeta(props: Product) {
  const {
    sku,
    price,
    images,
    name,
    description,
    slug,
    variants,
  } = props
  const productLink = useIserProductLink(slug)
  const canonical = useCanonical(productLink)

  return (
    <PageMeta
      title={name ?? ''}
      metaDescription={description ?? ''}
      canonical={productLink}
    >
      {sku && (
        <>
          <meta property='type' content='product' key='og-type' />
          <meta property='product:retailer_part_no' content={sku} key='og-sku' />
        </>
      )}
      {name && <meta property='og:title' content={name} key='og-title' />}
      {images?.[0]?.url && (
        <meta property='og:image' content={images[0].url} key='og-image' />
      )}
      {price?.retailPrice && (
        <meta
          property='product:price:amount'
          content={price?.retailPrice.toString()}
          key='og-price'
        />
      )}
      {price?.value && (
        <meta
          property='product:sale_price:amount'
          content={price.value.toString()}
          key='og-sale-price'
        />
      )}
      {price?.currencyCode && (
        <meta
          property='product:price:currency'
          content={price.currencyCode ?? 'EUR'}
          key='og-currency'
        />
      )}
      {/* {categories &&
        categories.map((category) =>
          category?.name ? (
            <meta property='product:category' content={category.name} key={category.uid} />
          ) : null,
        )} */}
      {canonical && <meta property='og:url' content={canonical} key='og-url' />}
    </PageMeta>
  )
}
