 const ProductData = [
  {
    id: 1,
    name: "Apple Watch Series 10",
    brand: "ROLEX",
    category: "watch",
    price: 399,
    originalprice: 429,
    discount: 7,
    rating: 4,
    reviews: 1250,
    stock: 24,

    imgs: [
      "https://i.pinimg.com/1200x/bc/b5/ba/bcb5babbbb0d1cc1f537abb98677bccd.jpg",
      "https://i.pinimg.com/1200x/02/e0/a9/02e0a9878470f109a4f8a419e9f43e85.jpg",
      "https://i.pinimg.com/1200x/97/38/9f/97389f4cfb3849e1965933d38253d0ac.jpg"
    ],

    description:
      "Advanced Apple smartwatch with health tracking, fitness features, and a bright Retina display.",

    specification: {
      processor: "S10 SiP",
      display: "46mm Retina OLED",
      storage: "64GB",
      battery: "Up to 18 hours",
      connectivity: "GPS, Wi-Fi, Bluetooth",
      operatingSystem: "watchOS"
    },

    colors: ["Jet Black", "Rose Gold", "Silver"],
    featured: true,
    flashsale: true,
    bestseller: true,
    newarrival: true
  },

  {
    id: 2,
    name: "Galaxy Watch Ultra",
    brand: "ROLEX",
    category: "watch",
    price: 549,
    originalprice: 649,
    discount: 15,
    rating: 4.5,
    reviews: 892,
    stock: 18,

    imgs: [
      "https://i.pinimg.com/736x/a4/63/b0/a463b088c22a19950371a1b610f23a37.jpg",
      "https://i.pinimg.com/1200x/33/c3/19/33c3191215c2b050755bb0951b19ffb6.jpg",
      "https://i.pinimg.com/736x/b0/33/1b/b0331b6dbd26671b7898ed0d75ea8806.jpg",
    ],

    description:
      "Premium Samsung smartwatch designed for fitness, outdoor adventures, and everyday smart features.",

    specification: {
      processor: "Exynos W1000",
      display: "1.5-inch Super AMOLED",
      storage: "32GB",
      battery: "Up to 80 hours",
      connectivity: "Bluetooth, Wi-Fi, LTE",
      operatingSystem: "Wear OS"
    },

    colors: ["Titanium Gray", "Titanium White", "Titanium Silver"],
    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: true
  },

  {
    id: 3,
    name: "Pixel Watch 3",
    brand: "ROLEX",
    category: "watch",
    price: 349,
    originalprice: 399,
    discount: 13,
    rating: 4,
    reviews: 674,
    stock: 31,

    imgs: [
      "https://i.pinimg.com/736x/4f/3e/ba/4f3eba1082a5d2195eb573074328d065.jpg",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
      "https://images.unsplash.com/photo-1617625802912-cde586faf331"
    ],

    description:
      "Elegant Google smartwatch with advanced fitness tracking, heart-rate monitoring, and Google services.",

    specification: {
      processor: "Qualcomm SW5100",
      display: "41mm Actua AMOLED",
      storage: "32GB",
      battery: "Up to 24 hours",
      connectivity: "Bluetooth, Wi-Fi, LTE",
      operatingSystem: "Wear OS"
    },

    colors: ["Obsidian", "Porcelain", "Hazel"],
    featured: true,
    flashsale: true,
    bestseller: false,
    newarrival: true
  },

  {
    id: 4,
    name: "Apple Watch Ultra 2",
    brand: "ROLEX",
    category: "watch",
    price: 749,
    originalprice: 799,
    discount: 6,
    rating: 4,
    reviews: 1432,
    stock: 12,

    imgs: [
      "https://i.pinimg.com/1200x/e8/ef/e1/e8efe19bcd58444c61db42f1afb863f3.jpg",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26"
    ],

    description:
      "Rugged Apple Watch built for demanding workouts, outdoor adventures, diving, and endurance activities.",

    specification: {
      processor: "S9 SiP",
      display: "49mm Retina OLED",
      storage: "64GB",
      battery: "Up to 36 hours",
      connectivity: "GPS, Wi-Fi, Bluetooth, LTE",
      operatingSystem: "watchOS"
    },

    colors: ["Natural Titanium"],
    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: false
  },

  {
    id: 5,
    name: "Garmin Fenix 8",
    brand: "ROLEX",
    category: "Watch",
    price: 999,
    originalprice: 1099,
    discount: 9,
    rating: 4,
    reviews: 543,
    stock: 9,

    imgs: [
      "https://i.pinimg.com/1200x/a7/9d/95/a79d956d2255b1ecbbaf40d25803f0f1.jpg",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
    ],

    description:
      "High-performance multisport GPS watch with advanced training, navigation, and health monitoring.",

    specification: {
      processor: "Garmin Proprietary",
      display: "1.4-inch AMOLED",
      storage: "32GB",
      battery: "Up to 29 days",
      connectivity: "GPS, Bluetooth, Wi-Fi",
      operatingSystem: "Garmin OS"
    },

    colors: ["Black", "Titanium", "Slate"],
    featured: true,
    flashsale: false,
    bestseller: false,
    newarrival: true
  },

  {
    id: 6,
    name: "Casio G-Shock GA-2100",
    brand: "ROLEX",
    category: "Watch",
    price: 99,
    originalprice: 120,
    discount: 18,
    rating: 4.7,
    reviews: 2187,
    stock: 45,

    imgs: [
      "https://i.pinimg.com/1200x/13/6c/8c/136c8c73428ef6f47af4c1b983165827.jpg",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
    ],

    description:
      "Iconic G-Shock analog-digital watch featuring shock resistance, a lightweight design, and rugged construction.",

    specification: {
      processor: "Quartz Movement",
      display: "Analog-Digital",
      storage: "N/A",
      battery: "Approximately 3 years",
      connectivity: "None",
      operatingSystem: "N/A"
    },

    colors: ["Black", "Black/Red", "White"],
    featured: false,
    flashsale: true,
    bestseller: true,
    newarrival: false
  },

  {
    id: 7,
    name: "Seiko 5 Sports",
    brand: "ROLEX",
    category: "Watch",
    price: 295,
    originalprice: 350,
    discount: 16,
    rating: 4,
    reviews: 936,
    stock: 16,

    imgs: [
      "https://i.pinimg.com/1200x/01/8e/a3/018ea3d9833d2cea70d93b0f5d348c1e.jpg",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
    ],

    description:
      "Classic automatic mechanical watch combining a sporty design with reliable Seiko movement.",

    specification: {
      processor: "N/A",
      display: "Automatic Analog",
      storage: "N/A",
      battery: "Automatic Movement",
      connectivity: "None",
      operatingSystem: "N/A"
    },

    colors: ["Black", "Blue", "Green"],
    featured: false,
    flashsale: false,
    bestseller: true,
    newarrival: false
  },

  {
    id: 8,
    name: "Rolex Submariner",
    brand: "ROLEX",
    category: "Luxury Watch",
    price: 12500,
    originalprice: 13500,
    discount: 7,
    rating: 4.9,
    reviews: 318,
    stock: 4,

    imgs: [
      "https://i.pinimg.com/736x/7d/80/f5/7d80f559d79abffb41f7d8fd30d484c1.jpg",
      "https://i.pinimg.com/1200x/87/1c/0b/871c0b4a9fba5da19a0779ba5e435bb9.jpg",
      "https://i.pinimg.com/736x/25/a3/7f/25a37fa57c3db1195c1f8aaf32469f83.jpg"
    ],

    description:
      "Luxury dive watch known for its timeless design, precision movement, and exceptional water resistance.",

    specification: {
      processor: "Calibre 3230",
      display: "41mm Oystersteel",
      storage: "N/A",
      battery: "Approximately 70 hours",
      connectivity: "None",
      operatingSystem: "N/A"
    },

    colors: ["Black", "Steel", "Blue"],
    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: false
  },

  {
    id: 9,
    name: "Fossil Gen 6",
    brand: "ROLEX",
    category: "watch",
    price: 179,
    originalprice: 299,
    discount: 40,
    rating: 4,
    reviews: 1124,
    stock: 27,

    imgs: [
      "https://i.pinimg.com/736x/3a/38/ff/3a38ffb66351dba1c389911937681bc4.jpg",
      "https://i.pinimg.com/736x/26/8b/66/268b66a5f85534ac46c66865861f2361.jpg",
      "https://i.pinimg.com/736x/2f/4f/09/2f4f09893547b9bcbd90ecd8b5f3319f.jpg",
    ],

    description:
      "Stylish Wear OS smartwatch with health tracking, notifications, customizable watch faces, and fast charging.",

    specification: {
      processor: "Snapdragon Wear 4100+",
      display: "1.28-inch AMOLED",
      storage: "8GB",
      battery: "Up to 24 hours",
      connectivity: "Bluetooth, Wi-Fi",
      operatingSystem: "Wear OS"
    },

    colors: ["Black", "Silver", "Rose Gold"],
    featured: false,
    flashsale: true,
    bestseller: false,
    newarrival: false
  },

  {
    id: 10,
    name: "Tissot PRX Powermatic 80",
    brand: "ROLEX",
    category: "Watch",
    price: 695,
    originalprice: 775,
    discount: 10,
    rating: 4,
    reviews: 761,
    stock: 11,

    imgs: [
      "https://i.pinimg.com/1200x/e2/1c/d4/e21cd4a7c794d86c8e35d5657e26cba5.jpg",
      "https://i.pinimg.com/1200x/be/5a/a1/be5aa1c82e9f5fbd20ba6c5e6eb440eb.jpg",
      "https://i.pinimg.com/736x/44/0a/13/440a1347597d314891d325698f75ed16.jpg"
    ],

    description:
      "Elegant Swiss automatic watch featuring an integrated bracelet, textured dial, and impressive power reserve.",

    specification: {
      processor: "Powermatic 80",
      display: "40mm Sapphire Crystal",
      storage: "N/A",
      battery: "Up to 80 hours",
      connectivity: "None",
      operatingSystem: "N/A"
    },

    colors: ["Blue", "Black", "Green"],
    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: true
  }
];
export default ProductData;