import { useState } from 'react'
import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import TrustStatistics from '../components/sections/TrustStatistics'
import FeaturedCourses from '../components/sections/FeaturedCourses'
import StudyMaterials from '../components/sections/StudyMaterials'
import ResultsSection from '../components/sections/ResultsSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import Faculty from '../components/sections/Faculty'
import FAQ from '../components/sections/FAQ'
import Community from '../components/sections/Community'
import NewsletterSignup from '../components/sections/NewsletterSignup'
import Footer from '../components/sections/Footer'
import HeroCrousel from '../components/sections/HeroCrousel'
import AnnouncementSection from '../components/sections/AnnouncementSection'
import HeroSection from '../components/sections/HeroSection'
import LoginModal from '../components/LoginModal'

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <HeroCrousel />
      <TrustStatistics />
      <FeaturedCourses />
      <StudyMaterials />
      <HeroSection />
      <ResultsSection />
      <WhyChooseUs />
      <Testimonials />
      <Faculty />
      <FAQ />
      <Community />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
