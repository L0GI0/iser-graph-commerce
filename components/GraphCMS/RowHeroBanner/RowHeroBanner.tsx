import { PropsWithChildren } from 'react'
import { RichText } from '@graphcommerce/graphcms-ui'
import { breakpointVal, HeroBanner } from '@graphcommerce/next-ui'
import { Button, Typography, Box, TypographyProps } from '@mui/material'
import PageLink from 'next/link'
// import { RowHeroBannerFragment } from './RowHeroBanner.gql'

export type RowHeroBannerFragment = {
    heroAsset: {
      url: string,
      width?: number | null,
      height?: number | null,
      mimeType?: string | null,
      size?: number | null,
      alt?: string | null },
    copy?: { raw: any },
    pageLinks: Array<{
      title: string,
      url: string,
      description?: { raw: any } | null,
      asset?: {
        url: string,
        width?: number | null,
        height?: number | null,
        mimeType?: string | null,
        size?: number | null,
        alt?: string | null }
      | null }> };


const TransparentBoldText = (props: PropsWithChildren<TypographyProps>) => {
  const { sx, children } = props
  return <Typography
  sx={(theme) => ({
    marginTop: '0.5em',
    textTransform: 'uppercase' as const,
    maxWidth: '70%',
    textAlign: 'center' as const,
    margin: 0,
    marginBottom: theme.spacings.md,
    ...breakpointVal('fontSize', 36, 82, theme.breakpoints.values),
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      maxWidth: '100%',
    },
    '& strong': {
      WebkitTextFillColor: 'transparent',
      WebkitTextStroke: `1.2px #fff`,
    },
    sx
})}
{...props}
>{children}</Typography>
}

export function RowHeroBanner(props: RowHeroBannerFragment) {
  const { copy, heroAsset, pageLinks } = props

  return (
    <HeroBanner
      pageLinks={pageLinks.map((pageLink) => (
        <PageLink key={pageLink.url} href={pageLink.url} passHref>
          <Button variant='outlined' size='large' color='inherit'>
            {pageLink.title}
          </Button>
        </PageLink>
      ))}
      videoSrc={heroAsset.url}
    >
      <TransparentBoldText variant="h1">
        <Box component='strong' fontWeight='bold'>
          {"Roll "}
        </Box> 
        up your
        <Box component='strong' fontWeight='bold'>
          {" sleeves "}          
        </Box>
        and
        <Box component='strong' fontWeight='bold'>
          {" Discover"}          
        </Box>
          {" the art collection."}
      </TransparentBoldText>
    </HeroBanner>
  )
}
