import type { Product } from '../types/Product';

const products: Product[] = [
  // Men's Watches
  {
    id: 'men-1',
    name: 'Classic Black Steel Watch',
    rating: 4.8,
    sellingPrice: 299,
    mrp: 599,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-2',
    name: 'Luxury Gold Chronograph',
    rating: 4.9,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-3',
    name: 'Sport Digital Watch',
    rating: 4.7,
    sellingPrice: 1999,
    mrp: 3999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-4',
    name: 'Executive Steel Watch',
    rating: 4.6,
    sellingPrice: 3499,
    mrp: 6999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-5',
    name: 'Vintage Brown Leather',
    rating: 4.8,
    sellingPrice: 2799,
    mrp: 5599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-6',
    name: 'Modern Minimalist Watch',
    rating: 4.7,
    sellingPrice: 2299,
    mrp: 4599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-7',
    name: 'Professional Black Watch',
    rating: 4.9,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-8',
    name: 'Casual Blue Dial Watch',
    rating: 4.5,
    sellingPrice: 1799,
    mrp: 3599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-9',
    name: 'Titanium Sports Watch',
    rating: 4.8,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-10',
    name: 'Classic Roman Numeral',
    rating: 4.6,
    sellingPrice: 2599,
    mrp: 5199,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-11',
    name: 'Luxury Rose Gold Watch',
    rating: 4.9,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-12',
    name: 'Military Style Watch',
    rating: 4.7,
    sellingPrice: 2199,
    mrp: 4399,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-13',
    name: 'Smart Hybrid Watch',
    rating: 4.8,
    sellingPrice: 4299,
    mrp: 8599,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-14',
    name: 'Elegant Silver Watch',
    rating: 4.6,
    sellingPrice: 3199,
    mrp: 6399,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-15',
    name: 'Carbon Fiber Watch',
    rating: 4.9,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-16',
    name: 'Retro Square Watch',
    rating: 4.5,
    sellingPrice: 1899,
    mrp: 3799,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-17',
    name: 'Pilot Aviation Watch',
    rating: 4.8,
    sellingPrice: 4799,
    mrp: 9599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-18',
    name: 'Skeleton Automatic Watch',
    rating: 4.7,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-19',
    name: 'Diving Professional Watch',
    rating: 4.9,
    sellingPrice: 6499,
    mrp: 12999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-20',
    name: 'GMT Dual Time Watch',
    rating: 4.8,
    sellingPrice: 5299,
    mrp: 10599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },

  // Women's Watches
  {
    id: 'women-1',
    name: 'Elegant Rose Gold Watch',
    rating: 4.8,
    sellingPrice: 2799,
    mrp: 5599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-2',
    name: 'Diamond Studded Watch',
    rating: 4.9,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-3',
    name: 'Minimalist Silver Watch',
    rating: 4.7,
    sellingPrice: 1999,
    mrp: 3999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-4',
    name: 'Vintage Leather Strap',
    rating: 4.6,
    sellingPrice: 2299,
    mrp: 4599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-5',
    name: 'Pearl White Dial Watch',
    rating: 4.8,
    sellingPrice: 3199,
    mrp: 6399,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-6',
    name: 'Fashion Bracelet Watch',
    rating: 4.7,
    sellingPrice: 2599,
    mrp: 5199,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-7',
    name: 'Crystal Bezel Watch',
    rating: 4.9,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-8',
    name: 'Delicate Chain Watch',
    rating: 4.5,
    sellingPrice: 1799,
    mrp: 3599,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-9',
    name: 'Luxury Gold Plated',
    rating: 4.8,
    sellingPrice: 4499,
    mrp: 8999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-10',
    name: 'Smart Fitness Watch',
    rating: 4.6,
    sellingPrice: 3299,
    mrp: 6599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-11',
    name: 'Ceramic White Watch',
    rating: 4.9,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-12',
    name: 'Butterfly Design Watch',
    rating: 4.7,
    sellingPrice: 2899,
    mrp: 5799,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-13',
    name: 'Floral Pattern Watch',
    rating: 4.8,
    sellingPrice: 2199,
    mrp: 4399,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-14',
    name: 'Mother of Pearl Dial',
    rating: 4.6,
    sellingPrice: 3799,
    mrp: 7599,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-15',
    name: 'Vintage Art Deco Watch',
    rating: 4.9,
    sellingPrice: 4799,
    mrp: 9599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-16',
    name: 'Mesh Band Watch',
    rating: 4.5,
    sellingPrice: 2399,
    mrp: 4799,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-17',
    name: 'Cocktail Party Watch',
    rating: 4.8,
    sellingPrice: 3599,
    mrp: 7199,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-18',
    name: 'Moonphase Luxury Watch',
    rating: 4.7,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-19',
    name: 'Tennis Bracelet Watch',
    rating: 4.9,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-20',
    name: 'Charm Bracelet Watch',
    rating: 4.8,
    sellingPrice: 2999,
    mrp: 5999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },

  // Kids Watches
  {
    id: 'kids-1',
    name: 'Cartoon Character Watch',
    rating: 4.8,
    sellingPrice: 999,
    mrp: 1999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-2',
    name: 'Digital Sports Watch',
    rating: 4.7,
    sellingPrice: 1299,
    mrp: 2599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-3',
    name: 'Colorful Silicone Watch',
    rating: 4.6,
    sellingPrice: 799,
    mrp: 1599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-4',
    name: 'Learning Time Watch',
    rating: 4.9,
    sellingPrice: 1199,
    mrp: 2399,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-5',
    name: 'Superhero Theme Watch',
    rating: 4.8,
    sellingPrice: 1099,
    mrp: 2199,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-6',
    name: 'Princess Pink Watch',
    rating: 4.7,
    sellingPrice: 899,
    mrp: 1799,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-7',
    name: 'Glow in Dark Watch',
    rating: 4.8,
    sellingPrice: 1399,
    mrp: 2799,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-8',
    name: 'Animal Design Watch',
    rating: 4.6,
    sellingPrice: 999,
    mrp: 1999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-9',
    name: 'Smart Kids Watch',
    rating: 4.9,
    sellingPrice: 2499,
    mrp: 4999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-10',
    name: 'Waterproof Kids Watch',
    rating: 4.7,
    sellingPrice: 1599,
    mrp: 3199,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-11',
    name: 'Educational Watch',
    rating: 4.8,
    sellingPrice: 1299,
    mrp: 2599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-12',
    name: 'Space Theme Watch',
    rating: 4.6,
    sellingPrice: 1199,
    mrp: 2399,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-13',
    name: 'Music Player Watch',
    rating: 4.9,
    sellingPrice: 1999,
    mrp: 3999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-14',
    name: 'Camera Kids Watch',
    rating: 4.7,
    sellingPrice: 2199,
    mrp: 4399,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-15',
    name: 'GPS Tracker Watch',
    rating: 4.8,
    sellingPrice: 2799,
    mrp: 5599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-16',
    name: 'Puzzle Game Watch',
    rating: 4.6,
    sellingPrice: 1499,
    mrp: 2999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-17',
    name: 'Voice Recorder Watch',
    rating: 4.7,
    sellingPrice: 1799,
    mrp: 3599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-18',
    name: 'Fitness Tracker Kids',
    rating: 4.8,
    sellingPrice: 2299,
    mrp: 4599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-19',
    name: 'Alarm Clock Watch',
    rating: 4.5,
    sellingPrice: 999,
    mrp: 1999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-20',
    name: 'LED Light Watch',
    rating: 4.7,
    sellingPrice: 1399,
    mrp: 2799,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },

  // Couple Watches
  {
    id: 'couple-1',
    name: 'Matching His & Hers Set',
    rating: 4.9,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-2',
    name: 'Romantic Rose Gold Pair',
    rating: 4.8,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-3',
    name: 'Classic Black & White Set',
    rating: 4.7,
    sellingPrice: 3499,
    mrp: 6999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-4',
    name: 'Minimalist Couple Watch',
    rating: 4.6,
    sellingPrice: 2999,
    mrp: 5999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-5',
    name: 'Luxury Diamond Pair',
    rating: 4.9,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-6',
    name: 'Vintage Leather Couple',
    rating: 4.8,
    sellingPrice: 3299,
    mrp: 6599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-7',
    name: 'Smart Couple Watch Set',
    rating: 4.7,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-8',
    name: 'Heart Design Couple',
    rating: 4.8,
    sellingPrice: 2799,
    mrp: 5599,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-9',
    name: 'Anniversary Special Set',
    rating: 4.9,
    sellingPrice: 4499,
    mrp: 8999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-10',
    name: 'Infinity Symbol Pair',
    rating: 4.6,
    sellingPrice: 3799,
    mrp: 7599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-11',
    name: 'Magnetic Couple Watch',
    rating: 4.8,
    sellingPrice: 3599,
    mrp: 7199,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-12',
    name: 'Moonphase Couple Set',
    rating: 4.7,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-13',
    name: 'Engraved Name Couple',
    rating: 4.9,
    sellingPrice: 4299,
    mrp: 8599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-14',
    name: 'Ceramic Couple Watch',
    rating: 4.6,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-15',
    name: 'Titanium Couple Set',
    rating: 4.8,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-16',
    name: 'Solar Powered Couple',
    rating: 4.7,
    sellingPrice: 5299,
    mrp: 10599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-17',
    name: 'Waterproof Couple Set',
    rating: 4.8,
    sellingPrice: 3899,
    mrp: 7799,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-18',
    name: 'Skeleton Dial Couple',
    rating: 4.9,
    sellingPrice: 6499,
    mrp: 12999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-19',
    name: 'Chronograph Couple Set',
    rating: 4.7,
    sellingPrice: 5799,
    mrp: 11599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-20',
    name: 'Limited Edition Couple',
    rating: 4.9,
    sellingPrice: 7499,
    mrp: 14999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },

  // Classic Watches
  {
    id: 'classic-1',
    name: 'Heritage Pocket Watch',
    rating: 4.9,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-2',
    name: 'Vintage Roman Dial',
    rating: 4.8,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-3',
    name: 'Art Deco Masterpiece',
    rating: 4.7,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-4',
    name: 'Grandfather Clock Style',
    rating: 4.6,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-5',
    name: 'Victorian Era Watch',
    rating: 4.9,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-6',
    name: 'Antique Gold Watch',
    rating: 4.8,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-7',
    name: 'Mechanical Movement',
    rating: 4.7,
    sellingPrice: 4499,
    mrp: 8999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-8',
    name: 'Heirloom Collection',
    rating: 4.8,
    sellingPrice: 6499,
    mrp: 12999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-9',
    name: 'Baroque Style Watch',
    rating: 4.9,
    sellingPrice: 8999,
    mrp: 17999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-10',
    name: 'Renaissance Timepiece',
    rating: 4.6,
    sellingPrice: 3799,
    mrp: 7599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-11',
    name: 'Colonial Era Watch',
    rating: 4.8,
    sellingPrice: 5299,
    mrp: 10599,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-12',
    name: 'Grandfather Heritage',
    rating: 4.7,
    sellingPrice: 4799,
    mrp: 9599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-13',
    name: 'Vintage Skeleton Watch',
    rating: 4.9,
    sellingPrice: 7499,
    mrp: 14999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-14',
    name: 'Antique Chain Watch',
    rating: 4.6,
    sellingPrice: 3599,
    mrp: 7199,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-15',
    name: 'Museum Collection',
    rating: 4.8,
    sellingPrice: 9999,
    mrp: 19999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-16',
    name: 'Handcrafted Classic',
    rating: 4.7,
    sellingPrice: 4299,
    mrp: 8599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-17',
    name: 'Vintage Moonphase',
    rating: 4.9,
    sellingPrice: 8499,
    mrp: 16999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-18',
    name: 'Retro Chronometer',
    rating: 4.6,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-19',
    name: 'Traditional Crafted',
    rating: 4.8,
    sellingPrice: 5799,
    mrp: 11599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-20',
    name: 'Legacy Timekeeper',
    rating: 4.9,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },

  // Party Wear Watches
  {
    id: 'party-1',
    name: 'Diamond Studded Luxury',
    rating: 4.9,
    sellingPrice: 9999,
    mrp: 19999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-2',
    name: 'Crystal Bezel Glamour',
    rating: 4.8,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-3',
    name: 'Gold Plated Elegance',
    rating: 4.7,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-4',
    name: 'Cocktail Party Special',
    rating: 4.6,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-5',
    name: 'Sparkling Night Watch',
    rating: 4.9,
    sellingPrice: 8999,
    mrp: 17999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-6',
    name: 'Gala Event Timepiece',
    rating: 4.8,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-7',
    name: 'Red Carpet Ready',
    rating: 4.7,
    sellingPrice: 7499,
    mrp: 14999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-8',
    name: 'Champagne Gold Watch',
    rating: 4.8,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-9',
    name: 'Midnight Glamour',
    rating: 4.9,
    sellingPrice: 8499,
    mrp: 16999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-10',
    name: 'Festive Collection',
    rating: 4.6,
    sellingPrice: 4499,
    mrp: 8999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-11',
    name: 'Celebration Special',
    rating: 4.8,
    sellingPrice: 6499,
    mrp: 12999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-12',
    name: 'Dazzling Diamonds',
    rating: 4.7,
    sellingPrice: 9499,
    mrp: 18999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-13',
    name: 'Luxury Evening Watch',
    rating: 4.9,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-14',
    name: 'Glittering Gold',
    rating: 4.6,
    sellingPrice: 5299,
    mrp: 10599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-15',
    name: 'Premium Party Piece',
    rating: 4.8,
    sellingPrice: 8799,
    mrp: 17599,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-16',
    name: 'Shimmering Silver',
    rating: 4.7,
    sellingPrice: 4799,
    mrp: 9599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-17',
    name: 'Starlight Special',
    rating: 4.9,
    sellingPrice: 9299,
    mrp: 18599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-18',
    name: 'Elegant Evening',
    rating: 4.6,
    sellingPrice: 5799,
    mrp: 11599,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-19',
    name: 'Glamorous Night',
    rating: 4.8,
    sellingPrice: 7299,
    mrp: 14599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-20',
    name: 'VIP Collection',
    rating: 4.9,
    sellingPrice: 10999,
    mrp: 21999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  }
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};