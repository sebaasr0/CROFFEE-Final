import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { imgCartIcon } from '../assets/images';

interface HeaderProps {
  onCartClick: () => void;
  onNavigate: (page: string) => void;
}

export function Header({ onCartClick, onNavigate }: HeaderProps) {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 h-[70px] sm:h-[80px] lg:h-[89px] border-b border-black">
      <div className="h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavigation('home')}
          className="font-aclonica text-[28px] sm:text-[36px] lg:text-[48px] text-black cursor-pointer hover:opacity-80 transition-opacity"
        >
          CROFFEE
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          <button
            onClick={() => handleNavigation('ground-and-whole-grain')}
            className="font-aclonica text-[14px] lg:text-[15px] text-black whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
          >
            Ground and whole grain
          </button>
          <button
            onClick={() => handleNavigation('crods')}
            className="font-aclonica text-[14px] lg:text-[15px] text-black cursor-pointer hover:opacity-80 transition-opacity"
          >
            Crods
          </button>
          <button
            onClick={() => handleNavigation('about-us')}
            className="font-aclonica text-[14px] lg:text-[15px] text-black cursor-pointer hover:opacity-80 transition-opacity"
          >
            About us
          </button>
        </nav>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button 
            onClick={onCartClick}
            className="relative h-[28px] sm:h-[30px] lg:h-[32px] w-[28px] sm:w-[30px] lg:w-[32px] cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src={imgCartIcon} alt="Shopping cart" className="w-full h-full object-contain" />
            {cartCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-aclonica pointer-events-none">
                {cartCount}
              </div>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black shadow-lg">
          <nav className="flex flex-col py-4">
            <button
              onClick={() => handleNavigation('ground-and-whole-grain')}
              className="font-aclonica text-[16px] text-black px-6 py-3 text-left hover:bg-gray-100 transition-colors"
            >
              Ground and whole grain
            </button>
            <button
              onClick={() => handleNavigation('crods')}
              className="font-aclonica text-[16px] text-black px-6 py-3 text-left hover:bg-gray-100 transition-colors"
            >
              Crods
            </button>
            <button
              onClick={() => handleNavigation('about-us')}
              className="font-aclonica text-[16px] text-black px-6 py-3 text-left hover:bg-gray-100 transition-colors"
            >
              About us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
