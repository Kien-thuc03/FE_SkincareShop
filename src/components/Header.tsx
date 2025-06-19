import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCartController } from '../controllers/CartController';
import { initialCart } from '../models/CartModel';
import { getSearchController } from '../controllers/SearchController';
import { initialSearchState } from '../models/SearchModel';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const cartController = getCartController(initialCart);
  const searchController = getSearchController(initialSearchState);

  useEffect(() => {
    // Lấy giá trị hiện tại trước khi subscribe
    setCartCount(cartController.getCartCount());
    
    // Sau đó mới subscribe để nhận các thay đổi
    const unsubscribe = cartController.subscribe(() => {
      setCartCount(cartController.getCartCount());
    });
    
    return unsubscribe;
  }, []); // Chỉ chạy một lần khi component mount

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

  return (
    <header className="bg-[#59177e] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-1/4">
            <Link to="/" className="text-2xl font-bold">Nu Skin</Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 w-2/4 justify-center">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/products" className="hover:text-gray-300">Products</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </nav>
          
          {/* Search and Cart */}
          <div className="flex items-center space-x-4 w-1/4 justify-end">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="rounded-full py-1 px-3 text-black text-sm w-32"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                aria-label="Search"
                title="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 