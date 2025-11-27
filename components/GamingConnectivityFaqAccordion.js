"use client";
import { useState } from "react";

const GamingConnectivityFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "1. What makes Bharath VoIP Gaming Connectivity unique?",
      answer:
        "It combines ultra-low latency routing, dedicated gaming gateways, and real-time traffic optimization to ensure flawless performance across all gaming and streaming platforms.",
    },
    {
      id: 2,
      question: "2. Is this service only for e-sports organizations?",
      answer:
        "No. The same infrastructure benefits game developers, streaming platforms, content creators, and any business requiring real-time connectivity and stability.",
    },
    {
      id: 3,
      question: "3. How does traffic prioritization improve performance?",
      answer:
        "By prioritizing gaming and interactive packets, critical data moves faster through the network, eliminating lag and maintaining smooth gameplay or live streaming.",
    },
    {
      id: 4,
      question: "4. Can Gaming Connectivity handle large tournaments or events?",
      answer:
        "Yes. Dedicated gateways and scalable bandwidth ensure consistent quality for multi-user and high-traffic scenarios, including live gaming events and streaming broadcasts.",
    },
    {
      id: 5,
      question: "5. How is performance monitored and maintained?",
      answer:
        "Real-time analytics continuously track latency, jitter, and packet loss, allowing proactive adjustments to maintain optimal speed and reliability.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="gamingConnectivityFaqAccordion">
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

export default GamingConnectivityFaqAccordion;
