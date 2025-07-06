import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrderClick }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation(); 
    setCurrentImageIndex(index);
  };

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
    if (isRightSwipe) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 md:w-4 md:h-4 ${
              i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-xs md:text-sm text-gray-600 ml-1">★{rating}</span>
      </div>
    );
  };

  const discount = Math.round(((product.mrp - product.sellingPrice) / product.mrp) * 100);

  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      {/* Image Carousel */}
      <div 
        className="relative h-48 md:h-64 overflow-hidden bg-gray-100"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Navigation Arrows - Always visible */}
        <button
          onClick={prevImage}
          className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-1.5 md:p-2 rounded-full transition-all duration-300 hover:bg-opacity-80 z-10"
        >
          <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-1.5 md:p-2 rounded-full transition-all duration-300 hover:bg-opacity-80 z-10"
        >
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-2 md:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2 z-10">
          {product.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToImage(index, e)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-red-500 text-white px-1.5 py-0.5 md:px-2 md:py-1 rounded text-xs md:text-sm font-semibold z-10">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-3 md:p-4">
        <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        {renderStars(product.rating)}
        
        <div className="flex items-center space-x-2 md:space-x-3 mt-2 md:mt-3 mb-3 md:mb-4">
          <span className="text-lg md:text-xl font-bold text-gray-900">
            ₹{product.sellingPrice.toLocaleString()}
          </span>
          <span className="text-sm md:text-base text-gray-500 line-through">
            ₹{product.mrp.toLocaleString()}
          </span>
        </div>

        <button
          onClick={() => onOrderClick(product)}
          className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-md md:rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;