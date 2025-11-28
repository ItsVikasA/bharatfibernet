'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="What We Do" />

      {/* Hero Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                color: '#000'
              }}>
                What We Do
              </h1>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                lineHeight: '1.8',
                marginBottom: '0'
              }}>
                Delivering lightning-fast fiber optic internet solutions that power homes, businesses, and communities across India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                color: '#000'
              }}>
                Our Core Services
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                We provide comprehensive internet connectivity solutions designed to meet the diverse needs of residential, SME, and enterprise customers.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Service 1 */}
            <div className="col-lg-4 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '15px',
                padding: '2.5rem',
                height: '100%',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 147, 48, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <i className="fas fa-home" style={{ fontSize: '2rem', color: '#fff' }}></i>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#000' }}>
                  Residential Broadband
                </h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Ultra-fast fiber optic internet for homes with speeds ranging from 50 Mbps to 1 Gbps. Enjoy seamless streaming, gaming, and remote work with unlimited data plans.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    Unlimited data usage
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    24/7 customer support
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    Free installation & router
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    No hidden charges
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-lg-4 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '15px',
                padding: '2.5rem',
                height: '100%',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(40, 167, 69, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #28a745 0%, #34d058 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <i className="fas fa-building" style={{ fontSize: '2rem', color: '#fff' }}></i>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#000' }}>
                  SME & Business Solutions
                </h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Dedicated high-speed internet connectivity designed for small and medium enterprises. Boost productivity with reliable, secure, and scalable network solutions.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    Dedicated bandwidth
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    Static IP available
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    Priority support
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    99.9% uptime guarantee
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-lg-4 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '15px',
                padding: '2.5rem',
                height: '100%',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 147, 48, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <i className="fas fa-city" style={{ fontSize: '2rem', color: '#fff' }}></i>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#000' }}>
                  Enterprise Connectivity
                </h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Customized fiber optic solutions for large organizations. Get enterprise-grade connectivity with dedicated support, SLAs, and advanced security features.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    Custom bandwidth plans
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    Managed network services
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    Dedicated account manager
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check-circle" style={{ color: '#28a745', marginRight: '10px' }}></i>
                    Advanced security options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                color: '#000'
              }}>
                Fiber Optic Technology
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We use state-of-the-art fiber optic technology to deliver internet speeds that are up to 100 times faster than traditional broadband connections.
              </p>
              <div className="row g-3">
                <div className="col-6">
                  <div style={{
                    background: '#fff',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#fd9330', marginBottom: '0.5rem' }}>
                      1 Gbps
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                      Maximum Speed
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div style={{
                    background: '#fff',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#28a745', marginBottom: '0.5rem' }}>
                      99.9%
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                      Uptime
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div style={{
                    background: '#fff',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#fd9330', marginBottom: '0.5rem' }}>
                      24/7
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                      Support
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div style={{
                    background: '#fff',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#28a745', marginBottom: '0.5rem' }}>
                      48-72h
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                      Installation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{
                background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                borderRadius: '15px',
                padding: '3rem',
                color: '#fff'
              }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', color: '#fff' }}>
                  Why Fiber Optic?
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                    <i className="fas fa-bolt" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i>
                    Lightning-fast speeds up to 1 Gbps
                  </li>
                  <li style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                    <i className="fas fa-signal" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i>
                    Consistent performance with low latency
                  </li>
                  <li style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                    <i className="fas fa-shield-alt" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i>
                    Enhanced security and reliability
                  </li>
                  <li style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                    <i className="fas fa-cloud" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i>
                    Perfect for cloud applications
                  </li>
                  <li style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                    <i className="fas fa-expand-arrows-alt" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i>
                    Future-proof technology
                  </li>
                  <li style={{ marginBottom: '0', fontSize: '1.05rem' }}>
                    <i className="fas fa-chart-line" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i>
                    Scalable as your needs grow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                color: '#000'
              }}>
                Additional Services
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Beyond internet connectivity, we offer a range of value-added services to enhance your digital experience.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '15px',
                padding: '2rem',
                textAlign: 'center',
                height: '100%',
                border: '2px solid #f0f0f0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fd9330';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f0f0f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #28a745 0%, #34d058 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <i className="fas fa-tv" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#000' }}>
                  IPTV Services
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  Stream live TV channels with crystal-clear quality
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '15px',
                padding: '2rem',
                textAlign: 'center',
                height: '100%',
                border: '2px solid #f0f0f0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#28a745';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f0f0f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <i className="fas fa-phone-alt" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#000' }}>
                  VoIP Solutions
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  Cost-effective voice communication over internet
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '15px',
                padding: '2rem',
                textAlign: 'center',
                height: '100%',
                border: '2px solid #f0f0f0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fd9330';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f0f0f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #28a745 0%, #34d058 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <i className="fas fa-network-wired" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#000' }}>
                  Managed Network
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  Complete network management and monitoring
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '15px',
                padding: '2rem',
                textAlign: 'center',
                height: '100%',
                border: '2px solid #f0f0f0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#28a745';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f0f0f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <i className="fas fa-cogs" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#000' }}>
                  Technical Support
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  24/7 expert technical assistance and maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                color: '#fff'
              }}>
                Ready to Experience the Future of Internet?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#fff',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                Join thousands of satisfied customers who trust Bharat Fibernet for their internet needs.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link 
                  href="/pricing"
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    background: '#fff',
                    color: '#fd9330',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  View Plans & Pricing
                </Link>
                <Link 
                  href="/contact"
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    background: 'transparent',
                    color: '#fff',
                    border: '2px solid #fff',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.color = '#fd9330';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </NextLayout>
  );
}
