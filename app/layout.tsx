import {Toaster} from 'sonner'
import {Inter} from 'next/font/google'
import type {Metadata} from 'next'

import {ThemeProvider} from '@/components/providers/theme-provider'
import {ConvexClientProvider} from '@/components/providers/convex-provider'
import {ModalProvider} from '@/components/providers/modal-provider'
import {EdgeStoreProvider} from '@/lib/edgestore'

import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Sendtype',
  description: 'The connected workspace where better, faster work happens.',
  metadataBase: new URL('https://sendtype.vercel.app'),
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon/favicon.ico',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
    ],
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
    },
  },
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
              storageKey="sendtype-theme-2"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
