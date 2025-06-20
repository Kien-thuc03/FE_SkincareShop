import ForceForGood from '../assets/images/force_for_good.webp';
import NatureScience from '../assets/images/Nature-Science.jpg';

const BrandStory = () => {
  return (
    <section className="bg-white px-4 py-8">
      <div className="container max-w-full">
        {/* Header */}
        <div className="flex justify-center mb-12">
          <div className="bg-purple-900 py-3 px-12 rounded-full">
            <h2 className="text-white text-2xl font-bold text-center">
              The Nu Skin Way
            </h2>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="bg-gray-10 flex flex-col md:flex-row gap-6 mb-8 border-2 border-gray-100 rounded-lg ">
          <div className="md:w-1/3 p-5">
            <h2 className="text-gray-800 font-medium text-4xl mb-2">Nu Skin,</h2>
            <h2 className="text-gray-800 font-medium text-4xl mt-2">Improving Lives Everyday</h2>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-3 items-center gap-4">
            <div className="text-center">
              <div className="text-[#59177e] font-bold text-3xl mb-1">25+</div>
              <p className="text-xs text-gray-600">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-[#59177e] font-bold text-3xl mb-1">25+</div>
              <p className="text-xs text-gray-600">Certified Countries</p>
            </div>
            <div className="text-center">
              <div className="text-[#59177e] font-bold text-3xl mb-1">850k+</div>
              <p className="text-xs text-gray-600">Satisfied Customers</p>
            </div>
          </div>
        </div>
        
        {/* Force for Good */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="order-2 md:order-1">
            <img 
              src={ForceForGood} 
              alt="Children benefiting from Nu Skin's Force for Good initiative"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="bg-[#f7f7f7] order-1 md:order-2 p-10 rounded-lg">
            <h3 className="text-3xl font-medium text-gray-800 mb-4">Being a Force for Good</h3>
            <p className="text-sm text-gray-600 mb-3">
              Some call it corporate social responsibility. We call it our purpose. Together we're engaged in 
              initiatives worldwide—nourishing thousands of hungry children, funding pediatric health and 
              wellness services, or striving for a more sustainable future.
            </p>
            <p className="text-sm text-gray-600 mb-3">
              And sometimes, we're simply taking meaningful steps to improve our local communities. Whatever we do, 
              we believe changing the world begins with a single action.
            </p>
            <button className="text-sm font-medium text-gray-700 mt-3 border-b border-gray-700 pb-1">
              Explore our projects
            </button>
          </div>
        </div>
        
        {/* Nature + Science */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-[#f7f7f7] order-1 md:order-1 p-10 rounded-lg">
            <h3 className="text-3xl font-medium text-gray-800 mb-4">Nature + Science</h3>
            <p className="text-sm text-gray-600 mb-3">
              Capturing the best in nature to bring you the best results is our personal mission. We combine 
              powerful ingredients with innovative science and technology. The result? World-class products 
              that deliver real benefits.
            </p>
            <p className="text-sm text-gray-600 mb-3">
              And even though we've spent more than 30 years researching aging at the genetic level, Mother Nature 
              continually inspires us to push the boundaries of inquiry and innovation. We bottle what's best and 
              bring it right to your door.
            </p>
            <button className="text-sm font-medium text-gray-700 mt-3 border-b border-gray-700 pb-1">
              Discover more
            </button>
          </div>
          <div className="order-2 md:order-2">
            <img 
              src={NatureScience} 
              alt="Nu Skin products with natural ingredients"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;