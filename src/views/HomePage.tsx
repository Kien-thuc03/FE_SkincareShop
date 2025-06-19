import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import FeaturedProducts from '../components/FeaturedProducts';
import PromoSection from '../components/PromoSection';
import AwardSection from '../components/AwardSection';
import BrandStory from '../components/BrandStory';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          <Banner />
          <div className="container mx-auto px-8 py-8">
            <FeaturedProducts />
            <PromoSection />
            <AwardSection />
            <BrandStory />
            <NewsSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage; 