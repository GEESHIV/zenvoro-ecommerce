import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Watch } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const categoryNavigation = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/category/men' },
    { name: 'Women', href: '/category/women' },
    { name: 'Kids', href: '/category/kids' },
    { name: 'Couple', href: '/category/couple' },
    { name: 'Classic', href: '/category/classic' },
    { name: 'Party Wear', href: '/category/party-wear' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Watch className="w-8 h-8 text-black" />
            <span className="text-xl md:text-2xl font-bold text-black">Zenvoro</span>
          </Link>

          {/* Desktop Navigation - All Categories */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6">
            {categoryNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 px-2 xl:px-3 py-2 rounded-md ${
                  isActive(item.href)
                    ? 'text-black bg-gray-100'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop My Orders Link */}
          <div className="hidden lg:flex">
            <Link
              to="/orders"
              className={`text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-md border ${
                isActive('/orders')
                  ? 'bg-black text-white border-black'
                  : 'text-black border-black hover:bg-black hover:text-white'
              }`}
            >
              My Orders
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Only My Orders */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-2">
              <Link
                to="/orders"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 text-base font-medium transition-colors duration-200 ${
                  isActive('/orders')
                    ? 'text-black bg-gray-100'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                My Orders
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Category Navigation Bar */}
      <div className="lg:hidden bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex overflow-x-auto py-2 space-x-1 scrollbar-hide">
            {categoryNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex-shrink-0 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-black hover:bg-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;