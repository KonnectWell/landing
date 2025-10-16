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

        <section className="container mb-10">
            <div className="mx-auto max-w-4xl py-16">
              <h1 className="mb-8 text-4xl font-bold text-default-950">Terms and Conditions</h1>
              <p className="mb-6 text-sm text-default-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <div className="prose prose-lg max-w-none space-y-8 text-default-700">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">1. Agreement to Terms</h2>
                  <p className="mb-4">
                    Welcome to KonnectWell (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you and KonnectWell regarding your use of our financial advising matchmaking service, website, and platform (collectively, the &quot;Service&quot;).
                  </p>
                  <p className="mb-4">
                    By accessing or using KonnectWell, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Service. These Terms apply to all users, including visitors, registered users, and financial advisors.
                  </p>
                  <p className="mb-4">
                    <strong>Trusted connections. Data-driven fit.</strong> - These Terms govern our commitment to providing you with secure, reliable, and effective financial advisor matching services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">2. Description of Service</h2>
                  <p className="mb-4">
                    KonnectWell is a financial advising matchmaking service that uses advanced data analytics, artificial intelligence, and scientific algorithms to connect individuals seeking financial advice with certified financial advisors, including Certified Financial Planners (CFP®), Chartered Financial Analysts (CFA), and other qualified financial professionals.
                  </p>
                  <p className="mb-4">Our Service includes:</p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Financial advisor matching based on your investment goals, risk tolerance, and financial planning needs</li>
                    <li>Access to a curated network of verified, certified financial advisors</li>
                    <li>Platform tools for communicating with matched advisors</li>
                    <li>Educational resources and financial planning content</li>
                    <li>Account management and profile services</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Important:</strong> KonnectWell is a matchmaking and referral service only. We are not a financial advisor, investment advisor, broker-dealer, or financial planning firm. We do not provide financial advice, investment recommendations, or portfolio management services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">3. Eligibility and Account Registration</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">3.1 Eligibility Requirements</h3>
                  <p className="mb-4">To use our Service, you must:</p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Be at least 18 years of age</li>
                    <li>Have the legal capacity to enter into binding contracts</li>
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">3.2 Account Registration</h3>
                  <p className="mb-4">
                    To access certain features of our Service, you must create an account. You agree to:
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Provide accurate, truthful, and complete information</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Keep your password confidential and secure</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Not share your account credentials with others</li>
                    <li>Notify us immediately of any security breach or unauthorized access</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">3.3 Account Termination</h3>
                  <p className="mb-4">
                    We reserve the right to suspend or terminate your account at any time, with or without notice, if you violate these Terms or engage in fraudulent, illegal, or harmful activities.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">4. User Responsibilities and Conduct</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">4.1 Acceptable Use</h3>
                  <p className="mb-4">You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Provide false, misleading, or fraudulent information</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Interfere with or disrupt the Service or servers and networks connected to the Service</li>
                    <li>Use automated systems to access the Service without our express written permission</li>
                    <li>Attempt to gain unauthorized access to any portion of the Service</li>
                    <li>Transmit viruses, malware, or other harmful code</li>
                    <li>Harass, abuse, or harm other users or advisors</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                    <li>Resell, redistribute, or sublicense the Service</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">4.2 Financial Information</h3>
                  <p className="mb-4">
                    You are solely responsible for the accuracy of all financial information you provide to us and to matched advisors. We are not responsible for any losses or damages resulting from inaccurate or incomplete information you provide.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">5. Financial Advisor Matching and Referrals</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">5.1 Matching Algorithm</h3>
                  <p className="mb-4">
                    Our proprietary AI-powered matching algorithm analyzes your financial profile, goals, risk tolerance, and preferences to suggest suitable financial advisors. While we strive to provide accurate matches, we do not guarantee that any particular advisor will meet your specific needs or expectations.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">5.2 Advisor Verification</h3>
                  <p className="mb-4">
                    We conduct reasonable verification of financial advisors in our network, including checking certifications (CFP®, CFA), credentials, and regulatory compliance status with FINRA and SEC. However, we do not guarantee the quality, performance, or suitability of any advisor.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">5.3 Independent Relationship</h3>
                  <p className="mb-4">
                    Any relationship you form with a financial advisor through our Service is between you and the advisor. KonnectWell is not a party to any agreement between you and a matched advisor. We are not responsible for:
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>The quality of financial advice provided by advisors</li>
                    <li>Investment performance or portfolio results</li>
                    <li>Fees charged by advisors</li>
                    <li>Disputes between you and your advisor</li>
                    <li>Any losses or damages resulting from advisor services</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">5.4 Due Diligence</h3>
                  <p className="mb-4">
                    You are responsible for conducting your own due diligence on any advisor before entering into a professional relationship. This includes verifying credentials, checking references, reviewing fee structures, and understanding the advisor&apos;s investment philosophy and approach.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">6. Fees and Payment Terms</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">6.1 KonnectWell Fees</h3>
                  <p className="mb-4">
                    We may charge fees for certain features of our Service. All fees will be clearly disclosed before you incur any charges. You agree to pay all fees associated with your use of the Service.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">6.2 Advisor Fees</h3>
                  <p className="mb-4">
                    Financial advisors in our network may charge their own fees for services. These fees are separate from any fees we may charge. All advisor fees are negotiated directly between you and the advisor. We are not responsible for advisor fee structures or billing disputes.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">6.3 Payment Processing</h3>
                  <p className="mb-4">
                    Payments to KonnectWell are processed through secure third-party payment processors. You agree to provide accurate payment information and authorize us to charge your payment method for all applicable fees.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">6.4 Refunds</h3>
                  <p className="mb-4">
                    Refund policies, if any, will be disclosed at the time of purchase. We reserve the right to modify or discontinue refund policies at our discretion, subject to applicable law.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">7. Intellectual Property Rights</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">7.1 Our Content</h3>
                  <p className="mb-4">
                    All content on our Service, including text, graphics, logos, images, software, and the matching algorithm, is the property of KonnectWell or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">7.2 Limited License</h3>
                  <p className="mb-4">
                    We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Service for personal, non-commercial purposes in accordance with these Terms.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">7.3 Restrictions</h3>
                  <p className="mb-4">You may NOT:</p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Copy, modify, or create derivative works of our Service or content</li>
                    <li>Use our Service for any commercial purpose without our written consent</li>
                    <li>Remove any copyright, trademark, or other proprietary notices</li>
                    <li>Use our trademarks, service marks, or logos without permission</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">7.4 User Content</h3>
                  <p className="mb-4">
                    You retain ownership of content you submit to our Service. By submitting content, you grant us a worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, modify, and display your content for the purpose of providing our Service.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">8. Disclaimers and Limitations of Liability</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">8.1 Service Disclaimer</h3>
                  <p className="mb-4">
                    OUR SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                    <li>Warranties that the Service will be uninterrupted, error-free, or secure</li>
                    <li>Warranties regarding the accuracy, reliability, or completeness of any information on the Service</li>
                    <li>Warranties that any advisor match will meet your specific needs or expectations</li>
                    <li>Warranties regarding investment performance or financial outcomes</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">8.2 Financial Advice Disclaimer</h3>
                  <p className="mb-4">
                    <strong>KONNECTWELL DOES NOT PROVIDE FINANCIAL ADVICE.</strong> We are a matchmaking service only. Any financial advice, investment recommendations, or portfolio management services are provided by independent financial advisors, not by KonnectWell. We are not responsible for any financial decisions you make based on advisor recommendations.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">8.3 Limitation of Liability</h3>
                  <p className="mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, KONNECTWELL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Loss of profits, revenue, or data</li>
                    <li>Investment losses or poor financial performance</li>
                    <li>Damages arising from advisor services or recommendations</li>
                    <li>Business interruption or loss of business opportunities</li>
                    <li>Cost of substitute services</li>
                  </ul>
                  <p className="mb-4">
                    OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRIOR TO THE CLAIM.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">8.4 Jurisdiction-Specific Disclaimers</h3>
                  <p className="mb-4">
                    Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential or incidental damages. In such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">9. Indemnification</h2>
                  <p className="mb-4">
                    You agree to indemnify, defend, and hold harmless KonnectWell, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising out of or related to:
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Your use or misuse of the Service</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any rights of another party</li>
                    <li>Your relationship with any matched financial advisor</li>
                    <li>Any content you submit to the Service</li>
                    <li>Your violation of any applicable laws or regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">10. Privacy and Data Protection</h2>
                  <p className="mb-4">
                    Your privacy is important to us. Our collection, use, and disclosure of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Service, you consent to the practices described in our Privacy Policy.
                  </p>
                  <p className="mb-4">
                    We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. You acknowledge and accept the inherent security risks of using our Service.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">11. Third-Party Services and Links</h2>
                  <p className="mb-4">
                    Our Service may contain links to third-party websites, services, or applications, including those of financial advisors, payment processors, and other service providers. We are not responsible for the content, privacy practices, or terms of service of any third-party sites.
                  </p>
                  <p className="mb-4">
                    Your interactions with third parties, including financial advisors, are solely between you and the third party. We are not responsible for any disputes, losses, or damages arising from your interactions with third parties.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">12. Termination</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">12.1 Termination by You</h3>
                  <p className="mb-4">
                    You may terminate your account at any time by contacting us at <a href="mailto:support@konnectwell.com" className="text-primary hover:underline">support@konnectwell.com</a> or using the account deletion feature in your account settings.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">12.2 Termination by Us</h3>
                  <p className="mb-4">
                    We may suspend or terminate your access to the Service at any time, with or without notice, if you:
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Violate these Terms or our Privacy Policy</li>
                    <li>Engage in fraudulent, illegal, or harmful activities</li>
                    <li>Fail to pay any fees when due</li>
                    <li>Misuse the Service or interfere with other users</li>
                    <li>Otherwise breach any provision of these Terms</li>
                  </ul>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">12.3 Effect of Termination</h3>
                  <p className="mb-4">
                    Upon termination, your right to use the Service will immediately cease. We may delete your account and associated data, subject to our data retention policies and legal obligations. Provisions of these Terms that by their nature should survive termination will survive, including disclaimers, limitations of liability, and indemnification obligations.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">13. Dispute Resolution</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-default-950">13.1 Informal Resolution</h3>
                  <p className="mb-4">
                    Before initiating formal proceedings, you agree to contact us at <a href="mailto:legal@konnectwell.com" className="text-primary hover:underline">legal@konnectwell.com</a> to attempt to resolve any dispute informally.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">13.2 Arbitration</h3>
                  <p className="mb-4">
                    If informal resolution is unsuccessful, any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration administered by the American Arbitration Association (&quot;AAA&quot;) in accordance with its Commercial Arbitration Rules.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">13.3 Class Action Waiver</h3>
                  <p className="mb-4">
                    You agree that disputes will be resolved on an individual basis and waive any right to participate in class actions, collective actions, or representative proceedings.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-default-950">13.4 Exceptions</h3>
                  <p className="mb-4">
                    Either party may seek injunctive relief in any court of competent jurisdiction to prevent irreparable harm or to enforce intellectual property rights.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">14. Governing Law and Jurisdiction</h2>
                  <p className="mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in [Your Jurisdiction].
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">15. Modifications to Terms</h2>
                  <p className="mb-4">
                    We reserve the right to modify these Terms at any time. We will notify you of material changes by:
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2">
                    <li>Posting the updated Terms on our website</li>
                    <li>Sending an email to your registered email address</li>
                    <li>Displaying a prominent notice on the Service</li>
                  </ul>
                  <p className="mb-4">
                    Your continued use of the Service after the effective date of the modified Terms constitutes your acceptance of the changes. If you do not agree to the modified Terms, you must stop using the Service.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">16. Severability</h2>
                  <p className="mb-4">
                    If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely reflects the intent of the original provision.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">17. Entire Agreement</h2>
                  <p className="mb-4">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and KonnectWell regarding the Service and supersede all prior agreements and understandings, whether written or oral.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">18. Waiver</h2>
                  <p className="mb-4">
                    No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision. Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">19. Assignment</h2>
                  <p className="mb-4">
                    You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction. Any attempted assignment in violation of this provision shall be null and void.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">20. Contact Information</h2>
                  <p className="mb-4">
                    If you have questions about these Terms, please contact us:
                  </p>
                  <div className="mb-4 rounded-lg bg-default-100 p-6">
                    <p className="mb-2"><strong>KonnectWell Legal Team</strong></p>
                    <p className="mb-2">Email: <a href="mailto:legal@konnectwell.com" className="text-primary hover:underline">legal@konnectwell.com</a></p>
                    <p className="mb-2">General Inquiries: <a href="mailto:info@konnectwell.com" className="text-primary hover:underline">info@konnectwell.com</a></p>
                    <p className="mb-2">Phone: +1-555-123-4567</p>
                    <p className="mb-0">Address: [Your Business Address]</p>
                  </div>
                </section>

                <section className="rounded-lg bg-primary/10 p-6">
                  <h2 className="mb-4 text-2xl font-semibold text-default-950">Acknowledgment</h2>
                  <p className="mb-4">
                    By using KonnectWell, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. You also acknowledge that you have read and understood our Privacy Policy.
                  </p>
                  <p className="mb-0">
                    <strong>Trusted connections. Data-driven fit.</strong> We are committed to providing you with a secure, transparent, and effective platform for finding your perfect financial advisor match.
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
