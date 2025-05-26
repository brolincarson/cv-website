import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Download,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Database,
  Server,
  Briefcase,
  Star,
  ExternalLink,
  Send,
  ChevronRight,
  ChevronDown,
  Target,
  Zap,
  Users,
  TrendingUp,
  Layers,
  Terminal,
  Menu,
  X,
  Eye,
  EyeOff
} from 'lucide-react';

// Site content data
const siteContent = {
  personal: {
    name: "Stacy Ayako",
    title: "Quantitative Finance Professional & Risk Management Specialist",
    email: "ayakostacy@gmail.com",
    phone: "+48 502 416 510",
    location: "Poznan, Poland",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b048?w=400&h=400&fit=crop&crop=face",
    bio: "Finance professional with a Master's in Quantitative Finance and comprehensive experience in client servicing, financial operations, and treasury functions. Possesses strong skills in derivatives pricing, CVA computation, and financial analysis, with practical expertise in SAP, Excel, and R. Proven ability to work cross-functionally to improve process efficiency and ensure accuracy in financial reporting. Adept in risk management, treasury processing, and supporting end-to-end finance functions. Currently serving as Team Lead at FIS Global, overseeing daily operations and managing complex client accounts while ensuring regulatory compliance. My expertise spans from Monte Carlo simulations and GARCH modeling to practical treasury operations and client relationship management. I bridge theoretical quantitative finance knowledge with real-world financial services applications, delivering measurable results in risk assessment, portfolio management, and operational efficiency.",
    shortBio: "Finance professional with a Master's in Quantitative Finance and comprehensive experience in client servicing, financial operations, and treasury functions. Currently serving as Team Lead at FIS Global with expertise in derivatives pricing, risk management, and treasury operations.",
    socialLinks: {
      github: "https://github.com/stacyayako",
      linkedin: "https://linkedin.com/in/stacyayako",
      twitter: "https://twitter.com/stacyayako"
    }
  },
  skills: [
    "SAP ERP", "Advanced Excel", "R Programming", "SPSS", "Python", "VBA", 
    "Financial Modeling", "Derivatives Pricing", "CVA Calculations", "Monte Carlo Simulations", 
    "GARCH Models", "Risk Management", "Treasury Operations", "Financial Reporting", 
    "Econometrics", "Portfolio Management", "Regulatory Compliance", "Client Relations"
  ],
  projects: [
    {
      id: 1,
      title: "Credit Valuation Adjustment (CVA) Analysis",
      shortDescription: "Comprehensive CVA computation for FX Forwards and Credit Default Swaps.",
      description: "Developed and implemented Credit Valuation Adjustment models for FX Forwards and Credit Default Swaps, incorporating counterparty credit risk into derivative pricing. Utilized advanced mathematical models and Monte Carlo simulations to assess credit exposure and potential losses.",
      status: "complete",
      technologies: ["R", "Monte Carlo", "Financial Modeling", "Risk Management"],
      github: "https://github.com/stacyayako",
      needsCollaboration: false
    },
    {
      id: 2,
      title: "Monte Carlo Options Pricing Model",
      shortDescription: "Advanced pricing model for lookback options using Monte Carlo simulations.",
      description: "Built sophisticated Monte Carlo simulation framework for pricing lookback options, incorporating path-dependent features and stochastic volatility models. Developed fair value estimation techniques and sensitivity analysis tools.",
      status: "complete",
      technologies: ["R", "Monte Carlo", "Options Pricing", "Statistical Modeling"],
      github: "https://github.com/stacyayako",
      needsCollaboration: false
    },
    {
      id: 3,
      title: "Portfolio Risk Management System",
      shortDescription: "GARCH-based forecasting models for stock returns and VaR assessment.",
      description: "Designed and implemented GARCH models for forecasting stock returns and market indices, with comprehensive Value-at-Risk (VaR) assessment capabilities. Integrated real-time risk monitoring and stress testing scenarios.",
      status: "complete", 
      technologies: ["R", "GARCH Models", "VaR", "Risk Analytics"],
      github: "https://github.com/stacyayako",
      needsCollaboration: false
    },
    {
      id: 4,
      title: "Liquidity Risk Management Framework",
      shortDescription: "Advanced liquidity scenario modeling and stress testing for derivative portfolios.",
      description: "Developed comprehensive liquidity risk management system evaluating funding needs under stress conditions for derivative portfolios. Implemented scenario analysis and stress testing frameworks using financial data simulations.",
      status: "complete",
      technologies: ["Financial Modeling", "Stress Testing", "Risk Management", "Derivatives"],
      github: "https://github.com/stacyayako",
      needsCollaboration: false
    },
    {
      id: 5,
      title: "Treasury Operations Optimization",
      shortDescription: "Streamlined treasury payment flows and reconciliation processes at FIS Global.",
      description: "Led optimization initiatives for treasury payment flows across multiple portfolios, implementing automated reconciliation processes and enhancing data accuracy protocols. Improved operational efficiency and reduced processing time by 30%.",
      status: "complete",
      technologies: ["SAP ERP", "Treasury Management", "Process Optimization", "Financial Operations"],
      github: "https://github.com/stacyayako",
      needsCollaboration: false
    },
    {
      id: 6,
      title: "Regulatory Compliance Dashboard",
      shortDescription: "Comprehensive compliance monitoring system for financial services operations.",
      description: "Developed regulatory compliance monitoring dashboard for tracking adherence to financial services regulations, automated risk control assessments, and real-time compliance reporting for complex client accounts.",
      status: "ongoing",
      technologies: ["Excel", "Financial Reporting", "Compliance", "Risk Controls"],
      github: "https://github.com/stacyayako",
      needsCollaboration: false
    }
  ]
};

