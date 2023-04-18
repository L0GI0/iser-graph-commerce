import { useEffect } from 'react'
import { WaitForQueries } from '@graphcommerce/ecommerce-ui'
import { PageOptions } from '@graphcommerce/framer-next-pages'
import {
  ApolloCartErrorAlert,
  CartStartCheckout,
  CartStartCheckoutLinkOrButton,
  IserCartStartCheckoutLinkOrButton,
  CartTotals,
  EmptyCart,
  useCartQuery,
} from '@graphcommerce/magento-cart'
import { CartPageDocument } from '@graphcommerce/magento-cart-checkout'
import { CouponAccordion } from '@graphcommerce/magento-cart-coupon'
import { CartItem, CartItems, IserCartItems } from '@graphcommerce/magento-cart-items'
import { ConfigurableCartItem } from '@graphcommerce/magento-product-configurable'
import { Money, PageMeta, StoreConfigDocument } from '@graphcommerce/magento-store'
import {
  GetStaticProps,
  iconShoppingBag,
  Stepper,
  LayoutTitle,
  LayoutOverlayHeader,
  FullPageMessage,
} from '@graphcommerce/next-ui'
import { i18n } from '@lingui/core'
import { Trans } from '@lingui/react'
import { Box, CircularProgress, Container } from '@mui/material'
// import useCart from '@vercel/commerce/cart/use-cart'
import { LayoutOverlay, LayoutOverlayProps } from '../components'
import { graphqlSharedClient } from '../lib/graphql/graphqlSsrClient'
import { Button } from '@graphcommerce/next-ui'
import useCart from '@vercel/shopify/src/cart/use-cart'

type Props = Record<string, unknown>
type GetPageStaticProps = GetStaticProps<LayoutOverlayProps, Props>

function CartPage() {
  // const cart = useCartQuery(CartPageDocument, { returnPartialData: true, errorPolicy: 'all' })
  // const { data, error } = cart
  // const hasItems =
  //   (data?.cart?.total_quantity ?? 0) > 0 &&
  //   typeof data?.cart?.prices?.grand_total?.value !== 'undefined'

  const { data, isLoading, isEmpty } = useCart()

  useEffect(() => {
    console.log(`Cart data = ${JSON.stringify(data)}`);
    console.log(`Is empty = ${isEmpty}`)
  }, [isLoading, isEmpty])

  const isLoadingTest = true;
  
  const fallback = 
    <FullPageMessage icon={<CircularProgress />} title={<Trans id='Loading' />}>
      <Trans id='This may take a second' />
    </FullPageMessage>

  return (
    <>
      <PageMeta
        title={i18n._(/* i18n */ 'Cart ({0})', { 0: data?.lineItems.length ?? 0 })}
        metaRobots={['noindex']}
      />
      <LayoutOverlayHeader
        switchPoint={0}
        primary={<IserCartStartCheckoutLinkOrButton cart={data} />}
        divider={
          <Container maxWidth='md'>
            <Stepper currentStep={!isEmpty  ? 1 : 0} steps={3} />
          </Container>
        }
      >
        <LayoutTitle size='small' component='span' icon={!isEmpty ? iconShoppingBag : undefined}>
          {!isEmpty  ? (
            <Trans
              id='Total <0/>'
              components={{ 0: <Money value={data?.totalPrice}/> }}
            />
          ) : (
            <Trans id='Cart' />
          )}
        </LayoutTitle>
      </LayoutOverlayHeader>

      {/* <WaitForQueries
        waitFor={cart}
        fallback={
          <FullPageMessage icon={<CircularProgress />} title={<Trans id='Loading' />}>
            <Trans id='This may take a second' />
          </FullPageMessage>
        }
      > */}
      { isLoading ? fallback :
        <Container maxWidth='md'>
          <>
            {!isEmpty ? (
              <Box sx={(theme) => ({ mt: theme.spacings.lg })}>
                <IserCartItems
                  items={data?.lineItems ?? []}
                  currencyCode={data?.currency.code ?? 'EUR'}
                  // id={data?.id ?? ''}
                  key='cart'
                />
                <CouponAccordion key='couponform' />
                <CartTotals containerMargin sx={{ typography: 'body1' }} />
                {/* <ApolloCartErrorAlert error={error} /> */}
                <Box key='checkout-button'>
                  <CartStartCheckout {...data} />
                </Box>
              </Box>
            ) : (
              <EmptyCart>
                Empy cart error
                <Button onClick={() => console.log(`button clicked`)}>Button</Button>
              </EmptyCart>
              
              // <EmptyCart>{error && <ApolloCartErrorAlert error={error} />}</EmptyCart>
            )}
          </>
        </Container>
      }
    </>
  )
}

const pageOptions: PageOptions<LayoutOverlayProps> = {
  overlayGroup: 'checkout',
  Layout: LayoutOverlay,
  layoutProps: { variantMd: 'bottom', variantSm: 'bottom' },
}
CartPage.pageOptions = pageOptions

export default CartPage

export const getStaticProps: GetPageStaticProps = async ({ locale }) => {

  return {
    props: {
    },
  }
}
