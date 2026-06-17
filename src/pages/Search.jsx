import { useState } from 'react'
import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import Footer from '../components/sections/Footer'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import { Search, Star, Users, Clock, Filter, X } from 'lucide-react'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])
  const [sortBy, setSortBy] = useState('relevant')

  const allCourses = [
    {
      id: 1,
      title: 'Complete Data Science Bootcamp',
      instructor: 'Dr. Rajesh Kumar',
      students: 5234,
      rating: 4.9,
      price: 2999,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop',
      category: 'Data Science',
    },
    {
      id: 2,
      title: 'Web Development Masterclass',
      instructor: 'Sarah Chen',
      students: 8921,
      rating: 4.8,
      price: 1999,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      category: 'Web Development',
    },
  ]

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/search" />

      <section className="container-lg d-d-flex justify-content-center px-3 py-5">
        <div className="mb-5">
          <h1 className="display-5 md:display-4 fw-bold text-foreground mb-5">Search Courses</h1>
          <div className="relative">
            <Search className="absolute left-4 top-4 w-6 h-6 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-4 fs-6 focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="row row-cols-1 lg:row-cols-4 gap-4">
          <div className="lg:col-span-3">
            {filteredCourses.length > 0 ? (
              <div className="row row-cols-1 md:row-cols-2 gap-4">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white border border-border rounded-2 overflow-d-none hover:shadow-sm-lg"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-100 h-48 object-fit-cover"
                    />
                    <div className="p-6">
                      <h3 className="fs-6 fw-bold text-foreground mb-2">{course.title}</h3>
                      <p className="small text-muted-foreground mb-4">{course.instructor}</p>
                      <div className="d-flex align-items-center gap-3 small text-muted-foreground mb-4">
                        <div className="d-flex align-items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400" />
                          {course.rating}
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.students}
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fs-5 fw-bold text-primary">₹{course.price}</span>
                        <Button size="sm">View Course</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <p className="fs-6 text-muted-foreground">No courses found</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
