"use client";
import { useState } from "react";

const DataCenterFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "1. What is the difference between colocation and cloud hosting?",
      answer:
        "Colocation provides physical space and infrastructure for hosting enterprise servers within Tier-III data centers, offering maximum control and reliability. Cloud hosting, on the other hand, delivers virtualized resources with flexible scalability and managed services that adapt dynamically to changing workloads.",
    },
    {
      id: 2,
      question: "2. How secure are Bharath VoIP's data center and cloud environments?",
      answer:
        "All environments are protected with multi-layered security — including biometric access controls, surveillance, encryption, and continuous monitoring. Compliance with global standards ensures data privacy, integrity, and secure access across every layer of the infrastructure.",
    },
    {
      id: 3,
      question: "3. Can existing on-premise systems be integrated with cloud platforms?",
      answer:
        "Yes. The hybrid cloud architecture supports seamless integration with on-premise systems and leading cloud providers like AWS, Azure, GCP, and Oracle. This allows data and applications to move securely between environments without disrupting operations.",
    },
    {
      id: 4,
      question: "4. How is uptime and service continuity ensured?",
      answer:
        "Tier-III data center design, redundant power and cooling systems, and 24×7 monitoring ensure 99.99% uptime. Automated fault detection and real-time response mechanisms further minimize the risk of downtime across both physical and cloud infrastructures.",
    },
    {
      id: 5,
      question: "5. How does Bharath VoIP help control cloud costs?",
      answer:
        "Usage-based billing, resource tracking, and automated scaling optimize spending by aligning costs with real consumption. This model prevents overprovisioning, ensuring maximum efficiency while maintaining consistent performance.",
    },
    {
      id: 6,
      question: "6. Is migration to the cloud disruptive or time-consuming?",
      answer:
        "Cloud migration frameworks are designed for zero downtime. Workloads, applications, and data are transferred seamlessly while maintaining availability and integrity, ensuring operations continue without interruption during transition.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="dataCenterFaqAccordion">
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

export default DataCenterFaqAccordion;
