
import React, { useEffect, useRef } from 'react';
import ImageCard from './ImageCard';

const galleryImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Minimalist French Tips',
    category: 'Manicure'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1601055903647-ddf1ee9701c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Pastel Abstract Art',
    category: 'Nail Art'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Elegant Ombre Effect',
    category: 'Manicure'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Geometric Patterns',
    category: 'Nail Art'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1624034396565-f0ab5c7cce51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Natural Tones Pedicure',
    category: 'Pedicure'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Seasonal Floral Design',
    category: 'Nail Art'
  }
];

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.gallery-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).classList.add('slide-in');
            }, index * 100);
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white" ref={galleryRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-nail-500 font-medium text-sm tracking-wider uppercase">Our Collection</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-light leading-tight">
            Inspiration for Your Next <span className="font-normal">Style</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Browse through our curated collection of stunning nail designs from top artists around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((item, index) => (
            <div key={item.id} className={`gallery-item opacity-0 stagger-${index + 1}`}>
              <ImageCard 
                image={item.image} 
                title={item.title} 
                category={item.category} 
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-full border border-nail-300 text-nail-700 hover:bg-nail-50 transition-colors"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
