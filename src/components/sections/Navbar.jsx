import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../ui/button';
import Input from '../ui/input';
import LoginModal from '../LoginModal';

export default function Navbar({ active, onLoginClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/study-materials", label: "Study Materials" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top" style={{ zIndex: 50 }}>
      <div className="container-lg">
        
        {/* Logo */}
        <Link to="/" className="navbar-brand d-d-flex align-align-items-center gap-2">
          <img
            src="/logo.jpeg"
            alt="ExamYug Logo"
            width="50"
            height="50"
            className="rounded-circle"
          />
          <span className="fw-bold" style={{ fontSize: "1.25rem" }}>
            ExamYug24
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`nav-link fw-bold ${
                    active === item.href
                      ? "text-danger active"
                      : ""
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search - Desktop */}
          <Link to="" className="d-none d-xl-d-block ms-3">
            <Input
              type="text"
              placeholder="Search courses..."
              className="w-100"
              style={{ width: "220px" }}
            />
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="d-d-flex gap-2 ms-3">
          
          {/* Desktop Buttons */}
          <Button
            variant="outline"
            className="d-none d-lg-inline-d-flex"
            onClick={() => {
              setIsLoginModalOpen(true);

              if (onLoginClick) {
                onLoginClick();
              }
            }}
          >
            Login
          </Button>

          <Link to="/signup">
            <Button className="d-none d-lg-inline-d-flex" variant="danger">
              Sign Up
            </Button>
          </Link>

          {/* Mobile Buttons */}
          <div className="d-lg-none d-d-flex d-flex-column gap-2">
            <Button
              variant="outline"
              className="w-100"
              onClick={() => {
                setIsLoginModalOpen(true);
                setMobileMenuOpen(false);

                if (onLoginClick) {
                  onLoginClick();
                }
              }}
            >
              Login
            </Button>

            <Link to="/signup" className="w-100">
              <Button className="w-100" variant="danger">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
}
