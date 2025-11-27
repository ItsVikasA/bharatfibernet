"use client";
import { useState } from "react";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "1. What are System Integration services?",
      answer: "System Integration services combine multiple IT systems, software, and communication networks into a unified infrastructure. This ensures that data flows seamlessly between departments, improving coordination, performance, and overall operational efficiency."
    },
    {
      question: "2. How do System Integration services benefit enterprises?",
      answer: "Integration helps businesses eliminate data silos and reduce manual processes by connecting every device, network, and software into one ecosystem. This results in faster decision-making, fewer errors, and better control over IT operations."
    },
    {
      question: "3. What is included under Managed IT Services?",
      answer: "Managed IT Services cover real-time system monitoring, predictive maintenance, data security management, and 24×7 technical support. These services ensure that infrastructure remains reliable, compliant, and performance-driven without the need for constant in-house supervision."
    },
    {
      question: "4. How is System Integration different from regular IT support?",
      answer: "System Integration focuses on connecting and optimizing your entire IT environment, while regular IT support typically resolves isolated issues. Integration provides a long-term, scalable structure that enhances performance across all platforms and devices."
    },
    {
      question: "5. Can these services be customized for different business sizes?",
      answer: "Yes. Both System Integration and Managed IT Services are highly scalable. They can be tailored for small startups, mid-sized enterprises, or large corporations depending on infrastructure complexity and performance requirements."
    },
    {
      question: "6. How secure are Bharath VoIP's integrated networks?",
      answer: "All integrated networks are built on enterprise-grade security frameworks like Radius, AAA, and TACACS, which ensure controlled access, encrypted communication, and data protection across every endpoint."
    },
    {
      question: "7. What kind of uptime can be expected with Managed IT Services?",
      answer: "With predictive maintenance and continuous monitoring, uptime reliability typically exceeds 99.5%, ensuring minimal disruption and consistent availability for mission-critical operations."
    },
    {
      question: "8. How quickly can integration or deployment be completed?",
      answer: "Implementation timelines depend on infrastructure size and customization needs. However, all deployments follow a zero-disruption model, allowing operations to continue normally while systems are upgraded or migrated in the background."
    },
    {
      question: "9. Do these services require major infrastructure changes?",
      answer: "No. The modular architecture allows smooth integration with existing infrastructure. It's designed to enhance what already exists rather than replace it, reducing both cost and implementation time."
    },
    {
      question: "10. What kind of support is available post-deployment?",
      answer: "Dedicated support is available 24×7 through the Network Operations Center (NOC). The team monitors performance in real time, resolves issues proactively, and provides regular updates to maintain peak efficiency."
    }
  ];

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="faq-item mb-3" 
          style={{
            border: '1px solid #ddd', 
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="faq-question w-100 text-start d-flex justify-content-between align-items-center"
            style={{
              background: openIndex === index ? '#f8f9fa' : '#fff',
              border: 'none',
              padding: '1.25rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
          >
            <span>{faq.question}</span>
            <i 
              className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}
              style={{
                fontSize: '0.9rem',
                color: '#666',
                transition: 'transform 0.3s ease'
              }}
            />
          </button>
          
          <div
            className="faq-answer"
            style={{
              maxHeight: openIndex === index ? '500px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
              borderTop: openIndex === index ? '1px solid #ddd' : 'none'
            }}
          >
            <div style={{
              padding: '1.25rem',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: '#555'
            }}>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
