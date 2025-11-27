"use client";
import { useState } from "react";

const CrmFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "1. What does Bharath VoIP CRM help manage?",
      answer:
        "The CRM integrates sales, marketing, customer support, and operational workflows into one system, improving collaboration and data accuracy.",
    },
    {
      id: 2,
      question: "2. Can the CRM handle multi-channel communication?",
      answer:
        "Yes. It supports email, SMS, WhatsApp, and voice interactions within a unified interface to ensure smooth customer engagement.",
    },
    {
      id: 3,
      question: "3. Is Bharath VoIP CRM suitable for small and large enterprises?",
      answer:
        "Absolutely. The platform scales effortlessly, adapting to startups, mid-sized companies, and large organizations alike.",
    },
    {
      id: 4,
      question: "4. Does the CRM offer automation capabilities?",
      answer:
        "Yes. Automated workflows manage repetitive tasks like follow-ups, campaign execution, and lead assignment, improving team productivity.",
    },
    {
      id: 5,
      question: "5. How secure is the CRM platform?",
      answer:
        "Data is encrypted and stored within secure cloud environments that comply with industry-grade privacy and protection standards.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="crmFaqAccordion">
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

export default CrmFaqAccordion;
