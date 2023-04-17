import { ApolloCartErrorSnackbar, useFormGqlMutationCart, useIserFormGqlMutationCart } from '@graphcommerce/magento-cart'
import { iconClose, IconSvg } from '@graphcommerce/next-ui'
import { i18n } from '@lingui/core'
import { Fab, SxProps, Theme, styled } from '@mui/material'
import { CartItemFragment } from '../Api/CartItem.gql'
import { RemoveItemFromCartDocument } from './RemoveItemFromCart.gql'
import { LineItem } from '@vercel/commerce/types/cart'
import { useRemoveItem } from '@vercel/shopify/src/cart'

export type RemoveIserItemFromCartProps = { item: LineItem } &
  Omit<JSX.IntrinsicElements['form'], 'onSubmit' | 'noValidate'> & { sx?: SxProps<Theme> }

const Form = styled('form')({})

export function RemoveIserItemFromCartFab(props: RemoveIserItemFromCartProps) {
  const {
    item,
    ...formProps
  } = props

  const removeItem = useRemoveItem()

  const form = useIserFormGqlMutationCart(removeItem, { defaultValues: { ...item } })
  const { handleSubmit, formState, error } = form
  const submitHandler = handleSubmit(() => {})

  return (
    <Form noValidate onSubmit={submitHandler} {...formProps}>
      <Fab
        aria-label={i18n._(/* i18n */ 'Remove Product')}
        size='small'
        type='submit'
        disabled={formState.isSubmitting}
      >
        <IconSvg src={iconClose} />
      </Fab>
      <ApolloCartErrorSnackbar error={error} />
    </Form>
  )
}
