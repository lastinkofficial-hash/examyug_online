import { Zap, Users, BookOpen, Award } from 'lucide-react';

export function WhyChooseUs() {
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
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose ExamYug24?</h2>
          <p className="text-lg text-muted-foreground">
            We provide everything you need for academic success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-accent bg-opacity-10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-yellow-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
