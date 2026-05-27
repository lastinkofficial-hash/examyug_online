'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent bg-opacity-10 border-b border-accent border-opacity-20 text-center py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 relative">
        <p className="text-sm text-foreground">
          🎉 <span className="font-semibold">Summer Sale!</span> Get 40% off all courses this month
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
