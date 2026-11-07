// StockFlow Realistic Mock Data Store for Portfolio Showcase

export const mockStats = {
  totalOrders: 1428,
  pendingOrders: 5,
  completedOrders: 1380,
  cancelledOrders: 43,
  totalRevenue: 684250,
  dailyRevenue: 28400,
  activeShops: 4,
  pendingShops: 3,
  activeRiders: 18,
  totalCustomers: 3820,
  totalCommission: 34210,
  totalUsers: 3820,
};

export const mockShops = [
  {
    _id: "shop_001",
    id: "shop_001",
    shopName: "Bhavani Fresh Groceries & Staples",
    ownerName: "Rajesh Sharma",
    phone: "+91 9832109871",
    ownerId: "user_owner_01",
    shopType: "grocery",
    category: "grocery",
    description: "Daily fresh vegetables, pulses, spices, flour and dairy products.",
    panNumber: "ABCDE1234F",
    gstNumber: "19ABCDE1234F1Z5",
    bankAccountHolderName: "Rajesh Sharma",
    bankAccountNumber: "50100432198765",
    bankIfscCode: "HDFC0001234",
    upiId: "rajesh.sharma@okaxis",
    status: "approved",
    createdAt: "2026-08-15T10:00:00.000Z",
    totalOrders: 642,
    totalRevenue: 245000,
    rating: 4.8,
    isOpen: true,
    address: { line1: "12 College Road, Market Complex", city: "Balurghat", pincode: "733101", state: "West Bengal" }
  },
  {
    _id: "shop_002",
    id: "shop_002",
    shopName: "Sweet Moments Bakery & Confectionery",
    ownerName: "Priyanka Sen",
    phone: "+91 9749123456",
    ownerId: "user_owner_02",
    shopType: "bakery",
    category: "bakery",
    description: "Custom artisan cakes, pastries, cookies, and gourmet snacks.",
    panNumber: "BCDEF2345G",
    gstNumber: "19BCDEF2345G1Z2",
    bankAccountHolderName: "Priyanka Sen",
    bankAccountNumber: "30291827364512",
    bankIfscCode: "SBIN0000456",
    upiId: "priyanka.sweet@oksbi",
    status: "approved",
    createdAt: "2026-08-20T11:30:00.000Z",
    totalOrders: 420,
    totalRevenue: 198000,
    rating: 4.9,
    isOpen: true,
    address: { line1: "45 Hospital More", city: "Balurghat", pincode: "733101", state: "West Bengal" }
  },
  {
    _id: "shop_003",
    id: "shop_003",
    shopName: "Arogya Pharma & Wellness",
    ownerName: "Dr. Anirban Mukherjee",
    phone: "+91 9434098765",
    ownerId: "user_owner_03",
    shopType: "pharmacy",
    category: "pharmacy",
    description: "Prescription drugs, wellness supplements, first aid, baby care.",
    panNumber: "CDEFG3456H",
    gstNumber: "19CDEFG3456H1Z8",
    bankAccountHolderName: "Anirban Mukherjee",
    bankAccountNumber: "98765432109812",
    bankIfscCode: "ICIC0000789",
    upiId: "arogya.pharma@icici",
    status: "approved",
    createdAt: "2026-09-01T09:15:00.000Z",
    totalOrders: 310,
    totalRevenue: 142000,
    rating: 4.7,
    isOpen: true,
    address: { line1: "88 Bus Stand Road", city: "Balurghat", pincode: "733101", state: "West Bengal" }
  },
  {
    _id: "shop_004",
    id: "shop_004",
    shopName: "Annapurna Organic Vegetables & Fruits",
    ownerName: "Subhash Mondal",
    phone: "+91 9800112233",
    ownerId: "user_owner_04",
    shopType: "grocery",
    category: "grocery",
    description: "Farm-fresh organic fruits and locally sourced green vegetables.",
    panNumber: "DEFGH4567J",
    bankAccountNumber: "12345678901234",
    bankIfscCode: "PUNB0123400",
    status: "pending",
    createdAt: "2026-11-05T14:20:00.000Z",
    totalOrders: 0,
    totalRevenue: 0,
    rating: 0,
    isOpen: false,
    address: { line1: "Subhasgram Bazar, Stall 14", city: "Balurghat", pincode: "733102", state: "West Bengal" }
  }
];

