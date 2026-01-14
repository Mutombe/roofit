import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Award, 
  Users, 
  Building2, 
  Truck,
  Shield,
  Mail,
  Clock,
  Star,
  ChevronRight,
  Play,
  Hammer,
  Ruler,
  Wrench
} from 'lucide-react'
import { IoLogoWhatsapp } from "react-icons/io";
import HeroSection from '../components/homeHero'
import { SiFsecure } from "react-icons/si";

// SEO Component
function SEOHead() {
  useEffect(() => {
    document.title = 'Roof iT | Premium Chromadek Roofing Solutions in Zimbabwe'
  }, [])
  return null
}

// Animated Section Component
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


// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest Chromadek materials sourced from trusted manufacturers for lasting durability.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Efficient nationwide delivery service ensuring your materials arrive on time, every time.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
    },
    {
      icon: SiFsecure,
      title: 'Warranty Backed',
      description: 'All our products come with comprehensive warranties for your peace of mind.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of roofing specialists ready to assist with your project needs.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95" />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-roof-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-4 mb-6">
            The Roof iT Advantage
          </h2>
          <p className="text-gray-600 text-lg">
            We're committed to providing Zimbabwe with the highest quality roofing solutions 
            backed by exceptional service and expertise.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-roof-lg transition-all duration-300 border border-gray-100 h-full"
              >
                {/* Feature Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roof-navy/80 via-roof-navy/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-roof-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
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

// Products Preview Section
function ProductsSection() {
  const products = [
    {
      name: 'IBR Chromadek',
      description: 'Premium color-coated steel sheets for residential and commercial roofing.',
      colors: ['#2d3748', '#4a5568', '#718096', '#a0aec0'],
      popular: true,
      image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=500&h=400&fit=crop',
    },
    {
      name: 'IBR Galvanized',
      description: 'Durable zinc-coated steel sheets for industrial applications.',
      colors: ['#a0aec0', '#cbd5e0', '#e2e8f0', '#f7fafc'],
      image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=500&h=400&fit=crop',
    },
    {
      name: 'Q-Tiles',
      description: 'Elegant tile-profile roofing for a sophisticated aesthetic.',
      colors: ['#742a2a', '#9b2c2c', '#2d3748', '#1a365d'],
      image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=500&h=400&fit=crop',
    },
    {
      name: 'Valley Gutters',
      description: 'Essential drainage solutions for effective water management.',
      colors: ['#2d3748', '#4a5568', '#718096'],
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&h=400&fit=crop',
    },
  ]

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Pattern with Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/98 via-gray-50/95 to-white/98" />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-roof-blue-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-4">
              Quality Roofing Materials
            </h2>
          </div>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-roof-blue-600 font-semibold hover:gap-3 transition-all"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-roof-lg transition-all duration-300 h-full flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-roof-navy/70 via-roof-navy/30 to-transparent" />
                  
                  {/* IBR Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 22px)',
                  }} />
                  
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-roof-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      Popular
                    </div>
                  )}
                  
                  {/* Color Swatches */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {product.colors.map((color, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-md cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex-1">
                    {product.description}
                  </p>
                  <Link 
                    to="/products" 
                    className="mt-4 inline-flex items-center gap-2 text-roof-blue-600 font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const stats = [
    { icon: Building2, value: '500+', label: 'Buildings Roofed' },
    { icon: Users, value: '2000+', label: 'Happy Clients' },
    { icon: Clock, value: '10+', label: 'Years in Business' },
    { icon: Award, value: '100%', label: 'Quality Guarantee' },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=800&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-roof-navy/95 via-roof-blue-800/90 to-roof-navy/95" />
      </div>
      
      <div className="absolute inset-0 ibr-texture" />
      
      <div className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                  <stat.icon className="w-8 h-8 text-roof-green-400" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Moyo',
      role: 'Property Developer',
      content: 'Roof iT has been our go-to supplier for over 5 years. Their quality is unmatched and delivery is always on time.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    },
    {
      name: 'Sarah Ndlovu',
      role: 'Homeowner',
      content: 'Excellent service from start to finish. The team helped me choose the perfect roofing solution for my new home.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    },
    {
      name: 'Michael Chikwava',
      role: 'Construction Manager',
      content: 'Professional, reliable, and great prices. We recommend Roof iT for all commercial roofing projects.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/98 via-white/95 to-gray-50/98" />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-roof-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our valued customers have to say 
            about their experience with Roof iT.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full relative overflow-hidden group"
              >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-roof-blue-50 to-roof-green-50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4 relative">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 italic relative">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-roof-green-500 shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
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

// CTA Section
function CTASection() {

    const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@roofit.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263785948128?text=Hello%20Roof%20iT%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.";
    }
  };
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&h=800&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-roof-blue-600/95 via-roof-blue-700/90 to-roof-green-700/95" />
      </div>
      
      <div className="absolute inset-0 qtile-texture" />

            {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group bg-gradient-to-r from-green-600 to-roof-blue-600 hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("whatsapp")}
        >
          <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
        </button>
        <button
          className="group bg-gradient-to-r from-green-600 to-green-700 hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("call")}
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          className="group bg-gradient-to-r from-green-600 to-green-700 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("email")}
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -right-20 w-80 h-80 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -left-40 w-96 h-96 border border-white/10 rounded-full"
      />

      <div className="container-custom relative">
        <AnimatedSection className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-shadow">
            Ready to Start Your Roofing Project?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Get in touch with our experts today for a free consultation and quote. 
            We're here to help bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-roof-blue-600 font-bold rounded-full shadow-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <a href="tel:+263783284060">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +263 783 284 060
              </motion.button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Home Page Component
export default function Home() {
  return (
    <>
      <SEOHead />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}