import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Star,
  Play,
  Hammer,
  Shield,
  Ruler
} from 'lucide-react'
import { SiFsecure } from "react-icons/si";
import { MdStarBorderPurple500 } from "react-icons/md";

// SEO Component
function SEOHead() {
  useEffect(() => {
    document.title = 'Roof iT | Premium Chromadek Roofing Solutions in Zimbabwe'
  }, [])
  return null
}

// Scrolling Column Component
const ScrollingColumn = ({ images, direction, delay = 0, speed = 25 }) => {
  const [isPaused, setIsPaused] = useState(false)
  
  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images]

  return (
    <div
      className="relative overflow-hidden h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          y: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
          delay: delay,
        }}
        style={{
          willChange: 'transform',
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
        className="flex flex-col gap-4"
      >
        {duplicatedImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden flex-shrink-0 group"
          >
            <img 
              src={img.src} 
              alt={img.alt || 'Roofing'} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-roof-navy/60 via-roof-navy/20 to-transparent" />
            
            {/* Hover label */}
            {img.label && (
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-3 py-1.5 bg-roof-green-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-lg">
                  {img.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// Hero Section with Scrolling Columns
function HeroSection() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95])

  // Roofing images for scrolling columns
  const column1Images = [
    { src: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=500&h=700&fit=crop', label: 'IBR Chromadek', alt: 'Metal roofing installation' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=700&fit=crop', label: 'Expert Installation', alt: 'Roofing work' },
    { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=700&fit=crop', label: 'Quality Materials', alt: 'Construction materials' },
    { src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=700&fit=crop', label: 'Commercial Projects', alt: 'Commercial building' },
    { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=700&fit=crop', label: 'Residential Roofing', alt: 'House roof' },
  ]

  const column2Images = [
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=700&fit=crop', label: 'Modern Homes', alt: 'Modern house' },
    { src: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=500&h=700&fit=crop', label: 'Precision Work', alt: 'Construction detail' },
    { src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=700&fit=crop', label: 'Steel Structures', alt: 'Steel construction' },
    { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=700&fit=crop', label: 'Skyscrapers', alt: 'Building' },
    { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=700&fit=crop', label: 'Industrial', alt: 'Industrial construction' },
  ]

  const column3Images = [
    { src: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500&h=700&fit=crop', label: 'Elegant Design', alt: 'House design' },
    { src: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=500&h=700&fit=crop', label: 'Q-Tiles', alt: 'Tile roofing' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=700&fit=crop', label: 'Luxury Homes', alt: 'Luxury house' },
    { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=700&fit=crop', label: 'New Builds', alt: 'New construction' },
    { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=700&fit=crop', label: 'Custom Projects', alt: 'Custom home' },
  ]

  const column4Images = [
    { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=700&fit=crop', label: 'Estate Homes', alt: 'Estate' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=700&fit=crop', label: 'Premium Finish', alt: 'Modern home' },
    { src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&h=700&fit=crop', label: 'Valley Gutters', alt: 'House exterior' },
    { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=700&fit=crop', label: 'Renovations', alt: 'Home renovation' },
    { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&h=700&fit=crop', label: 'Architecture', alt: 'Architectural design' },
  ]

  return (
    <motion.section 
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Scrolling Background Columns */}
      <div className="absolute inset-0 flex gap-3 md:gap-4 px-2">
        {/* Column 1 - Scrolling UP */}
        <div className="flex-1 h-full">
          <ScrollingColumn images={column1Images} direction="up" delay={0} speed={30} />
        </div>

        {/* Column 2 - Scrolling DOWN */}
        <div className="flex-1 h-full hidden sm:block">
          <ScrollingColumn images={column2Images} direction="down" delay={0} speed={35} />
        </div>

        {/* Column 3 - Scrolling UP */}
        <div className="flex-1 h-full hidden lg:block">
          <ScrollingColumn images={column3Images} direction="up" delay={0} speed={28} />
        </div>

        {/* Column 4 - Scrolling DOWN */}
        <div className="flex-1 h-full hidden xl:block">
          <ScrollingColumn images={column4Images} direction="down" delay={0} speed={32} />
        </div>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-roof-navy/80 via-roof-navy/70 to-roof-navy/85" />
      
      {/* Accent Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-roof-green-600/20 via-transparent to-roof-blue-600/20" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.5) 40px,
              rgba(255,255,255,0.5) 80px
            )`,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-semibold tracking-wide"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(34, 197, 94, 0.2)',
                  '0 0 40px rgba(34, 197, 94, 0.4)',
                  '0 0 20px rgba(34, 197, 94, 0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <MdStarBorderPurple500 className="w-4 h-4 text-roof-green-400" />
              Zimbabwe's Premier Roofing Supplier
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1]"
          >
            <span className="block text-white mb-2">Roofing Sheets</span>
            <span className="block">
              <span className="bg-gradient-to-r from-roof-green-400 via-roof-green-300 to-roof-green-500 bg-clip-text text-transparent">
                You Can Trust
              </span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Quality suppliers of IBR Chromadek, Q-Tiles, Valley Gutters, Ridges, 
            and all hardware materials. From repairs to new installations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-roof-green-500 to-roof-green-600 text-white font-bold rounded-full shadow-2xl shadow-roof-green-500/30 hover:shadow-roof-green-500/50 transition-all duration-300 flex items-center gap-2 group"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Free Quote
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8"
          >
            {[
              { icon: SiFsecure, value: '10+', label: 'Years' },
              { icon: Hammer, value: '5000+', label: 'Projects' },
              { icon: CheckCircle2, value: '100%', label: 'Quality' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-3 sm:px-5 md:px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10"
              >
                <div className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 bg-roof-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <stat.icon className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 text-roof-green-400" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-white/50">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-10 hidden lg:block"
      >
        <div className="bg-roof-green-500 text-white px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm">
          🏠 Factory Direct Prices
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-10 hidden lg:block"
      >
        <div className="bg-white text-roof-navy px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-roof-green-500" />
          ISO Certified Quality
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-7 h-12 border-2 border-roof-green-400/50 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-roof-green-400 rounded-full"
          />
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </motion.section>
  )
}

export default HeroSection