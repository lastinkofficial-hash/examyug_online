import Button from '../ui/button';
import { ArrowRight } from 'lucide-react';
import AnnouncementSection from './AnnouncementSection';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-danger py-5" style={{ backgroundColor: '#dc2626' }}>
      <div className="container-lg">
        <div className="row g-5 align-align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-white mb-4">
              Our Latest <span className="text-warning">Announcements</span>
            </h1>
            <p className="lead text-white-50 mb-4">
              Learn from expert instructors with personalized courses and study materials designed to help you excel in every subject.
            </p>
          </div>
          <div className="col-md-6 bg-white p-4 rounded">
            <AnnouncementSection />
          </div>
        </div>
      </div>
    </section>
  )
}
