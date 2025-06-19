import { featuredProducts } from '../models/ProductModel';
import { useState, useEffect } from 'react';
import '../styles/animations.css';
import { getCartController } from '../controllers/CartController';
import { initialCart } from '../models/CartModel';

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState<'description' | 'specifications'>('description');
  const [currentPage, setCurrentPage] = useState(0);
  const cartController = getCartController(initialCart);
  const [addedProducts, setAddedProducts] = useState<{[key: number]: boolean}>({});
  const [notifications, setNotifications] = useState<{id: number, productId: number, message: string}[]>([]);
  
  const productsPerPage = 3;
  const totalPages = Math.ceil(featuredProducts.length / productsPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const addToCart = (productId: number, productName: string) => {
    cartController.addToCart(productId);
    
    // Hiệu ứng nút đã thêm
    setAddedProducts(prev => ({
      ...prev,
      [productId]: true
    }));
    
    // Thêm thông báo
    const newNotification = {
      id: Date.now(),
      productId,
      message: `Added ${productName} to cart!`
    };
    setNotifications(prev => [...prev, newNotification]);
    
    // Xóa trạng thái "đã thêm" sau 1 giây
    setTimeout(() => {
      setAddedProducts(prev => ({
        ...prev,
        [productId]: false
      }));
    }, 1000);
    
    // Xóa thông báo sau 3 giây
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 3000);
  };
  
  const displayedProducts = featuredProducts.slice(
    currentPage * productsPerPage, 
    (currentPage + 1) * productsPerPage
  );

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        {/* Header */}
        <div className="bg-[#59177e] w-[25%] py-3 px-6 mb-6 rounded-lg">
          <h2 className="text-white text-2xl font-semibold text-center">
            Most Popular Products
          </h2>
        </div>

        {/* Notifications */}
        <div className="fixed top-24 right-4 z-50">
          {notifications.map(notification => (
            <div 
              key={notification.id}
              className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-2 rounded shadow-md animate-slideIn"
            >
              {notification.message}
            </div>
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden w-full">
          {/* Main content container */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left sidebar */}
            <div className=" w-full md:w-1/4 bg-white flex flex-col ">
              <div className="relative py-16 px-6 z-10 overflow-hidden h-full flex-grow">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 relative z-10">Find out<br/>what<br/>everyone's<br/>talking<br/>about</h3>
                <p className="text-lg text-gray-600 mb-4 relative z-10 mt-4">Browse our best</p>
                
                {/* Decorative elements */}
                <div className="absolute inset-0 z-0 opacity-90">
                  {/* Curved Arc decorations */}
                  <div className="absolute top-6 right-0 w-20 h-20 border-t-2 border-emerald-400 rounded-tl-full blur-[2px] animate-pulse-slow"></div>
                  <div className="absolute top-10 right-4 w-28 h-28 border-t-2 border-emerald-400 rounded-tl-full blur-[3px] animate-float delay-75"></div>
                  <div className="absolute top-16 right-0 w-24 h-24 border-t-2 border-emerald-400 rounded-tl-full blur-[2px] animate-pulse-slow delay-150"></div>
                  <div className="absolute top-24 right-6 w-32 h-32 border-t-2 border-emerald-400 rounded-tl-full blur-[3px] animate-float delay-300"></div>
                  <div className="absolute top-32 right-0 w-28 h-28 border-t-2 border-emerald-400 rounded-tl-full blur-[2px] animate-pulse-slow delay-450"></div>
                  
                  {/* Middle section decorations */}
                  <div className="absolute top-48 right-4 w-24 h-24 border-t-2 border-emerald-400 rounded-tl-full blur-[2px] animate-pulse-slow"></div>
                  <div className="absolute top-72 right-8 w-20 h-20 border-t-2 border-emerald-400 rounded-tl-full blur-[3px] animate-float delay-150"></div>
                  <div className="absolute top-96 right-0 w-28 h-28 border-t-2 border-emerald-400 rounded-tl-full blur-[2px] animate-pulse-slow delay-300"></div>
                  
                  {/* Larger curved arcs in bottom left with stronger blur */}
                  <div className="absolute bottom-[-30px] left-[-20px] w-48 h-48 border-b-3 border-emerald-500 rounded-br-full blur-[8px] animate-float-reverse opacity-60"></div>
                  <div className="absolute bottom-[-40px] left-[-10px] w-64 h-64 border-b-3 border-emerald-400 rounded-br-full blur-[6px] animate-pulse-slow delay-300 opacity-60"></div>
                  <div className="absolute bottom-[-20px] left-[-30px] w-56 h-56 border-b-3 border-emerald-600 rounded-br-full blur-[10px] animate-float-reverse delay-700 opacity-50"></div>
                  <div className="absolute bottom-[-50px] left-[-40px] w-72 h-72 border-b-3 border-emerald-300 rounded-br-full blur-[8px] animate-pulse-slow delay-200 opacity-40"></div>
                  
                  {/* Additional decorations for height */}
                  <div className="absolute top-1/2 left-10 w-6 h-6 rounded-full bg-emerald-200/50 blur-[4px] animate-float"></div>
                  <div className="absolute top-2/3 right-6 w-4 h-4 rounded-full bg-emerald-300/60 blur-[3px] animate-pulse-slow delay-450"></div>
                  
                  {/* Floating green circles for additional decoration with continuous animation */}
                  <div className="absolute left-2 top-12 w-3 h-3 rounded-full bg-emerald-300/70 blur-[2px] animate-float"></div>
                  <div className="absolute right-10 top-40 w-2 h-2 rounded-full bg-emerald-400/70 blur-[1px] animate-float-delay"></div>
                  <div className="absolute left-12 bottom-12 w-6 h-6 rounded-full bg-emerald-200/50 blur-[4px] animate-pulse-slow"></div>
                  <div className="absolute left-5 bottom-20 w-4 h-4 rounded-full bg-emerald-400/60 blur-[3px] animate-float-reverse"></div>
                </div>
              </div>
            </div>

            {/* Right product section */}
            <div className="w-full md:w-3/4 ">
              {/* Tabs */}
              <div className="border-b">
                <div className="flex items-center">
                  <div className="flex flex-1">
                    <button 
                      className={`px-6 py-4 text-sm font-medium uppercase ${activeTab === 'description' ? 'border-b-2 border-yellow-600 text-gray-800 font-semibold' : 'text-gray-500'}`}
                      onClick={() => setActiveTab('description')}
                    >
                      Description
                    </button>
                    <button 
                      className={`px-6 py-4 text-sm font-medium uppercase ${activeTab === 'specifications' ? 'border-b-2 border-yellow-600 text-gray-800 font-semibold' : 'text-gray-500'}`}
                      onClick={() => setActiveTab('specifications')}
                    >
                      Specifications
                    </button>
                  </div>
                  <div className="px-6">
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-medium">View All &gt;&gt;</a>
                  </div>
                </div>
              </div>
              
              {/* Product grid */}
              <div className="py-6 px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {displayedProducts.map(product => (
                    <div key={product.id} className="border border-gray-200 rounded-md overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
                      <div className="relative">
                        {/* SALE badge */}
                        {product.onSale && (
                          <div className="absolute top-2 left-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-sm z-10">
                            SALE
                          </div>
                        )}
                        
                        {/* Product image */}
                        <div className="p-4 flex justify-center items-center bg-white h-70">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300" 
                          />
                        </div>

                        {/* Round badge with product certification */}
                        <div className="absolute right-2 top-2 w-16 h-16">
                          <div className="flex items-center justify-center">
                            <img src={product.certification} alt={product.name} className="w-15 h-15 rounded-full" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Product details */}
                      <div className="p-4 text-center bg-white">
                        <p className="text-gray-400 text-xs uppercase tracking-wider">{product.category}</p>
                        <h3 className="font-medium text-lg mt-1">{product.name}</h3>
                        
                        {/* Price with sale format */}
                        <div className="flex items-center justify-center mt-2">
                          <span className="text-yellow-600 font-bold text-lg">${product.price.toFixed(2)}</span>
                          {product.originalPrice && (
                            <span className="text-gray-400 text-sm line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                        
                        {/* Add to cart button */}
                        <button 
                          className={`mt-4 w-full py-2 rounded font-medium transition-all duration-300 ${
                            addedProducts[product.id] 
                              ? 'bg-green-500 text-white scale-95' 
                              : 'bg-purple-900 text-white hover:bg-purple-800'
                          }`}
                          onClick={() => addToCart(product.id, product.name)}
                        >
                          {addedProducts[product.id] ? 'Added to cart!' : 'Add to card'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation arrows */}
                <button 
                  onClick={handlePrevPage}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center z-10 hover:bg-gray-100 border border-gray-100"
                  aria-label="Previous page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNextPage}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center z-10 hover:bg-gray-100 border border-gray-100"
                  aria-label="Next page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center pb-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 