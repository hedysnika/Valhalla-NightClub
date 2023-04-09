import { Navigation } from '@/components/navigation'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import type { AppType } from 'next/app'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
    <Navigation />
  <Component {...pageProps} />
    </div>

  )
}

export default appWithTranslation(MyApp);