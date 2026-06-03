'use client';

import { Navbar } from '@/components/sections/Navbar';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

type ResetStep = 'email' | 'otp' | 'password';

export default function ForgotPassword() {
  const [step, setStep] = useState<ResetStep>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    if (!email) {
      setError('Please enter your email address');
      setIsLoading(false);
      return;
    }

    try {
      console.log('[v0] Sending OTP to:', email);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage(`OTP sent to ${email}. Please check your inbox.`);
      setStep('otp');
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      setIsLoading(false);
      return;
    }

    try {
      console.log('[v0] Verifying OTP:', otp);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage('OTP verified successfully!');
      setStep('password');
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    if (!password || !confirmPassword) {
      setError('Please fill in all password fields');
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      console.log('[v0] Resetting password for:', email);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage('Password reset successfully! Redirecting to login...');
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (step === 'otp') {
      setStep('email');
      setOtp('');
      setError('');
      setMessage('');
    } else if (step === 'password') {
      setStep('otp');
      setPassword('');
      setConfirmPassword('');
      setError('');
      setMessage('');
    }
  };

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar />

      <section className="min-h-[calc(100vh-300px)] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="bg-white border border-border rounded-lg p-8 md:p-10 shadow-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Reset Password</h1>
              <p className="text-muted-foreground">
                {step === 'email' && 'Enter your email to receive an OTP'}
                {step === 'otp' && 'Verify the OTP sent to your email'}
                {step === 'password' && 'Create your new password'}
              </p>
            </div>

            {/* Back Button */}
            {step !== 'email' && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-6 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}

            {/* Messages */}
            {message && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                {message}
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Email Step */}
            {step === 'email' && (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
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
                  {isLoading ? 'Sending OTP...' : 'Send OTP'}
                </Button>
              </form>
            )}

            {/* OTP Step */}
            {step === 'otp' && (
              <form onSubmit={handleOtpSubmit} className="space-y-6">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-foreground mb-2">
                    Enter OTP
                  </label>
                  <Input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="000000"
                    maxLength={6}
                    className="text-center text-2xl letter-spacing tracking-widest focus-visible:ring-primary"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Enter the 6-digit code sent to {email}
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || otp.length !== 6}
                  className="w-full py-6 hover:scale-105 transition-transform duration-300 disabled:opacity-50"
                >
                  {isLoading ? 'Verifying...' : 'Verify OTP'}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Didn&apos;t receive the code?{' '}
                  <button
                    type="button"
                    className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                    disabled={isLoading}
                  >
                    Resend OTP
                  </button>
                </p>
              </form>
            )}

            {/* Password Step */}
            {step === 'password' && (
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10 pr-10 focus-visible:ring-primary"
                      required
                    />
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
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
                  <p className="text-xs text-muted-foreground mt-2">
                    Minimum 8 characters
                  </p>
                </div>

                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-foreground mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10 pr-10 focus-visible:ring-primary"
                      required
                    />
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
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
                  className="w-full py-6 hover:scale-105 transition-transform duration-300 disabled:opacity-50"
                >
                  {isLoading ? 'Resetting...' : 'Reset Password'}
                </Button>
              </form>
            )}

            {/* Footer Links */}
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground text-sm">
                Remember your password?{' '}
                <Link
                  href="/"
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  Back to home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
