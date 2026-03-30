import { motion } from 'framer-motion';

interface GalleryPhotoProps {
  alt: string;
  src: string;
}

const GalleryPhoto = ({ alt, src }: GalleryPhotoProps) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="overflow-hidden rounded-lg shadow-md"
  >
    <div className="bg-gray-200 h-64 flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  </motion.div>
);


export default GalleryPhoto;
