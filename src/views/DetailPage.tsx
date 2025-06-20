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
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Product Details</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            {searchQuery ? (
              <div className="mb-6">
                <p className="mb-2">You searched for: <span className="font-medium">{searchQuery}</span></p>
              </div>
            ) : (
              <p className="text-gray-600">No search query provided.</p>
            )}
            {/* Hiển thị danh sách sản phẩm */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Products</h3>
              {searchQuery ? (
                <div className="py-6 px-6 relative">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
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
                      ))
                    ) : (
                      <div className="col-span-full text-center text-gray-500">No products found.</div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailPage; 