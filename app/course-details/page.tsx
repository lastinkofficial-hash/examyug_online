'use client';

import { Navbar } from '@/components/sections/Navbar';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, Award, CheckCircle, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export default function CourseDetails() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const course = {
    title: 'Complete Data Science & Machine Learning Bootcamp',
    instructor: 'Dr. Rajesh Kumar',
    rating: 4.8,
    reviews: 1245,
    students: 5430,
    price: 4999,
    duration: '8 weeks',
    level: 'Beginner to Advanced',
    description:
      'Master Data Science and Machine Learning from scratch. Learn Python, SQL, statistics, and build real-world projects.',
  };

  const curriculum = [
    {
      module: 'Module 1: Python Basics',
      lessons: 15,
      duration: '6 hours',
      topics: ['Variables & Data Types', 'Control Flow', 'Functions', 'Error Handling'],
    },
    {
      module: 'Module 2: SQL Fundamentals',
      lessons: 12,
      duration: '5 hours',
      topics: ['Database Design', 'Queries', 'Joins', 'Aggregations'],
    },
    {
      module: 'Module 3: Statistical Analysis',
      lessons: 18,
      duration: '7 hours',
      topics: ['Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'Distributions'],
    },
    {
      module: 'Module 4: Machine Learning',
      lessons: 20,
      duration: '9 hours',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'],
    },
  ];

  const benefits = [
    'Expert instruction from industry professionals',
    'Hands-on projects with real datasets',
    'Lifetime access to course materials',
    'Certificate of completion',
    'Job placement assistance',
    ' 1-on-1 mentor support',
    'Community forum access',
    'Free lifetime updates',
  ];

  const requirements = [
    'Basic computer literacy',
    'Enthusiasm to learn',
    'A laptop or computer',
    'Internet connection',
    'Python 3.x installed (we&apos;ll help you set this up)',
  ];

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/course-details" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Course Info */}
          <div>
            <div className="mb-6">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {course.level}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {course.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {course.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="font-bold text-foreground">{course.rating}</span>
                <span className="text-muted-foreground">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                {course.students.toLocaleString()} students
              </div>
            </div>

            {/* Instructor */}
            <div className="mb-8 pb-8 border-b border-border">
              <p className="text-muted-foreground mb-2">Instructor</p>
              <p className="text-xl font-bold text-foreground">{course.instructor}</p>
            </div>

            {/* Course Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <Clock className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-bold text-foreground">{course.duration}</p>
              </div>
              <div>
                <BarChart3 className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Level</p>
                <p className="font-bold text-foreground">Intermediate</p>
              </div>
              <div>
                <Award className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Certificate</p>
                <p className="font-bold text-foreground">Included</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 text-lg py-6 hover:scale-105 transition-transform duration-300">
                Enroll Now - ₹{course.price}
              </Button>
              <Button variant="outline" className="flex-1 text-lg py-6 hover:scale-105 transition-transform duration-300">
                Add to Wishlist
              </Button>
            </div>
          </div>

          {/* Placeholder for Course Image */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-96 flex items-center justify-center sticky top-24">
            <div className="text-center">
              <BarChart3 className="w-24 h-24 text-primary mx-auto mb-4" />
              <p className="text-lg text-foreground font-medium">Course Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="border-b border-border mb-8 flex gap-8">
          {['overview', 'curriculum', 'benefits', 'requirements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`pb-4 font-medium transition-colors duration-300 ${
                selectedTab === tab
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Course Overview</h3>
              <p className="text-muted-foreground mb-4">
                This comprehensive bootcamp is designed to take you from beginner to professional in Data Science and Machine Learning.
              </p>
              <p className="text-muted-foreground">
                You&apos;ll learn everything you need to know to pursue a career in data science, including programming, statistics, machine learning algorithms, and real-world project implementation.
              </p>
            </div>
          </div>
        )}

        {/* Curriculum Tab */}
        {selectedTab === 'curriculum' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Course Curriculum</h3>
            {curriculum.map((section, index) => (
              <div key={index} className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-foreground">{section.module}</h4>
                  <span className="text-sm text-muted-foreground">
                    {section.lessons} lessons • {section.duration}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Benefits Tab */}
        {selectedTab === 'benefits' && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">What You&apos;ll Get</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Requirements Tab */}
        {selectedTab === 'requirements' && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">Requirements</h3>
            <div className="space-y-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{req}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students who have already transformed their careers with our courses.
          </p>
          <Button className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300">
            Enroll Now - ₹{course.price}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
