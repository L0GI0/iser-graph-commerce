import type { SWRHook } from '@vercel/commerce/utils/types'
import type { GetCartHook } from '@vercel/commerce/types/cart'

import { useMemo } from 'react'
import useCommerceCart, { type UseCart } from '@vercel/commerce/cart/use-cart'

import { checkoutToCart } from '../utils'
import getCheckoutQuery from '../utils/queries/get-checkout-query'
import Cookies from 'js-cookie'

import {
  SHOPIFY_CHECKOUT_ID_COOKIE,
  SHOPIFY_CHECKOUT_URL_COOKIE,
} from '../const'

export default useCommerceCart as UseCart<typeof handler>

export const handler: SWRHook<GetCartHook> = {
  fetchOptions: {
    query: getCheckoutQuery,
  },
  async fetcher({ input: { cartId }, options, fetch }) {
    if (cartId) {
      console.log(`Cart id = ${cartId}`)
      const { node: checkout } = await fetch({
        ...options,
        variables: {
          checkoutId: cartId,
        },
      })
      if (checkout?.completedAt) {
        console.log(`REMOVING CACHE`)
        Cookies.remove(SHOPIFY_CHECKOUT_ID_COOKIE)
        Cookies.remove(SHOPIFY_CHECKOUT_URL_COOKIE)
        return null
      } else {
        console.log(`To checkout cart`)
        return checkoutToCart({
          checkout,
        })
      }
    }
    return null
  },
  useHook:
    ({ useData }) =>
    (input) => {
      const response = useData({
        swrOptions: { revalidateOnFocus: false, ...input?.swrOptions },
      })
      return useMemo(
        () =>
          Object.create(response, {
            isEmpty: {
              get() {
                return (response.data?.lineItems.length ?? 0) <= 0
              },
              enumerable: true,
            },
          }),
        [response]
      )
    },
}
