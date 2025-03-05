
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 1,
    title: 'Manicure',
    description: 'Classic and trendy manicure styles for everyday elegance',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '124 designs'
  },
  {
    id: 2,
    title: 'Pedicure',
    description: 'Beautiful pedicure designs to complement your style',
    image: 'https://images.unsplash.com/photo-1622557850710-f9d5757a5339?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '98 designs'
  },
  {
    id: 3,
    title: 'Nail Art',
    description: 'Creative and artistic designs for statement nails',
    image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '156 designs'
  }
];

const CategoryShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.category-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).classList.add('opacity-100');
              (item as HTMLElement).classList.remove('opacity-0', 'translate-y-10');
            }, index * 200);
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="categories" className="py-20 bg-nail-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-nail-500 font-medium text-sm tracking-wider uppercase">Browse By Category</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-light leading-tight">
            Find Your Perfect <span className="font-normal">Style</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore our collection organized by categories to find the perfect inspiration for your next appointment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={cn(
                "category-item opacity-0 translate-y-10 transition-all duration-700 ease-out",
                "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md"
              )}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-nail-500 font-medium">{category.count}</span>
                  <a 
                    href="#" 
                    className="text-sm font-medium text-nail-700 hover:text-nail-800 transition-colors"
                  >
                    View Collection →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
