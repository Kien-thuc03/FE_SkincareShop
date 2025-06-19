const BrandStory = () => {
  return (
    <section className="bg-white px-4 py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-[#59177e] py-2 px-4 mb-8">
          <h2 className="text-white text-xl font-semibold">
            The Nu Skin Way
          </h2>
        </div>
        
        {/* Mission Statement */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/3">
            <h3 className="text-gray-800 font-medium mb-2">Nu Skin,</h3>
            <h3 className="text-gray-800 font-medium mb-4">Improving Lives Everyday</h3>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-[#59177e] font-bold text-2xl mb-1">25+</div>
              <p className="text-xs text-gray-600">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-[#59177e] font-bold text-2xl mb-1">25+</div>
              <p className="text-xs text-gray-600">Certified Countries</p>
            </div>
            <div className="text-center">
              <div className="text-[#59177e] font-bold text-2xl mb-1">850k+</div>
              <p className="text-xs text-gray-600">Satisfied Customers</p>
            </div>
          </div>
        </div>
        
        {/* Force for Good */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-semibold mb-3">Being a Force for Good</h3>
            <p className="text-sm text-gray-600 mb-4">
              Our mission extends beyond skincare. We contribute to initiatives that improve 
              children's health, education, and economic opportunities worldwide.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Through our foundation, we've helped millions gain access to life-saving 
              resources and sustainable solutions for their communities.
            </p>
            <a href="#" className="text-sm text-[#59177e]">Read more</a>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Children benefiting from Nu Skin's Force for Good initiative"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
        
        {/* Nature + Science */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Natural ingredients and scientific approach"
              className="w-full h-48 object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Nature + Science</h3>
            <p className="text-sm text-gray-600 mb-4">
              Our approach combines the best of nature with cutting-edge science. We select natural 
              ingredients known for their beneficial properties and enhance their effectiveness 
              through scientific innovation.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              With numerous patents and a team of scientists, we create products that deliver visible 
              results while maintaining high standards of safety and sustainability.
            </p>
            <a href="#" className="text-sm text-[#59177e]">Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;