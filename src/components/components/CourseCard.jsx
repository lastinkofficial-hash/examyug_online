import { Star, Users } from 'lucide-react';
import Button  from '../ui/button';

export function CourseCard({
  title,
  instructor,
  students,
  rating,
  price,
  image
}) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{instructor}</p>
        
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-foreground font-medium">{rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-accent">${price}</span>
          <Button size="sm" variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
