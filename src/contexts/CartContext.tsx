import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types/product';

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

// Load cart from localStorage
const loadCartFromStorage = (): CartItem[] => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return [];
};

// Save cart to localStorage
const saveCartToStorage = (items: CartItem[]) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => loadCartFromStorage());

  // Save to localStorage whenever cart changes
  useEffect(() => {
    saveCartToStorage(cartItems);
  }, [cartItems]);

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
