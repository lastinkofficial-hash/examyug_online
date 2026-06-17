'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'Click on any course card and select "Enroll Now". You&apos;ll be guided through the payment and registration process.'
    },
    {
      question: 'Can I download the study materials?',
      answer: 'Yes! All study materials are downloadable in PDF and eBook formats for offline access.'
    },
    {
      question: 'Is there a certificate upon completion?',
      answer: 'Absolutely! You&apos;ll receive a recognized digital certificate after completing each course.'
    },
    {
      question: 'What if I need help with a concept?',
      answer: 'Our community forum allows you to discuss with peers and instructors. We also offer one-on-one mentoring sessions.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you&apos;re not satisfied with the course.'
    },
    {
      question: 'How long does it take to complete a course?',
      answer: 'Course duration varies from 4 to 12 weeks depending on the course level and your learning pace.'
    }
  ];

  return (
    <section id="faq" className="py-5" style={{ backgroundColor: '#dc2626' }}>
      <div style={{ maxWidth: '768px', margin: '0 auto' }} className="px-3">
        <div className="text-center mb-5">
          <h2 className="fs-3 fs-md-1 fw-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="fs-6 text-white-50">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="d-flex flex-column gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-light rounded-2 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-100 px-4 py-3 d-flex align-items-center justify-content-between text-start"
                style={{ backgroundColor: '#ffffff', border: 'none', cursor: 'pointer' }}
              >
                <span className="fw-bold text-dark">{faq.question}</span>
                <ChevronDown
                  className="w-5 h-5 text-muted"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 border-top text-dark" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="mb-0">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
