import type { Metadata } from 'next'
import Footer from '../components/Footer'
import TopNavBar from '../components/TopNavBar'
import SearchPlan from '../components/SearchPlan'

export const metadata: Metadata = {
  title: 'KonnectWell - Financial Advising Matchmaking Service',
  description: 'Trusted connections. Data-driven fit. Find your perfect financial advisor match with KonnectWell.',
}

const KonnectWell = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'KonnectWell',
    description: 'Financial advising matchmaking service that connects you with the perfect financial advisor',
    url: 'https://konnectwell.com',
    logo: 'https://konnectwell.com/logo.png',
    slogan: 'Trusted connections. Data-driven fit.',
    serviceType: 'Financial Advising Matchmaking',
    areaServed: 'United States',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Financial Advisory Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Financial Advisor Matching',
            description: 'Tailored algorithm to find your perfect financial advisor match'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Financial Planning Consultation',
            description: 'Expert financial planning and consultation services'
          }
        }
      ]
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@konnectwell.com',
      telephone: '+1-555-123-4567'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <TopNavBar
        menuItems={['home', 'experts', 'features', 'onboarding']}
        position="fixed"
        hasDownloadButton
      />

<section className="container mt-10">
            <div className="mx-auto max-w-4xl py-16">
              <h1 className="mb-8 text-4xl font-bold text-default-950">Privacy Policy</h1>
              <p className="mb-6 text-sm text-default-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <div className="prose prose-lg max-w-none space-y-8 text-default-700">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">1. Introduction</h2>
                  <p className="mb-4">
                    Welcome to KonnectWell (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are a financial advising matchmaking service that uses advanced data analytics and scientific algorithms to connect you with certified financial advisors who best match your financial goals, risk tolerance, and planning needs.
                  </p>
                  <p className="mb-4">
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, and platform. By using KonnectWell, you consent to the data practices described in this policy.
                  </p>
                  <p className="mb-4">
                    <strong>Trusted connections. Data-driven fit.</strong> - Your privacy is fundamental to our mission of providing secure and trustworthy financial advisor matching services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">2. Information We Collect</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">2.1 Information You Provide</h3>
                  <p className="mb-4">When you use KonnectWell, we may collect the following information:</p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li><strong>Personal Identification:</strong> Name, email address, phone number, date of birth</li>
                    <li><strong>Financial Information:</strong> Investment goals, risk tolerance, current financial situation, retirement planning objectives, investment preferences, portfolio size</li>
                    <li><strong>Profile Information:</strong> Employment status, income level, marital status, dependents, financial planning needs</li>
                    <li><strong>Communication Data:</strong> Correspondence with us and with matched financial advisors through our platform</li>
                    <li><strong>Account Credentials:</strong> Username, password, and security questions (stored securely and encrypted)</li>
                    <li><strong>Newsletter Subscriptions:</strong> Email addresses for marketing communications (with your consent)</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">2.2 Information Collected Automatically</h3>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, search queries</li>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                    <li><strong>Cookies and Tracking Technologies:</strong> Session cookies, persistent cookies, web beacons, and similar technologies</li>
                    <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">2.3 Information from Third Parties</h3>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li><strong>Financial Advisors:</strong> Information about matched advisors including certifications (CFP®, CFA), credentials, regulatory compliance status, and performance history</li>
                    <li><strong>Verification Services:</strong> Background check results and credential verification from third-party providers</li>
                    <li><strong>Analytics Providers:</strong> Aggregated and anonymized usage statistics</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">3. How We Use Your Information</h2>
                  <p className="mb-4">We use your information for the following purposes:</p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li><strong>Matching Services:</strong> To analyze your financial profile and connect you with certified financial advisors who best match your needs using our proprietary AI-powered algorithm</li>
                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our matching services and platform functionality</li>
                    <li><strong>Communication:</strong> To respond to your inquiries, send service updates, and facilitate communication between you and matched advisors</li>
                    <li><strong>Account Management:</strong> To create and manage your account, process transactions, and provide customer support</li>
                    <li><strong>Verification:</strong> To verify your identity and ensure the security of our platform</li>
                    <li><strong>Analytics and Improvement:</strong> To analyze usage patterns, improve our matching algorithm, and enhance user experience</li>
                    <li><strong>Marketing:</strong> To send you newsletters, promotional materials, and updates about our services (with your consent and ability to opt-out)</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                    <li><strong>Fraud Prevention:</strong> To detect, prevent, and address fraud, security issues, and other harmful activities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">4. Data Security and Protection</h2>
                  <p className="mb-4">
                    We implement industry-standard security measures to protect your personal and financial information:
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li><strong>Encryption:</strong> All sensitive data is encrypted in transit using SSL/TLS and at rest using AES-256 encryption</li>
                    <li><strong>Access Controls:</strong> Strict access controls and authentication measures to limit access to your information</li>
                    <li><strong>Secure Infrastructure:</strong> Hosted on secure, compliant cloud infrastructure with regular security audits</li>
                    <li><strong>Regular Monitoring:</strong> Continuous monitoring for security threats and vulnerabilities</li>
                    <li><strong>Employee Training:</strong> All employees receive regular security and privacy training</li>
                    <li><strong>Data Backup:</strong> Regular encrypted backups to ensure data availability and recovery</li>
                  </ul>
                  <p className="mb-4">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">5. Information Sharing and Disclosure</h2>
                  <p className="mb-4">We may share your information in the following circumstances:</p>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">5.1 With Your Consent</h3>
                  <p className="mb-4">We share your information with matched financial advisors only with your explicit consent to facilitate introductions and consultations.</p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">5.2 Service Providers</h3>
                  <p className="mb-4">We may share information with trusted third-party service providers who assist us in:</p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Hosting and maintaining our platform</li>
                    <li>Processing payments and transactions</li>
                    <li>Conducting background checks and credential verification</li>
                    <li>Sending email communications and newsletters</li>
                    <li>Analyzing usage data and improving our services</li>
                  </ul>
                  <p className="mb-4">These service providers are contractually obligated to protect your information and use it only for specified purposes.</p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">5.3 Legal Requirements</h3>
                  <p className="mb-4">We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to:</p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Comply with legal processes or governmental requests</li>
                    <li>Enforce our terms of service and agreements</li>
                    <li>Protect our rights, property, or safety, or that of our users or others</li>
                    <li>Investigate fraud, security issues, or violations of our policies</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">5.4 Business Transfers</h3>
                  <p className="mb-4">In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections.</p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">5.5 Aggregated and Anonymized Data</h3>
                  <p className="mb-4">We may share aggregated, anonymized, or de-identified data that cannot reasonably be used to identify you for research, analytics, and business purposes.</p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">6. Your Privacy Rights and Choices</h2>
                  <p className="mb-4">You have the following rights regarding your personal information:</p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal and contractual obligations</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time by clicking the unsubscribe link in emails or contacting us directly</li>
                    <li><strong>Account Deletion:</strong> Request deletion of your account and associated data</li>
                    <li><strong>Cookie Preferences:</strong> Manage cookie preferences through your browser settings</li>
                  </ul>
                  <p className="mb-4">
                    To exercise these rights, please contact us at <a href="mailto:privacy@konnectwell.com" className="text-primary hover:underline">privacy@konnectwell.com</a>. We will respond to your request within 30 days.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">7. Cookies and Tracking Technologies</h2>
                  <p className="mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our platform:
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for basic platform functionality and security</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
                    <li><strong>Marketing Cookies:</strong> Track your preferences and deliver personalized content</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="mb-4">
                    You can control cookies through your browser settings. However, disabling certain cookies may affect platform functionality.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">8. Data Retention</h2>
                  <p className="mb-4">
                    We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li><strong>Active Accounts:</strong> Information is retained while your account is active</li>
                    <li><strong>Inactive Accounts:</strong> Information may be retained for up to 7 years after account inactivity for legal and regulatory compliance</li>
                    <li><strong>Financial Records:</strong> Financial information may be retained for up to 7 years as required by financial regulations</li>
                    <li><strong>Marketing Data:</strong> Email addresses for marketing are retained until you unsubscribe</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">9. Children&apos;s Privacy</h2>
                  <p className="mb-4">
                    KonnectWell is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information promptly.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">10. International Data Transfers</h2>
                  <p className="mb-4">
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">11. Third-Party Links and Services</h2>
                  <p className="mb-4">
                    Our platform may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices or content of these third parties. We encourage you to review their privacy policies before providing any information.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">12. California Privacy Rights</h2>
                  <p className="mb-4">
                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Right to know what personal information is collected, used, shared, or sold</li>
                    <li>Right to delete personal information</li>
                    <li>Right to opt-out of the sale of personal information (we do not sell your personal information)</li>
                    <li>Right to non-discrimination for exercising your privacy rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">13. Changes to This Privacy Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. Your continued use of KonnectWell after such changes constitutes your acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <section className="rounded-lg bg-primary/10 p-6 pt-0.5">
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">Our Commitment to You</h2>
                  <p className="mb-4">
                    At KonnectWell, we are committed to protecting your privacy and maintaining the confidentiality of your personal and financial information. Our data-driven approach to matching you with financial advisors is built on a foundation of trust, security, and transparency.
                  </p>
                  <p className="mb-0">
                    <strong>Trusted connections. Data-driven fit.</strong> We use your information responsibly to provide you with the best possible financial advisor matching experience while maintaining the highest standards of privacy and security.
                  </p>
                </section>
              </div>
            </div>
        </section>

      <SearchPlan />

      <Footer />
    </>
  )
}

export default KonnectWell
