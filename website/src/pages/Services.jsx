import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Truck, 
  Ruler, 
  HardHat, 
  ClipboardCheck, 
  Shield, 
  Clock, 
  Phone,
  CheckCircle,
  ArrowRight,
  Building2,
  Home,
  Factory,
  Warehouse,
  MessageSquare,
  Calculator,
  FileText,
  Settings,
  Star,
  Play,
  ChevronRight,
  Sparkles,
  Award
} from 'lucide-react';
import { SiFsecure } from "react-icons/si";

// SEO Component
const SEO = () => {
  useEffect(() => {
    document.title = 'Our Services | Roof iT Chromadek Factory - Professional Roofing Solutions Zimbabwe';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional roofing services in Zimbabwe - installation, repairs, consultations, and delivery. Quality IBR Chromadek and Q-Tile roofing solutions for residential and commercial projects.');
    }
  }, []);
  return null;
};

// Animated Section Wrapper
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
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

// Services Data with Images
const services = [
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Custom Manufacturing',
    subtitle: 'Precision-Crafted Roofing',
    description: 'We manufacture roofing sheets to your exact specifications. Whether you need standard lengths or custom cuts, our factory produces precision-crafted IBR Chromadek, Galvanized sheets, and Q-Tiles.',
    features: [
      'Custom length cutting',
      'Multiple gauge options',
      'Wide color selection',
      'Quality assured materials',
      'Bulk order capacity',
      'Fast production turnaround'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    stats: { value: '500+', label: 'Daily Capacity' },
    color: 'from-blue-600 to-cyan-500',
    accent: 'blue'
  },
  {
    id: 'supply',
    icon: Truck,
    title: 'Supply & Delivery',
    subtitle: 'Nationwide Coverage',
    description: 'Reliable delivery services across Zimbabwe. We ensure your roofing materials arrive safely and on time, whether you\'re in Harare or anywhere in the country.',
    features: [
      'Nationwide delivery',
      'Secure packaging',
      'Scheduled deliveries',
      'Real-time tracking',
      'Same-day dispatch (local)',
      'Bulk delivery discounts'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    stats: { value: '24h', label: 'Express Delivery' },
    color: 'from-emerald-600 to-green-500',
    accent: 'green'
  },
  {
    id: 'consultation',
    icon: ClipboardCheck,
    title: 'Expert Consultation',
    subtitle: 'Free Professional Advice',
    description: 'Free professional advice from our roofing experts. We help you choose the right materials, colors, and quantities for your project, ensuring optimal results.',
    features: [
      'Free site assessment',
      'Material recommendations',
      'Color matching service',
      'Quantity calculations',
      'Budget planning',
      'Technical specifications'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    stats: { value: 'Free', label: 'Consultation' },
    color: 'from-amber-500 to-orange-500',
    accent: 'amber'
  },
  {
    id: 'installation',
    icon: HardHat,
    title: 'Installation Support',
    subtitle: 'End-to-End Assistance',
    description: 'While we focus on manufacturing, we partner with certified roofing contractors to provide complete installation services for your project.',
    features: [
      'Contractor referrals',
      'Installation guidelines',
      'Technical support',
      'Quality inspections',
      'Warranty coordination',
      'Post-installation care'
    ],
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&h=600&fit=crop',
    stats: { value: '100+', label: 'Partner Contractors' },
    color: 'from-purple-600 to-violet-500',
    accent: 'purple'
  }
];

// Project Types with Images
const projectTypes = [
  {
    icon: Home,
    title: 'Residential',
    description: 'Houses, townhouses, and home renovations',
    projects: '3,500+',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop'
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Offices, retail spaces, and shopping centers',
    projects: '800+',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop'
  },
  {
    icon: Factory,
    title: 'Industrial',
    description: 'Factories, warehouses, and manufacturing plants',
    projects: '500+',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=800&fit=crop'
  },
  {
    icon: Warehouse,
    title: 'Agricultural',
    description: 'Barns, storage facilities, and farm structures',
    projects: '400+',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=800&fit=crop'
  }
];

// Process Steps
const processSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Inquiry',
    description: 'Contact us with your roofing requirements via phone, email, or visit our factory.',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop'
  },
  {
    step: 2,
    icon: Calculator,
    title: 'Quotation',
    description: 'Receive a detailed quote based on your specifications, quantities, and delivery needs.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
  },
  {
    step: 3,
    icon: FileText,
    title: 'Order Confirmation',
    description: 'Confirm your order with deposit payment and finalize production schedule.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop'
  },
  {
    step: 4,
    icon: Settings,
    title: 'Manufacturing',
    description: 'Your roofing sheets are manufactured to exact specifications in our factory.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'
  },
  {
    step: 5,
    icon: ClipboardCheck,
    title: 'Quality Check',
    description: 'Every sheet undergoes rigorous quality inspection before dispatch.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop'
  },
  {
    step: 6,
    icon: Truck,
    title: 'Delivery',
    description: 'Safe and timely delivery to your site anywhere in Zimbabwe.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop'
  }
];

