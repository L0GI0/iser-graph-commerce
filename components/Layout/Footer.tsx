import { Image } from '@graphcommerce/image'
import { StoreSwitcherButton } from '@graphcommerce/magento-store'
import { Footer as FooterBase } from '@graphcommerce/next-ui'
import { Trans } from '@lingui/react'
import { Button, IconButton, Link } from '@mui/material'
import PageLink from 'next/link'
import { FooterQueryFragment } from './FooterQueryFragment.gql'

export type FooterProps = FooterQueryFragment

export function Footer(props: FooterProps) {
  // const { footer } = props

  const footer = {
    "socialLinks": [
       {
          "title": "LinkedIn",
          "url": "https://www.linkedin.com/",
          "description": null,
          "asset": {
             "url": "https://media.graphassets.com/IbRYG48HQZy6jkHXbg1A",
             "width": 24,
             "height": 24,
             "mimeType": "image/svg+xml",
             "size": 1367,
             "alt": null
          }
       },
       {
          "title": "Facebook",
          "url": "https://www.facebook.com/",
          "description": null,
          "asset": {
             "url": "https://media.graphassets.com/nPrSPDvuSlaH1v7RMtQe",
             "width": 24,
             "height": 24,
             "mimeType": "image/svg+xml",
             "size": 946,
             "alt": null
          }
       },
       {
          "title": "Twitter",
          "url": "https://twitter.com/graphcommerce",
          "description": null,
          "asset": {
             "url": "https://media.graphassets.com/hBVGbMYSamZORCYL8QEh",
             "width": 24,
             "height": 24,
             "mimeType": "image/svg+xml",
             "size": 1746,
             "alt": null
          }
       },
       {
          "title": "Instagram",
          "url": "https://www.instagram.com/",
          "description": null,
          "asset": {
             "url": "https://media.graphassets.com/umAAlfrLTnGRjBwqQhNA",
             "width": 24,
             "height": 24,
             "mimeType": "image/svg+xml",
             "size": 3607,
             "alt": null
          }
       }
    ],
    "copyright": "© Iser Performance® 2022",
    "legalLinks": [
       {
          "title": "Terms and conditions",
          "url": "/terms-and-conditions",
          "description": null,
          "asset": null
       },
       {
          "title": "Credits",
          "url": "/credits",
          "description": null,
          "asset": null
       },
       {
          "title": "Subscribe",
          "url": "/newsletter",
          "description": {
             "raw": {
                "children": [
                   {
                      "type": "paragraph",
                      "children": [
                         {
                            "text": ""
                         }
                      ]
                   }
                ]
             }
          },
          "asset": null
       }
    ]
 }

  return (
    <FooterBase
      socialLinks={footer?.socialLinks?.map((link) => (
        <PageLink key={link.title} href={link.url} passHref>
          <IconButton color='inherit' size='medium' edge='start'>
            {link.asset ? (
              <Image
                layout='fill'
                src={link.asset.url}
                width={24}
                height={24}
                unoptimized
                alt={link.title}
                sx={(theme) => ({
                  filter: theme.palette.mode === 'dark' ? 'invert(100%)' : 'invert(0%)',
                })}
              />
            ) : (
              link.title
            )}
          </IconButton>
        </PageLink>
      ))}
      storeSwitcher={<StoreSwitcherButton />}
      customerService={
        <PageLink href='/service' passHref>
          <Button variant='pill'>
            <Trans id='Customer Service' />
          </Button>
        </PageLink>
      }
      copyright={
        <>
          <span>{footer?.copyright}</span>
          {footer?.legalLinks?.map((link) => (
            <PageLink key={link.title} href={link.url} passHref>
              <Link color='textPrimary' underline='always'>
                {link.title}
              </Link>
            </PageLink>
          ))}
        </>
      }
    />
  )
}
