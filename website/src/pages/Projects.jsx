import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Building2, 
  Home, 
  Factory, 
  Warehouse,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  ArrowRight,
  Eye,
  Layers,
  CheckCircle
} from 'lucide-react';

// SEO Component
const SEO = () => {
  useEffect(() => {
    document.title = 'Our Projects | Roof iT Chromadek Factory - Completed Roofing Projects Zimbabwe';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View our portfolio of completed roofing projects across Zimbabwe. From residential homes to commercial buildings and industrial facilities - see our quality work in action.');
    }
  }, []);
  return null;
};

// Animated Section Wrapper
const AnimatedSection = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Project Categories
const categories = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'residential', label: 'Residential', icon: Home },
  { id: 'commercial', label: 'Commercial', icon: Building2 },
  { id: 'industrial', label: 'Industrial', icon: Factory },
  { id: 'agricultural', label: 'Agricultural', icon: Warehouse }
];

// Projects Data
const projects = [
  {
    id: 1,
    title: 'Borrowdale Luxury Home',
    category: 'residential',
    location: 'Borrowdale, Harare',
    date: '2024',
    product: 'IBR Chromadek',
    color: 'Charcoal Grey',
    area: '450 m²',
    description: 'A stunning modern residence featuring premium charcoal grey IBR Chromadek roofing that complements the contemporary architecture.',
    features: ['Custom cut lengths', 'Premium finish', 'Complete accessories'],
    gradient: 'from-slate-600 to-slate-800'
  },
  {
    id: 2,
    title: 'Msasa Industrial Park',
    category: 'industrial',
    location: 'Msasa, Harare',
    date: '2024',
    product: 'IBR Galvanized',
    color: 'Galvanized Steel',
    area: '2,500 m²',
    description: 'Large-scale industrial warehouse complex requiring durable, cost-effective galvanized roofing for maximum protection.',
    features: ['Bulk order', 'Heavy gauge steel', 'Valley gutters included'],
    gradient: 'from-zinc-500 to-zinc-700'
  },
  {
    id: 3,
    title: 'Avondale Shopping Center',
    category: 'commercial',
    location: 'Avondale, Harare',
    date: '2024',
    product: 'Q-Tiles',
    color: 'Brick Red',
    area: '1,200 m²',
    description: 'Upscale retail complex featuring elegant brick red Q-Tiles for a premium aesthetic appeal.',
    features: ['Aesthetic finish', 'Weather resistant', 'Color coordinated'],
    gradient: 'from-red-600 to-red-800'
  },
  {
    id: 4,
    title: 'Chisipite Family Residence',
    category: 'residential',
    location: 'Chisipite, Harare',
    date: '2023',
    product: 'IBR Chromadek',
    color: 'Forest Green',
    area: '380 m²',
    description: 'Beautiful family home with forest green roofing that blends harmoniously with the lush garden surroundings.',
    features: ['Custom color match', 'Full trim package', 'Fast delivery'],
    gradient: 'from-green-600 to-green-800'
  },
  {
    id: 5,
    title: 'Mazowe Farm Storage',
    category: 'agricultural',
    location: 'Mazowe',
    date: '2023',
    product: 'IBR Galvanized',
    color: 'Galvanized Steel',
    area: '3,200 m²',
    description: 'Multiple storage facilities for a large-scale farming operation, requiring reliable and durable roofing.',
    features: ['Agricultural spec', 'Bulk pricing', 'Regional delivery'],
    gradient: 'from-amber-600 to-amber-800'
  },
  {
    id: 6,
    title: 'Mount Pleasant Office Complex',
    category: 'commercial',
    location: 'Mount Pleasant, Harare',
    date: '2023',
    product: 'IBR Chromadek',
    color: 'Navy Blue',
    area: '900 m²',
    description: 'Professional office building with sophisticated navy blue roofing creating a corporate aesthetic.',
    features: ['Corporate look', 'Premium materials', 'Complete package'],
    gradient: 'from-blue-700 to-blue-900'
  },
  {
    id: 7,
    title: 'Graniteside Factory',
    category: 'industrial',
    location: 'Graniteside, Harare',
    date: '2023',
    product: 'IBR Galvanized',
    color: 'Galvanized Steel',
    area: '4,500 m²',
    description: 'Large manufacturing facility requiring heavy-duty galvanized roofing for industrial applications.',
    features: ['Heavy gauge', 'Industrial grade', 'Long span sheets'],
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    id: 8,
    title: 'Highlands Townhouse Complex',
    category: 'residential',
    location: 'Highlands, Harare',
    date: '2023',
    product: 'Q-Tiles',
    color: 'Desert Sand',
    area: '1,800 m²',
    description: 'Cluster housing development featuring elegant desert sand Q-Tiles for a Mediterranean aesthetic.',
    features: ['Uniform color', 'Multiple units', 'Coordinated delivery'],
    gradient: 'from-yellow-600 to-orange-700'
  },
  {
    id: 9,
    title: 'Southerton Warehouse',
    category: 'industrial',
    location: 'Southerton, Harare',
    date: '2022',
    product: 'IBR Galvanized',
    color: 'Galvanized Steel',
    area: '2,800 m²',
    description: 'Distribution center warehouse with cost-effective galvanized roofing solution.',
    features: ['Standard spec', 'Quick turnaround', 'Bulk order'],
    gradient: 'from-slate-500 to-slate-700'
  },
  {
    id: 10,
    title: 'Glen Lorne Estate',
    category: 'residential',
    location: 'Glen Lorne, Harare',
    date: '2022',
    product: 'IBR Chromadek',
    color: 'Burgundy',
    area: '520 m²',
    description: 'Luxurious estate home with rich burgundy Chromadek roofing adding a touch of elegance.',
    features: ['Premium color', 'Custom lengths', 'Full accessory kit'],
    gradient: 'from-rose-700 to-rose-900'
  },
  {
    id: 11,
    title: 'Chitungwiza Community Center',
    category: 'commercial',
    location: 'Chitungwiza',
    date: '2022',
    product: 'IBR Chromadek',
    color: 'Sky Blue',
    area: '650 m²',
    description: 'Community facility serving local residents with bright, welcoming sky blue roofing.',
    features: ['Community project', 'Competitive pricing', 'Quality assured'],
    gradient: 'from-sky-500 to-sky-700'
  },
  {
    id: 12,
    title: 'Ruwa Poultry Farm',
    category: 'agricultural',
    location: 'Ruwa',
    date: '2022',
    product: 'IBR Galvanized',
    color: 'Galvanized Steel',
    area: '1,500 m²',
    description: 'Poultry housing facilities requiring well-ventilated, durable roofing solutions.',
    features: ['Farm grade', 'Ventilation ready', 'Durable finish'],
    gradient: 'from-emerald-600 to-emerald-800'
  }
];

