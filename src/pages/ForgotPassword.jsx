import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import Footer from '../components/sections/Footer'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import { Mail } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log('Password reset requested for:', email)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/forgot-password" />

      <section className="min-h-[calc(100vh-300px)] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="bg-white border border-border rounded-lg p-8 md:p-10 shadow-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Reset Password</h1>
              <p className="text-muted-foreground">Enter your email address to reset your password</p>
            </div>

            {submitted ? (
              <div className="text-center space-y-4">
                <div className="text-green-600 text-sm bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold">Check your email</p>
                  <p>We&apos;ve sent password reset instructions to {email}</p>
                </div>
                <Link
                  to="/login"
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  Back to Login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-10 focus-visible:ring-primary"
                      required
                    />
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 hover:scale-105 transition-transform duration-300 disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </Button>

                <div className="text-center">
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                  >
                    Back to Login
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
