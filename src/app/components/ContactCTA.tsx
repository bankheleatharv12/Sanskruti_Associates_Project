import { Phone, MessageCircle, Mail, Send, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const phoneNumberRef = useRef<HTMLDivElement>(null);

  const loanTypes = [
    'Home Loan',
    'Personal Loan',
    'Business Loan',
    'Car Loan',
    'Loan Against Property',
    'CC/OD',
    'Education Loan',
    'Hospital Loan',
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSectionInView(true);
          // Animate phone number with typewriter effect
          animatePhoneNumber();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate phone number with counting effect
  const animatePhoneNumber = () => {
    if (!phoneNumberRef.current) return;
    const phoneText = '+91 7758 96 9798';
    const element = phoneNumberRef.current;
    element.textContent = '';
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < phoneText.length) {
        element.textContent += phoneText[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  // Copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText('sanskruti.sss1108@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  // Handle form submission with loading state
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', loanType: '' });
    }, 3000);
  };

  // Ripple effect on button click
  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple-effect');

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex items-center"
      style={{ background: '#3348C8', minHeight: '100vh' }}
    >
      <style>{`
        /* ===== AMBIENT / IDLE EFFECTS ===== */
        
        /* Animated gradient mesh aurora glow */
        @keyframes auroraGlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
            opacity: 0.25;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
            opacity: 0.2;
          }
        }

        .aurora-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(80px);
          animation: auroraGlow 15s ease-in-out infinite;
          pointer-events: none;
        }

        .aurora-1 {
          background: radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent);
          top: -200px;
          left: -100px;
        }

        .aurora-2 {
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
          bottom: -200px;
          right: -100px;
          animation-delay: 5s;
          animation-duration: 18s;
        }

        /* Floating contact cards */
        @keyframes floatCard1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes floatCard2 {
          0%, 100% {
            transform: translateY(-6px);
          }
          50% {
            transform: translateY(0px);
          }
        }

        .float-card-1 {
          animation: floatCard1 3.5s ease-in-out infinite;
          will-change: transform;
        }

        .float-card-2 {
          animation: floatCard2 4s ease-in-out infinite;
          will-change: transform;
        }

        /* Rotating border gradient on form card */
        @keyframes rotateBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .form-card-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 1.25rem;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(99, 102, 241, 0.4) 90deg,
            rgba(139, 92, 246, 0.4) 180deg,
            transparent 270deg,
            transparent 360deg
          );
          animation: rotateBorder 8s linear infinite;
          z-index: -1;
          opacity: 0.6;
        }

        /* Twinkling particle dots */
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.02;
          }
          50% {
            opacity: 0.06;
          }
        }

        .particle-dot {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }

        /* Noise texture overlay */
        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* ===== SCROLL / ENTRANCE ANIMATIONS ===== */
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .slide-in-up {
          animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Word-by-word reveal */
        @keyframes wordReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .word-reveal {
          display: inline-block;
          opacity: 0;
          animation: wordReveal 0.5s ease-out forwards;
        }

        /* ===== BUTTON & CTA EFFECTS ===== */
        
        /* Shimmer sweep on button hover */
        @keyframes shimmerSweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .submit-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
        }

        .submit-button:hover::before {
          animation: shimmerSweep 0.8s ease-in-out;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(22, 163, 74, 0.3);
        }

        .submit-button:active {
          transform: scale(0.97);
        }

        /* Ripple effect */
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        /* Loading spinner */
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        /* Checkmark animation */
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 50;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .checkmark-path {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: checkmark 0.5s ease-out forwards;
        }

        /* ===== INPUT FIELD EFFECTS ===== */
        
        .input-field {
          position: relative;
          transition: all 0.3s ease;
        }

        .input-field:focus-within {
          box-shadow: 0 0 0 3px rgba(51, 72, 200, 0.2);
          background: rgba(51, 72, 200, 0.03);
        }

        .floating-label {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s ease;
          pointer-events: none;
          color: #9ca3af;
        }

        .input-field:focus-within .floating-label,
        .input-field.has-value .floating-label {
          top: -8px;
          font-size: 12px;
          background: white;
          padding: 0 4px;
          color: #3348C8;
        }

        /* Validation tick */
        @keyframes fadeInTick {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .validation-tick {
          animation: fadeInTick 0.3s ease-out;
        }

        /* ===== CONTACT CARD EFFECTS ===== */
        
        .contact-card {
          perspective: 600px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .contact-card:hover {
          transform: rotateX(3deg) rotateY(-3deg);
        }

        /* Card highlight sweep */
        @keyframes highlightSweep {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .contact-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          pointer-events: none;
        }

        .contact-card:hover::after {
          animation: highlightSweep 0.8s ease-out;
        }

        /* Icon badge pulse */
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(22, 163, 74, 0);
          }
        }

        .icon-badge {
          animation: badgePulse 2s ease-out infinite;
        }

        .contact-card:hover .icon-badge {
          animation: badgePulse 0.6s ease-out;
        }

        /* Shine text effect */
        @keyframes textShine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .shine-text {
          background: linear-gradient(90deg, currentColor 40%, white 50%, currentColor 60%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          transition: all 0.3s ease;
        }

        .contact-card:hover .shine-text {
          animation: textShine 0.8s ease-out;
        }

        /* ===== DROPDOWN EFFECTS ===== */
        
        .dropdown-option {
          opacity: 0;
          transform: translateY(-10px);
          animation: dropdownFadeIn 0.3s ease-out forwards;
        }

        @keyframes dropdownFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== GLASS-MORPHISM ===== */
        
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* ===== COPIED TOOLTIP ===== */
        
        @keyframes tooltipFade {
          0%, 100% {
            opacity: 0;
            transform: translateY(5px);
          }
          10%, 90% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .copied-tooltip {
          animation: tooltipFade 2s ease-out;
        }

        /* ===== RESPONSIVE & ACCESSIBILITY ===== */
        
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (max-width: 768px) {
          .aurora-glow {
            width: 400px;
            height: 400px;
          }

          .float-card-1,
          .float-card-2 {
            animation-duration: 5s;
          }

          @keyframes floatCard1 {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-3px);
            }
          }

          @keyframes floatCard2 {
            0%, 100% {
              transform: translateY(-3px);
            }
            50% {
              transform: translateY(0px);
            }
          }
        }
      `}</style>

      {/* Noise texture overlay */}
      <div className="noise-overlay"></div>

      {/* Aurora glow backgrounds */}
      <div className="aurora-glow aurora-1"></div>
      <div className="aurora-glow aurora-2"></div>

      {/* Twinkling particle dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle-dot"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            ref={leftContentRef}
            className="text-white"
          >
            {/* Headline with word-by-word reveal */}
            <h2
              ref={headlineRef}
              className={`text-3xl lg:text-4xl mb-6 font-bold ${sectionInView ? '' : 'opacity-0'}`}
            >
              {sectionInView ? (
                'Talk to Our Loan Expert Today'.split(' ').map((word, index, array) => (
                  <span key={index}>
                    <span
                      className="word-reveal"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      {word}
                    </span>
                    {index < array.length - 1 && ' '}
                  </span>
                ))
              ) : (
                'Talk to Our Loan Expert Today'
              )}
            </h2>

            {/* Subtext */}
            <p
              className={`text-xl text-blue-100 mb-8 leading-relaxed ${
                sectionInView ? 'slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: '120ms' }}
            >
              Get personalized loan advice and find the perfect solution for your needs. Our experts
              are here to help you every step of the way.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Call Us Card */}
              <a
                href="tel:+917758969798"
                className={`contact-card float-card-1 flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-4 rounded-xl border border-white/20 relative ${
                  sectionInView ? 'slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: '240ms' }}
              >
                <div className="icon-badge w-12 h-12 bg-[#16A34A] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">Call Us Now</div>
                  <div ref={phoneNumberRef} className="text-lg shine-text"></div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/917758969798"
                className={`contact-card float-card-2 flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-4 rounded-xl border border-white/20 relative ${
                  sectionInView ? 'slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: '360ms' }}
              >
                <div className="icon-badge w-12 h-12 bg-[#16A34A] rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">WhatsApp Us</div>
                  <div className="text-lg shine-text">Chat on WhatsApp</div>
                </div>
              </a>
            </div>

            {/* Email with copy functionality */}
            <div
              className={`flex items-center gap-2 text-sm text-blue-200 relative ${
                sectionInView ? 'slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: '480ms' }}
            >
              <Mail className="w-4 h-4" />
              <button
                onClick={copyEmail}
                className="hover:text-white transition-colors cursor-pointer"
              >
                sanskruti.sss1108@gmail.com
              </button>
              {showCopied && (
                <span className="copied-tooltip absolute left-0 top-6 bg-white text-green-600 px-3 py-1 rounded-lg text-xs font-medium shadow-lg">
                  ✓ Copied!
                </span>
              )}
            </div>
          </div>

          {/* Right Content - Form Card */}
          <div
            ref={formCardRef}
            className={`glass-card form-card-glow relative rounded-2xl p-8 shadow-2xl ${
              sectionInView ? 'slide-in-up' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl text-[#1F2937] mb-6 font-bold">Quick Inquiry Form</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Input */}
              <div
                className={`input-field relative ${formData.name ? 'has-value' : ''}`}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
              >
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-white transition-all"
                  required
                />
                <label className="floating-label">Full Name *</label>
                {formData.name.length > 2 && (
                  <Check className="validation-tick absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
              </div>

              {/* Phone Number Input */}
              <div
                className={`input-field relative ${formData.phone ? 'has-value' : ''}`}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
              >
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-white transition-all"
                  required
                />
                <label className="floating-label">Phone Number *</label>
                {formData.phone.length >= 10 && (
                  <Check className="validation-tick absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
              </div>

              {/* Custom Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-white text-left flex items-center justify-between transition-all hover:border-[#3348C8]"
                >
                  <span className={formData.loanType ? 'text-gray-900' : 'text-gray-400'}>
                    {formData.loanType || 'Select loan type *'}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                    {loanTypes.map((type, index) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, loanType: type });
                          setDropdownOpen(false);
                        }}
                        className="dropdown-option w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span>{type}</span>
                        {formData.loanType === type && (
                          <Check className="w-5 h-5 text-[#16A34A]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={createRipple}
                disabled={isSubmitting || isSubmitted}
                className="submit-button w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-4 rounded-lg flex items-center justify-center gap-2 font-medium disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="spinner"></div>
                ) : isSubmitted ? (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        className="checkmark-path"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Inquiry Sent
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our Terms & Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
