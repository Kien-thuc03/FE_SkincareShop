import { useState, useEffect } from 'react';

const Banner = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  useEffect(() => {
    const handleCategoriesToggle = (event: CustomEvent) => {
      setCategoriesOpen(event.detail.isOpen);
    };

    // Lắng nghe sự kiện từ Header component
    document.addEventListener('categoriesToggle', handleCategoriesToggle as EventListener);

    // Cleanup event listener khi component unmount
    return () => {
      document.removeEventListener('categoriesToggle', handleCategoriesToggle as EventListener);
    };
  }, []);

  return (
    <div className={`flex flex-col px-8 ${categoriesOpen ? 'pl-[20%]' : 'w-full'} transition-all duration-300`}>
      {/* Main Banner */}
      <div 
        className={`relative bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out h-[400px]`}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')", 
            filter: 'brightness(0.8)'
          }}
        ></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="px-4 max-w-2xl">
            <h2 className="text-2xl font-bold mb-2">10% OFF YOUR FIRST ORDER</h2>
            <h1 className="text-5xl font-bold mb-6">Reasonable Price</h1>
            <button className="shop-now-btn">
              Shop Now
            </button>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full text-white"
          aria-label="Previous slide"
          title="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full text-white"
          aria-label="Next slide"
          title="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Collection Banners */}
      <div className={`container mx-auto py-4 ${categoriesOpen ? '' : 'max-w-full'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Collection 1 */}
          <div className="relative h-48 bg-gray-200 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')", 
                filter: 'brightness(0.9)'
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8">
              <div className="bg-gray-100 bg-opacity-80 p-4 max-w-xs">
                <p className="text-sm font-medium text-gray-600">PREFER CUSTOMER 2025</p>
                <h3 className="text-xl font-bold text-gray-800">Winter Collection</h3>
                <button className="mt-2 px-4 py-1 text-sm bg-gray-200 text-gray-800 hover:bg-gray-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Collection 2 */}
          <div className="relative h-48 bg-gray-200 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')", 
                filter: 'brightness(0.9)'
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8">
              <div className="bg-gray-100 bg-opacity-80 p-4 max-w-xs">
                <p className="text-sm font-medium text-gray-600">PREFER CUSTOMER 2025</p>
                <h3 className="text-xl font-bold text-gray-800">Winter Collection</h3>
                <button className="mt-2 px-4 py-1 text-sm bg-gray-200 text-gray-800 hover:bg-gray-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner; 