import { CartFab } from '@graphcommerce/magento-cart'
import { magentoMenuToNavigation } from '@graphcommerce/magento-category'
import { CustomerFab, CustomerMenuFabItem } from '@graphcommerce/magento-customer'
import { SearchLink } from '@graphcommerce/magento-search'
import { WishlistFab, WishlistMenuFabItem } from '@graphcommerce/magento-wishlist'
import {
  DesktopNavActions,
  DesktopNavBar,
  LayoutDefault,
  LayoutDefaultProps,
  iconCustomerService,
  iconHeart,
  NavigationFab,
  MenuFabSecondaryItem,
  PlaceholderFab,
  IconSvg,
  DesktopNavItem,
  DarkLightModeMenuSecondaryItem,
  iconChevronDown,
  NavigationProvider,
  NavigationOverlay,
  useNavigationSelection,
  useMemoDeep,
} from '@graphcommerce/next-ui'
import { i18n } from '@lingui/core'
import { Trans } from '@lingui/react'
import { Divider, Fab } from '@mui/material'
import { useRouter } from 'next/router'
import { Footer } from './Footer'
import { LayoutQuery } from './Layout.gql'
import { Logo } from './Logo'

export type LayoutNavigationProps = LayoutQuery &
  Omit<LayoutDefaultProps, 'footer' | 'header' | 'cartFab' | 'menuFab'>

  const IserPerformanceFooter = {
    id: "Iser Performance Social",
    socialLinks: [
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

export function LayoutNavigation(props: LayoutNavigationProps) {
  const { footer, menu, children, ...uiProps } = props

  const selection = useNavigationSelection()
  const router = useRouter()

  return (
    <>
      <NavigationProvider
        selection={selection}
        items={useMemoDeep(
          () => [
            <SearchLink
              href='/search'
              sx={(theme) => ({
                width: `calc(100% - ${theme.spacing(4)})`,
                m: 2,
                mb: theme.spacings.xs,
              })}
              aria-label={i18n._(/* i18n */ 'Search...')}
            >
              <Trans id='Search...' />
            </SearchLink>,
            { id: 'home', name: <Trans id='Home' />, href: '/' },
            {
              id: 'manual-item-one',
              href: `/${menu?.items?.[0]?.children?.[0]?.url_path}`,
              name: menu?.items?.[0]?.children?.[0]?.name ?? '',
            },
            {
              id: 'manual-item-two',
              href: `/${menu?.items?.[0]?.children?.[1]?.url_path}`,
              name: menu?.items?.[0]?.children?.[1]?.name ?? '',
            },
            ...magentoMenuToNavigation(menu, true),
            { id: 'blog', name: 'Blog', href: '/blog' },
            <Divider sx={(theme) => ({ my: theme.spacings.xs })} />,
            <CustomerMenuFabItem key='account' guestHref='/account/signin' authHref='/account'>
              <Trans id='Account' />
            </CustomerMenuFabItem>,
            <MenuFabSecondaryItem
              key='service'
              icon={<IconSvg src={iconCustomerService} size='medium' />}
              href='/service'
            >
              <Trans id='Customer Service' />
            </MenuFabSecondaryItem>,
            <WishlistMenuFabItem key='wishlist' icon={<IconSvg src={iconHeart} size='medium' />}>
              <Trans id='Wishlist' />
            </WishlistMenuFabItem>,
            <DarkLightModeMenuSecondaryItem key='darkmode' />,
          ],
          [menu],
        )}
      >
        <NavigationOverlay
          stretchColumns={false}
          variantSm='left'
          sizeSm='full'
          justifySm='start'
          itemWidthSm='70vw'
          variantMd='left'
          sizeMd='full'
          justifyMd='start'
          itemWidthMd='230px'
          mouseEvent='hover'
          itemPadding='md'
        />
      </NavigationProvider>

      <LayoutDefault
        {...uiProps}
        noSticky={router.asPath.split('?')[0] === '/'}
        header={
          <>
            <Logo />
            <DesktopNavBar>
              {menu?.items?.[0]?.children?.slice(0, 2).map((item) => (
                <DesktopNavItem key={item?.uid} href={`/${item?.url_path}`}>
                  {item?.name}
                </DesktopNavItem>
              ))}

              <DesktopNavItem onClick={() => selection.set([menu?.items?.[0]?.uid || ''])}>
                {menu?.items?.[0]?.name}
                <IconSvg src={iconChevronDown} />
              </DesktopNavItem>

              <DesktopNavItem href='/blog'>
                <Trans id='Blog' />
              </DesktopNavItem>
            </DesktopNavBar>

            <DesktopNavActions>
              {!router.pathname.startsWith('/search') && (
                <SearchLink href='/search' aria-label={i18n._(/* i18n */ 'Search...')} />
              )}
              <Fab
                href='/service'
                aria-label={i18n._(/* i18n */ 'Account')}
                size='large'
                color='inherit'
              >
                <IconSvg src={iconCustomerService} size='large' />
              </Fab>
              <WishlistFab icon={<IconSvg src={iconHeart} size='large' />} />
              <CustomerFab guestHref='/account/signin' authHref='/account' />
              {/* The placeholder exists because the CartFab is sticky but we want to reserve the space for the <CartFab /> */}
              <PlaceholderFab />
            </DesktopNavActions>
          </>
        }
        footer={<Footer footer={IserPerformanceFooter} />}
        cartFab={<CartFab />}
        menuFab={<NavigationFab onClick={() => selection.set([])} />}
      >
        {children}
      </LayoutDefault>
    </>
  )
}
