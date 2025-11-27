"use client";
import { useState } from "react";

const InternetLeasedLinesFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "1. What makes Internet Leased Lines different from broadband?",
      answer:
        "Unlike shared broadband, leased lines offer dedicated bandwidth for exclusive use, ensuring consistent speeds and zero congestion during peak hours.",
    },
    {
      id: 2,
      question: "2. Can bandwidth be upgraded as business requirements increase?",
      answer:
        "Yes. Bandwidth can be scaled up to 10 Gbps based on operational needs, allowing enterprises to expand capacity without service interruption.",
    },
    {
      id: 3,
      question: "3. What is the guaranteed uptime for Bharath VoIP leased lines?",
      answer:
        "Leased lines are backed by a 99.5% uptime SLA supported by redundant network architecture and proactive monitoring.",
    },
    {
      id: 4,
      question: "4. How is network performance maintained?",
      answer:
        "Performance is continuously tracked by the NOC team through automated monitoring tools that detect anomalies and trigger instant resolution.",
    },
    {
      id: 5,
      question: "5. Is technical support available outside business hours?",
      answer:
        "Yes. Technical assistance is available 24×7 through a dedicated support team that ensures uninterrupted connectivity at all times.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="internetLeasedLinesFaqAccordion">
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

export default InternetLeasedLinesFaqAccordion;
