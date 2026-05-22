import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

export function Footer() {
  const [inView, setInView] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smart scroll helper — navigates to page first if needed, then scrolls to section
  const navigateToSection = (path: string, sectionId?: string) => {
    if (!sectionId) {
      navigate(path);
      return;
    }

    if (location.pathname === path) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Navigate first, then wait for the element to exist in the DOM
    navigate(path);

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 100); // retry every 100ms, up to 1 second
      }
    };
    setTimeout(tryScroll, 200);
  };

  // Loan services with correct routes
  const loanServices = [
    { label: 'Home Loan', path: '/home-loan' },
    { label: 'Loan Against Property', path: '/lap' },
    { label: 'Personal Loan', path: '/personal-loan' },
    { label: 'Business Loan', path: '/business-loan' },
    { label: 'Educational Loan', path: '/education-loan' },
    { label: 'Hospital Finance', path: '/hospital-loan' },
    { label: 'Car Loan', path: '/car-loan' },
    { label: 'Vehicle Finance', path: '/vehicle-finance' },
    { label: 'CC / OD', path: '/cc-od-finance' },
    { label: 'Machinery Loan', path: '/machinery-loan' },
    { label: 'Construction Loan', path: '/construction-loan' },
    { label: 'Industry Finance', path: '/industry-finance' },
    { label: 'School Finance', path: '/school-finance' },
  ];

  // Social media links
  const socialLinks = {
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
  };

  return (
    <footer ref={footerRef} className="relative bg-[#1F2937] text-gray-300 overflow-hidden">
      <style>{`
        /* Animated gradient background */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .footer-gradient {
          background: linear-gradient(
            135deg,
            #1F2937 0%,
            #1a2332 25%,
            #1F2937 50%,
            #1a2332 75%,
            #1F2937 100%
          );
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        /* Fade in up animation for columns */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-col-1 {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.1s forwards;
        }

        .fade-in-col-2 {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .fade-in-col-3 {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
        }

        .fade-in-col-4 {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        /* Premium link hover effect */
        .footer-link {
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #4A90E2;
          transform: translateX(4px);
        }

        /* Social icon hover effect */
        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(74, 144, 226, 0.6);
          background: #4A90E2 !important;
        }

        /* Contact icon pulse on hover */
        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .contact-icon:hover {
          animation: iconPulse 0.6s ease-in-out;
        }

        /* Glowing divider line */
        .glow-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(74, 144, 226, 0.5) 20%,
            rgba(74, 144, 226, 0.8) 50%,
            rgba(74, 144, 226, 0.5) 80%,
            transparent
          );
          box-shadow: 0 0 10px rgba(74, 144, 226, 0.3);
        }

        /* Shimmer effect on background */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .shimmer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(74, 144, 226, 0.03),
            transparent
          );
          animation: shimmer 20s ease-in-out infinite;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-gradient,
          .shimmer-overlay,
          .contact-icon:hover {
            animation: none !important;
          }

          .fade-in-col-1,
          .fade-in-col-2,
          .fade-in-col-3,
          .fade-in-col-4 {
            opacity: 1 !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* Shimmer overlay */}
      <div className="shimmer-overlay"></div>

      {/* Main footer content with full viewport height */}
      <div className="footer-gradient relative" style={{ minHeight: '100vh' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: '100vh' }}>
          <div className="w-full py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Column 1: Company Info */}
              <div className={inView ? 'fade-in-col-1' : ''}>
                <div className="text-2xl text-white mb-4 font-bold">Sanskruti Associates</div>
                <p className="text-sm mb-6 leading-relaxed">
                  Your trusted partner for all loan solutions. We help you find the best deals from multiple banks with expert guidance.
                </p>
                <div className="flex gap-3">
                  <div
                    onClick={() => window.open(socialLinks.facebook, '_blank', 'noopener,noreferrer')}
                    className="social-icon w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                    style={{ cursor: 'pointer' }}
                  >
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div
                    onClick={() => window.open(socialLinks.twitter, '_blank', 'noopener,noreferrer')}
                    className="social-icon w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                    style={{ cursor: 'pointer' }}
                  >
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div
                    onClick={() => window.open(socialLinks.linkedin, '_blank', 'noopener,noreferrer')}
                    className="social-icon w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                    style={{ cursor: 'pointer' }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div
                    onClick={() => window.open(socialLinks.instagram, '_blank', 'noopener,noreferrer')}
                    className="social-icon w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                    style={{ cursor: 'pointer' }}
                  >
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Column 2: Loan Services */}
              <div className={inView ? 'fade-in-col-2' : ''}>
                <h4 className="text-white mb-4 font-semibold">Loan Services</h4>
                <ul className="space-y-2 text-sm">
                  {loanServices.map((loan) => (
                    <li key={loan.label}>
                      <span
                        onClick={() => navigate(loan.path)}
                        className="footer-link"
                        style={{ cursor: 'pointer' }}
                      >
                        {loan.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Quick Links */}
              <div className={inView ? 'fade-in-col-3' : ''}>
                <h4 className="text-white mb-4 font-semibold">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span
                      onClick={() => navigate('/about')}
                      className="footer-link"
                      style={{ cursor: 'pointer' }}
                    >
                      About Us
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => navigate('/emi-calculator')}
                      className="footer-link"
                      style={{ cursor: 'pointer' }}
                    >
                      EMI Calculator
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => navigateToSection('/', 'loan-services-section')}
                      className="footer-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Compare Loans
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => navigateToSection('/', 'loan-services-section')}
                      className="footer-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Check Eligibility
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => navigateToSection('/contact', 'faq-section')}
                      className="footer-link"
                      style={{ cursor: 'pointer' }}
                    >
                      FAQs
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        navigate('/contact');
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 100);
                      }}
                      className="footer-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Contact Us
                    </span>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact Info */}
              <div className={inView ? 'fade-in-col-4' : ''}>
                <h4 className="text-white mb-4 font-semibold">Contact Info</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#4A90E2] flex-shrink-0 mt-0.5" />
                    <span
                      onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Baramati+Dist+Pune+413133', '_blank', 'noopener,noreferrer')}
                      className="footer-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Baramati Dist-Pune 413133
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="contact-icon w-5 h-5 text-[#4A90E2] flex-shrink-0" />
                    <a href="tel:+917758969798" className="footer-link">
                      +91 7758 96 9798
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="contact-icon w-5 h-5 text-[#4A90E2] flex-shrink-0" />
                    <a href="mailto:sanskruti.sss1108@gmail.com" className="footer-link">
                      sanskruti.sss1108@gmail.com
                    </a>
                  </li>
                  <li className="text-gray-400 text-xs mt-4">
                    Branches: Baramati | Pune | Mumbai | Kolhapur | Sasawad | Tembhurni
                  </li>
                </ul>
              </div>
            </div>

            {/* Glowing divider */}
            <div className="glow-divider mb-8"></div>

            {/* Copyright bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div>© 2026 Sanskruti Associates. All rights reserved.</div>
              <div className="flex gap-6">
                <span
                  onClick={() => {}}
                  className="footer-link"
                  style={{ cursor: 'pointer' }}
                >
                  Privacy Policy
                </span>
                <span
                  onClick={() => {}}
                  className="footer-link"
                  style={{ cursor: 'pointer' }}
                >
                  Terms of Service
                </span>
                <span
                  onClick={() => {}}
                  className="footer-link"
                  style={{ cursor: 'pointer' }}
                >
                  Disclaimer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
