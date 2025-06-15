import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About GB Convent Etah</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our journey, vision, and commitment to excellence in education
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our History</h2>
              <p className="text-gray-700 mb-4">
                Established in 1995, GB Convent Etah has grown from a small institution to one of the most 
                respected schools in the region. Our founder, Shri Gopal Bansal, envisioned a school that 
                would combine academic excellence with character development.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, we've consistently produced outstanding academic results while maintaining 
                our focus on holistic education. Our alumni network includes professionals excelling in 
                diverse fields across the globe.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-64 md:h-96 rounded-lg overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Historical Photo of School
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision & Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our educational approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Vision</h3>
              <p className="text-gray-700">
                To be a premier educational institution that nurtures innovative thinkers, 
                compassionate leaders, and responsible global citizens who will shape a 
                better future for all.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Mission</h3>
              <p className="text-gray-700">
                To provide a transformative educational experience through rigorous academics, 
                character development, and extracurricular engagement in a supportive environment 
                that values diversity, creativity, and intellectual curiosity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Our Leadership</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-gray-200 h-48 w-48 mx-auto rounded-full mb-4 overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Photo
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Leadership Member {item}</h3>
                <p className="text-blue-800 mb-4">Position Title</p>
                <p className="text-gray-600">
                  Brief description of their role and contribution to the school.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;