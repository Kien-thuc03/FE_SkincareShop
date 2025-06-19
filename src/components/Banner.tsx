import { useState, useEffect } from 'react';
import Banner1 from '../assets/images/Banner.jpg';
import Banner2 from '../assets/images/Banner2.jpg';
import Banner3 from '../assets/images/Banner3.avif';
import Banner4 from '../assets/images/Banner4.avif';
import Banner5 from '../assets/images/Banner5.jpg';
import '../styles/banner.css';

const Banner = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
  // Mảng chứa các ảnh banner
  const bannerImages = [Banner3, Banner1, Banner2, Banner4];

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

  // Tự động chuyển ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // Chuyển ảnh sau mỗi 5 giây

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Xử lý sự kiện click nút prev
  const handlePrevClick = () => {
    setCurrentBannerIndex((prevIndex) => 
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  // Xử lý sự kiện click nút next
  const handleNextClick = () => {
    setCurrentBannerIndex((prevIndex) => 
      (prevIndex + 1) % bannerImages.length
    );
  };

  return (
    <div className={`flex flex-col px-8 ${categoriesOpen ? 'pl-[23%]' : 'w-full'} transition-all duration-300`}>
      {/* Main Banner */}
      <div 
        className={`relative bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out h-[400px]`}
      >
        {bannerImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 overflow-hidden ${
              index === currentBannerIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center w-full h-full transform ${
                index === currentBannerIndex ? 'banner-zoom-animation' : ''
              }`}
              style={{ 
                backgroundImage: `url(${image})`, 
                filter: 'brightness(0.8)',
              }}
            />
          </div>
        ))}
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20">
          <div className="px-4 max-w-2xl">
            <h2 className="text-2xl font-bold mb-2">10% OFF YOUR FIRST ORDER</h2>
            <h1 className="text-5xl font-bold mb-6">Reasonable Price</h1>
            <button className="shop-now-btn">
              Shop Now
            </button>
          </div>
        </div>
        
        {/* Banner indicator dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {bannerImages.map((_, index) => (
            <button 
              key={index} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentBannerIndex ? 'bg-white scale-125' : 'bg-gray-400'}`}
              onClick={() => setCurrentBannerIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full text-black z-20"
          aria-label="Previous slide"
          title="Previous slide"
          onClick={handlePrevClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full text-black z-20"
          aria-label="Next slide"
          title="Next slide"
          onClick={handleNextClick}
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
          <div className="relative h-48 bg-gray-200 overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 transform group-hover:scale-110"
              style={{ 
                backgroundImage: `url(${Banner4})`, 
                filter: 'brightness(0.9)'
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8">
              <div className="border-l-4 border-purple-600 pl-4 max-w-xs backdrop-blur-sm transition-all duration-300 group-hover:translate-x-2 bg-gradient-to-r from-black/60 to-black/30 p-5">
                <p className="text-sm font-medium text-purple-400 tracking-wider mb-1 uppercase">Prefer Customer 2025</p>
                <h3 className="text-2xl font-bold text-white mb-2">Winter Collection</h3>
                <button className="mt-2 px-5 py-2 text-sm bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 font-medium">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Collection 2 */}
          <div className="relative h-48 bg-gray-200 overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 transform group-hover:scale-110"
              style={{ 
                backgroundImage: `url(${Banner5})`, 
                filter: 'brightness(0.9)'
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8">
              <div className="border-l-4 border-purple-600 pl-4 max-w-xs backdrop-blur-sm transition-all duration-300 group-hover:translate-x-2 bg-gradient-to-r from-black/60 to-black/30 p-5">
                <p className="text-sm font-medium text-purple-400 tracking-wider mb-1 uppercase">Prefer Customer 2025</p>
                <h3 className="text-2xl font-bold text-white mb-2">Winter Collection</h3>
                <button className="mt-2 px-5 py-2 text-sm bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 font-medium">
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