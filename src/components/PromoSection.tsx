const PromoSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-[#f8f1ff] rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block bg-[#59177e] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                FEATURED PRODUCT
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">ageLOC LumiSpa® iO</h3>
              <p className="text-gray-600 mb-6">
                Experience our most innovative cleansing device that delivers a personalized facial treatment
                for visibly smoother, softer skin after just one use.
              </p>
              <div className="flex space-x-4">
                <button
                  className="bg-[#59177e] hover:bg-[#6b2e8e] text-white font-medium py-2 px-6 rounded-md transition duration-300"
                  aria-label="Shop LumiSpa iO"
                >
                  Shop Now
                </button>
                <button
                  className="border-2 border-[#59177e] text-[#59177e] hover:bg-[#f0e6f5] font-medium py-2 px-6 rounded-md transition duration-300"
                  aria-label="Learn more about LumiSpa iO"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-80 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Woman applying skincare product"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white text-[#59177e] font-bold text-lg rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                -20%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection; 