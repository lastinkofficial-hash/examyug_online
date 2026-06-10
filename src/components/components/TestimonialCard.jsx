import PropTypes from "prop-types";
import { Star } from "lucide-react";

export default function TestimonialCard({
  name,
  role,
  testimonial,
  image,
  rating,
}) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>

      <p className="text-foreground mb-6 line-clamp-4">
        {testimonial}
      </p>

      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-foreground text-sm">
            {name}
          </p>

          <p className="text-xs text-muted-foreground">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};