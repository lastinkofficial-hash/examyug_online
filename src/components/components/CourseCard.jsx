import { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Star, Users } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseCard.css";

export function CourseCard({
  title,
  instructor,
  students,
  rating,
  price,
  image,
  description,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`course-card-container ${flipped ? "flipped" : ""}`}>
      <div className="course-card-inner">

        {/* Front Side */}
        <Card className="course-card-front shadow-sm-sm border-0">
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            style={{ height: "200px", objectFit: "cover" }}
          />

          <Card.Body>
            <Card.Title>{title}</Card.Title>

            <Card.Text className="text-muted">
              {instructor}
            </Card.Text>

            <div className="d-d-flex justify-content-between mb-3">
              <div className="d-d-flex align-align-items-center gap-1">
                <Users size={16} />
                <span>{students.toLocaleString()}</span>
              </div>

              <div className="d-d-flex align-align-items-center gap-1">
                <Star
                  size={16}
                  fill="#facc15"
                  color="#facc15"
                />
                <span>{rating}</span>
              </div>
            </div>

            <div className="d-d-flex justify-content-between align-align-items-center">
              <span className="fs-4 fw-bold text-success">
                ${price}
              </span>

              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => setFlipped(true)}
              >
                View Description
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* Back Side */}
        <Card className="course-card-back shadow-sm-sm border-0">
          <Card.Body className="d-d-flex d-flex-column justify-content-between h-100">
            <div>
              <Card.Title>{title}</Card.Title>

              <Card.Text
                style={{
                  maxHeight: "220px",
                  overflowY: "auto",
                }}
              >
                {description}
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

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  students: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