const experience = [
  {
    title: "Senior Financial Services Account Associate",
    company: "FIS Global",
    period: "January 2025 - Present",
    location: "Poznan, Poland",
    shortSummary: "Team Lead overseeing daily operations, client account management, and regulatory compliance.",
    achievements: [
      "Serve as Team Lead, overseeing daily operations, coordinating team efforts, and supporting performance management",
      "Manage complex client accounts and financial transactions, ensuring adherence to regulatory compliance and internal risk controls",
      "Lead onboarding and training initiatives for new hires, enhancing team productivity and integration",
      "Handle escalated client queries, ensuring timely resolution and high customer satisfaction through effective communication",
      "Drive operational efficiency by participating in cross-functional projects aimed at streamlining service delivery and back-office workflows"
    ],
    technologies: ["SAP ERP", "Financial Operations", "Risk Management", "Client Relations"]
  },
  {
    title: "Financial Services Account Associate II",
    company: "FIS Global",
    period: "February 2023 - December 2024",
    location: "Poznan, Poland",
    shortSummary: "Executed complex mutual fund transactions and maintained regulatory compliance standards.",
    achievements: [
      "Executed mutual fund transactions: liquidations, distributions, exchanges, and purchases",
      "Supported daily operations through research, documentation, and internal communication",
      "Maintained accuracy of client instructions and contributed to data integrity initiatives",
      "Ensured client account compliance with regulatory and operational standards, identifying potential risk areas"
    ],
    technologies: ["Financial Operations", "Mutual Funds", "Regulatory Compliance", "Data Management"]
  },
  {
    title: "Junior Finance Analyst - NAV Middle Office, Treasury",
    company: "State Street Bank International",
    period: "October 2022 - March 2023",
    location: "Gdansk, Poland",
    shortSummary: "Processed treasury operations and supported fund transfer reconciliation across portfolios.",
    achievements: [
      "Processed investor wires and supported treasury payment flows across portfolios",
      "Ensured data accuracy in fund transfers and reconciled incoming financial transactions",
      "Communicated task completion to stakeholders and resolved ad-hoc treasury and finance requests",
      "Contributed to operational efficiency improvements in middle office processes"
    ],
    technologies: ["Treasury Operations", "Fund Transfers", "Financial Reconciliation", "Middle Office"]
  },
  {
    title: "Finance Intern - Accounts Payable",
    company: "Kenya Revenue Authority",
    period: "January 2020 - April 2020",
    location: "Nairobi, Kenya",
    shortSummary: "Managed SAP-based payment processing and maintained financial documentation accuracy.",
    achievements: [
      "Processed payments and maintained SAP-led payment records for internal and external suppliers",
      "Tracked treasury flows across multiple departments, processed invoices, and imprest entries",
      "Ensured accuracy in medical reimbursements and project finance documentation",
      "Supported accounts payable operations and improved process documentation"
    ],
    technologies: ["SAP ERP", "Accounts Payable", "Financial Documentation", "Treasury Management"]
  }
];

