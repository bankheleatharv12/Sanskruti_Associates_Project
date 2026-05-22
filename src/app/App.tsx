import { Navigate, Route, Routes } from 'react-router';
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
import { HomeLoan } from './components/HomeLoan';
import { HomeLoanForm } from './components/HomeLoanForm';
import LAP from './components/LAP';
import LAPForm from './components/LAPForm';
import MachineryLoan from './components/MachineryLoan';
import MachineryLoanForm from './components/MachineryLoanForm';
import { PersonalLoan } from '../pages/PersonalLoan'; // UPGRADED - Using new TSX file with animations
import { PersonalLoanForm } from './components/PersonalLoanForm';
import BusinessLoan from './components/BusinessLoan';
import BusinessLoanForm from './components/BusinessLoanForm';
import EducationLoan from './components/EducationLoan';
import EducationLoanForm from './components/EducationLoanForm';
import { CarLoan } from './components/CarLoan';
import { CarLoanForm } from './components/CarLoanForm';
import { IndustryFinance } from './components/IndustryFinance';
import { IndustryFinanceForm } from './components/IndustryFinanceForm';
import { HospitalLoan } from './components/HospitalLoan';
import { HospitalLoanForm } from './components/HospitalLoanForm';
import { SchoolFinance } from './components/SchoolFinance';
import { SchoolFinanceForm } from './components/SchoolFinanceForm';
import { VehicleFinance } from './components/VehicleFinance';
import { VehicleFinanceForm } from './components/VehicleFinanceForm';
import { ConstructionLoan } from './components/ConstructionLoan';
import { ConstructionLoanForm } from './components/ConstructionLoanForm';
import { CCODFinance } from '../pages/CCODFinance';
import CCODFinanceForm from '../pages/CCODFinanceForm';
import { UserDashboard } from './components/UserDashboard';
import { LeadsManagement } from './components/LeadsManagement';
import { LeadDetails } from './components/LeadDetails';
import { DesignSystem } from './components/DesignSystem';
import { SiteMap } from './components/SiteMap';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { LoanStatusTracking } from './components/LoanStatusTracking';
import { Home as HomeIcon } from 'lucide-react';

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[70px]">{children}</main>
    </>
  );
}

function FloatingHomeButton() {
  const { navigateTo } = useNavigation();

  return (
    <button
      onClick={() => navigateTo('homepage')}
      className="fixed top-24 right-4 sm:right-6 z-50 flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors shadow-lg"
    >
      <HomeIcon className="w-5 h-5" />
      Home
    </button>
  );
}

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <div id="loan-services-section">
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
    </PageShell>
  );
}

function EmiPage() {
  return (
    <PageShell>
      <FloatingHomeButton />
      <div className="py-16 bg-gray-50">
        <EMICalculator />
      </div>
    </PageShell>
  );
}

function AppRoutes() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<PageShell><LoginRegister /></PageShell>} />
        <Route path="/loan-application" element={<PageShell><LoanApplicationForm /></PageShell>} />
        <Route path="/home-loan" element={<PageShell><HomeLoan /></PageShell>} />
        <Route path="/home-loan/apply" element={<PageShell><HomeLoanForm /></PageShell>} />
        <Route path="/lap" element={<PageShell><LAP /></PageShell>} />
        <Route path="/lap/apply" element={<PageShell><LAPForm /></PageShell>} />
        <Route path="/machinery-loan" element={<PageShell><MachineryLoan /></PageShell>} />
        <Route path="/machinery-loan/apply" element={<PageShell><MachineryLoanForm /></PageShell>} />
        <Route path="/personal-loan" element={<PageShell><PersonalLoan /></PageShell>} />
        <Route path="/personal-loan/apply" element={<PageShell><PersonalLoanForm /></PageShell>} />
        <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/business-loan/apply" element={<BusinessLoanForm />} />
        <Route path="/education-loan" element={<PageShell><EducationLoan /></PageShell>} />
        <Route path="/education-loan/apply" element={<PageShell><EducationLoanForm /></PageShell>} />
        <Route path="/car-loan" element={<PageShell><CarLoan /></PageShell>} />
        <Route path="/car-loan/apply" element={<PageShell><CarLoanForm /></PageShell>} />
        <Route path="/industry-finance" element={<PageShell><IndustryFinance /></PageShell>} />
        <Route path="/industry-finance/apply" element={<PageShell><IndustryFinanceForm /></PageShell>} />
        <Route path="/hospital-loan" element={<PageShell><HospitalLoan /></PageShell>} />
        <Route path="/hospital-loan/apply" element={<PageShell><HospitalLoanForm /></PageShell>} />
        <Route path="/school-finance" element={<PageShell><SchoolFinance /></PageShell>} />
        <Route path="/school-finance/apply" element={<PageShell><SchoolFinanceForm /></PageShell>} />
        <Route path="/vehicle-finance" element={<PageShell><VehicleFinance /></PageShell>} />
        <Route path="/vehicle-finance/apply" element={<PageShell><VehicleFinanceForm /></PageShell>} />
        <Route path="/construction-loan" element={<PageShell><ConstructionLoan /></PageShell>} />
        <Route path="/construction-loan/apply" element={<PageShell><ConstructionLoanForm /></PageShell>} />
        <Route path="/cc-od-finance" element={<PageShell><CCODFinance /></PageShell>} />
        <Route path="/cc-od-finance/apply" element={<PageShell><CCODFinanceForm /></PageShell>} />
        <Route path="/emi-calculator" element={<EmiPage />} />
        <Route path="/dashboard" element={<PageShell><UserDashboard /></PageShell>} />
        <Route path="/loan-status-tracking" element={<LoanStatusTracking />} />
        <Route path="/about" element={<PageShell><FloatingHomeButton /><AboutUs /></PageShell>} />
        <Route path="/contact" element={<PageShell><FloatingHomeButton /><ContactUs /></PageShell>} />
        <Route path="/admin/leads" element={<PageShell><LeadsManagement /></PageShell>} />
        <Route path="/admin/leads/details" element={<PageShell><LeadDetails /></PageShell>} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/site-map" element={<SiteMap />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppRoutes />
    </NavigationProvider>
  );
}
