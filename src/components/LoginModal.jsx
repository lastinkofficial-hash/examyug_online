import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, X } from "lucide-react";

import Button  from "../components/ui/button";
import Input from "../components/ui/input";

export default function LoginModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    console.log("Login attempt:", formData);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md mx-4 bg-white rounded-lg shadow-lg p-8 md:p-10 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-md transition-colors duration-300 focus:outline-none"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>

          <p className="text-muted-foreground">
            Sign in to your ExamYug account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
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

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Password
            </label>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
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
                className="absolute right-3 top-3 p-0 text-muted-foreground hover:text-foreground focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="rounded border-border"
              />

              <label
                htmlFor="remember"
                className="text-sm text-muted-foreground"
              >
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              onClick={onClose}
              className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-300"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full py-6 hover:scale-105 transition-transform duration-300 disabled:opacity-50 focus:outline-none"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        {/* <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            type="button"
            variant="outline"
            className="hover:bg-primary/10 transition-colors duration-300"
          >
            Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="hover:bg-primary/10 transition-colors duration-300"
          >
            GitHub
          </Button>
        </div> */}

        {/* Sign Up */}
        <p className="text-center text-muted-foreground">
          Don't have an account?{" "}
          <Link
            to="/signup"
            onClick={onClose}
            className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}