import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  BadgeCheck,
  BookOpen,
  Calculator,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Clock,
  IndianRupee,
  Lock,
  Percent,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  { label: 'Interest Rate', value: 'From 6.85% p.a.', icon: Percent, sub: 'Depends on profile & lender' },
  { label: 'Loan Amount', value: 'As Per School Fee', icon: IndianRupee, sub: 'Based on family eligibility' },
  { label: 'Moratorium', value: 'Flexible', icon: Clock, sub: 'As per lender policy' },
  { label: 'Approval', value: 'Quick Process', icon: Zap, sub: 'Online application, fast review' },
];

const eligibility = [
  { label: 'Admission', value: 'Confirmed admission in recognized school required' },
  { label: 'Co-applicant Income', value: 'Stable income of parent or guardian required' },
  { label: 'Credit Score', value: 'Good credit score preferred for better interest rates' },
  { label: 'School Type', value: 'Any recognized board — CBSE, ICSE, State, IB, IGCSE' },
  { label: 'Citizenship', value: 'Indian citizen applicant or co-applicant required' },
  { label: 'Collateral', value: 'May be needed for higher loan amounts' },
];

const schoolBoards = [
  'CBSE',
  'ICSE',
  'State Board',
  'IB (International Baccalaureate)',
  'IGCSE',
  'NIOS',
  'Matriculation',
  'Anglo-Indian',
  'Other Recognized Boards',
];

const coveredItems = [
  'Tuition Fees',
  'Admission Fees',
  'Annual Fees',
  'Books & Stationery',
  'Hostel Charges',
  'Transport Fees',
  'Laptop & Equipment',
  'Uniforms',
  'Exam Charges',
  'Library Fees',
  'Sports & Activity Fees',
];

const loanFeatures = [
  { title: 'Interest Rate', content: 'From 6.85% p.a.*\n*Final rate depends on profile' },
  { title: 'Loan Amount', content: 'Based on school fee structure\nand family income eligibility' },
  { title: 'Moratorium', content: 'EMI starts as per lender policy.\nFlexible repayment options.' },
  { title: 'Processing Fee', content: 'As per lender — disclosed upfront\nNo hidden charges' },
  { title: 'Co-applicant', content: 'Parent or guardian as primary\napplicant or co-applicant' },
  { title: 'Collateral', content: 'Unsecured for small amounts.\nCollateral for larger loans.' },
];

const trustPoints = [
  'Compare multiple lenders instantly',
  'Quick approval — no long wait',
  'Easy online document upload',
  'Transparent — no hidden charges',
  'Expert support throughout process',
  'Flexible EMI as per your budget',
];

function SchoolFinanceStyles() {
  return (
    <style>
      {`
        @keyframes schoolFinanceFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes schoolFinanceSlideUp {
          from { opacity: 0; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes schoolFinanceNumberPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.035); }
        }

        .school-finance-range::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #2563EB;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
        }

        .school-finance-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #2563EB;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
        }
      `}
    </style>
  );
}

function SchoolFinanceEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('200000');
  const [interestRate, setInterestRate] = useState('6.85');
  const [tenure, setTenure] = useState('24');

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
            <div className="p-8 lg:p-12 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl text-[#1F2937] font-bold">EMI Calculator</h2>
              </div>

              <p className="text-gray-600 mb-8">
                Calculate your monthly installment and plan your finances better
              </p>

              <div className="space-y-7">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937] font-medium">Loan Amount (Rs.)</label>
                    <span className="text-sm text-[#2563EB] font-medium">
                      Rs.{Number(loanAmount || 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(event) => setLoanAmount(event.target.value)}
                    className="school-finance-range w-full h-2 appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                      <label className="block text-sm text-[#1F2937] font-medium">
                      Interest Rate (% per annum)
                    </label>
                    <span className="text-sm text-[#2563EB] font-medium">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="15"
                    step="0.1"
                    value={interestRate}
                    onChange={(event) => setInterestRate(event.target.value)}
                    className="school-finance-range w-full h-2 appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937] font-medium">Tenure (Months)</label>
                    <span className="text-sm text-[#2563EB] font-medium">{tenure} months</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="60"
                    step="6"
                    value={tenure}
                    onChange={(event) => setTenure(event.target.value)}
                    className="school-finance-range w-full h-2 appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
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
                      <span
                        key={Math.round(totalAmount || 0)}
                        className="text-lg [animation:schoolFinanceNumberPulse_0.35s_ease-out]"
                      >
                        Rs.{Math.round(totalAmount || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-blue-200 mb-1">Monthly EMI</div>
                  <div
                    key={emi}
                    className="text-3xl lg:text-4xl font-bold [animation:schoolFinanceNumberPulse_0.35s_ease-out]"
                  >
                    Rs.{emi.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Principal Amount</div>
                    <div className="text-lg font-semibold">Rs.{principal.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Total Interest</div>
                    <div className="text-lg font-semibold">
                      Rs.{Math.round(totalInterest || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Total Amount Payable</div>
                  <div className="text-xl font-bold">
                    Rs.{Math.round(totalAmount || 0).toLocaleString('en-IN')}
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

export function SchoolFinance({ heroVideoSrc = '/Your_Role__You_are_a_202605182056.mp4' }) {
  const navigate = useNavigate();
  const [activeDocumentTab, setActiveDocumentTab] = useState('student-parent');

  const goToApplication = () => {
    navigate('/school-finance/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('school-finance-eligibility')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#EFF6FF]">
      <SchoolFinanceStyles />
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-white/90" />
      </div>

      <div className="relative z-10 bg-gradient-to-br from-[#EFF6FF] via-blue-50 to-white">
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white bg-[#0F172A]">
          <video
            className="absolute inset-0 h-full w-full object-cover scale-125 sm:scale-110"
            src={heroVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 z-10 bg-[#0F172A]/65" />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-10 right-10 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20"
          >
            <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">Recognized Schools Covered</span>
          </motion.div>

          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight"
              >
                School Finance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Pay school fees, admission fees, books, hostel, transport and other education expenses with easy repayment
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
                    {item.sub && <p className="text-sm text-gray-600">{item.sub}</p>}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#2563EB] to-[#1e3a8a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">What Does School Finance Cover?</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg shadow-green-900/20">
                  <BookOpen className="h-6 w-6" />
                </div>
                <p className="text-lg leading-relaxed text-white/90">
                  School Finance helps parents pay for their child's school expenses without financial stress. Cover tuition fees, admission fees, annual charges, books, stationery, hostel, transport, laptop, uniforms, and exam charges — all in one loan with easy EMIs.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg shadow-green-900/20">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="text-lg leading-relaxed text-white/90">
                  Available for recognized schools across India. Parent or guardian applies as primary applicant with co-applicant support. Quick online process with fast document review and flexible repayment options.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12">School Finance Covers</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {coveredItems.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-full px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] font-semibold shadow-md hover:bg-[#2563EB] hover:text-white transition-all cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">Loan Features</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-gray-600 whitespace-pre-line text-sm">{feature.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#2563EB] to-[#1e3a8a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Who Can Apply?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                'Parent or guardian of school student',
                'Student with confirmed school admission',
                'Recognized school — any board (CBSE / ICSE / State Board / IB / IGCSE)',
                'Stable income of parent/co-applicant',
                'Good credit score preferred',
                'Collateral may be needed for large amounts',
                'Indian citizen applicant',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <p className="text-white/95 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <p className="text-white/80 text-sm">
              * Final rate depends on co-applicant income, school type, and lender policy.
            </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12">All School Boards Covered</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {schoolBoards.map((board, index) => (
                <motion.span
                  key={board}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-full px-6 py-3 border-2 border-[#16A34A] text-[#16A34A] font-semibold shadow-md hover:bg-[#16A34A] hover:text-white transition-all cursor-default"
                >
                  {board}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">Documents Required</h2>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
                <button
                  onClick={() => setActiveDocumentTab('student-parent')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeDocumentTab === 'student-parent'
                      ? 'bg-[#2563EB] text-white shadow-lg'
                      : 'bg-white/80 text-[#1F2937] border border-gray-200 hover:bg-white'
                  }`}
                >
                  Student + Parent Documents
                </button>
                <button
                  onClick={() => setActiveDocumentTab('collateral')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeDocumentTab === 'collateral'
                      ? 'bg-[#2563EB] text-white shadow-lg'
                      : 'bg-white/80 text-[#1F2937] border border-gray-200 hover:bg-white'
                  }`}
                >
                  Collateral Documents
                </button>
            </div>

            <motion.div
              key={activeDocumentTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-white/70 bg-white/90 shadow-lg backdrop-blur-md p-6 lg:p-8"
            >
              {activeDocumentTab === 'student-parent' && (
                <div className="[animation:schoolFinanceFadeUp_0.6s_ease-out_both]">
                  <div className="mb-6">
                    <h3 className="text-xl text-[#1F2937] mb-4 border-l-4 border-[#2563EB] pl-4">Section A — Student KYC</h3>
                    <ul className="space-y-3">
                      {[
                        'Student Aadhaar Card *',
                        'Student Birth Certificate *',
                        'Passport-size Photo (Student) *',
                        'Previous Academic Marksheets * (Last 2 years report cards)',
                        'School Admission Letter / Fee Receipt *',
                        'School Fee Structure * (Current year full fee breakup)',
                      ].map((doc, index) => (
                        <li
                          key={doc}
                          className="flex items-start gap-3 text-gray-700 transition-all duration-300 ease-out [animation:schoolFinanceFadeUp_0.5s_ease-out_both]"
                          style={{ animationDelay: `${index * 60}ms` }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl text-[#1F2937] mb-4 border-l-4 border-[#16A34A] pl-4">Section B — Parent / Co-applicant</h3>
                    <ul className="space-y-3">
                      {[
                        'Parent / Guardian PAN Card *',
                        'Parent / Guardian Aadhaar Card *',
                        'Passport-size Photo (Parent) *',
                        'Address Proof *',
                      ].map((doc, index) => (
                        <li
                          key={doc}
                          className="flex items-start gap-3 text-gray-700 transition-all duration-300 ease-out [animation:schoolFinanceFadeUp_0.5s_ease-out_both]"
                          style={{ animationDelay: `${(index + 6) * 60}ms` }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-[#2563EB]">
                    <p className="text-sm text-[#1F2937] font-medium mb-2">If Salaried Parent:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Salary Slips — Last 3 Months *</li>
                      <li>• Form 16 / ITR — Last 2 Years *</li>
                      <li>• Bank Statements — Last 6 Months *</li>
                      <li>• Office / Employment ID Proof *</li>
                    </ul>
                  </div>

                  <div className="mt-4 p-4 bg-green-50 rounded-xl border-l-4 border-[#16A34A]">
                    <p className="text-sm text-[#1F2937] font-medium mb-2">If Self Employed Parent:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• ITR — Last 2–3 Years *</li>
                      <li>• Bank Statements — Last 12 Months *</li>
                      <li>• GST Registration (if applicable) *</li>
                      <li>• Business Proof *</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeDocumentTab === 'collateral' && (
                <div className="[animation:schoolFinanceFadeUp_0.6s_ease-out_both]">
                  <p className="text-sm text-gray-600 mb-4">Required only for higher loan amounts</p>
                  <h3 className="text-xl text-[#1F2937] mb-4 border-l-4 border-[#F59E0B] pl-4">Collateral Documents</h3>
                  <ul className="space-y-3">
                    {[
                      'Property Papers / Title Deed (Optional)',
                      'Fixed Deposit Proof (Optional)',
                      'Insurance of Property (Optional)',
                      'Property Valuation Report (Optional)',
                    ].map((doc, index) => (
                      <li
                        key={doc}
                        className="flex items-start gap-3 text-gray-700 transition-all duration-300 ease-out [animation:schoolFinanceFadeUp_0.5s_ease-out_both]"
                        style={{ animationDelay: `${index * 60}ms` }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-orange-50 rounded-xl border-l-4 border-[#F59E0B]">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>⚠️ Admission confirmation is mandatory</li>
                      <li>⚠️ School must be recognized board</li>
                      <li>⚠️ Co-applicant income is key factor</li>
                      <li>⚠️ Final rate depends on lender & profile</li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <section
          id="school-finance-eligibility"
          className="py-16 lg:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">Eligibility Criteria</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibility.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-[#16A34A]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#16A34A] text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                  <p className="text-[#1F2937] font-medium">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] font-bold mb-12 text-center">Why Choose Us?</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1F2937] font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SchoolFinanceEmiCalculator />

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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Give Your Child the Best Education</h2>
            <p className="text-lg text-white/85 mb-10">
              Simple online process. Fast review. Flexible EMIs.
            </p>
            <button
              onClick={goToApplication}
              className="px-10 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors shadow-lg font-semibold mb-8"
            >
              Apply for School Finance
            </button>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl">📚</span>
                <span>All Boards Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-[#16A34A]" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#16A34A]" />
                <span>Quick Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💰</span>
                <span>Best Rates</span>
              </div>
            </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
