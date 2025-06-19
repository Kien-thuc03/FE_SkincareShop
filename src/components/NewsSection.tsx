import { news } from '../models/ProductModel';

const NewsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 inline-block pb-2 border-b-4 border-[#59177e]">
          Nu Skin In The News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-40 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300?text=News';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{item.title}</h3>
                <a 
                  href="#" 
                  className="text-[#59177e] text-sm font-medium hover:underline"
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