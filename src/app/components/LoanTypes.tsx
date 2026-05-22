import { Home, User, Briefcase, Car, Building2, CreditCard, Settings2, Factory, BookOpen, GraduationCap, Truck } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useNavigation } from './AppRouter';
import { motion } from "motion/react";

const loanTypes = [
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Get your dream home with attractive interest rates starting from 8.5%',
  },
  {
    icon: Home,
    title: 'Loan Against Property',
    description: 'Use your property as collateral. Get up to ₹10 Crore at 9% p.a.',
  },
  {
    icon: Briefcase,
    title: 'Personal Loan',
    description: 'Quick funds for your personal needs with no collateral required',
  },
  {
    icon: Briefcase,
    title: 'Business Loan',
    description: 'Grow your business with flexible repayment options and quick approval',
  },
  {
    icon: GraduationCap,
    title: 'Education Loan',
    description: 'Finance your dream education in India or abroad. Starts from 8.4% p.a.',
  },
  {
    icon: Building2,
    title: 'Hospital Finance',
    description: 'Finance hospital expansion, medical equipment, or health facility upgrades',
  },
  {
    icon: Car,
    title: 'Car Loan',
    description: 'New or used car loan for salaried and self-employed. Fast approval.',
  },
  {
    icon: CreditCard,
    title: 'CC / OD Facility',
    description: 'Flexible working capital finance. Pay interest only on amount utilized. ₹1 Lakh to ₹10 Crore limit.',
  },
  {
    icon: Settings2,
    title: 'Machinery Loan',
    description: 'Finance new or used machinery for business growth. Quick approval.',
  },
  {
    icon: Factory,
    title: 'Industry Finance',
    description: 'Smart financing solutions for MSMEs and industrial businesses',
  },
  {
    icon: BookOpen,
    title: 'School Finance',
    description: 'Pay school fees, admission, books, hostel and transport. From 6.85% p.a.',
  },
  {
    icon: Truck,
    title: 'Vehicle Finance',
    description: 'Commercial, agricultural & construction vehicles. Fast approval & low rates.',
  },
  {
    icon: Building2,
    title: 'Construction Loan',
    description: 'Finance construction projects, equipment & infrastructure. Flexible terms.',
  },
];

