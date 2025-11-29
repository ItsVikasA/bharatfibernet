import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

export const metadata = {
  title: "Relocation & Disconnection Help Guide | Bharat Fibernet",
  description: "Stay connected wherever you move — or close your account with ease",
};

export default function RelocationDisconnection() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Relocation & Disconnection" />

      {/* Header Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(/assets/img/3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '2rem', color: '#1a1a1a' }}>
                Moving or closing your connection?
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
                      How do I shift my connection?
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
                      Can I keep my plan after moving?
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
                      What's the process for disconnection?
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
                      How long does relocation take?
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
                      Are there any charges for closure?
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
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/4.jpg)',
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
                  1. How do I shift my connection?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you're moving to a new location, you can easily transfer your Bharat Fibernet connection.
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Homes and SMEs:</h4>
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Log in to your <strong>Bharat Fibernet Account.</strong></li>
                  <li>Go to <strong>My Account → Relocation Request.</strong></li>
                  <li>Enter your new address and preferred shifting date.</li>
                  <li>Our team will verify service availability at your new location.</li>
                  <li>Once confirmed, a technician will visit to reinstall and activate your connection.</li>
                </ol>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Reach out to your <strong>Account Manager</strong> for site inspection, relocation planning, and network setup coordination.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Tip:</strong> Submit your relocation request at least <strong>3–5 days in advance</strong> to ensure a smooth transition.
                </p>
              </div>

              {/* Question 2 */}
              <div id="question2" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  2. Can I keep my plan after moving?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Yes — in most cases, you can continue using the same plan at your new location.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  However, plan availability depends on network coverage in your new area.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If the same plan isn't available, our support team will suggest the nearest equivalent or upgraded plan.
                </p>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  <strong>Note:</strong> All unused balance or prepaid amounts from your old location will be adjusted automatically in your new account.
                </p>
              </div>

              {/* Question 3 */}
              <div id="question3" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  3. What's the process for disconnection?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you wish to discontinue your Bharat Fibernet connection:
                </p>
                
                <ol style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li>Log in to your account and go to <strong>Service Requests → Disconnection.</strong></li>
                  <li>Fill in your registered details and select a reason for disconnection.</li>
                  <li>Confirm your request — you'll receive an acknowledgment email or SMS.</li>
                  <li>Our team will schedule a visit to collect any Bharat Fibernet equipment (if applicable).</li>
                </ol>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Contact your Account Manager to initiate a formal termination process, including equipment handover and final billing settlement.
                </p>
              </div>

              {/* Question 4 */}
              <div id="question4" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  4. How long does relocation take?
                </h3>
                
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li><strong>For Home and SME users:</strong> Relocation is typically completed within <strong>24 to 48 hours</strong> after service verification.</li>
                  <li><strong>For Enterprise customers:</strong> Relocation may take <strong>2–5 business days</strong>, depending on network setup and site requirements.</li>
                </ul>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  You'll receive notifications at every stage — from technician assignment to activation confirmation.
                </p>
              </div>

              {/* Question 5 */}
              <div id="question5" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  5. Are there any charges for closure?
                </h3>
                
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', marginBottom: '1.5rem' }}>
                  <li><strong>For prepaid customers:</strong> No additional charges apply; any remaining balance will be adjusted in your final statement.</li>
                  <li><strong>For postpaid customers:</strong> Ensure all dues are cleared before requesting closure.</li>
                  <li><strong>For customers using Bharat Fibernet equipment (routers or ONT devices):</strong> Charges may apply if the equipment isn't returned in working condition.</li>
                </ul>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Enterprise clients:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Please review your service agreement or contact your Account Manager for detailed closure policies.
                </p>
              </div>

              {/* Question 6 */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  6. Need More Assistance?
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you need help with shifting, disconnection, or plan continuation, our Support Team is ready to assist.
                </p>
                
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Helpline:</strong> +91 7799906341 / 040-42027737
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
                  <strong>Email:</strong> info@bharatvoip.com
                </p>
                
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>For Enterprises:</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Contact your dedicated Account Manager for end-to-end assistance and relocation planning.
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
                  At Bharat Fibernet, we make moving or closing your<br />
                  connection simple, transparent, and worry-free.
                </h3>
              </div>

            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
