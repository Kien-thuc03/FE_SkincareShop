export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  certification?: string;
  category?: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  onSale?: boolean;
  discount?: number;
}

// Import all images statically
import item1 from '../assets/images/item1.jpg';
import item2 from '../assets/images/item2.jpg';
import item3 from '../assets/images/item3.jpg';
import item4 from '../assets/images/item4.jpg';
import certification from '../assets/images/FDA-removebg.png';

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Pure Pineapple",
    price: 14,
    originalPrice: 36,
    image: item1,
    category: "ageloc",
    certification: certification,
    onSale: true
  },
  {
    id: 2,
    name: "Pure Pineapple",
    price: 14,
    originalPrice: 36,
    image: item2,
    category: "ageloc",
    certification: certification,
    onSale: true
  },
  {
    id: 3,
    name: "Pure Pineapple",
    price: 14,
    originalPrice: 36,
    image: item3,
    category: "ageloc",
    certification: certification,
    onSale: true
  },
  {
    id: 4,
    name: "Brightening Serum",
    price: 25,
    originalPrice: 45,
    image: item4,
    category: "serum",
    certification: certification,
    onSale: true
  }
];

export const awards = [
  { id: 1, name: "Best Skincare 2023", image: item1 },
  { id: 2, name: "Beauty Award", image: item2 },
  { id: 3, name: "Consumer Choice", image: item3 },
  { id: 4, name: "Top Brand", image: item4 },
  { id: 5, name: "Product of Year", image: item1 }
];

export const news = [
  { id: 1, title: "Introducing New Products", image: item1 },
  { id: 2, title: "Skin Science Research", image: item2 },
  { id: 3, title: "Behind the Scenes", image: item3 },
  { id: 4, title: "Meet Our Experts", image: item4 }
]; 