
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


function CustomerSection() {
 
  return (
    <>
      <div className="flex flex-col lg:flex-row h-max mt-0">
        {/* Left Side */}
        <div className="w-full lg:w-2/5 ">
          <h1 className="text-3xl font-bold lg:mt-36">Our Clients</h1>
          <p className="mt-3 text-gray-700 mb-3">
            We believe in client satisfaction. Here are some testimonials from our clients.
          </p>

          <Link
          to="/moreclients"
          className="bg-pink-600 text-white rounded-xl w-52  py-2 hover:bg-pink-700"
        >
          More Customers
        </Link>
          
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-3/5 flex justify-center p-4 my-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-col max-w-xs bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                className="w-24 h-24 object-cover rounded-full mx-auto mt-4"
                src="https://via.placeholder.com/150"
                alt="Image 1"
              />
              <div className="flex-1 p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Card 1</h2>
                <p className="text-gray-600 mt-2">
                  Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length:
                  a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality,
                  though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
                </p>
              </div>
            </div>

            <div className="flex flex-col max-w-xs bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                className="w-24 h-24 object-cover rounded-full mx-auto mt-4"
                src="https://via.placeholder.com/150"
                alt="Image 2"
              />
              <div className="flex-1 p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Card 2</h2>
                <p className="text-gray-600 mt-2">
                  Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length:
                  a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality,
                  though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSection;
