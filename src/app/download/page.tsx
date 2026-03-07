'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

const APP_STORE_ID = '6744624982'
const PLAY_STORE_ID = 'com.liaxo.prayforme'

const IOS_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`
const ANDROID_STORE_URL = `https://play.google.com/store/apps/details?id=${PLAY_STORE_ID}`

// Intent URI triggers the native Google Play bottom sheet in Chrome instead of navigating away
const ANDROID_INTENT_URL = `intent://details?id=${PLAY_STORE_ID}#Intent;scheme=market;action=android.intent.action.VIEW;package=com.android.vending;end`

type Platform = 'ios' | 'android' | 'desktop'

function detectPlatform(userAgent: string): Platform {
    if (/iPhone|iPad|iPod/.test(userAgent)) return 'ios'
    if (/Android/.test(userAgent)) return 'android'
    return 'desktop'
}

async function trackDownload(data: {
    platform: Platform
    referrer: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    userAgent: string
    language: string
}) {
    const SESSION_KEY = 'pray4me_download_tracked'
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY)) return

    try {
        if (navigator.sendBeacon) {
            navigator.sendBeacon('/api/track-download', JSON.stringify(data))
        } else {
            fetch('/api/track-download', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                keepalive: true,
            })
        }
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(SESSION_KEY, 'true')
        }
    } catch {
        // non-critical
    }
}

function DesktopView() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center p-8 font-outfit">
            <div className="max-w-lg w-full text-center">
                <Image
                    src="/img/logo.svg"
                    alt="Pray4Me"
                    width={72}
                    height={72}
                    className="mx-auto mb-6"
                />
                <h1 className="text-3xl font-bold mb-3 text-text">Download Pray4Me</h1>
                <p className="text-secondary mb-10 text-lg leading-relaxed">
                    Pray4Me is a mobile app. Open this page on your iPhone or Android phone to download,
                    or use the links below.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href={IOS_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-2xl font-semibold hover:bg-black/80 transition-colors"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <div className="text-left">
                            <div className="text-xs opacity-75 leading-none">Download on the</div>
                            <div className="text-base leading-tight">App Store</div>
                        </div>
                    </a>

                    <a
                        href={ANDROID_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-2xl font-semibold hover:bg-black/80 transition-colors"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0">
                            <path d="M3.18 23.76c.3.17.64.22.99.14l12.47-7.18-2.59-2.6-10.87 9.64zM.5 1.67C.19 2 0 2.5 0 3.14v17.71c0 .65.19 1.14.51 1.47l.08.07 9.91-9.9v-.23L.58 1.6l-.08.07zM20.9 10.06l-2.55-1.47-2.87 2.87 2.87 2.87 2.56-1.48c.73-.42.73-1.1-.01-1.79zM3.18.23l12.47 7.18-2.59 2.59L2.19.36c.3-.17.65-.2.99-.13z"/>
                        </svg>
                        <div className="text-left">
                            <div className="text-xs opacity-75 leading-none">Get it on</div>
                            <div className="text-base leading-tight">Google Play</div>
                        </div>
                    </a>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-2xl border border-tertiary max-w-xs mx-auto">
                    <Image
                        src="/img/screenshot.jpg"
                        alt="Pray4Me app screenshot"
                        width={375}
                        height={500}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}

function MobileRedirect({ platform }: { platform: Platform }) {
    const [showFallback, setShowFallback] = useState(false)
    const storeUrl = platform === 'ios' ? IOS_STORE_URL : ANDROID_STORE_URL

    useEffect(() => {
        const t = setTimeout(() => setShowFallback(true), 3500)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center p-6 font-outfit">
            <div className="text-center max-w-sm">
                <Image
                    src="/img/logo.svg"
                    alt="Pray4Me"
                    width={72}
                    height={72}
                    className="mx-auto mb-8"
                />

                <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-6" />

                <h1 className="text-2xl font-bold mb-2 text-text">
                    {platform === 'ios' ? 'Opening App Store…' : 'Opening Google Play…'}
                </h1>
                <p className="text-secondary mb-8">Please wait a moment.</p>

                {showFallback && (
                    <div className="space-y-3">
                        <p className="text-sm text-secondary">Not opening automatically?</p>
                        <a
                            href={storeUrl}
                            className="block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                        >
                            {platform === 'ios' ? 'Open App Store' : 'Open Google Play'}
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

function DownloadContent() {
    const searchParams = useSearchParams()
    const [platform, setPlatform] = useState<Platform | null>(null)

    useEffect(() => {
        const ua = navigator.userAgent
        const detected = detectPlatform(ua)
        setPlatform(detected)

        const utm_source = searchParams.get('utm_source') || searchParams.get('ref') || undefined
        const utm_medium = searchParams.get('utm_medium') || undefined
        const utm_campaign = searchParams.get('utm_campaign') || undefined

        trackDownload({
            platform: detected,
            referrer: document.referrer || 'direct',
            utm_source,
            utm_medium,
            utm_campaign,
            userAgent: ua,
            language: navigator.language || 'unknown',
        })

        if (detected === 'ios') {
            // First try to open the app (if installed it opens directly)
            // Then fall back to App Store after 600ms — Safari shows a native "Open in App Store" sheet
            window.location.href = 'pray4me://home'
            setTimeout(() => {
                window.location.href = IOS_STORE_URL
            }, 600)
        } else if (detected === 'android') {
            // First try to open the app (if installed)
            window.location.href = 'pray4me://home'
            setTimeout(() => {
                // Intent URI triggers the native Play Store bottom sheet in Chrome
                // instead of navigating to the Play Store website
                window.location.href = ANDROID_INTENT_URL
            }, 600)
        }
        // desktop: no redirect — show the DesktopView UI
    }, [searchParams])

    if (platform === null) {
        // SSR / initial render — neutral loading state
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
        )
    }

    if (platform === 'desktop') {
        return <DesktopView />
    }

    return <MobileRedirect platform={platform} />
}

export default function DownloadPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
            }
        >
            <DownloadContent />
        </Suspense>
    )
}