// Hero Section - Cinematic
function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
          alt="Construction"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-roof-navy/95 via-roof-navy/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-roof-navy via-transparent to-roof-navy/50" />
      </motion.div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating Service Cards Preview */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 pr-8">
        {services.slice(0, 3).map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + idx * 0.2 }}
            className="w-64 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                <service.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{service.title}</div>
                <div className="text-white/60 text-xs">{service.subtitle}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20 flex flex-col">
        <motion.div style={{ opacity }} className="max-w-3xl text-left ml-0 mr-auto">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-roof-green-400 via-roof-blue-400 to-roof-green-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-2xl"
          >
            From manufacturing to delivery, we provide comprehensive roofing solutions 
            for residential, commercial, and industrial projects across Zimbabwe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-roof-green-500 to-roof-green-600 text-white font-bold rounded-full shadow-xl flex items-center justify-center gap-2 group"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <a href="tel:+263783284060">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.button>
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-8 mt-12 pt-8 border-t border-white/20"
          >
            {[
              { value: '4', label: 'Core Services' },
              { value: '5000+', label: 'Projects' },
              { value: '24/7', label: 'Support' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-display font-bold text-roof-green-400">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
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
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

// Service Card - Premium Design (Inspired by Reference Images)
function ServiceCard({ service, index }) {
  const Icon = service.icon
  const isEven = index % 2 === 0

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -10 }}
        className={`group relative rounded-3xl overflow-hidden h-full min-h-[500px] ${isEven ? '' : 'lg:mt-12'}`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8">
          {/* Stats Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30"
          >
            <div className="text-2xl font-bold text-white">{service.stats.value}</div>
            <div className="text-xs text-white/70">{service.stats.label}</div>
          </motion.div>

          {/* Icon */}
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30 group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Text */}
          <span className="text-white/70 text-sm font-medium mb-2">{service.subtitle}</span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            {service.title}
          </h3>
          <p className="text-white/80 mb-6 line-clamp-2">
            {service.description}
          </p>

          {/* Features - Glassmorphism Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.slice(0, 3).map((feature, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/20"
              >
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/30">
                +{service.features.length - 3} more
              </span>
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-white font-semibold group/btn"
          >
            Learn More 
            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

// Services Grid Section
function ServicesSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-roof-blue-50 px-4 py-2 rounded-full mb-4">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Comprehensive Roofing 
            <span className="text-roof-blue-600"> Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We're more than just a roofing sheet manufacturer. We provide end-to-end solutions 
            to ensure your roofing project is a complete success.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Project Types Section - Card Stack Design
function ProjectTypesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-roof-navy/95 via-roof-blue-900/90 to-roof-navy/95" />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-roof-green-400 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">Who We Serve</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Projects of Every Scale
          </h2>
          <p className="text-white/70 text-lg">
            From small residential homes to large industrial complexes, we've supplied 
            quality roofing materials for over 5,000 projects across Zimbabwe.
          </p>
        </AnimatedSection>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectTypes.map((project, index) => {
            const Icon = project.icon
            return (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative rounded-3xl overflow-hidden h-[400px] cursor-pointer"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Background Image */}
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-roof-navy via-roof-navy/60 to-transparent opacity-90" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-white/30 group-hover:scale-110 group-hover:bg-roof-green-500 transition-all">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{project.description}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div>
                        <div className="text-3xl font-bold text-roof-green-400">{project.projects}</div>
                        <div className="text-xs text-white/50">Projects Completed</div>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-roof-green-500 group-hover:border-roof-green-500 transition-all"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Process Section - Timeline with Images
function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm mb-4">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Our Simple Process
          </h2>
          <p className="text-gray-600 text-lg">
            Getting your roofing materials has never been easier. Follow our streamlined 
            process from inquiry to delivery.
          </p>
        </AnimatedSection>

        {/* Process Cards - Horizontal Scroll on Mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                >
                  {/* Image Header */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-roof-navy/80 via-roof-navy/40 to-transparent" />
                    
                    {/* Step Number */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-roof-blue-500 to-roof-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Turnaround Info Card */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1920&h=400&fit=crop"
              alt=""
              className="w-full h-[200px] md:h-[180px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-roof-blue-600/95 via-roof-blue-700/90 to-roof-green-600/95" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">Fast Turnaround</h3>
                      <p className="text-white/70">Most orders ready within 24-48 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-8">
                    {[
                      { time: '24h', label: 'Standard' },
                      { time: '48h', label: 'Custom' },
                      { time: '72h', label: 'Bulk' },
                    ].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl font-bold text-white">{item.time}</div>
                        <div className="text-xs text-white/60">{item.label}</div>
                      </div>
                    ))}
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

// Why Choose Section - Bento Grid
function WhyChooseSection() {
  const features = [
    { icon: Factory, title: 'Direct from Factory', desc: 'Cut out the middleman and get factory-direct prices', size: 'normal' },
    { icon: Ruler, title: 'Custom Specifications', desc: 'Roofing sheets made to your exact requirements', size: 'normal' },
    { icon: SiFsecure, title: 'Quality Assurance', desc: 'Every sheet inspected before leaving our factory', size: 'large' },
    { icon: Truck, title: 'Nationwide Delivery', desc: 'We deliver anywhere in Zimbabwe', size: 'normal' },
    { icon: Clock, title: 'Fast Production', desc: 'Quick turnaround on all orders', size: 'normal' },
    { icon: Wrench, title: 'Technical Support', desc: 'Expert advice from our experienced team', size: 'normal' }
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-roof-blue-50 px-4 py-2 rounded-full mb-4">Why Roof iT</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            The Roof iT Advantage
          </h2>
          <p className="text-gray-600 text-lg">
            When you choose Roof iT, you're choosing quality, reliability, and exceptional service.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon
            const isLarge = item.size === 'large'
            
            return (
              <AnimatedSection 
                key={item.title} 
                delay={index * 0.1}
                className={isLarge ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group relative rounded-2xl overflow-hidden h-full ${
                    isLarge ? 'bg-gradient-to-br from-roof-blue-600 to-roof-green-600 p-8' : 'bg-gray-50 hover:bg-white p-6'
                  } transition-all duration-300 hover:shadow-xl border border-gray-100`}
                >
                  {isLarge && (
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=400&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      isLarge 
                        ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                        : 'bg-gradient-to-br from-roof-blue-500 to-roof-green-500'
                    } group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${isLarge ? 'text-white' : 'text-white'}`} />
                    </div>
                    <h3 className={`text-xl font-display font-bold mb-2 ${isLarge ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`${isLarge ? 'text-white/80' : 'text-gray-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=800&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-roof-blue-600/95 via-roof-blue-700/90 to-roof-green-600/95" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-80 h-80 border border-white/10 rounded-full"
      />

      <div className="container-custom relative">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/30">
            <Award className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get in touch today for a free quote and expert consultation on your roofing needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white text-roof-blue-600 font-bold rounded-full shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                View Products
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

const Services = () => {
  return (
    <>
      <SEO />
      <HeroSection />
      <ServicesSection />
      <ProjectTypesSection />
      <ProcessSection />
      <WhyChooseSection />
      <CTASection />
    </>
  )
}

export default Services