export function LoanTypes() {
  const { navigateTo } = useNavigation();
  const navigate = useNavigate();

  const loanEmojis: Record<string, string> = {
    'Home Loan': '🏠',
    'Loan Against Property': '🏢',
    'Personal Loan': '👤',
    'Business Loan': '💼',
    'Education Loan': '🎓',
    'Hospital Finance': '🏥',
    'Car Loan': '🚗',
    'CC / OD Facility': '💳',
    'Machinery Loan': '⚙️',
    'School Finance': '🏫',
    'Vehicle Finance': '🚙',
    'Industry Finance': '🏭',
    'Construction Loan': '🏗️',
  };

  const cardColors = [
    {
      border: 'rgba(37,99,235,0.3)',
      glow: 'rgba(37,99,235,0.12)',
      accent: '#2563eb',
      badgeBg: 'rgba(37,99,235,0.08)',
      badgeText: '#1d4ed8'
    },
    {
      border: 'rgba(22,163,74,0.3)',
      glow: 'rgba(22,163,74,0.12)',
      accent: '#16a34a',
      badgeBg: 'rgba(22,163,74,0.08)',
      badgeText: '#15803d'
    },
    {
      border: 'rgba(124,58,237,0.3)',
      glow: 'rgba(124,58,237,0.12)',
      accent: '#7c3aed',
      badgeBg: 'rgba(124,58,237,0.08)',
      badgeText: '#6d28d9'
    },
    {
      border: 'rgba(234,88,12,0.3)',
      glow: 'rgba(234,88,12,0.12)',
      accent: '#ea580c',
      badgeBg: 'rgba(234,88,12,0.08)',
      badgeText: '#c2410c'
    },
    {
      border: 'rgba(217,119,6,0.35)',
      glow: 'rgba(217,119,6,0.12)',
      accent: '#d97706',
      badgeBg: 'rgba(217,119,6,0.08)',
      badgeText: '#b45309'
    },
    {
      border: 'rgba(6,182,212,0.3)',
      glow: 'rgba(6,182,212,0.12)',
      accent: '#06b6d4',
      badgeBg: 'rgba(6,182,212,0.08)',
      badgeText: '#0891b2'
    },
  ];

  const handleApply = (loanTitle: string) => {
    if (loanTitle === 'Home Loan') {
      navigate('/home-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Loan Against Property') {
      navigate('/lap');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Machinery Loan') {
      navigate('/machinery-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Personal Loan') {
      navigate('/personal-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Business Loan') {
      navigate('/business-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Education Loan') {
      navigate('/education-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Hospital Finance') {
      navigate('/hospital-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Industry Finance') {
      navigate('/industry-finance');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Car Loan') {
      navigate('/car-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'School Finance') {
      navigate('/school-finance');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Vehicle Finance') {
      navigate('/vehicle-finance');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Construction Loan') {
      navigate('/construction-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'CC / OD Facility') {
      navigate('/cc-od-finance');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigateTo('loan-application');
  };

  return (
    <section id="loan-services" className="py-16 lg:py-24 relative overflow-hidden">
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmerBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(37,99,235,0.15),
            0 0 40px rgba(37,99,235,0.05);
          }
          50% {
            box-shadow: 0 0 30px rgba(37,99,235,0.25),
            0 0 60px rgba(37,99,235,0.1),
            0 0 80px rgba(22,163,74,0.05);
          }
        }
        @keyframes applyPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(37,99,235,0); }
        }
        @keyframes goldShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.5, filter: 'blur(2px)' }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(219, 234, 254, 0.75) 50%, rgba(255, 255, 255, 0.85) 100%)',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 mb-4"
            style={{
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.2)'
            }}
          >
            <span>🏦</span>
            <span>Our Loan Products</span>
            <span>✨</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, #1e3a8a 0%, #2563eb 30%, #1d4ed8 50%, #16a34a 70%, #1e3a8a 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'goldShimmer 4s linear infinite'
            }}
          >
            Loan Solutions for Every Need
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Choose from our wide range of loan products designed to meet your financial goals
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 rounded-full mx-auto mt-6"
            style={{
              background: 'linear-gradient(90deg, transparent, #2563eb, #16a34a, transparent)'
            }}
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
        >
          {loanTypes.map((loan, index) => {
            const color = cardColors[index % cardColors.length];
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.94,
                  rotateX: 8
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.09,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                  transition: { duration: 0.25 }
                }}
                className="relative rounded-2xl p-6 bg-white group cursor-pointer"
                style={{
                  border: `1px solid ${color.border}`,
                  boxShadow: `0 4px 24px ${color.glow}, 0 1px 3px rgba(0,0,0,0.06)`,
                  animation: `floatCard ${3.5 + (index * 0.3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div
                  className="absolute top-0 left-4 right-4 h-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color.accent}, transparent)`,
                  }}
                />

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${color.glow} 0%, transparent 50%, ${color.glow} 100%)`
                  }}
                />

                <div
                  className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: color.badgeBg,
                    color: color.badgeText,
                    border: `1px solid ${color.border}`
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <motion.div
                  className="mb-1"
                  animate={{
                    y: [0, -4, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-3xl">
                    {loanEmojis[loan.title] || '💰'}
                  </span>
                </motion.div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-3 mt-2 group-hover:text-blue-700 transition-colors duration-300"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {loan.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{loan.description}</p>

                <div className="flex flex-wrap items-center gap-3">
                  <motion.button
                    onClick={() => handleApply(loan.title)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-medium transition-colors duration-300"
                    style={{ color: color.accent }}
                  >
                    View More →
                  </motion.button>

                  <motion.button
                    onClick={() => handleApply(loan.title)}
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.15 }}
                    className="relative overflow-hidden px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${color.accent} 0%, ${color.accent}dd 100%)`,
                      boxShadow: `0 4px 15px ${color.glow}`,
                      animation: 'applyPulse 2.5s ease infinite',
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'goldShimmer 1.5s linear infinite'
                      }}
                    />
                    <span className="relative z-10 flex items-center gap-1.5">
                      Apply Now
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
