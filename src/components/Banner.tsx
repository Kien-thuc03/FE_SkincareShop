const Banner = () => {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Beauty & Skincare at<br />Reasonable Price</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">Discover our premium skincare products that deliver professional results at affordable prices</p>
        <button 
          className="bg-[#59177e] hover:bg-[#6b2e8e] text-white font-medium py-2 px-6 rounded-full transition duration-300"
          aria-label="Shop Now"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner; 