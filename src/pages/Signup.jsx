import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import Footer from '../components/sections/Footer'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setIsLoading(true)
    console.log('Signup attempt:', formData)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/signup" />

      <section className="min-h-[calc(100vh-300px)] d-flex align-items-center justify-content-center px-3 py-5">
        <div className="w-100 max-w-md">
          <div className="bg-white border border-border rounded-2 p-8 md:p-10 shadow-sm-sm">
            <div className="text-center mb-5">
              <h1 className="fs-3 fw-bold text-foreground mb-2">Create Account</h1>
              <p className="text-muted-foreground">Join thousands of successful students</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="d-block small fw-bold text-foreground mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="pl-10 focus-visible:ring-primary"
                    required
                  />
                  {/* <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" /> */}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="d-block small fw-bold text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="pl-10 focus-visible:ring-primary"
                    required
                  />
                  {/* <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" /> */}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="d-block small fw-bold text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10 pr-10 focus-visible:ring-primary"
                    required
                  />
                  {/* <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" /> */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="d-block small fw-bold text-foreground mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10 pr-10 focus-visible:ring-primary"
                    required
                  />
                  {/* <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" /> */}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-100 py-4-transform disabled:opacity-50"
              >
                {isLoading ? 'Creating account...' : 'Sign Up'}
              </Button>
            </form>

            <p className="text-center text-muted-foreground mt-5">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-primary hover:text-primary/80 fw-bold-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
