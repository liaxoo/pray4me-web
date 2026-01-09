'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import type { RefObject } from 'react'

interface ScrollProgressProps {
    // Use a more loose type to accept strict null checks
    targetRef?: RefObject<HTMLElement | null>
}

export default function ScrollProgress({ targetRef }: ScrollProgressProps) {
    const { scrollYProgress } = useScroll(
        targetRef ? {
            target: targetRef,
            offset: ["start start", "end end"]
        } : {}
    )

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })


    return (
        <motion.div
            className="fixed bottom-0 left-0 right-0 h-1 bg-text origin-left z-50"
            style={{ scaleX }}
        />
    )
}
