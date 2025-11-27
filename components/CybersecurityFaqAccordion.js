"use client";
import { useState } from "react";

const CybersecurityFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "1. What does Bharath VoIP's Cybersecurity Services include?",
      answer:
        "They include continuous monitoring, threat intelligence, incident response, encryption, and endpoint protection designed for multi-environment infrastructure.",
    },
    {
      id: 2,
      question: "2. How does continuous threat detection work?",
      answer:
        "Threats are monitored in real time through the SOC using AI-based analytics. Suspicious patterns are identified and neutralized before they cause disruption.",
    },
    {
      id: 3,
      question: "3. Can these cybersecurity solutions integrate with existing systems?",
      answer:
        "Yes. The framework supports seamless integration with existing IT infrastructure, applications, and cloud environments without requiring major configuration changes.",
    },
    {
      id: 4,
      question: "4. What kind of compliance standards are supported?",
      answer:
        "The services align with enterprise security frameworks and global standards such as ISO 27001, GDPR, and SOC 2 for data governance and privacy.",
    },
    {
      id: 5,
      question: "5. How is data protected during a security breach?",
      answer:
        "Multi-layer encryption, network segmentation, and automated containment protocols limit exposure and prevent unauthorized access even in breach scenarios.",
    },
    {
      id: 6,
      question: "6. Is proactive monitoring available round-the-clock?",
      answer:
        "Yes. The Security Operations Center operates 24×7 to monitor networks, detect anomalies, and execute responses instantly to maintain uptime and data integrity.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="cybersecurityFaqAccordion">
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

export default CybersecurityFaqAccordion;
