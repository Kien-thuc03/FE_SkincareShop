import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCartController } from '../controllers/CartController';
import { initialCart } from '../models/CartModel';
import { getSearchController } from '../controllers/SearchController';
import { initialSearchState } from '../models/SearchModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
  defaultCategoriesOpen?: boolean;
}

const Header = ({ defaultCategoriesOpen = true }: HeaderProps) => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(defaultCategoriesOpen);
  const cartController = getCartController(initialCart);
  const searchController = getSearchController(initialSearchState);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  useEffect(() => {
    // Get current value before subscribing
    setCartCount(cartController.getCartCount());
    
    // Subscribe to changes
    const unsubscribe = cartController.subscribe(() => {
      setCartCount(cartController.getCartCount());
    });

    // Gửi trạng thái mở rộng categories qua event để banner có thể lắng nghe
    const handleCategoriesChange = () => {
      const event = new CustomEvent('categoriesToggle', { 
        detail: { isOpen: isCategoriesOpen } 
      });
      document.dispatchEvent(event);
    };

    handleCategoriesChange();
    
    return unsubscribe;
  }, [isCategoriesOpen]);

  // Đóng mobile menu khi resize window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

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
    // Đóng search trên mobile sau khi submit
    setMobileSearchOpen(false);
  };

  const categories = [
    "Dresses", "Shirts", "Jeans", "Swimwear", "Sleepwear", "Sportswear", "Jumpsuits", "Blazers", "Jackets", "Shoes"
  ];

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="flex flex-col fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#59177e] text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-8">
          <div className="flex space-x-2 sm:space-x-4 text-xs sm:text-sm">
            <Link to="#" className="hover:underline">FAQs</Link>
            <Link to="#" className="hover:underline">Help</Link>
            <Link to="#" className="hover:underline">Support</Link>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h-.003z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main content with sidebar */}
      <div className="flex flex-col md:flex-row px-8">        {/* Categories sidebar - ẩn trên mobile */}
        <aside className="hidden md:flex w-1/5 flex-col justify-end relative">
          <div 
            className="bg-[#59177e] text-white py-3 px-4 font-medium flex justify-between items-center cursor-pointer"
            onClick={toggleCategories}
          >
            <span>Categories</span>
            <FontAwesomeIcon 
              icon={faChevronDown}
              className={`transition-transform ${isCategoriesOpen ? 'transform rotate-180' : ''}`} 
              size="sm"
            />
          </div>
          {isCategoriesOpen && (
            <nav className="absolute top-full left-0 w-full bg-white shadow-md category-dropdown z-10">
              <ul className="w-full">
                {categories.map((category, index) => (
                  <li key={index} className="border-b border-gray-100 last:border-b-0">
                    <Link 
                      to={`/`}
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
        <div className="w-full md:w-4/5 border-t border-b border-gray-200">
          <div className="container flex flex-col mx-auto px-0 sm:px-4">
            {/* Search and logo section */}
            <div className="py-4 flex items-center justify-between">
              {/* Mobile search trigger */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)} className="p-2" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Mobile logo */}
              <div className="text-xl font-bold text-[#59177e] md:hidden">ShopApp</div>

              {/* Search form - hidden on mobile unless activated */}
              <div className={`${mobileSearchOpen ? 'absolute top-16 left-0 right-0 z-50 bg-white p-4 shadow-md' : 'hidden md:block'} flex-1 max-w-xl mx-4 md:mx-0`}>
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
                  {/* Close search button on mobile */}
                  {mobileSearchOpen && (
                    <button
                      onClick={() => setMobileSearchOpen(false)}
                      className="absolute right-[-16px] top-[-16px] bg-[#59177e] text-white rounded-full p-1"
                      aria-label="Close search"
                    >
                      <FontAwesomeIcon icon={faXmark} size="sm" />
                    </button>
                  )}
                </form>
              </div>

              {/* Hamburger menu cho mobile */}
              <button 
                className="block md:hidden" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <FontAwesomeIcon 
                  icon={mobileMenuOpen ? faXmark : faBars} 
                  className="h-6 w-6 text-[#59177e]" 
                />
              </button>

              {/* Cart icons on desktop */}
              <div className="hidden md:flex items-center space-x-6 ml-4">
                <Link to="/" className="flex items-center text-gray-700 hover:text-[#59177e]">
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="ml-1 text-sm">0</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-700 hover:text-[#59177e]">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="ml-1 text-sm">{cartCount}</span>
                </Link>
              </div>
            </div>
            
            {/* Navigation links */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} 
                  onClick={() => setMobileMenuOpen(false)}>
            </div>
            <nav className={`md:flex-row justify-between fixed md:static top-0 right-0 h-full md:h-auto w-2/3 md:w-auto 
                            ${mobileMenuOpen ? 'block' : 'hidden'} 
                            md:flex md:space-x-8 bg-white z-50 overflow-auto
                            transition-transform duration-300 transform
                            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}
            > 
              {/* Mobile menu header */}
              <div className="flex justify-between items-center p-4 border-b md:hidden">
                <span className="text-lg font-bold text-[#59177e]">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <FontAwesomeIcon icon={faXmark} className="h-6 w-6 text-[#59177e]" />
                </button>
              </div>

              {/* Categories on mobile */}
              <div className="border-b md:hidden">
                <button 
                  className="flex justify-between items-center w-full p-4" 
                  onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                >
                  <span className="font-medium">Categories</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`transition-transform ${mobileCategoriesOpen ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                {mobileCategoriesOpen && (
                  <ul className="bg-gray-50 py-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link to="/" className="block py-2 px-6 text-gray-700 hover:bg-gray-100">
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Main navigation links */}
              <div className="p-4 md:p-0 md:flex md:space-x-8 items-center">
                <Link to="/" className="block py-2 md:py-0 text-gray-700 hover:text-[#59177e]">Home</Link>
                <Link to="/" className="block py-2 md:py-0 text-gray-700 hover:text-[#59177e]">Shop</Link>
                <Link to="/" className="block py-2 md:py-0 text-gray-700 hover:text-[#59177e]">Shop Detail</Link>

                {/* Pages dropdown */}
                <div className="relative py-2 md:py-0">
                  <button 
                    className="flex items-center justify-between w-full md:w-auto text-gray-700 hover:text-[#59177e]"
                    onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                  >
                    <span>Pages</span>
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`ml-1 transition-transform ${pagesDropdownOpen ? 'transform rotate-180' : ''}`}
                      size="sm"
                    />
                  </button>

                  {/* Mobile dropdown */}
                  <div className={`md:hidden bg-gray-50 mt-2 ${pagesDropdownOpen ? 'block' : 'hidden'}`}>
                    <Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                    <Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                    <Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Terms & Conditions</Link>
                  </div>

                  {/* Desktop dropdown */}
                  <div className="absolute z-10 left-0 hidden group-hover:block md:group-hover:block bg-white shadow-md py-2 w-48">
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Terms & Conditions</Link>
                  </div>
                </div>

                <Link to="/" className="block py-2 md:py-0 text-gray-700 hover:text-[#59177e]">Contact</Link>
                
                {/* Account links on mobile */}
                <div className="border-t mt-2 pt-2 md:hidden">
                  <Link to="/" className="block py-2 text-gray-700 hover:text-[#59177e]">Login</Link>
                  <Link to="/" className="block py-2 text-gray-700 hover:text-[#59177e]">Register</Link>
                </div>

                {/* Hiển thị icon cart và heart trên mobile menu */}
                <div className="flex md:hidden items-center space-x-6 mt-4 pt-4 border-t">
                  <Link to="/" className="flex items-center text-gray-700">
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="ml-1 text-sm">0</span>
                  </Link>
                  <Link to="/" className="flex items-center text-gray-700">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="ml-1 text-sm">{cartCount}</span>
                  </Link>
                </div>
              </div>

              {/* Login/Register links - desktop only */}
              <div className="hidden md:flex items-center space-x-6 py-3">
                <Link to="/" className="text-gray-700 hover:text-[#59177e]">Login</Link>
                <Link to="/" className="text-gray-700 hover:text-[#59177e]">Register</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 