import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'

export default function ResultsSection() {
  return (
    <section id="results" className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container-lg px-3">
        <h1 className="text-center fs-2 fs-md-1 fw-bold text-dark mb-3">
          Student <span style={{ color: '#fbbf24' }}>Results</span>
        </h1>
        <p className="fs-6 text-center text-muted mb-5">
          Results reflect the passion, hard work and efforts of our students with remarkable selection ratios in competitive exams.
        </p>
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <Carousel data-bs-theme="light">
              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://motion.ac.in/storage/website/result_image/1750049613224328.webp"
                  alt="First slide"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </CarouselItem>

              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://cdn.motion.ac.in/ssp/img/jee-adv-2025.png"
                  alt="Second slide"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </CarouselItem>

              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://cdn.motion.ac.in/ssp/img/home-page-img/JEE-2025-result-new.webp"
                  alt="Third slide"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </CarouselItem>
            </Carousel>
          </div>
          <div className="col-12 col-lg-6">
            <Carousel data-bs-theme="light">
              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://cdn.motion.ac.in/ssp/img/home-page-img/JEE-2025-result-new.webp"
                  alt="First slide"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </CarouselItem>

              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://cdn.motion.ac.in/ssp/img/jee-adv-2025.png"
                  alt="Second slide"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </CarouselItem>

              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://motion.ac.in/storage/website/result_image/1750049613224328.webp"
                  alt="Third slide"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
