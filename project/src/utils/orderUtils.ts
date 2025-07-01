import { ref, push, get, query, orderByChild, equalTo, update } from 'firebase/database';
import { database } from '../firebase/config';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import type { Order } from '../types/Product';

// Initialize EmailJS with a placeholder key
try {
  emailjs.init('placeholder-key');
} catch (error) {
  console.log('EmailJS not configured');
}

export const generateOrderId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'ZEN';
  for (let i = 0; i < 9; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const saveOrder = async (orderData: Omit<Order, 'id' | 'timestamp' | 'status'>): Promise<string> => {
  try {
    const orderId = generateOrderId();
    const order: Order = {
      ...orderData,
      id: orderId,
      timestamp: Date.now(),
      status: 'placed'
    };

    // Save to localStorage (primary storage for now)
    const existingOrders = JSON.parse(localStorage.getItem('zenvoro_orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('zenvoro_orders', JSON.stringify(existingOrders));

    // Send notifications asynchronously (don't wait for them)
    setTimeout(() => {
      sendNotifications(order);
    }, 100);

    return orderId;
  } catch (error) {
    console.error('Error saving order:', error);
    throw new Error('Failed to place order. Please try again.');
  }
};

const sendNotifications = async (order: Order) => {
  try {
    // Simulate sending notifications
    console.log('📧 Sending admin email notification for order:', order.id);
    console.log('📱 Sending WhatsApp notification to:', order.customerPhone);
    
    if (order.customerEmail) {
      console.log('📧 Sending customer email to:', order.customerEmail);
    }

    // In a real application, you would integrate with:
    // - EmailJS or similar service for emails
    // - WhatsApp Business API for WhatsApp messages
    // - SMS service for SMS notifications
    
    // For now, we'll just log the notifications
    const adminEmailContent = `
🎉 NEW ORDER RECEIVED

Order ID: ${order.id}
Customer: ${order.customerName}
Phone: ${order.customerPhone}
Email: ${order.customerEmail || 'Not provided'}
Product: ${order.productName}
Price: ₹${order.productPrice.toLocaleString()}
Address: ${order.deliveryAddress}
Pincode: ${order.pincode}
Time: ${new Date(order.timestamp).toLocaleString()}

Please process this order within 24 hours.
    `;

    const customerWhatsAppMessage = `
🎉 *Order Confirmed - Zenvoro*

Hi ${order.customerName}! 👋

Your order has been placed successfully! 

📋 *Order Details:*
• Order ID: ${order.id}
• Product: ${order.productName}
• Amount: ₹${order.productPrice.toLocaleString()}
• Payment: Cash on Delivery 💰

📍 *Delivery Address:*
${order.deliveryAddress}
Pincode: ${order.pincode}

⏰ *Delivery Timeline:*
Your order will be delivered within 7 days

📞 *Support:*
For any queries, contact us at zenvoropremium@gmail.com

Thank you for choosing Zenvoro! 🕰️✨
    `;

    console.log('Admin Email Content:', adminEmailContent);
    console.log('Customer WhatsApp Message:', customerWhatsAppMessage);

  } catch (error) {
    console.error('Error sending notifications:', error);
    // Don't throw error here as order is already saved
  }
};

export const getAllOrders = async (): Promise<Order[]> => {
  try {
    // Get all orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem('zenvoro_orders') || '[]');
    return existingOrders.sort((a: Order, b: Order) => b.timestamp - a.timestamp);
    
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const getOrdersByPhone = async (phone: string): Promise<Order[]> => {
  try {
    // Get orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem('zenvoro_orders') || '[]');
    const userOrders = existingOrders.filter((order: Order) => order.customerPhone === phone);
    return userOrders.sort((a: Order, b: Order) => b.timestamp - a.timestamp);
    
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const cancelOrder = async (orderId: string): Promise<void> => {
  try {
    // Update order in localStorage
    const existingOrders = JSON.parse(localStorage.getItem('zenvoro_orders') || '[]');
    const updatedOrders = existingOrders.map((order: Order) => 
      order.id === orderId ? { ...order, status: 'cancelled' } : order
    );
    localStorage.setItem('zenvoro_orders', JSON.stringify(updatedOrders));
    
    console.log(`Order ${orderId} has been cancelled`);
  } catch (error) {
    console.error('Error cancelling order:', error);
    throw new Error('Failed to cancel order. Please try again.');
  }
};