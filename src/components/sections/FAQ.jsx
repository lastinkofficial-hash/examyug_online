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
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
