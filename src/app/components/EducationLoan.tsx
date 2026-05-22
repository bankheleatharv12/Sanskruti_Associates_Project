import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Calculator,
  CheckCircle2,
  TrendingUp,
  IndianRupee,
  Clock,
  Zap,
  MapPin,
  Globe,
  Check,
  ChevronDown,
} from 'lucide-react';
import { motion } from 'motion/react';
import eduVideo from '@/assets/videos/education-loan-hero.mp4';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Document {
  name: string;
  required: boolean;
}

interface DocumentTab {
  name: string;
  color: 'blue' | 'green' | 'orange';
  documents: Document[];
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const highlightsData = [
  {
    icon: TrendingUp,
    label: 'Interest Rate',
    value: 'From 8.4% p.a.',
    sub: 'Varies by course, institute & profile',
  },
  {
    icon: IndianRupee,
    label: 'Loan Amount',
    value: 'Based on Course',
    sub: 'Tuition + hostel + books + laptop',
  },
  {
    icon: Clock,
    label: 'Moratorium',
    value: 'Course + 6–12 Months',
    sub: 'No EMI during study period',
  },
  {
    icon: Zap,
    label: 'Repayment',
    value: 'Up to 15 Years',
    sub: 'Easy EMI after moratorium',
  },
];

const eligibleCourses = [
  'Engineering',
  'Medical',
  'MBA',
  'Law',
  'CA / CMA',
  'Architecture',
  'Agriculture',
  'Aviation',
  'Hotel Management',
  'Diploma Courses',
  'Distance Learning',
  'Abroad Studies',
  'PhD / Research',
];

const loanFeatures = [
  {
    title: 'What is Covered',
    desc: 'Tuition, hostel, books, laptop, travel, exam fees',
  },
  {
    title: 'Interest Rate',
    desc: 'From 8.4% p.a. *Depends on course & profile',
  },
  {
    title: 'Moratorium Period',
    desc: 'Course duration + 6–12 months. No EMI during studies.',
  },
  {
    title: 'Repayment Tenure',
    desc: 'Up to 15 years after moratorium',
  },
  {
    title: 'Co-applicant',
    desc: 'Parent or guardian co-applicant required in most cases',
  },
  {
    title: 'Collateral',
    desc: 'Secured and unsecured options based on loan amount',
  },
];

const whoCanApply = [
  'Indian citizen student',
  'Confirmed admission in recognized institute',
  'Parent or guardian as co-applicant',
  'Good academic record',
  'Stable income of co-applicant',
  'Available for India and abroad studies',
  'Collateral may be needed for large amounts',
  'Course approved by lender',
];

const documentTabs: DocumentTab[] = [
  {
    name: 'Student Documents',
    color: 'blue',
    documents: [
      { name: 'Passport-size Photo', required: true },
      { name: 'Aadhaar Card', required: true },
      { name: 'Address Proof', required: true },
      { name: 'Date of Birth Proof', required: true },
      { name: 'Academic Marksheets (10th, 12th, Graduation)', required: true },
      { name: 'Entrance Exam Scorecard (JEE / NEET / CAT / GRE / GMAT)', required: false },
      { name: 'Admission Offer Letter / Confirmation Letter', required: true },
      { name: 'Fee Structure from Institute', required: true },
      { name: 'Passport (for abroad studies)', required: false },
      { name: 'Visa (if already obtained)', required: false },
    ],
  },
  {
    name: 'Co-applicant Documents',
    color: 'green',
    documents: [
      { name: 'Passport-size Photo', required: true },
      { name: 'PAN Card', required: true },
      { name: 'Aadhaar Card', required: true },
      { name: 'Address Proof', required: true },
      { name: 'Salary Slips / ITR Documents', required: true },
      { name: 'Form 16 / Business Proof', required: true },
      { name: 'Bank Statements (6–12 Months)', required: true },
      { name: 'Employment / Office ID Proof', required: true },
    ],
  },
  {
    name: 'Collateral Documents',
    color: 'orange',
    documents: [
      { name: 'Property Papers / Title Deed', required: false },
      { name: 'Fixed Deposit Proof', required: false },
      { name: 'Existing Home Loan Documents', required: false },
      { name: 'Property Valuation Report', required: false },
      { name: 'Insurance of Property', required: false },
    ],
  },
];

const trustPoints = [
  'Compare multiple lenders in one place',
  'No EMI during study period',
  'Covers India and abroad studies',
  'Fast document review process',
  'Transparent charges — no hidden fees',
  'Dedicated education loan expert',
];

// ─── EMI Calculator ───────────────────────────────────────────────────────────

function EducationLoanEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('1000000');
  const [interestRate, setInterestRate] = useState('8.4');
  const [tenure, setTenure] = useState('120');

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
            {/* Left — Inputs */}
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
                    onChange={(e) => setLoanAmount(e.target.value)}
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
                    onChange={(e) => setInterestRate(e.target.value)}
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
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Right — Results */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
              <h3 className="text-xl font-semibold mb-8">Your EMI Breakdown</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center">
                  <div className="relative h-40 w-40">
                    <svg viewBox="0 0 120 120" className="-rotate-90">
                      <circle
                        cx="60" cy="60" r="44" fill="none"
                        stroke="rgba(255,255,255,0.18)" strokeWidth="18"
                      />
                      <circle
                        cx="60" cy="60" r="44" fill="none"
                        stroke="#16A34A" strokeWidth="18"
                        strokeDasharray={`${276.46 - (interestShare / 100) * 276.46} 276.46`}
                        strokeLinecap="round"
                      />
                      <circle
                        cx="60" cy="60" r="44" fill="none"
                        stroke="#FBBF24" strokeWidth="18"
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
                  <div className="text-sm text-blue-200 mb-1">Monthly EMI (after moratorium)</div>
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
              <p className="text-xs text-blue-100">
                * EMI starts after course + moratorium period
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Document Tab Content ─────────────────────────────────────────────────────

// FIX: Added proper TypeScript interface for props
interface DocumentTabContentProps {
  tab: DocumentTab;
}

function DocumentTabContent({ tab }: DocumentTabContentProps) {
  const colorMap: Record<'blue' | 'green' | 'orange', string> = {
    blue: 'from-[#2563EB] to-[#1E40AF]',
    green: 'from-[#16A34A] to-[#15803D]',
    orange: 'from-[#F97316] to-[#EA580C]',
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/70 shadow-lg">
      <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${colorMap[tab.color]} mb-6`} />
      <h3 className="text-xl font-semibold text-[#1F2937] mb-5">{tab.name}</h3>
      <ul className="space-y-3">
        {tab.documents.map((doc) => (
          <li key={doc.name} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
            <span className={doc.required ? 'text-[#1F2937] font-medium' : 'text-gray-600'}>
              {doc.name}
              {doc.required && <span className="text-red-600 ml-1">*</span>}
              {!doc.required && (
                <span className="text-gray-500 text-sm ml-1">(Optional)</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function EducationLoan() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const goToApplication = () => {
    navigate('/education-loan/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('education-loan-who-can-apply')?.scrollIntoView({
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
          src={eduVideo}
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
          <span className="text-white text-sm font-medium">India & Abroad Studies Covered</span>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight"
          >
            Education Loan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Pay tuition fees, hostel charges, books, laptop and other education
            expenses with easy repayment options
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

        {/* Loan Highlights */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlightsData.map((item, index) => {
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

        {/* What Does Education Loan Cover */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#2563EB] to-[#1e3a8a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              What Does Education Loan Cover?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-xl font-semibold mb-4">Covers</h3>
                <ul className="space-y-3 text-white/90">
                  {[
                    'Tuition fees',
                    'Hostel and accommodation charges',
                    'Books and stationery',
                    'Laptop and equipment',
                    'Exam and library fees',
                    'Travel expenses for abroad studies',
                    'Other course-related expenses',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-xl font-semibold mb-4">Available For</h3>
                <ul className="space-y-3 text-white/90">
                  {[
                    'Studies in India and abroad',
                    'Undergraduate courses',
                    'Postgraduate courses',
                    'Diploma and professional courses',
                    'Recognized institutes & universities',
                    'No EMI during study period',
                    'Repayment starts after course completion',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Eligible Courses */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Courses & Institutes We Finance
            </h2>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {eligibleCourses.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-full px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] font-semibold shadow-md hover:bg-[#2563EB] hover:text-white transition-all cursor-default"
                >
                  {course}
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm">
              Course must be from a recognized institute / university approved by lender
            </p>
          </div>
        </section>

        {/* Study Destination */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Study in India or Abroad
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: MapPin,
                  title: 'Study in India',
                  color: 'from-[#2563EB] to-[#1E40AF]',
                  border: 'border-[#2563EB]',
                  desc: 'All recognized Indian universities, IIT, IIM, NIT, private colleges and professional institutes',
                },
                {
                  icon: Globe,
                  title: 'Study Abroad',
                  color: 'from-[#16A34A] to-[#15803D]',
                  border: 'border-[#16A34A]',
                  desc: 'USA, UK, Canada, Australia, Germany, Singapore and more. Country-specific lender options available.',
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-2xl p-8 shadow-lg border-t-4 ${card.border}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1F2937]">{card.title}</h3>
                        <span className="inline-block mt-2 px-3 py-1 bg-[#16A34A] text-white text-xs rounded-full font-semibold">
                          Available
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">{card.desc}</p>
                  </motion.div>
                );
              })}
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
              {loanFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-[#2563EB]"
                >
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Can Apply */}
        <section
          id="education-loan-who-can-apply"
          className="py-16 lg:py-20 bg-gradient-to-r from-[#2563EB] to-[#1e3a8a] text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Who Can Apply?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {whoCanApply.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
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
                * Final rate depends on course, institute, co-applicant income, and whether
                loan is secured or unsecured.
              </p>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Documents Required
            </h2>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {documentTabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === index
                      ? 'bg-[#2563EB] text-white shadow-lg'
                      : 'bg-white/80 text-[#1F2937] border border-gray-200 hover:bg-white'
                    }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DocumentTabContent tab={documentTabs[activeTab]} />
            </motion.div>

            {/* Warning Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg"
            >
              <h4 className="font-semibold text-orange-900 mb-3">Important Notes</h4>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li>⚠️ Co-applicant required in most cases</li>
                <li>⚠️ Collateral needed for loans above ₹7.5L</li>
                <li>⚠️ Course must be from recognized institute</li>
                <li>⚠️ Final rate depends on profile & lender</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* EMI Calculator */}
        <EducationLoanEmiCalculator />

        {/* Trust Points */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">
              Why Choose Us for Education Loan?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow"
                >
                  <Check className="w-6 h-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1F2937] font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Now CTA */}
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
                Invest in Your Future Today
              </h2>
              <p className="text-lg text-white/85 mb-10">
                Simple online process. Fast review. Flexible repayment.
              </p>

              <button
                onClick={goToApplication}
                className="px-10 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors shadow-lg font-semibold mb-8"
              >
                Apply for Education Loan
              </button>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[
                  { icon: '🎓', label: 'India & Abroad' },
                  { icon: '🔒', label: '100% Secure' },
                  { icon: '⚡', label: 'Fast Review' },
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