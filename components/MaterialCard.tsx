import { Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MaterialCardProps {
  title: string;
  author: string;
  type: string;
  downloads: number;
  image: string;
  rating: number;
}

export function MaterialCard({
  title,
  author,
  type,
  downloads,
  image,
  rating
}: MaterialCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-foreground line-clamp-2">{title}</h3>
          <span className="text-xs bg-accent bg-opacity-10 text-accent px-2 py-1 rounded">
            {type}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{author}</p>
        
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{downloads.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-foreground font-medium">{rating}</span>
          </div>
        </div>

        <Button className="w-full" variant="outline">Download</Button>
      </div>
    </div>
  );
}
