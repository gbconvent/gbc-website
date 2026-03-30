import { useNavigate } from 'react-router-dom';
import GalleryPhoto from './GalleryPhoto';
import { GalleryProvider } from './GalleryContext';
import { imageSources } from '../data/imageSources';
import { getImageSources } from '../utils/imageLoader';

const assetImports = import.meta.glob('../assets/*.webp', {
  as: 'url',
  eager: true
}) as Record<string, string>;

const galleryImagesData = imageSources.map((item) => ({
  id: item.id,
  alt: item.alt,
  ...getImageSources(assetImports, item.key)
}));

const GallerySection = () => {
  const navigate = useNavigate();

  const galleryImages = galleryImagesData.map((img) => ({
    id: img.id,
    alt: img.alt,
    srcLow: img.srcLow,
    srcMedium: img.srcMedium,
    srcHigh: img.srcHigh
  }));

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
                srcLow={image.srcLow}
                srcMedium={image.srcMedium}
                srcHigh={image.srcHigh}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/gallery')}
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded"
            >
              View More
            </button>
          </div>
        </div>
      </section>
    </GalleryProvider>
  );
};

export default GallerySection;