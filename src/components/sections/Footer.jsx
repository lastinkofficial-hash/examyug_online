import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ExamYug</h3>
            <p className="text-sm opacity-75">Your gateway to academic excellence</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/courses" className="hover:underline">Courses</Link></li>
              <li><Link to="/about-us" className="hover:underline">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@examyug.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 1234-567-890
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 ExamYug. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
