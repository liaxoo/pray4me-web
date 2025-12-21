'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface BlogImageProps {
    src: string
    alt: string
    caption?: string
    width?: number
    height?: number
    className?: string
}

export default function BlogImage({
    src,
    alt,
    caption,
    width = 800,
    height = 600,
    className = ""
}: BlogImageProps) {
    const [isOpen, setIsOpen] = useState(false)

    // Function to prevent scrolling when modal is open
    const toggleOpen = () => {
        if (!isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        setIsOpen(!isOpen)
    }

    return (
        <div className={`my-8 ${className}`} style={{ maxWidth: className?.includes('max-w-') ? undefined : '100%' }}>
            <div
                className="relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
                onClick={toggleOpen}
                style={{ width: 'fit-content' }}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="h-auto object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2 rounded-full transition-opacity duration-300">
                        <ZoomIn className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {caption && (
                <p className="mt-3 text-sm text-center text-gray-500 italic max-w-lg">
                    {caption}
                </p>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleOpen}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center p-2"
                            onClick={(e) => e.stopPropagation()} // Allow clicking image without closing? Actually better to close on background click, maybe image click too? User said "click to zoom". Usually click again to close.
                        >
                            <button
                                onClick={toggleOpen}
                                className="absolute -top-12 right-0 text-white/70 hover:text-white p-2 transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <div className="relative w-full h-auto max-h-[80vh] flex justify-center">
                                {/* Use simple img for raw full size display logic in lightbox or Next Image with style */}
                                <Image
                                    src={src}
                                    alt={alt}
                                    width={1920}
                                    height={1080}
                                    className="object-contain max-h-[80vh] w-auto h-auto rounded-lg shadow-2xl"
                                    onClick={toggleOpen} // Click image to close too
                                />
                            </div>

                            {caption && (
                                <p className="mt-4 text-white/90 text-center text-lg font-medium">
                                    {caption}
                                </p>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
