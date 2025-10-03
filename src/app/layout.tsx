import type { Metadata } from 'next'
import { Playfair_Display, Zen_Old_Mincho } from 'next/font/google'
import '@/styles/global/globals'
import '@/styles/global.css'
import StoreProvider from '@/app/store/provider'
import { GsapManager } from './components/GsapManager/GsapManager'
import Canvas from './components/Canvas/Canvas'
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen'
import { Menu } from './components/Menu/Menu'

const zenOldMincho = Zen_Old_Mincho({
  variable: '--font-zen-old-mincho',
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900'],
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
        <body className={`${zenOldMincho.variable} ${playfairDisplay.variable}`}>
          <Canvas />
          <LoadingScreen />
          <Menu />
          {children}
        </body>
      </html>
    </StoreProvider>
  </>
}
