import { useState } from "react";
import Button from '../ui/button';

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section
      id="contact-us"
      className="py-5"
      style={{ backgroundColor: '#dc2626' }}
    >
      <div style={{ maxWidth: '768px', margin: '0 auto' }} className="px-3 text-center">
        <h2 className="fs-3 fs-md-1 fw-bold text-white mb-4">
          Get the Latest Updates
        </h2>

        <p className="fs-6 mb-5" style={{ color: 'rgba(255,255,255,0.9)' }}>
          Subscribe to our newsletter for new courses, study tips, and exclusive offers
        </p>

        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column flex-sm-row gap-3 justify-content-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control rounded-2"
            style={{ minWidth: '250px' }}
          />

          <Button
            type="submit"
            className="btn btn-dark fw-bold"
          >
            {isSubmitted ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>

        {isSubmitted && (
          <p className="mt-4 text-white small">
            Thank you for subscribing! Check your email for confirmation.
          </p>
        )}
      </div>
    </section>
  );
}
