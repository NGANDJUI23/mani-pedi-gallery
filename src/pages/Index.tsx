
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import CategoryShowcase from '@/components/CategoryShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector((this as HTMLAnchorElement).getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      
      <div className="relative">
        <Gallery />
        <CategoryShowcase />
        
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-nail-500 font-medium text-sm tracking-wider uppercase">About Us</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-light leading-tight">
                The Art of <span className="font-normal">Beautiful Nails</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Nail art process" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Nail Gallery is a premier destination for nail art inspiration and design ideas. Our curated collection showcases the most elegant, creative, and trendsetting nail designs from talented artists around the world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking for subtle elegance for everyday wear or bold statement pieces for special occasions, our gallery offers endless inspiration for your next manicure or pedicure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that nail art is a form of self-expression that allows everyone to showcase their unique personality and style. Our mission is to inspire and celebrate this artistry in all its forms.
                </p>
                
                <div className="pt-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center px-6 py-3 rounded-full border border-nail-300 text-nail-700 hover:bg-nail-50 transition-colors"
                  >
                    Learn More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
