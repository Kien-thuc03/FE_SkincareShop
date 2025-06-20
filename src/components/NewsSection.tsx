import { news } from '../models/ProductModel';
import fallbackImage from '../assets/react.svg';

const NewsSection = () => {
  return (
    <section className="bg-white px-4 py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-8">
          <div className="bg-purple-900 py-3 px-12 rounded-full">
            <h2 className="text-white text-2xl font-bold text-center">
              Nu Skin In The News
            </h2>
          </div>
        </div>
        
        {/* News grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {news.map((item) => (
            <div key={item.id} className="bg-white overflow-hidden border border-gray-200">
              <div className="h-40 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.getAttribute('data-error')) {
                      target.setAttribute('data-error', 'true');
                      target.src = fallbackImage;
                    }
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <a 
                  href="#" 
                  className="text-[#59177e] text-xs font-medium"
                  aria-label={`Read more about ${item.title}`}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 