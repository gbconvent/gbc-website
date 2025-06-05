import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FacilitiesSection from '../components/FacilitiesSection';
import GallerySection from '../components/GallerySection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="pt-16"> {/* Padding to account for fixed header */}
      <Header />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <GallerySection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;