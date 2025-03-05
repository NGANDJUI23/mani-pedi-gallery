
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-nail-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="block text-2xl font-semibold mb-4">
              <span className="text-nail-700">Lydie</span>
              <span className="text-nail-500">Gallery</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A curated collection of the finest Lydie art and designs for your inspiration.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Categories</h4>
              <ul className="space-y-3">
                {['Manicure', 'Pedicure', 'Nail Art', 'Seasonal', 'Trends'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-nail-700 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Explore</h4>
              <ul className="space-y-3">
                {['Popular', 'Latest', 'Trending', 'Collections', 'Seasons'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-nail-700 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                {['About', 'Contact', 'Careers', 'Terms', 'Privacy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-nail-700 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-nail-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Lydie Gallery. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            {['Facebook', 'Instagram', 'Pinterest', 'Twitter'].map((item) => (
              <a key={item} href="#" className="text-muted-foreground hover:text-nail-700 transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
