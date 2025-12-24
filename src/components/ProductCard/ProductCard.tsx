import React from "react";
import StarIcon from "../../assets/icons/stars/StarIcon";

export interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  rating: number;
  price: number;
  flexDirection?: 'row' | 'col'
}

export default function ProductCard({ image, category, title, rating, price, flexDirection }: ProductCardProps) {
  return (
    <div className={`flex ${flexDirection === 'col' ? 'flex-col' : 'flex-row'} items-center flex-1 min-w-[250px] rounded-md border border-primary-purple overflow-hidden`}>
      {/* Product Image */}
      <div 
        className="relative w-full max-h-[245px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Trending Tag */}
        <div className="absolute top-0 left-0 gradient-btn px-2 py-1 rounded-br-md">
          <span className="text-white font-rajdhani text-xs leading-4">Trending</span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col items-start gap-1 p-3 w-full">
        <div className="flex items-center justify-center gap-2.5">
          <span className="text-white font-rajdhani text-[15px] leading-6">{category}</span>
        </div>
        
        <h3 className="w-full text-white font-rajdhani text-base leading-6">
          {title}
        </h3>
        
        {/* Star Rating */}
        <div className="flex items-start gap-0 h-5">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= rating} />
          ))}
        </div>
        
        <p className="w-full text-white font-rajdhani text-xl leading-7">
          ${price}
        </p>
      </div>
      
      {/* Add to Cart Button */}
      <div className="w-full">
        <button className="w-full px-3 py-1 bg-primary-purple text-white font-rajdhani text-base leading-6 hover:opacity-90 transition-opacity">
          Add to cart
        </button>
      </div>
    </div>
  );
}