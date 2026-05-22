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
        }

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
          .premium-card::before {
            display: none;
          }
        }
      `}</style>

      {/* Background Image with solid dark overlay */}
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
        {/* Solid dark overlay - cross-browser safe */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(10, 20, 40, 0.72)',
            pointerEvents: 'none',
          }}
        ></div>
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

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`premium-card text-center group p-6 rounded-2xl ${
                  cardsInView ? 'card-entrance' : 'opacity-0'
                }`}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  animationDelay: cardsInView ? `${index * 0.15}s` : '0s',
                  position: 'relative',
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Icon box */}
                <div
                  className={`icon-box relative inline-flex items-center justify-center w-20 h-20 bg-[#16A34A]/20 rounded-2xl mb-4 border border-[#16A34A]/30 ${
                    cardsInView ? 'icon-pop' : ''
                  }`}
                  style={{
                    animationDelay: cardsInView ? `${index * 0.15 + 0.2}s` : '0s',
                    boxShadow: '0 8px 24px rgba(34, 197, 94, 0.25)',
                  }}
                >
                  <Icon className="w-10 h-10 text-[#16A34A]" />
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
