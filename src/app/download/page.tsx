'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

// App store IDs
const APP_STORE_ID = '6744624982'
const PLAY_STORE_ID = 'com.liaxo.prayforme'

// Store URLs - using https URLs which trigger native sheet behavior in Safari/Chrome
const IOS_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`
const ANDROID_STORE_URL = `https://play.google.com/store/apps/details?id=${PLAY_STORE_ID}`

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
    const [platform, setPlatform] = useState<Platform>('other')
    const [showFallback, setShowFallback] = useState(false)

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

        // Redirect to store (native sheet will appear)
        if (detectedPlatform === 'ios') {
            window.location.href = IOS_STORE_URL
        } else if (detectedPlatform === 'android') {
            window.location.href = ANDROID_STORE_URL
        } else {
            // Desktop - redirect to home after short delay
            setTimeout(() => {
                window.location.href = '/'
            }, 2000)
        }

        // Show fallback buttons after 3.5 seconds if user is still on page
        const fallbackTimer = setTimeout(() => {
            setShowFallback(true)
        }, 3500)

        return () => clearTimeout(fallbackTimer)
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
                    {platform === 'ios' && 'Opening App Store...'}
                    {platform === 'android' && 'Opening Play Store...'}
                    {platform === 'other' && 'Redirecting...'}
                </h1>

                <p className="text-secondary mb-8">
                    {platform === 'other' 
                        ? 'Download Pray4Me on your mobile device'
                        : 'Please wait a moment...'
                    }
                </p>

                {/* Fallback buttons - only show after 3.5 seconds */}
                {showFallback && (
                    <div className="space-y-3 animate-fade-in">
                        <p className="text-sm text-secondary">Not redirecting? Try these links:</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href={IOS_STORE_URL}
                                className="bg-text text-white px-6 py-3 rounded-full font-medium hover:bg-text/90 transition-colors"
                            >
                                App Store
                            </a>
                            <a
                                href={ANDROID_STORE_URL}
                                className="bg-text text-white px-6 py-3 rounded-full font-medium hover:bg-text/90 transition-colors"
                            >
                                Google Play
                            </a>
                        </div>
                    </div>
                )}
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
