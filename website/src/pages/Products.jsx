import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Package,
  Layers,
  Droplets,
  Wrench,
  ChevronRight,
  Check,
  Info,
  ArrowRight,
  Ruler,
  Palette,
  Shield,
  Sparkles,
  X
} from 'lucide-react'
import { SiFsecure } from "react-icons/si";

// SEO Component
function SEOHead() {
  useEffect(() => {
    document.title = 'Products | Roof iT - IBR Chromadek, Q-Tiles, Valley Gutters & More'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore our range of premium roofing products: IBR Chromadek, IBR Galvanized, Q-Tiles, Valley Gutters, Ridges, Safetop & Wire Nails. Factory-direct prices in Zimbabwe.')
    }
  }, [])
  return null
}

// Animated Section
function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Product Data
const products = [
  {
    id: 'ibr-chromadek',
    name: 'IBR Chromadek',
    tagline: 'Premium Color-Coated Steel',
    description: 'Our flagship product - high-quality Chromadek roofing sheets available in a wide range of colors. Perfect for residential and commercial applications.',
    icon: Layers,
    colors: [
      { name: 'Charcoal', hex: '#2d3748' },
      { name: 'Night Sky', hex: '#1a365d' },
      { name: 'Forest Green', hex: '#276749' },
      { name: 'Burgundy', hex: '#742a2a' },
      { name: 'Terracotta', hex: '#c05621' },
      { name: 'Sky Blue', hex: '#3182ce' },
    ],
    features: [
      'Color-coated steel with AZ150 coating',
      'Excellent corrosion resistance',
      '0.47mm thickness standard',
      'Custom lengths available',
      'UV resistant coating',
      '15+ year warranty',
    ],
    specs: {
      thickness: '0.47mm',
      width: '686mm effective cover',
      coating: 'AZ150 Chromadek',
      lengths: '1.8m to 12m',
    },
    popular: true,
  },
  {
    id: 'ibr-galvanized',
    name: 'IBR Galvanized',
    tagline: 'Industrial Strength Protection',
    description: 'Heavy-duty galvanized steel roofing sheets ideal for industrial buildings, warehouses, and agricultural structures.',
    icon: SiFsecure,
    colors: [
      { name: 'Silver', hex: '#a0aec0' },
      { name: 'Light Silver', hex: '#cbd5e0' },
      { name: 'Zinc', hex: '#e2e8f0' },
    ],
    features: [
      'Hot-dip galvanized finish',
      'Superior rust protection',
      '0.47mm & 0.58mm available',
      'Cost-effective solution',
      'Easy maintenance',
      '10+ year warranty',
    ],
    specs: {
      thickness: '0.47mm - 0.58mm',
      width: '686mm effective cover',
      coating: 'Z275 Galvanized',
      lengths: '1.8m to 12m',
    },
  },
  {
    id: 'qtiles',
    name: 'Q-Tiles',
    tagline: 'Elegant Tile Profile',
    description: 'Beautiful tile-profile roofing that combines the aesthetic appeal of traditional tiles with the durability of steel.',
    icon: Sparkles,
    colors: [
      { name: 'Charcoal', hex: '#2d3748' },
      { name: 'Brick Red', hex: '#9b2c2c' },
      { name: 'Deep Blue', hex: '#1a365d' },
      { name: 'Green', hex: '#276749' },
    ],
    features: [
      'Tile-profile design',
      'Lightweight alternative to clay tiles',
      'Premium Chromadek finish',
      'Easy installation',
      'Weather resistant',
      'Enhances property value',
    ],
    specs: {
      thickness: '0.47mm',
      width: '1050mm effective cover',
      coating: 'AZ150 Chromadek',
      profile: 'Tile pattern',
    },
  },
  {
    id: 'valley-gutters',
    name: 'Valley Gutters',
    tagline: 'Essential Drainage Solutions',
    description: 'High-quality valley gutters for effective water drainage where two roof slopes meet. Available in various sizes and finishes.',
    icon: Droplets,
    colors: [
      { name: 'Charcoal', hex: '#2d3748' },
      { name: 'Galvanized', hex: '#a0aec0' },
    ],
    features: [
      'Prevents water accumulation',
      'Galvanized & Chromadek options',
      'Custom lengths available',
      'Professional finish',
      'Easy to install',
      'Durable construction',
    ],
    specs: {
      types: '300mm & 450mm width',
      material: 'Chromadek or Galvanized',
      lengths: 'Custom cut to order',
    },
  },
  {
    id: 'ridges',
    name: 'Ridges & Flashings',
    tagline: 'Perfect Finishing Touches',
    description: 'Complete your roofing project with our range of ridges, hip caps, and flashings. Essential for a weatherproof finish.',
    icon: Package,
    colors: [
      { name: 'Charcoal', hex: '#2d3748' },
      { name: 'Galvanized', hex: '#a0aec0' },
      { name: 'Burgundy', hex: '#742a2a' },
      { name: 'Green', hex: '#276749' },
    ],
    features: [
      'Ridge caps',
      'Hip caps',
      'Barge boards',
      'Apron flashings',
      'Color matched to roofing',
      'Professional grade',
    ],
    specs: {
      types: 'Ridge, Hip, Barge, Flashings',
      material: 'Chromadek or Galvanized',
      lengths: 'Standard 2.4m or custom',
    },
  },
  {
    id: 'safetop',
    name: 'Safetop',
    tagline: 'Safety & Functionality',
    description: 'Durable safetop sheeting for skylights and covered walkways. Provides natural light while maintaining protection.',
    icon: Layers,
    colors: [
      { name: 'Clear', hex: '#f7fafc' },
      { name: 'Opal', hex: '#edf2f7' },
      { name: 'Bronze', hex: '#8b7355' },
    ],
    features: [
      'Translucent options',
      'UV protection',
      'Impact resistant',
      'Easy cleaning',
      'Compatible with IBR profile',
      'Natural lighting solution',
    ],
    specs: {
      material: 'Polycarbonate/Fiberglass',
      profile: 'IBR compatible',
      lengths: '1.8m to 6m',
    },
  },
  {
    id: 'wire-nails',
    name: 'Wire Nails & Accessories',
    tagline: 'Complete Hardware Solutions',
    description: 'Quality roofing nails, screws, and accessories to complete your installation. Everything you need in one place.',
    icon: Wrench,
    colors: [],
    features: [
      'Roofing nails',
      'Self-drilling screws',
      'Roofing screws with washers',
      'Silicone sealant',
      'Foam closures',
      'Bulk discounts available',
    ],
    specs: {
      types: 'Nails, Screws, Sealants',
      material: 'Galvanized steel',
      packaging: 'Bulk & retail',
    },
  },
]

