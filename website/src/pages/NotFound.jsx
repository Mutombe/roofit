import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  ArrowLeft, 
  Package, 
  Phone, 
  Search,
  Wrench,
  FolderOpen,
  Users
} from 'lucide-react';

// SEO Component
const SEO = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Roof iT Chromadek Factory';
  }, []);
  return null;
};

const NotFound = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home, description: 'Back to homepage' },
    { name: 'Products', path: '/products', icon: Package, description: 'Browse our roofing products' },
    { name: 'Services', path: '/services', icon: Wrench, description: 'View our services' },
    { name: 'Projects', path: '/projects', icon: FolderOpen, description: 'See our completed work' },
    { name: 'Careers', path: '/careers', icon: Users, description: 'Join our team' },
    { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' },
  ];

  return (
    <main className="pt-[100px] min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEO />

      <div className="container-custom py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            {/* Large 404 Number */}
            <div className="relative inline-block">
              <span className="text-[150px] md:text-[200px] lg:text-[250px] font-black text-transparent bg-clip-text bg-gradient-to-br from-roof-blue-500 to-roof-green-600 leading-none select-none">
                404
              </span>
              
              {/* Decorative Roof Icon */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-roof-blue-600 to-roof-green-600 rounded-2xl rotate-45 flex items-center justify-center shadow-xl">
                  <Search className="w-10 h-10 md:w-14 md:h-14 text-white -rotate-45" />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-roof-green-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-roof-blue-500/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-roof-navy mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              The page you're looking for seems to have gone missing. 
              Don't worry, let's get you back on track!
            </p>
          </motion.div>

          {/* Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-roof-blue-600 to-roof-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-3 px-8 py-4 bg-white text-roof-navy font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>

          {/* Quick Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-roof-navy mb-6">
              Or explore our pages:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-roof-blue-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-roof-blue-100 to-roof-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-roof-blue-500 group-hover:to-roof-green-600 transition-all duration-300 mx-auto">
                      <link.icon className="w-6 h-6 text-roof-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-roof-navy mb-1 group-hover:text-roof-blue-600 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {link.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-roof-blue-600 to-roof-green-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <h2 className="text-2xl font-bold mb-4">
              Still can't find what you're looking for?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Our team is here to help! Contact us directly and we'll point you in the right direction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+263783284060"
                className="flex items-center gap-2 px-6 py-3 bg-white text-roof-blue-600 font-bold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +263 783 284 060
              </a>
              <Link 
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-roof-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-roof-green-500/5 rounded-full blur-3xl" />
      </div>
    </main>
  );
};

export default NotFound;
