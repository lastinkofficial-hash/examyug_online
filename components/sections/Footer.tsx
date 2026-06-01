import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="text-xl font-bold">ExamYug24</span>
            </div>
            <p className="text-white text-opacity-70">
              Empowering students with quality education and personalized learning experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white text-opacity-70">
              <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Materials</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-white text-opacity-70">
              <li><a href="#" className="hover:text-white transition-colors">Mathematics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Literature</a></li>
              <li><a href="#" className="hover:text-white transition-colors">History</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-white text-opacity-70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@ExamYug24.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Education St, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white text-opacity-70 text-sm">
            <p>&copy; 2026 ExamYug24. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
