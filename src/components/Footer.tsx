import Image from 'next/image'
import { Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-text text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/img/logo.svg" alt="Pray4Me Logo" width={32} height={32} />
              <span className="text-xl font-bold">Pray4Me</span>
            </div>
            <p className="text-white/80 mb-6">
              No one is alone in prayer.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>





            <div>
              <h3 className="font-semibold mb-4">Download</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="https://testflight.apple.com/join/YCePX2uC" className="hover:text-white transition-colors">iOS Beta</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.liaxo.prayforme" className="hover:text-white transition-colors">Android Beta</a></li>
              </ul>
            </div>            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="mailto:support@pray4me.com" className="hover:text-white transition-colors">support@pray4me.com</a></li>
              </ul>
            </div>

                        <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/pray4meapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="bg-white/10 hover:bg-primary/80 text-white rounded-full p-3 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/pray4meapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-white/10 hover:bg-primary/80 text-white rounded-full p-3 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>
          
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 Pray4Me. All rights reserved.</p>
          <p className="mt-2">
            Created by{' '}
            <a 
              href="https://x.com/sebascdev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              @sebascdev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
