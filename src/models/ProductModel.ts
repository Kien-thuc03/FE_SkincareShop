export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  discount?: number;
}

// Import all images statically
import item1 from '../assets/images/item1.jpg';
import item2 from '../assets/images/item2.jpg';
import item3 from '../assets/images/item3.jpg';
import item4 from '../assets/images/item4.jpg';
import item5 from '../assets/images/item5.jpg';

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Pure Cleanse",
    price: 299000,
    image: item1,
    category: "skincare",
    rating: 4.8,
    reviews: 124,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Pure Essence",
    price: 399000,
    image: item2,
    category: "toner",
    rating: 4.6,
    reviews: 89,
    isNew: true
  },
  {
    id: 3,
    name: "Pure Cream",
    price: 499000,
    image: item3,
    category: "moisturizer",
    rating: 4.9,
    reviews: 156,
    isBestSeller: true
  },
  {
    id: 4,
    name: "Brightening Serum",
    price: 499000,
    image: item4,
    category: "serum",
    rating: 4.7,
    reviews: 112,
    discount: 15
  },
  {
    id: 5,
    name: "Anti-Aging Cream",
    price: 599000,
    image: item5,
    category: "moisturizer",
    rating: 4.5,
    reviews: 78,
    isNew: true
  }
];

export const awards = [
  { id: 1, name: "Best Skincare 2023", image: item1 },
  { id: 2, name: "Beauty Award", image: item2 },
  { id: 3, name: "Consumer Choice", image: item3 },
  { id: 4, name: "Top Brand", image: item4 },
  { id: 5, name: "Product of Year", image: item5 },
  { id: 6, name: "Expert's Choice", image: item1 }
];

export const news = [
  { id: 1, title: "Introducing New Products", image: item1 },
  { id: 2, title: "Skin Science Research", image: item2 },
  { id: 3, title: "Behind the Scenes", image: item3 },
  { id: 4, title: "Meet Our Experts", image: item4 }
]; 