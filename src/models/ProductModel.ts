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
import awardBanner1 from '../assets/images/2023 Global Green Beauty Awards.avif';
import awardBanner2 from '../assets/images/global-makeup-awards-23-275x283.png';
import awardBanner3 from '../assets/images/NewBeautyAwards.webp';

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
  {
    id: 1,
    logo: awardBanner3,
    product: "ageLOC® LumiSpa® iO",
    description: "2023 Best Cleansing Device Award Winner",
    organization: "NewBeauty Awards"
  },
  {
    id: 2,
    logo: awardBanner2,
    product: "Epoch Baobab Body Butter",
    description: "Body Butter Silver Winner",
    subDescription: "2023 Beauty Bible Awards"
  },
  {
    id: 3,
    logo: awardBanner1,
    product: "Nu Skin Enterprises",
    description: "2022 Best USA Beauty Brand",
    subDescription: "Global Makeup Awards"
  },
  {
    id: 4,
    logo: awardBanner3,
    product: "Epoch® Yin & Yang Mask",
    description: "2022 Most Sustainable Packaging: Silver Winner",
    organization: "Global Green Beauty Awards"
  },
  {
    id: 5,
    logo: awardBanner2,
    product: "ageLOC® Facial Spa",
    description: "2021 Readers' Choice Beauty Award Winner",
    organization: "InStyle"
  },
  {
    id: 6,
    logo: awardBanner3,
    product: "Nutricentials® Eye Love Bright Eyes",
    description: "2022 Pure Beauty Award Finalist",
    organization: "Pure Beauty Global Awards"
  }
];

export const news = [
  { id: 1, title: "Introducing New Products", image: item1 },
  { id: 2, title: "Skin Science Research", image: item2 },
  { id: 3, title: "Behind the Scenes", image: item3 },
  { id: 4, title: "Meet Our Experts", image: item4 }
]; 