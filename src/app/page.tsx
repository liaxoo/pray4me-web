
import type { Metadata } from 'next'
import LandingPage from '../components/LandingPage'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pray4me.app',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pray4Me',
  url: 'https://pray4me.app',
  logo: 'https://pray4me.app/img/logo.svg',
  sameAs: [],
  description: 'Pray4Me is a Christian prayer app where users submit anonymous prayer requests and pray for strangers around the world.',
}

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Pray4Me',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'LifestyleApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Submit anonymous prayer requests and pray for real people facing real struggles. Build a daily prayer habit with streaks and notifications.',
  url: 'https://pray4me.app',
  author: {
    '@type': 'Organization',
    name: 'Pray4Me',
    url: 'https://pray4me.app',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <LandingPage />
    </>
  )
}