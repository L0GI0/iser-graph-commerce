import { FramerNextPages } from '@graphcommerce/framer-next-pages'
import { GraphQLProvider } from '@graphcommerce/graphql'
import { GlobalHead } from '@graphcommerce/magento-store'
import {
  CssAndFramerMotionProvider,
  DarkLightModeThemeProvider,
  PageLoadIndicator,
} from '@graphcommerce/next-ui'
import { CssBaseline } from '@mui/material'
import { AppProps } from 'next/app'
import { lightTheme, darkTheme } from '../components/theme'
import { I18nProvider } from '../lib/i18n/I18nProvider'
import { CommerceProvider } from '@vercel/shopify/src'

export default function ThemedApp(props: AppProps) {
  const { router } = props
  const { locale = 'en' } = router

  return (
    <CssAndFramerMotionProvider>
      <I18nProvider key={locale} locale={locale}>
        <CommerceProvider locale={locale}>
        {/* <GraphQLProvider {...props}> */}
          <DarkLightModeThemeProvider light={lightTheme} dark={darkTheme}>
            <GlobalHead />
            <CssBaseline />
            <PageLoadIndicator />
            <FramerNextPages {...props} />
          </DarkLightModeThemeProvider>
          </CommerceProvider>
        {/* </GraphQLProvider> */}
      </I18nProvider>
    </CssAndFramerMotionProvider>
  )
}
