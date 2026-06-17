import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-5 text-white" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container-lg px-3">
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
          <div>
            <h3 className="fs-6 fw-bold mb-4">ExamYug24</h3>
            <p className="small" style={{ opacity: 0.75 }}>Your gateway to academic excellence</p>
          </div>
          <div>
            <h4 className="fw-bold mb-4">Quick Links</h4>
            <ul className="list-unstyled gap-2" style={{ display: 'flex', flexDirection: 'column' }}>
              <li><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li><Link to="/courses" className="text-white-50 text-decoration-none">Courses</Link></li>
              <li><Link to="/about-us" className="text-white-50 text-decoration-none">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bold mb-4">Support</h4>
            <ul className="list-unstyled gap-2" style={{ display: 'flex', flexDirection: 'column' }}>
              <li><Link to="/contact-us" className="text-white-50 text-decoration-none">Contact Us</Link></li>
              <li><a href="#" className="text-white-50 text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bold mb-4">Contact Info</h4>
            <ul className="list-unstyled gap-2" style={{ display: 'flex', flexDirection: 'column' }}>
              <li className="d-flex align-items-center gap-2 text-white-50">
                <Mail className="w-4 h-4" style={{ width: '16px', height: '16px' }} />
                hello@examyug24.com
              </li>
              <li className="d-flex align-items-center gap-2 text-white-50">
                <Phone className="w-4 h-4" style={{ width: '16px', height: '16px' }} />
                +91 1234-567-890
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top pt-4 text-center small" style={{ borderColor: 'rgba(255,255,255,0.2)', opacity: 0.75 }}>
          <p>&copy; 2026 ExamYug24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
