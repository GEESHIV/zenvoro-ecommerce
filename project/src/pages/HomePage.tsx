import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import OrderModal from '../components/OrderModal';
import OrderSuccessModal from '../components/OrderSuccessModal';
import { getAllProducts } from '../data/products';
import type { Product } from '../types/Product';

const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<{
    orderId: string;
    productName: string;
    productPrice: number;
    customerName: string;
  } | null>(null);

  const allProducts = getAllProducts();
  const featuredProducts = allProducts.slice(0, 12); // Show first 12 products

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };

  const handleOrderSuccess = (details: {
    orderId: string;
    productName: string;
    productPrice: number;
    customerName: string;
  }) => {
    setOrderDetails(details);
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setOrderDetails(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              Premium Watch Collection
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Luxury timepieces that define elegance
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-4 md:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Featured Watches
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Handpicked luxury timepieces for every occasion
            </p>
          </div>
          
          {/* 2 columns on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrderClick={handleOrderClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Order Modal */}
      <OrderModal
        product={selectedProduct}
        isOpen={isOrderModalOpen}
        onClose={() => {
          setIsOrderModalOpen(false);
          setSelectedProduct(null);
        }}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Order Success Modal */}
      <OrderSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
        orderDetails={orderDetails}
      />
    </div>
  );
};

export default HomePage;