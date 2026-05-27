import { X } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-secondary/10 border-b border-secondary/20 text-center py-3 px-4">
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm text-foreground">
          🎉 <strong>Summer Sale:</strong> Get 40% off all courses this month!
        </span>
      </div>
    </div>
  );
}
