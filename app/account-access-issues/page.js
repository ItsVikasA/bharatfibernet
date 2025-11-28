import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

export const metadata = {
  title: "Account Access & Issues Help Guide | Bharat Fibernet",
  description: "Access your account with ease, anytime you need",
};

export default function AccountAccessIssues() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Account Access & Issues" />

      {/* Header Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '2rem' }}>
                Bharat Fibernet Help Guide
              </h1>
              
              <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '3rem', color: '#333' }}>
                Access your account with ease, anytime you need.
              </h2>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#333', 
                maxWidth: '1000px', 
                margin: '0 auto'
              }}>
                If you're planning to switch plans, upgrade your speed, or understand your router ownership, this section helps you manage your account with ease and clarity.
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
                  1. How do I change my plan?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Changing your plan is simple and can be done directly through your Bharat Fibernet account.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Homes and SMEs:</h4>
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Log in to your Bharat Fibernet account on the website or mobile app.</li>
                  <li>Go to <strong>My Account → Manage Plan.</strong></li>
                  <li>Choose your new plan from the available options.</li>
                  <li>Click <strong>'Upgrade'</strong> or <strong>'Change Plan'</strong> and confirm your selection.</li>
                  <li>You'll receive a confirmation message once the request is submitted.</li>
                </ol>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Contact your assigned Account Manager or Business Support Executive to modify your enterprise package or bandwidth allocation.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Tip:</strong> Changing plans mid-cycle may adjust your bill on a pro-rata basis.
                </p>
              </div>

              {/* Question 2 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  2. What new plans can I get?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Bharat Fibernet offers a wide range of plans to fit every need — from home users to large enterprises.
                </p>
                
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li><strong>Home Plans:</strong> High-speed internet suitable for streaming, work-from-home, and gaming.</li>
                  <li><strong>SME Plans:</strong> Scalable packages for small and medium businesses with stable bandwidth.</li>
                  <li><strong>Enterprise Plans:</strong> Custom solutions with dedicated support, static IPs, and uptime guarantees.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  You can view all available plans on the <Link href="/pricing" style={{ color: '#0066cc', textDecoration: 'underline' }}>Plans & Pricing</Link> page within your account dashboard or the official Bharat Fibernet website.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Note:</strong> Plan availability may vary by location.
                </p>
              </div>

              {/* Question 3 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  3. How long does an upgrade take?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Once you submit your plan upgrade request:
                </p>
                
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>For <strong>Home and SME users</strong>, upgrades are typically processed within <strong>30 minutes to 2 hours.</strong></li>
                  <li>For <strong>Enterprise customers</strong>, upgrades may take <strong>up to one business day</strong>, depending on network reconfiguration needs.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  You'll receive a confirmation email or SMS once the new plan is active.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Tip:</strong> Keep your router powered on during the upgrade window for seamless activation.
                </p>
              </div>

              {/* Question 4 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  4. Can I keep my router after upgrading?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Yes — in most cases, your existing router remains compatible with the upgraded plan.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  However, if your new plan requires a higher bandwidth router (for example, a dual-band or gigabit model), our technician will assist with the replacement.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprise customers:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Your IT team or Account Manager will guide you on router ownership, rental, or upgrade requirements based on your service agreement.
                </p>
              </div>

              {/* Question 5 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  5. How soon can my upgrade be active?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  In most cases, your new plan activates <strong>instantly</strong> after successful processing and payment confirmation.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  If the upgrade doesn't reflect within a few hours:
                </p>
                
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Restart your router.</li>
                  <li>Log in to your account and check the <strong>Plan Details</strong> section.</li>
                  <li>If still pending, contact Bharat Fibernet Support for manual verification.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Enterprise customers</strong> may have scheduled upgrade activations during non-peak hours for business continuity.
                </p>
              </div>

              {/* Question 6 */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  6. Need More Assistance?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you face any issues while upgrading, changing plans, or accessing your account, Bharat Fibernet's Support Team is ready to assist you.
                </p>
                
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Helpline:</strong> +91 7799906341 / 040-42027737
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
                  <strong>Email:</strong> info@bharatvoip.com
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Reach out to your dedicated Account Manager for faster coordination and support.
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
                  At Bharat Fibernet, we make managing your<br />
                  connection simple, flexible, and customer-first.
                </h3>
              </div>

            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
