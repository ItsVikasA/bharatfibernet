"use client";
import { useState } from "react";

const FirewallRentalFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "1. Who can benefit from Firewall Rental Services?",
      answer:
        "Ideal for enterprises managing short-term projects, temporary expansions, or test environments that require enterprise-grade security without long-term investment.",
    },
    {
      id: 2,
      question: "2. How quickly can a rented firewall be deployed?",
      answer:
        "Firewalls can be deployed within hours, as configurations are pre-tested and ready for integration into existing IT environments.",
    },
    {
      id: 3,
      question: "3. Are software updates and patches included in the rental service?",
      answer:
        "Yes. Regular updates, security patches, and configuration adjustments are fully managed to maintain consistent protection and compliance.",
    },
    {
      id: 4,
      question: "4. Can firewall rentals be scaled as project requirements change?",
      answer:
        "Absolutely. Firewall resources can be expanded or reduced depending on bandwidth, location, and duration needs.",
    },
    {
      id: 5,
      question: "5. Is technical support available during the rental period?",
      answer:
        "Yes. 24×7 monitoring and support are included throughout the rental duration, ensuring constant protection and fast issue resolution.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="firewallRentalFaqAccordion">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="accordion-item mb-3"
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <h2 className="accordion-header" id={`heading${faq.id}`}>
            <button
              className={`accordion-button ${
                activeIndex === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(index)}
              style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                padding: "1.25rem 1.5rem",
                background: activeIndex === index ? "#f8f9fa" : "white",
                color: "#333",
                border: "none",
                textAlign: "left",
              }}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`collapse${faq.id}`}
            className={`accordion-collapse collapse ${
              activeIndex === index ? "show" : ""
            }`}
            style={{
              transition: "all 0.3s ease",
            }}
          >
            <div
              className="accordion-body"
              style={{
                padding: "1.25rem 1.5rem",
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.8",
                background: "white",
              }}
            >
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirewallRentalFaqAccordion;
