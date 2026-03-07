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
  title: {
    default: 'Pray4Me – Pray for Strangers Around the World',
    template: '%s | Pray4Me',
  },
  description: 'Pray4Me is a Christian prayer app where you can submit anonymous prayer requests and pray for real people facing real struggles — job loss, illness, family crises, and more. Just 5 minutes a day.',
  keywords: [
    'prayer app', 'christian app', 'pray for others', 'anonymous prayer requests',
    'prayer community', 'intercession', 'faith app', 'spiritual growth',
    'pray for strangers', 'christian community', 'prayer streaks', 'daily prayer',
  ],
  authors: [{ name: 'Pray4Me Team', url: 'https://pray4me.app' }],
  creator: 'Pray4Me',
  publisher: 'Pray4Me',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/img/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/img/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  other: {
    // Shows a native "Open in App Store" banner in iOS Safari on every page
    'apple-itunes-app': 'app-id=6744624982',
  },
  openGraph: {
    title: 'Pray4Me – Pray for Strangers Around the World',
    description: 'Submit anonymous prayer requests and pray for real people facing real struggles. Just 5 minutes a day can change someone\'s life.',
    url: 'https://pray4me.app',
    siteName: 'Pray4Me',
    images: [
      {
        url: 'https://pray4me.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pray4Me – Global Prayer Community',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pray4Me – Pray for Strangers Around the World',
    description: 'Submit anonymous prayer requests and pray for real people facing real struggles. Just 5 minutes a day.',
    images: ['https://pray4me.app/og-image.png'],
    creator: '@pray4meapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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