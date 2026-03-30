import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo-80.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white shadow-md py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="GB Convent Etah"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'h-8 w-8' : 'h-10 w-10'
              }`}
            />
            <span
              className={`font-bold text-blue-800 transition-all duration-300 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}
            >
              GB Convent Etah
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-600">About Us</Link>
          <Link to="/academics" className="text-gray-800 hover:text-blue-600">Academics</Link>
          <Link to="/admissions" className="text-gray-800 hover:text-blue-600">Admissions</Link>
          <Link to="/mandatory-disclosure" className="text-gray-800 hover:text-blue-600">Disclosure</Link>
          <Link to="/gallery" className="text-gray-800 hover:text-blue-600">Gallery</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-800" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/academics" className="text-gray-800" onClick={() => setIsOpen(false)}>Academics</Link>
            <Link to="/admissions" className="text-gray-800" onClick={() => setIsOpen(false)}>Admissions</Link>
            <Link to="/mandatory-disclosure" className="text-gray-800" onClick={() => setIsOpen(false)}>Disclosure</Link>
            <Link to="/gallery" className="text-gray-800" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/contact" className="text-gray-800" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;