import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Star, Truck, ShieldCheck } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Get featured products (first 4 products for demo)
  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      id: 'seeds',
      name: 'Seeds',
      description: 'Organic and heirloom seed varieties',
      image: 'https://allianceofhope.org/wp-content/uploads/2021/01/AdobeStock_246697517-Cropped-to-GR-scaled.jpg',
    },
    {
      id: 'plants',
      name: 'Plants',
      description: 'Ready-to-plant flowers, herbs, and vegetables',
      image: 'https://www.hill-interiors.com/images/giant/20132.jpg',
    },
    {
      id: 'tools',
      name: 'Tools',
      description: 'High-quality gardening tools and equipment',
      image: 'https://th.bing.com/th/id/OIP.UQ_A7yQVnMyEQ9NyGDgXZgAAAA?rs=1&pid=ImgDetMain',
    },
    {
      id: 'fertilizers',
      name: 'Fertilizers',
      description: 'Organic plant food and soil amendments',
      image: 'https://www.gardendesign.com/pictures/images/900x705Max/site_3/applying-fertilizer-blue-trowel-fertilizing-tomato-plant-shutterstock-com_15275.jpg',
    },
    {
      id: 'decor',
      name: 'Garden Decor',
      description: 'Beautiful accents for your outdoor space',
      image: 'https://i.pinimg.com/736x/e4/01/81/e40181b8ba5b49841d48555c2dea6ca6.jpg',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://wallpapers.com/images/hd/gardening-tools-and-flowers-in-backyard-vwfgb3uiyxku2rgh.jpg"
            alt="Garden"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container-custom relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Grow Your Perfect Garden
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Premium seeds, plants, and gardening supplies for enthusiasts and beginners alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Shop All Products
              </Link>
              <Link to="/products/seeds" className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                Explore Seeds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of gardening essentials, from premium seeds to stylish garden décor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="group card overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl font-medium mb-1">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular gardening essentials, hand-selected for quality and value.
            </p>
          </div>

          <ProductGrid products={featuredProducts} />

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected products that meet our high standards for quality and sustainability.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick delivery to your doorstep, with free shipping on orders over $50.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                Not satisfied? Return within 30 days for a full refund, no questions asked.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Get gardening advice from our team of experienced horticulturists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Join Our Garden Community</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for gardening tips, seasonal guides, and exclusive offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button type="submit" className="btn-primary py-3 whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to receive marketing emails from us. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;