import { MutationHookOptions, TypedDocumentNode, useMutation } from '@apollo/client'
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form'
import { useIserFormGql, UseIserFormGqlMethods, UseIserFormGraphQlOptions } from './useIserFormGql'
import { useFormMuiRegister, UseMuiFormRegister } from './useFormMuiRegister'
import { useFormValidFields, UseFormValidReturn } from './useFormValidFields'

export type UseIserFormGqlMutationReturn<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Q extends Record<string, any> = Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  V extends FieldValues = FieldValues,
> = UseIserFormGqlMethods<Q, V> &
  UseFormReturn<V> & { muiRegister: UseMuiFormRegister<V>; valid: UseFormValidReturn<V> }

export function isIserFormGqlOperation<
  V extends FieldValues,
  Q extends Record<string, unknown> = Record<string, unknown>,
>(form: UseFormReturn<V>): form is UseIserFormGqlMutationReturn<Q, V> {
  return typeof (form as UseIserFormGqlMutationReturn<Q, V>).muiRegister === 'function'
}

export function assertIserFormGqlOperation<
  V extends FieldValues,
  Q extends Record<string, unknown> = Record<string, unknown>,
>(form: UseFormReturn<V>): asserts form is UseIserFormGqlMutationReturn<Q, V> {
  if (typeof (form as UseIserFormGqlMutationReturn<Q, V>).muiRegister !== 'function') {
    throw Error(`form must be one of 'useFromGqlMutation' or 'useFormGqlQuery'`)
  }
}

/** Bindings between react-hook-form's useForm and Apollo Client's useMutation hook. */
export function useIserFormGqlMutation<Q extends Record<string, unknown>, V extends FieldValues>(
  options: UseIserFormGraphQlOptions<Q, V> = {},
  operationOptions?: MutationHookOptions<Q, V>,
): UseIserFormGqlMutationReturn<Q, V> {
  const form = useForm<V>(options)
  // const tuple = useMutation(document, operationOptions)

  const operation = useIserFormGql({ form, ...options })
  const muiRegister = useFormMuiRegister(form)
  // const valid = useFormValidFields(form, operation.required)
  // const valid = useFormValidFields(form, true)


  // return { ...form, ...operation, valid, muiRegister }
  return { ...form, ...operation, muiRegister }
}
