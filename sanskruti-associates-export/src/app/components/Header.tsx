import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigation } from './AppRouter';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo, scrollToSection, currentPage } = useNavigation();

  const handleNavClick = (linkName: string) => {
    if (linkName === 'Home') {
      navigateTo('homepage');
    } else if (linkName === 'Loan Services') {
      if (currentPage !== 'homepage') {
        navigateTo('homepage');
        setTimeout(() => scrollToSection('loan-services'), 300);
      } else {
        scrollToSection('loan-services');
      }
    } else if (linkName === 'EMI Calculator') {
      navigateTo('emi-calculator');
    } else if (linkName === 'About Us') {
      navigateTo('about');
    } else if (linkName === 'Contact Us') {
      navigateTo('contact');
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
          <button onClick={() => navigateTo('homepage')} className="flex items-center gap-3 group">
            <img
              src="/src/imports/ChatGPT_Image_May_3,_2026,_08_05_15_PM.png"
              alt="Sanskruti Associates Logo"
              className="h-12 w-auto"
              style={{ mixBlendMode: 'lighten' }}
            />
            <div className="flex flex-col">
              <span className="text-xl text-white leading-tight group-hover:text-[#16A34A] transition-colors">
                Sanskruti Associates
              </span>
              <span className="text-xs italic leading-tight" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                Always With You
              </span>
            </div>
          </button>

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
            <button onClick={() => navigateTo('loan-application')} className="bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors" style={{ padding: '10px 20px' }}>
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
              className="bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors w-full"
              style={{ padding: '10px 20px' }}
              onClick={() => {
                navigateTo('loan-application');
                setMobileMenuOpen(false);
              }}
            >
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
