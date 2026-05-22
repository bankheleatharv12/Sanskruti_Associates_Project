import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  BadgeCheck,
  Banknote,
  Calculator,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileCheck,
  IndianRupee,
  Lock,
  Percent,
  ShieldCheck,
  TrendingDown,
} from 'lucide-react';
const lapVideo = '/Your_Role__You_are_a_202605180150.mp4';

const highlights = [
  { label: 'Interest Rate', value: 'Starting 9% p.a.', icon: Percent },
  { label: 'Max Amount', value: 'Up to ₹10 Crore', icon: IndianRupee },
  { label: 'Tenure', value: 'Up to 20 Years', icon: CalendarClock },
  { label: 'LTV Ratio', value: 'Up to 70% of Property', icon: BadgeCheck },
];

const features = [
  {
    title: 'Interest Rate',
    text: '9% – 14% p.a. depending on CIBIL score, property type, and lender',
    icon: Percent,
  },
  {
    title: 'Loan Amount',
    text: '₹10 Lakh to ₹10 Crore+ based on property value and income',
    icon: IndianRupee,
  },
  {
    title: 'LTV Ratio',
    text: '50–70% of property market value financed by lender',
    icon: BadgeCheck,
  },
  {
    title: 'Tenure',
    text: 'Up to 15–20 years — lower EMI than personal loans',
    icon: CalendarClock,
  },
  {
    title: 'Processing Fee',
    text: '0.5%–1% of loan amount. No hidden charges. GST disclosed upfront.',
    icon: FileCheck,
  },
  {
    title: 'CIBIL Score',
    text: '750+ CIBIL gets lowest rates. Lower scores may get 10–14%+',
    icon: Banknote,
  },
];

const comparisons = [
  {
    title: 'Lower Interest Rate',
    text: 'LAP: 9–14% vs Personal Loan: 14–21%',
    badge: 'Save up to 12% interest',
    badgeClassName: 'bg-green-50 text-[#16A34A]',
    icon: TrendingDown,
  },
  {
    title: 'Higher Loan Amount',
    text: 'Borrow much more because property is secured collateral',
    badge: 'Up to ₹10 Crore',
    badgeClassName: 'bg-blue-50 text-[#2563EB]',
    icon: IndianRupee,
  },
  {
    title: 'Longer Tenure = Lower EMI',
    text: '20 year tenure means lower monthly EMI than unsecured loans',
    badge: 'Lower EMI burden',
    badgeClassName: 'bg-green-50 text-[#16A34A]',
    icon: CalendarClock,
  },
];

const eligibility = [
  { label: 'CIBIL Score', value: '750+ for best rates' },
  { label: 'Property Type', value: 'Residential or Commercial' },
  { label: 'Income', value: 'Salaried or Self Employed' },
  { label: 'Property Age', value: 'Clear title required' },
  { label: 'Location', value: 'Metro, Tier 2, Tier 3 cities' },
];

const propertyDocuments = [
  'NA Order Copy *',
  'Copy of Sale Deed *',
  '7/12 Extract *',
  'Index II Extract *',
  'Latest Tax Paid Receipt *',
  'Mutation Entry / Ferfar *',
  'Sanctioned Plan for Buildings *',
  'Layout Plan *',
  'Chain Document *',
  'Copy of Mortgage Deed (if any) - Optional',
  'Copy of Release Deed (if any) - Optional',
];

const kycIncomeDocuments = [
  'PAN Card *',
  'Aadhaar Card *',
  'Address Proof *',
  'Bank Statement 6 Months *',
  'Salary Slip 3 Months (if salaried) *',
  'ITR 2 Years (if self employed) *',
  'Photo *',
];

const previousLoanDocuments = [
  'Sanction Letter — All Loans',
  'Account Statement till date — All Loans',
  'Contact Details of Co-applicant',
  'Email ID of Trust & Co-applicants',
];

const usps = [
  'Compare rates from 20+ banks & NBFCs',
  'Check eligibility without CIBIL damage',
  'Faster approval, less paperwork',
  'Dedicated property loan expert',
  'केवळ 1–2 दिवसांत ऑनलाइन ऑफर तपासा',
];

function LAPEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('5000000');
  const [interestRate, setInterestRate] = useState('9');
  const [tenure, setTenure] = useState('180');

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
                Calculate your monthly installment and plan your finances better
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
                    <svg viewBox="0 0 120 120" className="-rotate-90 drop-shadow-xl">
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

