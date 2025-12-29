import { Metadata } from 'next'

// 1. FETCH METADATA (Server Side)
// This runs on the server, so it's perfect for fetching dynamic data for Open Graph tags.
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const id = params.id

    // OPTIONAL: Fetch user name from Supabase here
    // const user = await supabase.from('users').select('name').eq('id', id).single()
    // const name = user?.name || 'Someone'
    const name = "a friend"

    const image = process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE || 'https://pray4me.app/default-og.png'

    return {
        title: `Pray using Pray4Me`,
        description: `Join ${name} in prayer on the Pray4Me app.`,
        openGraph: {
            title: `Pray for ${name}`,
            description: `Join ${name} in prayer.`,
            images: [image],
        },
        // Important for iOS Universal Links
        appleWebApp: {
            title: 'Pray4Me'
        }
    }
}

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const appScheme = process.env.NEXT_PUBLIC_APP_SCHEME || 'pray4me'
    const appStoreId = process.env.NEXT_PUBLIC_APP_STORE_ID || 'YOUR_APP_ID'

    // 2. THE REDIRECT LOGIC
    // We render a simple page that attempts to open the app immediately.
    // If the app is installed, the OS handles the scheme `pray4me://`

    const appDeepLink = `${appScheme}://user/${id}`
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
            // If the user is still here after 2 seconds, maybe they don't have the app.
            // Redirect to App Store? Or just stay here.
            // window.location.href = "${fallbackUrl}";
        }, 2000);
      `}} />
        </div>
    )
}
