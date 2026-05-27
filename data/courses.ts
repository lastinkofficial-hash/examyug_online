export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  students: number;
  rating: number;
  price: number;
  image: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    category: 'Mathematics',
    instructor: 'Prof. John Smith',
    students: 1250,
    rating: 4.8,
    price: 99,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop',
    description: 'Master advanced mathematical concepts and problem-solving techniques.'
  },
  {
    id: '2',
    title: 'Physics Fundamentals',
    category: 'Physics',
    instructor: 'Dr. Sarah Johnson',
    students: 890,
    rating: 4.7,
    price: 89,
    image: 'https://images.unsplash.com/photo-1636633762833-5d171194a6a0?w=400&h=300&fit=crop',
    description: 'Learn the core principles of physics with practical applications.'
  },
  {
    id: '3',
    title: 'Chemistry Essentials',
    category: 'Chemistry',
    instructor: 'Prof. Michael Chen',
    students: 765,
    rating: 4.6,
    price: 79,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop',
    description: 'Explore chemical reactions and molecular structures in depth.'
  },
  {
    id: '4',
    title: 'Biology Deep Dive',
    category: 'Biology',
    instructor: 'Dr. Emily Davis',
    students: 945,
    rating: 4.8,
    price: 94,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop',
    description: 'Comprehensive study of living organisms and biological systems.'
  },
  {
    id: '5',
    title: 'English Literature',
    category: 'Literature',
    instructor: 'Prof. Robert Wilson',
    students: 612,
    rating: 4.5,
    price: 84,
    image: 'https://images.unsplash.com/photo-1507842472602-026145db3385?w=400&h=300&fit=crop',
    description: 'Analyze classic and contemporary literary works.'
  },
  {
    id: '6',
    title: 'History Across Centuries',
    category: 'History',
    instructor: 'Dr. Amanda Thompson',
    students: 534,
    rating: 4.7,
    price: 74,
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=300&fit=crop',
    description: 'Journey through pivotal moments in world history.'
  }
];

export const coursesByCategory = {
  all: courses,
  Mathematics: courses.filter(c => c.category === 'Mathematics'),
  Physics: courses.filter(c => c.category === 'Physics'),
  Chemistry: courses.filter(c => c.category === 'Chemistry'),
  Biology: courses.filter(c => c.category === 'Biology'),
  Literature: courses.filter(c => c.category === 'Literature'),
  History: courses.filter(c => c.category === 'History'),
};
