import GalleryPhoto from './GalleryPhoto';

const galleryImages = [
  { id: 1, alt: "School Building", src: "/images/gallery1.jpg" },
  { id: 2, alt: "Classroom", src: "/images/gallery2.jpg" },
  { id: 3, alt: "Sports Day", src: "/images/gallery3.jpg" },
  { id: 4, alt: "Annual Function", src: "/images/gallery4.jpg" },
  { id: 5, alt: "Science Fair", src: "/images/gallery5.jpg" },
  { id: 6, alt: "Students in Lab", src: "/images/gallery6.jpg" }
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
            <GalleryPhoto key={image.id} alt={image.alt} src={image.src} />
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