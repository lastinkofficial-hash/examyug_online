import { useState, useEffect } from 'react'
import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import Footer from '../components/sections/Footer'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import LoginModal from '../components/LoginModal'
import { Search, Award, Clock } from 'lucide-react'


export default function CoursesPage(){
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try{
        const response = await fetch("https://examyug-dashboard-backend.onrender.com/api/v1/course/view-all-courses"
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

  const filteredCourses = courses.filter((course) => {
    return (
      course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) || course.courseDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if(loading){
    return (
      <main className="min-vh-100 d-flex align-items-center justify-content-center">
       <p className="fs-6">Loading courses...</p>
      </main>
    );
  }

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/courses" onLoginClick={() => setIsLoginModalOpen(true)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-5 md:py-5">
        <div className="container-lg d-d-flex justify-content-center px-3">
          <div className="text-center mb-5">
            <h1 className="display-5 md:display-4 fw-bold text-foreground mb-4">
              Explore Our Courses
            </h1>
            <p className="fs-6 text-muted-foreground max-w-2xl d-d-flex justify-content-center">
              Choose from our comprehensive collection of industry-leading courses and upskill yourself.
            </p>
          </div>

          {/* Filters */}
          <div className="d-flex d-flex-column md:d-flex-row gap-3 align-items-center justify-content-center">
            <div className="w-100 md:w-auto d-flex-1 md:d-flex-none md:min-w-64">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 focus-visible:ring-primary"
                />
              </div>
            </div>

            <div className="d-flex gap-2 d-flex-wrap justify-content-center">
              {['all', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <Button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  variant={selectedLevel === level ? 'default' : 'outline'}
                  className=""
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-5 md:py-24">
        <div className="container-lg d-d-flex justify-content-center px-3">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-5">
              <p className="fs-6 text-muted-foreground">No courses found matching your search.</p>
            </div>
          ) : (
            <div className="row row-cols-1 md:row-cols-2 lg:row-cols-3 gap-4">
              {filteredCourses.map((course) => (
                <div
                key={course._id}
                className="bg-white rounded-2 border border-border shadow-sm-sm hover:shadow-sm-lg overflow-d-none"
              >
                {/* Thumbnail */}
                <img
                  src={course.thumbnail}
                  alt={course.courseTitle}
                  className="w-100 h-48 object-fit-cover"
                />
              
                {/* Badge */}
                {(course.featured === "yes" || course.newBatch === "yes") && (
                  <div className="px-3 pt-4">
                    <span className="inline-d-block bg-primary/20 text-primary px-3 py-1 rounded-circle small fw-bold">
                      {course.featured === "yes"
                        ? "Featured"
                        : course.newBatch === "yes"
                        ? "New Batch"
                        : ""}
                    </span>
                  </div>
                )}
              
                <div className="p-6">
                  <h3 className="fs-5 fw-bold text-foreground mb-2">
                    {course.courseTitle}
                  </h3>
              
                  <p className="text-muted-foreground small mb-4 line-clamp-3">
                    {course.courseDescription}
                  </p>
              
                  <div className="space-y-2 mb-5 pb-6 border-bottom border-border">
                    <div className="d-flex align-items-center gap-2 small text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span>{course.category?.categoryTitle}</span>
                    </div>
              
                    <div className="d-flex align-items-center gap-2 small text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.timeDuration}</span>
                    </div>
                  </div>
              
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <span className="small line-through text-muted-foreground">
                        ₹{course.maxPrice}
                      </span>
                    </div>
              
                    <span className="fs-5 fw-bold text-primary">
                      ₹{course.sellingPrice}
                    </span>
                  </div>
              
                  <Button className="w-100">
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
