import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { contactInfo, officeHours, administrationContacts } from '../data/organization';

const Contact = () => {
  return (
    <div>
      <Header />

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <a href={contactInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="block bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="bg-blue-100 text-blue-800 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">{contactInfo.address}, {contactInfo.postalCode}</p>
              <span className="text-sm text-blue-500">Click to view on map</span>
            </a>
            <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="block bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="bg-blue-100 text-blue-800 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <FaPhone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">{contactInfo.phone}</p>
              <span className="text-sm text-blue-500">Click to call</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="block bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="bg-blue-100 text-blue-800 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">{contactInfo.email}</p>
              <span className="text-sm text-blue-500">Click to email</span>
            </a>
            <a href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="block bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="bg-blue-100 text-blue-800 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600">{contactInfo.phone}</p>
              <span className="text-sm text-blue-500">Click to message</span>
            </a>
            <a href="https://www.instagram.com/gbconventetah/" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="bg-blue-100 text-blue-800 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <FaInstagram size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-gray-600">@gbconventetah</p>
              <span className="text-sm text-blue-500">Click to message</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Get In Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-200 h-96 rounded-lg overflow-hidden mb-8">
                <iframe
                  src={contactInfo.mapEmbedUrl}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GB Convent School Location"
                />
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Google Map Embed
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaClock className="mr-2 text-blue-800" />
                  Office Hours
                </h3>
                <ul className="space-y-2">
                  {officeHours.map((hour, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-700">{hour.day}</span>
                      <span className="text-gray-600">{hour.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">School Administration</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {administrationContacts.map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{person.designation}</h3>
                <p className="text-gray-700 mb-4">{person.name}</p>
                <div className="space-y-2">
                  <p className="flex items-center justify-center">
                    <FaPhone className="mr-2 text-blue-800" />
                    <span className="text-gray-600">{person.phone}</span>
                  </p>
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

export default Contact;
