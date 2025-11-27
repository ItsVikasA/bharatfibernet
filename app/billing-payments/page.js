import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

export const metadata = {
  title: "Billing & Payments Help Guide | Bharat Fibernet",
  description: "Understand your bills. Manage your payments. Stay in control.",
};

export default function BillingPayments() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Billing & Payments" />

      {/* Header Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '2rem' }}>
                Bharat Fibernet Help Guide
              </h1>
              
              <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '3rem', color: '#333' }}>
                Understand your bills. Manage your payments. Stay in control.
              </h2>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#333', 
                maxWidth: '1000px', 
                margin: '0 auto'
              }}>
                No matter if you're managing a home network, an SME plan, or an enterprise account, this section helps you easily view, pay, and manage your billing details with complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              {/* Question 1 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  1. Where can I see my latest bill?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  You can easily view your current and past bills anytime through the <strong>Bharat Fibernet CRM</strong> or your account dashboard.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Homes and SMEs</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Log in to your account through the Bharat Fibernet website, app, or CRM portal.</li>
                  <li>Go to the <strong>Billing</strong> or <strong>My Account</strong> section.</li>
                  <li>Select <strong>View Bill</strong> to check your latest invoice, amount due, and due date.</li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1rem' }}>
                  <li>Access your <Link href="/crm" style={{ color: '#0066cc', textDecoration: 'underline' }}>Corporate CRM Portal</Link> using your business credentials.</li>
                  <li>Download consolidated monthly invoices or individual branch bills, if applicable.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Tip:</strong> Bills can also be downloaded as PDFs for easy tracking and record-keeping.
                </p>
              </div>

              {/* Question 2 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  2. How do I pay online?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Paying online is quick, secure, and available 24/7.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Steps:</h4>
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Log in to your Bharat Fibernet account on the website or app.</li>
                  <li>Go to the <strong>Billing</strong> section and click <strong>'Pay Now.'</strong></li>
                  <li>Choose your preferred method — debit/credit card, UPI, or net banking.</li>
                  <li>Confirm payment and save the receipt for your records.</li>
                </ol>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>You can also opt for <strong>scheduled payments</strong> or <strong>corporate billing integration</strong> through our finance team.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Note:</strong> Bharat Fibernet uses secure, encrypted gateways to ensure your payment safety.
                </p>
              </div>

              {/* Question 3 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  3. Payment not showing — what now?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you've completed a payment but it isn't reflecting yet:
                </p>
                
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Wait up to <strong>2 business hours</strong> for UPI or instant payments.</li>
                  <li>Card and net banking transactions may take up to <strong>24 hours</strong> to update.</li>
                  <li>Avoid making duplicate payments during this time.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  If your payment still doesn't appear after 24 hours:
                </p>
                
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '0' }}>
                  <li>Keep your <strong>transaction reference number</strong> handy.</li>
                  <li>Contact <strong>Bharat Fibernet Support</strong> with your account ID and proof of payment. Our team will help verify and update your payment record.</li>
                </ul>
              </div>

              {/* Question 4 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  4. How do I update my card or payment details?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  You can easily manage or update your saved payment options anytime.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Homes and SMEs</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Log in to your Bharat Fibernet account.</li>
                  <li>Go to <strong>Billing → Payment Methods.</strong></li>
                  <li>Select <strong>'Edit'</strong> or <strong>'Add New Card.'</strong></li>
                  <li>Enter your new details and confirm.</li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Corporate clients can contact their <strong>account manager or finance coordinator</strong> to update registered billing details or payment modes.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  All stored payment details are secured using encrypted systems and are never shared externally.
                </p>
              </div>

              {/* Question 5 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  5. How can I fix a wrong charge?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you notice an unexpected or incorrect charge on your bill:
                </p>
                
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Go to the <strong>Billing</strong> section in your account.</li>
                  <li>Review the detailed bill summary — itemized charges and taxes are shown clearly.</li>
                  <li>If something doesn't look right, click <strong>'Report an Issue'</strong> next to the transaction.</li>
                  <li>Share a brief note describing the charge in question.</li>
                </ol>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  You can raise a <strong>billing clarification request</strong> through your corporate portal.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Once your query is raised, the support team reviews it and provides clarification or correction if needed.
                </p>
              </div>

              {/* Question 6 */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  6. Need More Assistance?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you've followed the steps above and still have billing-related concerns, Bharat Fibernet's dedicated <strong>Billing Support Team</strong> is here to help.
                </p>
                
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Helpline:</strong> +91 7799906341 / 040-42027737
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
                  <strong>Email:</strong> info@bharatvoip.com
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  You can connect directly with your assigned <strong>Account Manager</strong> for faster coordination.
                </p>
              </div>

              {/* Closing Statement */}
              <div style={{ 
                textAlign: 'center', 
                padding: '3rem 2rem',
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', lineHeight: '1.4', color: '#333' }}>
                  At Bharat Fibernet, we believe transparency builds trust —<br />
                  every bill, every payment, every step.
                </h3>
              </div>

            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
