import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types/product';
import { StarRating } from './StarRating';
import { imgCoffeeBean } from '../assets/images';

interface ProductDetailGroundCoffeeProps {
  product: Product;
  onBack: () => void;
  onAddToCart?: () => void;
}

function CoffeeStrengthIndicator({ strength }: { strength: number }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: strength }).map((_, index) => (
        <div 
          key={index}
          className="h-[24px] sm:h-[31px] w-[18px] sm:w-[24px] overflow-hidden"
        >
          <img src={imgCoffeeBean} alt="Coffee strength" className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
}

export function ProductDetailGroundCoffee({ product, onBack, onAddToCart }: ProductDetailGroundCoffeeProps) {
  const [selectedType, setSelectedType] = useState<'ground' | 'whole-grain'>('ground');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedType);
    if (onAddToCart) {
      onAddToCart();
    }
  };

  return (
    <div className="bg-white min-h-screen pt-[89px]">
      {/* Divider Line */}
      <div className="w-full h-px bg-black" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Go Back Button */}
        <button
          onClick={onBack}
          className="font-aclonica text-[14px] sm:text-[16px] text-black mb-6 lg:mb-8 hover:opacity-70 transition-opacity"
        >
          GO BACK
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[500px] aspect-[3/4] flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-w-full max-h-full object-contain" 
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Product Title */}
            <h1 className="font-actor text-[28px] sm:text-[36px] lg:text-[48px] text-black mb-2 leading-tight">
              {product.name.toUpperCase()}
            </h1>
            
            {/* Price */}
            <p className="font-actor text-[18px] sm:text-[20px] lg:text-[24px] text-black mb-4">
              ${product.price.toFixed(2)}
            </p>
            
            {/* Star Rating */}
            <div className="mb-6">
              <StarRating rating={product.rating || 5} size="large" />
            </div>

            {/* Type Selection */}
            <div className="mb-4">
              <p className="font-inter text-[16px] sm:text-[18px] lg:text-[20px] text-black mb-4">
                <span className="font-actor font-bold">TYPE:</span>{' '}
                {selectedType === 'ground' ? 'GROUND' : 'WHOLE GRAIN'}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {/* Ground Button */}
                <button
                  onClick={() => setSelectedType('ground')}
                  className={`h-[38px] sm:h-[42px] px-5 sm:px-6 rounded-[20px] border border-black transition-colors text-[16px] sm:text-[18px] lg:text-[20px] font-inter ${
                    selectedType === 'ground' ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                >
                  GROUND
                </button>

                {/* Whole Grain Button */}
                <button
                  onClick={() => setSelectedType('whole-grain')}
                  className={`h-[38px] sm:h-[42px] px-5 sm:px-6 rounded-[20px] border border-black transition-colors text-[16px] sm:text-[18px] lg:text-[20px] font-inter ${
                    selectedType === 'whole-grain' ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                >
                  WHOLE GRAIN
                </button>

                {/* Strength Indicator */}
                <div className="flex items-center ml-2">
                  <CoffeeStrengthIndicator strength={product.strength || 2} />
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full max-w-[473px] bg-black h-[48px] sm:h-[51px] rounded-[20px] hover:opacity-90 transition-opacity flex items-center justify-center mb-6 sm:mb-8"
            >
              <span className="font-inter font-extrabold text-[14px] sm:text-[16px] text-white">ADD TO CART</span>
            </button>

            {/* Description */}
            <div className="font-inter text-[13px] sm:text-[14px] lg:text-[16px] text-black leading-relaxed space-y-4">
              {product.fullDescription?.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
