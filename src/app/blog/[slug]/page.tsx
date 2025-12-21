'use client'

import { useEffect, useState, useRef } from 'react'
import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { getPostBySlug, urlFor } from '../../../../sanity'
import type { BlogPost } from '../../../../sanity/lib/queries'
import { SanityContent } from '../../../components/SanityContent'
import Footer from '../../../components/Footer'
import BlogCTA from '../../../components/BlogCTA'
import ScrollProgress from '../../../components/ScrollProgress'

export default function BlogPostClient() {
    const params = useParams()
    const slug = params.slug as string
    const [post, setPost] = useState<BlogPost | null>(null)
    const [loading, setLoading] = useState(true)
    const articleRef = useRef<HTMLElement>(null)

    useEffect(() => {
        getPostBySlug(slug)
            .then(setPost)
            .catch(() => setPost(null))
            .finally(() => setLoading(false))
    }, [slug])

    if (loading) {
        return (
            <main className="min-h-screen bg-background text-text font-outfit">
                <div className="h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            </main>
        )
    }

    if (!post) {
        notFound()
    }

    const featuredImageUrl = post.featuredImage
        ? urlFor(post.featuredImage).width(1200).height(600).url()
        : '/img/blog-placeholder.jpg'

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const wordCount = post.content
        .filter((block: any) => block._type === 'block')
        .reduce((count: number, block: any) => {
            const text = block.children?.map((child: any) => child.text).join(' ') || ''
            return count + text.split(' ').length
        }, 0)
    const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`

    return (
        <main className="min-h-screen bg-background text-text font-outfit">
            <ScrollProgress targetRef={articleRef} />

            {/* Navigation */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-tertiary"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            <Image src="/img/logo.svg" alt="Pray4Me Logo" width={40} height={40} />
                            <span className="text-xl font-bold">Pray4Me</span>
                        </Link>

                        <Link
                            href="/blog"
                            className="flex items-center text-secondary hover:text-primary transition-colors font-medium"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[60vh] min-h-[400px] w-full mt-16"
            >
                <Image
                    src={featuredImageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute bottom-0 left-0 w-full p-4 sm:p-8 pb-12"
                >
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                            {post.title}
                        </h1>
                        <div className="flex items-center space-x-6 text-white/90">
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-5 h-5" />
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5" />
                                <span>{readingTime}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Content */}
            <article ref={articleRef} className="py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="prose prose-lg prose-p:text-secondary prose-headings:text-text prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
                        <SanityContent content={post.content} />
                    </div>

                    <hr className="my-12 border-tertiary" />

                    <BlogCTA />
                </motion.div>
            </article>

            <Footer />
        </main>
    )
}
