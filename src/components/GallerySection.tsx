import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, alt: "School Building" },
  { id: 2, alt: "Classroom" },
  { id: 3, alt: "Sports Day" },
  { id: 4, alt: "Annual Function" },
  { id: 5, alt: "Science Fair" },
  { id: 6, alt: "Students in Lab" }
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Moments that capture the spirit of GB Convent Etah
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                {/* Replace with actual images */}
                <span className="text-gray-500">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;