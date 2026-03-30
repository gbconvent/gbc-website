import GalleryPhoto from './GalleryPhoto';
import { GalleryProvider } from './GalleryContext';

const galleryImages = [
  { id: 1, alt: "School Building", src: "https://picsum.photos/id/1011/800/600" },
  { id: 2, alt: "Classroom", src: "https://picsum.photos/id/1015/800/600" },
  { id: 3, alt: "Sports Day", src: "https://picsum.photos/id/1025/800/600" },
  { id: 4, alt: "Annual Function", src: "https://picsum.photos/id/1035/800/600" },
  { id: 5, alt: "Science Fair", src: "https://picsum.photos/id/180/800/600" },
  { id: 6, alt: "Students in Lab", src: "https://picsum.photos/id/1062/800/600" }
];

const GallerySection = () => {

  return (
    <GalleryProvider images={galleryImages}>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moments that capture the spirit of GB Convent Etah
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <GalleryPhoto
                key={image.id}
                alt={image.alt}
                src={image.src}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded">
              View More
            </button>
          </div>
        </div>
      </section>
    </GalleryProvider>
  );
};

export default GallerySection;