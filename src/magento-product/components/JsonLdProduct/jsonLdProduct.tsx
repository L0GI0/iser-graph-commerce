import type { ProductImage } from '@graphcommerce/graphql-mesh'
import type { Product as SchemaProduct} from 'schema-dts'
import { JsonLdProductFragment } from './JsonLdProduct.gql'
import { JsonLdProductOfferFragment } from './JsonLdProductOffer.gql'
import { Product } from '@vercel/commerce/types/product'

export function jsonLdProduct(props: Product): SchemaProduct {
  const { name, sku, images, vendor, descriptionHtml } = props

  return {
    '@type': 'Product',
    name: name ?? undefined,
    sku: sku ?? undefined,
    image: images
      ? images?.map((img) => (img as ProductImage)?.url ?? '')
      : undefined,
    category: vendor ?? undefined,
    description: descriptionHtml
      ? (descriptionHtml?? '').replace(/(<([^>]+)>)/gi, '')
      : undefined,
  }
}

/** @see https://developers.google.com/search/docs/advanced/structured-data/product */
export function jsonLdProductOffer(props: Product): Pick<SchemaProduct, 'offers'> {
  const { price } = props

  return {
    offers: {
      '@type': 'AggregateOffer',
      itemCondition: 'https://schema.org/NewCondition',
      offerCount: 1,
      priceCurrency: price.currencyCode ?? undefined,
      highPrice: price.retailPrice ?? undefined,
      lowPrice: price.value ?? undefined,
    },
  }
}
