import React from 'react';
import { Leaf, Users, Heart, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg"
            alt="Garden"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Growing a Greener Future Together
            </h1>
            <p className="text-lg text-white/90">
              At Garden Paradise, we're passionate about helping people create their own piece of natural paradise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We believe that everyone deserves access to high-quality gardening supplies and the knowledge to create beautiful, sustainable gardens. Our mission is to provide premium products while promoting environmental stewardship and sustainable gardening practices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Leaf className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                  <span>Offering sustainable and eco-friendly gardening solutions</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                  <span>Building a community of passionate gardeners</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                  <span>Promoting the joy and benefits of gardening</span>
                </li>
                <li className="flex items-start">
                  <Globe className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                  <span>Supporting sustainable environmental practices</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg"
                alt="Our Mission"
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Quality</h3>
              <p className="text-gray-600">
                We carefully select each product to ensure the highest quality for our customers.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize eco-friendly products and sustainable practices.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a community of gardeners sharing knowledge and passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Thejasvini',
                role: 'Founder & CEO',
                image: 'https://img.freepik.com/premium-photo/professional-indian-female-headshots-business-corporate-women_203363-204.jpg?w=2000'
              },
              {
                name: 'Michael',
                role: 'Head of Operations',
                image: 'https://r2.erweima.ai/imgcompressed/img/compressed_bc3b9e2e7583717ff772a3ebc1faec48.webp'
              },
              {
                name: 'Reshma',
                role: 'Lead Horticulturist',
                image: 'https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-295.jpg?w=900'
              },
              {
                name: 'David ',
                role: 'Customer Success',
                image: 'https://th.bing.com/th/id/OIP.ibL_TgLW0aC7EaoHP-rdsQHaHa?rs=1&pid=ImgDetMain'
              }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-4 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;