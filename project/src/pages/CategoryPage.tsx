import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import OrderModal from '../components/OrderModal';
import OrderSuccessModal from '../components/OrderSuccessModal';
import { getProductsByCategory } from '../data/products';
import type { Product } from '../types/Product';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<{
    orderId: string;
    productName: string;
    productPrice: number;
    customerName: string;
  } | null>(null);

  const products = category ? getProductsByCategory(category) : [];

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

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'men':
        return 'Men\'s Watches';
      case 'women':
        return 'Women\'s Watches';
      case 'kids':
        return 'Kids\' Watches';
      case 'couple':
        return 'Couple Watches';
      case 'classic':
        return 'Classic Collection';
      case 'party-wear':
        return 'Party Wear Collection';
      default:
        return 'Products';
    }
  };

  if (!category || products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The requested category does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {getCategoryTitle(category)}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Discover our premium collection of {getCategoryTitle(category).toLowerCase()}
          </p>
        </div>
      </div>

      {/* Products Grid - 2 columns layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {/* Product 1 */}
          <ProductCard
            product={products[0]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 2 */}
          <ProductCard
            product={products[1]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 3 */}
          <ProductCard
            product={products[2]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 4 */}
          <ProductCard
            product={products[3]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 5 */}
          <ProductCard
            product={products[4]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 6 */}
          <ProductCard
            product={products[5]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 7 */}
          <ProductCard
            product={products[6]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 8 */}
          <ProductCard
            product={products[7]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 9 */}
          <ProductCard
            product={products[8]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 10 */}
          <ProductCard
            product={products[9]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 11 */}
          <ProductCard
            product={products[10]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 12 */}
          <ProductCard
            product={products[11]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 13 */}
          <ProductCard
            product={products[12]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 14 */}
          <ProductCard
            product={products[13]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 15 */}
          <ProductCard
            product={products[14]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 16 */}
          <ProductCard
            product={products[15]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 17 */}
          <ProductCard
            product={products[16]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 18 */}
          <ProductCard
            product={products[17]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 19 */}
          <ProductCard
            product={products[18]}
            onOrderClick={handleOrderClick}
          />
          
          {/* Product 20 */}
          <ProductCard
            product={products[19]}
            onOrderClick={handleOrderClick}
          />
        </div>
      </div>

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

export default CategoryPage;