'use client';

import { Phone, Shield, Clock, Star, Award, MapPin, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const PHONE_NUMBER = '+61 412 345 678';
const PHONE_DISPLAY = '0412 345 678';
const ABN = '12 345 678 901';
const LOCATION = 'Sydney, NSW';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFAB, setShowFAB] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowFAB(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award className="w-8 h-8 text-gold-600" />
            <span className="text-2xl font-serif font-semibold text-navy-900">Elite Transfer</span>
          </div>
          <button
            onClick={handleCall}
            className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call Now</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptLTIgMGgtOHY4aDh2LTh6bTAgMTB2OGg4di04aC04em0tMiAwdi04aC04djhoOHptLTEwIDBoLTh2OGg4di04em0wLTEwaC04djhoOHYtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-block mb-4">
            <span className="bg-gold-600/20 text-gold-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              PREMIUM TRANSPORTATION
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance leading-tight">
            Luxury Transfer Services
            <span className="block text-gold-400">Redefined</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Experience unparalleled comfort and reliability with our premium chauffeur services.
            From airport transfers to corporate events, we deliver excellence every mile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleCall}
              className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-5 rounded-lg text-lg font-bold flex items-center space-x-3 transition-all duration-200 shadow-2xl hover:shadow-gold-600/50 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              <span>Call {PHONE_DISPLAY}</span>
            </button>

            <a
              href="#services"
              className="border-2 border-white/30 hover:border-gold-400 text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/5 w-full sm:w-auto text-center"
            >
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-gold-400 mb-3" />
              <h3 className="font-semibold text-lg mb-1">Fully Insured</h3>
              <p className="text-gray-400 text-sm">Comprehensive coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-gold-400 mb-3" />
              <h3 className="font-semibold text-lg mb-1">24/7 Available</h3>
              <p className="text-gray-400 text-sm">Always at your service</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-gold-400 mb-3" />
              <h3 className="font-semibold text-lg mb-1">5-Star Service</h3>
              <p className="text-gray-400 text-sm">Consistently excellent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored transportation solutions for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Airport Transfers',
                description: 'Seamless pickup and drop-off services with flight tracking and meet-and-greet options.',
                features: ['Flight tracking', 'Meet & greet', 'Luggage assistance'],
                price: 'From $120',
              },
              {
                title: 'Corporate Travel',
                description: 'Professional transportation for business executives, meetings, and corporate events.',
                features: ['Executive vehicles', 'Flexible scheduling', 'Account billing'],
                price: 'Custom rates',
              },
              {
                title: 'Special Events',
                description: 'Arrive in style at weddings, galas, concerts, and other special occasions.',
                features: ['Premium vehicles', 'Red carpet service', 'Extended bookings'],
                price: 'From $200',
              },
              {
                title: 'City Tours',
                description: 'Explore the city in comfort with our knowledgeable chauffeurs as your guide.',
                features: ['Custom itineraries', 'Local expertise', 'Flexible duration'],
                price: 'From $150/hr',
              },
              {
                title: 'Long Distance',
                description: 'Comfortable interstate and regional transfers with premium amenities.',
                features: ['Long-range vehicles', 'Rest stops', 'Refreshments'],
                price: 'Custom quotes',
              },
              {
                title: 'Hourly Charter',
                description: 'Book our services by the hour for maximum flexibility and convenience.',
                features: ['Minimum 3 hours', 'Wait time included', 'Multiple stops'],
                price: 'From $100/hr',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="bg-gradient-to-br from-navy-900 to-navy-800 p-6 group-hover:from-gold-600 group-hover:to-gold-700 transition-all duration-300">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gold-200 group-hover:text-white text-lg font-semibold">{service.price}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-gold-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleCall}
                    className="w-full bg-navy-900 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy-900 mb-4">
              Why Choose Elite Transfer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in luxury transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <Shield className="w-8 h-8 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fully licensed with comprehensive insurance coverage. ABN: {ABN}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <Star className="w-8 h-8 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Professional Chauffeurs</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Experienced, vetted drivers with impeccable service records and local knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <Award className="w-8 h-8 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Premium Fleet</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Meticulously maintained luxury vehicles with the latest safety features and amenities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <Clock className="w-8 h-8 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Punctual Service</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We value your time. Track record of 99.8% on-time arrivals and departures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-12 text-white">
              <blockquote className="text-2xl font-serif italic mb-6 leading-relaxed">
                "Exceptional service from start to finish. The attention to detail and professionalism
                exceeded all expectations. This is now my go-to service for all important transfers."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  JM
                </div>
                <div>
                  <div className="font-semibold text-lg">James Morrison</div>
                  <div className="text-gold-300">Corporate Executive</div>
                  <div className="flex space-x-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your premium transfer today and discover the difference of true luxury transportation.
            </p>
            <button
              onClick={handleCall}
              className="bg-gold-600 hover:bg-gold-700 text-white px-12 py-5 rounded-lg text-xl font-bold inline-flex items-center space-x-3 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>Call {PHONE_DISPLAY}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-8 h-8 text-gold-600" />
                <span className="text-2xl font-serif font-semibold">Elite Transfer</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium luxury transportation services delivering excellence since 2015.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">Contact Information</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-gold-600" />
                  <span>{PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-gold-600" />
                  <span>{LOCATION}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">Business Details</h4>
              <div className="space-y-2 text-gray-300">
                <p>ABN: {ABN}</p>
                <p>Available 24/7</p>
                <p>Fully Licensed & Insured</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Elite Transfer. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      {showFAB && (
        <button
          onClick={handleCall}
          className="fixed bottom-8 right-8 bg-gold-600 hover:bg-gold-700 text-white p-5 rounded-full shadow-2xl hover:shadow-gold-600/50 transition-all duration-300 hover:scale-110 z-40 animate-pulse"
          aria-label="Call now"
        >
          <Phone className="w-7 h-7" />
        </button>
      )}
    </>
  );
}
