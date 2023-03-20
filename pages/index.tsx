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
import { ContainerWithHeader } from '@graphcommerce/next-ui'
import PageLink from 'next/link'
import { Link } from '@mui/material'
import { SimpleProductItems } from '@graphcommerce/magento-product/components/ProductListItems/SimpleProductItems'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Product } from '@vercel/commerce/types/product'

type Props = { products: Array<Product>}
type RouteProps = { url: string }
type GetPageStaticProps = GetStaticProps<LayoutNavigationProps, Props, RouteProps>

function CmsPage(props: Props) {
  // const { pages, products } = props
  // const page = pages?.[0]
  // const product = products?.items?.[0]


  const { products } = props;

  console.log(`page = ${JSON.stringify(products, null, 3)}`);

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

      {/* {content?.map((item) => (
        <RenderType key={item.id} renderer={mergedRenderer} {...item} />
      ))} */}
      <RowHeroBanner
        heroAsset={{url: "https://www.shutterstock.com/shutterstock/videos/1088327201/preview/stock-footage-chiusaforte-italy-rolling-shots-of-two-cars-bmw-m-and-bmw-m-racing-at-high-speed-in.webm"}} 
        pageLinks={[{title: "Shop Art", url: "/men/art"}]}/>
    
    
      <ContainerWithHeader
        title={'Most popular in performance'}
        rightArea={
          <PageLink href={''} key={''} passHref>
            <Link color='inherit' href={''} underline='always'>
              {"View most pupular"}
            </Link>
          </PageLink>
        }
      >
        <SimpleProductItems title={'Best of Iser Performance'} {...products} size='small' titleComponent='h3' />
      </ContainerWithHeader>


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

  const { products } = await productsPromise;

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
        products,
      },
    revalidate: 60 * 20,
  }
}
