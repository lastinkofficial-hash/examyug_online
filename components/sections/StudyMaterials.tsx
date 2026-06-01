'use client';

import { useState } from 'react';
import { MaterialCard } from '@/components/MaterialCard';
import { studyMaterials, materialsByCategory } from '@/data/materials';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Literature', 'History'];

export function StudyMaterials() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const displayedMaterials = selectedCategory === 'All'
    ? studyMaterials
    : materialsByCategory[selectedCategory as keyof typeof materialsByCategory];

  return (
    <section id="study-materials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Study Materials</h2>
          <p className="text-lg text-muted-foreground">
            Access comprehensive study resources from top educators
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'destructive' : 'outline'}
              className={selectedCategory === category ? 'hover:bg-primary/90' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedMaterials.slice(0, 6).map((material) => (
            <MaterialCard
              key={material.id}
              title={material.title}
              author={material.author}
              type={material.type}
              downloads={material.downloads}
              image={material.image}
              rating={material.rating}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Materials
          </Button>
        </div>
      </div>
    </section>
  );
}
