export interface StudyMaterial {
  id: string;
  title: string;
  author: string;
  type: string;
  category: string;
  downloads: number;
  image: string;
  rating: number;
}

export const studyMaterials: StudyMaterial[] = [
  {
    id: '1',
    title: 'Mathematics Problem Set 2024',
    author: 'Prof. John Smith',
    type: 'PDF',
    category: 'Mathematics',
    downloads: 3420,
    image: 'https://images.unsplash.com/photo-1507842472602-026145db3385?w=400&h=300&fit=crop',
    rating: 4.9
  },
  {
    id: '2',
    title: 'Physics Lab Notes',
    author: 'Dr. Sarah Johnson',
    type: 'PDF',
    category: 'Physics',
    downloads: 2150,
    image: 'https://images.unsplash.com/photo-1636633762833-5d171194a6a0?w=400&h=300&fit=crop',
    rating: 4.8
  },
  {
    id: '3',
    title: 'Chemistry Study Guide',
    author: 'Prof. Michael Chen',
    type: 'eBook',
    category: 'Chemistry',
    downloads: 1890,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop',
    rating: 4.7
  },
  {
    id: '4',
    title: 'Biology Glossary & Definitions',
    author: 'Dr. Emily Davis',
    type: 'PDF',
    category: 'Biology',
    downloads: 2540,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop',
    rating: 4.8
  },
  {
    id: '5',
    title: 'Literature Analysis Templates',
    author: 'Prof. Robert Wilson',
    type: 'eBook',
    category: 'Literature',
    downloads: 1230,
    image: 'https://images.unsplash.com/photo-1507842472602-026145db3385?w=400&h=300&fit=crop',
    rating: 4.6
  },
  {
    id: '6',
    title: 'History Timeline Reference',
    author: 'Dr. Amanda Thompson',
    type: 'PDF',
    category: 'History',
    downloads: 1650,
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=300&fit=crop',
    rating: 4.7
  }
];

export const materialsByCategory = {
  all: studyMaterials,
  Mathematics: studyMaterials.filter(m => m.category === 'Mathematics'),
  Physics: studyMaterials.filter(m => m.category === 'Physics'),
  Chemistry: studyMaterials.filter(m => m.category === 'Chemistry'),
  Biology: studyMaterials.filter(m => m.category === 'Biology'),
  Literature: studyMaterials.filter(m => m.category === 'Literature'),
  History: studyMaterials.filter(m => m.category === 'History'),
};
