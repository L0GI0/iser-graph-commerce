import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloLink,
  InMemoryCache,
  TypePolicies,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { createCacheReviver } from '../createCacheReviver'
import { errorLink } from '../errorLink'
import fragments from '../generated/fragments.json'
import { measurePerformanceLink } from '../measurePerformanceLink'
import { MigrateCache } from '../migrateCache'
import { mergeTypePolicies } from '../typePolicies'

export const globalApolloClient: { current: ApolloClient<NormalizedCacheObject> | null } = {
  current: null,
}

export type GraphQLProviderProps = AppProps & {
  children: React.ReactNode
  /** Additional ApolloLink to add to the chain. */
  links?: ApolloLink[]
  /**
   * This is a list of type policies which are used to influence how cache is handled.
   * https://www.apollographql.com/docs/react/caching/cache-field-behavior/
   */
  policies?: TypePolicies[]
  /**
   * To upgrade the local storage to a new version when the app is updated, but the client isn't
   * yet, we run these migrations.
   */
  migrations?: MigrateCache[]
}

/**
 * The GraphQLProvider allows us to configure the ApolloClient and provide it to the rest of the
 * app. This component is heavily intercepted by various plugins.
 *
 * Take a look at the props to see possible customization options.
 */
export function GraphQLProvider(props: GraphQLProviderProps) {
  const { children, policies = [], migrations = [], links = [], pageProps } = props
  const state = (pageProps as { apolloState?: NormalizedCacheObject }).apolloState

  const [client] = useState(() => {
    const link = ApolloLink.from([
      ...(typeof window === 'undefined' ? [errorLink, measurePerformanceLink] : []),
      ...links,
      // The actual Http connection to the Mesh backend.
      new HttpLink({ uri: '/api/graphql', credentials: 'same-origin' }),
    ])

    const createCache = () =>
      new InMemoryCache({
        possibleTypes: fragments.possibleTypes,
        typePolicies: mergeTypePolicies(policies),
      })

    const apolloClient = new ApolloClient({
      link,
      cache: createCache(),
      name: 'web',
      ssrMode: typeof window === 'undefined',
    })
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    createCacheReviver(apolloClient, createCache, policies, migrations, state)
    return apolloClient
  })
  globalApolloClient.current = client

  return <ApolloProvider client={globalApolloClient.current}>{children}</ApolloProvider>
}
