import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

export const metadata = {
  title: "Internet Connection Help Guide | Bharat Fibernet",
  description: "Simple fixes for common internet issues",
};

export default function InternetConnection() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Help Guide" />

      {/* Screen 1 - Help Guide Header */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '2rem' }}>
                Bharat Fibernet Help Guide
              </h1>
              
              <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '3rem', color: '#333' }}>
                Simple fixes for common internet issues
              </h2>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#333', 
                maxWidth: '1000px', 
                margin: '0 auto'
              }}>
                Whether you're a home user or managing a large enterprise, this section helps you quickly find clear answers to everyday connectivity questions — no technical help needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Content Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              {/* Question 1 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  1. Why Is My Internet So Slow?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Internet speed can depend on several factors, such as the number of connected devices or the network setup.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Homes</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Keep your router in an open, central spot to avoid weak signal zones.</li>
                  <li>Disconnect unused devices that might be sharing your Wi-Fi.</li>
                  <li>Restart your router occasionally to refresh performance.</li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For SMEs and Enterprises</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1rem' }}>
                  <li>Review current bandwidth usage; large file uploads or software updates can affect performance.</li>
                  <li>Use wired (LAN) connections for critical systems that need consistent speed.</li>
                  <li>Make sure your router or switch firmware is up to date.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  If the issue continues, note your speed test results and share them with our support team for review.
                </p>
              </div>

              {/* Question 2 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  2. Wi-Fi Keeps Dropping — What Can I Do?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  A Wi-Fi connection can drop occasionally due to placement, range, or signal interference.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Homes</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Keep your router away from walls, metal objects, and large appliances.</li>
                  <li>Reboot your router and connected devices when you notice signal drops.</li>
                  <li>Update your router firmware to ensure optimal performance.</li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For SMEs and Enterprises</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1rem' }}>
                  <li>Ensure there's sufficient access point coverage for all departments or floors.</li>
                  <li>Limit the number of devices connected to a single router.</li>
                  <li>Consider upgrading to a dual-band or mesh network for broader, more stable connectivity.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  If disconnections happen frequently, share the timings and pattern with support to help diagnose the cause faster.
                </p>
              </div>

              {/* Question 3 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  3. Is There An Outage In My Area?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Sometimes, connectivity may be affected by maintenance or temporary network activity.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>To check:</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Log in to the <a href="/crm" style={{ color: '#0066cc', textDecoration: 'underline' }}>BharatFibrenet CRM</a> portal to check your connection status or report an issue.</li>
                  <li>You can also ask nearby users or offices if they're experiencing similar downtime.</li>
                  <li>If required, raise a support ticket directly through the CRM for quick verification and response.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  BharatFibrenet actively monitors its network through real-time CRM tracking to ensure smooth, consistent connectivity for all users.
                </p>
              </div>

              {/* Question 4 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  4. How Can I Boost My Wi-Fi Speed?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  A few adjustments can make your Wi-Fi reach stronger and more consistent.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Homes</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Place the router at a higher, central point, ideally above waist height.</li>
                  <li>Avoid keeping it inside closed shelves or behind furniture.</li>
                  <li>Use a Wi-Fi extender if you have multiple floors or larger rooms.</li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For SMEs and Enterprises</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1rem' }}>
                  <li>Deploy access points in high-usage areas to ensure even coverage.</li>
                  <li>Switch to the 5GHz band for faster data transfer at shorter ranges.</li>
                  <li>Review your internal network layout to minimize overlap or congestion.</li>
                  <li>Our team can guide you with placement and coverage suggestions suited to your environment.</li>
                </ul>
              </div>

              {/* Question 5 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  5. Router's On But No Internet — Why?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  When the router appears active but there's no connection, it may be due to loose connections or local settings.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For All Users</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Check that all cables are firmly connected to your router and wall socket.</li>
                  <li>Restart your router — unplug it for 10 seconds, then plug it back in.</li>
                  <li>Try using another device (like your phone or laptop) to see if the issue is the same.</li>
                  <li>Look at the router lights — if the Internet or WAN light is off or blinking, note it down before contacting support.</li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1rem' }}>
                  <li>If your office uses a VPN or private network, check with your IT team to make sure it's connected correctly.</li>
                  <li>Ask your network administrator to confirm that local firewall or proxy settings aren't blocking the connection.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  Our technical support team can assist with step-by-step verification if the issue continues.
                </p>
              </div>

              {/* Question 6 */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  6. Need More Assistance?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you've reviewed the steps above and still need help, Bharat Fibernet's support channels are always available.
                </p>
                
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Helpline:</strong> +91 7799906341 / 040-42027737
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
                  <strong>Email:</strong> info@bharatvoip.com
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Our goal is to make your connectivity experience smooth, informed, and uninterrupted, whether at home, in your office, or across enterprise networks.
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
                  At Bharat Fibernet, we believe good connections go beyond speed —<br />
                  they begin with clarity, support, and trust.
                </h3>
              </div>

            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
