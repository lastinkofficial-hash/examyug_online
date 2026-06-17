import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import Footer from '../components/sections/Footer'
import { Users, Target, Award, BookOpen } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'We prioritize student success and personalized learning experiences for every learner.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering high-quality education and comprehensive course materials.',
    },
    {
      icon: Award,
      title: 'Results-Driven',
      description: 'Our programs are designed to achieve measurable outcomes and career advancement.',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Constantly evolving with the latest educational technologies and teaching methodologies.',
    },
  ]

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/about-us" />

      <section className="container-lg d-d-flex justify-content-center px-3 py-5">
        <div className="text-center mb-16">
          <h1 className="display-5 md:display-4 fw-bold text-foreground mb-5">
            About ExamYug
          </h1>
          <p className="fs-6 text-muted-foreground max-w-3xl d-d-flex justify-content-center">
            We&apos;re on a mission to democratize quality education and help students achieve their academic and career goals through expert-led courses and comprehensive learning resources.
          </p>
        </div>
      </section>

      <section className="container-lg d-d-flex justify-content-center px-3 py-5">
        <div className="row row-cols-1 md:row-cols-2 lg:row-cols-4 gap-4">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="p-6 border border-border rounded-2 hover:shadow-sm-lg-shadow-sm">
                <IconComponent className="w-8 h-8 text-primary mb-4" />
                <h3 className="fs-6 fw-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground small">{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
