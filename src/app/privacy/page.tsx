import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-text">
      {/* Navigation */}
      <nav className="border-b border-tertiary bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image src="/img/logo.svg" alt="Pray4Me Logo" width={40} height={40} />
            </Link>
            <Link 
              href="/" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-secondary mb-8">Last updated: June 15, 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Introduction</h2>
            <p className="text-secondary leading-relaxed mb-4">
              At Pray4Me, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3 text-text">Personal Information</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
              <li>Username and display name</li>
              <li>Email address (when you create an account)</li>
              <li>Prayer requests and responses you submit</li>
              <li>Usage data and app interactions</li>
              <li>Device information and identifiers</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3 text-text">Analytics and Tracking Data</h3>
            <p className="text-secondary leading-relaxed mb-4">
              We collect non-identifiable metrics to help us improve the platform and provide a better user experience:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
              <li>App usage metrics and user behavior on screens</li>
              <li>Crash reports and error logs to fix technical issues</li>
              <li>Feature usage statistics to understand what users find helpful</li>
              <li>Session duration and frequency to optimize app performance</li>
              <li>General location information (country/region only)</li>
              <li>Device information and operating system details</li>
              <li>App version and update information</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-text">Data Storage and Security</h3>
            <p className="text-secondary leading-relaxed mb-4">
              We store non-identifiable information including usernames and display names on Supabase, our database provider. 
              This data is not encrypted but does not include sensitive personal information like full names, addresses, or payment details.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-text">Third-Party Services</h3>
            <p className="text-secondary leading-relaxed mb-4">
              We use the following third-party services that may collect data:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
              <li><strong>PostHog:</strong> Analytics and user behavior tracking</li>
              <li><strong>Sentry:</strong> Error monitoring and crash reporting</li>
              <li><strong>Expo:</strong> Push notification services</li>
              <li><strong>Supabase:</strong> Database and backend services</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-text">Opt-Out Options</h3>
            <p className="text-secondary leading-relaxed">
              You can opt out of analytics tracking and data collection within the app settings. 
              This will disable crash reporting and usage metrics collection for your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>To provide and maintain our prayer community service</li>
              <li>To send you prayer requests from others in need</li>
              <li>To improve our app functionality and user experience through analytics</li>
              <li>To identify and fix crashes, errors, and technical issues</li>
              <li>To understand which features are most helpful to our users</li>
              <li>To optimize app performance and loading times</li>
              <li>To send important updates about the service</li>
              <li>To ensure the safety and security of our community</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Information Sharing</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in app functionality (under strict confidentiality agreements)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Data Security</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-text">International Data Transfers</h3>
            <p className="text-secondary leading-relaxed mb-4">
              Your data may be transferred to and processed in the United States and other countries where our service providers operate. 
              For EU users, we ensure adequate protection through appropriate safeguards and standard contractual clauses.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-text">Age Verification</h3>
            <p className="text-secondary leading-relaxed">
              Pray4Me is intended for users 13 years of age and older. We do not knowingly collect personal information from children under 13. 
              If we become aware that we have collected personal information from a child under 13, we will delete such information immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Subscription Services</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Pray4Me offers optional premium features through monthly and yearly subscription plans. 
              No subscription is required to use the core features of Pray4Me.
            </p>
            <h3 className="text-xl font-medium mb-3 text-text">Subscription Data</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Payment information is processed securely through app store providers (Apple App Store, Google Play Store)</li>
              <li>We do not store credit card or payment details on our servers</li>
              <li>Subscription status and billing history may be stored to provide service</li>
              <li>You can cancel subscriptions at any time through your app store account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Data Retention</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We retain your personal information indefinitely to maintain the continuity of our prayer community and your prayer history. 
              You can request deletion of your account and associated data at any time by contacting us.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-text">Photo and Avatar Data</h3>
            <p className="text-secondary leading-relaxed">
              Users can upload photos for their avatars. These images are stored securely and are only visible to other users as profile pictures. 
              You can change or remove your avatar at any time within the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Your Rights</h2>
            <p className="text-secondary leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
              <li>Access your personal information</li>
              <li>Correct or update your information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of analytics tracking and data collection</li>
              <li>Opt-out of certain communications</li>
              <li>Request a copy of your data</li>
              <li>Cancel subscriptions through your app store account</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3 text-text">Rights for European Union Users (GDPR)</h3>
            <p className="text-secondary leading-relaxed mb-4">
              If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Right to Data Portability:</strong> Request your data in a machine-readable format</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we process your data</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
              <li><strong>Legal Basis:</strong> We process your data based on your consent and our legitimate interest in providing prayer services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Contact Us</h2>
            <p className="text-secondary leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at support@pray4me.app.
            </p>
          </section>
        </div>
      </div>

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
          </div>
        </div>
      </footer>
    </main>
  )
} 