import { QueryResult } from '@graphcommerce/graphql'
import React, { startTransition, useEffect, useState } from 'react'

export type WaitForIserQueriesProps = {
  isLoading: boolean
  children: React.ReactNode
  fallback?: React.ReactNode
}

/** Shows the fallback during: SSR, Hydration and Query Loading. */
export const WaitForIserQueries = (props: WaitForIserQueriesProps) => {
  const { isLoading, fallback, children } = props

  // Make sure the first render is always the same as the server.
  // Make sure we we use startTransition to make sure we don't get into trouble with Suspense.
  const [mounted, setMounted] = useState(false)
  useEffect(() => startTransition(() => setMounted(true)), [])

  // We are done when all queries either have data or an error.
  const isDone = !isLoading

  return <>{isDone && mounted ? children : fallback}</>
}
