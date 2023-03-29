import { PageOptions } from '@graphcommerce/framer-next-pages'
import {
  AddProductsToCartButton,
  AddProductsToCartError,
  AddProductsToCartForm,
  AddIserProductsToCartForm,
  AddProductsToCartFormProps,
  AddProductsToCartQuantity,
  getProductStaticPaths,
  jsonLdProduct,
  jsonLdProductOffer,
  ProductCustomizable,
  productPageCategory,
  ProductPageDescription,
  ProductPageMeta,
  ProductPagePrice,
  IserProductPagePrice,
  ProductPagePriceTiers,
  ProductShortDescription,
  ProductSidebarDelivery,
} from '@graphcommerce/magento-product'
import { BundleProductOptions } from '@graphcommerce/magento-product-bundle'
import {
  ConfigurableName,
  ConfigurablePrice,
  ConfigurablePriceTiers,
  ConfigurableProductOptions,
  ConfigurableProductPageGallery,
  ConfigurableIserProductPageGallery,
  defaultConfigurableOptionsSelection,
} from '@graphcommerce/magento-product-configurable'
import { DownloadableProductOptions } from '@graphcommerce/magento-product-downloadable'
import { jsonLdProductReview, ProductReviewChip } from '@graphcommerce/magento-review'
import { redirectOrNotFound, Money, StoreConfigDocument } from '@graphcommerce/magento-store'
import { ProductWishlistChipDetail } from '@graphcommerce/magento-wishlist'
import {
  GetStaticProps,
  JsonLd,
  LayoutHeader,
  LayoutTitle,
  isTypename,
} from '@graphcommerce/next-ui'
import { Trans } from '@lingui/react'
import { Box, Divider, Link, Typography } from '@mui/material'
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticPaths
} from 'next'
import {
  LayoutNavigation,
  LayoutNavigationProps,
  RowProduct,
  RowRenderer,
  Usps,
} from '../../components'
import { useRouter } from 'next/router'
import commerce from '@vercel/commerce'
import { LayoutDocument } from '../../components/Layout/Layout.gql'
import { ProductPage2Document, ProductPage2Query } from '../../graphql/ProductPage2.gql'
import { graphqlSharedClient, graphqlSsrClient } from '../../lib/graphql/graphqlSsrClient'
import { Product } from '@vercel/commerce/types/product'
import { IserProductPageGallery, ProductPageGalleryProps } from '@graphcommerce/magento-product'

// type Props = ProductPage2Query & Pick<AddProductsToCartFormProps, 'defaultValues'>
type Props = { product: Product }


type RouteProps = { url: string }
type GetPageStaticPaths = GetStaticPaths<RouteProps>
type GetPageStaticProps = GetStaticProps<LayoutNavigationProps, Props, RouteProps>

