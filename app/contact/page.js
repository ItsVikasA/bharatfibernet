"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Contact Us" />
      
      {/* Connect with Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '2rem' }}>
                Connect with Us
              </h1>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#333', 
                maxWidth: '1000px', 
                margin: '0 auto 3rem'
              }}>
                We're here to make your connection strong and reliable. Whether you need broadband support, enterprise solutions, or expert consultation, our team is just a message away.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2.5rem', textAlign: 'center' }}>
                Select Your Option And Get In Touch Instantly
              </h2>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '3rem'
              }}>
                <div style={{ 
                  border: '3px solid #2c5aa0', 
                  padding: '1.2rem 1.5rem',
                  background: '#e6f2ff',
                  width: '100%',
                  maxWidth: '500px',
                  cursor: 'pointer'
                }}>
                  <select 
                    className="form-select"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    style={{
                      width: '100%',
                      padding: '0',
                      border: 'none',
                      fontSize: '1.1rem',
                      background: 'transparent',
                      fontWeight: '600',
                      cursor: 'pointer',
                      color: '#000',
                      outline: 'none'
                    }}
                  >
                    <option value="">Select Your Enquiry Type</option>
                    <option value="home-broadband">Home Broadband Enquiry</option>
                    <option value="business-enterprise">Business & Enterprise Connectivity</option>
                    <option value="leased-line">Leased Line / Dedicated Internet</option>
                    <option value="consultation">Consultation</option>
                    <option value="billing">Billing & Account Assistance</option>
                    <option value="technical">Technical Escalation</option>
                    <option value="other">Other (General Query)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{ 
                border: '3px solid #000', 
                padding: '3rem 2.5rem',
                background: 'white'
              }}>
                <form>
                  {/* Common Fields - First Name & Last Name */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        placeholder="First Name"
                        required
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        placeholder="Last Name"
                        required
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  </div>

                  {/* Conditional Fields - Company Name & Designation */}
                  {(selectedOption === 'business-enterprise' || selectedOption === 'leased-line' || selectedOption === 'consultation') && (
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          placeholder="Company Name"
                          style={{
                            width: '100%',
                            padding: '1rem 1.5rem',
                            border: '2px solid #000',
                            borderRadius: '8px',
                            fontSize: '1.05rem',
                            background: '#e6f2ff',
                            color: '#000'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          placeholder="Designation"
                          style={{
                            width: '100%',
                            padding: '1rem 1.5rem',
                            border: '2px solid #000',
                            borderRadius: '8px',
                            fontSize: '1.05rem',
                            background: '#e6f2ff',
                            color: '#000'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Email & Contact Number */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input 
                        type="email" 
                        placeholder="Email"
                        required
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="tel" 
                        placeholder="Contact Number"
                        required
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  </div>

                  {/* Conditional Field - Required Bandwidth */}
                  {selectedOption === 'leased-line' && (
                    <div className="mb-3">
                      <input 
                        type="text" 
                        placeholder="Required Bandwidth (e.g., 100 Mbps, 1 Gbps)"
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  )}

                  {/* Conditional Field - Company Size */}
                  {selectedOption === 'consultation' && (
                    <div className="mb-3">
                      <select 
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="">Company Size</option>
                        <option value="1-10">1–10 Employees</option>
                        <option value="11-50">11–50 Employees</option>
                        <option value="51-200">51–200 Employees</option>
                        <option value="200+">200+ Employees</option>
                      </select>
                    </div>
                  )}

                  {/* Conditional Field - Account ID */}
                  {selectedOption === 'billing' && (
                    <div className="mb-3">
                      <input 
                        type="text" 
                        placeholder="Account ID (if applicable)"
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  )}

                  {/* Conditional Field - Customer ID */}
                  {selectedOption === 'technical' && (
                    <div className="mb-3">
                      <input 
                        type="text" 
                        placeholder="Customer ID / Registered Number"
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  )}

                  {/* Dynamic Message Textarea */}
                  <div className="mb-3">
                    <textarea 
                      placeholder={
                        selectedOption === 'home-broadband' ? "Tell us about your area or preferred plan." :
                        selectedOption === 'business-enterprise' ? "Share your business connectivity needs or location." :
                        selectedOption === 'leased-line' ? "Tell us about your location and bandwidth need." :
                        selectedOption === 'consultation' ? "Share your business requirements or let us know what kind of connectivity you're looking for." :
                        selectedOption === 'billing' ? "Please mention your Account ID or describe your billing concern." :
                        selectedOption === 'technical' ? "Describe your issue briefly (e.g., no internet, low speed)." :
                        selectedOption === 'other' ? "Share your query or feedback." :
                        "Message"
                      }
                      rows="5"
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        border: '2px solid #000',
                        borderRadius: '8px',
                        fontSize: '1.05rem',
                        background: '#e6f2ff',
                        color: '#000',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem' }}>
                    By clicking Submit, you have read and agreed to our Data Use Policy.
                  </p>

                  <div className="text-center">
                    <button 
                      type="submit"
                      style={{
                        padding: '0.75rem 3rem',
                        background: 'white',
                        color: '#000',
                        border: '2px solid #000',
                        borderRadius: '5px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Submit!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotline and Location Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {/* Left Column - Hotline */}
            <div className="col-lg-6">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>
                Hotline
              </h2>
              
              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>
                  For General Enquiries (Office Hours Only):
                </h4>
                <p style={{ fontSize: '1.05rem', color: '#333', marginBottom: '2rem' }}>
                  <strong>Call/WhatsApp:</strong><br />
                  <a href="tel:+917799906341" style={{ color: '#333', textDecoration: 'none' }}>+91 7799906341</a><br />
                  <a href="tel:04042027737" style={{ color: '#333', textDecoration: 'none' }}>040-42027737</a>
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>
                  For Technical Support (24/7):
                </h4>
                <p style={{ fontSize: '1.05rem', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Call:</strong>
                </p>
                <p style={{ fontSize: '1.05rem', color: '#333', marginBottom: '0' }}>
                  <a href="tel:+917799906341" style={{ color: '#333', textDecoration: 'none' }}>+91 7799906341</a><br />
                  <span style={{ fontSize: '0.95rem', color: '#666' }}>Available 24 hours for urgent technical issues</span>
                </p>
              </div>
            </div>

            {/* Right Column - Location */}
            <div className="col-lg-6">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'right' }}>
                Location
              </h2>
              
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.8', textAlign: 'right', marginBottom: '0.5rem' }}>
                  <strong>Jyothi Flora, 4th Floor</strong>
                </p>
                <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.8', textAlign: 'right' }}>
                  Kavuri Hills, Phase 2<br />
                  Madhapur<br />
                  Hyderabad, Telangana<br />
                  500081
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', textAlign: 'right' }}>
                  Office Hours:
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.8', textAlign: 'right', marginBottom: '0.5rem' }}>
                  <strong>Mon – Fri:</strong> 9:00 AM – 6:00 PM
                </p>
                <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.8', textAlign: 'right' }}>
                  <strong>Sat, Sun & Public Holidays:</strong> Closed
                </p>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', textAlign: 'right', marginTop: '0.5rem' }}>
                  (Technical support available 24/7)
                </p>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="row" style={{ marginTop: '4rem' }}>
            <div className="col-12 text-center">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Email
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#333', marginBottom: '0.5rem' }}>
                <strong>General Inquiries & Support:</strong>
              </p>
              <a 
                href="mailto:info@bharatvoip.com" 
                style={{ 
                  fontSize: '1.2rem', 
                  color: '#0066cc', 
                  textDecoration: 'underline' 
                }}
              >
                info@bharatvoip.com
              </a>
              <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '1rem' }}>
                We typically respond within 24 business hours
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Old Contact Section - Kept for reference
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Contact Us
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Don't Hessite to Contact <br />
                      Our Team Member
                    </h2>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Map Section Start */}
      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </NextLayout>
  );
};

export default Page;
