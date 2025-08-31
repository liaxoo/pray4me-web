'use client'

import { useState } from 'react'
import { X, Download, Smartphone, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface BetaDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BetaDownloadModal({ isOpen, onClose }: BetaDownloadModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            
            {/* Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-text">Join the Beta</h3>
              
              <p className="text-secondary mb-6 leading-relaxed">
                Get early access to new features and help us improve the app with your valuable feedback.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm text-secondary">
                  <Smartphone className="w-4 h-4" />
                  <span>Available on iOS and Android</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-secondary">
                  <Zap className="w-4 h-4" />
                  <span>Early features & valuable feedback opportunity</span>
                </div>
              </div>
              
              {/* Download buttons */}
              <div className="flex flex-col gap-3 items-center">
                <a
                  href="https://testflight.apple.com/join/YCePX2uC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-text text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-text/90 transition-all duration-300 shadow-lg w-48"
                >
                  <Download className="w-4 h-4" />
                  <span>iOS Beta</span>
                </a>
                
                <a
                  href="https://play.google.com/store/apps/details?id=com.liaxo.prayforme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-text text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-text/90 transition-all duration-300 shadow-lg w-48"
                >
                  <Download className="w-4 h-4" />
                  <span>Android Beta</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

// Hook for using the modal
export function useBetaDownloadModal() {
  const [isOpen, setIsOpen] = useState(false)
  
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  
  return {
    isOpen,
    openModal,
    closeModal,
    BetaDownloadModal: (props: Omit<BetaDownloadModalProps, 'isOpen' | 'onClose'>) => (
      <BetaDownloadModal {...props} isOpen={isOpen} onClose={closeModal} />
    )
  }
}
