import { useNavigate } from "react-router-dom";
import { imageSources } from "../data/imageSources";
import { getImageSources } from "../utils/imageLoader";

const assetImports = import.meta.glob('../assets/*.webp', {
  query: '?url',
  import: 'default',
  eager: true
}) as Record<string, string>;

const AboutSection = () => {
  let navigate = useNavigate();
  
  const schoolBuildingImage = imageSources.find(img => img.key === 'school-building-front');
  
  const { srcLow, srcMedium, srcHigh } = schoolBuildingImage
    ? getImageSources(assetImports, schoolBuildingImage.key)
    : { srcLow: '', srcMedium: '', srcHigh: '' };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">About GB Convent Etah</h2>
            <p className="text-gray-700 mb-4">
              GB Convent Etah is a premier educational institution committed to providing quality education
              and fostering holistic development of students. Established in 2020, our school has been a
              beacon of excellence in education.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in nurturing young minds with a perfect blend of academic rigor and
              co-curricular activities to prepare them for the challenges of the 21st century.
            </p>
            <button
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded"
              onClick={() => {
                navigate("/about");
              }}
            >
              Read More
            </button>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src={srcMedium || srcHigh || srcLow}   // ✅ fallback added
                srcSet={
                  [
                    srcLow && `${srcLow} 400w`,
                    srcMedium && `${srcMedium} 800w`,
                    srcHigh && `${srcHigh} 1200w`
                  ]
                    .filter(Boolean)
                    .join(", ")
                }
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="School Building"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;