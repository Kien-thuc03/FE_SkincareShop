import { awards } from '../models/ProductModel';
import awardBanner from '../assets/images/dreamteam-hero-banner-v4.jpg'; // Sử dụng một hình ảnh hiện có làm banner

const AwardSection = () => {
  // Danh sách các giải thưởng từ ảnh
  const awardList = awards;

  return (
    <section className="bg-gray-50 px-4 py-12">
      <div className="container w-full">
        {/* Header */}
        <div className="flex justify-center mb-8">
          <div className="bg-purple-900 py-3 px-12 rounded-full">
            <h2 className="text-white text-2xl font-bold text-center">
              Award And Recognition
            </h2>
          </div>
        </div>
        
        {/* Banner */}
        <div className="bg-gray-100 p-6 mb-12 flex flex-col md:flex-row items-center rounded-lg">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src={awardBanner}
              alt="Beauty devices"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-right">
            <p className="text-gray-700 text-lg font-medium">WORLD'S #1 COMPANY FOR</p>
            <h3 className="text-gray-800 text-3xl font-bold">Beauty & Wellness Device Systems</h3>
            <p className="text-gray-500 text-sm mt-2">Source: Euromonitor</p>
          </div>
        </div>
        
        {/* Awards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {awardList.map((award) => (
            <div key={award.id} className="flex flex-col items-center text-center">
              <div className="rounded-full border border-gray-200 shadow-sm w-24 h-24 flex items-center justify-center mb-3">
                <img 
                  src={award.logo} 
                  alt={award.product}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-gray-800 font-semibold text-sm mb-1">{award.product}</h3>
              <p className="text-xs text-gray-600">{award.description}</p>
              {award.subDescription && (
                <p className="text-xs text-gray-600">{award.subDescription}</p>
              )}
              {award.organization && (
                <p className="text-xs text-gray-600">{award.organization}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSection; 