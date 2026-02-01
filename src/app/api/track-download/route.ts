import { NextRequest, NextResponse } from 'next/server'

interface DownloadAnalytics {
    platform: 'ios' | 'android' | 'other'
    referrer: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    userAgent: string
    language: string
}

// Region detection from Vercel/Cloudflare headers
function getCountryFromHeaders(request: NextRequest): string {
    return request.headers.get('x-vercel-ip-country') || 
           request.headers.get('cf-ipcountry') || 
           'unknown'
}

function getCityFromHeaders(request: NextRequest): string {
    return request.headers.get('x-vercel-ip-city') || 'unknown'
}

export async function POST(request: NextRequest) {
    try {
        const data: DownloadAnalytics = await request.json()
        
        const country = getCountryFromHeaders(request)
        const city = getCityFromHeaders(request)
        
        // Supabase config - uses anon key (safe for server-side)
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        
        if (!supabaseUrl || !supabaseAnonKey) {
            console.log('[DOWNLOAD] Supabase not configured, logging only:', {
                platform: data.platform,
                country,
                utm_source: data.utm_source || 'direct',
                referrer: data.referrer
            })
            return NextResponse.json({ success: true })
        }
        
        // Insert using anon key - RLS policy allows inserts
        const response = await fetch(`${supabaseUrl}/rest/v1/download_analytics`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': supabaseAnonKey,
                'Authorization': `Bearer ${supabaseAnonKey}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                platform: data.platform,
                referrer: data.referrer || null,
                utm_source: data.utm_source || null,
                utm_medium: data.utm_medium || null,
                utm_campaign: data.utm_campaign || null,
                country: country,
                city: city,
                user_agent: data.userAgent,
                language: data.language
            })
        })
        
        if (!response.ok) {
            const errorText = await response.text()
            console.error('[DOWNLOAD_ERROR] Supabase insert failed:', errorText)
        } else {
            console.log('[DOWNLOAD] Tracked:', data.platform, country, data.utm_source || 'direct')
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('[DOWNLOAD_ERROR]', error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Use POST to track downloads' }, { status: 405 })
}
