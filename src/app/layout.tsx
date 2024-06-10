export const dynamic = 'force-dynamic'

import type {Metadata} from 'next'
import './globals.css'
import {ThemeProvider} from '@/lib/providers/next-theme-provider'
import {DM_Sans} from 'next/font/google'
import {twMerge} from 'tailwind-merge'
import AppStateProvider from '@/lib/providers/state-provider'
import {SupabaseUserProvider} from '@/lib/providers/supabase-user-provider'
import {Toaster} from '@/components/ui/toaster'
import {SocketProvider} from '@/lib/providers/socket-provider'

const primaryFont = DM_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Sendtype',
  description:
    'Sendtype is a single space where you can think, write, and plan. Capture thoughts, manage projects, or even run an entire company — and do it exactly the way you want.',
  metadataBase: new URL('https://sendtype.vercel.app'),
  icons: {
    icon: '/images/favicon/favicon.ico',
    shortcut: '/images/favicon/favicon.ico',
    apple: [
      {
        url: '/images/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/images/favicon/favicon.ico',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/images/favicon/favicon-32x32.png',
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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={twMerge('bg-background', primaryFont.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppStateProvider>
            <SupabaseUserProvider>
              <SocketProvider>
                {children}
                <Toaster />
              </SocketProvider>
            </SupabaseUserProvider>
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
