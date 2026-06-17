import { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Download } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MaterialCard.css";

export default function MaterialCard({
  title,
  description,
  image,
  category,
  maxPrice,
  sellingPrice,
  pdfUrl,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`material-card-container ${flipped ? "flipped" : ""}`}>
      <div className="material-card-inner">

        {/* Front Side */}
        <Card className="material-card-front border-0 shadow-sm-sm">
          <div style={{ height: "240px", overflow: "d-none" }}>
            <Card.Img
              variant="top"
              src={image}
              alt={title}
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <Card.Body className="d-d-flex d-flex-column">
            <span className="badge bg-primary mb-3 align-self-start">
              {category || "General"}
            </span>

            <Card.Title>{title}</Card.Title>

            <Card.Text className="text-muted d-flex-grow-1">
              {description?.length > 100
                ? `${description.substring(0, 100)}...`
                : description}
            </Card.Text>

            <div className="d-d-flex justify-content-between align-align-items-center mt-auto">
              <div>
                <span className="text-muted text-decoration-line-through">
                  ₹{maxPrice}
                </span>

                <span className="ms-2 fs-5 fw-bold text-primary">
                  ₹{sellingPrice}
                </span>
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
        <Card className="material-card-back border-0 shadow-sm-sm">
          <Card.Body className="d-d-flex d-flex-column">

            <Card.Title>{title}</Card.Title>

            <div
              className="text-muted mb-4 d-flex-grow-1"
              style={{
                overflowY: "auto",
                maxHeight: "220px",
              }}
            >
              {description}
            </div>

            <div className="mb-4">
              <div>
                <span className="text-muted text-decoration-line-through">
                  ₹{maxPrice}
                </span>

                <span className="ms-2 fs-5 fw-bold text-primary">
                  ₹{sellingPrice}
                </span>
              </div>
            </div>

            <div className="d-d-flex justify-content-between">
              <Button
                variant="secondary"
                onClick={() => setFlipped(false)}
              >
                Back
              </Button>

              <Button
                variant="success"
                onClick={() => {
                  if (pdfUrl) {
                    window.open(
                      pdfUrl,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }
                }}
              >
                <Download size={16} className="me-2" />
                Download
              </Button>
            </div>

          </Card.Body>
        </Card>

      </div>
    </div>
  );
}

MaterialCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
  maxPrice: PropTypes.number,
  sellingPrice: PropTypes.number,
  pdfUrl: PropTypes.string,
};