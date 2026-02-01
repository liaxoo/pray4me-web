
import type { Metadata } from 'next'
import LandingPage from '../components/LandingPage'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pray4me.app/',
  },
}

export default function Home() {
  return <LandingPage />
}