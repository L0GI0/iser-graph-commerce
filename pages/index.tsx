import { PageOptions } from '@graphcommerce/framer-next-pages'
import { ProductListDocument, ProductListQuery } from '@graphcommerce/magento-product'
import { StoreConfigDocument } from '@graphcommerce/magento-store'
import { GetStaticProps, LayoutHeader, MetaRobots, PageMeta } from '@graphcommerce/next-ui'
import { LayoutNavigation, LayoutNavigationProps, RowProduct, RowRenderer } from '../components'
import { LayoutDocument } from '../components/Layout/Layout.gql'
import { DefaultPageDocument, DefaultPageQuery } from '../graphql/DefaultPage.gql'
import { graphqlSharedClient, graphqlSsrClient } from '../lib/graphql/graphqlSsrClient'
import { ContainerWithHeader } from '@graphcommerce/next-ui'
import { Link } from '@mui/material'
import { RowHeroBanner } from 'components/GraphCMS/RowHeroBanner/RowHeroBanner'
import commerce from 'api/commerce'
import { Product } from '@vercel/commerce/types/product'
import { SimpleProductListItems } from '@graphcommerce/magento-product/components/ProductListItems/SimpleProductListItems'

type Props = {
  products: Product[]
}
type RouteProps = { url: string }
type GetPageStaticProps = GetStaticProps<LayoutNavigationProps, Props, RouteProps>

function CmsPage(props: Props) {
  // const { pages, latestList, favoritesList, swipableList } = props
  // const page = pages?.[0]

  const { products } = props;

  console.log(`Products = ${JSON.stringify(products, null, 3)}`)

  // const latest = latestList?.products?.items?.[0]
  // const favorite = favoritesList?.products?.items?.[0]
  // const swipable = swipableList?.products?.items?.[0]

  return (
    <>
      {/* <PageMeta
        title={page?.metaTitle ?? page?.title ?? ''}
        metaDescription={page?.metaDescription ?? ''}
        metaRobots={page?.metaRobots.toLowerCase().split('_') as MetaRobots[] | undefined}
        canonical='/'
      /> */}

      <LayoutHeader floatingMd floatingSm />

      <RowHeroBanner
        heroAsset={{url: "https://www.shutterstock.com/shutterstock/videos/1088327201/preview/stock-footage-chiusaforte-italy-rolling-shots-of-two-cars-bmw-m-and-bmw-m-racing-at-high-speed-in.webm"}} 
        pageLinks={[{title: "Shop Art", url: "/men/art"}]}/>
    
      <ContainerWithHeader
        title={'Most popular in performance'}
        rightArea={
          <Link color='inherit' href={'youtube.com'} key={'most-popular-link'} underline='always'>
          {'Most popular P-Designs'}
        </Link>
        }
      >
        <SimpleProductListItems title={'Best of Iser Performance'} items={products} size='small' titleComponent='h3' />
      </ContainerWithHeader>

      {/* {page && (
        <RowRenderer
          content={page.content}
          renderer={{
            RowProduct: (rowProps) => {
              const { identity } = rowProps

              if (identity === 'home-favorites')
                return (
                  <RowProduct {...rowProps} {...favorite} items={favoritesList.products?.items} />
                )
              if (identity === 'home-latest')
                return <RowProduct {...rowProps} {...latest} items={latestList.products?.items} />
              if (identity === 'home-swipable')
                return (
                  <RowProduct {...rowProps} {...swipable} items={swipableList.products?.items} />
                )
              return (
                <RowProduct {...rowProps} {...favorite} items={favoritesList.products?.items} />
              )
            },
          }}
        />
      )} */}
    </>
  )
}

CmsPage.pageOptions = {
  Layout: LayoutNavigation,
} as PageOptions

export default CmsPage

export const getStaticProps = async ({ locale, locales, preview }) => {
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

  const { products } = await productsPromise;

  // const conf = client.query({ query: StoreConfigDocument })
  // const page = staticClient.query({ query: DefaultPageDocument, variables: { url: `page/home` } })
  // const layout = staticClient.query({ query: LayoutDocument })

  // todo(paales): Remove when https://github.com/Urigo/graphql-mesh/issues/1257 is resolved
  // const favoritesList = staticClient.query({
  //   query: ProductListDocument,
  //   variables: { pageSize: 8, filters: { category_uid: { eq: 'MTIx' } } },
  // })

  // const latestList = staticClient.query({
  //   query: ProductListDocument,
  //   variables: { pageSize: 8, filters: { category_uid: { eq: 'MTAy' } } },
  // })

  // const swipableList = staticClient.query({
  //   query: ProductListDocument,
  //   variables: { pageSize: 8, filters: { category_uid: { eq: 'MTIy' } } },
  // })

  // if (!(await page).data.pages?.[0]) return { notFound: true }

  return {
    props: {
      products
      // ...(await page).data,
      // ...(await layout).data,
      // latestList: (await latestList).data,
      // favoritesList: (await favoritesList).data,
      // swipableList: (await swipableList).data,
      // apolloState: await conf.then(() => client.cache.extract()),
    },
    revalidate: 60 * 20,
  }
}
