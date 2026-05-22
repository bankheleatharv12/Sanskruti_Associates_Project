import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  Banknote,
  Calculator,
  CheckCircle2,
  Clock,
  Factory,
  IndianRupee,
  Lock,
  Percent,
  ShieldCheck,
  TrendingUp,
  Zap,
  ChevronDown,
} from 'lucide-react';
const machineryVideoPublic = '/Your_Role__You_are_a_202605180214.mp4';

const highlights = [
  {
    title: 'Interest Rate',
    value: 'From 16% p.a.',
    sub: 'Varies by lender and profile',
    icon: TrendingUp,
  },
  {
    title: 'Loan Amount',
    value: 'Up to ₹90 Lakhs',
    sub: 'Based on machinery value',
    icon: IndianRupee,
  },
  {
    title: 'Tenure',
    value: 'Flexible',
    sub: 'As per lender & machinery life',
    icon: Clock,
  },
  {
    title: 'Approval',
    value: 'Quick Process',
    sub: 'Subject to documents',
    icon: Zap,
  },
];

const features = [
  {
    title: 'Loan Amount',
    text: 'Up to ₹90 Lakhs or as per lender eligibility',
    icon: IndianRupee,
  },
  {
    title: 'Interest Rate',
    text: 'Starting ~16% p.a. Varies by lender & profile',
    icon: Percent,
  },
  {
    title: 'Processing Fee',
    text: 'As per lender policy Disclosed upfront',
    icon: Banknote,
  },
  {
    title: 'Collateral',
    text: 'Secured (machinery as asset) or unsecured options',
    icon: ShieldCheck,
  },
  {
    title: 'Repayment',
    text: 'Monthly EMI Top-up loan available',
    icon: Calculator,
  },
  {
    title: 'Prepayment',
    text: 'Prepayment/foreclosure charges as per lender terms',
    icon: Clock,
  },
];

const purposeChips = [
  'New Machinery Purchase',
  'Used Machinery Purchase',
  'Equipment Replacement',
  'Business Expansion',
  'Manufacturing Setup',
  'Transport Fleet',
  'Agricultural Equipment',
  'Medical Equipment',
  'Automation & Technology',
  'Construction Tools',
];

const eligibility = [
  { label: 'Business Vintage', value: 'Minimum 1–3 years in operation' },
  { label: 'Credit Score', value: '650+ preferred 700+ for better rates' },
  { label: 'Cash Flow', value: 'Stable profit history required' },
  { label: 'GST Filing', value: 'Active GST filing history' },
  { label: 'Turnover', value: 'As per lender requirement' },
  { label: 'Machinery Type', value: 'New or used business-use machinery' },
];

const businessDocuments = [
  'PAN Card — Applicant *',
  'Aadhaar Card *',
  'Address Proof *',
  'Business Registration Proof * (Shop Act / Udyam / Trade License / Incorporation Certificate / Partnership Deed)',
  'GST Registration Certificate *',
  'GST Returns (Last 1 Year) *',
  'Bank Statement 6–12 Months *',
  'ITR Last 1–3 Years *',
  'P&L Statement + Balance Sheet *',
  'Photo *',
];

const machineryDocuments = [
  'Machinery Quotation / Proforma Invoice from Supplier *',
  'Ownership Proof / Collateral Papers (if secured loan) - Optional',
  'Co-applicant PAN + Aadhaar - Optional',
  'Partnership Deed / MOA / AOA (as applicable) - Optional',
];

