'use client';

import { useEffect, useState } from 'react';
import { CourseCard } from '@/components/CourseCard';
import { Button } from '@/components/ui/button';

interface Course {
  _id: string;
  courseTitle: string;
  courseDescription: string;
  sellingPrice: number;
  maxPrice?: number;
  thumbnail: string;
  featured?: string;
  courseDisplay?: string;
  category?: {
    _id: string;
    categoryTitle: string;
  };
}

export function FeaturedCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          'https://examyug-dashboard-backend.onrender.com/api/v1/course/view-all-courses?page=1&limit=50'
        );

        const data = await response.json();

        console.log('Courses API Response:', data);

        if (data?.success) {
          // Show only featured/display courses
          const featuredCourses = (data.allCourses || []).filter(
            (course: Course) =>
              course.featured?.toLowerCase() === 'yes' ||
              course.courseDisplay?.toLowerCase() === 'yes'
          );

          setCourses(featuredCourses);
        }
      } catch (error) {
        console.error('Error fetching featured courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const categories = [
    'All',
    ...Array.from(
      new Set(
        courses
          .map((course) => course.category?.categoryTitle)
          .filter(Boolean)
      )
    ),
  ];

  const displayedCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter(
          (course) =>
            course.category?.categoryTitle === selectedCategory
        );

  if (loading) {
    return (
      <section id="courses" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground">
            Loading featured courses...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Courses
          </h2>

          <p className="text-lg text-muted-foreground">
            Choose from our wide range of expertly curated courses
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex justify-center">
          <div
            className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent pb-2 px-1 max-w-full"
            style={{
              maxWidth: '900px',
            }}
          >
            {categories.map((category) => (
              <Button
                key={String(category)}
                onClick={() => setSelectedCategory(String(category))}
                variant={
                  selectedCategory === category
                    ? 'destructive'
                    : 'outline'
                }
                className={`whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? 'hover:bg-primary/90'
                    : ''
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {displayedCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedCourses.slice(0, 6).map((course) => (
              <CourseCard
                key={course._id}
                title={course.courseTitle}
                instructor={
                  course.category?.categoryTitle || 'Examyug'
                }
                students={0}
                rating={5}
                price={`₹${course.sellingPrice}`}
                image={course.thumbnail}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              No featured courses found.
            </p>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => {
              window.location.href = '/courses';
            }}
          >
            View More Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
