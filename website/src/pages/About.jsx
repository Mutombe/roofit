import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { 
  Award, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Building2, 
  CheckCircle2,
  ArrowRight,
  Factory,
  Truck,
  Shield,
  Sparkles,
  MapPin,
  Phone,
  Clock,
  Play
} from 'lucide-react'
import { SiFsecure } from "react-icons/si";

// SEO Component
function SEOHead() {
  useEffect(() => {
    document.title = 'About Us | Roof iT - Zimbabwe\'s Premier Roofing Company'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn about Roof iT Chromadek Factory - Zimbabwe\'s leading roofing supplier with over 10 years of experience providing quality IBR Chromadek, Q-Tiles, and roofing solutions.')
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

// Hero Section - Cinematic Style
function AboutHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
          alt="Construction site"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-roof-navy/95 via-roof-navy/80 to-roof-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-roof-navy via-transparent to-transparent" />
      </motion.div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[15%] hidden lg:block"
      >
        <div className="w-24 h-24 bg-roof-green-500/20 backdrop-blur-sm rounded-2xl border border-roof-green-500/30 flex items-center justify-center">
          <Award className="w-10 h-10 text-roof-green-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-[25%] hidden lg:block"
      >
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
          <Shield className="w-8 h-8 text-white/80" />
        </div>
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div style={{ opacity }} className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/20">
              <Building2 className="w-4 h-4 text-roof-green-400" />
              Established 2014 • Harare, Zimbabwe
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
          >
            Building Zimbabwe's
            <span className="block mt-2 bg-gradient-to-r from-roof-green-400 via-roof-green-300 to-roof-green-500 bg-clip-text text-transparent">
              Future, One Roof at a Time
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed mb-10"
          >
            For over a decade, Roof iT has been at the forefront of Zimbabwe's roofing 
            industry, providing quality materials and exceptional service to thousands 
            of satisfied customers.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            {[
              { value: '10+', label: 'Years' },
              { value: '5000+', label: 'Projects' },
              { value: '2000+', label: 'Clients' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-roof-green-400">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-roof-green-400 rounded-full"
          />
        </div>
      </motion.div>

      {/* Bottom Curve */}
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

// Story Section - Split Layout with Real Images
function StorySection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <AnimatedSection>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&h=600&fit=crop"
                  alt="Roof iT Factory"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roof-navy/60 via-transparent to-transparent" />
                
                {/* Play Button for Video */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-roof-blue-600 ml-1" />
                  </div>
                </motion.button>

                {/* Location Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-roof-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">7 Charter Road</div>
                      <div className="text-sm text-gray-500">Near Mbare Flyover, Harare</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 md:-right-10 bg-gradient-to-br from-roof-blue-600 to-roof-green-600 rounded-2xl shadow-2xl p-6 text-white"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold">10+</div>
                    <div className="text-white/80">Years of Excellence</div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-8 -left-8 hidden md:block"
              >
                <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop"
                    alt="Roofing work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-roof-blue-50 px-4 py-2 rounded-full">Our Journey</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
                From Humble Beginnings to 
                <span className="text-roof-blue-600"> Industry Leadership</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Roof iT Chromadek Factory was established with a simple mission: to provide 
                  Zimbabwe with the highest quality roofing materials at competitive prices. 
                  What started as a small operation has grown into one of the country's most 
                  trusted roofing suppliers.
                </p>
                <p>
                  Located strategically at 7 Charter Road, near the Mbare Flyover in Harare, 
                  our state-of-the-art facility serves customers from across Zimbabwe and 
                  the broader Southern African region.
                </p>
                <p>
                  Our commitment to quality, combined with our deep understanding of local 
                  building requirements, has made us the preferred choice for homeowners, 
                  contractors, and developers alike.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: Factory, label: 'Modern Facility', color: 'bg-blue-50 text-blue-600' },
                  { icon: Truck, label: 'National Delivery', color: 'bg-green-50 text-green-600' },
                  { icon: SiFsecure, label: 'Quality Certified', color: 'bg-purple-50 text-purple-600' },
                  { icon: Users, label: 'Expert Team', color: 'bg-amber-50 text-amber-600' },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                  >
                    <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Mission & Vision - Cards with Background Images
function MissionVisionSection() {
  const cards = [
    {
      icon: Target,
      title: 'Our Mission',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      color: 'from-roof-blue-600/95 to-roof-blue-800/95',
      content: 'To be Zimbabwe\'s most trusted roofing solutions provider, delivering premium quality products and exceptional customer service that exceeds expectations.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      color: 'from-roof-green-600/95 to-roof-green-800/95',
      content: 'To revolutionize the roofing industry in Southern Africa through innovation, quality, and sustainable practices that protect both homes and the environment.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">What Drives Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mt-6">
            Purpose & Direction
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="h-full group"
              >
                <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px]">
                  {/* Background Image */}
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color}`} />
                  <div className="absolute inset-0 qtile-texture opacity-30" />
                  
                  {/* Content */}
                  <div className="relative p-8 md:p-10 h-full flex flex-col justify-end text-white">
                    <motion.div 
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30"
                    >
                      <card.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{card.title}</h3>
                    <p className="text-white/90 leading-relaxed text-lg">{card.content}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Core Values Section with Images
function ValuesSection() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on the quality of our materials. Every product meets rigorous standards.',
      image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&h=300&fit=crop',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Their satisfaction is our success.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
    },
    {
      icon: SiFsecure,
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency in all our dealings.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We continuously improve our products and services to meet evolving market needs.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Our success is built on collaboration, respect, and shared commitment to excellence.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
    },
    {
      icon: Building2,
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible practices in all our operations.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

      <div className="container-custom relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-roof-blue-50 px-4 py-2 rounded-full">Our Foundation</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mt-6 mb-6">
            Core Values
          </h2>
          <p className="text-gray-600 text-lg">
            These principles guide every decision we make and every interaction we have.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full"
              >
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roof-navy/80 via-roof-navy/40 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-6">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <value.icon className="w-7 h-7 text-roof-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section with Image Background
function WhyChooseSection() {
  const reasons = [
    'Over 10 years of industry experience',
    'Premium quality Chromadek materials',
    'Competitive factory-direct pricing',
    'Expert technical advice and support',
    'Nationwide delivery coverage',
    'Comprehensive product warranties',
    'Custom cutting and lengths available',
    'Excellent after-sales service',
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-roof-navy/95 via-roof-blue-900/90 to-roof-green-900/95" />
      </div>
      
      <div className="absolute inset-0 ibr-texture opacity-20" />
      
      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-80 h-80 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-60 -left-60 w-[500px] h-[500px] border border-white/10 rounded-full"
      />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <span className="inline-block text-roof-green-400 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">Why Roof iT</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              The Clear Choice for 
              <span className="text-roof-green-400"> Quality Roofing</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              When you choose Roof iT, you're choosing a partner committed to your project's 
              success. Here's why thousands of customers trust us with their roofing needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-roof-green-500 text-white font-bold rounded-full shadow-xl hover:bg-roof-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <a href="tel:+263783284060">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </motion.button>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-roof-green-500/50 hover:bg-white/15 transition-all cursor-default"
                >
                  <CheckCircle2 className="w-5 h-5 text-roof-green-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm md:text-base">{reason}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Contact CTA Section
function ContactCTA() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=600&fit=crop"
              alt=""
              className="w-full h-[300px] md:h-[250px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-roof-navy/95 via-roof-navy/80 to-roof-navy/60" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                      Ready to Start Your Project?
                    </h3>
                    <p className="text-white/70">Get in touch with our experts for a free consultation.</p>
                  </div>
                  <div className="flex gap-4">
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-roof-green-500 text-white font-bold rounded-full hover:bg-roof-green-600 transition-all flex items-center gap-2"
                      >
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                    <Link to="/products">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all"
                      >
                        View Products
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main About Page
export default function About() {
  return (
    <>
      <SEOHead />
      <AboutHero />
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <WhyChooseSection />
      <ContactCTA />
    </>
  )
}