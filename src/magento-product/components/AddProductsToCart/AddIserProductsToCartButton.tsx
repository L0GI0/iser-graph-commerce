import { Button, ButtonProps } from '@graphcommerce/next-ui'
import { Trans } from '@lingui/react'
import {
  useAddIserProductsToCartAction,
  UseAddIserProductsToCartActionProps,
} from './useAddIserProductsToCartAction'

export type AddIserProductsToCartButtonProps = UseAddIserProductsToCartActionProps &
  Pick<
    ButtonProps<'button'>,
    | 'variant'
    | 'color'
    | 'size'
    | 'fullWidth'
    | 'startIcon'
    | 'endIcon'
    | 'onClick'
    | 'sx'
    | 'children'
  >

export function AddIserProductsToCartButton(props: AddIserProductsToCartButtonProps) {
  const { children } = props
  const action = useAddIserProductsToCartAction(props)

  return (
    <Button type='submit' color='primary' variant='pill' size='large' {...props} {...action}>
      {children || <Trans id='Add to Cart' />}
    </Button>
  )
}
