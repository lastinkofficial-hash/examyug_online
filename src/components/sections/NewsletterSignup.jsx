import { useState } from "react";
import Button from "../ui/Button"; // Adjust path as needed

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
      className="py-20 bg-gradient-to-r from-primary to-accent"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get the Latest Updates
        </h2>

        <p className="text-lg text-white/90 mb-8">
          Subscribe to our newsletter for new courses, study tips, and
          exclusive offers
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          />

          <Button
            type="submit"
            className="bg-dark text-primary hover:opacity-90 font-semibold"
          >
            {isSubmitted ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>

        {isSubmitted && (
          <p className="mt-4 text-white text-sm">
            Thank you for subscribing! Check your email for confirmation.
          </p>
        )}
      </div>
    </section>
  );
}