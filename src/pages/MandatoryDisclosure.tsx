import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFilePdf } from 'react-icons/fa';

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
      title: "Recognition Certificate",
      description: "Recognition Certificate under RTE Act 2009",
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

  // Function to handle download
  const handleDownload = (filePath: string, title: string) => {
    // In a real app, this would download the actual file
    // For demo purposes, we'll simulate it
    const link = document.createElement('a');
    link.href = filePath;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

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
                <div
                  key={doc.id}
                  className="p-6 hover:bg-gray-50 transition-colors cursor-pointer flex justify-between items-center"
                  onClick={() => handleDownload(doc.file, doc.title)}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
                    <p className="text-gray-600">{doc.description}</p>
                  </div>
                  <div className="text-blue-800 flex items-center">
                    <FaFilePdf className="mr-2" size={20} />
                    <span>Download</span>
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
              <p>123 School Road, Etah, Uttar Pradesh 207001</p>
              <p>Phone: +91 9876543210</p>
              <p>Email: office@gbconventetah.edu.in</p>
            </address>
            <p className="text-gray-700 mt-4">
              Office Hours: Monday to Friday, 8:00 AM to 3:00 PM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MandatoryDisclosure;