import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
  onViewCart: () => void;
  onCheckout: () => void;
}

export function MiniCart({ isOpen, onClose, onViewCart, onCheckout }: MiniCartProps) {
  const { cartItems, removeFromCart, getCartTotal, getCartCount } = useCart();

  const getProductImage = (productId: string) => {
    const product = products.find(p => p.id === productId);
    return product?.image || '';
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Mini Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] lg:w-[450px] bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 sm:gap-3">
            <ShoppingBag size={20} className="sm:w-6 sm:h-6" />
            <h2 className="font-aclonica text-[16px] sm:text-[20px]">
              Shopping Cart ({getCartCount()})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="hover:opacity-70 transition-opacity p-1"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <ShoppingBag size={40} className="mx-auto mb-4 text-gray-300 sm:w-12 sm:h-12" />
              <p className="font-afacad text-[16px] sm:text-[18px] text-[#666]">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={`${item.product.id}-${item.coffeeType || 'default'}`} className="flex gap-3 sm:gap-4 pb-4 border-b border-gray-200">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg overflow-hidden bg-[#F5E6D3] flex-shrink-0 flex items-center justify-center">
                    <img
                      src={getProductImage(item.product.id)}
                      alt={item.product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-aclonica text-[12px] sm:text-[14px] mb-1 truncate">
                      {item.product.name}
                    </h3>
                    {item.coffeeType && (
                      <p className="font-afacad text-[11px] sm:text-[12px] text-[#666] mb-1">
                        {item.coffeeType === 'ground' ? 'Ground' : 'Whole Grain'}
                      </p>
                    )}
                    <p className="font-afacad text-[11px] sm:text-[12px] text-[#666] mb-1 sm:mb-2">
                      Qty: {item.quantity}
                    </p>
                    <p className="font-aclonica text-[12px] sm:text-[14px]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id, item.coffeeType)}
                    className="text-[#666] hover:text-black transition-colors self-start p-1"
                    aria-label="Remove item"
                  >
                    <X size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-aclonica text-[16px] sm:text-[18px]">Subtotal</span>
              <span className="font-aclonica text-[20px] sm:text-[24px]">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-black text-white py-3 sm:py-4 rounded-lg font-afacad text-[16px] sm:text-[18px] hover:opacity-90 transition-opacity"
            >
              Checkout
            </button>
            <button
              onClick={onViewCart}
              className="w-full bg-white border-2 border-black py-3 sm:py-4 rounded-lg font-afacad text-[16px] sm:text-[18px] hover:bg-gray-50 transition-colors"
            >
              View Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
