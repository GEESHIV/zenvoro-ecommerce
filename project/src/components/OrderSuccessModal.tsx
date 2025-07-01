import React, { useEffect } from 'react';
import { CheckCircle, ShoppingBag, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    orderId: string;
    productName: string;
    productPrice: number;
    customerName: string;
  } | null;
}

const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ isOpen, onClose, orderDetails }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !orderDetails) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-sm w-full overflow-hidden shadow-2xl">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-2" />
          <h2 className="text-lg font-bold mb-1">🎉 Order Placed!</h2>
          <p className="text-green-100 text-sm">Thank you for your order</p>
        </div>

        {/* Order Details */}
        <div className="p-4">
          <div className="text-center mb-4">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              Hi {orderDetails.customerName}!
            </h3>
            <p className="text-gray-600 text-xs">
              Order #{orderDetails.orderId} confirmed
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-700">Product:</span>
                <span className="text-xs text-gray-900 text-right flex-1 ml-2">{orderDetails.productName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-700">Amount:</span>
                <span className="text-xs font-bold text-gray-900">₹{orderDetails.productPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-700">Payment:</span>
                <span className="text-xs text-green-600 font-medium">Cash on Delivery</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="flex items-start space-x-2">
              <Package className="w-4 h-4 text-blue-600 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-blue-800 mb-1">What's Next?</h4>
                <ul className="text-xs text-blue-700 space-y-0.5">
                  <li>• WhatsApp & email notifications</li>
                  <li>• Delivery within 7 days</li>
                  <li>• Track in "My Orders"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Continue Shopping
            </button>
            
            <Link
              to="/orders"
              onClick={onClose}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
            >
              <Package className="w-4 h-4 mr-2" />
              View My Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;