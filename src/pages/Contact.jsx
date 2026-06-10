import { useState } from 'react'
import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import Footer from '../components/sections/Footer'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

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
  ]

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/contact-us" />

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <div key={index} className="p-6 border border-border rounded-lg text-center">
                <IconComponent className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground font-semibold mb-1">{info.content}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </div>
            )
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
