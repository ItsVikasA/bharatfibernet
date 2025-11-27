import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

export const metadata = {
  title: "Router Setup & Login Help Guide | Bharat Fibernet",
  description: "Let's set up your router the right way",
};

export default function RouterSetupLogin() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Router Setup & Login" />

      {/* Header Section */}
      <section className="section-padding" style={{
        backgroundImage: 'url("/assets/img/background/pattern-13.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '2rem', color: '#fd9330' }}>
                Bharat Fibernet Help Guide
              </h1>
              
              <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '3rem', color: '#79ff5b' }}>
                Let's set up your router the right way.
              </h2>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#333', 
                maxWidth: '1000px', 
                margin: '0 auto'
              }}>
                Whether you're setting up a new router, fixing login issues, or just need to find your Wi-Fi password — this guide keeps it simple and clear.
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
                  1. How do I set up my new router?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Follow these quick steps to get your router up and running:
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Homes and SMEs</h4>
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Unbox your router and connect it to the power supply.</li>
                  <li>Plug the Internet (WAN) cable into the router's WAN or Internet port.</li>
                  <li>Connect your device (laptop or phone) to the default Wi-Fi network — the name and password are printed on the back or bottom of the router.</li>
                  <li>Open any browser and visit <strong>192.168.0.1</strong> or <strong>192.168.1.1</strong> (router login page).</li>
                  <li>Enter the default login credentials (usually <em>admin/admin</em> or as printed on your router).</li>
                  <li>Follow the setup wizard to configure your Wi-Fi name (SSID) and password.</li>
                </ol>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Connect through your IT team or assigned Bharat Fibernet technician for corporate router configuration and network mapping.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Tip:</strong> Keep your router in an open, central space to ensure better Wi-Fi coverage.
                </p>
              </div>

              {/* Question 2 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  2. What's my Wi-Fi password?
                </h3>
                
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Your default Wi-Fi password is printed on the sticker at the back or bottom of your router.</li>
                  <li>If you've changed it during setup, you can find it by:
                    <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                      <li>Logging in to your router dashboard and checking <strong>Wireless Settings → Password</strong>.</li>
                      <li>Or using your connected mobile app (for routers with companion apps).</li>
                    </ul>
                  </li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Wi-Fi credentials are usually pre-set by your IT administrator for security purposes.
                </p>
              </div>

              {/* Question 3 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  3. How can I log in to my router?
                </h3>
                
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Connect your device to the router via Wi-Fi or LAN cable.</li>
                  <li>Open a browser and type <strong>192.168.0.1</strong> or <strong>192.168.1.1</strong> in the address bar.</li>
                  <li>Enter your router's username and password (default is usually <em>admin</em> for both).</li>
                  <li>Once logged in, you can view connected devices, change Wi-Fi settings, or update firmware.</li>
                </ol>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Note:</strong> For security reasons, it's recommended to change your default router login credentials after setup.
                </p>
              </div>

              {/* Question 4 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  4. Why can't I connect to Wi-Fi?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If your device isn't connecting:
                </p>
                
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Check that the router is powered on and the Internet (WAN) cable is securely connected.</li>
                  <li>Restart the router and try again.</li>
                  <li>Forget the Wi-Fi network on your device and reconnect using the correct password.</li>
                  <li>Check if other devices are facing the same issue — if yes, the problem may be with the router or network line.</li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For persistent issues:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Contact Bharat Fibernet Support or raise a ticket through your Customer Portal.
                </p>
              </div>

              {/* Question 5 */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  5. How do I reset my router?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you've forgotten your password or can't access your router:
                </p>
                
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Locate the <strong>Reset</strong> button on the back of the router.</li>
                  <li>Press and hold it for <strong>10–15 seconds</strong> using a pin or paperclip until the lights blink.</li>
                  <li>The router will reboot and restore factory settings.</li>
                  <li>Reconfigure your router using the setup steps above.</li>
                </ol>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Caution:</strong> Resetting your router erases all custom settings (Wi-Fi name, password, etc.).
                </p>
              </div>

              {/* Question 6 */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  6. Need More Assistance?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you still face issues during setup or login, Bharat Fibernet's Router Support Team is here to help.
                </p>
                
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Helpline:</strong> +91 7799906341 / 040-42027737
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
                  <strong>Email:</strong> info@bharatvoip.com
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  You can reach your assigned Network Engineer or Account Manager directly for technical coordination.
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
                  At Bharat Fibernet, we make connectivity simple,<br />
                  secure, and stress-free.
                </h3>
              </div>

            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
