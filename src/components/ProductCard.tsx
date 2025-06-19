import { getCartController } from '../controllers/CartController';
import { initialCart } from '../models/CartModel';
import type { Product } from '../models/ProductModel';
import fallbackImage from '../assets/react.svg';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cartController = getCartController(initialCart);

  const handleAddToCart = () => {
    cartController.addToCart(product.id);
  };

  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-4"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.getAttribute('data-error')) {
              target.setAttribute('data-error', 'true');
              target.src = fallbackImage;
            }
          }}
        />
        
        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
            NEW
          </span>
        )}
      </div>
      
      {/* Product Details */}
      <div className="p-4 border-t border-gray-200">
        <h3 className="text-center text-gray-800 font-medium mb-1">{product.name}</h3>
        <p className="text-center text-gray-600 mb-2">
          {product.discount ? (
            <>
              <span className="line-through text-gray-400 mr-2">{product.price.toLocaleString()} VND</span>
              <span className="text-red-500 font-semibold">
                {Math.round(product.price * (1 - product.discount / 100)).toLocaleString()} VND
              </span>
            </>
          ) : (
            <span>{product.price.toLocaleString()} VND</span>
          )}
        </p>
        
        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#59177e] hover:bg-[#6b2e8e] text-white py-2 text-sm font-medium mt-2"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 