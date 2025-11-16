"use client";
import React from "react";

const GuidanceForm = () => {
  return (
    <section className="guidance-section section-padding">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="guidance-title">Need Guidance?</h2>
          <p className="guidance-subtitle">We’d love to help you.</p>
        </div>

        {/* Labels Row */}
        <div className="guidance-labels">
          <span>Enquire</span>
          <span>Email</span>
          <span>Call Us</span>
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
