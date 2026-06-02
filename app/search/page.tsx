'use client';

import { Navbar } from '@/components/sections/Navbar';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Users, Clock, Filter, X } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevant');

  const allCourses = [
    {
      id: 1,
      title: 'Complete Data Science Bootcamp',
      instructor: 'Dr. Rajesh Kumar',
      category: 'Data Science',
      level: 'Beginner',
      rating: 4.8,
      students: 5430,
      price: 4999,
      duration: '8 weeks',
    },
    {
      id: 2,
      title: 'Python Programming Masterclass',
      instructor: 'Priya Singh',
      category: 'Programming',
      level: 'Beginner',
      rating: 4.7,
      students: 8920,
      price: 3999,
      duration: '6 weeks',
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies',
      instructor: 'Amit Patel',
      category: 'Marketing',
      level: 'Intermediate',
      rating: 4.6,
      students: 3450,
      price: 2999,
      duration: '4 weeks',
    },
    {
      id: 4,
      title: 'Machine Learning Advanced',
      instructor: 'Dr. Rajesh Kumar',
      category: 'Data Science',
      level: 'Advanced',
      rating: 4.9,
      students: 2100,
      price: 5999,
      duration: '10 weeks',
    },
    {
      id: 5,
      title: 'Web Development Full Stack',
      instructor: 'Anita Verma',
      category: 'Programming',
      level: 'Intermediate',
      rating: 4.8,
      students: 6780,
      price: 4499,
      duration: '12 weeks',
    },
    {
      id: 6,
      title: 'SEO & Content Marketing',
      instructor: 'Rahul Sharma',
      category: 'Marketing',
      level: 'Beginner',
      rating: 4.5,
      students: 4200,
      price: 2499,
      duration: '3 weeks',
    },
    {
      id: 7,
      title: 'Database Design & SQL',
      instructor: 'Priya Singh',
      category: 'Programming',
      level: 'Intermediate',
      rating: 4.7,
      students: 3890,
      price: 3499,
      duration: '5 weeks',
    },
    {
      id: 8,
      title: 'AI & Neural Networks',
      instructor: 'Dr. Rajesh Kumar',
      category: 'Data Science',
      level: 'Advanced',
      rating: 4.9,
      students: 1800,
      price: 6999,
      duration: '10 weeks',
    },
  ];

  const categories = ['Data Science', 'Programming', 'Marketing'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = useMemo(() => {
    let results = allCourses;

    // Search filter
    if (searchQuery) {
      results = results.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category/Level filters
    if (selectedFilters.length > 0) {
      results = results.filter(
        (course) =>
          selectedFilters.includes(course.category) ||
          selectedFilters.includes(course.level)
      );
    }

    // Sorting
    if (sortBy === 'price-low') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      results.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'popular') {
      results.sort((a, b) => b.students - a.students);
    }

    return results;
  }, [searchQuery, selectedFilters, sortBy]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/search" />

      {/* Search Header */}
      <section className="bg-primary/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-8">Find Your Perfect Course</h1>
          <div className="relative">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, instructors, topics..."
              className="pl-12 pr-4 py-6 text-lg focus-visible:ring-primary"
            />
            <Search className="absolute left-4 top-4 w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>

              {selectedFilters.length > 0 && (
                <button
                  onClick={() => setSelectedFilters([])}
                  className="text-sm text-primary hover:text-primary/80 mb-4"
                >
                  Clear all filters
                </button>
              )}

              {/* Categories */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-medium text-foreground mb-3 text-sm">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(category)}
                        onChange={() => toggleFilter(category)}
                        className="rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground hover:text-foreground">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Levels */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-medium text-foreground mb-3 text-sm">Level</h4>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(level)}
                        onChange={() => toggleFilter(level)}
                        className="rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground hover:text-foreground">
                        {level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-medium text-foreground mb-3 text-sm">Sort By</h4>
                <div className="space-y-2">
                  {[
                    { value: 'relevant', label: 'Most Relevant' },
                    { value: 'popular', label: 'Most Popular' },
                    { value: 'rating', label: 'Highest Rated' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="sort"
                        value={option.value}
                        checked={sortBy === option.value}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border-border"
                      />
                      <span className="text-sm text-muted-foreground hover:text-foreground">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filteredCourses.length}</span> courses
              </p>
            </div>

            {/* Active Filters Display */}
            {selectedFilters.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {selectedFilters.map((filter) => (
                  <div
                    key={filter}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center gap-2 text-sm"
                  >
                    {filter}
                    <button
                      onClick={() => toggleFilter(filter)}
                      className="hover:text-primary/80"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Course Cards */}
            {filteredCourses.length > 0 ? (
              <div className="space-y-6">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex gap-6"
                  >
                    {/* Placeholder */}
                    <div className="hidden md:block w-48 h-32 bg-primary/10 rounded-lg flex-shrink-0"></div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex gap-2 mb-2">
                            <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                              {course.category}
                            </span>
                            <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium">
                              {course.level}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            by {course.instructor}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xl font-bold text-foreground">
                            ₹{course.price.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()} students</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        View Course
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  No courses found. Try adjusting your filters or search query.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
