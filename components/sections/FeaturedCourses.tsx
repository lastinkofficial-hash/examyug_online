'use client';

import { useState } from 'react';
import { CourseCard } from '@/components/CourseCard';
import { courses, coursesByCategory } from '@/data/courses';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Literature', 'History'];

export function FeaturedCourses() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const displayedCourses = selectedCategory === 'All' 
    ? courses 
    : coursesByCategory[selectedCategory as keyof typeof coursesByCategory];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Courses</h2>
          <p className="text-lg text-muted-foreground">
            Choose from our wide range of expertly curated courses
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'destructive' : 'outline'}
              className={selectedCategory === category ? 'hover:bg-primary/90' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedCourses.slice(0, 6).map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              students={course.students}
              rating={course.rating}
              price={course.price}
              image={course.image}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2">
            View More Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