export const mockOrders = [
  {
    _id: "SF-ORD-1094",
    id: "SF-ORD-1094",
    customerId: "cust_001",
    customerName: "Suman Banerjee",
    customerPhone: "+91 9832441100",
    shopId: "shop_001",
    shopName: "Bhavani Fresh Groceries & Staples",
    items: [
      { productName: "Aashirvaad Superior MP Sharbati Atta 5kg", qty: 1, price: 295 },
      { productName: "Amul Taaza Homogenised Milk 1L", qty: 2, price: 74 },
      { productName: "Tata Salt Vacuum Evaporated 1kg", qty: 1, price: 28 }
    ],
    netAmount: 471,
    subtotal: 443,
    status: "out_for_delivery",
    paymentMethod: "UPI",
    paymentStatus: "completed",
    deliveryType: "instant",
    deliveryPartnerId: "rider_001",
    riderName: "Rahul Karmakar",
    createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    address: { line1: "Flat 3B, Sunshine Residency, Beltala Park", city: "Balurghat", pincode: "733101" }
  },
  {
    _id: "SF-ORD-1093",
    id: "SF-ORD-1093",
    customerId: "cust_002",
    customerName: "Megha Dutta",
    customerPhone: "+91 9800332211",
    shopId: "shop_002",
    shopName: "Sweet Moments Bakery & Confectionery",
    items: [
      { productName: "Dutch Chocolate Truffle Cake 500g", qty: 1, price: 450 },
      { productName: "Choco Chip Brownie Slice", qty: 2, price: 120 }
    ],
    netAmount: 590,
    subtotal: 570,
    status: "packed",
    paymentMethod: "Card",
    paymentStatus: "completed",
    deliveryType: "instant",
    createdAt: new Date(Date.now() - 32 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    address: { line1: "House 24, Thana More Road", city: "Balurghat", pincode: "733101" }
  },
  {
    _id: "SF-ORD-1092",
    id: "SF-ORD-1092",
    customerId: "cust_003",
    customerName: "Arjun Chakraborty",
    customerPhone: "+91 9434887766",
    shopId: "shop_003",
    shopName: "Arogya Pharma & Wellness",
    items: [
      { productName: "Dettol Antiseptic Liquid 500ml", qty: 1, price: 215 },
      { productName: "Band-Aid Washproof 20 Strips", qty: 2, price: 90 }
    ],
    netAmount: 325,
    subtotal: 305,
    status: "delivered",
    paymentMethod: "COD",
    paymentStatus: "completed",
    deliveryType: "instant",
    deliveryPartnerId: "rider_002",
    riderName: "Bikash Sarkar",
    createdAt: new Date(Date.now() - 120 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 95 * 60 * 1000).toISOString(),
    address: { line1: "15 Natunpara Main Road", city: "Balurghat", pincode: "733101" }
  }
];

export const mockUsers = [
  {
    _id: "cust_001",
    id: "cust_001",
    name: "Suman Banerjee",
    phone: "+91 9832441100",
    email: "suman.banerjee@gmail.com",
    role: "customer",
    status: "active",
    createdAt: "2026-08-10T12:00:00.000Z",
    isOnline: true,
    totalSpent: 4710,
    addresses: [{ id: "addr_1", label: "Home", line1: "Flat 3B, Sunshine Residency", city: "Balurghat", pincode: "733101" }]
  },
  {
    _id: "cust_002",
    id: "cust_002",
    name: "Megha Dutta",
    phone: "+91 9800332211",
    email: "megha.dutta@gmail.com",
    role: "customer",
    status: "active",
    createdAt: "2026-08-18T15:20:00.000Z",
    isOnline: false,
    totalSpent: 3590,
    addresses: [{ id: "addr_2", label: "Home", line1: "House 24, Thana More Road", city: "Balurghat", pincode: "733101" }]
  },
  {
    _id: "cust_003",
    id: "cust_003",
    name: "Arjun Chakraborty",
    phone: "+91 9434887766",
    email: "arjun.c@gmail.com",
    role: "customer",
    status: "active",
    createdAt: "2026-09-02T08:45:00.000Z",
    isOnline: true,
    totalSpent: 1820,
    addresses: [{ id: "addr_3", label: "Work", line1: "15 Natunpara Main Road", city: "Balurghat", pincode: "733101" }]
  }
];

export const mockRiders = [
  {
    _id: "rider_001",
    id: "rider_001",
    name: "Rahul Karmakar",
    phone: "+91 9733001122",
    status: "active",
    isAvailable: true,
    vehicle: "Bike",
    currentLat: 25.2215,
    currentLon: 88.7642,
    locationUpdatedAt: new Date().toISOString(),
    rating: 4.9,
    totalDeliveries: 342,
    activeOrders: 1,
    activeOrder: {
      id: "SF-ORD-1094",
      status: "out_for_delivery",
      totalAmount: 471,
      address: { line1: "Beltala Park, Balurghat" }
    }
  },
  {
    _id: "rider_002",
    id: "rider_002",
    name: "Bikash Sarkar",
    phone: "+91 9647223344",
    status: "active",
    isAvailable: true,
    vehicle: "Scooter",
    currentLat: 25.2280,
    currentLon: 88.7710,
    locationUpdatedAt: new Date().toISOString(),
    rating: 4.8,
    totalDeliveries: 289,
    activeOrders: 0,
    activeOrder: null
  },
  {
    _id: "rider_003",
    id: "rider_003",
    name: "Sourav Paul",
    phone: "+91 9593445566",
    status: "active",
    isAvailable: false,
    vehicle: "Electric Bike",
    currentLat: 25.2150,
    currentLon: 88.7580,
    locationUpdatedAt: new Date().toISOString(),
    rating: 4.7,
    totalDeliveries: 195,
    activeOrders: 0,
    activeOrder: null
  }
];

export const mockProducts = [
  {
    _id: "prod_001",
    id: "prod_001",
    name: "Aashirvaad Superior MP Sharbati Atta 5kg",
    description: "100% pure wheat grain flour, stone-ground traditional process.",
    price: 320,
    discountedPrice: 295,
    category: "grocery",
    shopId: "shop_001",
    shopName: "Bhavani Fresh Groceries & Staples",
    vendorName: "Bhavani Fresh Groceries & Staples",
    stock: 45,
    rating: 4.8,
    status: "active",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    barcode: "8901030382910",
    isLoose: false
  },
  {
    _id: "prod_002",
    id: "prod_002",
    name: "Dutch Chocolate Truffle Cake 500g",
    description: "Rich dark chocolate ganache, moist sponge, artisan chocolate curl.",
    price: 520,
    discountedPrice: 450,
    category: "bakery",
    shopId: "shop_002",
    shopName: "Sweet Moments Bakery & Confectionery",
    vendorName: "Sweet Moments Bakery & Confectionery",
    stock: 12,
    rating: 4.9,
    status: "active",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
    barcode: "8901030482921",
    isLoose: false
  },
  {
    _id: "prod_003",
    id: "prod_003",
    name: "Dettol Antiseptic Liquid 500ml",
    description: "Multipurpose antiseptic liquid for first aid, medical hygiene.",
    price: 240,
    discountedPrice: 215,
    category: "pharmacy",
    shopId: "shop_003",
    shopName: "Arogya Pharma & Wellness",
    vendorName: "Arogya Pharma & Wellness",
    stock: 80,
    rating: 4.7,
    status: "active",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    barcode: "8901030582932",
    isLoose: false
  }
];

export const mockCategories = [
  { _id: "cat_1", id: "grocery", name: "Groceries & Staples", slug: "grocery", icon: "🛒", status: "active", sortOrder: 1 },
  { _id: "cat_2", id: "vegetables", name: "Fresh Vegetables", slug: "vegetables", icon: "🥦", status: "active", sortOrder: 2 },
  { _id: "cat_3", id: "bakery", name: "Bakery & Cakes", slug: "bakery", icon: "🎂", status: "active", sortOrder: 3 },
  { _id: "cat_4", id: "pharmacy", name: "Medicines & Care", slug: "pharmacy", icon: "💊", status: "active", sortOrder: 4 },
  { _id: "cat_5", id: "sweets", name: "Traditional Sweets", slug: "sweets", icon: "🍬", status: "active", sortOrder: 5 }
];

export const mockShopTypes = [
  { _id: "st_1", name: "Grocery Store", slug: "grocery", defaultCommissionRate: 5, status: "active" },
  { _id: "st_2", name: "Bakery & Confectionery", slug: "bakery", defaultCommissionRate: 8, status: "active" },
  { _id: "st_3", name: "Pharmacy & Health", slug: "pharmacy", defaultCommissionRate: 4, status: "active" },
  { _id: "st_4", name: "Sweets & Dairy", slug: "sweets", defaultCommissionRate: 7, status: "active" }
];

export const mockCoupons = [
  { _id: "c_1", code: "WELCOME50", discountType: "percentage", discountValue: 50, maxDiscount: 100, minOrderAmount: 199, isActive: true },
  { _id: "c_2", code: "FREESHIP", discountType: "fixed", discountValue: 30, minOrderAmount: 299, isActive: true }
];

export const mockDeliveryCharges = {
  baseFee: 25,
  freeDeliveryThreshold: 299,
  surgeFee: 0,
  nightCharge: 15,
  rainSurge: false,
};

export const mockBanners = [
  {
    _id: "ban_001",
    title: "10-Minute Morning Delivery",
    subtitle: "Milk, bread, eggs & breakfast essentials at your door",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    redirectType: "category",
    redirectValue: "grocery",
    buttonText: "Order Now",
    isActive: true,
    displayOrder: 1,
    accentColor: "#6964fe",
    views: 1420,
    clicks: 340,
  },
  {
    _id: "ban_002",
    title: "Fresh Farm Organic Harvest",
    subtitle: "Directly from verified local growers",
    imageUrl: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=80",
    redirectType: "category",
    redirectValue: "vegetables",
    buttonText: "Shop Fresh",
    isActive: true,
    displayOrder: 2,
    accentColor: "#22c55e",
    views: 890,
    clicks: 210,
  }
];

export const mockSeasonalCampaign = {
  isActive: true,
  tabName: "Festival Season",
  theme: {
    backgroundColor: "#0d1117",
    textColor: "#f8fafc",
    accentColor: "#6964fe",
    searchPlaceholders: ["Search sweets", "Dry fruits gift pack", "Festive specials"],
    badgeTitle: "Special Festive Season",
    badgeSubtitle: "Mega Discounts Across Balurghat",
    badgeEmoji: "🎉",
    badgeBgColor: "#1e1b4b",
    badgeTextColor: "#a5b4fc",
    tabSubtitle: "Celebration Specials",
    tabEmoji: "✨"
  },
  layoutBlocks: []
};

export const mockCafeConfig = {
  isActive: true,
  theme: {
    backgroundColor: "#11141c",
    textColor: "#ffffff",
    accentColor: "#f97316"
  },
  layoutBlocks: []
};

export const mockAnalytics = {
  summary: {
    totalRevenue: 684250,
    totalOrders: 1428,
    avgOrderValue: 479,
    activeCustomers: 3820,
    growthRate: "+18.4%"
  },
  dailySales: [
    { date: "Oct 31", revenue: 21500, orders: 45 },
    { date: "Nov 01", revenue: 24200, orders: 52 },
    { date: "Nov 02", revenue: 23100, orders: 48 },
    { date: "Nov 03", revenue: 26800, orders: 58 },
    { date: "Nov 04", revenue: 25400, orders: 54 },
    { date: "Nov 05", revenue: 29100, orders: 63 },
    { date: "Nov 06", revenue: 31200, orders: 68 },
    { date: "Nov 07", revenue: 28400, orders: 61 }
  ],
  categoryBreakdown: [
    { name: "Grocery & Essentials", value: 345000, percentage: 50.4 },
    { name: "Bakery & Sweets", value: 168000, percentage: 24.5 },
    { name: "Medicines & Care", value: 112000, percentage: 16.4 },
    { name: "Fruits & Vegetables", value: 59250, percentage: 8.7 }
  ]
};

export const mockPincodes = [
  { pincode: "733101", area: "Balurghat Town Central", state: "West Bengal", isActive: true },
  { pincode: "733102", area: "Subhasgram & Beltala", state: "West Bengal", isActive: true },
  { pincode: "733103", area: "Khagail & Raghunathpur", state: "West Bengal", isActive: true }
];
