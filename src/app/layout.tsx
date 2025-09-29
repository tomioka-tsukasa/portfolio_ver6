import type { Metadata } from 'next'
import { Cormorant_Garamond, Zen_Old_Mincho } from 'next/font/google'
import '@/styles/global/globals'
import StoreProvider from '@/app/store/provider'
import { GsapManager } from './components/GsapManager/GsapManager'

const zenOldMincho = Zen_Old_Mincho({
  variable: '--font-zen-old-mincho',
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'meta title',
  description: 'meta description',
  manifest: '/sakura_camera/assets/home-icon/manifest.json',
  openGraph: {
    title: 'meta title',
    siteName: 'meta title',
    description: 'meta description',
    url: 'https://projects-car-show.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://projects-car-show.vercel.app/og/og.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'ja_JP',
  },
  twitter: {
    images: 'https://projects-car-show.vercel.app/og/og.jpg',
    card: 'summary_large_image',
    description: 'meta description',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <StoreProvider>
      <GsapManager />
      <html lang='ja'>
        <body className={`${zenOldMincho.variable} ${cormorantGaramond.variable}`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  </>
}
