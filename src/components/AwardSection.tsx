import { awards } from '../models/ProductModel';
import awardBanner from '../assets/images/dreamteam-hero-banner-v4.jpg'; // Sử dụng một hình ảnh hiện có làm banner
import { useState, useEffect, useRef } from 'react';

const AwardSection = () => {
  // Danh sách các giải thưởng
  const awardList = awards;
  
  // Tạo mảng lặp lại để hiệu ứng chạy liên tục
  const duplicatedAwards = [...awardList, ...awardList];
  
  // State cho vị trí scroll và hiển thị
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Tính toán kích thước của một item
  const itemWidth = 200; // Kích thước cố định cho mỗi item (px)
  
  // Theo dõi khi nào phần giải thưởng hiển thị trong viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.1, // kích hoạt khi 10% phần tử hiển thị
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Hiệu ứng tự động scroll
  useEffect(() => {
    // Chỉ chạy khi phần tử hiển thị và không bị tạm dừng
    if (!isVisible || isPaused) return;
    
    const speed = 0.15; // Tốc độ scroll (px/ms) - giảm xuống để chạy chậm hơn
    let startTime: number;
    let animationId: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const elapsed = timestamp - startTime;
      const newPosition = (scrollPosition + elapsed * speed) % (itemWidth * awardList.length);
      
      setScrollPosition(newPosition);
      startTime = timestamp;
      
      animationId = window.requestAnimationFrame(animate);
    };
    
    animationId = window.requestAnimationFrame(animate);
    
    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, [scrollPosition, isPaused, awardList.length, isVisible]);
  
  return (
    <section className="bg-white py-12" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-8">
          <div className="bg-purple-900 py-3 px-12 rounded-full">
            <h2 className="text-white text-2xl font-bold text-center">
              Award And Recognition
            </h2>
          </div>
        </div>
        
        {/* Banner */}
        <div className="bg-gray-200 mb-12 flex flex-col md:flex-row items-center rounded-lg">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src={awardBanner}
              alt="Beauty devices"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full p-4 text-center md:w-1/2">
            <p className="text-gray-700 text-lg font-medium">WORLD'S #1 COMPANY FOR</p>
            <h3 className="text-gray-800 text-3xl font-bold">Beauty & Wellness Device Systems</h3>
            <p className="text-gray-500 text-sm mt-2">Source: Euromonitor</p>
          </div>
        </div>
        
        {/* Continuous horizontal scrolling awards */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={scrollRef}
        >
          <div 
            className="flex"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: isPaused ? 'transform 0.5s ease' : 'none'
            }}
          >
            {duplicatedAwards.map((award, index) => (
              <div 
                key={`${award.id}-${index}`} 
                className="flex-shrink-0 w-[200px] p-4 flex flex-col items-center text-center"
              >
                <div className="rounded-full border border-gray-200 shadow-sm w-24 h-24 flex items-center justify-center mb-3">
                  <img 
                    src={award.logo} 
                    alt={award.product}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-gray-800 font-semibold text-sm mb-1">{award.product}</h3>
                <p className="text-xs text-gray-600">{award.description}</p>
                {award.organization && (
                  <p className="text-xs text-gray-600">{award.organization}</p>
                )}
                {award.subDescription && (
                  <p className="text-xs text-gray-600">{award.subDescription}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection; 