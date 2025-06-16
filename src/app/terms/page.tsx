import Image from 'next/image'
import Link from 'next/link'

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-secondary mb-8">Last updated: June 15, 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Acceptance of Terms</h2>
            <p className="text-secondary leading-relaxed mb-4">
              By accessing and using Pray4Me, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Description of Service</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Pray4Me is a mobile application that connects users in a faith-based community for prayer, support, and spiritual encouragement. 
              The service allows users to share prayer requests, pray for others, and receive gentle reminders for spiritual reflection.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              <strong>Free Core Features:</strong> All essential features of Pray4Me are available without a subscription, including submitting prayer requests, praying for others, and receiving prayer notifications.
            </p>
            <p className="text-secondary leading-relaxed">
              <strong>Optional Premium Features:</strong> We offer optional monthly and yearly subscription plans that unlock additional features to enhance your prayer experience. No subscription is required to use Pray4Me.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Eligibility and Age Requirements</h2>
            <p className="text-secondary leading-relaxed mb-4">
              You must be at least 13 years old to use Pray4Me. By using our service, you represent and warrant that you meet this age requirement. 
              If you are under 18, you must have permission from a parent or guardian to use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">User Responsibilities</h2>
            <p className="text-secondary leading-relaxed mb-4">As a user of Pray4Me, you agree to:</p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Use the service for its intended spiritual and community purposes</li>
              <li>Respect other users and maintain appropriate, respectful communication</li>
              <li>Not share content that is offensive, harmful, or inappropriate</li>
              <li>Not use the service for commercial or promotional purposes</li>
              <li>Maintain the confidentiality of prayer requests shared with you</li>
              <li>Only upload appropriate photos for your avatar that comply with our community standards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Content Guidelines</h2>
            <p className="text-secondary leading-relaxed mb-4">
              All content shared on Pray4Me should be respectful, appropriate, and aligned with our community values. We reserve the right to remove content that:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Contains hate speech, discrimination, or harassment</li>
              <li>Promotes violence or illegal activities</li>
              <li>Violates privacy or confidentiality</li>
              <li>Contains spam or promotional material</li>
              <li>Is false or misleading</li>
              <li>Contains inappropriate, explicit, or offensive imagery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">User Content and Avatar Photos</h2>
            <h3 className="text-xl font-medium mb-3 text-text">Content Ownership</h3>
            <p className="text-secondary leading-relaxed mb-4">
              You retain ownership of any content you submit, including prayer requests and avatar photos. 
              However, by using our service, you grant us a non-exclusive, worldwide license to use, display, and distribute your content as necessary to provide our services.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-text">Avatar Photo Guidelines</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2 mb-4">
              <li>Avatar photos must be appropriate and respectful</li>
              <li>No explicit, offensive, or inappropriate imagery</li>
              <li>Photos should represent you or be spiritually meaningful</li>
              <li>We reserve the right to remove inappropriate avatar photos</li>
              <li>You are responsible for ensuring you have rights to any photo you upload</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3 text-text">Content Monitoring</h3>
            <p className="text-secondary leading-relaxed">
              While we do not actively monitor all content, we reserve the right to review, moderate, and remove any content that violates our guidelines. 
              Users can report inappropriate content through the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Privacy and Data</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Intellectual Property</h2>
            <p className="text-secondary leading-relaxed mb-4">
              The Pray4Me application, including its design, code, and content, is protected by intellectual property laws. 
              You may not copy, modify, distribute, or reverse engineer any part of the application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Limitation of Liability</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Pray4Me is provided "as is" without warranties of any kind. We are not liable for any damages or losses 
              arising from your use of the service. The application is intended for spiritual support and community, 
              not as a substitute for professional counseling or medical advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Subscription Services</h2>
            <h3 className="text-xl font-medium mb-3 text-text">Free vs. Premium Features</h3>
            <p className="text-secondary leading-relaxed mb-4">
              Pray4Me's core functionality is completely free. Optional premium subscriptions unlock additional features but are not required to participate in our prayer community.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-text">Subscription Terms</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2 mb-4">
              <li><strong>Monthly Subscription:</strong> Billed monthly, cancel anytime</li>
              <li><strong>Yearly Subscription:</strong> Billed annually, cancel anytime</li>
              <li>All billing is handled through your app store (Apple App Store or Google Play Store)</li>
              <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
              <li>No refunds for partial subscription periods</li>
              <li>Premium features remain accessible until the end of your billing period after cancellation</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3 text-text">Cancellation</h3>
            <p className="text-secondary leading-relaxed">
              You can cancel your subscription at any time through your app store account settings. 
              Cancellation will take effect at the end of your current billing period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">User Conduct and Community Standards</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Pray4Me is a faith-based community platform. While we encourage open and supportive communication, 
              we maintain strict standards to ensure a safe and respectful environment for all users.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-text">Prohibited Behavior</h3>
            <p className="text-secondary leading-relaxed mb-4">The following behaviors are strictly prohibited and may result in immediate account suspension or termination:</p>
            <ul className="list-disc pl-6 text-secondary space-y-2 mb-4">
              <li>Harassment, bullying, or threatening other users</li>
              <li>Sharing inappropriate, offensive, or explicit content</li>
              <li>Using the platform for commercial, promotional, or spam purposes</li>
              <li>Impersonating others or creating fake accounts</li>
              <li>Attempting to hack, exploit, or misuse the platform</li>
              <li>Sharing false or misleading prayer requests</li>
              <li>Violating others' privacy or sharing personal information without consent</li>
              <li>Promoting hate speech, discrimination, or illegal activities</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3 text-text">Enforcement Actions</h3>
            <p className="text-secondary leading-relaxed mb-4">
              We reserve the right to take the following actions against users who violate our community standards:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Warning:</strong> First-time minor violations may result in a warning</li>
              <li><strong>Temporary Suspension:</strong> Repeated or moderate violations may result in temporary account suspension</li>
              <li><strong>Permanent Ban:</strong> Serious violations or repeated offenses may result in permanent account termination</li>
              <li><strong>Content Removal:</strong> We may remove any content that violates our guidelines</li>
              <li><strong>Legal Action:</strong> Illegal activities may be reported to appropriate authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Account Termination</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We reserve the right to suspend, ban, or permanently terminate user accounts at our sole discretion if we determine that:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2 mb-4">
              <li>You have violated these Terms of Service</li>
              <li>Your actions are deemed unacceptable or harmful to our community</li>
              <li>You are using our services maliciously or for purposes other than intended</li>
              <li>Your behavior disrupts the spiritual and supportive nature of our platform</li>
              <li>You engage in activities that could harm other users or the platform</li>
            </ul>
            <p className="text-secondary leading-relaxed">
              You may also delete your account at any time through the app settings. Upon account deletion, 
              your personal data will be removed in accordance with our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Changes to Terms</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We may update these terms from time to time. Users will be notified of significant changes, 
              and continued use of the service constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text">Contact Information</h2>
            <p className="text-secondary leading-relaxed">
              If you have questions about these Terms of Service, please contact us at support@pray4me.app.
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