const education = [
  {
    degree: "Master of Science in Quantitative Finance",
    institution: "Poznan University of Economics and Business", 
    period: "September 2022 - July 2024",
    gpa: "Distinction",
    focus: "Derivatives Pricing, Econometrics, Financial Modelling, Corporate Finance, Risk Analysis, R, VBA"
  },
  {
    degree: "Bachelor of Science in Commerce",
    institution: "Strathmore University", 
    period: "September 2017 - September 2021",
    gpa: "Second Class Upper Division",
    focus: "Major in Accounting, Minor in Finance"
  }
];

const certifications = [
  {
    name: "CEFR English C1 Level",
    issuer: "Poznan University of Economics and Business",
    year: "2024",
    id: "CEFR-C1-2024"
  },
  {
    name: "Strategic Thinking",
    issuer: "LinkedIn Learning",
    year: "2024",
    id: "ST-LL-2024"
  },
  {
    name: "Excel: Power Pivot for Beginners",
    issuer: "LinkedIn Learning",
    year: "2023",
    id: "PP-LL-2023"
  },
  {
    name: "ACCA P1 Level",
    issuer: "Strathmore University",
    year: "2021",
    id: "ACCA-P1-2021"
  }
];

const skillIcons = {
  'SAP ERP': 'Database',
  'Advanced Excel': 'Database',
  'R Programming': 'Terminal',
  'SPSS': 'Terminal',
  'Python': 'Terminal',
  'VBA': 'Terminal',
  'Financial Modeling': 'TrendingUp',
  'Derivatives Pricing': 'TrendingUp',
  'CVA Calculations': 'TrendingUp',
  'Monte Carlo Simulations': 'TrendingUp',
  'GARCH Models': 'TrendingUp',
  'Risk Management': 'Star',
  'Treasury Operations': 'Database',
  'Financial Reporting': 'Database',
  'Econometrics': 'TrendingUp',
  'Portfolio Management': 'Star',
  'Regulatory Compliance': 'Star',
  'Client Relations': 'Users'
};

const navigationItems = [
  { id: 'overview', label: 'Overview', icon: 'User' },
  { id: 'experience', label: 'Experience', icon: 'Briefcase' },
  { id: 'projects', label: 'Projects', icon: 'Code2' },
  { id: 'skills', label: 'Skills', icon: 'Star' },
  { id: 'education', label: 'Education', icon: 'Target' }
];

// Reusable Read More Component
const ReadMoreText = ({ text, shortText, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const displayText = shortText || (text.length > maxLength ? text.substring(0, maxLength) + "..." : text);
  
  return (
    <div>
      <motion.div
        initial={false}
        animate={{ height: 'auto' }}
        transition={{ duration: 0.3 }}
      >
        {isExpanded ? text : displayText}
      </motion.div>
      {(shortText || text.length > maxLength) && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors"
        >
          {isExpanded ? (
            <>
              <EyeOff size={14} />
              Show Less
            </>
          ) : (
            <>
              <Eye size={14} />
              Read More
            </>
          )}
        </button>
      )}
    </div>
  );
};

