const PromoSection = () => {
  return (
    <section className="bg-white px-4 py-8">
      <div className="container mx-auto">
        <div className="bg-[#f8f1ff] rounded overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text content */}
            <div className="p-6 flex flex-col justify-center">
              <div className="inline-block bg-[#59177e] text-white text-xs font-semibold px-3 py-1 rounded-sm mb-3">
                FEATURED PRODUCT
              </div>
              <h3 className="text-xl font-bold mb-3">ageLOC LumiSpa® iO</h3>
              <p className="text-gray-600 text-sm mb-4">
                Elevate your skincare routine with our innovative cleansing device
              </p>
              <button
                className="bg-[#59177e] text-white text-sm font-medium py-2 px-4 rounded-sm w-28"
                aria-label="Learn more about LumiSpa iO"
              >
                Learn More
              </button>
            </div>
            
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Woman applying skincare product"
                className="w-full h-60 object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#59177e] text-white font-bold text-sm rounded-full w-12 h-12 flex items-center justify-center">
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