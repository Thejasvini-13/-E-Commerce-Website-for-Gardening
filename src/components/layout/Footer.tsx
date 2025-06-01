import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-semibold text-gray-900">Garden Paradise</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Premium gardening supplies for plant enthusiasts, delivered with care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/seeds" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Seeds
                </Link>
              </li>
              <li>
                <Link to="/products/plants" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Plants
                </Link>
              </li>
              <li>
                <Link to="/products/tools" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/products/fertilizers" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link to="/products/decor" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Garden Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Garden Paradise. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;