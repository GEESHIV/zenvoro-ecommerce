export interface Product {
  id: string;
  name: string;
  rating: number;
  sellingPrice: number;
  mrp: number;
  images: string[];
  category: string;
}

export interface Order {
  id: string;
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  deliveryAddress: string;
  pincode: string;
  timestamp: number;
  status: 'placed' | 'cancelled';
}