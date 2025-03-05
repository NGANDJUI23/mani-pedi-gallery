
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ImageCardProps {
  image: string;
  title: string;
  category?: string;
  className?: string;
}

const ImageCard = ({ image, title, category, className }: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className={cn(
          "image-card group relative overflow-hidden rounded-lg transition-all duration-500 ease-out cursor-pointer",
          "hover:shadow-lg hover:-translate-y-1",
          className
        )}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-square bg-nail-100 overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-nail-100">
              <div className="w-10 h-10 rounded-full border-2 border-nail-300 border-t-transparent animate-spin"></div>
            </div>
          )}
          <img 
            src={image} 
            alt={title}
            className={cn(
              "object-cover w-full h-full transition-all duration-500",
              isLoaded ? "opacity-100" : "opacity-0",
            )}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {category && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full mb-2 text-white">
              {category}
            </span>
          )}
          <h3 className="text-white font-medium text-lg">{title}</h3>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-white rounded-lg">
          <div className="relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square bg-nail-100">
                <img 
                  src={image} 
                  alt={title}
                  className="object-cover w-full h-full" 
                />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col justify-center">
                {category && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-nail-200 text-nail-700 rounded-full mb-3">
                    {category}
                  </span>
                )}
                <h2 className="text-2xl font-medium mb-4">{title}</h2>
                <p className="text-muted-foreground mb-6">
                  This stunning {category?.toLowerCase()} design showcases expert technique and artistic vision. 
                  Perfect for those looking to make a statement with their nails while maintaining elegance and sophistication.
                </p>
                
                <div className="mt-auto">
                  <button
                    className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-nail-500 text-white hover:bg-nail-600 transition-colors"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageCard;
