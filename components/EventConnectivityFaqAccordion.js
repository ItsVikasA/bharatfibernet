"use client";
import { useState } from "react";

const EventConnectivityFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "1. What types of events can Bharath VoIP provide internet for?",
      answer:
        "We provide connectivity for conferences, trade shows, exhibitions, concerts, sports events, weddings, and any temporary setup requiring reliable high-speed internet.",
    },
    {
      id: 2,
      question: "2. How quickly can event internet be deployed?",
      answer:
        "Depending on location and size, networks can be set up within hours using pre-configured routers, wireless access points, and fiber or 4G/5G backhaul links.",
    },
    {
      id: 3,
      question: "3. Can bandwidth be customized for large events?",
      answer:
        "Yes. Bandwidth is scalable from a few Mbps to several Gbps based on expected footfall, device count, and application needs.",
    },
    {
      id: 4,
      question: "4. Is the event network secure?",
      answer:
        "Absolutely. All event setups include firewalls, VLAN segmentation, and password-protected guest networks to ensure complete data security.",
    },
    {
      id: 5,
      question: "5. Does Bharath VoIP provide on-site technical support during events?",
      answer:
        "Yes. Our team is available on-site or remotely for continuous monitoring, technical assistance, and immediate troubleshooting throughout the event.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="eventConnectivityFaqAccordion">
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

export default EventConnectivityFaqAccordion;
