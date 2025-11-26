import { Product } from '../types/product';

// Import placeholder images - replace these with your actual images
import {
  imgEthiopia,
  imgColombia,
  imgBrazil,
  imgCostaRica,
  imgCostaRicaCrods,
  imgBrazilCrods,
  imgEthiopiaCrods,
  imgColombiaCrods,
} from '../assets/images';

export const products: Product[] = [
  // Ground/Whole Grain Coffee Products
  {
    id: '1',
    name: 'Ethiopia Coffee',
    price: 14.99,
    origin: 'Ethiopia',
    description: 'A bright and fruity coffee with complex berry notes and a wine-like acidity.',
    fullDescription: 'This exceptional Ethiopian coffee comes from the birthplace of coffee itself. Grown in the highlands of Yirgacheffe, these beans are carefully hand-picked and naturally processed to preserve their distinct fruity characteristics.\n\nThe cup offers a vibrant and complex flavor profile with pronounced berry notes, a delicate floral aroma, and a wine-like acidity that makes it truly special.',
    image: imgEthiopia,
    flavorProfile: ['Blueberry', 'Jasmine', 'Bergamot'],
    roastLevel: 'Light',
    process: 'Natural',
    altitude: '1,900-2,200m',
    variety: 'Heirloom',
    notes: 'This coffee is best enjoyed as a pour-over or in a French press to fully appreciate its complex fruity notes.',
    rating: 4,
    strength: 2,
    category: 'ground'
  },
  {
    id: '2',
    name: 'Colombia Coffee',
    price: 14.99,
    origin: 'Colombia',
    description: 'A well-balanced coffee with caramel sweetness and nutty undertones.',
    fullDescription: 'From the lush mountains of Huila, this Colombian coffee represents the best of what South American coffee has to offer. The beans are washed and sun-dried to create a clean, balanced cup.\n\nExpect a smooth drinking experience with notes of caramel, a pleasant nuttiness, and a bright citrus finish that lingers pleasantly.',
    image: imgColombia,
    flavorProfile: ['Caramel', 'Hazelnut', 'Orange'],
    roastLevel: 'Medium',
    process: 'Washed',
    altitude: '1,700-1,900m',
    variety: 'Caturra, Castillo',
    notes: 'Perfect for espresso-based drinks or as your everyday morning coffee.',
    rating: 5,
    strength: 3,
    category: 'ground'
  },
  {
    id: '3',
    name: 'Brazil Coffee',
    price: 14.99,
    origin: 'Brazil',
    description: 'A rich and full-bodied coffee with chocolate and nutty notes.',
    fullDescription: 'Sourced from the Cerrado region of Brazil, this coffee is grown on family-owned farms that have perfected their craft over generations. The beans undergo a natural processing method that enhances their inherent sweetness.\n\nThis coffee delivers a full-bodied experience with prominent chocolate notes, a subtle nuttiness, and a smooth, low-acid finish.',
    image: imgBrazil,
    flavorProfile: ['Chocolate', 'Peanut', 'Brown Sugar'],
    roastLevel: 'Medium-Dark',
    process: 'Natural',
    altitude: '1,100-1,300m',
    variety: 'Bourbon, Mundo Novo',
    notes: 'Excellent for cold brew and makes a fantastic base for lattes.',
    rating: 4.5,
    strength: 4,
    category: 'ground'
  },
  {
    id: '4',
    name: 'Costa Rica Coffee',
    price: 14.99,
    origin: 'Costa Rica',
    description: 'A clean and bright coffee with honey sweetness and citrus notes.',
    fullDescription: 'From the volcanic slopes of Costa Rica\'s Central Valley, this exceptional coffee is grown at high altitudes where cool nights and warm days create perfect growing conditions. Honey-processed to retain natural sugars.\n\nThe result is a wonderfully clean cup with pronounced honey sweetness, vibrant citrus notes, and a delicate floral finish that showcases why Costa Rican coffee is world-renowned.',
    image: imgCostaRica,
    flavorProfile: ['Honey', 'Lemon', 'Jasmine'],
    roastLevel: 'Light-Medium',
    process: 'Honey',
    altitude: '1,400-1,600m',
    variety: 'Caturra, Catuai',
    notes: 'Our signature coffee and the pride of CROFFEE. Best enjoyed black.',
    rating: 5,
    strength: 2,
    category: 'ground'
  },
  // Crods (Coffee Pods) Products
  {
    id: '5',
    name: 'Costa Rica',
    price: 7.99,
    origin: 'Costa Rica',
    description: 'Premium coffee pods with exceptional flavor and convenience. Our Costa Rica Crods deliver the perfect balance of honey and citrus notes in every convenient pod.',
    fullDescription: 'Experience the exceptional taste of Costa Rican coffee in a convenient pod format. Our Costa Rica Crods capture the essence of our signature blend, sourced from the volcanic highlands where cool mountain air and rich soil create the perfect growing conditions.\n\nEach pod delivers a clean, sweet cup with pronounced honey notes, bright citrus undertones, and a delicate floral finish. With an 86.5 S.C.A score, these pods bring you specialty-grade coffee with the convenience of single-serve brewing.\n\nCompatible with Nespresso® Original Line machines. 20 capsules per box.',
    image: imgCostaRicaCrods,
    flavorProfile: ['Honey', 'Citrus', 'Clean'],
    roastLevel: 'Light-Medium',
    process: 'Honey',
    altitude: '1,400-1,600m',
    variety: 'Caturra',
    notes: 'Compatible with most pod brewing systems.',
    rating: 5,
    strength: 2,
    category: 'crods'
  },
  {
    id: '6',
    name: 'Brazil',
    price: 9.99,
    origin: 'Brazil',
    description: 'Rich Brazilian espresso pods with deep chocolate notes, nutty undertones, and a smooth, velvety finish perfect for espresso lovers.',
    fullDescription: 'Our Brazil Crods bring you the rich, full-bodied character of Brazilian coffee in every convenient pod. Sourced from the renowned Cerrado region, these beans are carefully selected and roasted to perfection.\n\nExpect a bold espresso experience with prominent chocolate notes, subtle peanut undertones, and a smooth, low-acid finish. The natural processing method enhances the inherent sweetness, making this an ideal choice for those who prefer a stronger, more intense coffee.\n\nPerfect for lattes, cappuccinos, or enjoyed as a straight espresso. Compatible with Nespresso® Original Line machines. 20 capsules per box.',
    image: imgBrazilCrods,
    flavorProfile: ['Chocolate', 'Nutty', 'Smooth'],
    roastLevel: 'Medium-Dark',
    process: 'Natural',
    altitude: '1,100-1,300m',
    variety: 'Bourbon',
    notes: 'Excellent intensity for milk-based drinks.',
    rating: 5,
    strength: 4,
    category: 'crods'
  },
  {
    id: '7',
    name: 'Ethiopia',
    price: 12.99,
    origin: 'Ethiopia',
    description: 'Exotic Ethiopian espresso pods featuring vibrant fruity notes, delicate floral aromas, and the distinctive character of coffee\'s birthplace.',
    fullDescription: 'Discover the birthplace of coffee with our Ethiopia Crods. These exceptional pods showcase the unique terroir of the Yirgacheffe region, where coffee has been cultivated for centuries using traditional methods.\n\nEach cup reveals a complex tapestry of flavors: bright blueberry notes, jasmine-like florals, and a wine-like acidity that dances on your palate. The natural processing preserves the bean\'s inherent fruitiness, creating an extraordinary sensory experience.\n\nFor those who appreciate specialty coffee and seek something truly distinctive. Compatible with Nespresso® Original Line machines. 20 capsules per box.',
    image: imgEthiopiaCrods,
    flavorProfile: ['Berry', 'Floral', 'Bright'],
    roastLevel: 'Light',
    process: 'Natural',
    altitude: '1,900-2,200m',
    variety: 'Heirloom',
    notes: 'For those who appreciate complex, fruity coffees.',
    rating: 4.5,
    strength: 2,
    category: 'crods'
  },
  {
    id: '8',
    name: 'Colombia',
    price: 5.99,
    origin: 'Colombia',
    description: 'Well-balanced Colombian espresso pods with sweet caramel notes, pleasant nuttiness, and a clean, approachable finish for everyday enjoyment.',
    fullDescription: 'Our Colombia Crods deliver the beloved character of Colombian coffee in every convenient pod. Sourced from the misty mountains of Huila, these beans represent the pinnacle of South American coffee craftsmanship.\n\nEnjoy a perfectly balanced cup with sweet caramel notes, a pleasant hazelnut undertone, and a bright orange citrus finish. The washed processing ensures a clean, crisp taste that\'s approachable yet sophisticated.\n\nAn excellent everyday coffee that pairs beautifully with breakfast or as an afternoon pick-me-up. Compatible with Nespresso® Original Line machines. 20 capsules per box.',
    image: imgColombiaCrods,
    flavorProfile: ['Caramel', 'Nutty', 'Balanced'],
    roastLevel: 'Medium',
    process: 'Washed',
    altitude: '1,700-1,900m',
    variety: 'Caturra',
    notes: 'A crowd-pleaser for any occasion.',
    rating: 4,
    strength: 3,
    category: 'crods'
  }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Get ground/whole grain products
export const getGroundProducts = (): Product[] => {
  return products.filter(product => product.category === 'ground');
};

// Get Crods products
export const getCrodsProducts = (): Product[] => {
  return products.filter(product => product.category === 'crods');
};
