import { Metadata } from 'next'

// 1. FETCH METADATA (Server Side)
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const id = params.id

    // OPTIONAL: Fetch prayer details from Supabase
    // const prayer = await supabase.from('prayers').select('title, user:users(name)').eq('id', id).single()
    // const title = prayer?.title || "a prayer request"
    // const userName = prayer?.user?.name || "Someone"

    const title = "a prayer request"
    const userName = "Someone"

    const appScheme = process.env.NEXT_PUBLIC_APP_SCHEME || 'pray4me'

    return {
        title: `Pray using Pray4Me`,
        description: `Join ${userName} in prayer: "${title}"`,
        openGraph: {
            title: `Pray for ${userName}`,
            description: `Join ${userName} in prayer: "${title}"`,
            images: [process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE || 'https://pray4me.app/default-og.png'],
        },
        appleWebApp: {
            title: 'Pray4Me'
        }
    }
}

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const appScheme = process.env.NEXT_PUBLIC_APP_SCHEME || 'pray4me'
    const appStoreId = process.env.NEXT_PUBLIC_APP_STORE_ID || 'YOUR_APP_ID'

    // Deep link for a specific prayer
    const appDeepLink = `${appScheme}://prayer/${id}`
    const fallbackUrl = `https://apps.apple.com/app/id${appStoreId}`

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

            <script dangerouslySetInnerHTML={{
                __html: `
        window.location.href = "${appDeepLink}";
        setTimeout(function() {
            window.location.href = "${fallbackUrl}";
        }, 2000);
      `}} />
        </div>
    )
}
