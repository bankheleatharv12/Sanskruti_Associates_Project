import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Rahul Patil',
    role: 'Business Owner',
    rating: 5,
    text: 'Sanskruti Associates helped me get a business loan with the best interest rate. The process was smooth and the team was very professional.',
  },
  {
    name: 'Manisha Navale',
    role: 'Homebuyer',
    rating: 5,
    text: 'I got my home loan approved in just 3 days! The documentation process was so easy. Highly recommended for anyone looking for home loans.',
  },
  {
    name: 'Amit Patel',
    role: 'Entrepreneur',
    rating: 5,
    text: 'Best loan consultancy service I have used. They compared offers from multiple banks and helped me save lakhs in interest payments.',
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [titleInView, setTitleInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);
  const [starsAnimating, setStarsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number; cardIndex: number | null }>({
    x: 0,
    y: 0,
    cardIndex: null,
  });

  // Title intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTitleInView(true);
        }
      },
      { threshold: 0.4 }
    );

    const titleElement = document.getElementById('testimonials-title');
    if (titleElement) observer.observe(titleElement);

    return () => observer.disconnect();
  }, []);

  // Cards intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardsInView(true);
          // Start star animation 480ms after cards start appearing
          setTimeout(() => {
            setStarsAnimating(true);
          }, 480);
        }
      },
      { threshold: 0.15 }
    );

    if (cardsContainerRef.current) {
      observer.observe(cardsContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate carousel on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Mouse spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y, cardIndex: index });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0, cardIndex: null });
  };

  const titleWords = 'What Our Customers Say'.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative py-12 lg:py-16 overflow-hidden"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <style>{`
        /* Breathing gradient background */
        @keyframes breathingBg {
          0%, 100% {
            background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%);
          }
          50% {
            background: linear-gradient(135deg, #f0f4ff 0%, #fafbff 100%);
          }
        }

        .breathing-bg {
          animation: breathingBg 7s ease-in-out infinite;
        }

        /* Floating orbs */
        @keyframes floatOrbA {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(50px, -60px); }
          66% { transform: translate(-40px, 50px); }
        }

        @keyframes floatOrbB {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-60px, 45px); }
          66% { transform: translate(45px, -55px); }
        }

        @keyframes floatOrbC {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(40px, 50px); }
          66% { transform: translate(-50px, -40px); }
        }

        @keyframes floatOrbD {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-45px, -50px); }
          66% { transform: translate(55px, 40px); }
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        .bg-orb-1 {
          width: 450px;
          height: 450px;
          background: rgba(251, 191, 36, 0.08);
          top: 10%;
          left: 5%;
          animation: floatOrbA 15s ease-in-out infinite;
        }

        .bg-orb-2 {
          width: 400px;
          height: 400px;
          background: rgba(37, 99, 235, 0.06);
          top: 50%;
          right: 10%;
          animation: floatOrbB 18s ease-in-out infinite;
          animation-delay: 3s;
        }

        .bg-orb-3 {
          width: 350px;
          height: 350px;
          background: rgba(251, 191, 36, 0.08);
          bottom: 15%;
          left: 15%;
          animation: floatOrbC 12s ease-in-out infinite;
          animation-delay: 6s;
        }

        .bg-orb-4 {
          width: 420px;
          height: 420px;
          background: rgba(37, 99, 235, 0.06);
          top: 30%;
          right: 20%;
          animation: floatOrbD 20s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Sparkle dots */
        @keyframes sparklePulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.6; }
        }

        .sparkle-dot {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #fbbf24;
          border-radius: 50%;
          pointer-events: none;
        }

        /* Title word reveal for Testimonials (BLACK) */
        @keyframes titleWordReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-word-testimonials {
          display: inline-block;
          opacity: 0;
          color: #1F2937 !important;
          animation: titleWordReveal 0.6s ease-out forwards;
          will-change: transform, opacity;
        }

        /* Gold shimmer sweep */
        @keyframes goldShimmer {
          0% {
            background-position: -200% center;
            -webkit-text-fill-color: transparent;
          }
          50% {
            -webkit-text-fill-color: transparent;
          }
          100% {
            background-position: 200% center;
            -webkit-text-fill-color: #1F2937;
          }
        }

        .gold-shimmer {
          color: #1F2937 !important;
          background: linear-gradient(90deg, #1F2937 30%, #fbbf24 50%, #1F2937 70%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: #1F2937;
          animation: goldShimmer 1.3s ease-out 0.5s forwards;
        }

        .gold-shimmer-done {
          color: #1F2937 !important;
        }

        /* Subtitle fade */
        @keyframes subtitleFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .subtitle-fade {
          animation: subtitleFade 0.6s ease-out 0.55s forwards;
          opacity: 0;
        }

        /* Subtitle glow pulse */
        @keyframes subtitleGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(251, 191, 36, 0.2);
          }
          50% {
            text-shadow: 0 0 30px rgba(251, 191, 36, 0.4);
          }
        }

        .subtitle-glow {
          animation: subtitleGlow 4s ease-in-out infinite;
        }

        /* Underline grow */
        @keyframes underlineGrow {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }

        .underline-grow {
          animation: underlineGrow 0.6s ease-out 0.85s forwards;
          width: 0;
        }

        /* Card floating */
        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        .card-float-1 {
          animation: cardFloat 5s ease-in-out infinite;
          animation-delay: 0s;
          will-change: transform;
        }

        .card-float-2 {
          animation: cardFloat 5s ease-in-out infinite;
          animation-delay: 1.6s;
          will-change: transform;
        }

        .card-float-3 {
          animation: cardFloat 5s ease-in-out infinite;
          animation-delay: 3.2s;
          will-change: transform;
        }

        /* Breathing border glow */
        @keyframes borderGlow {
          0%, 100% {
            border-color: rgba(251, 191, 36, 0.1);
            box-shadow: 0 0 0 rgba(251, 191, 36, 0);
          }
          50% {
            border-color: rgba(251, 191, 36, 0.45);
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.15);
          }
        }

        .border-glow-1 {
          animation: borderGlow 4s ease-in-out infinite;
          animation-delay: 0s;
        }

        .border-glow-2 {
          animation: borderGlow 4s ease-in-out infinite;
          animation-delay: 1.3s;
        }

        .border-glow-3 {
          animation: borderGlow 4s ease-in-out infinite;
          animation-delay: 2.6s;
        }

        /* Quote breathe */
        @keyframes quoteBreathe {
          0%, 100% {
            transform: scale(1.0);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.3;
          }
        }

        .quote-breathe {
          animation: quoteBreathe 3.5s ease-in-out infinite;
          will-change: transform, opacity;
        }

        /* Star sequential glow */
        @keyframes starGlow {
          0%, 80%, 100% {
            filter: brightness(1) drop-shadow(0 0 0 #fbbf24);
          }
          40% {
            filter: brightness(1.5) drop-shadow(0 0 6px #fbbf24);
          }
        }

        .star-glow-1 { animation: starGlow 4s ease-in-out infinite; animation-delay: 0s; }
        .star-glow-2 { animation: starGlow 4s ease-in-out infinite; animation-delay: 0.2s; }
        .star-glow-3 { animation: starGlow 4s ease-in-out infinite; animation-delay: 0.4s; }
        .star-glow-4 { animation: starGlow 4s ease-in-out infinite; animation-delay: 0.6s; }
        .star-glow-5 { animation: starGlow 4s ease-in-out infinite; animation-delay: 0.8s; }

        /* Card entrance */
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(70px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card-entrance {
          opacity: 0;
          animation: cardEntrance 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Star fill animation */
        @keyframes starFill {
          0% {
            color: #e8e0d0;
            transform: scale(1);
          }
          50% {
            transform: scale(1.25);
          }
          100% {
            color: #f5c518;
            transform: scale(1);
          }
        }

        .star-fill {
          animation: starFill 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Quote flip */
        @keyframes quoteFli {
          from {
            transform: rotateY(90deg);
            opacity: 0;
          }
          to {
            transform: rotateY(0deg);
            opacity: 0.15;
          }
        }

        .quote-flip {
          animation: quoteFlip 0.5s ease-out forwards;
        }

        /* Star entrance */
        @keyframes starEntrance {
          0% {
            transform: scale(0);
            filter: drop-shadow(0 0 0 #fbbf24);
          }
          50% {
            transform: scale(1.3);
            filter: drop-shadow(0 0 6px #fbbf24);
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 #fbbf24);
          }
        }

        .star-entrance {
          animation: starEntrance 0.3s ease-out forwards;
        }

        /* Avatar pop */
        @keyframes avatarPop {
          0% {
            transform: scale(0);
            box-shadow: 0 0 0 rgba(37, 99, 235, 0);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.6);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.3);
          }
        }

        .avatar-pop {
          animation: avatarPop 0.5s ease-out forwards;
        }

        /* Name slide */
        @keyframes nameSlide {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .name-slide {
          animation: nameSlide 0.4s ease-out forwards;
        }

        /* Avatar ring rotation */
        @keyframes ringRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .avatar-ring {
          animation: ringRotate 6s linear infinite;
        }

        .avatar-ring-fast {
          animation: ringRotate 3s linear infinite;
        }

        /* Progress line */
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .progress-fill {
          animation: progressFill 0.45s ease-out forwards;
        }

        /* Star shimmer */
        @keyframes starShimmer {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
        }

        .star-shimmer-1 { animation: starShimmer 3s ease-in-out infinite; animation-delay: 0s; }
        .star-shimmer-2 { animation: starShimmer 3s ease-in-out infinite; animation-delay: 0.6s; }
        .star-shimmer-3 { animation: starShimmer 3s ease-in-out infinite; animation-delay: 1.2s; }
        .star-shimmer-4 { animation: starShimmer 3s ease-in-out infinite; animation-delay: 1.8s; }
        .star-shimmer-5 { animation: starShimmer 3s ease-in-out infinite; animation-delay: 2.4s; }

        /* Arrow fade */
        @keyframes arrowFade {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .arrow-fade-left {
          animation: arrowFade 0.3s ease-out forwards;
        }

        .arrow-fade-right {
          animation: arrowFade 0.3s ease-out forwards;
          animation-direction: reverse;
        }

        /* Carousel slide */
        @keyframes carouselSlide {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .carousel-slide {
          animation: carouselSlide 0.5s ease-out;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .card-float-1, .card-float-2, .card-float-3 {
            animation: cardFloat 5s ease-in-out infinite;
          }

          @keyframes cardFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .breathing-bg,
          .bg-orb,
          .sparkle-dot,
          .card-float-1,
          .card-float-2,
          .card-float-3,
          .border-glow-1,
          .border-glow-2,
          .border-glow-3,
          .quote-breathe,
          .star-glow-1,
          .star-glow-2,
          .star-glow-3,
          .star-glow-4,
          .star-glow-5,
          .avatar-ring,
          .star-shimmer-1,
          .star-shimmer-2,
          .star-shimmer-3,
          .star-shimmer-4,
          .star-shimmer-5,
          .subtitle-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* Breathing gradient background */}
      <div className="breathing-bg absolute inset-0"></div>

      {/* Floating orbs */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>
      <div className="bg-orb bg-orb-4"></div>

      {/* Sparkle dots */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="sparkle-dot"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `sparklePulse ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16" id="testimonials-title">
          <h2 className="text-3xl lg:text-4xl mb-4 font-bold text-[#1F2937]">
            {titleWords.map((word, index) => (
              <span key={index}>
                <span
                  className="title-word-testimonials"
                  style={{
                    animationDelay: titleInView ? `${index * 0.08}s` : '0s',
                  }}
                >
                  {word}
                </span>
                {index < titleWords.length - 1 && ' '}
              </span>
            ))}
          </h2>

          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${titleInView ? 'subtitle-fade' : ''}`}>
            Don't just take our word for it - hear from our satisfied customers
          </p>

          {titleInView && (
            <div className="flex justify-center mt-4">
              <div className="h-1 bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent underline-grow"></div>
            </div>
          )}
        </div>

        {/* Cards Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          {showArrows && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#fbbf24] hover:bg-[#fbbf24] hover:text-white transition-all z-20 arrow-fade-left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#fbbf24] hover:bg-[#fbbf24] hover:text-white transition-all z-20 arrow-fade-right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="grid md:grid-cols-3 gap-8" ref={cardsContainerRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`
                  bg-white rounded-2xl p-8 border-2 relative overflow-hidden
                  transition-all duration-400 cursor-pointer
                  ${cardsInView ? 'card-entrance' : ''}
                  ${cardsInView ? `card-float-${index + 1}` : ''}
                  ${cardsInView ? `border-glow-${index + 1}` : ''}
                  hover:scale-103 hover:-translate-y-3.5 hover:bg-[#fffdf5]
                `}
                style={{
                  animationDelay: cardsInView ? `${index * 200}ms` : '0s',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  willChange: 'transform',
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Mouse spotlight */}
                {mousePosition.cardIndex === index && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.06), transparent 40%)`,
                    }}
                  />
                )}

                {/* Quote mark */}
                <div className={`absolute top-6 right-6 text-[#fbbf24] ${cardsInView ? 'quote-breathe' : ''}`}>
                  <Quote className="w-12 h-12" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-[#fbbf24] text-[#fbbf24] 
                        ${starsAnimating ? 'star-fill' : ''}
                        ${cardsInView ? `star-glow-${i + 1}` : ''}
                        ${cardsInView ? `star-shimmer-${i + 1}` : ''}
                      `}
                      style={{
                        animationDelay: starsAnimating ? `${i * 140}ms` : '0s',
                        color: starsAnimating ? undefined : '#e8e0d0',
                      }}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10 transition-all duration-300 hover:opacity-100 hover:-translate-y-0.5">
                  "{testimonial.text}"
                </p>

                {/* Avatar and name */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    {/* Rotating ring */}
                    <div className="absolute inset-0 rounded-full avatar-ring opacity-40">
                      <div
                        className="w-full h-full rounded-full"
                        style={{
                          background: 'conic-gradient(from 0deg, #2563EB, #1E40AF, #2563EB)',
                        }}
                      />
                    </div>
                    {/* Avatar circle */}
                    <div
                      className={`relative w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-full flex items-center justify-center text-white text-lg ${
                        cardsInView ? 'avatar-pop' : ''
                      }`}
                      style={{
                        animationDelay: cardsInView ? `${index * 0.2 + 0.6}s` : '0s',
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div
                    className={cardsInView ? 'name-slide' : 'opacity-0'}
                    style={{
                      animationDelay: cardsInView ? `${index * 0.2 + 0.7}s` : '0s',
                    }}
                  >
                    <div className="text-[#1F2937] font-semibold transition-all duration-300 hover:text-[#2563EB] hover:tracking-wide">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>

                {/* Progress line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] w-0 hover:progress-fill"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel dots for mobile */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-[#fbbf24] scale-110' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
