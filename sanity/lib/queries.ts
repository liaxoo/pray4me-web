import { client } from './client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface BlogPost {
    _id: string
    title: string
    slug: {
        current: string
    }
    author: string
    publishedAt: string
    excerpt?: string
    featuredImage?: SanityImageSource
    content: any[] // Portable Text
    seo?: {
        metaTitle?: string
        metaDescription?: string
    }
}

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
    const posts = await client.fetch<BlogPost[]>(
        `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      featuredImage,
      content,
      seo
    }`
    )
    return posts
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const post = await client.fetch<BlogPost | null>(
        `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      featuredImage,
      content,
      seo
    }`,
        { slug }
    )
    return post
}

// Get latest N posts
export async function getLatestPosts(limit: number = 3): Promise<BlogPost[]> {
    const posts = await client.fetch<BlogPost[]>(
        `*[_type == "post"] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      featuredImage
    }`
    )
    return posts
}

// Get all slugs for static generation
export async function getAllPostSlugs(): Promise<string[]> {
    const slugs = await client.fetch<string[]>(
        `*[_type == "post"].slug.current`
    )
    return slugs
}
