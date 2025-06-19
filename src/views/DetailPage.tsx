import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getSearchController } from '../controllers/SearchController';
import { initialSearchState } from '../models/SearchModel';

const DetailPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const searchController = getSearchController(initialSearchState);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
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
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Product Description</h3>
              <textarea
                className="w-full border border-gray-300 rounded-md p-4 min-h-[200px]"
                placeholder="Enter product description here..."
                defaultValue={searchQuery ? `This is the detailed information about "${searchQuery}"` : ''}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DetailPage; 