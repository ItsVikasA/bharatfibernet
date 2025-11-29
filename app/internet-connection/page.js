import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

export const metadata = {
  title: "Internet Connection Help Guide | Bharat Fibernet",
  description: "Let's get your connection back up",
};

export default function InternetConnection() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Internet Connection" />

      {/* Header Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '2rem', color: '#1a1a1a' }}>
                Let's get your connection back up.
              </h1>
            </div>
          </div>

          {/* FAQ Buttons */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '3rem'
              }}>
                <a href="#question1" style={{ textDecoration: 'none', flex: '1 1 18%', minWidth: '180px' }}>
                  <div style={{
                    background: '#d4e8f7',
                    padding: '2rem 1.5rem',
                    borderRadius: '15px',
                    border: '2px solid #333',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}>
                    <p style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: '500',
                      color: '#1a1a1a',
                      marginBottom: '0',
                      lineHeight: '1.4'
                    }}>
                      Why is my internet so slow?
                    </p>
                  </div>
                </a>

                <a href="#question2" style={{ textDecoration: 'none', flex: '1 1 18%', minWidth: '180px' }}>
                  <div style={{
                    background: '#d4e8f7',
                    padding: '2rem 1.5rem',
                    borderRadius: '15px',
                    border: '2px solid #333',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}>
                    <p style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: '500',
                      color: '#1a1a1a',
                      marginBottom: '0',
                      lineHeight: '1.4'
                    }}>
                      Wi-Fi keeps dropping — what can I do?
                    </p>
                  </div>
                </a>

                <a href="#question3" style={{ textDecoration: 'none', flex: '1 1 18%', minWidth: '180px' }}>
                  <div style={{
                    background: '#d4e8f7',
                    padding: '2rem 1.5rem',
                    borderRadius: '15px',
                    border: '2px solid #333',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}>
                    <p style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: '500',
                      color: '#1a1a1a',
                      marginBottom: '0',
                      lineHeight: '1.4'
                    }}>
                      Is there an outage in my area?
                    </p>
                  </div>
                </a>

                <a href="#question4" style={{ textDecoration: 'none', flex: '1 1 18%', minWidth: '180px' }}>
                  <div style={{
                    background: '#d4e8f7',
                    padding: '2rem 1.5rem',
                    borderRadius: '15px',
                    border: '2px solid #333',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}>
                    <p style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: '500',
                      color: '#1a1a1a',
                      marginBottom: '0',
                      lineHeight: '1.4'
                    }}>
                      How can I boost my Wi-Fi speed?
                    </p>
                  </div>
                </a>

                <a href="#question5" style={{ textDecoration: 'none', flex: '1 1 18%', minWidth: '180px' }}>
                  <div style={{
                    background: '#d4e8f7',
                    padding: '2rem 1.5rem',
                    borderRadius: '15px',
                    border: '2px solid #333',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}>
                    <p style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: '500',
                      color: '#1a1a1a',
                      marginBottom: '0',
                      lineHeight: '1.4'
                    }}>
                      Router's on but no internet — why?
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
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
              <div id="question1" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  1. Why is my internet so slow?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Slow internet can be frustrating, but there are several common causes and quick fixes:
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Common Causes:</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Too many devices connected to your network</li>
                  <li>Router placement (walls, distance, interference)</li>
                  <li>Background downloads or updates running</li>
                  <li>Peak usage hours in your area</li>
                  <li>Outdated router firmware</li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Quick Fixes:</h4>
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Restart your router (unplug for 30 seconds, then plug back in)</li>
                  <li>Move closer to the router or reposition it to a central location</li>
                  <li>Disconnect unused devices</li>
                  <li>Check if anyone is streaming or downloading large files</li>
                  <li>Run a speed test at different times to identify patterns</li>
                </ol>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Still slow?</strong> Contact our support team to check for network issues or upgrade options.
                </p>
              </div>

              {/* Question 2 */}
              <div id="question2" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  2. Wi-Fi keeps dropping — what can I do?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If your Wi-Fi connection keeps disconnecting:
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Troubleshooting Steps:</h4>
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li><strong>Restart your router:</strong> Unplug it for 30 seconds, then reconnect</li>
                  <li><strong>Check router placement:</strong> Keep it away from microwaves, cordless phones, and thick walls</li>
                  <li><strong>Update router firmware:</strong> Log into your router settings and check for updates</li>
                  <li><strong>Change Wi-Fi channel:</strong> Switch to a less congested channel (1, 6, or 11 for 2.4GHz)</li>
                  <li><strong>Reduce interference:</strong> Move electronic devices away from the router</li>
                </ol>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Persistent Issues:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Contact Bharat Fibernet support to check for line issues or schedule a technician visit.
                </p>
              </div>

              {/* Question 3 */}
              <div id="question3" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  3. Is there an outage in my area?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  To check if there's a service outage:
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Quick Check:</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Log in to your Bharat Fibernet account and check the <strong>Service Status</strong> section</li>
                  <li>Visit our website's outage map (if available)</li>
                  <li>Check our social media pages for announcements</li>
                  <li>Call our helpline: +91 7799906341 / 040-42027737</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If there's a known outage, our team is already working on it. You'll receive updates via SMS or email once service is restored.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>No outage reported?</strong> The issue might be specific to your connection. Contact support for assistance.
                </p>
              </div>

              {/* Question 4 */}
              <div id="question4" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  4. How can I boost my Wi-Fi speed?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Here are proven ways to improve your Wi-Fi performance:
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Optimization Tips:</h4>
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li><strong>Router Placement:</strong> Place it in a central, elevated location away from walls and obstacles</li>
                  <li><strong>Use 5GHz Band:</strong> If your router supports dual-band, use 5GHz for faster speeds (shorter range)</li>
                  <li><strong>Limit Connected Devices:</strong> Disconnect devices you're not using</li>
                  <li><strong>Use Ethernet:</strong> For gaming or streaming, connect directly via cable</li>
                  <li><strong>Update Devices:</strong> Keep your router firmware and device drivers updated</li>
                  <li><strong>Change Password:</strong> Ensure no unauthorized users are on your network</li>
                  <li><strong>Wi-Fi Extenders:</strong> Consider using range extenders for larger homes</li>
                </ol>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Need more speed?</strong> Check if you're eligible for a plan upgrade.
                </p>
              </div>

              {/* Question 5 */}
              <div id="question5" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  5. Router's on but no internet — why?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If your router lights are on but you have no internet access:
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Troubleshooting Steps:</h4>
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li><strong>Check the WAN/Internet light:</strong> It should be solid or blinking green. If it's red or off, there's a line issue</li>
                  <li><strong>Restart the router:</strong> Unplug for 30 seconds, then reconnect</li>
                  <li><strong>Check cables:</strong> Ensure the WAN/Internet cable is securely connected</li>
                  <li><strong>Try another device:</strong> Check if other devices can connect to verify if it's device-specific</li>
                  <li><strong>Forget and reconnect:</strong> On your device, forget the Wi-Fi network and reconnect with the password</li>
                </ol>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Check Your Account:</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Verify your account is active and payments are up to date</li>
                  <li>Check for any service suspension notices</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  If none of these work, contact Bharat Fibernet support for technical assistance.
                </p>
              </div>

              {/* Question 6 */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  6. Need More Assistance?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you're still experiencing connection issues, our technical support team is here to help.
                </p>
                
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Helpline:</strong> +91 7799906341 / 040-42027737
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
                  <strong>Email:</strong> info@bharatvoip.com
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Contact your dedicated Network Engineer or Account Manager for priority support.
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
                  At Bharat Fibernet, we're committed to keeping you<br />
                  connected, always.
                </h3>
              </div>

            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