function ProductPage(props: Props) {
  const { product } = props


  console.log(`PRODUCT PAGE!!!!!!!`)

  // if (!product?.sku || !product.slug) return null

  return (
    <>
      <LayoutHeader floatingMd>
        <LayoutTitle size='small' component='span'>
          {product.name}
        </LayoutTitle>
      </LayoutHeader>
      <JsonLd
        item={{
          '@context': 'https://schema.org',
          ...jsonLdProduct(product),
          ...jsonLdProductOffer(product),
          // ...jsonLdProductReview(product),
        }}
      />
      <ProductPageMeta {...product} />

      <AddIserProductsToCartForm key={product.id} defaultValues={{}}>
        <IserProductPageGallery
          media_gallery={product.images}
          sx={(theme) => ({
            '& .SidebarGallery-sidebar': { display: 'grid', rowGap: theme.spacings.sm },
          })}
        >
          <div>
            {/* {isTypename(product, ['ConfigurableProduct', 'BundleProduct']) && (
              <Typography component='div' variant='body2' color='text.disabled'>
                <Trans
                  id='As low as <0/>'
                  components={{ 0: <Money {...product.price_range.minimum_price.final_price} /> }}
                />
              </Typography>
            )} */}

            <Typography variant='h3' component='div' gutterBottom>
              {/* {isTypename(product, ['ConfigurableProduct']) ? (
                <ConfigurableName product={product} />
              ) : ( */}
                { product.name }
              {/* )} */}
            </Typography>

            <ProductShortDescription
              description={product?.descriptionHtml}
              sx={(theme) => ({ mb: theme.spacings.xs })}
            />

            <ProductReviewChip rating={10} reviewSectionId='reviews' />
          </div>

          {/* {isTypename(product, ['ConfigurableProduct']) && ( */}
            {/* <ConfigurableProductOptions
              product={product}
              optionEndLabels={{
                size: (
                  <Link
                    href='/modal/product/global/size'
                    rel='nofollow'
                    color='primary'
                    underline='hover'
                  >
                    <Trans id='Which size is right?' />
                  </Link>
                ),
              }}
            /> */}
          {/* )} */}
          {/* {isTypename(product, ['BundleProduct']) && (
            <BundleProductOptions product={product} layout='stack' />
          )}
          {isTypename(product, ['DownloadableProduct']) && (
            <DownloadableProductOptions product={product} />
          )}
          {!isTypename(product, ['GroupedProduct']) && <ProductCustomizable product={product} />} */}

          <Divider />

          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              columnGap: theme.spacings.md,
            })}
          >
            <AddProductsToCartQuantity sx={{ flexShrink: '0' }} />

            {/* <AddProductsToCartError> */}
              <Typography component='div' variant='h3' lineHeight='1'>
                  {/* <ConfigurablePrice product={product} /> */}
                  <IserProductPagePrice price={product.price} />
                {/* )} */}
              </Typography>
            {/* </AddProductsToCartError> */}
          </Box>

          {/* {isTypename(product, ['ConfigurableProduct']) ? (
            <ConfigurablePriceTiers product={product} />
          ) : ( */}
            {/* <ProductPagePriceTiers product={product} /> */}
          {/* )} */}

          {/* <ProductSidebarDelivery product={product} /> */}

          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'start',
              columnGap: theme.spacings.xs,
            })}
          >
            {/* <AddProductsToCartButton fullWidth product={product} /> */}
            <ProductWishlistChipDetail {...product} />
          </Box>

          {/* <Usps usps={sidebarUsps} size='small' /> */}
        </IserProductPageGallery>
      </AddIserProductsToCartForm>

      {/* <ProductPageDescription {...product} right={<Usps usps={usps} />} fontSize='responsive' /> */}

      {/* {pages?.[0] && (
        <RowRenderer
          content={pages?.[0].content}
          renderer={{
            RowProduct: (rowProps) => (
              <RowProduct
                {...rowProps}
                {...product}
                items={products?.items}
                aggregations={products?.aggregations}
              />
            ),
          }}
        />
      )} */}
    </>
  )
}

ProductPage.pageOptions = {
  Layout: LayoutNavigation,
} as PageOptions

export default ProductPage

export const getStaticPaths: GetPageStaticPaths = async ({ locales = [] }) => {
  // if (import.meta.graphCommerce.legacyProductRoute) return { paths: [], fallback: false }
  // if (process.env.NODE_ENV === 'development') return { paths: [], fallback: 'blocking' }

  // const path = (locale: string) => getProductStaticPaths(graphqlSsrClient(locale), locale)
  // const paths = (await Promise.all(locales.map(path))).flat(1)
  const paths = [];

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params, locale, locales, preview }: GetStaticPropsContext<{ url: string }>) => {
  // if (import.meta.graphCommerce.legacyProductRoute) return { notFound: true }

  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const productPromise = commerce.getProduct({
    variables: { slug: params!.url },
    config,
    preview,
  })
  const allProductsPromise = commerce.getAllProducts({
    variables: { first: 4 },
    config,
    preview,
  })

  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  const { product } = await productPromise
  const { products: relatedProducts } = await allProductsPromise

  console.log(`Product = ${JSON.stringify(product, null, 3)}`)

  // const client = graphqlSharedClient(locale)
  // const staticClient = graphqlSsrClient(locale)

  // const urlKey = params?.url ?? '??'

  // const conf = client.query({ query: StoreConfigDocument })
  // const productPage = staticClient.query({
  //   query: ProductPage2Document,
  //   variables: { url: 'product/global', urlKey },
  // })
  // const layout = staticClient.query({ query: LayoutDocument })

  // const product = (await productPage).data.products?.items?.find((p) => p?.url_key === urlKey)
  // if (!product) return redirectOrNotFound(staticClient, params, locale)

  // const category = productPageCategory(product)
  // const up =
  //   category?.url_path && category?.name
  //     ? { href: `/${category.url_path}`, title: category.name }
  //     : { href: `/`, title: 'Home' }

  const up = { href: '/', title: 'Home' }

  return {
    props: {
      product,
      // ...defaultConfigurableOptionsSelection(urlKey, client, (await productPage).data),
      // ...(await layout).data,
      // apolloState: await conf.then(() => client.cache.extract()),
      up,
    },
    revalidate: 60 * 20,
  }
}
