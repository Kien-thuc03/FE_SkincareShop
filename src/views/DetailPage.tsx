import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getSearchController } from '../controllers/SearchController';
import { initialSearchState } from '../models/SearchModel';
import { featuredProducts } from '../models/ProductModel';
import { getCartController } from '../controllers/CartController';
import { initialCart } from '../models/CartModel';

const DetailPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const searchController = getSearchController(initialSearchState);
  const cartController = getCartController(initialCart);
  const [addedProducts, setAddedProducts] = useState<{[key: number]: boolean}>({});
  const [notifications, setNotifications] = useState<{id: number, productId: number, message: string}[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    if (query !== searchQuery) {
      setSearchQuery(query);
      if (query) {
        searchController.setQuery(query);
      }
    }
  }, [location.search]);

  // Lọc sản phẩm theo searchQuery
  const filteredProducts = searchQuery
    ? featuredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : featuredProducts;

  // Thêm vào giỏ hàng
  const addToCart = (productId: number, productName: string) => {
    cartController.addToCart(productId);
    setAddedProducts(prev => ({ ...prev, [productId]: true }));
    const newNotification = {
      id: Date.now(),
      productId,
      message: `Added ${productName} to cart!`
    };
    setNotifications(prev => [...prev, newNotification]);
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [productId]: false }));
    }, 1000);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header defaultCategoriesOpen={false}/>
      {/* Notifications */}
      <div className="fixed top-16 sm:top-24 right-2 sm:right-4 z-50 max-w-[calc(100%-1rem)] sm:max-w-xs">
        {notifications.map(notification => (
          <div 
            key={notification.id}
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-3 sm:p-4 mb-2 text-sm sm:text-base rounded shadow-md animate-slideIn"
          >
            {notification.message}
          </div>
        ))}
      </div>
      <main className="flex-grow py-6 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Product Details</h1>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Search Results</h2>
            {searchQuery ? (
              <div className="mb-4 sm:mb-6">
                <p className="mb-2">You searched for: <span className="font-medium">{searchQuery}</span></p>
              </div>
            ) : (
              <p className="text-gray-600">No search query provided.</p>
            )}
            {/* Hiển thị danh sách sản phẩm */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Products</h3>
              {searchQuery ? (
                <div className="py-4 sm:py-6 px-0 sm:px-4 md:px-6 relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <div key={product.id} className="border border-gray-200 rounded-md overflow-hidden relative hover:shadow-lg transition-shadow duration-300 bg-white">
                          <div className="relative">
                            {/* SALE badge */}
                            {product.onSale && (
                              <div className="absolute top-2 left-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-sm z-10">
                                SALE
                              </div>
                            )}
                            {/* Product image */}
                            <div className="p-4 flex justify-center items-center bg-white h-40 sm:h-48 md:h-56 lg:h-64">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            {/* Round badge with product certification */}
                            <div className="absolute right-2 top-2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
                              <div className="flex items-center justify-center">
                                <img src={product.certification} alt={product.name} className="w-full h-full rounded-full object-cover" />
                              </div>
                            </div>
                          </div>
                          {/* Product details */}
                          <div className="p-3 sm:p-4 text-center bg-white">
                            <p className="text-gray-400 text-xs uppercase tracking-wider">{product.category}</p>
                            <h3 className="font-medium text-sm sm:text-base md:text-lg mt-1 line-clamp-2 break-words">{product.name}</h3>
                            {/* Price with sale format */}
                            <div className="flex items-center justify-center mt-2">
                              <span className="text-yellow-600 font-bold text-base sm:text-lg">${product.price.toFixed(2)}</span>
                              {product.originalPrice && (
                                <span className="text-gray-400 text-xs sm:text-sm line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                              )}
                            </div>
                            {/* Add to cart button */}
                            <button 
                              className={`mt-3 sm:mt-4 w-full py-1.5 sm:py-2 rounded text-sm sm:text-base font-medium transition-all duration-300 ${
                                addedProducts[product.id] 
                                  ? 'bg-green-500 text-white scale-95' 
                                  : 'bg-purple-900 text-white hover:bg-purple-800'
                              }`}
                              onClick={() => addToCart(product.id, product.name)}
                              aria-label={`Add ${product.name} to cart`}
                            >
                              {addedProducts[product.id] ? 'Added to cart!' : 'Add to cart'}
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-lg">No products found for your search.</p>
                        <p className="text-sm mt-2">Try a different search term or browse our categories.</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-lg">Enter a search term to find products</p>
                  <p className="text-sm mt-2">Use the search bar above to discover our amazing products</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailPage; 