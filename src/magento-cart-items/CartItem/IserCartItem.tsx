import { Image } from '@graphcommerce/image'
import { useDisplayInclTax } from '@graphcommerce/magento-cart'
import { useProductLink } from '@graphcommerce/magento-product'
import { useIserProductLink } from '@graphcommerce/magento-product/hooks/useIserProductLink'
import { Money, IserMoney } from '@graphcommerce/magento-store'
import {
  responsiveVal,
  extendableComponent,
  filterNonNullableKeys,
  NextLink,
} from '@graphcommerce/next-ui'
import { Badge, Box, Link, SxProps, Theme } from '@mui/material'
import { CartItemFragment } from '../Api/CartItem.gql'
import { RemoveIserItemFromCartFab } from '../RemoveItemFromCart/RemoveIserItemFromCartFab'
import { UpdateItemQuantity } from '../UpdateItemQuantity/UpdateItemQuantity'
import { LineItem } from '@vercel/commerce/types/cart'

const rowImageSize = responsiveVal(70, 125)

export type IserCartItemProps = { item: LineItem } & {
  currencyCode: string,
  sx?: SxProps<Theme>
  children?: React.ReactNode
} & OwnerState

type OwnerState = { withOptions?: boolean }
const compName = 'CartItem' as const
const parts = [
  'item',
  'picture',
  'badge',
  'productLink',
  'image',
  'itemName',
  'itemPrice',
  'quantity',
  'rowPrice',
] as const
const { withState } = extendableComponent<OwnerState, typeof compName, typeof parts>(
  compName,
  parts,
)

export function IserCartItem(props: IserCartItemProps) {
  // const { product, errors, uid, prices, quantity, children, withOptions = true, sx = [] } = props
  const { item, currencyCode, children, withOptions = true, sx = [] } = props
  
  const { variant, id, variantId, name, path, quantity } = item;
  
  const productLink = useIserProductLink(path)
  const inclTaxes = useDisplayInclTax()

  const classes = withState({ withOptions })

  return (
    <Box
      className={classes.item}
      sx={[
        (theme) => ({
          display: 'grid',
          gridTemplate: `
            "picture itemName itemName itemName"
            "picture itemOptions itemOptions itemOptions"
            "picture itemPrice quantity rowPrice"`,
          gridTemplateColumns: `${rowImageSize} 1fr minmax(120px, 1fr) 1fr`,
          columnGap: theme.spacings.sm,
          alignItems: 'baseline',
          typography: 'body1',
          marginBottom: theme.spacings.lg,
          marginTop: theme.spacings.md,
          [theme.breakpoints.up('sm')]: {
            gridTemplate: `
              "picture itemName itemName itemName itemName"
              "picture itemOptions itemPrice quantity rowPrice"`,
            gridTemplateColumns: `${rowImageSize} 4fr 1fr minmax(120px, 1fr) minmax(75px, 1fr)`,
            marginBottom: theme.spacings.md,
          },

          '&:not(.withOptions)': {
            display: 'grid',
            gridTemplate: `
            "picture itemName itemName itemName"
            "picture itemPrice quantity rowPrice"`,
            alignItems: 'center',
            gridTemplateColumns: `${rowImageSize} 1fr minmax(120px, 1fr) 1fr`,
            [theme.breakpoints.up('sm')]: {
              gridTemplate: `
              "picture itemName itemPrice quantity rowPrice"
            `,
              gridTemplateColumns: `${rowImageSize} 4fr 1fr minmax(120px, 1fr) minmax(75px, 1fr)`,
            },
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Badge
        color='default'
        badgeContent={
          <RemoveIserItemFromCartFab
            item={item}
            className={classes.badge}
            sx={(theme) => ({
              '& > button': {
                background: theme.palette.background.paper,
                '&:hover, &:active, &:visited': {
                  background: theme.palette.background.paper,
                },
                [theme.breakpoints.down('md')]: {
                  width: 30,
                  height: 30,
                  minHeight: 'unset',
                },
              },
            })}
          />
        }
        component='div'
        className={classes.picture}
        overlap='circular'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={(theme) => ({
          gridArea: 'picture',
          width: rowImageSize,
          height: rowImageSize,
          padding: responsiveVal(5, 10),
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '50%',
          alignSelf: 'center',
        })}
      >
        <Box
          href={productLink}
          component={NextLink}
          className={classes.productLink}
          sx={{ display: 'block', width: '100%', borderRadius: '50%', overflow: 'hidden' }}
        >
          {variant?.image?.url && (
            <Image
              src={variant?.image?.url ?? ''}
              layout='fill'
              alt={ variant.name ?? name ?? ''}
              sizes={responsiveVal(70, 125)}
              className={classes.image}
              sx={(theme) => ({
                gridColumn: 1,
                backgroundColor: theme.palette.background.image,
                objectFit: 'cover',
                display: 'block',
                width: '110% !important',
                height: '110% !important',
                marginLeft: '-5%',
                marginTop: '-5%',
              })}
            />
          )}
        </Box>
      </Badge>

      <Box sx={{ gridArea: 'itemName' }}>
        <Link
          href={productLink}
          variant='body1'
          className={classes.itemName}
          underline='hover'
          sx={(theme) => ({
            typgrapht: 'subtitle1',
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.text.primary,
            textDecoration: 'none',
            flexWrap: 'nowrap',
            maxWidth: 'max-content',
            '&:not(.withOptions)': {
              alignSelf: 'flex-end',
            },
          })}
        >
          {name}
        </Link>

        {/* {filterNonNullableKeys(errors).map((error) => (
          <Box sx={{ color: 'error.main', typography: 'caption' }} key={error.message}>
            {error.message}
          </Box>
        ))} */}
      </Box>

      <Box
        className={classes.itemPrice}
        sx={(theme) => ({
          gridArea: 'itemPrice',
          textAlign: 'left',
          color: theme.palette.text.secondary,
          alignSelf: 'center',
          [theme.breakpoints.up('sm')]: {
            alignSelf: 'flex-start',
          },
        })}
      >
        {/* {inclTaxes ? (
          <IserMoney
            value={(prices?.row_total_including_tax?.value ?? 0) / quantity}
            currency={currencyCode}
          />
        ) : (
          <IserMoney {...prices?.price} />
        )} */}
          <IserMoney
            value={variant.price}
            currencyCode={currencyCode}
          />
      </Box>

      <Box
        className={classes.quantity}
        sx={(theme) => ({
          gridArea: 'quantity',
          justifySelf: 'right',
          transform: 'translateY(0)',
          [theme.breakpoints.up('sm')]: {
            transform: 'translateY(-6px)',
          },
        })}
      >
        <UpdateItemQuantity uid={id} quantity={quantity} />
      </Box>

      <Box
        className={classes.rowPrice}
        sx={(theme) => ({
          gridArea: 'rowPrice',
          textAlign: 'right',
          alignSelf: 'center',
          [theme.breakpoints.up('sm')]: {
            alignSelf: 'flex-start',
          },
        })}
      >
        {/* <Money {...(inclTaxes ? prices?.row_total_including_tax : prices?.row_total)} /> <br /> */}
        <IserMoney value={variant.price} /> <br />
      </Box>

      {children}
    </Box>
  )
}