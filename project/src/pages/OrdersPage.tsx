import React, { useState, useEffect } from 'react';
import { Package, X, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { getAllOrders, cancelOrder } from '../utils/orderUtils';
import toast from 'react-hot-toast';
import type { Order } from '../types/Product';

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    setIsLoading(true);
    try {
      const allOrders = await getAllOrders();
      setOrders(allOrders);
    } catch (error) {
      console.error('Error loading orders:', error);
      toast.error('Failed to load orders. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelOrder = async (orderId: string) => {
    if (!confirm('Are you sure you want to cancel this order?')) {
      return;
    }

    try {
      await cancelOrder(orderId);
      toast.success('Order cancelled successfully');
      
      // Refresh orders
      await loadOrders();
    } catch (error) {
      console.error('Error cancelling order:', error);
      toast.error('Failed to cancel order. Please try again.');
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Orders
          </h1>
          <p className="text-lg text-gray-600">
            Track and manage all your orders
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Orders Yet
              </h3>
              <p className="text-gray-600 mb-6">
                You haven't placed any orders yet. Start shopping to see your orders here!
              </p>
              <a
                href="/"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                <Package className="w-5 h-5 mr-2" />
                Start Shopping
              </a>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  {/* Order Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Order #{order.id}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(order.timestamp)}
                        </div>
                        <div className="flex items-center">
                          <Package className="w-4 h-4 mr-1" />
                          Cash on Delivery
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                        order.status === 'placed' 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-red-100 text-red-800 border border-red-200'
                      }`}>
                        {order.status === 'placed' ? '✅ Order Placed' : '❌ Cancelled'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Product Info */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-gray-900 mb-3">Product Details</h4>
                      <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                        <img
                          src={order.productImage}
                          alt={order.productName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h5 className="font-semibold text-gray-900 text-sm">
                            {order.productName}
                          </h5>
                          <p className="text-lg font-bold text-gray-900">
                            ₹{order.productPrice.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Customer Details */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-gray-900 mb-3">Customer Details</h4>
                      <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center text-sm">
                          <span className="font-medium text-gray-700 w-16">Name:</span>
                          <span className="text-gray-900">{order.customerName}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-gray-900">{order.customerPhone}</span>
                        </div>
                        {order.customerEmail && (
                          <div className="flex items-center text-sm">
                            <Mail className="w-4 h-4 text-gray-500 mr-2" />
                            <span className="text-gray-900">{order.customerEmail}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Delivery Details */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-gray-900 mb-3">Delivery Details</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start text-sm">
                          <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                          <div>
                            <p className="text-gray-900">{order.deliveryAddress}</p>
                            <p className="text-gray-600 mt-1">Pincode: {order.pincode}</p>
                            <p className="text-green-600 font-medium mt-2">
                              Expected delivery: 7 days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  {order.status === 'placed' && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          <p>💰 <strong>Payment:</strong> Cash on Delivery</p>
                          <p>📱 You will receive WhatsApp & email updates</p>
                        </div>
                        <button
                          onClick={() => handleCancelOrder(order.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 flex items-center"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel Order
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;