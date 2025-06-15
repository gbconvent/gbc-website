import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">GB Convent Etah</h3>
            <p className="mb-4">Providing quality education since 1995. Our mission is to nurture young minds for a better tomorrow.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><FaYoutube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400">Academics</a></li>
              <li><a href="#" className="hover:text-yellow-400">Admissions</a></li>
              <li><a href="#" className="hover:text-yellow-400">Gallery</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Academics</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Curriculum</a></li>
              <li><a href="#" className="hover:text-yellow-400">Faculty</a></li>
              <li><a href="#" className="hover:text-yellow-400">School Calendar</a></li>
              <li><a href="#" className="hover:text-yellow-400">Results</a></li>
              <li><a href="#" className="hover:text-yellow-400">Activities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>Gajipur Pahor Road, Etah, Uttar Pradesh 207001</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+91 9259065384</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>gbconventetah@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} GB Convent Etah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;