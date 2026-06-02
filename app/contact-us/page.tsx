'use client';

import { Navbar } from '@/components/sections/Navbar';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@examyug.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 1234-567-890',
      description: 'Monday to Friday, 9 AM - 6 PM',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'New Delhi, India',
      description: 'Head Office - Tech Park Building',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      content: 'Available Online',
      description: 'Chat with our support team',
    },
  ];

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/contact-us" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white border border-border rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="focus-visible:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="focus-visible:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                className="focus-visible:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-background text-foreground"
                rows={6}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What is the typical response time?',
                a: 'We aim to respond to all inquiries within 24 business hours.',
              },
              {
                q: 'How can I track my course progress?',
                a: 'You can track your progress in the dashboard under your account settings.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 7-day money-back guarantee on all courses.',
              },
              {
                q: 'Can I download study materials?',
                a: 'Yes, all study materials are available for download from your course page.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
