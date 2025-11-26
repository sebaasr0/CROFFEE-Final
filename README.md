# CROFFEE - Premium Coffee E-commerce

A React-based e-commerce website for premium coffee products, converted from Figma Make to a standard Vite + React + TypeScript + Tailwind project.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
croffee-project/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── index.ts       # Image exports (placeholders)
│   ├── components/
│   │   ├── AboutUs.tsx
│   │   ├── BestSellersPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── Checkout.tsx
│   │   ├── CrodsPage.tsx
│   │   ├── GroundAndWholeGrainPage.tsx
│   │   ├── Header.tsx
│   │   ├── HomePage.tsx
│   │   ├── MiniCart.tsx
│   │   ├── OrderConfirmation.tsx
│   │   ├── ProductDetailCrods.tsx
│   │   ├── ProductDetailGroundCoffee.tsx
│   │   └── StarRating.tsx
│   ├── contexts/
│   │   └── CartContext.tsx    # Shopping cart state
│   ├── data/
│   │   ├── products.ts        # Product data
│   │   └── svgPaths.ts        # SVG path data for stars
│   ├── types/
│   │   └── product.ts         # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🖼️ Adding Your Own Images

The project currently uses SVG placeholder images. To add your own images:

### Method 1: Replace placeholder data URLs (Recommended)

1. Place your images in `src/assets/images/`
2. Edit `src/assets/images/index.ts`
3. Comment out the placeholder generators and add your actual imports:

```typescript
// Comment out placeholders:
// export const imgEthiopia = createPlaceholder('Ethiopia', '#3D5A3D');

// Add your actual imports:
import ethiopiaImg from './ethiopia-coffee.png';
export const imgEthiopia = ethiopiaImg;
```

### Required Images

| Image Name | Description | Recommended Size |
|------------|-------------|------------------|
| `ethiopia-coffee.png` | Ethiopia ground coffee bag | 300x400px |
| `colombia-coffee.png` | Colombia ground coffee bag | 300x400px |
| `brazil-coffee.png` | Brazil ground coffee bag | 300x400px |
| `costa-rica-coffee.png` | Costa Rica ground coffee bag | 300x400px |
| `costa-rica-crods.png` | Costa Rica coffee pods box | 400x300px |
| `brazil-crods.png` | Brazil coffee pods box | 400x300px |
| `ethiopia-crods.png` | Ethiopia coffee pods box | 400x300px |
| `colombia-crods.png` | Colombia coffee pods box | 400x300px |
| `hero-image.png` | Homepage hero banner | 1440x688px |

## 🎨 Fonts

The project uses these Google Fonts (loaded via CDN in index.html):
- **Aclonica** - Headings and brand name
- **Actor** - Product names and labels
- **Afacad** - Body text and buttons
- **Inter** - Form inputs and descriptions

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📦 Dependencies

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Vite (build tool)

## ✨ Features

- **Product Catalog** - Ground coffee and coffee pods (Crods)
- **Product Details** - Detailed product pages with ratings
- **Shopping Cart** - Add, remove, update quantities
- **Mini Cart** - Quick cart preview
- **Checkout Flow** - Multi-step checkout process
- **Order Confirmation** - Order success page
- **Responsive Design** - Works on all screen sizes

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js` to customize the color palette.

### Modifying Products
Edit `src/data/products.ts` to add/modify products.

### Updating Styles
The project uses Tailwind CSS utility classes. Custom styles can be added to `src/index.css`.

## 📝 Notes

- This project was converted from Figma Make
- All `figma:asset/...` imports have been replaced with local image references
- SVG paths for star ratings are stored in `src/data/svgPaths.ts`
- The shopping cart state is managed via React Context

## 🐛 Troubleshooting

**Images not loading?**
- Make sure images are in `src/assets/images/`
- Check file names match exactly (case-sensitive)
- Verify the import path in `src/assets/images/index.ts`

**Fonts not rendering?**
- Check your internet connection (fonts are loaded via CDN)
- Clear browser cache

**Build errors?**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npx tsc --noEmit`
