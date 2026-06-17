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

      <section className="container-lg d-d-flex justify-content-center px-3 py-5">
        <div className="text-center mb-16">
          <h1 className="display-5 md:display-4 fw-bold text-foreground mb-5">
            Get in Touch
          </h1>
          <p className="fs-6 text-muted-foreground max-w-3xl d-d-flex justify-content-center">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="row row-cols-1 lg:row-cols-3 gap-4 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <div key={index} className="p-6 border border-border rounded-2 text-center">
                <IconComponent className="w-8 h-8 text-primary d-d-flex justify-content-center mb-4" />
                <h3 className="fs-6 fw-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground fw-bold mb-1">{info.content}</p>
                <p className="text-muted-foreground small">{info.description}</p>
              </div>
            )
          })}
        </div>

        <div className="max-w-2xl d-d-flex justify-content-center bg-white border border-border rounded-2 p-8">
          <h2 className="fs-4 fw-bold text-foreground mb-5">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="row row-cols-1 md:row-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="d-block small fw-bold text-foreground mb-2">
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
                <label htmlFor="email" className="d-block small fw-bold text-foreground mb-2">
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
              <label htmlFor="subject" className="d-block small fw-bold text-foreground mb-2">
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
              <label htmlFor="message" className="d-block small fw-bold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                className="w-100 px-3 py-2 border border-border rounded-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <Button type="submit" className="w-100" variant="danger">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
