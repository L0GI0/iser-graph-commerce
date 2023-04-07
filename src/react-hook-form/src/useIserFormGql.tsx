import {
  FetchResult,
  TypedDocumentNode,
  MutationTuple,
  ApolloError,
  LazyQueryResultTuple,
} from '@apollo/client'
import { useEffect, useRef } from 'react'
import { DefaultValues, FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form'
import diff from './diff'
import { useGqlDocumentHandler, UseGqlDocumentHandler } from './useGqlDocumentHandler'
import useAddItem from '@vercel/shopify/src/customer/address/use-add-item'


export type OnIserCompleteFn<Q, V> = (data: FetchResult<Q>, variables: V) => void | Promise<void>

type UseFormGraphQLCallbacks<Q, V> = {
  /**
   * Allows you to modify the variablels computed by the form to make it compatible with the GraphQL
   * Mutation. Also allows you to send false to skip submission.
   */
  onBeforeSubmit?: (variables?: V) => V | false | Promise<V | false>
  onComplete?: OnIserCompleteFn<Q, V>
}

export type UseIserFormGraphQlOptions<Q, V extends FieldValues> = UseFormProps<V> &
  UseFormGraphQLCallbacks<Q, V>

export type UseIserFormGqlMethods<Q, V extends FieldValues> = Omit<
  UseGqlDocumentHandler<V>,
  'encode' | 'type'
> &
  Pick<UseFormReturn<V>, 'handleSubmit'> & { data?: Q | null; error?: ApolloError }


type ItemDetails = {
  productId: string,
  variantId: string
}

/**
 * Combines useMutation/useLazyQuery with react-hook-form's useForm:
 *
 * - Automatically extracts all required arguments for a query
 * - Casts Float/Int mutation input variables to a Number
 * - Updates the form when the query updates
 * - Resets the form after submitting the form when no modifications are found
 */
export function useIserFormGql<Q, V extends FieldValues>(
  options: {
    // document: TypedDocumentNode<Q, V>
    form: UseFormReturn<V>
    // tuple: MutationTuple<Q, V> | LazyQueryResultTuple<Q, V>
    defaultValues?: UseFormProps<V>['defaultValues']
  } & UseFormGraphQLCallbacks<Q, V>,
): UseIserFormGqlMethods<Q, V> {
  // const { onComplete, onBeforeSubmit, document, form, tuple, defaultValues } = options
  const { onComplete, onBeforeSubmit, form, defaultValues } = options
  // const { encode, type, ...gqlDocumentHandler } = useGqlDocumentHandler<Q, V>(document)
  // const [execute, { data, error }] = tuple

  const addItem = useAddItem()

  // automatically updates the default values
  const initital = useRef(true)
  const valuesString = JSON.stringify(defaultValues)
  useEffect(() => {
    if (initital.current) {
      initital.current = false
      return
    }
    if (defaultValues instanceof Promise) return
    form.reset(defaultValues as DefaultValues<V>, { keepDirtyValues: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valuesString, form])

  const handleSubmit: UseFormReturn<V>['handleSubmit'] = (onValid, onInvalid) =>
    form.handleSubmit(async (formValues, event) => {
      // Combine defaults with the formValues and encode
      console.log(`HANDLE SUBMIT`)
      // let variables = encode({ ...defaultValues, ...formValues })
      console.log(`formValues = ${JSON.stringify(formValues)}`)

      let itemDetails;

      const variables = {
        test: 'test'
      }

      // Wait for the onBeforeSubmit to complete
      if (onBeforeSubmit) {
        itemDetails = await onBeforeSubmit(formValues)
        // if (res === false) return
        // variables = res
      }
      if (!itemDetails) onInvalid?.(formValues, event)



      // const result = await execute({ variables })
      await addItem(itemDetails)
      // if (onComplete && result.data) await onComplete(result, variables)

      // Reset the state of the form if it is unmodified afterwards
      if (typeof diff(form.getValues(), formValues) === 'undefined') form.reset(formValues)

      await onValid(formValues, event)
    }, onInvalid)

  return { handleSubmit }
}
