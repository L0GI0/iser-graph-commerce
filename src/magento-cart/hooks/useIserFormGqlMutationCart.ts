import { MutationHookOptions, TypedDocumentNode } from '@graphcommerce/graphql'
import {
  useFormGqlMutation,
  useIserFormGqlMutation,
  UseFormGqlMutationReturn,
  UseFormGraphQlOptions,
} from '@graphcommerce/react-hook-form'
import { useCartIdCreate } from './useCartIdCreate'

export function useIserFormGqlMutationCart<
  Q extends Record<string, any>,
  V extends { cartId: string; [index: string]: unknown },
>(
  options: UseFormGraphQlOptions<Q, V> = {},
  operationOptions?: MutationHookOptions<Q, V>,
): UseFormGqlMutationReturn<Q, V> {
  const cartId = useCartIdCreate()

  const onBeforeSubmit = async (variables: V) => {
    console.log(`useIserFormGqlMutationCart - onBeforeSubmit()`)
    const vars = { ...variables, cartId: await cartId() }
    return options.onBeforeSubmit ? options.onBeforeSubmit(vars) : vars
  }
  const result = useIserFormGqlMutation<Q, V>(
    { ...options, onBeforeSubmit },
    { errorPolicy: 'all', ...operationOptions },
  )

  return result
}
