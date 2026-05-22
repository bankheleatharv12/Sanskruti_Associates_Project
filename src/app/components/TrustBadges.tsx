import { Shield, Award, CheckCircle2, Lock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const badges = [
  {
    icon: Shield,
    title: '100% Secure',
    description: 'Bank-level security',
  },
  {
    icon: Award,
    title: 'Trusted Service',
    description: '1000+ happy customers',
  },
  {
    icon: CheckCircle2,
    title: 'Verified Partners',
    description: '200+ banks & NBFCs',
  },
  {
    icon: Lock,
    title: 'Data Protected',
    description: 'SSL encrypted',
  },
];

export function TrustBadges() {
  const [badgesInView, setBadgesInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection observer for badges
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBadgesInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 border-y border-gray-200 overflow-hidden">
      <style>{`
        /* Badge floating */
        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        .badge-float-1 {
          animation: badgeFloat 5s ease-in-out infinite;
          animation-delay: 0s;
          will-change: transform;
        }

        .badge-float-2 {
          animation: badgeFloat 5s ease-in-out infinite;
          animation-delay: 0.8s;
          will-change: transform;
        }

        .badge-float-3 {
          animation: badgeFloat 5s ease-in-out infinite;
          animation-delay: 1.6s;
          will-change: transform;
        }

        .badge-float-4 {
          animation: badgeFloat 5s ease-in-out infinite;
          animation-delay: 2.4s;
          will-change: transform;
        }

        /* Breathing ripple ring */
        @keyframes rippleRing {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.4);
          }
          50% {
            box-shadow: 0 0 0 14px rgba(20, 184, 166, 0);
          }
        }

        .ripple-ring-1 {
          animation: rippleRing 2.8s ease-out infinite;
          animation-delay: 0s;
        }

        .ripple-ring-2 {
          animation: rippleRing 2.8s ease-out infinite;
          animation-delay: 0.7s;
        }

        .ripple-ring-3 {
          animation: rippleRing 2.8s ease-out infinite;
          animation-delay: 1.4s;
        }

        .ripple-ring-4 {
          animation: rippleRing 2.8s ease-out infinite;
          animation-delay: 2.1s;
        }

        /* Icon rotation oscillation */
        @keyframes iconOscillate {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        .icon-oscillate {
          animation: iconOscillate 3s ease-in-out infinite;
        }

        /* Badge entrance */
        @keyframes badgeEntrance {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .badge-entrance {
          animation: badgeEntrance 0.6s ease-out forwards;
        }

        /* Icon pop entrance */
        @keyframes iconPopEntrance {
          0% {
            transform: scale(0);
            box-shadow: 0 0 0 rgba(20, 184, 166, 0);
          }
          50% {
            transform: scale(1.3);
            box-shadow: 0 0 30px rgba(20, 184, 166, 0.8);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(20, 184, 166, 0);
          }
        }

        .icon-pop-entrance {
          animation: iconPopEntrance 0.5s ease-out forwards;
        }

        /* Title slide */
        @keyframes titleSlideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-slide-up {
          animation: titleSlideUp 0.4s ease-out forwards;
        }

        /* Subtitle fade */
        @keyframes subtitleFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .subtitle-fade-in {
          animation: subtitleFadeIn 0.4s ease-out forwards;
        }

        /* Breathing gradient background */
        @keyframes breathingBgBadges {
          0%, 100% {
            background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
          }
          50% {
            background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
          }
        }

        .breathing-bg-badges {
          animation: breathingBgBadges 6s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .badge-float-1, .badge-float-2, .badge-float-3, .badge-float-4 {
            animation: badgeFloat 5s ease-in-out infinite;
          }

          @keyframes badgeFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .badge-float-1,
          .badge-float-2,
          .badge-float-3,
          .badge-float-4,
          .ripple-ring-1,
          .ripple-ring-2,
          .ripple-ring-3,
          .ripple-ring-4,
          .icon-oscillate,
          .breathing-bg-badges {
            animation: none !important;
          }
        }
      `}</style>

      {/* Breathing gradient background */}
      <div className="breathing-bg-badges absolute inset-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                ref={(el) => (badgeRefs.current[index] = el)}
                className={`
                  flex flex-col items-center text-center
                  transition-all duration-400 cursor-pointer
                  ${badgesInView ? 'badge-entrance' : 'opacity-0'}
                  ${badgesInView ? `badge-float-${index + 1}` : ''}
                  hover:-translate-y-2
                `}
                style={{
                  animationDelay: badgesInView ? `${index * 0.15}s` : '0s',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  willChange: 'transform',
                }}
              >
                {/* Icon circle with ripple */}
                <div className="relative mb-3">
                  <div
                    className={`
                      w-16 h-16 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-full 
                      flex items-center justify-center
                      transition-all duration-300
                      ${badgesInView ? 'icon-pop-entrance' : ''}
                      ${badgesInView ? `ripple-ring-${index + 1}` : ''}
                      hover:scale-112 hover:shadow-lg hover:shadow-teal-500/50
                    `}
                    style={{
                      animationDelay: badgesInView ? `${index * 0.15}s` : '0s',
                    }}
                  >
                    <Icon className="w-8 h-8 text-white icon-oscillate" />
                  </div>
                </div>

                {/* Title */}
                <div
                  className={`
                    text-[#1F2937] mb-1 font-semibold
                    transition-all duration-300
                    ${badgesInView ? 'title-slide-up' : 'opacity-0'}
                    hover:text-[#0d9488] hover:tracking-wide
                  `}
                  style={{
                    animationDelay: badgesInView ? `${index * 0.15 + 0.15}s` : '0s',
                  }}
                >
                  {badge.title}
                </div>

                {/* Description */}
                <div
                  className={`
                    text-sm text-gray-500
                    ${badgesInView ? 'subtitle-fade-in' : 'opacity-0'}
                  `}
                  style={{
                    animationDelay: badgesInView ? `${index * 0.15 + 0.25}s` : '0s',
                  }}
                >
                  {badge.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
