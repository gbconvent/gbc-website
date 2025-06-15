import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact.tsx';
import MandatoryDisclosure from './pages/MandatoryDisclosure.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function App() {
  return (
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;