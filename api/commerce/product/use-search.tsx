import { useHook, useSWRHook } from '../utils/use-hook'
import { SWRFetcher } from '../utils/default-fetcher'
import type { HookFetcherFn, SWRHook } from '../utils/types'
import type { SearchProductsHook } from '../types/product'
import type { Provider } from '..'

export type UseSearch<
  H extends SWRHook<SearchProductsHook> = SWRHook<SearchProductsHook>
> = ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<SearchProductsHook> = SWRFetcher
//getting Handler
const fn = (provider: Provider) => provider.products?.useSearch!

const useSearch: UseSearch = (input) => {
  //The hook is a handler ({fetchOpdtions, fetcher, userHook})
  const hook = useHook(fn)
  return useSWRHook({ fetcher, ...hook })(input)
}

export default useSearch
