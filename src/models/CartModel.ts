export interface CartItem {
  productId: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export const initialCart: Cart = {
  items: [],
  total: 0
}; 