// Expandable Experience Card
const ExperienceCard = ({ job, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-slate-900/70 transition-all duration-300 relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-l-xl"></div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">{job.title}</h3>
          <p className="text-sm sm:text-base text-blue-300 font-semibold mb-1">{job.company}</p>
          <p className="text-xs sm:text-sm text-gray-400">{job.location}</p>
        </div>
        <div className="text-left sm:text-right">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            {job.period}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{job.shortSummary}</p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mb-4 pt-2 border-t border-gray-700/30">
              <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                    <ChevronRight className="text-cyan-400 flex-shrink-0 mt-0.5" size={14} />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.technologies.slice(0, isExpanded ? job.technologies.length : 3).map((tech, idx) => (
          <span key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-medium border border-blue-400/30">
            {tech}
          </span>
        ))}
        {!isExpanded && job.technologies.length > 3 && (
          <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-medium border border-blue-400/30 opacity-60">
            +{job.technologies.length - 3} more
          </span>
        )}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
      >
        {isExpanded ? (
          <>
            <ChevronDown size={16} />
            Show Less
          </>
        ) : (
          <>
            <ChevronRight size={16} />
            View Details
          </>
        )}
      </button>
    </motion.div>
  );
};

// Expandable Project Card
const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 group h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-base sm:text-lg font-bold text-white flex-1 pr-3">{project.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          project.status === 'complete' ? 'bg-green-500/20 text-green-300 border border-green-400/30' :
          project.status === 'ongoing' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
          'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
        } whitespace-nowrap`}>
          {project.status}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          {isExpanded ? project.description : project.shortDescription}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mb-4"
          >
            <div className="pt-2 border-t border-gray-700/30">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-medium border border-blue-400/30">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                {project.github && (
                  <a href={project.github} className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors text-sm flex-1" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 text-sm flex-1" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.needsCollaboration && (
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/30 rounded-lg font-medium transition-colors text-sm flex-1">
                    <Layers size={16} />
                    Collaborate
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors w-full justify-center py-2"
        >
          {isExpanded ? (
            <>
              <ChevronDown size={16} />
              Show Less
            </>
          ) : (
            <>
              <ChevronRight size={16} />
              View Details
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const iconMap = {
    User, Briefcase, Code2, Star, Target, MapPin, Mail, Phone, Calendar, Download,
    Github, Linkedin, Twitter, Database, Server, ExternalLink, Send, ChevronRight,
    ChevronDown, Zap, Users, TrendingUp, Layers, Terminal, Menu, X, Eye, EyeOff
  };

  const getIcon = (iconName) => iconMap[iconName] || Code2;

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur opacity-60"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full p-0.5">
                {siteContent.personal.profileImage ? (
                  <img 
                    src={siteContent.personal.profileImage}
                    alt={siteContent.personal.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                    <User size={16} className="text-cyan-400" />
                  </div>
                )}
              </div>
            </div>
            <h1 className="text-base font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {siteContent.personal.name.split(' ')[0]}
            </h1>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-2"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border border-white/20 shadow-2xl"
            >
              <div className="p-3 space-y-1 bg-slate-950/85 backdrop-blur-2xl rounded-b-xl border-x border-b border-white/15">
                {navigationItems.map((item) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-3 w-full px-3 py-2.5 text-left text-gray-300 hover:text-white hover:bg-blue-500/20 rounded-lg transition-all duration-200 text-sm ${
                        activeSection === item.id ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' : ''
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                
                <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                  <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 text-sm">
                    <Download size={14} />
                    Download Resume
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/30 rounded-lg font-medium transition-colors text-sm"
                  >
                    <Send size={14} />
                    Get In Touch
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Desktop Sidebar - Hidden on Mobile */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block lg:w-80 xl:w-96 lg:fixed lg:h-screen bg-slate-900/30 backdrop-blur-2xl border border-white/10 lg:m-4 xl:m-6 lg:overflow-y-auto rounded-2xl"
        >
          <div className="p-6">
            {/* Profile Section */}
            <div className="text-center mb-6">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative mb-4"
              >
                <div className="w-24 h-24 xl:w-32 xl:h-32 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 rounded-full blur-lg opacity-60 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full p-1">
                    {siteContent.personal.profileImage ? (
                      <img 
                        src={siteContent.personal.profileImage}
                        alt={siteContent.personal.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                        <User size={48} className="text-cyan-400" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg xl:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
              >
                {siteContent.personal.name}
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm xl:text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3"
              >
                {siteContent.personal.title}
              </motion.p>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex justify-center items-center gap-2 text-xs text-green-400 mb-4"
              >
                <Calendar size={12} />
                <span>Available for opportunities</span>
              </motion.div>
            </div>

            {/* Contact Information */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-3 mb-6"
            >
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                Contact
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin size={14} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{siteContent.personal.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-xs">
                  <Mail size={14} className="text-cyan-400 flex-shrink-0" />
                  <a href={`mailto:${siteContent.personal.email}`} className="text-gray-300 hover:text-white transition-colors break-all">
                    {siteContent.personal.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-2 text-xs">
                  <Phone size={14} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{siteContent.personal.phone}</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-base font-bold text-white mb-3">Connect</h3>
              <div className="flex gap-2">
                {siteContent.personal.socialLinks.github && (
                  <a href={siteContent.personal.socialLinks.github} className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                  </a>
                )}
                {siteContent.personal.socialLinks.linkedin && (
                  <a href={siteContent.personal.socialLinks.linkedin} className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={16} />
                  </a>
                )}
                {siteContent.personal.socialLinks.twitter && (
                  <a href={siteContent.personal.socialLinks.twitter} className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                    <Twitter size={16} />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="space-y-2 mb-6"
            >
              <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 text-sm">
                <Download size={16} />
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/30 rounded-lg font-medium transition-colors text-sm"
              >
                <Send size={16} />
                Get In Touch
              </button>
            </motion.div>

            {/* Navigation */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="pt-4 border-t border-gray-700"
            >
              <h3 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Sections</h3>
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-3 w-full px-3 py-2.5 text-left text-gray-300 hover:text-white hover:bg-blue-500/20 rounded-lg transition-all duration-200 text-sm ${
                        activeSection === item.id ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' : ''
                      }`}
                    >
                      <Icon size={14} />
                      <span>{item.label}</span>
                      <ChevronRight size={12} className="ml-auto" />
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="lg:ml-80 xl:ml-96 lg:pl-4 xl:pl-6 flex-1 pt-16 lg:pt-0">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 space-y-4 sm:space-y-6 lg:space-y-8">
            
            {/* Mobile Profile Header */}
            <div className="lg:hidden">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-4"
              >
                <div className="w-20 h-20 mx-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 rounded-full blur-lg opacity-60"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full p-1 overflow-hidden">
                    {siteContent.personal.profileImage ? (
                      <img 
                        src={siteContent.personal.profileImage}
                        alt={siteContent.personal.name}
                        className="w-full h-full object-cover rounded-full block"
                        loading="eager"
                        style={{ minHeight: '76px', minWidth: '76px' }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                        <User size={30} className="text-cyan-400" />
                      </div>
                    )}
                  </div>
                </div>
                
                <h1 className="text-lg sm:text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {siteContent.personal.name}
                </h1>
                
                <p className="text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                  {siteContent.personal.title}
                </p>

                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-4">
                  <div className="flex items-center gap-1 text-xs text-green-400">
                    <Calendar size={12} />
                    <span>Available for opportunities</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin size={12} />
                    <span>{siteContent.personal.location}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mb-4">
                  {siteContent.personal.socialLinks.github && (
                    <a href={siteContent.personal.socialLinks.github} className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  )}
                  {siteContent.personal.socialLinks.linkedin && (
                    <a href={siteContent.personal.socialLinks.linkedin} className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={16} />
                    </a>
                  )}
                  {siteContent.personal.socialLinks.twitter && (
                    <a href={siteContent.personal.socialLinks.twitter} className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                      <Twitter size={16} />
                    </a>
                  )}
                  <a href={`mailto:${siteContent.personal.email}`} className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg transition-colors">
                    <Mail size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Overview Section */}
            <motion.section 
              id="overview"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-blue-400" size={24} />
                <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Professional Overview</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl text-center p-3">
                  <TrendingUp className="text-cyan-400 mx-auto mb-2" size={24} />
                  <h4 className="font-bold text-base sm:text-lg text-white mb-1">5+ Years</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Experience</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl text-center p-3">
                  <Users className="text-blue-400 mx-auto mb-2" size={24} />
                  <h4 className="font-bold text-base sm:text-lg text-white mb-1">MSc Finance</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Quantitative</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl text-center p-3">
                  <Zap className="text-green-400 mx-auto mb-2" size={24} />
                  <h4 className="font-bold text-base sm:text-lg text-white mb-1">Team Leader</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Current Role</p>
                </div>
              </div>

              <div className="text-sm sm:text-base text-gray-300 leading-relaxed">
                <ReadMoreText 
                  text={siteContent.personal.bio}
                  shortText={siteContent.personal.shortBio}
                />
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section 
              id="experience"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Briefcase className="text-blue-400" size={24} />
                <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Professional Experience</h2>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {experience.map((job, index) => (
                  <ExperienceCard key={index} job={job} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section 
              id="projects"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Code2 className="text-blue-400" size={24} />
                <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {siteContent.projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section 
              id="skills"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Star className="text-blue-400" size={24} />
                <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technical Skills</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
                {siteContent.skills.map((skill, index) => {
                  const iconName = skillIcons[skill] || 'Code2';
                  const Icon = getIcon(iconName);
                  
                  return (
                    <motion.div 
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-3 hover:bg-slate-900/80 transition-all duration-300 text-center group"
                    >
                      <Icon className="text-blue-400 group-hover:text-cyan-400 transition-colors mx-auto mb-2" size={20} />
                      <span className="text-xs font-medium text-white text-center leading-tight block">{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Education & Certifications */}
            <motion.section 
              id="education"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Target className="text-blue-400" size={24} />
                <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education & Certifications</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Education */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Education</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {education.map((edu, index) => (
                      <motion.div 
                        key={index}
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4"
                      >
                        <h4 className="font-bold text-white mb-1 text-sm sm:text-base">{edu.degree}</h4>
                        <p className="text-blue-300 font-semibold mb-1 text-sm">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-gray-400 gap-1 sm:gap-0">
                          <span>{edu.period}</span>
                          <span className="font-semibold">{edu.gpa}</span>
                        </div>
                        <p className="text-xs text-cyan-400 mt-1">{edu.focus}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Certifications</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.div 
                        key={index}
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-0">
                          <div className="flex-1">
                            <h4 className="font-bold text-white mb-1 text-sm">{cert.name}</h4>
                            <p className="text-xs text-blue-300">{cert.issuer}</p>
                            <p className="text-xs text-gray-400 mt-1">ID: {cert.id}</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-400 text-white px-2 py-1 rounded text-xs font-semibold">
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section 
              id="contact"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                <Send className="text-blue-400" size={24} />
                <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ready to Collaborate</h2>
              </div>

              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                Seeking a results-driven Quantitative Finance professional to enhance your financial operations? 
                Let's discuss how my expertise in derivatives pricing, risk management, and treasury operations can drive your organization forward.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3">
                <a href={`mailto:${siteContent.personal.email}`} className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 text-sm">
                  <Mail size={16} />
                  Send Email
                </a>
                {siteContent.personal.socialLinks.github && (
                  <a href={siteContent.personal.socialLinks.github} className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/30 rounded-lg font-medium transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View GitHub
                  </a>
                )}
                <a href={`tel:${siteContent.personal.phone}`} className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors text-sm">
                  <Phone size={16} />
                  Call Now
                </a>
              </div>

              {/* Contact Details for Mobile */}
              <div className="lg:hidden mt-6 pt-4 border-t border-gray-700/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  <div className="bg-slate-900/30 backdrop-blur-xl border border-white/10 rounded-lg p-3">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-sm">
                      <Mail size={16} className="text-blue-400" />
                      Email
                    </h4>
                    <a href={`mailto:${siteContent.personal.email}`} className="text-gray-300 hover:text-white transition-colors text-xs break-all">
                      {siteContent.personal.email}
                    </a>
                  </div>
                  <div className="bg-slate-900/30 backdrop-blur-xl border border-white/10 rounded-lg p-3">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-cyan-400" />
                      Location
                    </h4>
                    <span className="text-gray-300 text-xs">{siteContent.personal.location}</span>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </div>
  );
}
