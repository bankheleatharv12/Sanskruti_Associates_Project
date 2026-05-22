import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Mail, MapPin, ChevronDown, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Footer } from './Footer';

// TypeScript declaration for CSS custom properties
declare module 'react' {
  interface CSSProperties {
    '--card-border-color'?: string;
    '--card-glow-color'?: string;
  }
}

// Google Maps locations
const branchLocations: Record<string, string> = {
  baramati: 'https://www.google.com/maps/search/?api=1&query=Shop+No.+11+Second+Floor+Subhadra+Mall+Front+of+Reliance+Smart+MIDC+Baramati+Dist+Pune+413133',
  pune: 'https://www.google.com/maps/search/?api=1&query=Pune+Maharashtra',
  mumbai: 'https://www.google.com/maps/search/?api=1&query=Mumbai+Maharashtra',
  kolhapur: 'https://www.google.com/maps/search/?api=1&query=Kolhapur+Maharashtra',
  saswad: 'https://www.google.com/maps/search/?api=1&query=Saswad+Maharashtra',
  tembhurni: 'https://www.google.com/maps/search/?api=1&query=Tembhurni+Maharashtra',
};

const openMap = (key: string) => {
  window.open(branchLocations[key], '_blank', 'noopener,noreferrer');
};

// Last updated: 2026-05-22 - Added Saswad and Tembhurni branches

// Logo configuration interface
interface ContactLogoConfig {
  src: string;
  alt: string;
  brandColor: string;
}

// Logo configurations
const logoConfigs: Record<string, ContactLogoConfig> = {
  call: {
    src: '/Contact_Us_Logos/call_logo.png',
    alt: 'Call Us',
    brandColor: '#16a34a',
  },
  whatsapp: {
    src: '/Contact_Us_Logos/whatsapp_logo.png',
    alt: 'WhatsApp',
    brandColor: '#25d366',
  },
  email: {
    src: '/Contact_Us_Logos/Email_logo.png',
    alt: 'Email',
    brandColor: '#2563eb',
  },
  office: {
    src: '/Contact_Us_Logos/office_logo.png',
    alt: 'Our Office',
    brandColor: '#2563eb',
  },
  branches: {
    src: '/Contact_Us_Logos/branches_logo.png',
    alt: 'Branches',
    brandColor: '#2563eb',
  },
  businessHours: {
    src: '/Contact_Us_Logos/business_hours_logo.png',
    alt: 'Business Hours',
    brandColor: '#2563eb',
  },
};

// Data
const faqs = [
  { q: 'What documents are required?', a: 'Basic documents include Aadhaar card, PAN card, income proof (salary slips/ITR), bank statements for last 6 months, and property documents (for home/LAP loans).' },
  { q: 'How long does approval take?', a: 'Typically, loan approval takes 2-3 working days after all documents are submitted and verified. For urgent cases, we can expedite the process.' },
  { q: 'What is the minimum credit score?', a: 'Generally, a CIBIL score of 700+ is preferred. However, we work with multiple banks and can help even with lower scores depending on your overall profile.' },
  { q: 'Can I apply for multiple loans?', a: 'Yes, you can apply for multiple loan types. However, approval depends on your repayment capacity, existing EMIs, and debt-to-income ratio.' },
  { q: 'Is there any processing fee?', a: 'Our consultation service is FREE. Bank processing fees vary by lender and loan amount. We help you find banks with minimal processing fees.' },
];

const services = [
  'Home Loan',
  'Loan Against Property',
  'Personal & Business Loan',
  'Car Loan',
  'CC / OD',
  'Machinery Loan',
];

// Updated branches list with Saswad and Tembhurni
const branches = [
  {
    name: 'Baramati',
    tag: 'HEAD OFFICE',
    address: 'Shop No. 11 Second Floor, Subhadra Mall, Front of Relince Smart MIDC, Baramati Dist-Pune 413133',
  },
  {
    name: 'Pune',
    tag: 'BRANCH',
    address: 'Pune, Maharashtra',
  },
  {
    name: 'Mumbai',
    tag: 'BRANCH',
    address: 'Mumbai, Maharashtra',
  },
  {
    name: 'Kolhapur',
    tag: 'BRANCH',
    address: 'Kolhapur, Maharashtra',
  },
  {
    name: 'Saswad',
    tag: 'BRANCH',
    address: 'Saswad, Maharashtra',
  },
  {
    name: 'Tembhurni',
    tag: 'BRANCH',
    address: 'Tembhurni, Maharashtra',
  },
];

