const BrandStory = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 inline-block pb-2 border-b-4 border-[#59177e]">
          The Nu Skin Way
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-[#59177e] font-bold text-5xl mb-2">7k+</div>
            <p className="text-gray-600">Improving Lives Everyday</p>
          </div>
          <div className="text-center">
            <div className="text-[#59177e] font-bold text-5xl mb-2">50+</div>
            <p className="text-gray-600">Countries</p>
          </div>
          <div className="text-center">
            <div className="text-[#59177e] font-bold text-5xl mb-2">1000+</div>
            <p className="text-gray-600">Scientists & Experts</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Giving a Force for Good</h3>
            <p className="text-gray-600 mb-6">
              Our mission goes beyond skincare. For every product purchased, we contribute to initiatives that improve 
              children's health, education, and economic opportunities around the world.
            </p>
            <p className="text-gray-600 mb-6">
              Through our Force for Good Foundation, we've helped millions of children gain access to life-saving 
              resources, education, and sustainable solutions for their communities.
            </p>
            <button 
              className="bg-[#59177e] hover:bg-[#6b2e8e] text-white font-medium py-2 px-6 rounded-md transition duration-300"
              aria-label="Learn more about our mission"
            >
              Learn More
            </button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
              alt="Children benefiting from Nu Skin's Force for Good initiative"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
              alt="Sustainable lab with plants and scientific equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">Nature + Science</h3>
            <p className="text-gray-600 mb-6">
              Our approach combines the best of nature with cutting-edge science. We carefully select natural ingredients 
              known for their beneficial properties and enhance their effectiveness through scientific innovation.
            </p>
            <p className="text-gray-600 mb-6">
              With over 75 patents and a team of 100+ scientists, we're committed to creating products that deliver 
              visible results while maintaining the highest standards of safety and sustainability.
            </p>
            <button 
              className="bg-[#59177e] hover:bg-[#6b2e8e] text-white font-medium py-2 px-6 rounded-md transition duration-300"
              aria-label="Discover our science"
            >
              Our Science
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;