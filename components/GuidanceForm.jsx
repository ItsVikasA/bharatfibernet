"use client";
import React from "react";

const GuidanceForm = () => {
  return (
    <section 
      className="guidance-section section-padding"
      style={{
        backgroundImage: 'url("/assets/img/4.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="guidance-title" style={{ color: '#1a1a1a', fontWeight: '700', fontSize: '2.5rem', textShadow: '0 2px 4px rgba(255,255,255,0.3)' }}>Need Guidance?</h2>
          <p className="guidance-subtitle" style={{ color: '#2c2c2c', fontSize: '1.1rem', fontWeight: '500' }}>We'd love to help you.</p>
        </div>

        {/* Labels Row */}
        <div className="guidance-labels">
          <span style={{ color: '#1a1a1a', fontWeight: '600', fontSize: '1.1rem' }}>Enquire</span>
          <span style={{ color: '#1a1a1a', fontWeight: '600', fontSize: '1.1rem' }}>Email</span>
          <span style={{ color: '#ff6f00', fontWeight: '700', fontSize: '1.1rem' }}>Call Us</span>
        </div>

        {/* Form */}
        <div className="guidance-form-container">
          <input
            type="text"
            className="guidance-input"
            placeholder="Mobile Number"
          />

          <input
            type="text"
            className="guidance-input"
            placeholder="Email Address"
          />

          <button className="guidance-btn">Let's Connect!</button>
        </div>

      </div>
    </section>
  );
};

export default GuidanceForm;
