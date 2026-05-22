import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigation } from './AppRouter';
import { motion } from "motion/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo, currentPage } = useNavigation();

  const scrollToLoanServices = () => {
    document.getElementById('loan-services-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleApplyNowClick = () => {
    if (currentPage !== 'homepage') {
      navigateTo('homepage');
      setTimeout(() => scrollToLoanServices(), 300);
    } else {
      scrollToLoanServices();
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (linkName: string) => {
    if (linkName === 'Home') {
      navigateTo('homepage');
    } else if (linkName === 'Loan Services') {
      if (currentPage !== 'homepage') {
        navigateTo('homepage');
        setTimeout(() => scrollToLoanServices(), 300);
      } else {
        scrollToLoanServices();
      }
    } else if (linkName === 'EMI Calculator') {
      navigateTo('emi-calculator');
    } else if (linkName === 'About Us') {
      navigateTo('about');
    } else if (linkName === 'Contact Us') {
      navigateTo('contact');
    } else if (linkName === 'Login / Register') {
      navigateTo('login');
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home' },
    { name: 'Loan Services' },
    { name: 'EMI Calculator' },
    { name: 'About Us' },
    { name: 'Contact Us' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-[#0f172a] z-50 h-[70px]"
      style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <motion.button 
            onClick={() => navigateTo('homepage')} 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative"
              animate={{ 
                y: [0, -3, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src="/bank logos/Main_logo.jpeg"
                alt="Sanskruti Associates Logo"
                className="h-16 w-auto"
                style={{ 
                  mixBlendMode: 'lighten',
                  filter: 'drop-shadow(0 4px 8px rgba(22,163,74,0.3))',
                  maxWidth: '280px'
                }}
                whileHover={{
                  filter: 'drop-shadow(0 6px 12px rgba(22,163,74,0.5)) brightness(1.1)'
                }}
              />
            </motion.div>
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.span 
                className="text-xl text-white leading-tight group-hover:text-[#16A34A] transition-colors"
                whileHover={{
                  background: 'linear-gradient(90deg, #16A34A, #22C55E, #16A34A)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Sanskruti Associates
              </motion.span>
              <motion.span 
                className="text-xs italic leading-tight" 
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Always With You
              </motion.span>
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name)}
                className="text-white hover:text-[#16A34A] transition-colors text-sm"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => navigateTo('login')}
              className="border border-white/25 text-white hover:border-[#16A34A] hover:text-[#16A34A] rounded-lg transition-colors text-sm"
              style={{ padding: '9px 18px' }}
            >
              Login / Register
            </button>
            <button onClick={handleApplyNowClick} className="bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors" style={{ padding: '10px 20px' }}>
              Apply Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f172a] border-t shadow-lg" style={{ borderTopColor: 'rgba(255, 255, 255, 0.1)' }}>
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name)}
                className="text-white hover:text-[#16A34A] transition-colors py-2 px-3 rounded-lg hover:bg-white/5 text-left"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('Login / Register')}
              className="text-white hover:text-[#16A34A] transition-colors py-2 px-3 rounded-lg hover:bg-white/5 text-left"
            >
              Login / Register
            </button>
            <button
              className="bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors w-full"
              style={{ padding: '10px 20px' }}
              onClick={handleApplyNowClick}
            >
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
