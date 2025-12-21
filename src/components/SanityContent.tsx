import { PortableText, type PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '../../sanity'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const components: PortableTextComponents = {
    types: {
        image: ({ value }: { value: any }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className="my-8">
                    <Image
                        src={urlFor(value as SanityImageSource).width(800).url()}
                        alt={value.alt || 'Blog image'}
                        width={800}
                        height={600}
                        className="rounded-lg"
                    />
                    {value.caption && (
                        <p className="text-center text-sm text-gray-600 mt-2 italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            )
        },
    },
    block: {
        h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">
                {children}
            </h3>
        ),
        normal: ({ children }) => (
            <p className="mb-4 text-gray-700 leading-relaxed">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-gray-700">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
                {children}
            </ol>
        ),
    },
    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a
                    href={value.href}
                    rel={rel}
                    className="text-primary hover:underline"
                >
                    {children}
                </a>
            )
        },
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
    },
}

export function SanityContent({ content }: { content: any }) {
    return <PortableText value={content} components={components} />
}
