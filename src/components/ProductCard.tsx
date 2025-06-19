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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.getAttribute('data-error')) {
              target.setAttribute('data-error', 'true');
              target.src = fallbackImage;
            }
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-4">{product.price.toLocaleString()} VND</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#59177e] hover:bg-[#6b2e8e] text-white py-2 rounded-md transition duration-300"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 