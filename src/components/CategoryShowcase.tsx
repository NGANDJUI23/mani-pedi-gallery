
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Grid2X2, Tag } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const categories = [
  {
    id: 1,
    title: 'Manicure',
    description: 'Classic and trendy manicure styles for everyday elegance',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '124 designs',
    designs: [
      { id: 1, title: 'French Tips', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 2, title: 'Nude Elegance', image: 'https://images.unsplash.com/photo-1601055903647-ddf1ee9701c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 3, title: 'Pastel Collection', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 2,
    title: 'Pedicure',
    description: 'Beautiful pedicure designs to complement your style',
    image: 'https://images.unsplash.com/photo-1622557850710-f9d5757a5339?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '98 designs',
    designs: [
      { id: 1, title: 'Summer Ready', image: 'https://images.unsplash.com/photo-1622557850710-f9d5757a5339?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 2, title: 'Beach Vibes', image: 'https://images.unsplash.com/photo-1624034396565-f0ab5c7cce51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 3, title: 'Natural Glow', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 3,
    title: 'Nail Art',
    description: 'Creative and artistic designs for statement nails',
    image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '156 designs',
    designs: [
      { id: 1, title: 'Abstract Patterns', image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 2, title: 'Floral Dreams', image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 3, title: 'Geometric Art', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  }
];

const CategoryShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
  
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

  const handleViewCollection = (category: (typeof categories)[0]) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

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
          <div className="flex items-center justify-center mt-6 gap-2">
            <button 
              onClick={() => setActiveView('grid')}
              className={cn(
                "p-2 rounded-md transition-colors",
                activeView === 'grid' ? "bg-nail-100 text-nail-700" : "text-muted-foreground hover:bg-nail-50"
              )}
              aria-label="Grid view"
            >
              <Grid2X2 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveView('list')}
              className={cn(
                "p-2 rounded-md transition-colors",
                activeView === 'list' ? "bg-nail-100 text-nail-700" : "text-muted-foreground hover:bg-nail-50"
              )}
              aria-label="List view"
            >
              <Tag className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {activeView === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.id} 
                className={cn(
                  "category-item opacity-0 translate-y-10 transition-all duration-700 ease-out",
                  "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md group cursor-pointer"
                )}
                onClick={() => handleViewCollection(category)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-nail-700 transition-colors">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-nail-500 font-medium">{category.count}</span>
                    <button 
                      className="inline-flex items-center text-sm font-medium text-nail-700 hover:text-nail-800 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      View Collection <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div 
                key={category.id} 
                className={cn(
                  "category-item opacity-0 translate-y-10 transition-all duration-700 ease-out",
                  "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
                )}
                onClick={() => handleViewCollection(category)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-2 hover:text-nail-700 transition-colors">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-nail-500 font-medium">{category.count}</span>
                      <button 
                        className="inline-flex items-center text-sm font-medium text-nail-700 hover:text-nail-800 transition-colors hover:translate-x-1 transition-transform duration-300"
                      >
                        View Collection <ChevronRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedCategory?.title} Collection</DialogTitle>
            <DialogDescription>
              {selectedCategory?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {selectedCategory?.designs.map((design) => (
              <div key={design.id} className="overflow-hidden rounded-lg group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="mt-2 text-center font-medium">{design.title}</h4>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-full border border-nail-300 text-nail-700 hover:bg-nail-50 transition-colors"
            >
              View All {selectedCategory?.title} Designs
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CategoryShowcase;
