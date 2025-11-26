import { Check, Home } from 'lucide-react';

interface OrderConfirmationProps {
  onReturnHome: () => void;
}

export function OrderConfirmation({ onReturnHome }: OrderConfirmationProps) {
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-[70px] sm:pt-[80px] lg:pt-[89px] px-4 sm:px-6">
      <div className="max-w-[600px] text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
          <Check size={32} className="text-white sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </div>

        {/* Success Message */}
        <h1 className="font-aclonica text-[32px] sm:text-[40px] lg:text-[48px] mb-3 sm:mb-4">
          Order Confirmed!
        </h1>
        <p className="font-afacad text-[18px] sm:text-[20px] lg:text-[24px] text-[#666] mb-6 sm:mb-8">
          Thank you for your order. Your coffee is on its way!
        </p>

        {/* Order Details */}
        <div className="bg-[#F5E6D3] rounded-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <p className="font-afacad text-[14px] sm:text-[16px] text-[#666] mb-2">
            Order Number
          </p>
          <p className="font-aclonica text-[24px] sm:text-[28px] lg:text-[32px] mb-4 sm:mb-6">
            #{orderNumber}
          </p>
          <p className="font-afacad text-[14px] sm:text-[16px] text-[#666]">
            A confirmation email has been sent to your email address with all the order details.
          </p>
        </div>

        {/* Return Button */}
        <button
          onClick={onReturnHome}
          className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-afacad text-[16px] sm:text-[18px] hover:opacity-90 transition-opacity"
        >
          <Home size={18} className="sm:w-5 sm:h-5" />
          Return to Home
        </button>
      </div>
    </div>
  );
}
