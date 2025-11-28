"use client";
import { useState } from "react";

const NetworkFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "1. What do Bharath VoIP Network Services include?",
      answer:
        "They cover enterprise internet connectivity, LAN/WAN design, Wi-Fi management, and comprehensive Annual Maintenance Contracts for hardware and network infrastructure.",
    },
    {
      id: 2,
      question: "2. How does network redundancy improve reliability?",
      answer:
        "Redundancy ensures alternative data paths are available, keeping systems online even if one connection fails. This guarantees business continuity and uninterrupted operations.",
    },
    {
      id: 3,
      question: "3. Can bandwidth be scaled as demand changes?",
      answer:
        "Yes. Bandwidth scales dynamically to handle peak usage, ensuring consistent speed and performance even during high network activity.",
    },
    {
      id: 4,
      question: "4. What are the benefits of an Annual Maintenance Contract (AMC)?",
      answer:
        "AMC provides ongoing maintenance, preventive checks, and priority support to minimize downtime, extend equipment life, and eliminate unplanned repair costs.",
    },
    {
      id: 5,
      question: "5. How do Managed LAN/WAN/Wi-Fi Solutions improve efficiency?",
      answer:
        "They centralize network management, improve coverage, and optimize traffic flow. Proactive monitoring and configuration adjustments prevent performance bottlenecks and ensure stable connections.",
    },
    {
      id: 6,
      question: "6. Are these services suitable for multi-location businesses?",
      answer:
        "Yes. All network solutions are designed for scalability, enabling seamless integration and management across multiple offices or sites.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="networkFaqAccordion">
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

export default NetworkFaqAccordion;
