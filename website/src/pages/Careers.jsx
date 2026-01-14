import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Heart,
  TrendingUp,
  Award,
  Coffee,
  Shield,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
  Building2,
  GraduationCap,
  FileText,
  Upload,
  X,
  Loader2,
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Target,
  Rocket
} from 'lucide-react';
import { toast } from 'sonner';
import { SiFsecure } from "react-icons/si";

// SEO Component
const SEO = () => {
  useEffect(() => {
    document.title = 'Careers | Roof iT Chromadek Factory - Join Our Team in Zimbabwe';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join Zimbabwe\'s leading roofing manufacturer. Explore career opportunities at Roof iT Chromadek Factory. Competitive salaries, growth opportunities, and a great work environment.');
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

// Benefits Data with Images
const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages with regular reviews',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    color: 'from-emerald-500 to-green-600'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear advancement paths and professional development',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: GraduationCap,
    title: 'Training Programs',
    description: 'Continuous learning and skill development opportunities',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop',
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: Heart,
    title: 'Health Benefits',
    description: 'Medical aid contributions for you and your family',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    color: 'from-rose-500 to-pink-600'
  },
  {
    icon: Coffee,
    title: 'Great Environment',
    description: 'Supportive team culture with work-life balance',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: SiFsecure,
    title: 'Job Security',
    description: 'Stable employment with a growing company',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
    color: 'from-slate-500 to-gray-600'
  }
];

// Values Data
const values = [
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Honest and transparent in all our dealings',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop'
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Collaborative environment where everyone contributes',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Always looking for better ways to serve our customers',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop'
  }
];

