import { news } from '../models/ProductModel';
import fallbackImage from '../assets/react.svg';
import { useState } from 'react';

import NewsBanner from '../assets/images/newsBanner.jpg';

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3; 
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="bg-white px-4 py-10">
      <div className="container mx-auto">
        {/* Header với Nu Skin In The News */}
        <div className="flex justify-center mb-10 relative">
          <div className="bg-[#59177e] py-3 px-16 rounded-full">
            <h2 className="text-white text-2xl font-bold text-center">
              Nu Skin In The News
            </h2>
          </div>
        </div>
        
        {/* Main content với news carousel và feature image */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* News carousel */}
          <div className="w-full md:w-3/4 relative">
            <div className="flex justify-end">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                View All &gt;&gt;
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-6">
              {news.slice(0, 4).map((item) => (
                <div key={item.id} className="bg-white overflow-hidden border border-gray-100">
                  <div className="h-72 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.getAttribute('data-error')) {
                          target.setAttribute('data-error', 'true');
                          target.src = fallbackImage;
                        }
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm text-gray-800">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={handlePrevPage}
              className="absolute top-1/2 left-[-15px] transform -translate-y-1/2 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center z-10 hover:bg-gray-100 border border-gray-200"
              aria-label="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNextPage}
              className="absolute top-1/2 right-[-15px] transform -translate-y-1/2 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center z-10 hover:bg-gray-100 border border-gray-200"
              aria-label="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Pagination dots */}
            <div className="flex justify-center pb-4 mt-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`mx-1 ${currentPage === index ? 'w-6 h-2 bg-gray-800' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'} rounded-full transition-all duration-300`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Feature image bên phải */}
          <div className="w-full md:w-1/4">
            <div className="relative h-full min-h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${NewsBanner})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-4xl font-bold mb-2">News</h2>
                <div className="w-24 h-0.5 bg-white mb-3"></div>
                <p className="text-lg">Nu Skin In The News</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 