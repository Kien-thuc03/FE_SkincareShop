import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import FeaturedProducts from '../components/FeaturedProducts';
import PromoSection from '../components/PromoSection';
import AwardSection from '../components/AwardSection';
import BrandStory from '../components/BrandStory';
import NewsSection from '../components/NewsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Banner />
        <FeaturedProducts />
        <PromoSection />
        <AwardSection />
        <BrandStory />
        <NewsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage; 