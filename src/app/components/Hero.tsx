import { CheckCircle2, Users, IndianRupee, Building2, ChevronDown } from 'lucide-react';
import { useNavigation } from './AppRouter';
import { useEffect, useState, useRef } from 'react';

// Custom hook for premium counter animation with ease-out-expo
function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number;
    const startValue = 0;

    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutExpo(progress);
      const current = Math.floor(startValue + (end - startValue) * easedProgress);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return { count, isComplete };
}

export function Hero() {
  const { navigateTo } = useNavigation();
  const [activeVideo, setActiveVideo] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const scrollToLoans = () => {
    document.getElementById('loan-services-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const backgroundVideos = [
    { src: '/videos/Indian_1_Rupee_coin_rolling_202605221840.mp4', title: 'Indian 1 Rupee coin rolling', position: 'center center', scale: 1.15 },
    { src: '/Indian_couple_holding_documents_%E2%80%A6_202605182300.mp4', title: 'Indian couple video', position: 'center center', scale: 1.15 },
    { src: '/Indian_businessman_communicating%E2%80%A6_202605191320.mp4', title: 'Indian businessman video', position: 'center center', scale: 1.15 },
    { src: '/Your_Role__You_are_a_202605191349.mp4', title: 'Extra finance video', position: 'center center', scale: 1.15 },
  ];

  // Video carousel
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveVideo((current) => (current + 1) % backgroundVideos.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [backgroundVideos.length]);

  // Stats intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Scroll indicator visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const customersData = useCountUp(25000, 2000, hasStarted);
  const loansData = useCountUp(1000, 2200, hasStarted);
  const partnersData = useCountUp(200, 2400, hasStarted);

  // Ripple effect handler
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  // Split headline into words for animation
  const headlineWords = "Get the Best Loan Deals from Multiple Banks".split(' ');

  return (
    <section 
      className="hero-section relative text-white overflow-hidden"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#0a143c', /* dark navy fallback if video fails */
      }}
    >
      <style>{`
        /* Trust badge animations */
        @keyframes slideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .trust-badge {
          animation: slideInLeft 0.6s ease-out 0.4s both;
        }

        .trust-badge:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }

        /* Headline word-by-word reveal */
        @keyframes wordReveal {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .headline-word {
          display: inline-block;
          animation: wordReveal 0.6s ease-out both;
        }

        /* Subtext fade in */
        @keyframes fadeInUp {
          from { transform: translateY(15px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .subtext {
          animation: fadeInUp 0.6s ease-out 0.9s both;
        }

        /* Button animations */
        @keyframes buttonSlideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .btn-apply {
          animation: buttonSlideUp 0.6s ease-out 1.1s both;
          position: relative;
          overflow: hidden;
        }

        .btn-emi {
          animation: buttonSlideUp 0.6s ease-out 1.25s both;
        }

        .btn-apply:hover {
          transform: scale(1.06);
          box-shadow: 0 0 20px rgba(22, 163, 74, 0.6);
        }

        .btn-apply:active {
          transform: scale(0.96);
          transition: transform 0.1s;
        }

        .btn-emi:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        .btn-emi:active {
          transform: scale(0.96);
          transition: transform 0.1s;
        }

        /* Ripple effect */
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          width: 20px;
          height: 20px;
          pointer-events: none;
          animation: ripple 0.6s ease-out;
        }

        /* Stats card animations */
        @keyframes statSlideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .stat-card-1 {
          animation: statSlideUp 0.6s ease-out both;
        }

        .stat-card-2 {
          animation: statSlideUp 0.6s ease-out 0.2s both;
        }

        .stat-card-3 {
          animation: statSlideUp 0.6s ease-out 0.4s both;
        }

        /* Suffix pop-in */
        @keyframes popIn {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }

        .suffix-pop {
          display: inline-block;
          animation: popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }

        /* Star fill animation */
        @keyframes starFill {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }

        .star {
          display: inline-block;
          animation: starFill 0.3s ease-out both;
        }

        .star:nth-child(1) { animation-delay: 0s; }
        .star:nth-child(2) { animation-delay: 0.1s; }
        .star:nth-child(3) { animation-delay: 0.2s; }
        .star:nth-child(4) { animation-delay: 0.3s; }
        .star:nth-child(5) { animation-delay: 0.4s; }

        /* Scroll indicator bounce */
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        .scroll-indicator {
          animation: bounce 1.5s ease-in-out infinite;
          transition: opacity 0.3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .trust-badge,
          .headline-word,
          .subtext,
          .btn-apply,
          .btn-emi,
          .stat-card-1,
          .stat-card-2,
          .stat-card-3,
          .scroll-indicator {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background videos — layer 1 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
      }}>
        {backgroundVideos.map((video, index) => (
          <video
            key={video.src}
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={(e) => {
              console.warn(`Failed to load video: ${video.src}`);
              e.currentTarget.style.display = 'none';
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: video.position,
              transform: `scale(${video.scale})`,
              opacity: index === activeVideo ? 1 : 0,
              transition: 'opacity 1000ms ease-linear',
              zIndex: index === activeVideo ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Blue overlay — layer 2 — ONLY EFFECT */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(10, 20, 60, 0.72)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Main content — layer 3 */}
      <div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
        style={{ zIndex: 3 }}
      >
        <div className="max-w-3xl">
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="trust-badge inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
              <span className="text-sm">Trusted by 25000+ customers</span>
            </div>

            {/* Headline with word-by-word reveal */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold">
              {headlineWords.map((word, index) => (
                <span key={index}>
                  <span
                    className="headline-word"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    {word}
                  </span>
                  {index < headlineWords.length - 1 && ' '}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p className="subtext text-lg lg:text-xl text-blue-100 leading-relaxed">
              Fast approval, competitive interest rates, and expert guidance. Compare loan offers from top banks and choose the best deal tailored for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={(e) => {
                  handleRipple(e);
                  scrollToLoans();
                }}
                className="btn-apply relative bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
              >
                <span className="relative z-10">Apply Now</span>
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="ripple-effect"
                    style={{
                      left: ripple.x - 10,
                      top: ripple.y - 10,
                    }}
                  />
                ))}
              </button>
              <button
                onClick={(e) => {
                  handleRipple(e);
                  navigateTo('emi-calculator');
                }}
                className="btn-emi relative bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Check EMI</span>
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="ripple-effect"
                    style={{
                      left: ripple.x - 10,
                      top: ripple.y - 10,
                    }}
                  />
                ))}
              </button>
            </div>

            {/* Stats Section */}
            <div ref={statsRef} className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Stat 1 — Happy Customers */}
                <div className={`flex items-center gap-4 group ${hasStarted ? 'stat-card-1' : 'opacity-0'}`}>
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {hasStarted ? customersData.count.toLocaleString('en-IN') : '0'}
                      </span>
                      {customersData.isComplete && (
                        <span className="suffix-pop text-2xl font-bold text-green-400">+</span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm font-medium mt-0.5">Happy Customers</p>
                    <div className="flex gap-1 mt-1">
                      {hasStarted && [...Array(5)].map((_, i) => (
                        <span key={i} className="star text-yellow-400 text-xs">★</span>
                      ))}
                      <span className="text-white/40 text-xs ml-1">Trusted Service</span>
                    </div>
                  </div>
                </div>

                {/* Stat 2 — Loans Disbursed */}
                <div className={`flex items-center gap-4 group ${hasStarted ? 'stat-card-2' : 'opacity-0'}`}>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                    <IndianRupee className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-white/60 text-2xl font-bold">₹</span>
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {hasStarted ? loansData.count : '0'}
                      </span>
                      {loansData.isComplete && (
                        <span className="suffix-pop text-2xl font-bold text-blue-400">Cr+</span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm font-medium mt-0.5">Loans Disbursed</p>
                    <p className="text-white/40 text-xs mt-1">Across all loan categories</p>
                  </div>
                </div>

                {/* Stat 3 — Bank and NBFC Partners */}
                <div className={`flex items-center gap-4 group ${hasStarted ? 'stat-card-3' : 'opacity-0'}`}>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                    <Building2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {hasStarted ? partnersData.count : '0'}
                      </span>
                      {partnersData.isComplete && (
                        <span className="suffix-pop text-2xl font-bold text-purple-400">+</span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm font-medium mt-0.5">Bank & NBFC Partners</p>
                    <p className="text-white/40 text-xs mt-1">HDFC · SBI · ICICI · Bajaj & more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div
          className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToLoans}
          style={{ opacity: showScrollIndicator ? 1 : 0, zIndex: 3 }}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      )}
    </section>
  );
}
