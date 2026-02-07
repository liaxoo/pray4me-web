import type { Metadata } from 'next'

// 1. FETCH METADATA (Server Side)
// This runs on the server, so it's perfect for fetching dynamic data for Open Graph tags.
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params

    // OPTIONAL: Fetch user name from Supabase here
    // const user = await supabase.from('users').select('name').eq('id', id).single()
    // const name = user?.name || 'Someone'
    const name = "a friend"

    const image = process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE || 'https://pray4me.app/default-og.png'

    return {
        title: `Pray using Pray4Me`,
        description: `Join ${name} in prayer on the Pray4Me app.`,
        robots: {
            index: false,
            follow: false,
        },
        openGraph: {
            title: `Pray for ${name}`,
            description: `Join ${name} in prayer.`,
            images: [image],
        },
        // Important for iOS Universal Links
        appleWebApp: {
            title: 'Pray4Me'
        },
    }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const appScheme = process.env.NEXT_PUBLIC_APP_SCHEME || 'pray4me'
    const appStoreId = process.env.NEXT_PUBLIC_APP_STORE_ID || 'YOUR_APP_ID'

    // Deep link for a specific prayer
    const appDeepLink = `${appScheme}://prayer/${id}`
    const fallbackUrl = `https://apps.apple.com/app/id${appStoreId}` // Fallback to App Store

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <h1>Opening Pray4Me...</h1>
            <p>If the app doesn't open, <a href={appDeepLink}>click here</a>.</p>

            {/* Automatic Client-Side Redirect */}
            <script dangerouslySetInnerHTML={{
                __html: `
        window.location.href = "${appDeepLink}";
        setTimeout(function() {
            // If the user is still here after 5 seconds, they likely don't have the app.
            // Increased timeout for Android compatibility to allow system prompts to appear.
            window.location.href = "/download?ref=prayer_${id}";
        }, 5000);
      `}} />
        </div>
    )
}
