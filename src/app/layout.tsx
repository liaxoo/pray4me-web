import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pray4me.app'),
  title: 'Pray4Me - Global Prayer Community',
  description: 'You don\'t need much time - 5 minutes a day is plenty - and it can help someone in need.',
  keywords: 'prayer, community, faith, spiritual, help, support, christian, global',
  authors: [{ name: 'Pray4Me Team' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Pray4Me - Global Prayer Community',
    description: 'You don\'t need much time - 5 minutes a day is plenty - and it can help someone in need.',
    url: 'https://pray4me.app',
    siteName: 'Pray4Me',
    images: [
      {
        url: 'https://pray4me.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pray4Me - Global Prayer Community',
    description: 'You don\'t need much time - 5 minutes a day is plenty - and it can help someone in need.',
    images: ['https://pray4me.app/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit`}>{children}</body>
    </html>
  )
}  