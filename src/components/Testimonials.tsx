import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "GB Convent provided the perfect environment for my child's growth. The teachers are dedicated and the facilities are excellent.",
    name: "Mrs. Sharma",
    relation: "Parent"
  },
  {
    quote: "The holistic approach to education here helped me develop not just academically but also as a person.",
    name: "Rahul Verma",
    relation: "Alumnus"
  },
  {
    quote: "As a teacher, I appreciate the school's commitment to innovative teaching methods and student welfare.",
    name: "Mr. Singh",
    relation: "Faculty"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="max-w-2xl mx-auto">
            Hear from our students, parents, and faculty about their experiences at GB Convent Etah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-900 p-6 rounded-lg">
              <FaQuoteLeft className="text-yellow-400 mb-4" size={24} />
              <p className="italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-blue-200">{testimonial.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;