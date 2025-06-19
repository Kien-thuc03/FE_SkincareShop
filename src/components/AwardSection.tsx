import { awards } from '../models/ProductModel';
import fallbackImage from '../assets/react.svg';

const AwardSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 inline-block pb-2 border-b-4 border-[#59177e]">
          Award And Recognition
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {awards.map((award) => (
            <div key={award.id} className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-3 shadow-md">
                <img 
                  src={award.image} 
                  alt={award.name}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.getAttribute('data-error')) {
                      target.setAttribute('data-error', 'true');
                      target.src = fallbackImage;
                    }
                  }}
                />
              </div>
              <p className="text-center text-sm font-medium">{award.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSection; 