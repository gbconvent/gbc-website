import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

const MandatoryDisclosure = () => {
  const documents = [
    // {
    //   id: 1,
    //   title: "Affiliation Certificate",
    //   description: "CBSE Affiliation Certificate of the school",
    //   file: "/documents/affiliation-certificate.pdf"
    // },
    {
      id: 2,
      title: "Recognition Letter",
      description: "Recognition Letter by Basic Shiksha Parishad.",
      file: "/documents/Recognition Letter of G B Convent attested.pdf"
    },
    // {
    //   id: 3,
    //   title: "NOC from State Government",
    //   description: "No Objection Certificate from State Government",
    //   file: "/documents/noc-certificate.pdf"
    // },
    {
      id: 4,
      title: "Building Safety Certificate",
      description: "Building Safety Certificate as per CBSE norms",
      file: "/documents/No Objection Building Certificate G.B. Convent attested.pdf"
    },
    {
      id: 5,
      title: "Fire Safety Certificate",
      description: "Fire Safety Certificate issued by competent authority",
      file: "/documents/No objection Fire Certificate G B Convent School.pdf"
    },
    {
      id: 6,
      title: "Water Sanitation Certificate",
      description: "Water and Sanitation facilities certificate",
      file: "/documents/Drinking Water Report G B Convent School attested.pdf"
    },
    {
      id: 7,
      title: "Land Certificate",
      description: "Document proving ownership of a piece of land",
      file: "/documents/Land Certificate G B Convent Attested.pdf"
    },
    {
      id: 8,
      title: "Self-Declaration Affidavit",
      description: "Self-declaration affidavit for CBSE school affiliation compliance.",
      file: "/documents/Affidavit G.B. Convent.pdf"
    },
        {
      id: 9,
      title: "DEO Certificate",
      description: "DEO Certification for CBSE affiliation and compliance.",
      file: "/documents/DEO Of GB Convent.pdf"
    },
    // {
    //   id: 8,
    //   title: "Academic Calendar",
    //   description: "School Academic Calendar for current session",
    //   file: "/documents/academic-calendar.pdf"
    // },
    // {
    //   id: 9,
    //   title: "Fee Structure",
    //   description: "Detailed fee structure as approved by CBSE",
    //   file: "/documents/fee-structure.pdf"
    // },
    // {
    //   id: 10,
    //   title: "Last Three Years Results",
    //   description: "Class X and XII results of last three years",
    //   file: "/documents/results.pdf"
    // }
  ];

  // Handle download
  const handleDownload = (filePath: string, title: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle view (opens in new tab)
  const handleView = (filePath: string) => {
    window.open(filePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <Header />

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Mandatory Public Disclosure</h1>
          <p className="text-xl max-w-3xl mx-auto">
            As per CBSE Affiliation Bye-Laws and Right to Information Act 2005
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">About Mandatory Disclosure</h2>
            <p className="text-gray-700 mb-4">
              GB Convent Etah complies with all CBSE guidelines for mandatory public disclosure.
              This page contains all documents and information that we are required to make
              publicly available as per CBSE Affiliation Bye-Laws and the Right to Information Act 2005.
            </p>
            <p className="text-gray-700">
              All documents are available for download in PDF format. For any queries regarding
              these documents, please contact our administration office.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 text-white px-6 py-4">
              <h2 className="text-xl font-bold">Available Documents</h2>
            </div>

            <div className="divide-y divide-gray-200">
              {documents.map((doc) => (
                <div key={doc.id} className="p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent text overflow */}
                      <h3 className="text-lg font-semibold text-gray-800 truncate">{doc.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base truncate">{doc.description}</p>
                    </div>
                    <div className="flex flex-row gap-2 md:gap-3 mt-2 md:mt-0 flex-shrink-0">
                      <button
                        onClick={() => handleView(doc.file)}
                        className="flex items-center justify-center 
                            text-blue-800 hover:text-blue-600 transition-colors
                            px-3 py-2
                            hover:bg-blue-50 whitespace-nowrap
                            text-sm md:text-base"
                        aria-label={`View ${doc.title}`}
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => handleDownload(doc.file, doc.title)}
                        className="flex items-center justify-center
                            text-blue-800 hover:text-blue-600 transition-colors
                            px-3 py-2
                            hover:bg-blue-50 whitespace-nowrap
                            text-sm md:text-base"
                        aria-label={`Download ${doc.title}`}
                      >
                        <FaDownload className="mr-2" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Additional Information</h2>
            <p className="text-gray-700 mb-4">
              For physical copies of any documents or for any clarification, please visit:
            </p>
            <address className="not-italic">
              <p>GB Convent Etah Administration Office</p>
              <p>Gajipur Pahor Road, Etah, Uttar Pradesh 207001</p>
              <p>Phone: +91 9259065384</p>
              <p>Email: gbconventetah@gmail.com</p>
            </address>
            <p className="text-gray-700 mt-4">
              Office Hours: Monday to Saturday, 8:00 AM to 1:00 PM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MandatoryDisclosure;