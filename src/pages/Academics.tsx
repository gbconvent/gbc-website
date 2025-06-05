import Header from '../components/Header';
import Footer from '../components/Footer';

const Academics = () => {
  const programs = [
    {
      title: "Pre-Primary",
      description: "Play-based learning for our youngest students",
      features: ["Activity-based learning", "Language development", "Social skills"]
    },
    {
      title: "Primary School",
      description: "Building strong foundations",
      features: ["Core subjects", "Creative arts", "Physical education"]
    },
    {
      title: "Middle School",
      description: "Expanding knowledge and skills",
      features: ["Subject specialization", "Project-based learning", "Skill development"]
    },
    {
      title: "High School",
      description: "Preparing for the future",
      features: ["CBSE curriculum", "Career guidance", "Competitive exam preparation"]
    }
  ];

  return (
    <div className="pt-16">
      <Header />
      
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Excellence in education through innovative teaching and learning
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Academic Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored educational pathways for every stage of student development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Curriculum</h2>
              <p className="text-gray-700 mb-4">
                At GB Convent Etah, we follow the CBSE curriculum with a focus on 
                experiential learning and practical application of knowledge.
              </p>
              <p className="text-gray-700 mb-6">
                Our teaching methodology emphasizes critical thinking, creativity, 
                and collaboration to prepare students for the challenges of the modern world.
              </p>
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded">
                Download Curriculum
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-64 md:h-96 rounded-lg overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Curriculum Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Faculty</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-gray-200 h-48 w-48 mx-auto rounded-full mb-4 overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Faculty Photo
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Faculty Member {item}</h3>
                <p className="text-blue-800 mb-2">Subject/Department</p>
                <p className="text-gray-600">
                  Brief description of their qualifications and teaching philosophy.
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

export default Academics;