// Hero Section
function ProductsHero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-roof-blue-900 via-roof-navy to-roof-green-900" />
      <div className="absolute inset-0 qtile-texture opacity-40" />
      
      {/* Animated roofing pattern */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 bg-white/5 rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              left: `${i * 12}%`,
              top: `${20 + i * 8}%`,
              transform: 'rotate(-15deg)',
            }}
            animate={{
              x: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
              <Package className="w-4 h-4" />
              Our Products
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
          >
            Quality Roofing
            <span className="block text-roof-green-400">Materials</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            From IBR Chromadek to Q-Tiles, we supply everything you need for a 
            professional roofing project. Factory-direct prices, premium quality.
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

// Interactive Color Selector Component
function ColorSelector({ colors, selectedColor, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => (
        <motion.button
          key={color.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(color)}
          className={`relative w-10 h-10 rounded-full border-2 transition-all ${
            selectedColor?.name === color.name 
              ? 'border-roof-blue-500 ring-2 ring-roof-blue-200' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
          style={{ backgroundColor: color.hex }}
          title={color.name}
        >
          {selectedColor?.name === color.name && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Check className={`w-5 h-5 ${
                color.hex.startsWith('#f') || color.hex.startsWith('#e') || color.hex.startsWith('#c') || color.hex.startsWith('#a')
                  ? 'text-gray-800' 
                  : 'text-white'
              }`} />
            </motion.div>
          )}
        </motion.button>
      ))}
    </div>
  )
}

// Product Detail Modal
function ProductModal({ product, onClose }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-3xl z-50 overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-roof-blue-500 to-roof-green-500 rounded-xl flex items-center justify-center">
              <product.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900">{product.name}</h2>
              <p className="text-gray-500">{product.tagline}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Visual */}
            <div>
              <div 
                className="aspect-video rounded-2xl overflow-hidden relative"
                style={{ 
                  backgroundColor: selectedColor?.hex || '#2d3748',
                  transition: 'background-color 0.3s ease'
                }}
              >
                <div className="absolute inset-0 ibr-texture opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-75">Selected Color</div>
                  <div className="text-xl font-semibold">{selectedColor?.name || 'Standard'}</div>
                </div>
              </div>

              {product.colors.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Available Colors
                  </h4>
                  <ColorSelector 
                    colors={product.colors} 
                    selectedColor={selectedColor}
                    onSelect={setSelectedColor}
                  />
                </div>
              )}
            </div>

            {/* Right - Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About this Product</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-roof-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-roof-green-600" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              Contact us for pricing and availability
            </p>
            <div className="flex gap-3">
              <Link 
                to="/contact" 
                className="btn-primary"
                onClick={onClose}
              >
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

// Product Card
function ProductCard({ product, onViewDetails }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || null)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-roof-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      {/* Visual */}
      <div 
        className="h-48 relative overflow-hidden"
        style={{ 
          backgroundColor: selectedColor?.hex || '#2d3748',
          transition: 'background-color 0.3s ease'
        }}
      >
        <div className="absolute inset-0 ibr-texture opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {product.popular && (
          <div className="absolute top-4 right-4 bg-roof-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </div>
        )}
        
        <div className="absolute bottom-4 left-4">
          <product.icon className="w-10 h-10 text-white/80" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-display font-semibold text-gray-900 mb-1">
          {product.name}
        </h3>
        <p className="text-roof-blue-600 text-sm font-medium mb-3">
          {product.tagline}
        </p>
        <p className="text-gray-600 text-sm line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Color Preview */}
        {product.colors.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Available colors</span>
              <div className="flex gap-1">
                {product.colors.slice(0, 4).map((color) => (
                  <div
                    key={color.name}
                    className="w-5 h-5 rounded-full border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
                {product.colors.length > 4 && (
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                    +{product.colors.length - 4}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => onViewDetails(product)}
          className="mt-4 w-full py-3 bg-gray-50 hover:bg-roof-blue-50 text-gray-700 hover:text-roof-blue-600 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
        >
          View Details
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

// Products Grid Section
function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 300)
      }
    }
  }, [location])

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Explore Our Range
          </h2>
          <p className="text-gray-600 text-lg">
            Quality roofing materials for every application. Click on any product to learn more.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <AnimatedSection key={product.id} delay={idx * 0.1}>
              <div id={product.id}>
                <ProductCard 
                  product={product} 
                  onViewDetails={setSelectedProduct}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

// Interactive Roof Visualizer
function RoofVisualizer() {
  const [selectedSheet, setSelectedSheet] = useState('chromadek')
  const [selectedColor, setSelectedColor] = useState('#2d3748')

  const sheetTypes = [
    { id: 'chromadek', name: 'IBR Chromadek', pattern: 'ibr' },
    { id: 'galvanized', name: 'IBR Galvanized', pattern: 'ibr' },
    { id: 'qtiles', name: 'Q-Tiles', pattern: 'tile' },
  ]

  const colors = [
    { hex: '#2d3748', name: 'Charcoal' },
    { hex: '#1a365d', name: 'Night Sky' },
    { hex: '#276749', name: 'Forest Green' },
    { hex: '#742a2a', name: 'Burgundy' },
    { hex: '#a0aec0', name: 'Silver' },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-roof-blue-600 font-semibold text-sm uppercase tracking-wider">Interactive Tool</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-4 mb-6">
            Visualize Your Roof
          </h2>
          <p className="text-gray-600 text-lg">
            Try different sheet types and colors to see how they would look on your roof.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Visualizer Display */}
              <div className="relative h-64 md:h-80 bg-gradient-to-b from-sky-400 to-sky-200 overflow-hidden">
                {/* Sun */}
                <div className="absolute top-8 right-12 w-16 h-16 bg-yellow-300 rounded-full blur-sm" />
                
                {/* House Structure */}
                <svg viewBox="0 0 400 200" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg">
                  {/* Roof */}
                  <motion.path
                    d="M50 120 L200 30 L350 120 Z"
                    fill={selectedColor}
                    animate={{ fill: selectedColor }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Roof Pattern */}
                  {selectedSheet !== 'qtiles' ? (
                    <g opacity="0.2">
                      {[...Array(12)].map((_, i) => (
                        <line
                          key={i}
                          x1={75 + i * 20}
                          y1={110 - i * 5}
                          x2={135 + i * 20}
                          y2={65 - i * 1.5}
                          stroke="white"
                          strokeWidth="2"
                        />
                      ))}
                    </g>
                  ) : (
                    <g opacity="0.2">
                      {[...Array(8)].map((_, i) => (
                        <g key={i}>
                          <path
                            d={`M${80 + i * 30} ${105 - i * 7} Q${95 + i * 30} ${95 - i * 7} ${110 + i * 30} ${105 - i * 7}`}
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </g>
                      ))}
                    </g>
                  )}
                  
                  {/* House Body */}
                  <rect x="80" y="120" width="240" height="80" fill="#f7fafc" />
                  
                  {/* Windows */}
                  <rect x="100" y="140" width="40" height="40" fill="#bee3f8" />
                  <rect x="260" y="140" width="40" height="40" fill="#bee3f8" />
                  
                  {/* Door */}
                  <rect x="175" y="150" width="50" height="50" fill="#8b5cf6" />
                  <circle cx="215" cy="175" r="3" fill="#fbbf24" />
                </svg>
                
                {/* Trees */}
                <div className="absolute bottom-0 left-8">
                  <div className="w-16 h-24 bg-green-600 rounded-full" />
                  <div className="w-3 h-8 bg-amber-700 mx-auto -mt-2" />
                </div>
              </div>

              {/* Controls */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Sheet Type Selection */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Ruler className="w-4 h-4" />
                    Sheet Type
                  </label>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {sheetTypes.map((sheet) => (
                      <motion.button
                        key={sheet.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedSheet(sheet.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          selectedSheet === sheet.id
                            ? 'bg-roof-blue-500 text-white shadow-roof'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {sheet.name}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Color
                  </label>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {colors.map((color) => (
                      <motion.button
                        key={color.hex}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedColor(color.hex)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all flex items-center justify-center ${
                          selectedColor === color.hex
                            ? 'border-roof-blue-500 ring-2 ring-roof-blue-200'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor === color.hex && (
                          <Check className={`w-6 h-6 ${
                            color.hex === '#a0aec0' ? 'text-gray-700' : 'text-white'
                          }`} />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-gray-500 text-sm">
                    <Info className="w-4 h-4 inline mr-1" />
                    This is a simplified visualization. Contact us for accurate renders.
                  </p>
                  <Link 
                    to="/contact" 
                    className="text-roof-blue-600 font-medium hover:underline flex items-center gap-1"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Main Products Page
export default function Products() {
  return (
    <>
      <SEOHead />
      <ProductsHero />
      <ProductsGrid />
      <RoofVisualizer />
    </>
  )
}
