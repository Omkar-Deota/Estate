
import Pagination from '@mui/material/Pagination';

function Moreclient() {
  return (
    <div className="bg-black min-h-screen p-8">
      <h1 className='text-center text-3xl text-white font-bold mb-4'>Our Customers Reviews</h1>
      
      <div className="flex justify-center mb-4">
        <button className="bg-pink-600 border-none p-2 text-white rounded font-bold hover:bg-pink-800 transition-colors">
          Create a review
        </button>
      </div>
      
      <div className="w-11/12 mx-auto flex flex-col items-center my-4">
        <div className="flex flex-wrap justify-center gap-4">
          {/* Reusable Card Component */}
          {Array.from({ length: 17 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col h-96 w-72 sm:w-72 md:w-64 lg:w-64 bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <img
                className="w-24 h-24 object-cover rounded-full mx-auto mt-4"
                src="/HomeImg/1.jpg"
                alt={`Image ${index + 1}`}
              />

              <div className="flex-1 p-4 text-center">
                <h3 className='font-bold text-black'>John</h3>
                <h4 className='text-gray-500'>3 years ago</h4>
                <p className="text-gray-600 mt-2">
                  Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length:
                  a paragraph is a group of at least five sentences.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='mx-auto mt-6 bg-slate-100 rounded-xl p-4'>
          <Pagination count={10} size="small" />
        </div>
      </div>
    </div>
  );
}

export default Moreclient;
