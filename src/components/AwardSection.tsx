import { awards } from '../models/ProductModel';
import fallbackImage from '../assets/react.svg';

const AwardSection = () => {
  return (
    <section className="bg-white px-4 py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-[#59177e] py-2 px-4 mb-8">
          <h2 className="text-white text-xl font-semibold">
            Award And Recognition
          </h2>
        </div>
        
        {/* Description */}
        <div className="bg-gray-100 py-4 px-6 mb-6 text-center">
          <p className="text-sm text-gray-700">RECOGNIZED BY COMPANIES FOR</p>
          <p className="text-base font-medium text-gray-800">Beauty & Wellness Device Systems</p>
        </div>
        
        {/* Awards grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {awards.map((award) => (
            <div key={award.id} className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-2 mb-2 border border-gray-200 shadow-sm w-20 h-20 flex items-center justify-center">
                <img 
                  src={award.image} 
                  alt={award.name}
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.getAttribute('data-error')) {
                      target.setAttribute('data-error', 'true');
                      target.src = fallbackImage;
                    }
                  }}
                />
              </div>
              <h3 className="text-[#59177e] text-xs font-semibold mb-1">{award.name}</h3>
              <p className="text-xs text-gray-500">Award {award.id}</p>
              <p className="text-xs text-gray-500">Excellence</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSection; 