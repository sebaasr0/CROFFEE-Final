import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types/product';
import { getProductById } from '../data/products';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantityOrType: number | 'ground' | 'whole-grain', coffeeType?: 'ground' | 'whole-grain') => void;
  removeFromCart: (productId: string, coffeeType?: 'ground' | 'whole-grain') => void;
  updateQuantity: (productId: string, quantity: number, coffeeType?: 'ground' | 'whole-grain') => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'croffee-cart';

// Simplified cart item for storage (only essential data)
interface StoredCartItem {
  productId: string;
  quantity: number;
  coffeeType?: 'ground' | 'whole-grain';
}

// Load cart from localStorage and reconstruct with full product data
const loadCartFromStorage = (): CartItem[] => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const storedItems: StoredCartItem[] = JSON.parse(stored);
      
      // Reconstruct cart items with full product data
      const cartItems: CartItem[] = [];
      for (const item of storedItems) {
        const product = getProductById(item.productId);
        if (product) {
          cartItems.push({
            product,
            quantity: item.quantity,
            coffeeType: item.coffeeType
          });
        }
      }
      return cartItems;
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return [];
};

// Save cart to localStorage (only essential data)
const saveCartToStorage = (items: CartItem[]) => {
  try {
    const storedItems: StoredCartItem[] = items.map(item => ({
      productId: item.product.id,
      quantity: item.quantity,
      coffeeType: item.coffeeType
    }));
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storedItems));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadedCart = loadCartFromStorage();
    setCartItems(loadedCart);
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever cart changes (but only after initial load)
  useEffect(() => {
    if (isLoaded) {
      saveCartToStorage(cartItems);
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product: Product, quantityOrType: number | 'ground' | 'whole-grain', coffeeType?: 'ground' | 'whole-grain') => {
    // Handle the case where second argument is the coffee type (for ground coffee products)
    let quantity = 1;
    let type = coffeeType;
    
    if (typeof quantityOrType === 'string') {
      type = quantityOrType;
      quantity = 1;
    } else {
      quantity = quantityOrType;
    }

    setCartItems(prev => {
      const existingItem = prev.find(
        item => item.product.id === product.id && item.coffeeType === type
      );

      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && item.coffeeType === type
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, quantity, coffeeType: type }];
    });
  };

  const removeFromCart = (productId: string, coffeeType?: 'ground' | 'whole-grain') => {
    setCartItems(prev =>
      prev.filter(item => !(item.product.id === productId && item.coffeeType === coffeeType))
    );
  };

  const updateQuantity = (productId: string, quantity: number, coffeeType?: 'ground' | 'whole-grain') => {
    if (quantity <= 0) {
      removeFromCart(productId, coffeeType);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId && item.coffeeType === coffeeType
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
