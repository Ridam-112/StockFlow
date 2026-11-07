# StockFlow — Admin & Operations Suite

> **StockFlow** is an enterprise-grade Admin, Inventory Management, Store Operations, and Logistics Control Panel extracted and adapted from the SwiftMart quick-commerce platform.

---

## 🚀 Key Highlights & Modules

- **📊 Executive Dashboard & Analytics**: Real-time sales metrics, order volumes, revenue trends, dynamic Area/Bar charts (powered by Recharts).
- **📦 Inventory & Stock Flow**: Product catalog management, variants, unit weights, pricing, barcode lookups, stock status tracking.
- **🏬 Multi-Vendor & Store Management**: Merchant onboarding, KYC & document verification, shop approval/rejection workflows, QR code pickup stickers.
- **🛵 Fleet & Order Dispatch**: Real-time order lifecycle tracking (Placed -> Packed -> Out for Delivery -> Delivered), rider assignment, re-broadcasting, Leaflet map fleet monitoring.
- **🗺️ Interactive GIS Maps**: 
  - `FleetMapTab`: Live rider location and active dispatch tracking.
  - `ShopsMapTab`: Geographic store clusters and delivery radius management.
- **🎨 Dynamic Layout & Theme Builder**: Real-time homepage section arranger, category banners, promotional buckets, and visual theme customizer.
- **💬 Customer Operations & WhatsApp Hub**: Direct customer messaging, order status alerts, and automated templates.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS v4 + `tw-animate-css`
- **UI Components**: Radix UI primitives + Lucide Icons + Framer Motion
- **Charts & Maps**: Recharts + Leaflet / React-Leaflet
- **State & Notifications**: Custom Context Architecture + Sonner Toasts

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Start Local Development Server
```bash
pnpm run dev
# or
npm run dev
```

The application will start on `http://localhost:5000` (or the next available port) and load the **StockFlow Admin Dashboard** directly.

### 3. Production Build
```bash
pnpm run build
```

---

## ⚡ Portfolio Demo Mode
This project includes a built-in mock fallback layer (`src/lib/mockAdminData.ts` & `src/lib/api.ts`). When running standalone without an active backend server, it gracefully serves realistic store data, orders, inventory items, and analytics metrics so the portfolio showcase remains 100% interactive and functional.