// Jobs Data
const jobs = [
  {
    id: 1,
    title: 'Machine Operator',
    department: 'Production',
    location: 'Harare Factory',
    type: 'Full-time',
    salary: 'Competitive',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
    description: 'Operate and maintain roofing sheet production machinery to ensure quality output and meet production targets.',
    requirements: [
      'Minimum 2 years experience in machine operation',
      'Knowledge of metal fabrication equipment',
      'Ability to read and interpret technical drawings',
      'Good attention to detail',
      'Physical fitness for factory work'
    ],
    responsibilities: [
      'Operate IBR and Q-Tile forming machines',
      'Perform routine maintenance checks',
      'Monitor production quality',
      'Report any equipment issues promptly',
      'Maintain a clean and safe work area'
    ]
  },
  {
    id: 2,
    title: 'Sales Representative',
    department: 'Sales',
    location: 'Harare',
    type: 'Full-time',
    salary: 'Base + Commission',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop',
    description: 'Drive sales growth by building relationships with contractors, hardware stores, and direct customers.',
    requirements: [
      'Diploma in Sales/Marketing or related field',
      '3+ years sales experience, preferably in building materials',
      'Valid driver\'s license and own vehicle',
      'Excellent communication and negotiation skills',
      'Knowledge of the construction industry'
    ],
    responsibilities: [
      'Identify and pursue new sales opportunities',
      'Maintain relationships with existing clients',
      'Achieve monthly and quarterly sales targets',
      'Prepare quotations and process orders',
      'Provide market intelligence and competitor analysis'
    ]
  },
  {
    id: 3,
    title: 'Quality Control Inspector',
    department: 'Quality Assurance',
    location: 'Harare Factory',
    type: 'Full-time',
    salary: 'Competitive',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
    description: 'Ensure all products meet our strict quality standards before they reach our customers.',
    requirements: [
      'Diploma in Quality Management or Engineering',
      '2+ years experience in manufacturing QC',
      'Knowledge of quality control procedures',
      'Proficiency in measurement tools',
      'Strong analytical skills'
    ],
    responsibilities: [
      'Inspect raw materials and finished products',
      'Document quality metrics and findings',
      'Identify quality issues and recommend solutions',
      'Maintain quality control records',
      'Train production staff on quality standards'
    ]
  },
  {
    id: 4,
    title: 'Delivery Driver',
    department: 'Logistics',
    location: 'Harare (Nationwide Travel)',
    type: 'Full-time',
    salary: 'Competitive + Allowances',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    description: 'Safely transport roofing materials to customers across Zimbabwe, ensuring timely and damage-free delivery.',
    requirements: [
      'Valid Class 2 driver\'s license',
      'Defensive driving certificate',
      '3+ years experience driving heavy vehicles',
      'Good knowledge of Zimbabwe roads',
      'Physical fitness for loading/unloading'
    ],
    responsibilities: [
      'Transport materials to customer sites',
      'Ensure safe handling of products',
      'Complete delivery documentation',
      'Maintain vehicle cleanliness and report issues',
      'Provide excellent customer service'
    ]
  }
];

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
          alt="Team"
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
          <Rocket className="w-8 h-8 text-roof-green-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-[20%] hidden lg:block"
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
          <Users className="w-6 h-6 text-white/80" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -15, 10], x: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-[8%] hidden lg:block"
      >
        <div className="w-14 h-14 bg-amber-500/20 backdrop-blur-sm rounded-xl border border-amber-500/30 flex items-center justify-center">
          <Award className="w-6 h-6 text-amber-400" />
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
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-roof-green-500/20 backdrop-blur-md rounded-full text-roof-green-400 text-sm font-semibold border border-roof-green-500/30">
              <Sparkles className="w-4 h-4" />
              Join Our Growing Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
          >
            Build Your{' '}
            <span className="bg-gradient-to-r from-roof-green-400 via-roof-blue-400 to-roof-green-400 bg-clip-text text-transparent">
              Career
            </span>
            <span className="block mt-2">With Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-2xl"
          >
            Join Zimbabwe's leading roofing manufacturer and be part of a team that's 
            building the future, one roof at a time.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            {[
              { value: '50+', label: 'Team Members' },
              { value: '4', label: 'Open Positions' },
              { value: '10+', label: 'Years Growing' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-roof-green-400">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#positions">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-roof-green-500 to-roof-green-600 text-white font-bold rounded-full shadow-xl flex items-center gap-2 group"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

// Benefit Card with Image
const BenefitCard = ({ benefit, index }) => {
  const Icon = benefit.icon;
  
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
      >
        {/* Image Header */}
        <div className="relative h-36 overflow-hidden">
          <img 
            src={benefit.image}
            alt={benefit.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-80 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Icon */}
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-gray-700" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

// Value Card with Image
const ValueCard = ({ value, index }) => {
  const Icon = value.icon;
  
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative rounded-3xl overflow-hidden h-[320px]"
      >
        {/* Background Image */}
        <img 
          src={value.image}
          alt={value.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roof-navy via-roof-navy/60 to-transparent opacity-90" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-white/30 group-hover:scale-110 group-hover:bg-roof-green-500 transition-all">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-2">{value.title}</h3>
          <p className="text-white/80">{value.description}</p>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

// Enhanced Job Card Component
const JobCard = ({ job, isExpanded, onToggle, onApply, index }) => {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        layout
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        {/* Header with Image */}
        <div 
          className="cursor-pointer"
          onClick={onToggle}
        >
          <div className="relative h-32 overflow-hidden">
            <img 
              src={job.image}
              alt={job.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-roof-navy/90 via-roof-navy/70 to-transparent" />
            
            {/* Job Title Overlay */}
            <div className="absolute inset-0 flex items-center p-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white font-display">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="inline-flex items-center gap-1 text-white/80 text-sm">
                    <Building2 className="w-4 h-4" />
                    {job.department}
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                </div>
              </div>
              
              {/* Expand Button */}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
              >
                <ChevronDown className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Meta Info Bar */}
          <div className="flex items-center gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100">
            <span className="inline-flex items-center gap-1.5 text-gray-600 text-sm">
              <Clock className="w-4 h-4 text-roof-blue-500" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5 text-gray-600 text-sm">
              <DollarSign className="w-4 h-4 text-roof-green-500" />
              {job.salary}
            </span>
          </div>
        </div>
        
        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-lg">{job.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Requirements */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-roof-navy mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-roof-blue-500" />
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-roof-green-500 flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-roof-navy mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-roof-blue-500" />
                      Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-roof-green-500 flex-shrink-0 mt-0.5" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    onApply(job);
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-roof-blue-600 to-roof-green-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  Apply Now
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
};

// Application Modal
const ApplicationModal = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Application submitted successfully! We\'ll be in touch soon.');
    setIsSubmitting(false);
    onClose();
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFormData({ ...formData, resume: file });
    } else {
      toast.error('File size must be less than 5MB');
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative h-40 overflow-hidden rounded-t-3xl">
          <img 
            src={job.image}
            alt={job.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-roof-blue-600/95 via-roof-blue-700/90 to-roof-green-600/95" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors border border-white/30"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl font-bold text-white font-display">Apply for {job.title}</h2>
            <p className="text-white/80">{job.department} • {job.location}</p>
          </div>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-roof-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-roof-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-roof-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
                placeholder="+263 7XX XXX XXX"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
              <select
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-roof-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="">Select experience level</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-2">1-2 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
          </div>
          
          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
                required
              />
              <label
                htmlFor="resume-upload"
                className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-roof-blue-400 hover:bg-roof-blue-50 transition-colors"
              >
                <Upload className="w-6 h-6 text-gray-400" />
                <span className="text-gray-600">
                  {formData.resume ? formData.resume.name : 'Upload your resume (PDF, DOC - Max 5MB)'}
                </span>
              </label>
            </div>
          </div>
          
          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter (Optional)</label>
            <textarea
              rows={4}
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-roof-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all resize-none"
              placeholder="Tell us why you're interested in this position..."
            />
          </div>
          
          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-roof-blue-600 to-roof-green-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>
          
          <p className="text-center text-sm text-gray-500">
            By submitting, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [applyingJob, setApplyingJob] = useState(null);
  
  return (
    <>
      <SEO />
      <HeroSection />

      {/* Why Join Us */}
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
            <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-roof-blue-50 px-4 py-2 rounded-full mb-4">Why Roof iT</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-gray-600 text-lg">
              At Roof iT, we believe our people are our greatest asset. We offer more than 
              just jobs – we offer careers with growth, purpose, and excellent benefits.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-roof-navy/95 via-roof-blue-900/90 to-roof-navy/95" />
        </div>

        <div className="container-custom relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-roof-green-400 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">Our Culture</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-white/70 text-lg">
              These values guide everything we do and define who we are as a company.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&h=1080&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="container-custom relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-roof-blue-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm mb-4">Open Positions</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Current Opportunities
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our current job openings and find the perfect role for your skills and ambitions.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                index={index}
                isExpanded={expandedJob === job.id}
                onToggle={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                onApply={setApplyingJob}
              />
            ))}
          </div>
          
          {jobs.length === 0 && (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500">No open positions at the moment</h3>
              <p className="text-gray-400 mt-2">Check back soon or send us your CV for future opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop"
              alt=""
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-roof-blue-600/95 via-roof-blue-700/90 to-roof-green-600/95" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatedSection className="text-center px-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                  Don't See the Right Position?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals. Send us your CV and we'll 
                  keep you in mind for future opportunities.
                </p>
                <a href="mailto:careers@roofit.co.zw">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-roof-blue-600 font-bold rounded-full shadow-xl hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto"
                  >
                    Send Your CV
                    <Send className="w-5 h-5" />
                  </motion.button>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {applyingJob && (
          <ApplicationModal
            job={applyingJob}
            onClose={() => setApplyingJob(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Careers;