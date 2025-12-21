import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllPosts, urlFor } from '../../../sanity'
import Footer from '../../components/Footer'
import { ChevronLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Blog - Pray4Me',
    description: 'Read the latest stories, guides, and updates from the Pray4Me community.',
    openGraph: {
        title: 'Blog - Pray4Me',
        description: 'Read the latest stories, guides, and updates from the Pray4Me community.',
        type: 'website',
    },
}

export default async function BlogIndex() {
    const posts = await getAllPosts()

    return (
        <main className="min-h-screen bg-background text-text font-outfit">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-tertiary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            <Image src="/img/logo.svg" alt="Pray4Me Logo" width={40} height={40} />
                            <span className="text-xl font-bold">Pray4Me</span>
                        </Link>

                        <Link
                            href="/"
                            className="flex items-center text-secondary hover:text-primary transition-colors font-medium"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-tertiary/30">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        Insights on prayer, community, and faith.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => {
                            const imageUrl = post.featuredImage
                                ? urlFor(post.featuredImage).width(600).height(400).url()
                                : '/img/blog-placeholder.jpg'

                            const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })

                            // Calculate reading time
                            const wordCount = post.content
                                ?.filter((block: any) => block._type === 'block')
                                .reduce((count: number, block: any) => {
                                    const text = block.children?.map((child: any) => child.text).join(' ') || ''
                                    return count + text.split(' ').length
                                }, 0) || 0
                            const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`

                            return (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug.current}`}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-tertiary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="text-sm font-medium mb-1 opacity-90">{formattedDate} • {readingTime}</div>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-secondary line-clamp-3 mb-6">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-primary font-semibold flex items-center group-hover:underline">
                                            Read Article
                                        </span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
