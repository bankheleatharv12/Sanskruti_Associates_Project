import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calculator,
  CheckCircle2,
  Check,
  ChevronDown,
  Clock,
  IndianRupee,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';

const heroVideo = '/Business_Loan.mp4';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Interest Rate',
    value: 'Starting 11% p.a.',
    sub: 'Varies by lender & CIBIL score',
  },
  {
    icon: IndianRupee,
    title: 'Max Amount',
    value: 'Up to ₹5 Crore',
    sub: 'Based on turnover & profile',
  },
  {
    icon: Clock,
    title: 'Tenure',
    value: 'Up to 7 Years',
    sub: 'Flexible EMI options',
  },
  {
    icon: Zap,
    title: 'Approval',
    value: '24-72 Hours',
    sub: 'Quick processing & disbursal',
  },
];

const eligibility = [
  'Business Age: Minimum 2-3 years old',
  'Annual Turnover: As per lender profile',
  'Credit Score: Preferred 650+ (700+ for best rates)',
  'Applicant Age: 21 to 65 years',
  'GST: Active GST registration required',
  'Collateral: Secured & unsecured options',
  'Employment: Self Employed / Business Owner',
];

const features = [
  { title: 'Loan Amount', value: '₹50,000 to ₹5 Crore' },
  { title: 'Interest Rate', value: 'Starting 11% p.a.' },
  { title: 'Processing Fee', value: '0.5%-2% of loan amount' },
  { title: 'Collateral', value: 'Secured & Unsecured options' },
  { title: 'Repayment', value: 'Monthly EMI - flexible tenure' },
  { title: 'Disbursal Time', value: '24-72 hours after approval' },
];

const uses = [
  'Working Capital',
  'Business Expansion',
  'Machinery Purchase',
  'Inventory',
  'Marketing',
  'Office Renovation',
  'Debt Consolidation',
  'Cash Flow',
];

const documents = [
  'PAN Card *',
  'Aadhaar Card *',
  'Address Proof *',
  '3 Year ITR with Financial Statements *',
  'Bank Statement 6-12 Months All Accounts *',
  'GST Registration Certificate *',
  'GST Return Last 1 Year - 3B GSTR *',
  'Business Proof - 3 Years Old *',
  'Ownership Proof / Rent Agreement *',
  'Photo *',
  'Nominee PAN Card *',
  'Nominee Aadhaar Card *',
  'Nominee Photo *',
  'Udyam / Shop Act / Trade License / Incorporation Certificate *',
  'Co-applicant Documents (if applicable) - Optional',
];

function BusinessLoanEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('2500000');
  const [interestRate, setInterestRate] = useState('11');
  const [tenure, setTenure] = useState('60');

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 12 / 100;
    const months = parseFloat(tenure);

    if (principal && monthlyRate && months) {
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      return Math.round(emi);
    }

    return 0;
  };

  const emi = calculateEMI();
  const totalAmount = emi * parseFloat(tenure);
  const principal = parseFloat(loanAmount) || 0;
  const totalInterest = totalAmount - principal;
  const interestShare =
    totalAmount > 0 ? Math.max(0, Math.min(100, (totalInterest / totalAmount) * 100)) : 0;

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/70">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl text-[#1F2937] font-bold">EMI Calculator</h2>
              </div>

              <p className="text-gray-600 mb-8">
                Calculate your monthly installment and plan your business finances better
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[#1F2937] mb-2 font-medium">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(event) => setLoanAmount(event.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1F2937] mb-2 font-medium">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(event) => setInterestRate(event.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1F2937] mb-2 font-medium">
                    Tenure (Months)
                  </label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(event) => setTenure(event.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
              <h3 className="text-xl font-semibold mb-8">Your EMI Breakdown</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center">
                  <div className="relative h-40 w-40">
                    <svg viewBox="0 0 120 120" className="-rotate-90">
                      <circle
                        cx="60"
                        cy="60"
                        r="44"
                        fill="none"
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="18"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="44"
                        fill="none"
                        stroke="#16A34A"
                        strokeWidth="18"
                        strokeDasharray={`${276.46 - (interestShare / 100) * 276.46} 276.46`}
                        strokeLinecap="round"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="44"
                        fill="none"
                        stroke="#FBBF24"
                        strokeWidth="18"
                        strokeDasharray={`${(interestShare / 100) * 276.46} 276.46`}
                        strokeDashoffset={`-${276.46 - (interestShare / 100) * 276.46}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xs text-blue-100">Total</span>
                      <span className="text-lg font-bold">
                        ₹{Math.round(totalAmount || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-blue-200 mb-1">Monthly EMI</div>
                  <div className="text-3xl lg:text-4xl font-bold">
                    ₹{emi.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Principal Amount</div>
                    <div className="text-lg font-semibold">
                      ₹{principal.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Total Interest</div>
                    <div className="text-lg font-semibold">
                      ₹{Math.round(totalInterest || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Total Amount Payable</div>
                  <div className="text-xl font-bold">
                    ₹{Math.round(totalAmount || 0).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BusinessLoan() {
  const navigate = useNavigate();
  const goToApplication = () => {
    navigate('/business-loan/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('business-loan-eligibility')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10">
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1e3a8a] to-[#0F172A]"
            aria-hidden="true"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-125 sm:scale-110"
            src={heroVideo}
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          />

          {/* Dark Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'rgba(15, 23, 42, 0.65)' }}
          />

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-10 right-10 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20"
          >
            <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">Trusted by 500+ Businesses</span>
          </motion.div>

          {/* Hero Content */}
          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight"
            >
              Business Loan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Apka business badhao - fast funding with minimum documents. Expand, grow, and achieve your goals with flexible loans up to ₹5 Crore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button
                onClick={goToApplication}
                className="px-10 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors shadow-lg font-semibold"
              >
                Apply Now
              </button>
              <button
                onClick={goToEligibility}
                className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors font-semibold"
              >
                Check Eligibility
              </button>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <ChevronDown className="w-6 h-6 text-white/70" />
            </motion.div>
          </div>
        </section>

        <div className="relative z-10 bg-gradient-to-br from-[#EFF6FF] via-blue-50 to-white">

        {/* Loan Highlights */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{item.title}</p>
                    <h3 className="text-2xl text-[#1F2937] font-bold mb-1">{item.value}</h3>
                    <p className="text-sm text-gray-600">{item.sub}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who Can Apply */}
        <section
          id="business-loan-eligibility"
          className="py-16 lg:py-20 bg-gradient-to-r from-[#2563EB] to-[#1e3a8a] text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Who Can Apply?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              {eligibility.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <span className="text-white/95 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <p className="text-white/80 text-sm">
                * Eligibility depends on lender profile, CIBIL score, business vintage, and annual turnover.
              </p>
            </div>
          </div>
        </section>

        {/* Loan Features */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Key Loan Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-[#2563EB]"
                >
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Business Loan For */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Use Business Loan For
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {uses.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-full px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] font-semibold shadow-md hover:bg-[#2563EB] hover:text-white transition-all cursor-default"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Documents Required
            </h2>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-white/70 shadow-2xl">
              <div className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] p-8 text-white">
                <h3 className="text-2xl font-semibold">Required Documents</h3>
              </div>

              <div className="p-8 lg:p-10">
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {documents.map((documentName, index) => (
                    <motion.div
                      key={documentName}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{documentName}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="border-l-4 border-[#2563EB] bg-blue-50 p-6 text-[#1F2937] rounded-r-xl">
                  <h4 className="font-semibold mb-3">Eligibility Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Minimum Business Vintage: 2-3 Years</li>
                    <li>• Credit Score 650+ Preferred (700+ for best rates)</li>
                    <li>• Turnover as per lender profile</li>
                    <li>• Eligibility depends on lender & business income</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BusinessLoanEmiCalculator />

        {/* Final CTA */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-2xl p-8 lg:p-12 text-center text-white shadow-2xl"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
              <p className="text-lg text-white/85 mb-10">
                Simple online process. Fast approval. Flexible repayment.
              </p>
              <button
                onClick={goToApplication}
                className="px-10 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors shadow-lg font-semibold mb-8"
              >
                Apply for Business Loan
              </button>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                  <span className="font-medium">100% Secure</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                  <span className="font-medium">RBI Guidelines</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-[#16A34A]" />
                  <span className="font-medium">72hr Approval</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#16A34A]" />
                  <span className="font-medium">Free Expert Advice</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}

export default BusinessLoan;
