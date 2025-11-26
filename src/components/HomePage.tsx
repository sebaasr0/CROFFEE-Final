import { imgHero } from '../assets/images';

interface HomePageProps {
  onShopNowClick: () => void;
  onProductClick?: (productId: string) => void;
  onAboutUsClick?: () => void;
}

export function HomePage({ onShopNowClick, onAboutUsClick }: HomePageProps) {
  return (
    <div className="bg-white w-full min-h-screen pt-[89px]">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[688px] overflow-hidden">
        <img 
          alt="Coffee highlands" 
          className="absolute inset-0 w-full h-full object-cover" 
          src={imgHero} 
        />
        {/* Shop Now Button */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-end sm:items-end sm:pb-[20%] sm:pr-[10%] lg:pb-[15%] lg:pr-[15%]">
          <button
            onClick={onShopNowClick}
            className="bg-white h-[60px] sm:h-[70px] lg:h-[80px] px-8 sm:px-10 lg:px-12 rounded-[80px] font-afacad font-normal text-[24px] sm:text-[28px] lg:text-[32px] text-black hover:opacity-90 transition-opacity shadow-lg"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="bg-[#2D2D2D] text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="font-aclonica text-[20px] sm:text-[22px] lg:text-[24px] mb-3 sm:mb-4">CROFFEE</h3>
              <p className="font-afacad text-[14px] sm:text-[15px] lg:text-[16px] text-[#CCC] leading-relaxed">
                Premium single-origin coffee from around the world, delivered to your door.
              </p>
            </div>
            <div>
              <h4 className="font-aclonica text-[16px] sm:text-[18px] mb-3 sm:mb-4">Quick Links</h4>
              <button 
                onClick={onAboutUsClick}
                className="font-afacad text-[14px] sm:text-[15px] lg:text-[16px] text-[#CCC] hover:text-white transition-colors cursor-pointer"
              >
                About Us
              </button>
            </div>
            <div>
              <h4 className="font-aclonica text-[16px] sm:text-[18px] mb-3 sm:mb-4">Newsletter</h4>
              <p className="font-afacad text-[14px] sm:text-[15px] lg:text-[16px] text-[#CCC] leading-relaxed">
                Subscribe to get special offers and brewing tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
