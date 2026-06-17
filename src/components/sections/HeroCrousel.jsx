import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeroCrousel() {
  return (
    <div className="py-3" style={{ backgroundColor: '#f9f9f9' }}>
      <Carousel data-bs-theme="light">
        <CarouselItem>
          <img
            className="d-block w-100"
            src="https://asset.allen.in/37f67be6-a2c0-4383-a96c-503f24cd3c06/sc/image_preview_extra_large/secondaryContent.webp?__ar__=2.54&__name__=Group%201171286760"
            alt="First slide"
          />
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100"
            src="https://asset.allen.in/2ac5c95e-b8c3-45b3-b89f-2e35b39f8a73/sc/image_preview_extra_large/secondaryContent.webp?__ar__=2.54&__name__=Re-NEET_Hero%20Banner_Web"
            alt="Second slide"
          />
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100"
            src="https://asset.allen.in/c65e1aa5-a4b0-4281-8b23-3165eb610fbb/sc/image_preview_extra_large/secondaryContent.webp?__ar__=2.59&__name__=frame_2087326912"
            alt="Third slide"
          />
        </CarouselItem>
      </Carousel>
    </div>
  );
}
