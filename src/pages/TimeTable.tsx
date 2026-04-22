import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const TimeTable = () => {
  return (
    <div>
      <Header />
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">School Time Table</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Weekly class schedule
          </p>
          <div className="mt-8">
            <Link
              to="/academics"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded transition-colors"
            >
              Back to Academics
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">School Time Table</h2>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden border border-gray-200 bg-white">
            <iframe
              title="School Time Table"
              src="/timetable/timetable.html"
              className="w-full h-[750px] border-0"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TimeTable;
