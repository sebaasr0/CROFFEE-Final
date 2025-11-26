interface AboutUsProps {
  onClose: () => void;
}

export function AboutUs({ onClose }: AboutUsProps) {
  return (
    <div className="bg-white min-h-screen pt-[70px] sm:pt-[80px] lg:pt-[89px]">
      {/* Divider Line */}
      <div className="w-full h-px bg-black" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header with Close Button */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="font-aclonica text-[28px] sm:text-[32px] lg:text-[36px] text-black cursor-pointer hover:opacity-70 transition-opacity"
          >
            X
          </button>
          
          {/* Title */}
          <h1 className="font-aclonica text-[32px] sm:text-[40px] lg:text-[48px] text-black">
            CROFFEE
          </h1>
          
          {/* Spacer for centering */}
          <div className="w-[40px] sm:w-[50px]"></div>
        </div>
        
        {/* Content Box */}
        <div className="border-[4px] sm:border-[5px] lg:border-[7px] border-black p-4 sm:p-6 lg:p-10">
          <div className="font-actor text-[14px] sm:text-[18px] lg:text-[24px] text-black text-center leading-relaxed space-y-4 sm:space-y-6">
            <p>
              At CROFFEE, we're more than just a coffee shop, we're a destination for discovering the richness of global coffee culture. Our name reflects who we are and where we come from: CR for Costa Rica, blended with our passion for coffee. The result is CROFFEE,
            </p>
            <p>a celebration of origin, flavor, and identity.</p>
            <p>
              We carefully source our beans from some of the world's most exceptional coffee regions. Our primary pride is Costa Rica, known for its high-altitude plantations and award-winning farms. To complement it, we also offer outstanding coffees from Colombia, Brazil, and Ethiopia, each one carrying its own unique notes, traditions, and stories.
            </p>
            <p>
              Every cup we serve is crafted to help you explore the true character of these origins, their aroma, their flavor, and their heritage.
            </p>
            <p>
              We hope you'll not only taste the quality but feel the journey behind every bean. Welcome to CROFFEE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
