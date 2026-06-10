import { useParams } from 'react-router-dom'
import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import Footer from '../components/sections/Footer'
import Button from '../components/ui/button'
import { Star, Users, Clock, Award, CheckCircle } from 'lucide-react'

export default function CourseDetails() {
  const { id } = useParams()

  const course = {
    id: id || 1,
    title: 'Complete Data Science Bootcamp',
    instructor: 'Dr. Rajesh Kumar',
    rating: 4.9,
    students: 5234,
    duration: '12 weeks',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
    description: 'Master data science from basics to advanced concepts',
    modules: [
      'Python Fundamentals',
      'Data Analysis with Pandas',
      'Machine Learning Basics',
      'Deep Learning',
      'Real-world Projects',
    ],
  }

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={course.image}
              alt={course.title}
              className="w-full rounded-lg mb-6"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-muted-foreground">({course.students} students)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                {course.duration}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What you&apos;ll learn</h3>
              <ul className="space-y-3">
                {course.modules.map((module, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{module}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">₹{course.price}</span>
              <Button className="flex-1" size="lg">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
