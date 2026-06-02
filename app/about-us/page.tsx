'use client';

import { Navbar } from '@/components/sections/Navbar';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Footer } from '@/components/sections/Footer';
import { Users, Target, Award, BookOpen } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'We prioritize student success and personalized learning experiences for every learner.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering high-quality education and comprehensive course materials.',
    },
    {
      icon: Award,
      title: 'Results-Driven',
      description: 'Our programs are designed to achieve measurable outcomes and career advancement.',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Constantly evolving with the latest educational technologies and teaching methodologies.',
    },
  ];

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/about-us" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ExamYug
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re on a mission to democratize quality education and help students achieve their academic and career goals through expert-led courses and comprehensive learning resources.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            ExamYug was founded with a simple belief: quality education should be accessible to everyone. We started as a small team of passionate educators and tech enthusiasts who saw the gaps in traditional learning systems.
          </p>
          <p className="text-muted-foreground mb-4">
            Today, we&apos;ve grown into a platform trusted by thousands of students across the country. Our courses cover diverse fields including Data Science, Digital Marketing, Software Development, and much more.
          </p>
          <p className="text-muted-foreground">
            Our success is measured by our students&apos; success. We&apos;re committed to continuous improvement and innovation in education delivery.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-4">5000+</div>
            <p className="text-xl text-foreground">Students Learning</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground font-medium">Expert Instructors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-foreground font-medium">Courses Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-foreground font-medium">Active Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-foreground font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Rajesh Kumar', title: 'Founder & CEO', expertise: 'Education & Technology' },
            { name: 'Priya Singh', title: 'Head of Academics', expertise: 'Curriculum Development' },
            { name: 'Amit Patel', title: 'CTO', expertise: 'EdTech Platform' },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{member.name[0]}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.title}</p>
              <p className="text-muted-foreground text-sm">{member.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
