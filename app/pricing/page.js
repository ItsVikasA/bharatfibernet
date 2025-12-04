import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Pricing Plans" />
      
      {/* Corporate Leased Lines Section */}
      <section className="pricing-section section-padding" style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Corporate Leased Lines
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Empower Enterprise Operations
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: '900px', margin: '20px auto 0', lineHeight: '1.8', color: '#555' }}>
              Empower enterprise operations with high-performance leased lines that ensure consistent, secure, and always-available connectivity. Bharath VoIP's dedicated leased lines deliver fixed-bandwidth, symmetrical speeds, and uninterrupted uptime, keeping your business connected 24×7 through advanced fiber optic infrastructure.
            </p>
            <p className="wow fadeInUp" data-wow-delay=".5s" style={{ maxWidth: '900px', margin: '20px auto 0', lineHeight: '1.8', color: '#555' }}>
              Whether it's video conferencing, data transfer, or remote collaboration, experience internet built for precision and stability. Each connection comes with static IPs, 100% dedicated access, and proactive monitoring to help your business operate without disruption.
            </p>
            <div className="wow fadeInUp" data-wow-delay=".6s" style={{ margin: '30px 0 20px' }}>
              <h5 style={{ color: '#333' }}>Tailored Business Plans + 18% GST</h5>
              <p style={{ color: '#666' }}>Get a quote today and discover plans designed to fit your enterprise needs.</p>
              <Link href="/contact" className="theme-btn mt-2" style={{ background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)', border: 'none' }}>Request a Quote</Link>
            </div>
          </div>

          {/* Why Enterprises Choose */}
          <div className="row mt-5 mb-5">
            <div className="col-12">
              <h3 className="text-center mb-5 wow fadeInUp" style={{ color: '#333', fontWeight: '700' }}>Why Enterprises Choose Bharath VoIP</h3>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".3s">
              <div style={{ background: '#fff', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', height: '100%', transition: 'transform 0.3s ease' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-technical-support" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Guaranteed High-Speed Connectivity</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Dedicated, uncontended bandwidth ensures consistent performance—even during peak hours.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div style={{ background: '#fff', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', height: '100%', transition: 'transform 0.3s ease' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-shield" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Secure and Stable Networking</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Static IPs and enterprise-grade routing provide complete control and secure remote access.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".5s">
              <div style={{ background: '#fff', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', height: '100%', transition: 'transform 0.3s ease' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-web-development" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Comprehensive Wired & Wireless Options</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Choose between reliable wired fiber connectivity or flexible wireless solutions for quick deployment.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".6s">
              <div style={{ background: '#fff', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', height: '100%', transition: 'transform 0.3s ease' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-development" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Tailored for Every Business Size</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Custom plans designed to match unique operational, bandwidth, and scalability needs.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".7s">
              <div style={{ background: '#fff', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', height: '100%', transition: 'transform 0.3s ease' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-consultancy" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>24×7 Expert Support</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Dedicated enterprise assistance with proactive monitoring and issue resolution.</p>
              </div>
            </div>
          </div>

          <div className="section-title text-center mt-5 mb-5">
            <h3 className="wow fadeInUp" style={{ color: '#333', fontWeight: '700' }}>Explore Our Corporate Leased Line Plans</h3>
            <p className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#666' }}>Reliable performance for enterprises that can't afford to pause.</p>
          </div>

          <div className="row justify-content-center">
            {[
              { name: 'B-MAX 500', speed: '60 Mbps', price: '₹ 500', download: '60 Mbps', fup: '600 GB', postFup: '4 Mbps', delay: '.3s' },
              { name: 'B-MAX 600', speed: '100 Mbps', price: '₹ 600', download: '100 Mbps', fup: '1,000 GB', postFup: '10 Mbps', delay: '.4s' },
              { name: 'B-MAX 1000', speed: '200 Mbps', price: '₹ 1000', download: '200 Mbps', fup: '2,000 GB', postFup: '10 Mbps', delay: '.5s' },
              { name: 'B-MAX 1200', speed: '300 Mbps', price: '₹ 1200', download: '300 Mbps', fup: 'Unlimited', postFup: '300 Mbps', delay: '.6s' },
              { name: 'B-MAX 1700', speed: '400 Mbps', price: '₹ 1700', download: '400 Mbps', fup: 'Unlimited', postFup: '400 Mbps', delay: '.7s' }
            ].map((plan, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp mb-4" data-wow-delay={plan.delay}>
                <div style={{ background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', borderRadius: '20px', padding: '35px 25px', textAlign: 'center', boxShadow: '0 10px 30px rgba(255, 140, 66, 0.3)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.3s ease', position: 'relative', overflow: 'hidden' }}>
                  <div>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.3)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}>
                      <i className="fas fa-network-wired" style={{ fontSize: '36px', color: '#fff' }}></i>
                    </div>
                    <h3 style={{ color: '#333', fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>{plan.name}</h3>
                    <h2 style={{ color: '#ff6b35', fontSize: '32px', fontWeight: 'bold', margin: '15px 0' }}>
                      {plan.price} <span style={{ fontSize: '16px', color: '#666', fontWeight: '400' }}>/Month</span>
                    </h2>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '25px', textAlign: 'left' }}>
                      <li style={{ color: '#333', marginBottom: '12px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#ff6b35', marginRight: '10px', fontSize: '16px' }}></i>
                        <span><strong>{plan.download}</strong> Download Speed</span>
                      </li>
                      <li style={{ color: '#333', marginBottom: '12px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#ff6b35', marginRight: '10px', fontSize: '16px' }}></i>
                        <span><strong>{plan.fup}</strong> FUP Limit</span>
                      </li>
                      <li style={{ color: '#333', marginBottom: '12px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#ff6b35', marginRight: '10px', fontSize: '16px' }}></i>
                        <span><strong>{plan.postFup}</strong> Post-FUP Speed</span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/contact" style={{ background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)', color: '#fff', padding: '14px 35px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-block', marginTop: '25px', boxShadow: '0 5px 15px rgba(255, 107, 53, 0.4)', transition: 'all 0.3s ease' }}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business SME Plans Section */}
      <section className="pricing-section section-padding" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp" style={{ color: '#ffecd2' }}>
              <img src="assets/img/bale.png" alt="img" style={{ filter: 'brightness(0) invert(1)' }} />
              Business SME Plans
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: '#fff' }}>
              Flexible Internet for Growing Businesses
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: '900px', margin: '20px auto 0', lineHeight: '1.8', color: '#f0f0f0' }}>
              Keep your business connected with high-performance SME broadband designed for productivity and reliability. Bharath VoIP's Business SME Plans deliver fast, stable, and low-latency connectivity built for daily operations, cloud access, and remote collaboration.
            </p>
            <p className="wow fadeInUp" data-wow-delay=".5s" style={{ maxWidth: '900px', margin: '20px auto 0', lineHeight: '1.8', color: '#f0f0f0' }}>
              Scale seamlessly as your team and workloads grow. Every plan includes unlimited data (Fair Usage Policy applies), prioritized business support, and quick upgrade options so your operations never slow down.
            </p>
            <div className="wow fadeInUp" data-wow-delay=".6s" style={{ margin: '30px 0 20px' }}>
              <h5 style={{ color: '#fff' }}>Starting at ₹4,000 / month + 18% GST</h5>
              <p style={{ color: '#f0f0f0' }}>Find the right business plan and get connected today.</p>
              <Link href="/contact" className="theme-btn mt-2" style={{ background: '#fff', color: '#667eea', border: 'none', fontWeight: '600' }}>Check Availability</Link>
            </div>
          </div>

          {/* Why Businesses Choose */}
          <div className="row mt-5 mb-5">
            <div className="col-12">
              <h3 className="text-center mb-5 wow fadeInUp" style={{ color: '#fff', fontWeight: '700' }}>Why Businesses Choose Bharath VoIP</h3>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".3s">
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', height: '100%' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-technical-support" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>High-Speed, Low-Latency Fiber</h4>
                <p style={{ color: '#f0f0f0', fontSize: '14px', lineHeight: '1.6' }}>Reliable last-mile connectivity engineered for uninterrupted performance during critical hours.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', height: '100%' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-development" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Flexible, Cost-Efficient Plans</h4>
                <p style={{ color: '#f0f0f0', fontSize: '14px', lineHeight: '1.6' }}>Budget-conscious packages built to support startups, SMEs, and growing enterprises.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".5s">
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', height: '100%' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-shield" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Secure, Enterprise-Grade Infrastructure</h4>
                <p style={{ color: '#f0f0f0', fontSize: '14px', lineHeight: '1.6' }}>Static IP options and advanced routing keep your operations safe and stable.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".6s">
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', height: '100%' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-web-development" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Scalable Connectivity</h4>
                <p style={{ color: '#f0f0f0', fontSize: '14px', lineHeight: '1.6' }}>Upgrade bandwidth instantly as your workforce, tools, or data needs expand.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".7s">
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', height: '100%' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="flaticon-consultancy" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>24×7 Business Support</h4>
                <p style={{ color: '#f0f0f0', fontSize: '14px', lineHeight: '1.6' }}>Dedicated assistance to ensure consistent uptime and rapid resolution whenever you need it.</p>
              </div>
            </div>
          </div>

          <div className="section-title text-center mt-5 mb-5">
            <h3 className="wow fadeInUp" style={{ color: '#fff', fontWeight: '700' }}>Our Business SME Plans</h3>
            <p className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#f0f0f0' }}>For Teams That Demand Speed, Reliability, and Scalability.</p>
          </div>

          <div className="row justify-content-center">
            {[
              { name: 'Express 4000', speed: '500 Mbps', price: '₹ 4000', download: '500 Mbps', upload: '500 Mbps', fup: '5 TB', postFup: '10 Mbps', delay: '.3s', icon: 'fa-globe' },
              { name: 'Express 6000', speed: '1 Gbps', price: '₹ 6000', download: '1 Gbps', upload: '1 Gbps', fup: '6 TB', postFup: '12 Mbps', delay: '.4s', icon: 'fa-broadcast-tower' },
              { name: 'Express 8000', speed: '1 Gbps', price: '₹ 8000', download: '1 Gbps', upload: '1 Gbps', fup: '8 TB', postFup: '12 Mbps', delay: '.5s', icon: 'fa-satellite-dish' },
              { name: 'Express 10000', speed: '1 Gbps', price: '₹ 10000', download: '1 Gbps', upload: '1 Gbps', fup: '10 TB', postFup: '15 Mbps', delay: '.6s', icon: 'fa-wifi' },
              { name: 'Express 12000', speed: '1 Gbps', price: '₹ 12000', download: '1 Gbps', upload: '1 Gbps', fup: '15 TB', postFup: '15 Mbps', delay: '.7s', icon: 'fa-network-wired' }
            ].map((plan, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp mb-4" data-wow-delay={plan.delay}>
                <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '35px 25px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.3)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`fas ${plan.icon}`} style={{ fontSize: '36px', color: '#fff' }}></i>
                    </div>
                    <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>{plan.name}</h3>
                    <h2 style={{ color: '#ffecd2', fontSize: '32px', fontWeight: 'bold', margin: '15px 0' }}>
                      {plan.price} <span style={{ fontSize: '16px', color: '#f0f0f0', fontWeight: '400' }}>/Month</span>
                    </h2>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '25px', textAlign: 'left' }}>
                      <li style={{ color: '#fff', marginBottom: '12px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#ffecd2', marginRight: '10px', fontSize: '16px' }}></i>
                        <span><strong>{plan.download}</strong> Download</span>
                      </li>
                      <li style={{ color: '#fff', marginBottom: '12px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#ffecd2', marginRight: '10px', fontSize: '16px' }}></i>
                        <span><strong>{plan.upload}</strong> Upload</span>
                      </li>
                      <li style={{ color: '#fff', marginBottom: '12px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#ffecd2', marginRight: '10px', fontSize: '16px' }}></i>
                        <span><strong>{plan.fup}</strong> FUP Limit</span>
                      </li>
                      <li style={{ color: '#fff', marginBottom: '12px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#ffecd2', marginRight: '10px', fontSize: '16px' }}></i>
                        <span><strong>{plan.postFup}</strong> Post-FUP</span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/contact" style={{ background: '#fff', color: '#667eea', padding: '14px 35px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-block', marginTop: '25px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' }}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Broadband Plans Section */}
      <section className="pricing-section section-padding" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp" style={{ color: '#fff' }}>
              <img src="assets/img/bale.png" alt="img" style={{ filter: 'brightness(0) invert(1)' }} />
              Home Broadband Plans (B-MAX Fiber)
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: '#fff' }}>
              Fiber That Keeps Every Home Connected
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: '900px', margin: '20px auto 0', lineHeight: '1.8', color: '#fff' }}>
              Stay online, entertained, and productive with Bharath Fibernet's high-speed B-MAX broadband. Whether it's 4K streaming, online classes, work calls, or gaming weekends, enjoy stable, low-latency fiber internet built for every moment of modern life.
            </p>
            <div className="wow fadeInUp" data-wow-delay=".5s" style={{ margin: '30px 0 20px' }}>
              <h5 style={{ color: '#fff' }}>Starting at ₹699 / month + 18% GST</h5>
              <p style={{ color: '#fff' }}>Check what's available in your area and get connected today.</p>
              <Link href="/contact" className="theme-btn mt-2" style={{ background: '#fff', color: '#f5576c', border: 'none', fontWeight: '600' }}>Check Availability</Link>
            </div>
          </div>

          {/* Why Choose Home Broadband */}
          <div className="row mt-5 mb-5">
            <div className="col-12">
              <h3 className="text-center mb-5 wow fadeInUp" style={{ color: '#fff', fontWeight: '700' }}>Why Choose Bharath VoIP Home Broadband</h3>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".3s">
              <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.3)', height: '100%' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-rocket" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Ultra-Fast Speeds</h4>
                <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.6' }}>Experience consistent fiber-powered speed across multiple devices.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".4s">
              <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.3)', height: '100%' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-tags" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Affordable Plans</h4>
                <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.6' }}>Flexible, budget-friendly packages for every home.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".5s">
              <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.3)', height: '100%' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-signal" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Reliable Connectivity</h4>
                <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.6' }}>Stay connected without interruption 24/7.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".6s">
              <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '30px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.3)', height: '100%' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-headset" style={{ fontSize: '32px', color: '#fff' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>24×7 Support</h4>
                <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.6' }}>Round-the-clock technical assistance.</p>
              </div>
            </div>
          </div>

          <div className="section-title text-center mt-5 mb-5">
            <h3 className="wow fadeInUp" style={{ color: '#fff', fontWeight: '700' }}>Home Broadband & Entertainment Plans</h3>
            <p className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#fff' }}>Tailored for every way you live.</p>
          </div>

          <div className="row justify-content-center">
            {[
              { name: 'BharatXpress', speed: '150 Mbps', price: '₹ 699', download: '150 Mbps', fup: 'Unlimited', postFup: 'Unlimited', delay: '.3s' },
              { name: 'BharatXpress', speed: '200 Mbps', price: '₹ 999', download: '200 Mbps', fup: 'Unlimited', postFup: 'Unlimited', delay: '.4s' },
              { name: 'BharatXpress', speed: '300 Mbps', price: '₹ 1199', download: '300 Mbps', fup: 'Unlimited', postFup: 'Unlimited', delay: '.5s' },
              { name: 'BharatXpress', speed: '400 Mbps', price: '₹ 1499', download: '400 Mbps', fup: 'Unlimited', postFup: 'Unlimited', delay: '.6s' }
            ].map((plan, index) => (
              <div key={index} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp mb-4" data-wow-delay={plan.delay}>
                <div style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '35px 25px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fas fa-home" style={{ fontSize: '36px', color: '#fff' }}></i>
                    </div>
                    <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>{plan.name}</h3>
                    <h2 style={{ color: '#fff', fontSize: '32px', fontWeight: 'bold', margin: '15px 0' }}>
                      {plan.price} <span style={{ fontSize: '16px', fontWeight: '400' }}>/Month</span>
                    </h2>
                    <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '8px', margin: '15px 0' }}>
                      <p style={{ margin: 0, color: '#fff', fontSize: '13px', fontWeight: '600' }}>+ GST 18% | Unlimited Data</p>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', textAlign: 'left' }}>
                      <li style={{ color: '#fff', marginBottom: '10px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#fff', marginRight: '10px', fontSize: '16px' }}></i>
                        <span>Download: <strong>{plan.download}</strong></span>
                      </li>
                      <li style={{ color: '#fff', marginBottom: '10px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#fff', marginRight: '10px', fontSize: '16px' }}></i>
                        <span>FUP: <strong>{plan.fup}</strong></span>
                      </li>
                      <li style={{ color: '#fff', marginBottom: '10px', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#fff', marginRight: '10px', fontSize: '16px' }}></i>
                        <span>Post-FUP: <strong>{plan.postFup}</strong></span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/contact" style={{ background: '#fff', color: '#f5576c', padding: '14px 35px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-block', marginTop: '25px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' }}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Plans Section */}
      <section className="pricing-section section-padding" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp" style={{ color: '#fff' }}>
              <img src="assets/img/bale.png" alt="img" style={{ filter: 'brightness(0) invert(1)' }} />
              Combo Plans (Internet + IPTV)
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: '#fff' }}>
              Internet + Entertainment Bundles
            </h2>
          </div>

          <div className="row justify-content-center mt-5">
            {[
              { name: 'BharatXpress Combo', speed: '100 Mbps + IPTV', price: '₹ 999', features: ['Free IPTV on 6-month plan', 'Free IPTV + 2 months extra on 12-month plan', 'FUP Limit: Unlimited'], delay: '.3s' },
              { name: 'BharatXpress Combo', speed: '200 Mbps + IPTV', price: '₹ 1199', features: ['Free IPTV on 6-month plan', 'Free IPTV + 2 months extra on 12-month plan', 'FUP Limit: Unlimited'], delay: '.4s' }
            ].map((plan, index) => (
              <div key={index} className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp mb-4" data-wow-delay={plan.delay}>
                <div style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '40px 30px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', height: '100%' }}>
                  <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', margin: '0 auto 25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-tv" style={{ fontSize: '40px', color: '#fff' }}></i>
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '26px', fontWeight: '700', marginBottom: '5px' }}>{plan.name}</h3>
                  <p style={{ color: '#fff', fontSize: '16px', marginBottom: '15px' }}>{plan.speed}</p>
                  <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', margin: '20px 0' }}>
                    {plan.price} <span style={{ fontSize: '18px', fontWeight: '400' }}>/Month + GST 18%</span>
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '25px', textAlign: 'left' }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} style={{ color: '#fff', marginBottom: '15px', fontSize: '15px', display: 'flex', alignItems: 'flex-start' }}>
                        <i className="fas fa-check-circle" style={{ color: '#fff', marginRight: '12px', fontSize: '18px', marginTop: '2px' }}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" style={{ background: '#fff', color: '#fa709a', padding: '15px 40px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', display: 'inline-block', marginTop: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTT Entertainment Packs */}
      <section className="pricing-section section-padding" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp" style={{ color: '#fff' }}>
              <img src="assets/img/bale.png" alt="img" style={{ filter: 'brightness(0) invert(1)' }} />
              OTT Entertainment Packs
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: '#fff' }}>
              18 OTT Platforms
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".4s" style={{ color: '#fff', marginTop: '15px' }}>
              Includes JioHotstar, ZEE5, SonyLIV, FanCode, Sun NXT, Hungama + 12 more.
            </p>
          </div>

          <div className="row justify-content-center mt-5">
            {[
              { duration: '1 Month Plan', price: '₹ 170', period: '/month', delay: '.3s' },
              { duration: '6 Months Plan', price: '₹ 1020', period: '/6 months', delay: '.4s' },
              { duration: '12 Months Plan', price: '₹ 2040', period: '/12 months', description: 'Best Value!', delay: '.5s' }
            ].map((plan, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp mb-4" data-wow-delay={plan.delay}>
                <div style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '35px 25px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fas fa-play-circle" style={{ fontSize: '40px', color: '#fff' }}></i>
                    </div>
                    <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>{plan.duration}</h3>
                    {plan.description && (
                      <div style={{ background: 'rgba(255,215,0,0.3)', borderRadius: '20px', padding: '5px 15px', display: 'inline-block', marginBottom: '15px' }}>
                        <span style={{ color: '#fff', fontSize: '12px', fontWeight: '600' }}>{plan.description}</span>
                      </div>
                    )}
                    <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', margin: '20px 0' }}>
                      {plan.price} <span style={{ fontSize: '16px', fontWeight: '400' }}>{plan.period}</span>
                    </h2>
                    <p style={{ color: '#fff', fontSize: '14px', marginTop: '15px' }}>Access to all 18 OTT platforms</p>
                  </div>
                  <Link href="/contact" style={{ background: '#fff', color: '#4facfe', padding: '14px 35px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-block', marginTop: '25px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IPTV Channel Packs */}
      <section className="pricing-section section-padding" style={{ background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              IPTV Channel Packs
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: '#333' }}>
              Premium Channel Packages
            </h2>
          </div>

          <div className="row mt-5">
            {[
              { name: 'Telugu Gold HD Pack', channels: '430 Channels', prices: ['₹300 / month', '₹1,800 (6 months)', '₹3,600 (12 months)'], delay: '.3s' },
              { name: 'Hindi Gold HD Pack', channels: '440 Channels', prices: ['₹300 / month', '₹1,800 (6 months)', '₹3,600 (12 months)'], delay: '.4s' },
              { name: 'Hindi Telugu Silver Pack', channels: '430 Channels', prices: ['₹300 / month', '₹1,800 (6 months)', '₹3,600 (12 months)'], delay: '.5s' },
              { name: 'Hindi Telugu Gold Pack', channels: '450 Channels', prices: ['₹300 / month', '₹1,800 (6 months)', '₹3,600 (12 months)'], delay: '.6s' }
            ].map((pack, index) => (
              <div key={index} className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp mb-4" data-wow-delay={pack.delay}>
                <div style={{ background: '#fff', borderRadius: '20px', padding: '35px 30px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', height: '100%' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-satellite-dish" style={{ fontSize: '36px', color: '#333' }}></i>
                  </div>
                  <h3 style={{ color: '#333', fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>{pack.name}</h3>
                  <p style={{ color: '#666', fontSize: '16px', marginBottom: '25px' }}>{pack.channels}</p>
                  <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginTop: '20px' }}>
                    {pack.prices.map((price, idx) => (
                      <li key={idx} style={{ color: '#333', marginBottom: '12px', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#a8edea', marginRight: '10px', fontSize: '18px' }}></i>
                        <span><strong>{price}</strong></span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" style={{ background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', color: '#333', padding: '14px 35px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-block', marginTop: '25px', boxShadow: '0 5px 15px rgba(168,237,234,0.4)', transition: 'all 0.3s ease' }}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta sectionPadding />
    </NextLayout>
  );
};
export default page;
