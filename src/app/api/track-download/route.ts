import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter (resets on cold start, good enough for this use case)
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 5 // Max 5 requests per IP
const RATE_LIMIT_WINDOW = 60 * 1000 // Per minute

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const record = rateLimit.get(ip)
    
    if (!record || now > record.resetTime) {
        rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
        return false
    }
    
    if (record.count >= RATE_LIMIT_MAX) {
        return true
    }
    
    record.count++
    return false
}

// Clean up old entries periodically (prevent memory leak)
setInterval(() => {
    const now = Date.now()
    for (const [ip, record] of rateLimit.entries()) {
        if (now > record.resetTime) {
            rateLimit.delete(ip)
        }
    }
}, 60 * 1000)

interface DownloadAnalytics {
    platform: 'ios' | 'android' | 'other'
    referrer?: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    userAgent?: string
    language?: string
}

function getCountryFromHeaders(request: NextRequest): string {
    return request.headers.get('x-vercel-ip-country') || 
           request.headers.get('cf-ipcountry') || 
           'unknown'
}

function getCityFromHeaders(request: NextRequest): string {
    return request.headers.get('x-vercel-ip-city') || 'unknown'
}

function getClientIP(request: NextRequest): string {
    return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
           request.headers.get('x-real-ip') ||
           'unknown'
}

// Sanitize string to prevent injection (max length + trim)
function sanitize(str: string | undefined | null, maxLen: number = 500): string | null {
    if (!str) return null
    return String(str).slice(0, maxLen).trim() || null
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting by IP
        const clientIP = getClientIP(request)
        if (isRateLimited(clientIP)) {
            return NextResponse.json({ success: false, error: 'rate_limited' }, { status: 429 })
        }

        const data: DownloadAnalytics = await request.json()
        
        // Validate platform (required field)
        if (!data.platform || !['ios', 'android', 'other'].includes(data.platform)) {
            return NextResponse.json({ success: false, error: 'invalid_platform' }, { status: 400 })
        }
        
        const country = getCountryFromHeaders(request)
        const city = getCityFromHeaders(request)
        
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        
        if (!supabaseUrl || !supabaseAnonKey) {
            console.log('[DOWNLOAD] Supabase not configured')
            return NextResponse.json({ success: true })
        }
        
        // Insert with sanitized data
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
                referrer: sanitize(data.referrer, 2000),
                utm_source: sanitize(data.utm_source, 100),
                utm_medium: sanitize(data.utm_medium, 100),
                utm_campaign: sanitize(data.utm_campaign, 100),
                country: sanitize(country, 10),
                city: sanitize(city, 100),
                user_agent: sanitize(data.userAgent, 500),
                language: sanitize(data.language, 20)
            })
        })
        
        if (!response.ok) {
            console.error('[DOWNLOAD_ERROR]', await response.text())
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
