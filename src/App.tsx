import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { GroundAndWholeGrainPage } from './components/GroundAndWholeGrainPage';
import { CrodsPage } from './components/CrodsPage';
import { BestSellersPage } from './components/BestSellersPage';
import { ProductDetailGroundCoffee } from './components/ProductDetailGroundCoffee';
import { ProductDetailCrods } from './components/ProductDetailCrods';
import { CartPage } from './components/CartPage';
import { Checkout } from './components/Checkout';
import { OrderConfirmation } from './components/OrderConfirmation';
import { MiniCart } from './components/MiniCart';
import { AboutUs } from './components/AboutUs';
import { products, getProductById } from './data/products';

type Page = 
  | 'home' 
  | 'ground-and-whole-grain' 
  | 'crods' 
  | 'best-sellers'
  | 'product-detail' 
  | 'cart' 
  | 'checkout' 
  | 'order-confirmation'
  | 'about-us';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [miniCartOpen, setMiniCartOpen] = useState(false);
  const [previousPage, setPreviousPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setSelectedProductId(null);
  };

  const handleProductClick = (productId: string) => {
    setPreviousPage(currentPage);
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const handleShopNow = () => {
    setCurrentPage('best-sellers');
  };

  const handleBackFromProduct = () => {
    setSelectedProductId(null);
    setCurrentPage(previousPage);
  };

  const handleAddToCart = () => {
    setMiniCartOpen(true);
  };

  const handleViewCart = () => {
    setMiniCartOpen(false);
    setCurrentPage('cart');
  };

  const handleCheckout = () => {
    setMiniCartOpen(false);
    setCurrentPage('checkout');
  };

  const handleBackToShopping = () => {
    setCurrentPage('ground-and-whole-grain');
  };

  const handleCompleteOrder = () => {
    setCurrentPage('order-confirmation');
  };

  const handleReturnHome = () => {
    setCurrentPage('home');
  };

  const selectedProduct = selectedProductId ? getProductById(selectedProductId) : null;

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onShopNowClick={handleShopNow} 
            onAboutUsClick={() => setCurrentPage('about-us')}
          />
        );
      case 'ground-and-whole-grain':
        return <GroundAndWholeGrainPage onProductClick={handleProductClick} />;
      case 'crods':
        return <CrodsPage onProductClick={handleProductClick} />;
      case 'best-sellers':
        return <BestSellersPage onProductClick={handleProductClick} />;
      case 'product-detail':
        if (!selectedProduct) return null;
        if (selectedProduct.category === 'crods') {
          return (
            <ProductDetailCrods 
              product={selectedProduct} 
              onBack={handleBackFromProduct}
              onAddToCart={handleAddToCart}
            />
          );
        }
        return (
          <ProductDetailGroundCoffee 
            product={selectedProduct} 
            onBack={handleBackFromProduct}
            onAddToCart={handleAddToCart}
          />
        );
      case 'cart':
        return <CartPage onBack={handleBackToShopping} onCheckout={handleCheckout} />;
      case 'checkout':
        return <Checkout onBack={handleViewCart} onComplete={handleCompleteOrder} />;
      case 'order-confirmation':
        return <OrderConfirmation onReturnHome={handleReturnHome} />;
      case 'about-us':
        return <AboutUs onClose={() => setCurrentPage('home')} />;
      default:
        return null;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header 
          onCartClick={() => setMiniCartOpen(true)} 
          onNavigate={handleNavigate}
        />
        {renderPage()}
        <MiniCart 
          isOpen={miniCartOpen}
          onClose={() => setMiniCartOpen(false)}
          onViewCart={handleViewCart}
          onCheckout={handleCheckout}
        />
      </div>
    </CartProvider>
  );
}

export default App;
