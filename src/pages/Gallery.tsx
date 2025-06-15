import Header from '../components/Header';
import Footer from '../components/Footer';

const galleryCategories = [
  {
    name: "Campus",
    images: 12
  },
  {
    name: "Classrooms",
    images: 8
  },
  {
    name: "Events",
    images: 15
  },
  {
    name: "Sports",
    images: 10
  },
  {
    name: "Cultural Activities",
    images: 18
  },
  {
    name: "Achievements",
    images: 7
  }
];

const Gallery = () => {
  return (
    <div>
      <Header />
      
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Visual stories from GB Convent Etah
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-full">All</button>
            {galleryCategories.map((category, index) => (
              <button key={index} className="border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-4 py-2 rounded-full">
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  {/* Replace with actual images */}
                  <span className="text-gray-500">Gallery Image {index + 1}</span>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Event Name • Date</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded">
              Load More
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Video Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((item) => (
              <div key={item} className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                {/* Replace with actual video embed */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Video {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;