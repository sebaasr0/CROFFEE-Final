import { StarRating } from './StarRating';
import { products } from '../data/products';

interface BestSellersPageProps {
  onProductClick: (productId: string) => void;
}

export function BestSellersPage({ onProductClick }: BestSellersPageProps) {
  // Best sellers: Costa Rica Coffee (id:4), Costa Rica Crods (id:5), Brazil Crods (id:6), Colombia Coffee (id:2)
  const bestSellerIds = ['4', '5', '6', '2'];
  const bestSellers = bestSellerIds.map(id => products.find(p => p.id === id)).filter(Boolean);

  const getDisplayName = (product: typeof products[0]) => {
    if (product.category === 'crods') {
      return `${product.name.toUpperCase()} CRODS`;
    }
    return product.name.toUpperCase();
  };

  return (
    <div className="bg-white min-h-screen pt-[89px]">
      {/* Header Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="font-aclonica text-[28px] sm:text-[36px] lg:text-[48px] text-black text-center mb-4">
          BEST SELLERS
        </h1>
      </div>
      
      {/* Divider */}
      <div className="w-full h-px bg-black" />
      
      {/* Products Count */}
      <div className="px-4 sm:px-6 lg:px-8 py-3">
        <p className="font-aclonica text-[10px] sm:text-[12px] text-black">
          {bestSellers.length} PRODUCTS
        </p>
      </div>
      
      {/* Products Grid */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {bestSellers.map((product) => product && (
            <button
              key={product.id}
              onClick={() => onProductClick(product.id)}
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Product Image */}
              <div className="w-full aspect-[3/4] flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info */}
              <div className="text-center">
                <p className="font-actor text-[12px] sm:text-[14px] lg:text-[15px] text-black mb-1">
                  {getDisplayName(product)}
                </p>
                <p className="font-actor text-[12px] sm:text-[14px] lg:text-[15px] text-black mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex justify-center">
                  <StarRating rating={product.rating} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
