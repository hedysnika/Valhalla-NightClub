import { Navigation } from '@/components/navigation'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import type { AppType } from 'next/app'
import { Notifications } from '@mantine/notifications';
import { MantineProvider } from "@mantine/core";
import { Footer } from '@/components/footer';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
    <MantineProvider withNormalizeCSS withGlobalStyles>
    <Notifications />
  <Component {...pageProps} />
    </MantineProvider>
    </div>

  )
}

export default appWithTranslation(MyApp);