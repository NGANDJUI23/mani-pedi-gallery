
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageCardProps {
  image: string;
  title: string;
  category?: string;
  className?: string;
}

const ImageCard = ({ image, title, category, className }: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "image-card group relative overflow-hidden rounded-lg transition-all duration-500 ease-out",
        "hover:shadow-lg hover:-translate-y-1",
        className
      )}
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
  );
};

export default ImageCard;
