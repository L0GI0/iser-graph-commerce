import Cookies from 'js-cookie'
import { useHook, useSWRHook } from '../utils/use-hook'
import type { SWRHook, HookFetcherFn } from '../utils/types'
import type { GetCartHook } from '../types/cart'
import { Provider, useCommerce } from '..'

export type UseCart<H extends SWRHook<GetCartHook> = SWRHook<GetCartHook>> =
  ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<GetCartHook> = async ({
  options,
  input: { cartId },
  fetch,
}) => {
  return cartId ? await fetch(options) : null
}

const fn = (provider: Provider) => provider.cart?.useCart!

const useCart: UseCart = (input) => {
  const hook = useHook(fn) // hook is useCart object
  const { cartCookie } = useCommerce()
  console.log(`Cart cookie = ${cartCookie}`)
  const fetcherFn = hook.fetcher ?? fetcher // uses handler.fetcher
  // wraps fetcher into a wrapper
  const wrapper: typeof fetcher = (context) => {
    context.input.cartId = Cookies.get(cartCookie)
    console.log(`context.input.cartId = ${context.input.cartId}`)
    console.log(`CONTEXT = ${JSON.stringify(context)}`)
    return fetcherFn(context)
  }
  return useSWRHook({ ...hook, fetcher: wrapper })(input)
}

export default useCart
