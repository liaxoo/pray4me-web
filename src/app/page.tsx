'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { Download, ChevronLeft, ChevronRight, X, Check } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah M",
    quote: "Pray4Me has transformed the way I think about faith and connection. Highly recommend!",
    featured: true
  },
  {
    name: "Jason L.",
    quote: "Pray4Me has completely changed my daily routine. Starting my mornings with prayer and encouragement sets a positive tone for my whole day."
  },
  {
    name: "Daniel R.",
    quote: "I've tried many prayer apps, but Pray4Me stands out with its personalized prompts and welcoming design. It feels like it was made just for me."
  }
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download-section')
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-background text-text overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-tertiary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/img/logo.svg" alt="Pray4Me Logo" width={40} height={40} />
            </div>

            <div className="flex items-center">
              <button 
                onClick={scrollToDownload}
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
        {/* More intense gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-primary/25"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/15 via-transparent to-secondary/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Stop scrolling.<br />
                <span className="text-primary">Pray</span> for others.
              </h1>
              
              <p className="text-xl md:text-2xl text-secondary mb-8 max-w-lg">
                You don't need much time—5 minutes a day is plenty—and it can help someone in need.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToDownload}
                className="bg-text text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-text/90 transition-all duration-300 shadow-lg"
              >
                Get started
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: [0.4, 0, 0.6, 1],
                    repeatType: "reverse"
                  }}
                  className="flex justify-center"
                >
                  <Image 
                    src="/img/screenshot.jpg" 
                    alt="Pray4Me App Screenshot" 
                    width={300} 
                    height={600} 
                    className="rounded-3xl shadow-2xl mx-auto"
                  />
                </motion.div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30"
                ></motion.div>
                
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: 1 
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full opacity-40"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-tertiary/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                We do it a bit<br />
                <span className="text-primary">different.</span>
              </h2>
              
              <p className="text-lg text-secondary mb-12 leading-relaxed">
                This isn't social media—it's a Christian prayer platform where believers pray for strangers around the world. God calls us to pray for those in need, and while praying for friends and family is good, lifting up others during their darkest moments can help them greatly.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-tertiary">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-text font-semibold">No Friends Lists</p>
                    <p className="text-secondary text-sm">No social connections to manage</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-tertiary">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-text font-semibold">No Endless Scrolling</p>
                    <p className="text-secondary text-sm">Just prayer, not distraction</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-tertiary">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-text font-semibold">Pure Prayer Focus</p>
                    <p className="text-secondary text-sm">Help others, build faith</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-4">🙏 Called to Pray for Others</h3>
            <p className="text-lg text-secondary mb-4">
              "Bear one another's burdens, and so fulfill the law of Christ." - Galatians 6:2
            </p>
            <p className="text-lg text-secondary">
              When you pray for a stranger's healing, job loss, or family crisis, you're answering God's call to love others. No profiles to follow, no likes to chase—just pure, faithful intercession for those who need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Features
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 md:items-stretch">
            {/* Prayer Streaks */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl text-center flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Prayer Streaks</h3>
                <p className="text-secondary mb-6">
                  Build a consistent habit of daily prayer. Streaks help develop the discipline of intercession, turning moments of prayer into a lifelong practice of faith.
                </p>
              </div>
              <div className="bg-white/50 rounded-2xl p-4 flex items-center justify-center min-h-[80px]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">7</div>
                  <div className="text-sm text-secondary">Day Streak</div>
                </div>
              </div>
            </motion.div>

            {/* Anonymous Prayers */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-3xl text-center flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Anonymous Requests</h3>
                <p className="text-secondary mb-6">
                  Optionally pray for strangers around the world without knowing who they are. Pure, selfless intercession for those facing real struggles and challenges.
                </p>
              </div>
              <div className="bg-white/50 rounded-2xl p-4 flex items-center justify-center min-h-[80px]">
                <div className="text-center">
                  <div className="text-sm font-semibold text-text">Someone needs prayer for</div>
                  <div className="text-sm text-secondary">"Financial struggles"</div>
                </div>
              </div>
            </motion.div>

            {/* Prayer Reminders */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl text-center flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔔</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Gentle Reminders</h3>
                <p className="text-secondary mb-6">
                  Receive thoughtful notifications when someone needs prayer or when believers have prayed for you. Stay connected without being overwhelmed.
                </p>
              </div>
              <div className="bg-white/50 rounded-2xl p-4 flex items-center justify-center min-h-[80px]">
                <div className="text-center">
                  <div className="text-sm font-semibold text-text">23 believers prayed for you</div>
                  <div className="text-sm text-secondary">Strangers are lifting you up</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Hear it from our users
          </motion.h2>

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-3 gap-8 lg:items-stretch"
            >
              {/* Featured testimonial with image */}
              <div className="lg:col-span-1 flex">
                <div className="relative w-full">
                  <div className="gradient-bg p-8 rounded-3xl text-white relative overflow-hidden h-full flex flex-col justify-center">
                    <blockquote className="text-lg md:text-xl font-medium mb-6 relative z-10">
                      "{testimonials[currentTestimonial]?.quote}"
                    </blockquote>
                    <cite className="text-white/90 font-semibold relative z-10">
                      {testimonials[currentTestimonial]?.name}
                    </cite>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20"></div>
                      <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other testimonials in a column */}
              <div className="lg:col-span-2 flex flex-col space-y-6">
                {testimonials.filter((_, index) => index !== currentTestimonial).map((testimonial, index) => (
                  <motion.div
                    key={`${currentTestimonial}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-tertiary/50 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-text mb-3 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <cite className="text-secondary font-semibold">
                          — {testimonial.name}
                        </cite>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border border-tertiary"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border border-tertiary"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-tertiary'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-tertiary/50 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get started for free
            </h2>
            
            <p className="text-xl text-secondary mb-12">
              You don't need a subscription to use Pray4Me.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <motion.a
                href="https://apps.apple.com/app/pray4me"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-text text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-3 hover:bg-text/90 transition-all duration-300 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download on the App Store</span>
              </motion.a>
              
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.pray4me"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-text text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-3 hover:bg-text/90 transition-all duration-300 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Get it on Google Play</span>
              </motion.a>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex justify-center items-end max-w-5xl mx-auto relative flex-wrap sm:flex-nowrap gap-4 sm:gap-0">
                {/* Left image */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex-shrink-0 sm:-mr-8 z-10 order-1 sm:order-1"
                >
                  <Image 
                    src="/img/imageOne.png" 
                    alt="Prayer moment" 
                    width={180} 
                    height={270} 
                    className="rounded-2xl shadow-xl transform rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-300"
                  />
                </motion.div>
                
                {/* Center image - highest z-index */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="relative z-20 flex-shrink-0 order-2 sm:order-2"
                >
                  <Image 
                    src="/img/imageTwo.png" 
                    alt="Community prayer" 
                    width={220} 
                    height={330} 
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                
                {/* Right image */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="relative flex-shrink-0 sm:-ml-8 z-10 order-3 sm:order-3"
                >
                  <Image 
                    src="/img/imageThree.png" 
                    alt="Faith gathering" 
                    width={180} 
                    height={270} 
                    className="rounded-2xl shadow-xl transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-300"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/img/logo.svg" alt="Pray4Me Logo" width={32} height={32} />
                <span className="text-xl font-bold">Pray4Me</span>
              </div>
              <p className="text-white/80 mb-6">
                Reconnect with hope and community through the power of prayer.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
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
    </main>
  )
} 