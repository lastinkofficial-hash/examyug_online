import { BookOpen, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold text-foreground">ExamYug</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Courses Dropdown */}
          <a href="#offline" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
              Courses <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Data Science & Analytics</DropdownMenuItem>
              <DropdownMenuItem>Digital Marketing With AI</DropdownMenuItem>
              <DropdownMenuItem>Software Development</DropdownMenuItem>
              <DropdownMenuItem>Placement Program</DropdownMenuItem>
              <DropdownMenuItem>Banking & Finance</DropdownMenuItem>
              <DropdownMenuItem>DSA Courses</DropdownMenuItem>
              <DropdownMenuItem>Generative AI</DropdownMenuItem>
              <DropdownMenuItem>Project Garage</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#study-materials" className="text-foreground hover:text-primary transition-colors">
            Study Materials
          </a>
          <a href="#results" className="text-foreground hover:text-primary transition-colors">
            Results
          </a>
          <a href="#about-us" className="text-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#contact-us" className="text-foreground hover:text-primary transition-colors">
            Contact Us
          </a>
        </div>

        {/* Search + Auth Buttons */}
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search courses..."
            className="w-48 md:w-64"
          />
          <Button variant="outline">Login</Button>
        </div>
      </div>
    </nav>
  );
}
