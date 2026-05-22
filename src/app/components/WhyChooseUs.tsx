import { Building2, Zap, TrendingDown, Headphones, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    icon: Building2,
    title: 'Multiple Bank Options',
    description: 'Compare offers from 200+ leading banks and NBFCs in one place',
  },
  {
    icon: Zap,
    title: 'Fast Approval',
    description: 'Get loan approval in 2-3 days with our streamlined process',
  },
  {
    icon: TrendingDown,
    title: 'Low Interest Rates',
    description: 'Competitive rates starting from 8.5% per annum',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated loan advisors to guide you at every step',
  },
  {
    icon: FileCheck,
    title: 'Easy Documentation',
    description: 'Minimal paperwork with digital document submission',
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [cardsInView, setCardsInView] = useState(false);
  const [titleInView, setTitleInView] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top * 0.3;
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Intersection observer for title
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTitleInView(true);
        }
      },
      { threshold: 0.4 }
    );

    const titleElement = document.getElementById('why-choose-title');
    if (titleElement) observer.observe(titleElement);

    return () => observer.disconnect();
  }, []);

  // Mouse spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const titleWords = "Why Choose Sanskruti Associates?".split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden py-24 lg:py-32"
    >
      <style>{`
        /* Breathing gradient overlay */
        @keyframes breathingGradient {
          0%, 100% {
            background: rgba(10, 15, 40, 0.82);
          }
          50% {
            background: rgba(5, 25, 60, 0.88);
          }
        }

        .breathing-overlay {
          animation: breathingGradient 5s ease-in-out infinite;
        }

        /* Floating orbs */
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -40px); }
          66% { transform: translate(-20px, 30px); }
        }

        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-40px, 30px); }
          66% { transform: translate(25px, -35px); }
        }

        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(35px, 25px); }
          66% { transform: translate(-30px, -20px); }
        }

        @keyframes floatOrb4 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-25px, -30px); }
          66% { transform: translate(40px, 20px); }
        }

        @keyframes floatOrb5 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, 35px); }
          66% { transform: translate(-35px, -25px); }
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          opacity: 0.4;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: rgba(34, 197, 94, 0.3);
          top: 10%;
          left: 10%;
          animation: floatOrb1 12s ease-in-out infinite;
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          background: rgba(59, 130, 246, 0.3);
          top: 60%;
          right: 15%;
          animation: floatOrb2 15s ease-in-out infinite;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: rgba(34, 197, 94, 0.25);
          bottom: 20%;
          left: 20%;
          animation: floatOrb3 10s ease-in-out infinite;
          animation-delay: 4s;
        }

        .orb-4 {
          width: 280px;
          height: 280px;
          background: rgba(59, 130, 246, 0.25);
          top: 30%;
          right: 25%;
          animation: floatOrb4 13s ease-in-out infinite;
          animation-delay: 1s;
        }

        .orb-5 {
          width: 220px;
          height: 220px;
          background: rgba(34, 197, 94, 0.2);
          bottom: 30%;
          right: 10%;
          animation: floatOrb5 11s ease-in-out infinite;
          animation-delay: 3s;
        }

        /* Diagonal light sweep */
        @keyframes diagonalSweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) translateY(200%) rotate(45deg);
          }
        }

        .diagonal-sweep {
          position: absolute;
          width: 200%;
          height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.04), transparent);
          animation: diagonalSweep 8s ease-in-out infinite;
          pointer-events: none;
        }

        /* Title word reveal for WhyChooseUs (WHITE) */
        @keyframes wordReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-word-why {
          display: inline-block;
          opacity: 0;
          color: white !important;
          animation: wordReveal 0.6s ease-out forwards;
          will-change: transform, opacity;
        }

        /* Title shimmer sweep - removed to keep text visible */

        /* Subtitle fade in */
        @keyframes subtitleFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .subtitle-animate {
          animation: subtitleFadeIn 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }

        /* Underline grow */
        @keyframes underlineGrow {
          from {
            width: 0;
          }
          to {
            width: 60px;
          }
        }

        .underline-animate {
          animation: underlineGrow 0.5s ease-out 0.9s forwards;
          width: 0;
        }

        /* Card floating animation */
        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 768px) {
          @keyframes cardFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }
        }

        .card-float-1 {
          animation: cardFloat 4s ease-in-out infinite;
          animation-delay: 0s;
          will-change: transform;
        }

        .card-float-2 {
          animation: cardFloat 4s ease-in-out infinite;
          animation-delay: 0.8s;
          will-change: transform;
        }

        .card-float-3 {
          animation: cardFloat 4s ease-in-out infinite;
          animation-delay: 1.6s;
          will-change: transform;
        }

        .card-float-4 {
          animation: cardFloat 4s ease-in-out infinite;
          animation-delay: 2.4s;
          will-change: transform;
        }

        .card-float-5 {
          animation: cardFloat 4s ease-in-out infinite;
          animation-delay: 3.2s;
          will-change: transform;
        }

        /* Breathing border glow */
        @keyframes borderGlow {
          0%, 100% {
            border-color: rgba(255, 255, 255, 0.15);
            box-shadow: 0 0 0 rgba(34, 197, 94, 0);
          }
          50% {
            border-color: rgba(34, 197, 94, 0.4);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
          }
        }

        .border-glow-1 {
          animation: borderGlow 3s ease-in-out infinite;
          animation-delay: 0s;
        }

        .border-glow-2 {
          animation: borderGlow 3s ease-in-out infinite;
          animation-delay: 0.6s;
        }

        .border-glow-3 {
          animation: borderGlow 3s ease-in-out infinite;
          animation-delay: 1.2s;
        }

        .border-glow-4 {
          animation: borderGlow 3s ease-in-out infinite;
          animation-delay: 1.8s;
        }

        .border-glow-5 {
          animation: borderGlow 3s ease-in-out infinite;
          animation-delay: 2.4s;
        }

        /* Icon pulse */
        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1.0);
            box-shadow: 0 8px 24px rgba(34, 197, 94, 0.25);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 8px 32px rgba(34, 197, 94, 0.4);
          }
        }

        .icon-pulse {
          animation: iconPulse 2.5s ease-in-out infinite;
          will-change: transform;
        }

        /* Icon rotation oscillation */
        @keyframes iconRotate {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        .icon-rotate {
          animation: iconRotate 3s ease-in-out infinite;
        }

        /* Rotating ring around icon */
        @keyframes ringRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .icon-ring::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent, rgba(34, 197, 94, 0.3), transparent);
          animation: ringRotate 6s linear infinite;
          opacity: 0.3;
          pointer-events: none;
        }

        /* Card entrance animation */
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-entrance {
          animation: cardEntrance 0.6s ease-out forwards;
        }

        /* Icon pop entrance */
        @keyframes iconPop {
          0% {
            transform: scale(0);
            box-shadow: 0 0 0 rgba(34, 197, 94, 0);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.8);
          }
          100% {
            transform: scale(1.0);
            box-shadow: 0 8px 24px rgba(34, 197, 94, 0.25);
          }
        }

        .icon-pop {
          animation: iconPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        /* Card hover effects */
        .premium-card {
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          will-change: transform;
        }

        .premium-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(34, 197, 94, 0.08),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .premium-card:hover::before {
          opacity: 1;
        }

        .premium-card:hover {
          transform: translateY(-12px) scale(1.03);
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(34, 197, 94, 0.7) !important;
          box-shadow: 0 0 0 1.5px rgba(34, 197, 94, 0.7), 0 20px 40px rgba(0, 0, 0, 0.4) !important;
        }

        .premium-card:hover .card-title {
          color: #86efac;
          letter-spacing: 0.5px;
        }

        .premium-card:hover .card-description {
          opacity: 1;
          transform: translateY(-2px);
        }

        .premium-card:hover .icon-box {
          transform: rotate(5deg) scale(1.15);
          box-shadow: 0 8px 32px rgba(34, 197, 94, 0.5);
        }

        .card-title {
          transition: all 0.3s ease;
        }

        .card-description {
          transition: all 0.3s ease;
        }

        .icon-box {
          transition: all 0.3s ease;
        }

        /* Progress line at bottom */
        .progress-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: #16A34A;
          width: 0;
          transition: width 0.5s ease;
        }

        .premium-card:hover .progress-line {
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .orb,
          .diagonal-sweep,
          .card-float-1,
          .card-float-2,
          .card-float-3,
          .card-float-4,
          .card-float-5,
          .icon-pulse,
          .icon-rotate,
          .icon-ring::before,
          .border-glow-1,
          .border-glow-2,
          .border-glow-3,
          .border-glow-4,
          .border-glow-5 {
            animation: none !important;
          }

          .premium-card::before {
            display: none;
          }
        }
      `}</style>

      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_4,_2026,_03_14_06_PM.png"
          alt="Modern corporate office background"
          className="w-full h-full object-cover object-center"
          style={{
            transform: `translateY(${scrollY}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        {/* Breathing gradient overlay */}
        <div className="breathing-overlay absolute inset-0"></div>

        {/* Floating orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>

        {/* Diagonal light sweep */}
        <div className="diagonal-sweep"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" id="why-choose-title">
          {/* Title with word-by-word reveal */}
          <h2 className="text-3xl lg:text-4xl text-white mb-4 font-bold" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            {titleWords.map((word, index) => (
              <span key={index}>
                <span
                  className="title-word-why"
                  style={{
                    animationDelay: titleInView ? `${index * 0.07}s` : '0s',
                  }}
                >
                  {word}
                </span>
                {index < titleWords.length - 1 && ' '}
              </span>
            ))}
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg max-w-2xl mx-auto ${titleInView ? 'subtitle-animate' : 'opacity-0'}`}
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            We make loan approval simple, fast, and transparent
          </p>

          {/* Animated underline */}
          <div className="flex justify-center mt-4">
            <div
              className={`h-0.5 bg-[#16A34A] ${titleInView ? 'underline-animate' : ''}`}
            ></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const floatClass = `card-float-${index + 1}`;
            const glowClass = `border-glow-${index + 1}`;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`premium-card text-center group p-6 rounded-2xl ${floatClass} ${glowClass} ${
                  cardsInView ? 'card-entrance' : 'opacity-0'
                }`}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: cardsInView ? `${index * 0.15}s` : '0s',
                  position: 'relative',
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Icon box with all effects */}
                <div
                  className={`icon-box icon-ring relative inline-flex items-center justify-center w-20 h-20 bg-[#16A34A]/20 rounded-2xl mb-4 border border-[#16A34A]/30 icon-pulse ${
                    cardsInView ? 'icon-pop' : ''
                  }`}
                  style={{
                    animationDelay: cardsInView ? `${index * 0.15 + 0.2}s` : '0s',
                  }}
                >
                  <Icon className="w-10 h-10 text-[#16A34A] icon-rotate" />
                </div>

                <h3 className="card-title text-lg text-white mb-2">{benefit.title}</h3>
                <p
                  className="card-description text-sm leading-relaxed"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  {benefit.description}
                </p>

                {/* Progress line */}
                <div className="progress-line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
