import React, { useState } from 'react';
import { X } from 'lucide-react';

const Announcement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-600 text-white py-2">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-center flex-grow">
            🌱 Free shipping on orders over $50! Shop now and grow your garden.
          </p>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;