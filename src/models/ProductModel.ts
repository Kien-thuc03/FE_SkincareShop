export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Pure Cleanse",
    price: 299000,
    image: "/images/product1.png"
  },
  {
    id: 2,
    name: "Pure Essence",
    price: 399000,
    image: "/images/product2.png"
  },
  {
    id: 3,
    name: "Pure Cream",
    price: 499000,
    image: "/images/product3.png"
  }
];

export const awards = [
  { id: 1, name: "Best Skincare 2023", image: "/images/award1.png" },
  { id: 2, name: "Beauty Award", image: "/images/award2.png" },
  { id: 3, name: "Consumer Choice", image: "/images/award3.png" },
  { id: 4, name: "Top Brand", image: "/images/award4.png" },
  { id: 5, name: "Product of Year", image: "/images/award5.png" },
  { id: 6, name: "Expert's Choice", image: "/images/award6.png" }
];

export const news = [
  { id: 1, title: "Introducing New Products", image: "/images/news1.jpg" },
  { id: 2, title: "Skin Science Research", image: "/images/news2.jpg" },
  { id: 3, title: "Behind the Scenes", image: "/images/news3.jpg" },
  { id: 4, title: "Meet Our Experts", image: "/images/news4.jpg" }
]; 