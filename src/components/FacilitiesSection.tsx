import { FaFlask, FaBook, FaLaptop, FaMusic, FaFutbol, FaBus } from 'react-icons/fa';

const facilities = [
  {
    icon: <FaFlask size={40} className="text-blue-800" />,
    title: "Science Labs",
    description: "Well-equipped laboratories for Physics, Chemistry and Biology"
  },
  {
    icon: <FaBook size={40} className="text-blue-800" />,
    title: "Library",
    description: "Extensive collection of books and digital resources"
  },
  {
    icon: <FaLaptop size={40} className="text-blue-800" />,
    title: "Computer Lab",
    description: "Modern computer lab with high-speed internet"
  },
  {
    icon: <FaMusic size={40} className="text-blue-800" />,
    title: "Music Room",
    description: "Dedicated space for musical education and practice"
  },
  {
    icon: <FaFutbol size={40} className="text-blue-800" />,
    title: "Sports Facilities",
    description: "Playground and indoor sports facilities"
  },
  {
    icon: <FaBus size={40} className="text-blue-800" />,
    title: "Transportation",
    description: "Safe and reliable school bus service"
  }
];

const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            GB Convent Etah provides state-of-the-art facilities to support academic excellence and holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;