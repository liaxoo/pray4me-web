'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

// App store IDs
const APP_STORE_ID = '6744624982'
const PLAY_STORE_ID = 'com.liaxo.prayforme'

// Store URLs
const IOS_STORE_URL = `itms-apps://itunes.apple.com/app/id${APP_STORE_ID}`
const ANDROID_STORE_URL = `market://details?id=${PLAY_STORE_ID}`
const IOS_FALLBACK_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`
const ANDROID_FALLBACK_URL = `https://play.google.com/store/apps/details?id=${PLAY_STORE_ID}`

type Platform = 'ios' | 'android' | 'other'

function detectPlatform(userAgent: string): Platform {
    if (/iPhone|iPad|iPod/.test(userAgent)) {
        return 'ios'
    }
    if (/Android/.test(userAgent)) {
        return 'android'
    }
    return 'other'
}

// Track download to our API
async function trackDownload(data: {
    platform: Platform
    referrer: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    userAgent: string
    language: string
}) {
    try {
        if (navigator.sendBeacon) {
            navigator.sendBeacon('/api/track-download', JSON.stringify(data))
        } else {
            fetch('/api/track-download', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                keepalive: true
            })
        }
    } catch (error) {
        console.error('Tracking error:', error)
    }
}

function DownloadContent() {
    const searchParams = useSearchParams()
    const [status, setStatus] = useState<'detecting' | 'redirecting' | 'fallback'>('detecting')
    const [platform, setPlatform] = useState<Platform>('other')

    useEffect(() => {
        const userAgent = navigator.userAgent
        const detectedPlatform = detectPlatform(userAgent)
        setPlatform(detectedPlatform)

        // Get UTM parameters for tracking influencer campaigns
        const utm_source = searchParams.get('utm_source') || searchParams.get('ref') || undefined
        const utm_medium = searchParams.get('utm_medium') || undefined
        const utm_campaign = searchParams.get('utm_campaign') || undefined

        // Track download attempt
        trackDownload({
            platform: detectedPlatform,
            referrer: document.referrer || 'direct',
            utm_source,
            utm_medium,
            utm_campaign,
            userAgent,
            language: navigator.language || 'unknown'
        })

        setStatus('redirecting')

        if (detectedPlatform === 'ios') {
            window.location.href = IOS_STORE_URL
            setTimeout(() => {
                window.location.href = IOS_FALLBACK_URL
            }, 1500)
        } else if (detectedPlatform === 'android') {
            window.location.href = ANDROID_STORE_URL
            setTimeout(() => {
                window.location.href = ANDROID_FALLBACK_URL
            }, 1500)
        } else {
            setStatus('fallback')
            setTimeout(() => {
                window.location.href = '/'
            }, 2000)
        }
    }, [searchParams])

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center p-6">
            <div className="text-center max-w-md">
                <div className="mb-8">
                    <Image
                        src="/img/logo.svg"
                        alt="Pray4Me"
                        width={80}
                        height={80}
                        className="mx-auto"
                    />
                </div>

                <div className="mb-6">
                    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"></div>
                </div>

                <h1 className="text-2xl font-bold text-text mb-3">
                    {status === 'detecting' && 'Detecting your device...'}
                    {status === 'redirecting' && platform === 'ios' && 'Opening App Store...'}
                    {status === 'redirecting' && platform === 'android' && 'Opening Play Store...'}
                    {status === 'fallback' && 'Redirecting to home...'}
                </h1>

                <p className="text-secondary mb-8">
                    {status === 'fallback' 
                        ? 'Download Pray4Me on your mobile device'
                        : 'Please wait a moment...'
                    }
                </p>

                <div className="space-y-3">
                    <p className="text-sm text-secondary">Not redirecting? Try these links:</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={IOS_FALLBACK_URL}
                            className="bg-text text-white px-6 py-3 rounded-full font-medium hover:bg-text/90 transition-colors"
                        >
                            App Store
                        </a>
                        <a
                            href={ANDROID_FALLBACK_URL}
                            className="bg-text text-white px-6 py-3 rounded-full font-medium hover:bg-text/90 transition-colors"
                        >
                            Google Play
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DownloadPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
        }>
            <DownloadContent />
        </Suspense>
    )
}
