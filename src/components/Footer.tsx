import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

const Footer = () => {
  return (
    <footer className="bg-[#59177e] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Nu Skin</h3>
            <p className="text-sm mb-2">Innovating skincare for a better you</p>
            <p className="text-sm mb-2">123 Beauty Avenue</p>
            <p className="text-sm mb-2">Ho Chi Minh City, Vietnam</p>
            <p className="text-sm">Email: info@nuskin.com</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/products" className="hover:underline">Products</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Quick Links 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Other Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/shipping" className="hover:underline">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:underline">Returns</Link></li>
              <li><Link to="/payment" className="hover:underline">Payment Methods</Link></li>
              <li><Link to="/track-order" className="hover:underline">Track Order</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-600 text-center text-sm">
          <p>© {new Date().getFullYear()} Nu Skin. All Rights Reserved. Design by MRSTHEME - HEALTH & BEAUTY</p>
          
          {/* Payment icons */}
          <div className="flex justify-center mt-4 space-x-2">
            <img src={reactLogo} alt="Visa" className="h-6 bg-white rounded" />
            <img src={reactLogo} alt="Mastercard" className="h-6 bg-white rounded" />
            <img src={reactLogo} alt="PayPal" className="h-6 bg-white rounded" />
            <img src={reactLogo} alt="American Express" className="h-6 bg-white rounded" />
            <img src={reactLogo} alt="Discover" className="h-6 bg-white rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 