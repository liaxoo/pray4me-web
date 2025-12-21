'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download } from 'lucide-react'
import Link from 'next/link'

export default function BlogCTA() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary relative mt-16 rounded-3xl mx-auto max-w-7xl mb-16 overflow-visible">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 overflow-hidden rounded-3xl">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center h-full">
        <div className="text-white lg:col-span-6 py-4 relative z-20">
          <h2 className="text-3xl font-bold mb-4">
            Join the global prayer community
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Download the Pray4Me app today. It's free, anonymous, and impactful.
          </p>

          <div>
            <Link
              href="/#download-section"
              className="inline-flex bg-white text-primary px-8 py-3 rounded-full font-bold items-center justify-center space-x-2 shadow-lg hover:bg-white/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download for Free</span>
            </Link>
          </div>
        </div>

        {/* Absolute positioned image container that breaks out of bounds */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2 pointer-events-none z-10 overflow-visible">
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 1 }}
            whileInView={{
              y: '30%',
              x: '50%',
              opacity: 1,
              scale: 1.75
            }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              transformOrigin: 'bottom right'
            }}
          >
            <Image
              src="/img/double.png"
              alt="Pray4Me App Interface"
              width={3200}
              height={2400}
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
