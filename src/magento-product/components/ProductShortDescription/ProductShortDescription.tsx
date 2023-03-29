import { extendableComponent } from '@graphcommerce/next-ui'
import { SxProps, Theme, Typography } from '@mui/material'
import { ProductShortDescriptionFragment } from './ProductShortDescription.gql'
import { Product } from '@vercel/commerce/types/product'

type ProductShortDescriptionProps = { description: Product['descriptionHtml']} & { sx?: SxProps<Theme> }

const { classes } = extendableComponent('ProductShortDescription', ['description'] as const)

export function ProductShortDescription(props: ProductShortDescriptionProps) {
  const { description, sx = [] } = props

  return (
    <Typography
      variant='body1'
      component='div'
      className={classes.description}
      dangerouslySetInnerHTML={{ __html: description ?? '' }}
      sx={[
        {
          '& > p:first-of-type': { marginTop: 0 },
          '& > p:last-of-type': { marginBottom: 0 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  )
}
