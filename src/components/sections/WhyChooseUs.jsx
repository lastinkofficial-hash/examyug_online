import { Zap, Users, BookOpen, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Engaging video lectures, quizzes, and assignments for active learning'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Learn alongside peers, discuss concepts, and share experiences'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Materials',
      description: 'Complete study resources, notes, and practice problems for every topic'
    },
    {
      icon: Award,
      title: 'Expert Certification',
      description: 'Earn recognized certificates upon course completion'
    }
  ];

  return (
    <section id="about-us" className="py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container-lg px-3">
        <div className="text-center mb-5">
          <h2 className="fs-3 fs-md-1 fw-bold text-dark mb-4">Why Choose ExamYug24?</h2>
          <p className="fs-6 text-muted">
            We provide everything you need for academic success
          </p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="col">
                <div className="text-center">
                  <div className="d-inline-flex p-3 rounded-2 mb-4" style={{ backgroundColor: '#fbbf24', backgroundColor: 'rgba(251, 191, 36, 0.1)' }}>
                    <Icon className="w-6 h-6" style={{ color: '#fbbf24' }} />
                  </div>
                  <h3 className="fw-bold text-dark mb-2">{feature.title}</h3>
                  <p className="small text-muted">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
