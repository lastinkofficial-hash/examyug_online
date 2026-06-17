import { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Star } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialCard.css";

export default function TestimonialCard({
  name,
  role,
  testimonial,
  image,
  rating,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`testimonial-card-container ${flipped ? "flipped" : ""}`}>
      <div className="testimonial-card-inner">

        {/* Front Side */}
        <Card className="testimonial-card-front border-0 shadow-sm">
          <Card.Body className="d-flex flex-column justify-content-between h-100">

            <div>
              <div className="d-flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < rating ? "#facc15" : "none"}
                    color={i < rating ? "#facc15" : "#6c757d"}
                  />
                ))}
              </div>

              <Card.Text>
                {testimonial.length > 120
                  ? `${testimonial.substring(0, 120)}...`
                  : testimonial}
              </Card.Text>
            </div>

            <div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <img
                  src={image}
                  alt={name}
                  className="rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />

                <div>
                  <h6 className="mb-0">{name}</h6>
                  <small className="text-muted">{role}</small>
                </div>
              </div>

              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => setFlipped(true)}
              >
                View Details
              </Button>
            </div>

          </Card.Body>
        </Card>

        {/* Back Side */}
        <Card className="testimonial-card-back border-0 shadow-sm">
          <Card.Body className="d-flex flex-column justify-content-between h-100">

            <div>
              <h5 className="mb-3">{name}</h5>

              <div className="d-flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < rating ? "#facc15" : "none"}
                    color={i < rating ? "#facc15" : "#6c757d"}
                  />
                ))}
              </div>

              <Card.Text
                style={{
                  maxHeight: "220px",
                  overflowY: "auto",
                }}
              >
                {testimonial}
              </Card.Text>
            </div>

            <Button
              variant="secondary"
              onClick={() => setFlipped(false)}
            >
              Back
            </Button>

          </Card.Body>
        </Card>

      </div>
    </div>
  );
}