// Logo Circle Component
const LogoCircle = ({ config, size = 88, objectFit = 'cover' }: { config: ContactLogoConfig; size?: number; objectFit?: 'cover' | 'contain' }) => {
  return (
    <div
      className="logo-circle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        background: '#ffffff',
        border: '2px solid #e2e8f0',
        transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <img
        src={config.src}
        alt={config.alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: objectFit,
          objectPosition: 'center',
          display: 'block',
          padding: objectFit === 'contain' ? '8px' : '0',
        }}
      />
    </div>
  );
};

// Typewriter hook
const useTypewriter = (text: string, delay: number = 600) => {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, ++i));
        if (i >= text.length) clearInterval(interval);
      }, 32);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  return displayed;
};

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: '',
    loanAmount: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        loanType: '',
        loanAmount: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleFieldChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen" style={{ background: '#f8fafc' }}>
      <style>{`
        /* Typography System */
        .page-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0f172a;
        }

        .section-heading {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #1e293b;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }

        .card-data {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
        }

        .card-support {
          font-size: 0.8rem;
          font-weight: 400;
          color: #64748b;
          letter-spacing: 0.02em;
        }

        .branch-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
        }

        .branch-address {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.5;
        }

        .faq-question {
          font-size: 0.95rem;
          font-weight: 600;
          color: #1e293b;
        }

        .form-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* Typewriter cursor blink */
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .cursor-blink {
          animation: cursorBlink 0.8s ease infinite;
          color: #2563eb;
          font-weight: 300;
          margin-left: 2px;
        }

        /* Unified Border System for ALL Cards */
        .contact-card-base {
          border: 2px solid var(--card-border-color);
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                      box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                      border-color 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-card-base::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 4px;
          background: var(--card-border-color);
          border-radius: 20px 20px 0 0;
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-card-base:hover::before {
          transform: scaleX(0.92) scaleY(1.3);
        }

        .contact-card-base:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--card-border-color);
          box-shadow:
            0 0 0 2px var(--card-border-color),
            0 24px 60px rgba(0,0,0,0.25),
            0 12px 24px rgba(0,0,0,0.20),
            0 4px 8px rgba(0,0,0,0.15);
        }

        /* Logo reaction on card hover */
        .contact-card-base:hover .logo-circle {
          transform: scale(1.1) translateY(-3px);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Button ripple effect */
        @keyframes ripple {
          to { 
            transform: scale(3.5); 
            opacity: 0; 
          }
        }

        .btn-ripple {
          position: relative;
          overflow: hidden;
        }

        /* Branch Row Hover Effects */
        .branch-row {
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          border-left: 3px solid transparent;
          padding: 0.75rem 1rem;
          transition: border-left-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
          cursor: pointer;
        }

        .branch-row:hover {
          border-left-color: #0891b2;
          background: #f0f9ff;
          transform: translateX(4px);
        }

        .branch-row:hover .branch-name {
          color: #0891b2;
          transition: color 0.2s ease;
        }

        .badge-head-office {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: 6px;
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
        }

        .badge-branch {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: 6px;
          background: #f8fafc;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }

        /* Status dot pulse - open days only */
        @keyframes statusPulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(22,163,74,0.5); 
          }
          50% { 
            box-shadow: 0 0 0 5px rgba(22,163,74,0); 
          }
        }

        .status-dot-open {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #16a34a;
          animation: statusPulse 2s ease-in-out infinite;
        }

        .status-dot-closed {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #dc2626;
        }

        /* Gentle Float Animation */
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .contact-method-card {
          animation: gentleFloat 4s ease-in-out infinite;
        }

        .contact-method-card:nth-child(1) { animation-delay: 0s; }
        .contact-method-card:nth-child(2) { animation-delay: 1.3s; }
        .contact-method-card:nth-child(3) { animation-delay: 2.6s; }

        .contact-method-card:hover {
          animation-play-state: paused;
        }

        /* Button spinner */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
          margin-right: 6px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .combined-card-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* FAQ Item Hover Effects */
        .faq-item {
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          border-left: 3px solid transparent;
          margin-bottom: 0.75rem;
          overflow: hidden;
          transition: border-left-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          background: #ffffff;
        }

        .faq-item:hover {
          border-left-color: #f59e0b;
          background: #fffbeb;
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(245,158,11,0.15);
        }

        .faq-item.active {
          border-left-color: #f59e0b;
          background: #fffbeb;
          box-shadow: 0 4px 16px rgba(245,158,11,0.12);
        }

        .faq-question-row:hover {
          background: rgba(255, 251, 235, 0.5);
          transition: background 0.2s ease;
        }

        .faq-question-row:hover .faq-question {
          color: #f59e0b;
          transition: color 0.2s ease;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Section 1 - Hero */}
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 2 - Three Contact Cards */}
        <ContactMethodCards />

        {/* Section 3 - Combined Office + Branches Card */}
        <CombinedOfficeAndBranches />

        {/* Section 4 - Business Hours Card */}
        <BusinessHoursCard />

        {/* Section 5 - Send Us a Message Form */}
        <ContactForm
          formData={formData}
          submitted={submitted}
          submitting={submitting}
          handleSubmit={handleSubmit}
          handleFieldChange={handleFieldChange}
        />

        {/* Section 6 - FAQs */}
        <FAQSection activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
      </div>

      {/* Section 7 - Need Instant Help Banner */}
      <InstantHelpBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}


// Hero Section Component
function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = "Contact Us".split(" ");
  const subheading = useTypewriter("We're here to help you find the best loan deal", 600);

  return (
    <section
      ref={ref}
      className="relative py-20 text-center"
      style={{ background: '#f8fafc' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading - Word Reveal */}
        <h1 className="page-title mb-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.45, 
                delay: i * 0.12, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              style={{ display: 'inline-block', marginRight: '0.3em' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Decorative Line - Draws after heading */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ 
            duration: 0.5, 
            delay: 0.4, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          style={{
            height: '3px',
            width: '48px',
            background: '#2563eb',
            borderRadius: '2px',
            margin: '0 auto 1.5rem',
            transformOrigin: 'left',
          }}
        />

        {/* Subheading - Typewriter Effect */}
        <p style={{ fontSize: '1rem', color: '#64748b' }}>
          {subheading}
          {subheading.length < "We're here to help you find the best loan deal".length && (
            <span className="cursor-blink">|</span>
          )}
        </p>
      </div>
    </section>
  );
}


// Contact Method Cards Component
function ContactMethodCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const cards = [
    {
      config: logoConfigs.call,
      title: 'Call Us',
      info: '7758 96 9798 / 9921 37 4565',
      subInfo: 'Mon-Sat: 9AM to 7PM',
      buttonText: 'Call Now',
      link: 'tel:+917758969798',
      borderColor: '#16a34a',
      glowColor: 'rgba(22,163,74,0.20)',
    },
    {
      config: logoConfigs.whatsapp,
      title: 'WhatsApp Us',
      info: '7758 96 9798',
      subInfo: 'Quick response guaranteed',
      buttonText: 'Chat Now',
      link: 'https://wa.me/917758969798',
      borderColor: '#25d366',
      glowColor: 'rgba(37,211,102,0.20)',
    },
    {
      config: logoConfigs.email,
      title: 'Email Us',
      info: 'sanskruti.sss1108@gmail.com',
      subInfo: 'Reply within 24 hours',
      buttonText: 'Send Email',
      link: 'mailto:sanskruti.sss1108@gmail.com',
      borderColor: '#2563eb',
      glowColor: 'rgba(37,99,235,0.20)',
    },
  ];

  // 3D Tilt effect
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 14;
    const y = ((e.clientY - top) / height - 0.5) * -14;
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateY(-8px) scale(1.03)`;
    el.style.transition = 'transform 0.1s ease';
  };

  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
  };

  // Ripple effect
  const triggerRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();
    
    circle.style.cssText = `
      position: absolute;
      width: ${diameter}px;
      height: ${diameter}px;
      left: ${e.clientX - rect.left - radius}px;
      top: ${e.clientY - rect.top - radius}px;
      background: rgba(255,255,255,0.35);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.55s linear forwards;
      pointer-events: none;
    `;
    
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 550);
  };

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6 mb-16" style={{ perspective: '1200px' }}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50, rotateX: -12 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            delay: index * 0.12,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
          className="contact-method-card contact-card-base"
          style={{
            '--card-border-color': card.borderColor,
            '--card-glow-color': card.glowColor,
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          {/* Logo Circle */}
          <div>
            <LogoCircle config={card.config} />
          </div>

          {/* Card Title */}
          <h3 className="card-title">{card.title}</h3>

          {/* Card Data */}
          <p className="card-data text-center">{card.info}</p>

          {/* Card Support Text */}
          <p className="card-support text-center">{card.subInfo}</p>

          {/* Button with Ripple */}
          <motion.a
            href={card.link}
            onClick={triggerRipple}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="btn-ripple"
            style={{
              display: 'block',
              width: '100%',
              padding: '0.75rem',
              background: card.borderColor,
              color: 'white',
              borderRadius: '10px',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
          >
            {card.buttonText}
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}


// Combined Office and Branches Component
function CombinedOfficeAndBranches() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
      className="mb-8 contact-card-base"
      style={{
        '--card-border-color': '#0891b2',
        '--card-glow-color': 'rgba(8,145,178,0.18)',
        maxWidth: '1000px',
        margin: '0 auto 2rem',
        overflow: 'hidden',
      }}
    >
      <div
        className="combined-card-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
        }}
      >
        {/* LEFT HALF - Our Office */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.45 }}
          style={{
            padding: '2rem',
            borderRight: '1px solid #e2e8f0',
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <LogoCircle config={logoConfigs.office} size={75} objectFit="contain" />
            <h3 className="section-heading">Our Office</h3>
          </div>

          {/* Address */}
          <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, marginBottom: '1rem' }}>
            Shop No. 11 Second Floor, Subhadra Mall, Front of Relince Smart MIDC, Baramati Dist-Pune 413133
          </p>

          {/* Map Placeholder */}
          <div
            style={{
              borderRadius: '12px',
              background: '#f1f5f9',
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            <MapPin className="w-12 h-12" style={{ color: '#94a3b8' }} />
          </div>

          {/* Get Directions Button */}
          <motion.button
            onClick={() => openMap('baramati')}
            whileHover={{
              background: '#2563eb',
              color: 'white',
            }}
            transition={{ duration: 0.25 }}
            style={{
              width: '100%',
              padding: '0.6rem',
              border: '1.5px solid #2563eb',
              color: '#2563eb',
              background: 'transparent',
              borderRadius: '10px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            Get Directions
          </motion.button>
        </motion.div>

        {/* RIGHT HALF - Branches */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.45 }}
          style={{
            padding: '2rem',
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <LogoCircle config={logoConfigs.branches} size={75} />
            <h3 className="section-heading">Our Branches</h3>
          </div>

          {/* Branch Rows */}
          <div>
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.07 }}
                onClick={() => openMap(branch.name.toLowerCase())}
                className="branch-row"
                style={{
                  marginBottom: '0.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div className="branch-name">
                    {branch.name}
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginLeft: '4px' }}>↗</span>
                  </div>
                  <div className="branch-address">{branch.address}</div>
                </div>
                <span className={branch.tag === 'HEAD OFFICE' ? 'badge-head-office' : 'badge-branch'}>
                  {branch.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}


// Business Hours Card Component
function BusinessHoursCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const schedules = [
    { day: 'Mon–Fri', time: '9:00 AM - 7:00 PM', open: true },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM', open: true },
    { day: 'Sunday', time: 'Closed', open: false },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.96, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
      className="contact-card-base"
      style={{
        '--card-border-color': '#7c3aed',
        '--card-glow-color': 'rgba(124,58,237,0.18)',
        width: '60%',
        maxWidth: '600px',
        margin: '1.5rem auto 3rem',
        padding: '1.75rem 2rem',
        animation: 'gentleFloat 4s ease-in-out infinite',
        animationDelay: '0.5s',
      }}
    >
      {/* Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
        <LogoCircle config={logoConfigs.businessHours} size={75} />
        <h3 className="section-heading">Business Hours</h3>
      </div>

      {/* Hours Grid */}
      <div>
        {schedules.map((schedule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              delay: 0.15 + index * 0.1, 
              duration: 0.3, 
              ease: 'easeOut' 
            }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.6rem 0',
              borderBottom: index < schedules.length - 1 ? '1px solid #f1f5f9' : 'none',
              fontSize: '0.875rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Status Dot with Pulse */}
              <div
                className={schedule.open ? 'status-dot-open' : 'status-dot-closed'}
              />
              <span style={{ color: '#374151', fontWeight: 500 }}>{schedule.day}</span>
            </div>
            <span
              style={{
                color: schedule.open ? '#0f172a' : '#dc2626',
                fontWeight: 600,
              }}
            >
              {schedule.time}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}


// Contact Form Component
function ContactForm({ formData, submitted, submitting, handleSubmit, handleFieldChange }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.45 }}
      className="contact-card-base"
      style={{
        '--card-border-color': '#10b981',
        '--card-glow-color': 'rgba(16,185,129,0.18)',
        maxWidth: '720px',
        margin: '3rem auto',
        padding: '2.5rem 3rem',
      }}
    >
      {/* Section Heading */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
        Send Us a Message
      </h2>
      <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '2rem' }}>
        We'll get back to you within 24 hours
      </p>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              style={{ marginBottom: '1.25rem' }}
            >
              <label className="form-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleFieldChange('name', e.target.value)}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  color: '#0f172a',
                  background: '#fafafa',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.background = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.10)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.background = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </motion.div>

            {/* Phone Field */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.16 }}
              style={{ marginBottom: '1.25rem' }}
            >
              <label className="form-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleFieldChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  color: '#0f172a',
                  background: '#fafafa',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.background = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.10)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.background = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.22 }}
              style={{ marginBottom: '1.25rem' }}
            >
              <label className="form-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  color: '#0f172a',
                  background: '#fafafa',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.background = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.10)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.background = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </motion.div>

            {/* Two Column Grid for Loan Type and Amount */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
              {/* Loan Type */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.28 }}
              >
                <label className="form-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                  Loan Type
                </label>
                <select
                  value={formData.loanType}
                  onChange={(e) => handleFieldChange('loanType', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    paddingRight: '2.5rem',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    color: formData.loanType ? '#0f172a' : '#9ca3af',
                    background: '#fafafa url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%239ca3af\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E") no-repeat right 1rem center',
                    backgroundSize: '12px',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                    e.currentTarget.style.background = '#ffffff url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%232563eb\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E") no-repeat right 1rem center';
                    e.currentTarget.style.backgroundSize = '12px';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.10), 0 4px 12px rgba(37,99,235,0.15)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#fafafa url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%239ca3af\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E") no-repeat right 1rem center';
                    e.currentTarget.style.backgroundSize = '12px';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = '#cbd5e1';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <option value="">Select loan type</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Loan Amount */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.34 }}
              >
                <label className="form-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                  Loan Amount
                </label>
                <select
                  value={formData.loanAmount}
                  onChange={(e) => handleFieldChange('loanAmount', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    paddingRight: '2.5rem',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    color: formData.loanAmount ? '#0f172a' : '#9ca3af',
                    background: '#fafafa url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%239ca3af\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E") no-repeat right 1rem center',
                    backgroundSize: '12px',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                    e.currentTarget.style.background = '#ffffff url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%232563eb\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E") no-repeat right 1rem center';
                    e.currentTarget.style.backgroundSize = '12px';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.10), 0 4px 12px rgba(37,99,235,0.15)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#fafafa url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%239ca3af\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E") no-repeat right 1rem center';
                    e.currentTarget.style.backgroundSize = '12px';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = '#cbd5e1';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <option value="">Select amount</option>
                  <option value="Under 5L">Under 5L</option>
                  <option value="5L - 25L">5L - 25L</option>
                  <option value="25L - 1Cr">25L - 1Cr</option>
                  <option value="Above 1Cr">Above 1Cr</option>
                </select>
              </motion.div>
            </div>

            {/* Message Textarea */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              style={{ marginBottom: '1.25rem' }}
            >
              <label className="form-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleFieldChange('message', e.target.value)}
                rows={4}
                placeholder="Tell us about your requirements..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  color: '#0f172a',
                  background: '#fafafa',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                  outline: 'none',
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.background = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.10)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.background = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </motion.div>

            {/* Submit Button with State Transitions */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={!submitting ? {
                scale: 1.01,
                y: -2,
              } : {}}
              whileTap={!submitting ? { scale: 0.98 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              style={{
                width: '100%',
                padding: '0.875rem',
                background: submitting ? '#9ca3b8' : '#16a34a',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                cursor: submitting ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <AnimatePresence mode="wait">
                {submitting ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <span className="spinner" />
                    Sending...
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
              textAlign: 'center',
              padding: '3rem 0',
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              style={{
                width: '80px',
                height: '80px',
                background: '#16a34a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}
            >
              <CheckCircle2 className="w-12 h-12 text-white" />
            </motion.div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
              Message Sent Successfully!
            </h3>
            <p style={{ color: '#64748b' }}>We'll get back to you within 24 hours</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


// FAQ Section Component
function FAQSection({ activeFaq, setActiveFaq }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      id="faq-section"
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.45 }}
      className="contact-card-base"
      style={{
        '--card-border-color': '#f59e0b',
        '--card-glow-color': 'rgba(245,158,11,0.18)',
        maxWidth: '800px',
        margin: '0 auto 4rem',
        padding: '2.5rem 3rem',
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 800,
          color: '#0f172a',
          textAlign: 'center',
          marginBottom: '0.5rem',
        }}
      >
        Frequently Asked Questions
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.4 }}
        style={{
          textAlign: 'center',
          color: '#64748b',
          marginBottom: '2rem',
        }}
      >
        Everything you need to know
      </motion.p>

      {/* FAQ Items */}
      <div>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 + index * 0.08 }}
            className={`faq-item ${activeFaq === index ? 'active' : ''}`}
          >
            {/* Question Row */}
            <button
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              className="faq-question-row"
              style={{
                width: '100%',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
              }}
            >
              <span className="faq-question" style={{ paddingRight: '1rem' }}>
                {faq.q}
              </span>
              <motion.div
                animate={{ rotate: activeFaq === index ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-6 h-6" style={{ color: activeFaq === index ? '#f59e0b' : '#9ca3af', flexShrink: 0 }} />
              </motion.div>
            </button>

            {/* Answer Panel - Smooth Accordion */}
            <AnimatePresence initial={false}>
              {activeFaq === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.32, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    style={{
                      padding: '0 1.25rem 1.1rem',
                      fontSize: '0.875rem',
                      color: '#64748b',
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}


// Instant Help Banner Component
function InstantHelpBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.section
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}
    >
      {/* Animated Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading - Word Pop-In Animation */}
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900,
            color: 'white',
            marginBottom: '0.75rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.2)',
            letterSpacing: '-0.02em',
          }}
        >
          {"Need Instant Help?".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                delay: 0.1 + i * 0.1, 
                type: 'spring', 
                stiffness: 200, 
                damping: 20 
              }}
              style={{ display: 'inline-block', marginRight: '0.3em' }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Subheading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.95)',
            marginBottom: '2.5rem',
            fontWeight: 500,
          }}
        >
          Our team is available Mon–Sat, 9AM to 7PM
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Call Now Button */}
          <motion.a
            href="tel:+917758969798"
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'white',
              color: '#1e40af',
              padding: '1rem 2.5rem',
              borderRadius: '14px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1)',
              border: '2px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            <Phone className="w-5 h-5" />
            Call Now
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/917758969798"
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'linear-gradient(135deg, #25d366 0%, #20ba5a 100%)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '14px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              boxShadow: '0 8px 24px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.1)',
              border: '2px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
