import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button  from '../ui/button';
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
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpeg"
            alt="ExamYug Logo"
            width="50"
            height="50"
            className="block rounded-full"
          />
          <span className="text-xl font-bold text-foreground">
            ExamYug24
          </span>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden min-[986px]:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-bold transition-all duration-300 relative group ${
                active === item.href
                  ? "text-red-600"
                  : "text-black hover:text-red-600"
              }`}
              style={{ textDecoration: "none" }}
            >
              {item.label}

              <span
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  active === item.href
                    ? "w-full bg-red-600"
                    : "w-0 bg-red-600 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}

          {/* Search */}
          <Link to="" >
            <Input
              type="text"
              placeholder="Search courses..."
              className="hidden xl:block w-[220px] cursor-pointer bg-white"
              
            />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Desktop Buttons */}
          <Button
            variant="outline"
            className="hidden min-[986px]:inline-flex hover:scale-105 transition-transform duration-300"
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
            <Button className="hidden min-[986px]:inline-flex hover:scale-105 transition-transform duration-300" variant="danger">
              Sign Up
            </Button>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="min-[986px]:hidden p-2 rounded-md border border-border hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="min-[986px]:hidden bg-white border-t border-border px-4 py-4 space-y-4 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-[15px] font-medium transition-all duration-300 hover:translate-x-1 ${
                active === item.href
                  ? "text-red-600"
                  : "text-black hover:text-red-600"
              }`}
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Search */}
          <Link to="/search" className="w-full">
            <Input
              type="text"
              placeholder="Search courses..."
              className="w-full focus-visible:ring-primary cursor-pointer"
              readOnly
            />
          </Link>

          <p></p>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full hover:scale-[1.02] transition-transform duration-300"
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

            <Link to="/signup" className="w-full">
              <Button className="w-full hover:scale-[1.02] bg-accent duration-300">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
}
