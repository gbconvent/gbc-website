import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface GalleryImage {
  alt: string;
  src: string;
}

interface GalleryContextType {
  images: GalleryImage[];
  currentIndex: number | null;
  setCurrentIndex: (index: number | null) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};

interface GalleryProviderProps {
  images: GalleryImage[];
  children: ReactNode;
}

export const GalleryProvider = ({ images, children }: GalleryProviderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <GalleryContext.Provider value={{ images, currentIndex, setCurrentIndex }}>
      {children}
    </GalleryContext.Provider>
  );
};
