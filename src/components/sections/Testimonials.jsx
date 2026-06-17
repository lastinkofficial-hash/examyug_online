import TestimonialCard from "@/components/components/TestimonialCard";


export default function Testimonials() {

  const testimonials = [
    {
      name: 'Aarav Patel',
      role: 'Class 12 Student',
      testimonial: 'EduPrime helped me improve my math scores from 65 to 92! The personalized approach and clear explanations made all the difference.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'University Student',
      testimonial: 'The study materials are incredibly comprehensive. I passed my entrance exam on the first attempt thanks to the well-structured courses.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      name: 'Rohan Verma',
      role: 'STEM Enthusiast',
      testimonial: 'Best online learning platform I&apos;ve used. The instructors are experts and the community is very supportive. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      name: 'Ananya Dutta',
      role: 'Science Student',
      testimonial: 'The chemistry course was transformative. Complex concepts became so much easier to understand with the video explanations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#dc2626' }}>
      <div className="container-lg px-3">
        <div className="text-center mb-5">
          <h2 className="fs-3 fs-md-1 fw-bold text-white mb-4">Student Testimonials</h2>
          <p className="fs-6 text-white-50">
            Hear from our successful students
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
