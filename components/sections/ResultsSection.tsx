import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ResultsSection() {
  return (
    <div id="results" className="py-20 bg-white">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
        Student <span className="text-accent">Results</span>
      </h1>
      <p className="text-lg text-center mb-8">Motion results reflect the passion, hard work and efforts of our students, so far, we have acquired remarkable selection ratios in competitive exams.</p>
      <div className="flex gap-4 my-16 px-4">
        <div className="w-1/2">
          <Carousel data-bs-theme="dark">
            <CarouselItem>
              <img
                className="block w-11/12 mx-auto"
                src="https://motion.ac.in/storage/website/result_image/1750049613224328.webp"
                alt="First slide"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                className="block w-11/12 mx-auto"
                src="https://cdn.motion.ac.in/ssp/img/jee-adv-2025.png"
                alt="Second slide"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                className="block w-11/12 mx-auto"
                src="https://cdn.motion.ac.in/ssp/img/home-page-img/JEE-2025-result-new.webp"
                alt="Third slide"
              />
            </CarouselItem>
          </Carousel>
        </div>
        <div className="w-1/2">
          <Carousel data-bs-theme="dark">
            <CarouselItem>
              <img
                className="block w-11/12 mx-auto"
                src="https://cdn.motion.ac.in/ssp/img/home-page-img/JEE-2025-result-new.webp"
                alt="First slide"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                className="block w-11/12 mx-auto"
                src="https://cdn.motion.ac.in/ssp/img/jee-adv-2025.png"
                alt="Second slide"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                className="block w-11/12 mx-auto"
                src="https://motion.ac.in/storage/website/result_image/1750049613224328.webp"
                alt="Third slide"
              />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
