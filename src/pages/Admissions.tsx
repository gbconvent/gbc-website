import Header from '../components/Header';
import Footer from '../components/Footer';

const Admissions = () => {
  const admissionSteps = [
    {
      step: "1",
      title: "Inquiry",
      description: "Submit an inquiry form or visit our campus"
    },
    {
      step: "2",
      title: "Application",
      description: "Complete and submit the application form"
    },
    {
      step: "3",
      title: "Assessment",
      description: "Student interaction and assessment (if required)"
    },
    {
      step: "4",
      title: "Decision",
      description: "Receive admission decision"
    },
    {
      step: "5",
      title: "Enrollment",
      description: "Complete documentation and fee payment"
    }
  ];

  return (
    <div className="pt-16">
      <Header />
      
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join the GB Convent Etah community
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our straightforward process to welcome new students
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch mb-12">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-6 mx-2 my-2 rounded-lg shadow-sm text-center h-full">
                  <div className="bg-blue-800 text-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg mr-4">
              Apply Now
            </button>
            <button className="border-2 border-blue-800 hover:bg-blue-800 hover:text-white font-bold py-3 px-8 rounded-full text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Fee Structure</h2>
              <p className="text-gray-700 mb-4">
                We believe in transparent and reasonable fee structures that reflect 
                the quality education we provide.
              </p>
              <p className="text-gray-700 mb-6">
                Fees vary by grade level and include tuition, textbooks, and most 
                academic materials. Additional fees may apply for transportation, 
                extracurricular activities, and special programs.
              </p>
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded">
                View Fee Details
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Scholarships</h3>
                <p className="text-gray-700 mb-4">
                  GB Convent Etah offers merit-based scholarships for outstanding students:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-700">Academic Excellence Scholarship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-700">Sports Achievement Scholarship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-700">Arts and Culture Scholarship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-700">Need-based Financial Aid</span>
                  </li>
                </ul>
                <button className="border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-bold py-2 px-6 rounded">
                  Scholarship Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What are the age requirements for admission?",
                answer: "For Pre-Primary, children should be 3+ years as of April 1st of the academic year. Age requirements increase accordingly for higher grades."
              },
              {
                question: "What documents are required for admission?",
                answer: "Birth certificate, previous school reports (if applicable), address proof, and passport-sized photographs are typically required."
              },
              {
                question: "Is there a sibling discount?",
                answer: "Yes, we offer a 10% fee concession for the second child and 15% for the third child from the same family."
              },
              {
                question: "What are the school timings?",
                answer: "Regular school hours are from 8:00 AM to 2:00 PM, with variations for different grades and extracurricular activities."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
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

export default Admissions;