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

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ExamYug
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re on a mission to democratize quality education and help students achieve their academic and career goals through expert-led courses and comprehensive learning resources.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <IconComponent className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
