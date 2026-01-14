import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown,
  Home,
  Info,
  Package,
  Wrench,
  FolderKanban,
  Briefcase,
  MessageSquare,
  Layers,
  CircleDot,
  Droplets,
  Triangle
} from 'lucide-react'
import { TfiLayoutMenuV } from "react-icons/tfi";

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Info },
  { 
    name: 'Products', 
    path: '/products',
    icon: Package,
    submenu: [
      { name: 'IBR Chromadek', path: '/products#ibr-chromadek', icon: Layers },
      { name: 'IBR Galvanized', path: '/products#ibr-galvanized', icon: Layers },
      { name: 'Q-Tiles', path: '/products#qtiles', icon: CircleDot },
      { name: 'Valley Gutters', path: '/products#valley-gutters', icon: Droplets },
      { name: 'Ridges & Accessories', path: '/products#ridges', icon: Triangle },
    ]
  },
  { name: 'Services', path: '/services', icon: Wrench },
  { name: 'Projects', path: '/projects', icon: FolderKanban },
  { name: 'Careers', path: '/careers', icon: Briefcase },
  { name: 'Contact', path: '/contact', icon: MessageSquare },
]

export default function Navbar({ openPolicy }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-roof-navy text-white/90 text-sm hidden lg:block">
        <div className="container-custom py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+263783284060" className="flex items-center gap-2 hover:text-roof-green-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+263 783 284 060</span>
            </a>
            <a href="mailto:sales@roofit.co.zw" className="flex items-center gap-2 hover:text-roof-green-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>sales@roofit.co.zw</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span>Mon - Sat: 7:30 AM - 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Roofit Logo"
                  className="h-10 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5 ${
                        isActive(link.path)
                          ? 'text-roof-blue-600 bg-roof-blue-50'
                          : 'text-gray-700 hover:text-roof-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive(link.path) ? 'text-roof-blue-500' : 'text-gray-400'}`} />
                      {link.name}
                      {link.submenu && <ChevronDown className="w-4 h-4 ml-0.5" />}
                    </Link>
                    
                    {/* Dropdown */}
                    <AnimatePresence>
                      {link.submenu && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {link.submenu.map((item) => {
                            const SubIcon = item.icon
                            return (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-roof-blue-50 hover:text-roof-blue-600 transition-colors group"
                              >
                                <SubIcon className="w-4 h-4 text-gray-400 group-hover:text-roof-blue-500 transition-colors" />
                                {item.name}
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link 
                to="/contact" 
                className="hidden md:inline-flex btn-primary text-sm"
              >
                Get a Quote
              </Link>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <TfiLayoutMenuV className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container-custom py-4 space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <div key={link.name}>
                      <Link
                        to={link.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                          isActive(link.path)
                            ? 'text-roof-blue-600 bg-roof-blue-50'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive(link.path) ? 'text-roof-blue-500' : 'text-gray-400'}`} />
                        {link.name}
                      </Link>
                      {link.submenu && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                          {link.submenu.map((item) => {
                            const SubIcon = item.icon
                            return (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-roof-blue-600 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <SubIcon className="w-4 h-4 text-gray-400" />
                                {item.name}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                  <a href="tel:+263783284060" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Phone className="w-5 h-5 text-roof-blue-500" />
                    <span>+263 783 284 060</span>
                  </a>
                  <a href="mailto:sales@roofit.co.zw" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Mail className="w-5 h-5 text-roof-blue-500" />
                    <span>sales@roofit.co.zw</span>
                  </a>
                  <Link to="/contact" className="btn-primary w-full mt-4">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}