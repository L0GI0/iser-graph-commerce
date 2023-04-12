import { iconChevronRight, IconSvg, LinkOrButton, LinkOrButtonProps } from '@graphcommerce/next-ui'
import { Trans } from '@lingui/react'
import { SxProps, Theme } from '@mui/material'
import React from 'react'
import { CartStartCheckoutFragment } from './CartStartCheckout.gql'
import { Cart } from '@vercel/commerce/types/cart'

export type IserCartStartCheckoutLinkOrButtonProps = {
  children?: React.ReactNode
  cart: Cart
  sx?: SxProps<Theme>
  onStart?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    cart: Cart,
  ) => void
  linkOrButtonProps?: LinkOrButtonProps
}

export function IserCartStartCheckoutLinkOrButton(props: IserCartStartCheckoutLinkOrButtonProps) {
  const {
    children,
    onStart,
    linkOrButtonProps: { onClick, button, ...linkOrButtonProps } = {},
    cart
  } = props

  const hasTotals = (cart.totalPrice ?? 0) > 0
  // const hasErrors = cart.items?.some((item) => (item?.errors?.length ?? 0) > 0)

  return (
    <LinkOrButton
      href='/checkout'
      onClick={(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        onClick?.(e)
        onStart?.(e, cart)
      }}
      button={{ variant: 'pill', ...button }}
      disabled={!hasTotals}
      color='secondary'
      endIcon={<IconSvg src={iconChevronRight} />}
      {...linkOrButtonProps}
    >
      <Trans id='Next' />
    </LinkOrButton>
  )
}
