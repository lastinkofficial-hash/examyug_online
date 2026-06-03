'use client';

import { Navbar } from '@/components/sections/Navbar';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Footer } from '@/components/sections/Footer';
import { LoginModal } from '@/components/LoginModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Users, Clock, Award } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Data Science & Analytics',
    description: 'Master data science with Python, SQL, and machine learning. Learn to analyze data and create predictive models.',
    level: 'Beginner to Advanced',
    duration: '6 months',
    students: 5200,
    rating: 4.8,
    price: '₹15,999',
    badge: 'Popular',
  },
  {
    id: 2,
    title: 'Digital Marketing With AI',
    description: 'Learn modern digital marketing strategies powered by AI tools. SEO, content marketing, and automation included.',
    level: 'Intermediate',
    duration: '3 months',
    students: 3400,
    rating: 4.7,
    price: '₹8,999',
    badge: 'Trending',
  },
  {
    id: 3,
    title: 'Software Development',
    description: 'Full-stack web development with React, Node.js, and databases. Build real-world applications.',
    level: 'Beginner to Advanced',
    duration: '9 months',
    students: 6800,
    rating: 4.9,
    price: '₹18,999',
    badge: 'Best Seller',
  },
  {
    id: 4,
    title: 'Placement Program',
    description: 'Industry-ready placement program with interview preparation and job placement assistance.',
    level: 'All Levels',
    duration: '4 months',
    students: 2100,
    rating: 4.6,
    price: '₹9,999',
    badge: null,
  },
  {
    id: 5,
    title: 'Banking & Finance',
    description: 'Master banking concepts, investment strategies, and financial analysis. Career-focused curriculum.',
    level: 'Intermediate',
    duration: '5 months',
    students: 1800,
    rating: 4.7,
    price: '₹12,999',
    badge: 'New',
  },
  {
    id: 6,
    title: 'DSA Courses',
    description: 'Data Structures & Algorithms mastery. Essential for coding interviews and competitive programming.',
    level: 'Beginner to Advanced',
    duration: '4 months',
    students: 4200,
    rating: 4.8,
    price: '₹7,999',
    badge: 'Popular',
  },
  {
    id: 7,
    title: 'Generative AI',
    description: 'Learn to build AI applications with ChatGPT, DALL-E, and other generative AI models.',
    level: 'Intermediate',
    duration: '3 months',
    students: 2900,
    rating: 4.9,
    price: '₹14,999',
    badge: 'Trending',
  },
  {
    id: 8,
    title: 'Project Garage',
    description: 'Hands-on learning through real-world projects. Build a portfolio while learning industry standards.',
    level: 'All Levels',
    duration: '2 months',
    students: 1600,
    rating: 4.6,
    price: '₹5,999',
    badge: null,
  },
];

export default function CoursesPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level.includes(selectedLevel);
    return matchesSearch && matchesLevel;
  });

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our Courses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive collection of industry-leading courses and upskill yourself.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="w-full md:w-auto flex-1 md:flex-none md:min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 focus-visible:ring-primary"
                />
              </div>
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              {['all', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <Button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  variant={selectedLevel === level ? 'default' : 'outline'}
                  className="transition-all duration-300"
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No courses found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg border border-border shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Badge */}
                  {course.badge && (
                    <div className="px-4 pt-4">
                      <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {course.badge}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-2 mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="w-4 h-4" />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>

                    {/* Rating & Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(course.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-foreground ml-1">
                          {course.rating}
                        </span>
                      </div>
                      <span className="text-xl font-bold text-primary">
                        {course.price}
                      </span>
                    </div>

                    {/* Button */}
                    <Button
                      className="w-full hover:scale-105 transition-transform duration-300"
                    >
                      View Course
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
