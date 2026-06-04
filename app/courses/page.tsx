'use client';

import { Navbar } from '@/components/sections/Navbar';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Footer } from '@/components/sections/Footer';
import { LoginModal } from '@/components/LoginModal';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Users, Clock, Award } from 'lucide-react';


export default function CoursesPage(){
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try{
        const response = await fetch("https://examyug-dashboard-backend.onrender.com/api/v1/course/view-all-courses?page=1&limit=5"
      );
      const data = await response.json();

      if(data.success){
        setCourses(data.allCourses);
      }
    } catch(error) {
      console.error("Error fetching courses: ", error);
    } finally {
      setLoading(false);
    }
  };

  fetchCourses();
}, []);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredCourses = courses.filter((course: any) => {
    return (
      course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) || course.courseDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if(loading){
    return (
      <main className="min-h-screen flex items-center justify-center">
       <p className="text-lg">Loading courses...</p>
      </main>
    );
  }

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
                key={course._id}
                className="bg-white rounded-lg border border-border shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Thumbnail */}
                <img
                  src={course.thumbnail}
                  alt={course.courseTitle}
                  className="w-full h-48 object-cover"
                />
              
                {/* Badge */}
                {(course.featured === "yes" || course.newBatch === "yes") && (
                  <div className="px-4 pt-4">
                    <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {course.featured === "yes"
                        ? "Featured"
                        : course.newBatch === "yes"
                        ? "New Batch"
                        : ""}
                    </span>
                  </div>
                )}
              
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {course.courseTitle}
                  </h3>
              
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {course.courseDescription}
                  </p>
              
                  <div className="space-y-2 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span>{course.category?.categoryTitle}</span>
                    </div>
              
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.timeDuration}</span>
                    </div>
                  </div>
              
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm line-through text-muted-foreground">
                        ₹{course.maxPrice}
                      </span>
                    </div>
              
                    <span className="text-xl font-bold text-primary">
                      ₹{course.sellingPrice}
                    </span>
                  </div>
              
                  <Button className="w-full">
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
              Showing {filteredCourses.length} courses
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
