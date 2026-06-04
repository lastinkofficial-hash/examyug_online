import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnnouncementSection from './AnnouncementSection';

export function HeroSection() {
  return (
    <section id="" className="bg-dark py-20 md:py-32 border border-rounded">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 leading-tight">
              Our Latest <span className="text-accent">Announcements</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Learn from expert instructors with personalized courses and study materials designed to help you excel in every subject.
            </p>
            
          </div>
          <div className="">
              <AnnouncementSection />
          </div>
        </div>
      </div>
    </section>
  );
}
