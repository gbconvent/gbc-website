const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">About GB Convent Etah</h2>
            <p className="text-gray-700 mb-4">
              GB Convent Etah is a premier educational institution committed to providing quality education 
              and fostering holistic development of students. Established in 1995, our school has been a 
              beacon of excellence in education.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in nurturing young minds with a perfect blend of academic rigor and 
              co-curricular activities to prepare them for the challenges of the 21st century.
            </p>
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded">
              Read More
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 h-64 md:h-96 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                School Building Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;