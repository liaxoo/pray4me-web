import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pray4Me - Global Prayer Community',
  description: 'You don\'t need much time - 5 minutes a day is plenty - and it can help someone in need.',
  keywords: 'prayer, community, faith, spiritual, help, support, christian, global',
  authors: [{ name: 'Pray4Me Team' }],
  openGraph: {
    title: 'Pray4Me - Global Prayer Community',
    description: 'You don\'t need much time - 5 minutes a day is plenty - and it can help someone in need.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pray4Me - Global Prayer Community',
    description: 'You don\'t need much time - 5 minutes a day is plenty - and it can help someone in need.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/star.svg" type="image/svg+xml" />
      </head>
      <body className="font-outfit">{children}</body>
    </html>
  )
} 