function DocumentSection({
  title,
  documents,
  headerClassName,
}: {
  title: string;
  documents: string[];
  headerClassName: string;
}) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/70 shadow-lg">
      <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${headerClassName} mb-6`} />
      <h3 className="text-xl font-semibold text-[#1F2937] mb-5">{title}</h3>
      <ul className="space-y-3">
        {documents.map((documentName, index) => (
          <motion.li
            key={documentName}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 text-gray-700"
          >
            <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
            <span className="text-sm">{documentName}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function LAP() {
  const navigate = useNavigate();

  const goToApplication = () => {
    navigate('/lap/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('lap-eligibility')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden">

      {/* ── Hero Section ── */}
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
            className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
            src={lapVideo}
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
            <span className="text-white text-sm font-medium">500+ Properties Financed</span>
          </motion.div>

          {/* Hero Content */}
          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Marathi Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-6 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-blue-50 shadow-lg backdrop-blur-md inline-block"
            >
              घर / कचेरीची प्रॉपर्टी लावून मोठी रक्कम उधार घ्या
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight"
            >
              Loan Against Property
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Ghar ya office ki property lagakar badi rashi udhar ghya — kam byaj dar par
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

        {/* ── Page Body ── */}
        <div className="relative z-10 bg-gradient-to-br from-[#EFF6FF] via-blue-50 to-white">

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                    <h3 className="text-2xl text-[#1F2937] font-bold mb-1">{item.value}</h3>
                    <p className="text-sm text-gray-600">{item.sub}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#2563EB] to-[#1e3a8a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              What is Loan Against Property?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <p className="text-white/90">
                  Loan Against Property lets you borrow money by keeping your residential or
                  commercial property as collateral. You remain the owner — only the title is
                  pledged to the lender.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <p className="text-white/90">
                  You can use this loan for ANY legal purpose: business expansion, medical
                  emergency, education, debt consolidation, home renovation, and more.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-[#2563EB]"
                  >
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Why LAP vs Other Loans
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {comparisons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-[#2563EB]"
                  >
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.text}</p>
                    <span className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${item.badgeClassName}`}>
                      {item.badge}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="lap-eligibility" className="py-16 lg:py-20 bg-gradient-to-r from-[#2563EB] to-[#1e3a8a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Eligibility</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {eligibility.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/95 text-sm font-medium mb-1">{item.label}</p>
                    <p className="text-white/80 text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <p className="text-white/80 text-sm">
                * Eligibility depends on lender profile, CIBIL score, property type, and location.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Documents Required
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <DocumentSection
                title="Property Documents"
                documents={propertyDocuments}
                headerClassName="bg-gradient-to-r from-orange-500 to-amber-500"
              />
              <DocumentSection
                title="KYC + Income Documents"
                documents={kycIncomeDocuments}
                headerClassName="bg-gradient-to-r from-[#2563EB] to-[#1E40AF]"
              />
              <DocumentSection
                title="Previous Loans (if any)"
                documents={previousLoanDocuments}
                headerClassName="bg-gradient-to-r from-[#16A34A] to-[#22C55E]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg"
            >
              <h4 className="font-semibold text-orange-900 mb-3">Risk Notice</h4>
              <p className="text-orange-800 text-sm">
                ⚠️ If repayment fails, lender may sell the property to recover the loan amount.
              </p>
            </motion.div>
          </div>
        </section>

        <LAPEmiCalculator />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Why Choose Us for LAP?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usps.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1F2937] font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#0f172a] to-[#2563EB] rounded-2xl p-10 lg:p-16 text-center text-white relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 w-12 h-12 border-2 border-[#16A34A] rounded-full opacity-30"
              />

              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Unlock Your Property's Value Today
              </h2>
              <p className="text-lg text-white/85 mb-10">
                Simple online process. Fast approval. Flexible repayment.
              </p>

              <button
                onClick={goToApplication}
                className="px-10 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors shadow-lg font-semibold mb-8"
              >
                Apply for LAP
              </button>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[
                  { icon: '🔒', label: '100% Secure' },
                  { icon: '🏛️', label: 'RBI Guidelines' },
                  { icon: '⚡', label: '72hr Approval' },
                  { icon: '💰', label: 'Best Rates' },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2">
                    <span className="text-xl">{badge.icon}</span>
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        </div>
    </div>
  );
}
