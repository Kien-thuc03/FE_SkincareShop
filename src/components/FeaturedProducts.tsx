import { featuredProducts } from '../models/ProductModel';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  return (
    <section className="bg-white px-4 pb-12">
      <div className="container mx-auto">
        <div className="bg-[#59177e] py-2 px-4 mb-8">
          <h2 className="text-white text-xl font-semibold">
            Most Popular Products
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-6">
          <span className="w-2 h-2 bg-gray-300 rounded-full mx-1"></span>
          <span className="w-6 h-2 bg-[#59177e] rounded-full mx-1"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full mx-1"></span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 