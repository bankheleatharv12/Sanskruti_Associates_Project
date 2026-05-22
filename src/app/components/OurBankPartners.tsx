import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink } from 'lucide-react';

// TypeScript Interface
interface BankPartner {
  id: string;
  name: string;
  logo: string;
  url: string;
  logoScale?: number;
  logoPosition?: string;
}

// Bank Partners Data with local imports
const bankPartners: BankPartner[] = [
  {
    id: 'hdfc',
    name: 'HDFC Bank',
    logo: '/bank logos/hdfc bank.jpg',
    url: 'https://www.hdfcbank.com',
    logoScale: 0.95,
    logoPosition: 'center',
  },
  {
    id: 'icici',
    name: 'ICICI Bank',
    logo: '/bank logos/icicci_bank_logo.png',
    url: 'https://www.icicibank.com',
    logoScale: 1.0,
    logoPosition: 'center',
  },
  {
    id: 'axis',
    name: 'Axis Bank',
    logo: '/bank logos/AXIS BANK PNG.png',
    url: 'https://www.axisbank.com',
    logoScale: 0.9,
    logoPosition: 'center',
  },
  {
    id: 'kotak',
    name: 'Kotak Mahindra Bank',
    logo: '/bank logos/kotak-mahindra-bank-logo-04.jpg',
    url: 'https://www.kotak.com',
    logoScale: 1.0,
    logoPosition: 'center',
  },
  {
    id: 'pnb',
    name: 'Punjab National Bank',
    logo: '/bank logos/punjab-national-bank-pnb-logo-transparent-free-png.webp',
    url: 'https://www.pnbindia.in',
    logoScale: 1.1,
    logoPosition: 'center',
  },
  {
    id: 'bob',
    name: 'Bank of Baroda',
    logo: '/bank logos/Bank-of-Baroda-icon-1536x1024.png',
    url: 'https://www.bankofbaroda.in',
    logoScale: 0.85,
    logoPosition: 'center',
  },
  {
    id: 'idfc',
    name: 'IDFC First Bank',
    logo: '/bank logos/Logo_of_IDFC_First_Bank.svg.png',
    url: 'https://www.idfcfirstbank.com',
    logoScale: 1.0,
    logoPosition: 'center',
  },
  {
    id: 'yes',
    name: 'Yes Bank',
    logo: '/bank logos/Yes-Bank-Logo-Vector.jpg',
    url: 'https://www.yesbank.in',
    logoScale: 1.3,
    logoPosition: 'center',
  },
  {
    id: 'bajaj',
    name: 'Bajaj Finserv',
    logo: '/bank logos/bajaj-finserv.jpg',
    url: 'https://www.bajajfinserv.in',
    logoScale: 1.2,
    logoPosition: 'center',
  },
  {
    id: 'indusind',
    name: 'IndusInd Bank',
    logo: '/bank logos/IBL.png',
    url: 'https://www.indusind.com',
    logoScale: 0.9,
    logoPosition: 'center',
  },
  {
    id: 'union',
    name: 'Union Bank of India',
    logo: '/bank logos/union-bank-of-india-logo-01.png',
    url: 'https://www.unionbankofindia.co.in',
    logoScale: 1.0,
    logoPosition: 'center',
  },
  {
    id: 'canara',
    name: 'Canara Bank',
    logo: '/bank logos/Canara-Bank-Logo.png',
    url: 'https://www.canarabank.com',
    logoScale: 0.95,
    logoPosition: 'center',
  },
  {
    id: 'federal',
    name: 'Federal Bank',
    logo: '/bank logos/federal-bank.jpg',
    url: 'https://www.federalbank.co.in',
    logoScale: 1.0,
    logoPosition: 'center',
  },
  {
    id: 'rbl',
    name: 'RBL Bank',
    logo: '/bank logos/rbl-logo.png',
    url: 'https://www.rblbank.com',
    logoScale: 0.85,
    logoPosition: 'center',
  },
  {
    id: 'hsbc',
    name: 'HSBC Bank',
    logo: '/bank logos/hsbc-bank-37509.png',
    url: 'https://www.hsbc.co.in',
    logoScale: 0.9,
    logoPosition: 'center',
  },
];

export function OurBankPartners() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [headingInView, setHeadingInView] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; size: number; color: string; duration: number; delay: number; moveX: number; moveY: number; hasPulse: boolean }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Calculate number of rows (3 cards per row)
  const numRows = Math.ceil(bankPartners.length / 3);

  useEffect(() => {
    // Simulate loading delay for skeleton
    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    // Generate 60 floating particles for star field effect
    const colors = ['#6366F1', '#8B5CF6', '#38BDF8', '#ffffff'];
    const generatedParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 4, // 4-6px
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 8 + 6, // 6-14s
      delay: Math.random() * -10, // random start time
      moveX: Math.random() * 80 - 40, // ±40px
      moveY: Math.random() * 100 - 50, // ±50px
      hasPulse: Math.random() > 0.5, // 50% of particles pulse
    }));
    setParticles(generatedParticles);
    
    return () => clearTimeout(timer);
  }, [numRows]);

  // Heading scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHeadingInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardElement: HTMLDivElement) => {
    const rect = cardElement.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardElement.style.setProperty('--mouse-x', `${x}%`);
    cardElement.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section className="relative flex flex-col items-center w-full" style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1a1a3e 50%, #0F172A 100%)', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        /* ===== 1. ANIMATED AURORA WAVES (NORTHERN LIGHTS EFFECT) ===== */
        @keyframes aurora1 {
          0% {
            transform: scaleX(1) scaleY(1) translateX(0);
          }
          33% {
            transform: scaleX(1.3) scaleY(0.8) translateX(80px);
          }
          66% {
            transform: scaleX(0.9) scaleY(1.2) translateX(-60px);
          }
          100% {
            transform: scaleX(1) scaleY(1) translateX(0);
          }
        }

        .aurora-wave {
          position: absolute;
          width: 100%;
          height: 300px;
          border-radius: 50%;
          filter: blur(40px);
          pointer-events: none;
          z-index: 1;
        }

        .aurora-wave-1 {
          top: -100px;
          left: 0;
          background: linear-gradient(135deg, #4F46E5, #7C3AED, #2563EB);
          opacity: 0.4;
          animation: aurora1 12s ease-in-out infinite;
        }

        .aurora-wave-2 {
          top: 40%;
          left: 0;
          background: linear-gradient(135deg, #0EA5E9, #6366F1, #8B5CF6);
          opacity: 0.35;
          animation: aurora1 12s ease-in-out infinite;
          animation-delay: -4s;
        }

        .aurora-wave-3 {
          bottom: -100px;
          left: 0;
          background: linear-gradient(135deg, #7C3AED, #EC4899, #6366F1);
          opacity: 0.25;
          animation: aurora1 12s ease-in-out infinite;
          animation-delay: -8s;
        }

        /* ===== 2. LIVE FLOATING PARTICLES (STAR FIELD) ===== */
        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(var(--move-x), var(--move-y));
          }
        }

        @keyframes particlePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.8);
          }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
        }

        .particle-float {
          animation: particleFloat var(--duration) ease-in-out infinite alternate;
          animation-delay: var(--delay);
        }

        .particle-pulse {
          animation: particleFloat var(--duration) ease-in-out infinite alternate,
                     particlePulse 3s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        /* ===== 5. TOP EDGE ANIMATED GLOWLINE ===== */
        @keyframes glowlineMove {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        .top-animated-glowline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #38BDF8, #6366F1, #8B5CF6, #EC4899, #6366F1, transparent);
          background-size: 200% 100%;
          animation: glowlineMove 4s linear infinite;
          box-shadow: 0 0 6px 1px rgba(99,102,241,0.25);
          pointer-events: none;
          z-index: 10;
        }

        /* ===== PREMIUM CARD HOVER EFFECTS - PRESERVED ===== */
        
        /* Inner top shimmer on hover */
        .bank-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1);
          pointer-events: none;
          z-index: 1;
        }

        .bank-card:hover::before {
          opacity: 1;
        }

        /* Spotlight sweep following mouse */
        .bank-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255, 255, 255, 0.08),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          pointer-events: none;
          z-index: 1;
        }

        .bank-card:hover::after {
          opacity: 1;
        }

        /* Enhanced hover effects */
        .bank-card:hover {
          transform: translateY(-12px) scale(1.04) !important;
          border: 1.5px solid rgba(139, 92, 246, 0.85) !important;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.7), 
                      0 0 50px rgba(99, 102, 241, 0.45), 
                      0 20px 40px rgba(0, 0, 0, 0.4) !important;
          background: rgba(99, 102, 241, 0.15) !important;
          transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1) !important;
        }

        .bank-card:hover .logo-pill {
          box-shadow: 0 4px 24px rgba(99, 102, 241, 0.35);
        }

        .bank-card:hover .visit-button {
          background: linear-gradient(135deg, #6366F1, #8B5CF6) !important;
          color: #ffffff !important;
        }

        /* Button shimmer sweep */
        @keyframes buttonShimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .visit-button {
          position: relative;
          overflow: hidden;
        }

        .visit-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .bank-card:hover .visit-button::after {
          animation: buttonShimmer 0.8s ease-in-out;
        }

        /* ===== HEADING SCROLL ANIMATION - PRESERVED ===== */
        @keyframes headingFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .heading-animate {
          animation: headingFadeUp 0.8s ease-out forwards;
        }

        .subheading-animate {
          animation: headingFadeUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        /* ===== STRICT GRID LAYOUT FOR PERFECT ALIGNMENT ===== */
        .cards-grid-container {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        @media (max-width: 900px) {
          .cards-grid-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .cards-grid-container {
            grid-template-columns: 1fr;
          }
        }

        /* ===== CARD UNIFORM DIMENSIONS ===== */
        .bank-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem;
          box-sizing: border-box;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: visible;
        }

        /* ===== LOGO BOX FIXED SQUARE ===== */
        .logo-pill {
          width: 100%;
          aspect-ratio: 1 / 1;
          max-height: 58%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .logo-pill img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center center;
          display: block;
        }

        /* ===== BANK NAME FIXED HEIGHT ===== */
        .bank-name {
          text-align: center;
          width: 100%;
          min-height: 2.6em;
          max-height: 2.6em;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.3;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.25rem;
        }

        /* ===== BUTTON FIXED SIZE ===== */
        .visit-button {
          width: 100%;
          flex-shrink: 0;
          padding: 0.5rem 0;
          text-align: center;
          box-sizing: border-box;
        }

        /* ===== FLOATING PULSE ANIMATION (IDLE) - PRESERVED ===== */
        @keyframes floatPulse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        .bank-card {
          animation: floatPulse 3.5s ease-in-out infinite alternate;
          will-change: transform;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .bank-card:hover {
          animation-play-state: paused;
        }

        /* ===== SHIMMER SWEEP ON LOGO PILL - PRESERVED ===== */
        @keyframes shimmerSweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) translateY(200%) rotate(45deg);
          }
        }

        .logo-pill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmerSweep 6s ease-in-out infinite;
          pointer-events: none;
        }

        /* ===== SKELETON SHIMMER - PRESERVED ===== */
        @keyframes skeletonShimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .skeleton {
          background: linear-gradient(
            90deg,
            rgba(229, 231, 235, 0.4) 25%,
            rgba(243, 244, 246, 0.6) 50%,
            rgba(229, 231, 235, 0.4) 75%
          );
          background-size: 200% 100%;
          animation: skeletonShimmer 1.5s ease-in-out infinite;
        }

        /* ===== RESPONSIVE ===== */
        @media (prefers-reduced-motion: reduce) {
          .bank-card,
          .logo-pill::after,
          .skeleton,
          .heading-animate,
          .subheading-animate,
          .aurora-wave,
          .particle,
          .top-animated-glowline {
            animation: none !important;
          }
        }
      `}</style>

      {/* ===== NEW INNOVATIVE PREMIUM BACKGROUND EFFECTS ===== */}
      
      {/* 1. Animated Aurora Waves (Northern Lights Effect) */}
      <div className="aurora-wave aurora-wave-1"></div>
      <div className="aurora-wave aurora-wave-2"></div>
      <div className="aurora-wave aurora-wave-3"></div>

      {/* 2. Live Floating Particles (Star Field) */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={particle.hasPulse ? 'particle particle-pulse' : 'particle particle-float'}
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 6px 2px ${particle.color}`,
            opacity: Math.random() * 0.5 + 0.4, // 0.4-0.9
            '--duration': `${particle.duration}s`,
            '--delay': `${particle.delay}s`,
            '--move-x': `${particle.moveX}px`,
            '--move-y': `${particle.moveY}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* 5. Top Edge Animated Glowline */}
      <div className="top-animated-glowline"></div>

      <div className="w-full flex flex-col items-center" style={{ padding: '4rem 2rem', boxSizing: 'border-box' }}>
        {/* Section Header with Scroll Animation */}
        <div ref={headingRef} className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl text-white mb-4 font-bold ${headingInView ? 'heading-animate' : 'opacity-0'}`}>
            Our Bank Partners
          </h2>
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${headingInView ? 'subheading-animate' : 'opacity-0'}`}>
            We collaborate with India's leading banks and financial institutions to bring you the
            best loan offers
          </p>
        </div>

        {/* Cards Grid - Strict Grid Layout for Perfect Alignment */}
        <div
          ref={containerRef}
          className="cards-grid-container"
          style={{ perspective: '1000px' }}
        >
          {bankPartners.map((bank, globalIndex) => {
            return (
              <motion.div
                key={bank.id}
                initial={
                  isInView
                    ? {
                        opacity: 0,
                        rotateX: 30,
                        translateY: 60,
                      }
                    : false
                }
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        rotateX: 0,
                        translateY: 0,
                      }
                    : {}
                }
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 22,
                  delay: globalIndex * 0.07,
                }}
                className="bank-card relative rounded-2xl overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  animationDelay: `${globalIndex * 0.25}s`,
                  transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  '--logo-scale': bank.logoScale || 1.0,
                } as React.CSSProperties}
              >
                {!isLoaded ? (
                  // Skeleton Loader
                  <div className="flex flex-col justify-between h-full">
                    <div
                      className="skeleton rounded-xl"
                      style={{ width: '100%', aspectRatio: '1 / 1', maxHeight: '58%' }}
                    ></div>
                    <div className="skeleton rounded-lg h-5 w-3/4 mx-auto"></div>
                    <div className="skeleton rounded-lg h-9 w-full"></div>
                  </div>
                ) : (
                  <>
                    {/* Logo Display Area with White Background */}
                    <div className="logo-pill relative">
                      <img
                        src={bank.logo}
                        alt={`${bank.name} logo`}
                        style={{
                          transform: `scale(${bank.logoScale || 1.0})`,
                        }}
                      />
                    </div>

                    {/* Bank Name */}
                    <div className="bank-name">
                      {bank.name}
                    </div>

                    {/* Visit Bank CTA */}
                    <a
                      href={bank.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-button relative flex items-center justify-center gap-2 font-medium overflow-hidden"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                      }}
                    >
                      Visit Bank
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
