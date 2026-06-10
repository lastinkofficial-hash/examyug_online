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

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Search Courses</h1>
          <div className="relative">
            <Search className="absolute left-4 top-4 w-6 h-6 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400" />
                          {course.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.students}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">₹{course.price}</span>
                        <Button size="sm">View Course</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No courses found</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
