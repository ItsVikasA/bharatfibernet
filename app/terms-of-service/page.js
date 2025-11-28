'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

export default function TermsOfService() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Terms of Service" />

      {/* Hero Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h1 style={{ 
                  fontSize: '3rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#000'
                }}>
                  Terms of Service
                </h1>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  lineHeight: '1.8'
                }}>
                  Last Modified: November 27, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              {/* Introduction */}
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Welcome to <strong>Bharat Fibernet</strong>. These Terms of Service ("Terms") govern your access to and use of our website, broadband connections, leased lines, and related internet services ("Services").
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  By visiting our website or using our Services, you agree to comply with these Terms. Please read them carefully before proceeding.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontWeight: '600' }}>
                  If you do not agree with these Terms, please discontinue the use of our website and services immediately.
                </p>
              </div>

              {/* Section 1 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  1. Introduction
                </h2>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '1rem' }}>
                  <li>Bharat Fibernet is committed to providing fast, reliable, and secure internet connectivity to homes and businesses across India.</li>
                  <li>These Terms outline the rights and responsibilities between you ("User", "you", "your") and Bharat Fibernet ("Company", "we", "us", "our").</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  By using our Services, you accept these Terms and our Privacy Policy as legally binding.
                </p>
              </div>

              {/* Section 2 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  2. Eligibility
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  To subscribe or use our Services, you must:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>Be at least 18 years of age, or have consent from a legal guardian.</li>
                  <li>Provide accurate and verifiable personal and contact information.</li>
                  <li>Not use our Services for unlawful, abusive, or fraudulent activities.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  3. Service Usage Guidelines
                </h2>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  3.1 Fair Usage Policy (FUP)
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  To ensure optimal service quality for all users, Bharat Fibernet implements a Fair Usage Policy. Once you reach your data limit, speeds may be adjusted for the remainder of your billing cycle.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  3.2 Responsible Use
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  You agree not to:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '1rem' }}>
                  <li>Share or resell your connection without authorization.</li>
                  <li>Use the network for illegal downloads, spamming, or hacking.</li>
                  <li>Interfere with or damage our network, infrastructure, or other users' connections.</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Violation of these terms may result in suspension or termination of your account.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  3.3 Service Availability
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  We strive to maintain consistent uptime and service performance. However, occasional downtime may occur due to:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '1rem' }}>
                  <li>Scheduled maintenance</li>
                  <li>Network upgrades</li>
                  <li>Unforeseen technical or environmental issues</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Bharat Fibernet will make all reasonable efforts to restore services promptly.
                </p>
              </div>

              {/* Section 4 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  4. Installation & Equipment
                </h2>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>Standard installation is typically completed within 48–72 hours after payment confirmation.</li>
                  <li>Access to the installation site must be ensured by the customer.</li>
                  <li>Devices such as routers or modems provided by Bharat Fibernet remain company property unless purchased.</li>
                  <li>Customers are responsible for keeping the equipment in good condition. Damaged or lost devices may incur replacement charges.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  5. Account Management & Billing
                </h2>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  5.1 Account Creation
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  You must register an account using accurate personal details. You are responsible for safeguarding your credentials and any activities under your account.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  5.2 Payment & Renewal
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  All plans are billed in advance as per your selected package. Timely payment is required to maintain uninterrupted service.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  5.3 Refund Policy
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Fees once paid are non-refundable, except in the following cases:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '1rem' }}>
                  <li>Duplicate transaction</li>
                  <li>Service activation delay beyond 10 business days (excluding customer-side delays)</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Refunds, if applicable, will be processed within 7–10 working days.
                </p>
              </div>

              {/* Section 6 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  6. Data Usage & Privacy
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Your data privacy is important to us. We collect and process personal information strictly in accordance with our <a href="/privacy-policy" style={{ color: '#28a745', textDecoration: 'none', fontWeight: '600' }}>Privacy Policy</a>, which complies with <strong>The Digital Personal Data Protection Act, 2023</strong>.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Information such as your contact details, usage data, and browsing behavior may be used to:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>Improve service experience</li>
                  <li>Communicate updates and offers</li>
                  <li>Maintain compliance and security standards</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  7. Intellectual Property
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  All text, logos, designs, graphics, and software on this website are the intellectual property of Bharat Fibernet or its licensors.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  You may not copy, distribute, reproduce, or use any content from our website without prior written consent.
                </p>
              </div>

              {/* Section 8 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  8. Third-Party Links
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Our website may include links to external websites. Bharat Fibernet is not responsible for the content, accuracy, or privacy practices of third-party sites.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Accessing these links is at your own discretion.
                </p>
              </div>

              {/* Section 9 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  9. Limitation of Liability
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Bharat Fibernet shall not be liable for:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '1rem' }}>
                  <li>Any loss of data, revenue, or profits due to service interruption.</li>
                  <li>Indirect or consequential damages arising from the use or inability to use our services.</li>
                  <li>Delays or failures caused by circumstances beyond our control (e.g., network outages, natural disasters, government restrictions).</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  In all cases, our total liability shall not exceed the amount paid by you in the most recent billing cycle.
                </p>
              </div>

              {/* Section 10 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  10. Termination or Suspension
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  We may suspend or terminate your service if:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '1rem' }}>
                  <li>Payments are overdue.</li>
                  <li>You breach these Terms or misuse the service.</li>
                  <li>Required by law or regulatory order.</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  You will be notified before termination whenever possible.
                </p>
              </div>

              {/* Section 11 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  11. Indemnification
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  You agree to indemnify and hold harmless Bharat Fibernet, its employees, and affiliates from any claims, damages, or losses resulting from:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>Violation of these Terms</li>
                  <li>Misuse of our services</li>
                  <li>Infringement of intellectual property or third-party rights</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  12. Changes to Terms
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Bharat Fibernet reserves the right to modify or update these Terms at any time. Revised Terms will be posted on this page with an updated "Last Modified" date.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Continued use of our website or services implies acceptance of the revised Terms.
                </p>
              </div>

              {/* Section 13 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  13. Governing Law & Jurisdiction
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  These Terms are governed by the laws of India.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Any disputes shall fall under the jurisdiction of courts in <strong>Hyderabad, Telangana</strong>, unless stated otherwise by law.
                </p>
              </div>

              {/* Section 14 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  14. Contact Information
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  For any questions, feedback, or concerns regarding these Terms, please reach out to us:
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Email:</strong> <a href="mailto:info@bharatvoip.com" style={{ color: '#28a745', textDecoration: 'none' }}>info@bharatvoip.com</a>
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Website:</strong> <a href="https://www.bharatfibernet.in" style={{ color: '#28a745', textDecoration: 'none' }}>www.bharatfibernet.in</a>
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  <strong>Customer Support:</strong> <a href="tel:+917799906341" style={{ color: '#28a745', textDecoration: 'none' }}>+91 7799906341</a>
                </p>
              </div>

              {/* Section 15 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  15. Acknowledgment
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  By continuing to use Bharat Fibernet's website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and the accompanying <a href="/privacy-policy" style={{ color: '#fd9330', textDecoration: 'none', fontWeight: '600' }}>Privacy Policy</a>.
                </p>
              </div>

              {/* Contact CTA */}
              <div style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                border: '2px solid #e0e0e0',
                borderRadius: '15px',
                padding: '3rem 2rem',
                textAlign: 'center',
                marginTop: '4rem'
              }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#000' }}>
                  Have Questions About Our Terms?
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
                  Our support team is ready to help clarify any questions you may have.
                </p>
                <a 
                  href="/contact"
                  style={{
                    display: 'inline-block',
                    padding: '0.875rem 2.5rem',
                    background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Contact Support
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </NextLayout>
  );
}
