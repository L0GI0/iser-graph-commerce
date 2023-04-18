import { useCallback } from 'react'
import type { MutationHook } from '@vercel/commerce/utils/types'
import { CommerceError } from '@vercel/commerce/utils/errors'
import useAddItem, { UseAddItem } from '@vercel/commerce/cart/use-add-item'
import type { AddItemHook } from '@vercel/commerce/types/cart'
import useCart from './use-cart'

import {
  checkoutLineItemAddMutation,
  getCheckoutId,
  checkoutToCart,
  checkoutCreate,
} from '../utils'
import { Mutation, MutationCheckoutLineItemsAddArgs } from '../../schema'

export default useAddItem as UseAddItem<typeof handler>

export const handler: MutationHook<AddItemHook> = {
  fetchOptions: {
    query: checkoutLineItemAddMutation,
  },
  async fetcher({ input: item, options, fetch }) {
    console.log(`Adding item = ${JSON.stringify(item)}`)

    if (
      item.quantity &&
      (!Number.isInteger(item.quantity) || item.quantity! < 1)
    ) {
      throw new CommerceError({
        message: 'The item quantity has to be a valid integer greater than 0',
      })
    }

    const lineItems = [
      {
        variantId: item.variantId,
        quantity: item.quantity ?? 1,
      },
    ]

    let checkoutId = getCheckoutId()

    if (!checkoutId) {
      console.log(`CREATING CHECKOUT`)
      return checkoutToCart(await checkoutCreate(fetch, lineItems))
    } else {
      const { checkoutLineItemsAdd } = await fetch<
        Mutation,
        MutationCheckoutLineItemsAddArgs
      >({
        ...options,
        variables: {
          checkoutId,
          lineItems,
        },
      })
      console.log(`return checkoutToCart(checkoutLineItemsAdd)`)
      return checkoutToCart(checkoutLineItemsAdd)
    }
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { mutate } = useCart()
      return useCallback(
        async function addItem(input) {
          const data = await fetch({ input })
          await mutate(data, false)
          return data
        },
        [fetch, mutate]
      )
    },
}
