import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaChevronRight
} from 'react-icons/fa';

import { contactInfo, socialMediaLinks } from '../data/organization';

const Footer = () => {
  const iconMap: Record<string, React.ReactNode> = {
    facebook: <FaFacebook size={20} />,
    whatsapp: <FaWhatsapp size={20} />,
    instagram: <FaInstagram size={20} />,
    youtube: <FaYoutube size={20} />
  };

  // Brand hover colors
  const brandHoverMap: Record<string, string> = {
    facebook: "group-hover:text-[#1877F2]",
    whatsapp: "group-hover:text-[#25D366]",
    instagram: "group-hover:text-pink-500",
    youtube: "group-hover:text-red-500"
  };

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">GB Convent Etah</h3>
            <p className="mb-4">
              Providing quality education since 2020. Our mission is to nurture young minds for a better tomorrow.
            </p>

            {/* Social Media */}
            <div className="flex flex-wrap gap-3">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="group flex items-center justify-between gap-3 px-3 py-2 rounded-md transition
                             bg-blue-800/40 text-blue-100
                             active:scale-95 active:opacity-80 active:bg-blue-800/70
                             md:bg-transparent md:px-0 md:py-0 md:gap-0"
                >
                  <div className="flex items-center gap-2">

                    {/* Icon with animation + brand color */}
                    <span
                      className={`text-white transition-all duration-300 
                                  transform group-hover:scale-110 group-hover:-rotate-6
                                  ${brandHoverMap[link.platform]}`}
                    >
                      {iconMap[link.platform]}
                    </span>

                    {/* Mobile label */}
                    <span className="capitalize text-sm md:hidden">
                      {link.platform}
                    </span>
                  </div>

                  {/* Mobile chevron */}
                  <FaChevronRight className="opacity-50 text-xs md:hidden" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">

              <li>
                <a
                  href={contactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 p-2 rounded-md transition
                             active:scale-95 active:opacity-80 active:bg-blue-800/40
                             md:p-0 md:active:scale-100 md:active:bg-transparent"
                >
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-yellow-300 flex-shrink-0" />
                    <span className="text-blue-100">
                      {contactInfo.address}, {contactInfo.postalCode}
                    </span>
                  </div>
                  <FaChevronRight className="opacity-50 text-sm md:hidden" />
                </a>
              </li>

              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center justify-between gap-3 p-2 rounded-md transition
                             active:scale-95 active:opacity-80 active:bg-blue-800/40
                             md:p-0 md:active:scale-100 md:active:bg-transparent"
                >
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-yellow-300" />
                    <span className="text-blue-100">
                      {contactInfo.phone}
                    </span>
                  </div>
                  <FaChevronRight className="opacity-50 text-sm md:hidden" />
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center justify-between gap-3 p-2 rounded-md transition
                             active:scale-95 active:opacity-80 active:bg-blue-800/40
                             md:p-0 md:active:scale-100 md:active:bg-transparent"
                >
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-yellow-300" />
                    <span className="text-blue-100 underline underline-offset-2">
                      {contactInfo.email}
                    </span>
                  </div>
                  <FaChevronRight className="opacity-50 text-sm md:hidden" />
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} GB Convent Etah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;