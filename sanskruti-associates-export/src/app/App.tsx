import { NavigationProvider, useNavigation } from './components/AppRouter';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LoanTypes } from './components/LoanTypes';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurBankPartners } from './components/OurBankPartners';
import { EMICalculator } from './components/EMICalculator';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';
import { LoginRegister } from './components/LoginRegister';
import { LoanApplicationForm } from './components/LoanApplicationForm';
import { UserDashboard } from './components/UserDashboard';
import { LeadsManagement } from './components/LeadsManagement';
import { LeadDetails } from './components/LeadDetails';
import { DesignSystem } from './components/DesignSystem';
import { SiteMap } from './components/SiteMap';
import { SchoolFinance } from './components/SchoolFinance';
import { SchoolFinanceForm } from './components/SchoolFinanceForm';
import { Home as HomeIcon } from 'lucide-react';

function AppContent() {
  const { currentPage, navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'homepage' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <Hero />
            <div id="loan-services">
              <LoanTypes />
            </div>
            <WhyChooseUs />
            <OurBankPartners />
            <div id="emi-calculator-section">
              <EMICalculator />
            </div>
            <HowItWorks />
            <Testimonials />
            <TrustBadges />
            <div id="contact">
              <ContactCTA />
            </div>
            <Footer />
          </div>
        </>
      )}

      {currentPage === 'login' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <LoginRegister />
          </div>
        </>
      )}

      {currentPage === 'loan-application' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <LoanApplicationForm />
          </div>
        </>
      )}

      {currentPage === 'school-finance' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <SchoolFinance />
          </div>
        </>
      )}

      {currentPage === 'school-finance-apply' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <SchoolFinanceForm />
          </div>
        </>
      )}

      {currentPage === 'emi-calculator' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <button
              onClick={() => navigateTo('homepage')}
              className="fixed top-24 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors shadow-lg"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </button>
            <div className="py-16 bg-gray-50">
              <EMICalculator />
            </div>
          </div>
        </>
      )}

      {currentPage === 'user-dashboard' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <UserDashboard />
          </div>
        </>
      )}

      {currentPage === 'leads-management' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <LeadsManagement />
          </div>
        </>
      )}

      {currentPage === 'lead-details' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <LeadDetails />
          </div>
        </>
      )}

      {currentPage === 'about' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <button
              onClick={() => navigateTo('homepage')}
              className="fixed top-24 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors shadow-lg"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </button>
            <div className="max-w-4xl mx-auto px-4 py-16">
              <h1 className="text-4xl text-[#1F2937] mb-6">About Sanskruti Associates</h1>
              <p className="text-lg text-gray-600 mb-4">
                We are a leading loan consultancy helping customers find the best loan deals from top banks across India.
              </p>
              <p className="text-gray-600">
                With over 1000+ satisfied customers and partnerships with 25+ leading banks, we make loan approval simple, fast, and transparent.
              </p>
            </div>
          </div>
        </>
      )}

      {currentPage === 'contact' && (
        <>
          <Header />
          <div className="pt-[70px]">
            <button
              onClick={() => navigateTo('homepage')}
              className="fixed top-24 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors shadow-lg"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </button>
            <ContactCTA />
          </div>
        </>
      )}

      {currentPage === 'design-system' && <DesignSystem />}

      {currentPage === 'site-map' && <SiteMap />}
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}