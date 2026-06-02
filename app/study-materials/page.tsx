'use client';

import { Navbar } from '@/components/sections/Navbar';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Footer } from '@/components/sections/Footer';
import { BookOpen, FileText, Video, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function StudyMaterials() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const materials = [
    {
      id: 1,
      title: 'Data Science Fundamentals',
      category: 'data-science',
      description: 'Complete guide to data science concepts and applications',
      type: 'PDF',
      downloads: 1243,
      icon: FileText,
    },
    {
      id: 2,
      title: 'Python for Beginners',
      category: 'programming',
      description: 'Step-by-step Python programming tutorial with examples',
      type: 'PDF',
      downloads: 2156,
      icon: FileText,
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies',
      category: 'marketing',
      description: 'Modern digital marketing techniques and best practices',
      type: 'Video',
      downloads: 1834,
      icon: Video,
    },
    {
      id: 4,
      title: 'Database Design Principles',
      category: 'programming',
      description: 'Learn database design patterns and optimization',
      type: 'PDF',
      downloads: 945,
      icon: FileText,
    },
    {
      id: 5,
      title: 'Marketing Analytics Tutorial',
      category: 'marketing',
      description: 'Comprehensive guide to marketing analytics tools',
      type: 'Video',
      downloads: 1567,
      icon: Video,
    },
    {
      id: 6,
      title: 'Machine Learning Algorithms',
      category: 'data-science',
      description: 'Deep dive into ML algorithms and implementations',
      type: 'PDF',
      downloads: 2004,
      icon: FileText,
    },
    {
      id: 7,
      title: 'Web Development Bootcamp',
      category: 'programming',
      description: 'Full-stack web development course materials',
      type: 'Video',
      downloads: 2341,
      icon: Video,
    },
    {
      id: 8,
      title: 'SEO Optimization Guide',
      category: 'marketing',
      description: 'Master SEO techniques for better online visibility',
      type: 'PDF',
      downloads: 1678,
      icon: FileText,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Materials' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'programming', label: 'Programming' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const filteredMaterials = selectedCategory === 'all'
    ? materials
    : materials.filter((m) => m.category === selectedCategory);

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/study-materials" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Study Materials
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive study materials, notes, videos, and resources created by our expert instructors.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="hover:scale-105 transition-transform duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Materials Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.map((material) => {
            const Icon = material.icon;
            return (
              <div
                key={material.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="bg-primary/10 p-8 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-primary" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {material.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{material.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{material.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{material.downloads} downloads</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary/10"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{materials.length}+</div>
              <p className="text-foreground font-medium">Study Materials</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-foreground font-medium">Video Lectures</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-foreground font-medium">Total Downloads</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
