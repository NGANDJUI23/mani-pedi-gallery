
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px'
    });
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      ref={heroRef}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1604654894611-6973b376cbde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-block mb-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full">
            <p className="text-sm font-medium tracking-wide uppercase">Premium Nail Art Showcase</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
            <span className="font-normal">Artistry</span> at Your <span className="font-normal">Fingertips</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            Discover the finest collection of nail artistry and inspiration for your next manicure or pedicure look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#gallery" 
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all",
                "bg-white text-nail-800 hover:bg-nail-100 hover:shadow-lg"
              )}
            >
              Browse Gallery
            </a>
            <a 
              href="#categories" 
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all",
                "bg-transparent border border-white/80 hover:bg-white/10"
              )}
            >
              Explore Categories
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 flex justify-center items-start overflow-hidden">
          <div className="w-px h-20 bg-white/50 relative rounded-t-full">
            <div className="absolute w-full h-4 bg-white/80 rounded-full animate-[image-shine_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
