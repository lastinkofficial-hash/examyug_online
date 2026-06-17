import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, X } from "lucide-react";

import Button  from "../components/ui/button";
import Input from "../components/ui/input";

export default function Login({ isOpen, onClose }) {
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
    <div className="fixed inset-0 z-[999] d-flex align-items-center justify-content-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-100 max-w-md mx-4 bg-white rounded-2 shadow-sm-lg p-8 md:p-10 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-light rounded-1-colors focus:outline-none"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fs-3 fw-bold text-foreground mb-2">
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
              className="d-block small fw-bold text-foreground mb-2"
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
              className="d-block small fw-bold text-foreground mb-2"
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
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="rounded border-border"
              />

              <label
                htmlFor="remember"
                className="small text-muted-foreground"
              >
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              onClick={onClose}
              className="small text-primary hover:text-primary/80 fw-bold-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-100 py-4-transform disabled:opacity-50 focus:outline-none"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 d-flex align-items-center">
            <div className="w-100 border-top border-border"></div>
          </div>

          <div className="relative d-flex justify-content-center small">
            <span className="px-2 bg-white text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        {/* <div className="row row-cols-2 gap-3 mb-5">
          <Button
            type="button"
            variant="outline"
            className="hover:bg-primary/10-colors"
          >
            Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="hover:bg-primary/10-colors"
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
            className="text-primary hover:text-primary/80 fw-bold-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}