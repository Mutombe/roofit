import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  User,
  Building,
  FileText,
  CheckCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Sparkles,
  Navigation,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { toast } from 'sonner';

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom map marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// SEO Component
const SEO = () => {
  useEffect(() => {
    document.title = 'Contact Us | Roof iT Chromadek Factory - Get a Free Quote';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Roof iT Chromadek Factory for premium roofing solutions in Zimbabwe. Get a free quote, visit our Harare factory, or call us today. Located at Charter Road, near Mbare Flyover.');
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

// Contact Info Card with Image
const ContactCard = ({ icon: Icon, title, lines, link, linkText, delay, image, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8 }}
    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
  >
    {/* Image Header */}
    <div className="relative h-32 overflow-hidden">
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-80 mix-blend-multiply`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Icon */}
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-roof-blue-600" />
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-lg font-bold text-roof-navy mb-3">{title}</h3>
      {lines.map((line, index) => (
        <p key={index} className="text-gray-600 text-sm leading-relaxed">{line}</p>
      ))}
      {link && (
        <a 
          href={link} 
          className="inline-flex items-center gap-2 mt-4 text-roof-blue-600 font-semibold text-sm hover:text-roof-blue-700 transition-colors group/link"
        >
          {linkText}
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  </motion.div>
);

// Form Input Component
const FormInput = ({ label, name, type = 'text', placeholder, value, onChange, required, icon: Icon }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3.5 ${Icon ? 'pl-12' : ''} border border-gray-200 rounded-xl focus:ring-2 focus:ring-roof-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white`}
      />
    </div>
  </div>
);

// Form Select Component
const FormSelect = ({ label, name, options, value, onChange, required, icon: Icon }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3.5 ${Icon ? 'pl-12' : ''} border border-gray-200 rounded-xl focus:ring-2 focus:ring-roof-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  </div>
);

// Form Textarea Component
const FormTextarea = ({ label, name, placeholder, value, onChange, required, rows = 5 }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-roof-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
    />
  </div>
);

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
          alt="Contact"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-roof-navy/95 via-roof-navy/85 to-roof-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-roof-navy via-transparent to-roof-navy/30" />
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
        className="absolute top-1/4 right-[10%] hidden lg:block"
      >
        <div className="w-20 h-20 bg-roof-green-500/20 backdrop-blur-sm rounded-2xl border border-roof-green-500/30 flex items-center justify-center">
          <MessageSquare className="w-8 h-8 text-roof-green-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-[20%] hidden lg:block"
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
          <Phone className="w-6 h-6 text-white/80" />
        </div>
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div style={{ opacity }} className="max-w-3xl text-left ml-0 mr-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-semibold border border-white/20">
              <Sparkles className="w-4 h-4 text-roof-green-400" />
              We'd Love to Hear From You
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
          >
            Get in{' '}
            <span className="bg-gradient-to-r from-roof-green-400 via-roof-blue-400 to-roof-green-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-2xl"
          >
            Have questions about our roofing solutions? Need a quote for your project? 
            Our team is ready to help you find the perfect roofing solution.
          </motion.p>

          {/* Quick Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="tel:+263783284060">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-roof-green-500 to-roof-green-600 text-white font-bold rounded-full shadow-xl flex items-center gap-2 group"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.button>
            </a>
            <a href="mailto:sales@roofit.co.zw">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </motion.button>
            </a>
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
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

// Map Component
function LocationMap() {
  // Roof iT location coordinates (7 Charter Road, Harare, Zimbabwe)
  const position = [-17.8519, 31.0527]

  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <MapContainer 
        center={position} 
        zoom={15} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="text-center p-2">
              <strong className="text-roof-navy">Roof iT Chromadek Factory</strong>
              <br />
              7 Charter Road
              <br />
              Near Mbare Flyover, Harare
              <br />
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-roof-blue-600 font-semibold mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Map Overlay Card */}
      <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-72 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg z-[1000]">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-roof-blue-500 to-roof-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-roof-navy text-sm">Roof iT Factory</h4>
            <p className="text-gray-600 text-xs">7 Charter Road, Near Mbare Flyover</p>
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-roof-blue-600 font-semibold text-xs mt-1 hover:text-roof-blue-700"
            >
              <Navigation className="w-3 h-3" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you soon.');

    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Factory',
      lines: [
        '7 Charter Road',
        'Near Mbare Flyover',
        'Harare, Zimbabwe'
      ],
      link: 'https://maps.google.com',
      linkText: 'Get Directions',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: [
        '+263 783 284 060',
        '+263 719 093 565'
      ],
      link: 'tel:+263783284060',
      linkText: 'Call Now',
      image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop',
      color: 'from-emerald-600 to-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: [
        'sales@roofit.co.zw',
        'info@roofit.co.zw'
      ],
      link: 'mailto:sales@roofit.co.zw',
      linkText: 'Send Email',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      lines: [
        'Mon - Fri: 7:30 AM - 5:00 PM',
        'Saturday: 8:00 AM - 1:00 PM',
        'Sunday: Closed'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      color: 'from-purple-600 to-violet-500'
    }
  ];

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'quote', label: 'Request a Quote' },
    { value: 'products', label: 'Product Inquiry' },
    { value: 'installation', label: 'Installation Services' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Business Partnership' },
    { value: 'other', label: 'Other' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const faqs = [
    {
      question: 'What areas do you deliver to?',
      answer: 'We deliver throughout Zimbabwe, with free delivery available in Harare for orders above a certain value. Contact us for delivery quotes to other areas.'
    },
    {
      question: 'How long does production take?',
      answer: 'Standard orders are typically ready within 2-3 business days. Large or custom orders may take longer. We\'ll provide an accurate timeline when you place your order.'
    },
    {
      question: 'Do you offer installation services?',
      answer: 'Yes! We have a team of experienced installers who can handle projects of any size. Installation quotes are provided separately from material costs.'
    },
    {
      question: 'What warranty do you offer?',
      answer: 'Our Chromadek products come with manufacturer warranties. IBR Chromadek sheets have up to 15 years warranty depending on the coating. Ask our team for specific warranty details.'
    }
  ];

  return (
    <main>
      <SEO />
      <HeroSection />

      {/* Contact Info Cards */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ContactCard key={info.title} {...info} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-50/98" />
        </div>

        <div className="container-custom relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm mb-4">Contact Form</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-roof-green-500 to-roof-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-roof-navy mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your message has been sent successfully. We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput
                        label="Full Name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        icon={User}
                      />
                      <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        icon={Mail}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="+263 7XX XXX XXX"
                        value={formData.phone}
                        onChange={handleChange}
                        icon={Phone}
                      />
                      <FormInput
                        label="Company (Optional)"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        icon={Building}
                      />
                    </div>

                    <FormSelect
                      label="Subject"
                      name="subject"
                      options={subjectOptions}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      icon={FileText}
                    />

                    <FormTextarea
                      label="Your Message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-roof-blue-600 to-roof-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map & Additional Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {/* Interactive Map */}
                <LocationMap />

                {/* Social Links */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-bold text-roof-navy mb-4">Connect With Us</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Follow us on social media for updates, project showcases, and roofing tips.
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-roof-blue-500 hover:to-roof-green-600 hover:text-white transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Contact CTA */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&h=400&fit=crop"
                    alt=""
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-roof-blue-600/95 to-roof-green-600/95" />
                  <div className="relative p-8 text-white">
                    <h3 className="text-xl font-bold mb-3">Need Immediate Assistance?</h3>
                    <p className="text-white/90 mb-6 text-sm">
                      Call us directly for urgent inquiries or to speak with our team right away.
                    </p>
                    <a href="tel:+263783284060">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-white text-roof-blue-600 font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        <Phone className="w-5 h-5" />
                        +263 783 284 060
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="container-custom relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-roof-blue-50 px-4 py-2 rounded-full mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions about our products and services.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-gray-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100"
                >
                  <h3 className="text-lg font-bold text-roof-navy mb-2 flex items-start gap-3">
                    <span className="w-6 h-6 bg-gradient-to-br from-roof-blue-500 to-roof-green-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">?</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 pl-9">{faq.answer}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-roof-navy/95 via-roof-blue-900/90 to-roof-navy/95" />
        </div>

        <div className="container-custom relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Visit our factory today or give us a call to discuss your roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+263783284060">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-roof-blue-600 font-bold rounded-full shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.button>
              </a>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=-17.8519,31.0527"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </motion.button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;