export interface Product {
  id: string;
  name: string;
  price: number;
  origin: string;
  description: string;
  fullDescription?: string;
  image: string;
  flavorProfile: string[];
  roastLevel: string;
  process: string;
  altitude: string;
  variety: string;
  notes: string;
  rating: number;
  strength?: number;
  category: 'ground' | 'crods';
}

export interface CartItem {
  product: Product;
  quantity: number;
  coffeeType?: 'ground' | 'whole-grain';
}

export interface CheckoutFormData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}