function MachineryLoanStyles() {
  return (
    <style>
      {`
        @keyframes machineryLoanFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes machineryLoanSlideUp {
          from { opacity: 0; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes machineryLoanNumberPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.035); }
        }

        .machinery-loan-range::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #2563EB;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
        }

        .machinery-loan-range::-moz-range-thumb {
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

function MachineryLoanEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('2000000');
  const [interestRate, setInterestRate] = useState('16');
  const [tenure, setTenure] = useState('48');

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
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-white/90 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl text-[#1F2937]">EMI Calculator</h2>
              </div>

              <p className="text-gray-600 mb-8">
                Calculate your monthly installment and plan your finances better
              </p>

              <div className="space-y-7">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937]">Loan Amount (Rs.)</label>
                    <span className="text-sm text-[#2563EB]">
                      Rs.{Number(loanAmount || 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="9000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(event) => setLoanAmount(event.target.value)}
                    className="machinery-loan-range w-full h-2 appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937]">
                      Interest Rate (% per annum)
                    </label>
                    <span className="text-sm text-[#2563EB]">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="28"
                    step="0.1"
                    value={interestRate}
                    onChange={(event) => setInterestRate(event.target.value)}
                    className="machinery-loan-range w-full h-2 appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937]">Tenure (Months)</label>
                    <span className="text-sm text-[#2563EB]">{tenure} months</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="72"
                    step="12"
                    value={tenure}
                    onChange={(event) => setTenure(event.target.value)}
                    className="machinery-loan-range w-full h-2 appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#2563EB] to-[#0F172A] text-white">
              <h3 className="text-xl mb-8">Your EMI Breakdown</h3>

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
                        className="text-lg [animation:machineryLoanNumberPulse_0.35s_ease-out]"
                      >
                        Rs.{Math.round(totalAmount || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 shadow-lg">
                  <div className="text-sm text-blue-100 mb-1">Monthly EMI</div>
                  <div
                    key={emi}
                    className="text-3xl lg:text-4xl [animation:machineryLoanNumberPulse_0.35s_ease-out]"
                  >
                    Rs.{emi.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                    <div className="text-xs text-blue-100 mb-1">Principal Amount</div>
                    <div className="text-lg">Rs.{principal.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                    <div className="text-xs text-blue-100 mb-1">Total Interest</div>
                    <div className="text-lg">
                      Rs.{Math.round(totalInterest || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                  <div className="text-xs text-blue-100 mb-1">Total Amount Payable</div>
                  <div className="text-xl">
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
    <div className="overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-xl shadow-blue-900/5 backdrop-blur-xl transition-all duration-300 ease-out [animation:machineryLoanFadeUp_0.6s_ease-out_both]">
      <div className={`px-6 py-5 text-white ${headerClassName}`}>
        <h3 className="text-xl">{title}</h3>
      </div>
      <ul className="space-y-3 p-6 lg:p-8">
        {documents.map((documentName, index) => (
          <li
            key={documentName}
            className="flex items-start gap-3 text-gray-700 transition-all duration-300 ease-out [animation:machineryLoanFadeUp_0.5s_ease-out_both]"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
            <span>{documentName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MachineryLoan() {
  const navigate = useNavigate();

  const goToApplication = () => {
    navigate('/machinery-loan/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('machinery-loan-eligibility')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#EFF6FF]">
      <MachineryLoanStyles />
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-white/90" />
      </div>

      <div className="relative z-10">
        <section className="relative h-screen flex items-center justify-center overflow-hidden text-white bg-[#0F172A]">
          {/* Floating Particles - Same as CCOD */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full blur-sm ${
                i % 3 === 0 ? 'bg-blue-400/20' : 
                i % 3 === 1 ? 'bg-blue-300/15' : 'bg-blue-300/10'
              }`}
              style={{
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 1.5,
              }}
            />
          ))}

          {/* Full-bleed video covering the right side of the hero */}
          <video
            className="absolute inset-0 h-full w-full object-cover scale-125 sm:scale-110"
            src={machineryVideoPublic}
            autoPlay
            muted
            loop
            playsInline
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />

          {/* Dark overlay on top of the video */}
          <div className="absolute inset-0 bg-[#0F172A]/55" />
          {/* Strong left-to-right gradient: solid dark on left (text area), fading to transparent on right (video visible) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent" />

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            {/* Badge Animation */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#16A34A]" />
                </span>
                <span className="text-sm font-semibold tracking-wide text-white">Fast Equipment Finance</span>
              </div>
            </motion.div>

            {/* Heading Animation - Word by Word */}
            <div className="mb-6">
              {["Machinery", "Loan"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.12,
                    duration: 0.65,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white inline-block mr-4"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Subtext Animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="text-lg md:text-xl font-light leading-relaxed tracking-wide max-w-3xl mx-auto text-white/80 mb-8"
            >
              Finance new or used machinery for business expansion, manufacturing, transport or automation
            </motion.p>

            {/* Stats Row - Stagger Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto"
            >
              {[
                { number: "16%", label: "Starting Rate" },
                { number: "₹90L", label: "Max Amount" },
                { number: "Flexible", label: "Tenure" },
                { number: "Quick", label: "Process" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black tracking-tight text-white mb-1">{stat.number}</div>
                  <div className="text-xs uppercase tracking-widest font-medium text-blue-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={goToApplication}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-4 bg-gradient-to-r from-[#16A34A] to-[#22C55E] hover:brightness-110 text-white rounded-xl text-sm font-bold tracking-wide shadow-xl shadow-green-900/30 transition-all duration-300"
              >
                Apply Now
              </motion.button>
              <motion.button
                onClick={goToEligibility}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-4 border-2 border-[#60A5FA] text-white hover:bg-white/10 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 backdrop-blur-sm"
              >
                Check Eligibility
              </motion.button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group border-t-4 border-[#2563EB] bg-white/90 backdrop-blur-xl rounded-3xl p-6 border-x border-b border-white/80 shadow-lg shadow-blue-900/5 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/15"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="text-xs uppercase tracking-widest font-medium opacity-70 mb-2">{item.title}</p>
                    <h3 className="text-2xl md:text-3xl font-black text-[#1F2937] mb-2">{item.value}</h3>
                    <p className="text-sm font-normal leading-relaxed text-gray-600">{item.sub}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2563EB] via-[#1E40AF] to-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-10">
              {["What", "is", "a", "Machinery", "Loan?"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="h-1 rounded-full mb-10"
              style={{
                background: "linear-gradient(90deg, #60A5FA, #3B82F6)",
              }}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0 * 0.15,
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md font-normal leading-relaxed"
              >
                Finance the purchase of new or used machinery, equipment, or tools for
                your business — without draining your working capital. The machinery itself
                can act as collateral.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 1 * 0.15,
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md font-normal leading-relaxed"
              >
                Use it for: Manufacturing equipment, Transport vehicles, Agricultural machinery,
                Medical equipment, Construction tools, Automation systems, or any business-use
                machinery.
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-10">
              {["Loan", "Features"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#1F2937] inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="h-1 rounded-full mb-10"
              style={{
                background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              }}
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 60, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      delay: (index % 3) * 0.15,
                      duration: 0.65,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.25 }
                    }}
                    className="relative rounded-3xl border border-white/80 bg-white/90 p-6 shadow-xl shadow-blue-900/5 backdrop-blur-xl group"
                  >
                    {/* Icon with animation */}
                    <div className="relative mb-5">
                      <motion.div
                        animate={{
                          scale: [1, 1.06, 1],
                          rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                          duration: 4 + index * 0.5,
                          repeat: Infinity,
                          delay: index * 0.4,
                          ease: "easeInOut",
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white shadow-lg shadow-blue-500/25 relative"
                      >
                        <Icon className="h-6 w-6" />
                        
                        {/* Pulsing ring */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          animate={{
                            boxShadow: [
                              `0 0 0 0px rgba(37, 99, 235, 0.3)`,
                              `0 0 0 8px rgba(37, 99, 235, 0)`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>
                    </div>
                    
                    <h3 className="mb-3 text-xl font-bold tracking-tight text-[#1F2937]">{feature.title}</h3>
                    <p className="text-sm leading-relaxed font-normal text-gray-600">{feature.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-8">
              {["Finance", "Machinery", "For"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#1F2937] inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="h-1 rounded-full mb-8"
              style={{
                background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              }}
            />

            <div className="flex flex-wrap gap-3">
              {purposeChips.map((chip, index) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="rounded-full border border-[#2563EB]/35 bg-white/90 px-5 py-3 text-[#2563EB] shadow-sm backdrop-blur-sm text-sm font-semibold tracking-wide"
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <section id="machinery-loan-eligibility" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-10">
              {["Eligibility", "Criteria"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#1F2937] inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="h-1 rounded-full mb-10"
              style={{
                background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              }}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {eligibility.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-xl shadow-blue-900/5 backdrop-blur-xl"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg shadow-green-900/20">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold tracking-wide uppercase text-[#2563EB] mb-2">{item.label}</p>
                  <p className="text-lg font-bold tracking-tight text-[#1F2937]">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 rounded-3xl border border-gray-300 bg-white/80 p-6 text-gray-700 shadow-lg backdrop-blur-xl"
            >
              * Final sanction depends on lender policy and document verification. Contact our
              expert for accurate eligibility check.
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-10">
              {["Documents", "Required"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#1F2937] inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="h-1 rounded-full mb-10"
              style={{
                background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              }}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 * 0.2, duration: 0.6 }}
                className="overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-xl shadow-blue-900/5 backdrop-blur-xl"
              >
                <div className="px-6 py-5 text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF]">
                  <h3 className="text-lg font-bold tracking-tight">KYC + Business Documents</h3>
                </div>
                <ul className="space-y-3 p-6 lg:p-8">
                  {businessDocuments.map((documentName, index) => (
                    <motion.li
                      key={documentName}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium leading-relaxed">{documentName}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 * 0.2, duration: 0.6 }}
                className="overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-xl shadow-blue-900/5 backdrop-blur-xl"
              >
                <div className="px-6 py-5 text-white bg-gradient-to-r from-orange-500 to-amber-500">
                  <h3 className="text-lg font-bold tracking-tight">Machinery + Collateral Documents</h3>
                </div>
                <ul className="space-y-3 p-6 lg:p-8">
                  {machineryDocuments.map((documentName, index) => (
                    <motion.li
                      key={documentName}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium leading-relaxed">{documentName}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 rounded-3xl border-l-4 border-orange-400 bg-orange-50 p-6 text-orange-900 shadow-lg"
            >
              <p>⚠️ Machinery quotation is mandatory</p>
              <p>⚠️ Final documents may vary by lender</p>
              <p>⚠️ Eligibility depends on business profile and lender policy</p>
            </motion.div>
          </div>
        </section>

        <MachineryLoanEmiCalculator />

        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2563EB] to-[#0F172A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* CTA Heading - Split into lines */}
            <div className="mb-3">
              {["Ready", "to", "Finance", "Your", "Machinery?"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-3xl md:text-5xl font-black tracking-tight leading-tight inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl font-semibold tracking-wide text-blue-100 mb-8"
            >
              Get best rates from 20+ lenders
            </motion.p>
            
            <motion.button
              onClick={goToApplication}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#16A34A] to-[#22C55E] hover:brightness-110 text-white rounded-2xl transition-all duration-300 shadow-2xl shadow-green-950/30 text-lg font-bold tracking-wide ring-4 ring-[#16A34A]/25 animate-pulse"
            >
              Apply for Machinery Loan
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { icon: Lock, text: "100% Secure" },
                { icon: ShieldCheck, text: "RBI Guidelines" },
                { icon: Zap, text: "Quick Approval" },
                { icon: Factory, text: "Equipment Experts" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md"
                >
                  <feature.icon className="h-5 w-5 text-[#16A34A]" />
                  <span className="text-base font-light leading-relaxed opacity-80">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