// Project Card Component
const ProjectCard = ({ project, onClick }) => {
  const CategoryIcon = categories.find(c => c.id === project.category)?.icon || Layers;
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
        {/* Image Placeholder with Gradient */}
        <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* IBR Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 22px)',
            }} />
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Eye className="w-6 h-6 text-roof-navy" />
            </motion.div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2">
            <CategoryIcon className="w-4 h-4 text-roof-blue-600" />
            <span className="text-sm font-medium text-roof-navy capitalize">{project.category}</span>
          </div>
          
          {/* Color Swatch */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${project.gradient}`} />
            <span className="text-xs font-medium text-roof-navy">{project.color}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-roof-navy mb-2 font-display group-hover:text-roof-blue-600 transition-colors">
            {project.title}
          </h3>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.date}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-roof-blue-600">{project.product}</span>
            <span className="text-sm text-gray-500">{project.area}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Modal
const ProjectModal = ({ project, onClose, onPrev, onNext }) => {
  if (!project) return null;
  
  const CategoryIcon = categories.find(c => c.id === project.category)?.icon || Layers;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className={`relative md:w-1/2 h-64 md:h-auto bg-gradient-to-br ${project.gradient}`}>
            {/* IBR Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 33px)',
              }} />
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2">
              <CategoryIcon className="w-5 h-5 text-roof-blue-600" />
              <span className="font-medium text-roof-navy capitalize">{project.category}</span>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-roof-navy" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-roof-navy" />
            </button>
          </div>
          
          {/* Content Section */}
          <div className="md:w-1/2 p-8 overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <h2 className="text-3xl font-bold text-roof-navy mb-4 font-display">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <span className="text-sm text-gray-500">Product</span>
                <p className="font-semibold text-roof-navy">{project.product}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <span className="text-sm text-gray-500">Color</span>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${project.gradient}`} />
                  <p className="font-semibold text-roof-navy">{project.color}</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 col-span-2">
                <span className="text-sm text-gray-500">Total Area</span>
                <p className="font-semibold text-roof-navy">{project.area}</p>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-roof-navy mb-3">Project Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-roof-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA */}
            <Link
              to="/contact"
              className="w-full btn-primary inline-flex items-center justify-center gap-2"
              onClick={onClose}
            >
              Start Similar Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);
  
  const currentIndex = selectedProject ? filteredProjects.findIndex(p => p.id === selectedProject.id) : -1;
  
  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    setSelectedProject(filteredProjects[prevIndex]);
  };
  
  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    setSelectedProject(filteredProjects[nextIndex]);
  };
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentIndex]);
  
  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-roof-navy via-roof-blue-900 to-roof-navy pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl pb-8"
          >
            <span className="inline-block px-4 py-2 bg-roof-green-500/20 rounded-full text-roof-green-400 text-sm font-semibold mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-roof-blue-400 to-roof-green-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of completed projects across Zimbabwe. 
              From residential homes to industrial facilities, see our quality work in action.
            </p>
          </motion.div>
          
          {/* Stats */}
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-roof-blue-500 to-roof-green-500 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-roof-navy to-roof-blue-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-roof-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-roof-green-500/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trusted Roof iT for their roofing needs. 
                  Contact us today for a free consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-roof-blue-500 to-roof-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Browse Products
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
