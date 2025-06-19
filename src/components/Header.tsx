import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCartController } from '../controllers/CartController';
import { initialCart } from '../models/CartModel';
import { getSearchController } from '../controllers/SearchController';
import { initialSearchState } from '../models/SearchModel';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const cartController = getCartController(initialCart);
  const searchController = getSearchController(initialSearchState);

  useEffect(() => {
    // Get current value before subscribing
    setCartCount(cartController.getCartCount());
    
    // Subscribe to changes
    const unsubscribe = cartController.subscribe(() => {
      setCartCount(cartController.getCartCount());
    });
    
    return unsubscribe;
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchController.setQuery(searchQuery);
    if (searchQuery.trim()) {
      window.location.href = `/detail?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const categories = [
    "Dresses", "Shirts", "Jeans", "Swimwear", "Sleepwear", "Sportswear", "Jumpsuits", "Blazers", "Jackets", "Shoes"
  ];

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="flex flex-col">
      {/* Top bar */}
      <div className="bg-[#59177e] text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 text-sm">
            <Link to="#" className="hover:underline">FAQs</Link>
            <Link to="#" className="hover:underline">Help</Link>
            <Link to="#" className="hover:underline">Support</Link>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h-.003z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main content with sidebar */}
      <div className="flex px-8">
        {/* Categories sidebar */}
        <aside className="w-1/5 flex flex-col justify-between">
        <div className="w-48"></div> {/* Empty space for sidebar alignment */}
        <div 
          className="bg-[#59177e] text-white py-3 px-4 font-medium flex justify-between items-center cursor-pointer"
          onClick={toggleCategories}
        >
          <span>Categories</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 transition-transform ${isCategoriesOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {isCategoriesOpen && (
          <nav className="w-full bg-white">
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="border-b border-gray-100 last:border-b-0">
                  <Link 
                    to={`/category/${category.toLowerCase()}`}
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        </aside>
        {/* Main navigation */}
        <div className="w-4/5 border-t border-b border-gray-200">
          <div className="container flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search and logo section */}
            <div className="py-4">
              <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1 max-w-xl">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      placeholder="Search for products"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full border border-gray-300 px-4 py-2 rounded-sm"
                    />
                    <button 
                      type="submit" 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                      aria-label="Search"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </form>
                </div>
                
                <div className="flex items-center space-x-6">
                  <Link to="/wishlist" className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="ml-1 text-sm">0</span>
                  </Link>
                  
                  <Link to="/cart" className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="ml-1 text-sm">{cartCount}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <nav className="flex space-x-8 py-3">
                <Link to="/" className="text-gray-700 hover:text-[#59177e]">Home</Link>
                <Link to="/shop" className="text-gray-700 hover:text-[#59177e]">Shop</Link>
                <Link to="/shop-detail" className="text-gray-700 hover:text-[#59177e]">Shop Detail</Link>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-[#59177e] flex items-center">
                    Pages
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute z-10 left-0 hidden group-hover:block bg-white shadow-md py-2 w-48">
                    <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                    <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                    <Link to="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Terms & Conditions</Link>
                  </div>
                </div>
                <Link to="/contact" className="text-gray-700 hover:text-[#59177e]">Contact</Link>
              </nav>
              <div className="flex items-center space-x-6 py-3">
                <Link to="/login" className="text-gray-700 hover:text-[#59177e]">Login</Link>
                <Link to="/register" className="text-gray-700 hover:text-[#59177e]">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 