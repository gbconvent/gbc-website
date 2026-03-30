export interface ImageSource {
  id: number;
  key: string;
  alt: string;
}

export const imageSources: ImageSource[] = [
  { id: 1, key: 'school-building-front', alt: 'School Building' },
  { id: 2, key: 'classroom', alt: 'Classroom' },
  { id: 3, key: 'sports-day', alt: 'Sports Day' },
  { id: 4, key: 'annual-function', alt: 'Annual Function' },
  { id: 5, key: 'science-fair', alt: 'Science Fair' },
  { id: 6, key: 'lab', alt: 'Students in Lab' }
];