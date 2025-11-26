import { ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

interface CartPageProps {
  onBack: () => void;
  onCheckout: () => void;
}

export function CartPage({ onBack, onCheckout }: CartPageProps) {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const getProductImage = (productId: string) => {
    const product = products.find(p => p.id === productId);
    return product?.image || '';
  };

  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[89px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 sm:mb-8 font-afacad text-[16px] sm:text-[18px] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} />
          Continue Shopping
        </button>

        <h1 className="font-aclonica text-[28px] sm:text-[36px] lg:text-[42px] mb-6 sm:mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <p className="font-afacad text-[18px] sm:text-[24px] text-[#666] mb-6 sm:mb-8">
              Your cart is empty
            </p>
            <button
              onClick={onBack}
              className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-afacad text-[16px] sm:text-[18px] hover:opacity-90 transition-opacity"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {cartItems.map(item => (
                <div
                  key={`${item.product.id}-${item.coffeeType || 'default'}`}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-[#F5E6D3] rounded-lg"
                >
                  <div className="w-full sm:w-24 lg:w-32 h-32 rounded-lg overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                    <img
                      src={getProductImage(item.product.id)}
                      alt={item.product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-aclonica text-[16px] sm:text-[18px] lg:text-[20px] mb-2">
                      {item.product.name}
                    </h3>
                    {item.coffeeType && (
                      <p className="font-afacad text-[14px] sm:text-[16px] text-[#666] mb-2">
                        Type: {item.coffeeType === 'ground' ? 'Ground' : 'Whole Grain'}
                      </p>
                    )}
                    <p className="font-afacad text-[14px] sm:text-[16px] text-[#666] mb-3 sm:mb-4">
                      {item.product.origin}
                    </p>
                    <p className="font-aclonica text-[16px] sm:text-[18px]">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-4">
                    <button
                      onClick={() => removeFromCart(item.product.id, item.coffeeType)}
                      className="text-[#666] hover:text-black transition-colors order-2 sm:order-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>

                    <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-lg px-3 sm:px-4 py-2 order-1 sm:order-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.coffeeType)}
                        className="hover:opacity-70 transition-opacity"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="font-aclonica w-6 sm:w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.coffeeType)}
                        className="hover:opacity-70 transition-opacity"
                        aria-label="Increase quantity"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <p className="font-aclonica text-[16px] sm:text-[18px] lg:text-[20px] order-3">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#F5E6D3] rounded-lg p-6 sm:p-8 lg:sticky lg:top-[100px]">
                <h2 className="font-aclonica text-[20px] sm:text-[24px] mb-4 sm:mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex justify-between font-afacad text-[14px] sm:text-[16px]">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-afacad text-[14px] sm:text-[16px]">
                    <span>Shipping</span>
                    <span className="text-right">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-400 pt-3 sm:pt-4">
                    <div className="flex justify-between font-aclonica text-[18px] sm:text-[20px]">
                      <span>Total</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full bg-black text-white py-3 sm:py-4 rounded-lg font-afacad text-[16px] sm:text-[18px] hover:opacity-90 transition-opacity"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
