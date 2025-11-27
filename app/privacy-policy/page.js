'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

export default function PrivacyPolicy() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Privacy Policy" />

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
                  Privacy Policy
                </h1>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  lineHeight: '1.8'
                }}>
                  Last Updated: November 27, 2025
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
              
              {/* Objective */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  Objective of the Privacy Policy
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  This Privacy Policy aims to inform website visitors about our practices regarding the collection, use, and disclosure of personal information when using our services.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  The Privacy Policy explains our data collection methodology, use of cookies, links to other websites, children's privacy, and other relevant details to help you understand how your data is handled.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  By choosing to use our services, you agree to the collection and use of information as described in this Privacy Policy ("Policy"). The personal information we collect is used solely for improving and delivering our services. We do not share or disclose your data to anyone except as outlined in this Policy.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  We, <strong>Bharat Fibernet</strong>, are committed to complying with <strong>The Digital Personal Data Protection Act, 2023</strong> and other applicable laws of India.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  We collect, use, and disclose personal data for purposes that are notified to you or permitted by law. Information collected from our website (e.g., through contact forms, service requests, or feedback submissions) may be used for communication, analysis, and service improvement.
                </p>
              </div>

              {/* Section 1 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  1. Information Collection and Use
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  To provide a better user experience, we may collect personally identifiable information such as:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1rem', paddingLeft: '2rem' }}>
                  <li>Name</li>
                  <li>Phone Number</li>
                  <li>Email Address</li>
                  <li>Postal Code and City</li>
                  <li>Organisation Name</li>
                  <li>Occupational Designation</li>
                  <li>Business Inquiry Details</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  This information is used only to contact you with service updates, marketing communication, or company newsletters (if you have opted in).
                </p>
              </div>

              {/* Section 2 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  2. Legal References
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Unless stated otherwise, all terms in this document carry the same meaning as defined in <strong>The Digital Personal Data Protection Act, 2023</strong>.
                </p>
              </div>

              {/* Section 3 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  3. Log Data
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Whenever you visit our website, we collect information that your browser sends to us, known as Log Data. This may include your:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1rem', paddingLeft: '2rem' }}>
                  <li>IP address</li>
                  <li>Browser version</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Date and time of visit</li>
                  <li>Technical and usage information related to the website or our network services</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  We may also collect CCTV footage or images when you visit our physical premises, as part of our security and safety protocols.
                </p>
              </div>

              {/* Section 4 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  4. Cookies
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Cookies are small files stored on your device. We use cookies to improve website functionality and personalize your browsing experience. You may choose to disable cookies in your browser, but this may limit certain website features.
                </p>
              </div>

              {/* Section 5 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  5. Service Providers
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  We may engage third-party companies to:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1rem', paddingLeft: '2rem' }}>
                  <li>Facilitate or maintain our services</li>
                  <li>Analyze website usage</li>
                  <li>Provide technical or marketing support</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  These third parties have limited access to your personal data on a strict "need-to-know" basis and are obligated not to use it for any other purpose.
                </p>
              </div>

              {/* Section 6 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  6. Links to Other Sites
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Our website may contain links to external websites not operated by Bharat Fibernet. We advise reviewing their privacy policies, as we are not responsible for the content or practices of third-party websites.
                </p>
              </div>

              {/* Section 7 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  7. Children's Privacy
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Our services are not directed toward children. Before processing the personal data of a child or a person with a legal guardian, we will obtain verifiable consent as per applicable Indian laws.
                </p>
              </div>

              {/* Section 8 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  8. Contact Us
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  <strong>Data Fiduciary:</strong> Bharat Fibernet
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  <strong>Email:</strong> <a href="mailto:info@bharatvoip.com" style={{ color: '#28a745', textDecoration: 'none' }}>info@bharatvoip.com</a>
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  <strong>Website:</strong> <a href="https://www.bharatfibernet.com" style={{ color: '#28a745', textDecoration: 'none' }}>www.bharatfibernet.com</a>
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  You have the right to withdraw your consent at any time by contacting us.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Unless otherwise mentioned, "we," "us," and "our" refer to Bharat Fibernet; "you" and "your" refer to the person providing personal data.
                </p>
              </div>

              {/* Section 9 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  9. Usage of Personal Data
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  By submitting your information through our website, you agree to the collection, use, and disclosure of your data for the following purposes:
                </p>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  9.1. Service Provision & Administration
                </h3>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                  <li>To present our website and content</li>
                  <li>To provide requested products or services</li>
                  <li>To process service activations, upgrades, or cancellations</li>
                  <li>To handle billing and payments</li>
                  <li>To respond to your inquiries or service requests</li>
                  <li>To inform you about service updates and upgrades</li>
                  <li>For verification and security purposes</li>
                </ul>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  9.2. Legal & Regulatory Compliance
                </h3>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>To meet legal and regulatory requirements</li>
                  <li>To assist law enforcement or government authorities when required by law</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  10. Consent for Data Processing
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  By using our website, you provide informed and explicit consent for the collection and use of your data as described.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  You have the right to withdraw your consent at any time by notifying us through email.
                </p>
              </div>

              {/* Section 11 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  11. Obligations of Bharat Fibernet (Data Fiduciary)
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  We ensure that:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>Data is processed lawfully and only for legitimate purposes.</li>
                  <li>Security safeguards are in place to prevent data breaches.</li>
                  <li>Personal data is erased once its purpose is fulfilled or consent is withdrawn.</li>
                  <li>In the event of a data breach, affected users and authorities will be notified promptly.</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  12. Rights of Data Principals
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Your rights under <strong>The Digital Personal Data Protection Act, 2023</strong> remain fully applicable, including the right to access, correct, withdraw consent, and seek grievance redressal.
                </p>
              </div>

              {/* Section 13 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  13. Terms of Use
                </h2>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  13.1. Disclaimer
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  All content on this website is provided for informational purposes only. Bharat Fibernet does not guarantee uninterrupted access, accuracy, or completeness of the content. The website and its materials are provided "as is" without warranties of any kind.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  13.2. Intellectual Property
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  All content, including text, graphics, logos, and trademarks, is the property of Bharat Fibernet. Reproduction or redistribution without written permission is prohibited.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  13.3. Geographic Limitation
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Some services or offers may not be available in all regions. Bharat Fibernet reserves the right to limit access or modify offerings based on geographic or regulatory constraints.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  13.4. General Terms
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Bharat Fibernet reserves the right to update this Policy at any time. Changes will take effect once posted on our website. Continued use of our website constitutes acceptance of the revised Policy.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  By accessing our website, you agree that the laws of India govern this Policy and consent to the jurisdiction of Indian authorities and the Data Protection Board of India.
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
                  Questions About Our Privacy Policy?
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
                  We're here to help. Contact us for any privacy-related concerns or inquiries.
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
                  Contact Us
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </NextLayout>
  );
}
