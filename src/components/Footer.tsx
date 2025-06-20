import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import Visa from '../assets/images/Visa.png';
import Mastercard from '../assets/images/Mastercard-logo.svg.png';
import PayPal from '../assets/images/PayPal.png';
import AmericanExress from '../assets/images/amex_82052.webp';

const Footer = () => {
  return (
    <footer className="bg-[#59177e] text-white py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-sm mb-4">Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
            
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5" />
              <p className="text-sm">123 Street, New York, USA</p>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
              <p className="text-sm">info@example.com</p>
            </div>
            
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
              <p className="text-sm">+012 345 67890</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Our Shop</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Shop Detail</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Shopping Cart</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Checkout</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/conact" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links 2 - Duplicated */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Our Shop</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Shop Detail</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Shopping Cart</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Checkout</Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-6 border-gray-600" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm mb-4 md:mb-0"><span className="text-white font-bold">&copy; Your Site Name.</span> All Rights Reserved. Designed by <span className="text-white font-bold">Nguyễn Kiến Thức</span></p>
            <p className="text-sm">Distributed By ThemeWagon</p>
          </div>

          {/* Payment icons */}
          <div className="flex mt-4 md:mt-0 space-x-1">
            <img src={Visa} alt="Visa" className="h-6 bg-white p-1 rounded" />
            <img src={Mastercard} alt="Mastercard" className="h-6 bg-white p-1 rounded" />
            <img src={PayPal} alt="PayPal" className="h-6 bg-white p-1 rounded" />
            <img src={AmericanExress} alt="American Express" className="h-6 bg-white p-1 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 