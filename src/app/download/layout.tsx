import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Download',
    description: 'Download Pray4Me – the anonymous Christian prayer app. Available on iOS and Android. Submit prayer requests and pray for strangers around the world.',
    alternates: {
        canonical: 'https://pray4me.app/download',
    },
    openGraph: {
        title: 'Download Pray4Me',
        description: 'Download the anonymous Christian prayer app. Available on iOS and Android.',
        url: 'https://pray4me.app/download',
        type: 'website',
    },
}

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
    return children
}
