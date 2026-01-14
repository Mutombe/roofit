import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Send
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
]

const products = [
  { name: 'IBR Chromadek', path: '/products#ibr-chromadek' },
  { name: 'IBR Galvanized', path: '/products#ibr-galvanized' },
  { name: 'Q-Tiles', path: '/products#qtiles' },
  { name: 'Valley Gutters', path: '/products#valley-gutters' },
  { name: 'Ridges', path: '/products#ridges' },
  { name: 'Safetop', path: '/products#safetop' },
  { name: 'Wire Nails', path: '/products#wire-nails' },
]

export default function Footer({ openPolicy }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email address')
      return
    }
    
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success('Thank you for subscribing!')
    setEmail('')
    setLoading(false)
  }

  return (
    <footer className="bg-roof-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 ibr-texture opacity-50" />
      
      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-display font-bold mb-2">
                Stay Updated with Roof iT
              </h3>
              <p className="text-white/70">
                Get the latest news, products, and special offers delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-roof-green-400 transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 bg-gradient-to-r from-roof-green-500 to-roof-green-600 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-roof-blue-500 to-roof-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="white">
                  <path d="M16 4L4 14H8V26H24V14H28L16 4Z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-display font-bold">Roof iT</span>
                <p className="text-xs text-white/60">Chromadek Factory</p>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Zimbabwe's premier supplier of quality Chromadek roofing sheets. 
              From repairs to new installations, we've got you covered.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-roof-blue-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-roof-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link 
                    to={product.path}
                    className="text-white/70 hover:text-roof-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-roof-green-400 mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  7 Charter Road,<br />
                  Corner Charter & Simon Mazorodze,<br />
                  Near Mbare Flyover, Harare
                </span>
              </li>
              <li>
                <a href="tel:+263783284060" className="flex items-center gap-3 text-white/70 hover:text-roof-green-400 transition-colors">
                  <Phone className="w-5 h-5 text-roof-green-400" />
                  +263 783 284 060
                </a>
              </li>
              <li>
                <a href="tel:+263719093565" className="flex items-center gap-3 text-white/70 hover:text-roof-green-400 transition-colors">
                  <Phone className="w-5 h-5 text-roof-green-400" />
                  +263 719 093 565
                </a>
              </li>
              <li>
                <a href="mailto:sales@roofit.co.zw" className="flex items-center gap-3 text-white/70 hover:text-roof-green-400 transition-colors">
                  <Mail className="w-5 h-5 text-roof-green-400" />
                  sales@roofit.co.zw
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Clock className="w-5 h-5 text-roof-green-400" />
                Mon - Sat: 7:30 AM - 5:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} Roof iT Chromadek Factory. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => openPolicy('privacy')}
                className="hover:text-roof-green-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => openPolicy('terms')}
                className="hover:text-roof-green-400 transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => openPolicy('cookies')}
                className="hover:text-roof-green-400 transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
