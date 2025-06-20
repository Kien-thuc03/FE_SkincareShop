import banner from '../assets/images/Banner.jpg';

const PromoSection = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <div className="bg-[#f5f5f2] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-4">
            {/* Image */}
            <div className="relative p-4 flex items-center justify-center">
              <div className="w-full h-full max-w-xl relative">
                <img
                  src={banner}
                  alt="Woman applying ageLOC LumiSpa device"
                  className="w-full h-auto object-contain scale-110 p-7"
                />
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-purple-800 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium">Sale Of</span>
                  <span className="text-base font-bold">$29.99</span>
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-orange-500 font-semibold text-sm mb-3 tracking-wider">
                AGELOC® LUMISPA® IO
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ageLOC® LumiSpa® iO
              </h2>
              <p className="text-gray-700 mb-6">
                Elevate your skincare routine
              </p>
              <button
                className="bg-purple-800 text-white text-sm font-bold py-3 px-6 rounded-sm w-40 uppercase tracking-wider cursor-pointer hover:bg-purple-900 transition-colors duration-300"
                aria-label="Shop now for ageLOC LumiSpa iO"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection; 