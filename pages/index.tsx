import { RowHeroBanner } from 'components/GraphCMS/RowHeroBanner/RowHeroBanner'
import { PageOptions } from '@graphcommerce/framer-next-pages'
import { ProductListDocument, ProductListQuery } from '@graphcommerce/magento-product'
import { StoreConfigDocument } from '@graphcommerce/magento-store'
import { GetStaticProps, LayoutHeader, MetaRobots, PageMeta } from '@graphcommerce/next-ui'
import commerce from 'api/commerce'
import { LayoutNavigation, LayoutNavigationProps, RowProduct, RowRenderer } from '../components'
import { LayoutDocument } from '../components/Layout/Layout.gql'
import { DefaultPageDocument, DefaultPageQuery } from '../graphql/DefaultPage.gql'
import { graphqlSharedClient, graphqlSsrClient } from '../lib/graphql/graphqlSsrClient'

type Props = DefaultPageQuery & ProductListQuery
type RouteProps = { url: string }
type GetPageStaticProps = GetStaticProps<LayoutNavigationProps, Props, RouteProps>

function CmsPage(props: GetPageStaticProps) {
  // const { pages, products } = props
  // const page = pages?.[0]
  // const product = products?.items?.[0]

  // console.log(`page = ${JSON.stringify(page, null, 3)}`);

  // console.log(`Product = ${JSON.stringify(product, null, 3)}`)

  // console.log(`Products = ${JSON.stringify(products?.items, null, 3)}`)

  return (
    <>
      {/* <PageMeta
        title={page?.metaTitle ?? page?.title ?? ''}
        metaDescription={page?.metaDescription ?? ''}
        metaRobots={page?.metaRobots.toLowerCase().split('_') as MetaRobots[] | undefined}
        canonical='/'
      /> */}

      <LayoutHeader floatingMd floatingSm />

      <>
      {/* {content?.map((item) => (
        <RenderType key={item.id} renderer={mergedRenderer} {...item} />
      ))} */}
      <RowHeroBanner
        heroAsset={{url: "https://media.graphassets.com/aFZrDZNCSZCiGlq6oZnC"}} 
        pageLinks={[{title: "Shop Art", url: "/men/art"}]}/>
    </>

      {/* {page && (
        <RowRenderer
          content={page.content}
          // renderer={{
          //   RowProduct: (rowProps) => (
          //     <RowProduct {...rowProps} {...product} items={products?.items} />
          //   ),
          // }}
        />
      )} */}
    </>
  )
}

CmsPage.pageOptions = {
  Layout: LayoutNavigation,
} as PageOptions

export default CmsPage

export const getStaticProps = async ({ preview, locale, locales }) => {
  // const client = graphqlSharedClient(locale)
  // const staticClient = graphqlSsrClient(locale)

  const config = { locale, locales }

  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })

  // const conf = client.query({ query: StoreConfigDocument })
  // const page = staticClient.query({ query: DefaultPageDocument, variables: { url: `page/home` } })
  // const layout = staticClient.query({ query: LayoutDocument })

  // todo(paales): Remove when https://github.com/Urigo/graphql-mesh/issues/1257 is resolved
  // const productList = staticClient.query({
  //   query: ProductListDocument,
  //   variables: { pageSize: 8, filters: { category_uid: { eq: 'MTAy' } } },
  // })

  // if (!(await page).data.pages?.[0]) return { notFound: true }

  return {
    props: {
      // ...(await page).data,
      // ...(await layout).data,
      // ...(await productList).data,
      // apolloState: await conf.then(() => client.cache.extract()),
    },
    revalidate: 60 * 20,
  }
}
