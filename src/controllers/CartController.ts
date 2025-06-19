import type { Cart } from '../models/CartModel';

export class CartController {
  private cart: Cart;
  private listeners: ((cart: Cart) => void)[] = [];
  private static instance: CartController | null = null;

  private constructor(initialCart: Cart) {
    this.cart = JSON.parse(JSON.stringify(initialCart)); // Deep clone
  }

  static getInstance(initialCart: Cart): CartController {
    if (!CartController.instance) {
      CartController.instance = new CartController(initialCart);
    }
    return CartController.instance;
  }

  getCart(): Cart {
    return { ...this.cart };
  }

  addToCart(productId: number): void {
    const existingItem = this.cart.items.find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.items.push({
        productId,
        quantity: 1
      });
    }
    
    this.notifyListeners();
  }

  getCartCount(): number {
    return this.cart.items.reduce((total, item) => total + item.quantity, 0);
  }

  subscribe(listener: (cart: Cart) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.getCart()));
  }
}

// Wrapper function để sử dụng CartController.getInstance
export const getCartController = (initialCart: Cart): CartController => {
  return CartController.getInstance(initialCart);
}; 