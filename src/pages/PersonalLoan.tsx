import { useState, useRef, useEffect } from 'react'; // UPGRADED
import { useNavigate } from 'react-router';
import { motion, useInView } from "motion/react"; // UPGRADED
import {
  BadgeCheck,
  Calculator,
  CalendarClock,
  CheckCircle2,
  Clock,
  IndianRupee,
  Lock,
  Percent,
  ShieldCheck,
} from 'lucide-react';

const highlights = [
  { label: 'Interest Rate', value: 'Starting 10.5% p.a.', icon: Percent },
  { label: 'Max Amount', value: 'Up to Rs. 40 Lakhs', icon: IndianRupee },
  { label: 'Tenure', value: 'Up to 5 Years', icon: CalendarClock },
  { label: 'Approval', value: 'Within 48 Hours', icon: BadgeCheck },
];

const eligibility = [
  { label: 'Age', value: '21 to 58 years' },
  { label: 'Employment', value: 'Salaried (Govt or Private)' },
  { label: 'Minimum Salary', value: 'Rs. 25,000 per month' },
  { label: 'Credit Score', value: '700 and above' },
];

const salariedDocuments = [
  'PAN Card',
  'Aadhaar Card',
  'Address Proof',
  '3 Month Salary Slip',
  'Last 6 Month Bank Statement',
  '2 Years Form 16',
  'Office ID Card',
  'Photo',
  'Minimum Salary Required 25000 per month',
];

const selfEmployedDocuments = [
  'PAN Card',
  'Aadhaar Card',
  'Address Proof',
  '3 Year ITR with Financial',
  'Last 1 Year Bank Statement',
  'GST Registration (if applicable)',
  'Business Proof',
  'Photo',
];

// UPGRADED - AnimatedCounter component
function AnimatedCounter({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(
          decimals > 0
            ? parseFloat(start.toFixed(decimals))
            : Math.floor(start)
        );
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0
        ? count.toFixed(decimals)
        : count.toLocaleString()}
      {suffix}
    </span>
  );
}

function PersonalLoanStyles() {
  return (
    <style>
      {`
        @keyframes personalLoanFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes personalLoanSlideUp {
          from { opacity: 0; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes personalLoanNumberPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.035); }
        }

        .personal-loan-range::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #7c3aed;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 22px rgba(124, 58, 237, 0.35);
        }

        .personal-loan-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #7c3aed;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 22px rgba(124, 58, 237, 0.35);
        }
      `}
    </style>
  );
}

function PersonalLoanEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('500000');
  const [interestRate, setInterestRate] = useState('10.5');
  const [tenure, setTenure] = useState('36');

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
                <div className="w-14 h-14 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                {/* UPGRADED - Animated heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="text-2xl lg:text-3xl text-[#1F2937]"
                >
                  EMI Calculator
                </motion.h2>
              </div>
              {/* UPGRADED - Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="h-1 rounded-full mb-6"
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
                }}
              />

              <p className="text-gray-600 mb-8">
                Calculate your monthly installment and plan your finances better
              </p>

              <div className="space-y-7">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937]">Loan Amount (Rs.)</label>
                    <span className="text-sm text-[#7c3aed]">
                      Rs.{Number(loanAmount || 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="4000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(event) => setLoanAmount(event.target.value)}
                    className="personal-loan-range w-full h-2 appearance-none rounded-full bg-purple-100 accent-[#7c3aed]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937]">
                      Interest Rate (% per annum)
                    </label>
                    <span className="text-sm text-[#7c3aed]">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="24"
                    step="0.1"
                    value={interestRate}
                    onChange={(event) => setInterestRate(event.target.value)}
                    className="personal-loan-range w-full h-2 appearance-none rounded-full bg-purple-100 accent-[#7c3aed]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937]">Tenure (Months)</label>
                    <span className="text-sm text-[#7c3aed]">{tenure} months</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="60"
                    step="12"
                    value={tenure}
                    onChange={(event) => setTenure(event.target.value)}
                    className="personal-loan-range w-full h-2 appearance-none rounded-full bg-purple-100 accent-[#7c3aed]"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#7c3aed] to-[#0F172A] text-white">
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
                      <span className="text-xs text-purple-100">Total</span>
                      <span
                        key={Math.round(totalAmount || 0)}
                        className="text-lg [animation:personalLoanNumberPulse_0.35s_ease-out]"
                      >
                        Rs.{Math.round(totalAmount || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 shadow-lg">
                  <div className="text-sm text-purple-100 mb-1">Monthly EMI</div>
                  <div
                    key={emi}
                    className="text-3xl lg:text-4xl [animation:personalLoanNumberPulse_0.35s_ease-out]"
                  >
                    Rs.{emi.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                    <div className="text-xs text-purple-100 mb-1">Principal Amount</div>
                    <div className="text-lg">Rs.{principal.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                    <div className="text-xs text-purple-100 mb-1">Total Interest</div>
                    <div className="text-lg">
                      Rs.{Math.round(totalInterest || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                  <div className="text-xs text-purple-100 mb-1">Total Amount Payable</div>
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

interface DocumentColumnProps {
  title: string;
  documents: string[];
  active: boolean;
}

function DocumentColumn({ title, documents, active }: DocumentColumnProps) {
  return (
    <div
      className={`rounded-3xl p-6 lg:p-8 border border-white/80 bg-white/90 shadow-xl shadow-purple-900/5 backdrop-blur-xl transition-all duration-300 ease-out ${
        active ? 'block' : 'hidden lg:block'
      }`}
    >
      {/* UPGRADED - Animated heading */}
      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-xl text-[#1F2937] mb-5"
      >
        {title}
      </motion.h3>
      <ul className="space-y-3">
        {documents.map((documentName, index) => (
          <motion.li
            key={documentName}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            className="flex items-start gap-3 text-gray-700 transition-all duration-300 ease-out"
          >
            <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
            <span>{documentName}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

interface PersonalLoanProps {
  heroVideoSrc?: string;
}

export function PersonalLoan({ heroVideoSrc = '/Loan_approval_in_Indian_office_202605172325.mp4' }: PersonalLoanProps) {
  const navigate = useNavigate();
  const [activeDocumentTab, setActiveDocumentTab] = useState('salaried');

  const goToApplication = () => {
    navigate('/personal-loan/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('personal-loan-eligibility')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#EFF6FF]">
      <PersonalLoanStyles />
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-purple-50/80 to-white/90" />
      </div>

      <div className="relative z-10">
        <section className="relative h-screen flex items-center justify-center overflow-hidden text-white bg-[#0F172A]">
          {/* UPGRADED - Grid overlay */}
          <div
            className="absolute inset-0 z-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
              backgroundSize: "52px 52px",
            }}
          />
          
          {/* UPGRADED - Floating orbs */}
          <motion.div
            className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full opacity-20 z-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-[250px] h-[250px] rounded-full opacity-15 z-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          {/* UPGRADED - Floating particles */}
          {[
            { top: "8%", left: "5%", s: 4, d: 3, dl: 0 },
            { top: "18%", left: "88%", s: 5, d: 4, dl: 0.5 },
            { top: "50%", left: "3%", s: 3, d: 5, dl: 1.0 },
            { top: "65%", left: "93%", s: 4, d: 3, dl: 0.4 },
            { top: "82%", left: "7%", s: 5, d: 4, dl: 0.8 },
            { top: "90%", left: "85%", s: 3, d: 5, dl: 0.2 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full z-0 pointer-events-none"
              style={{
                top: p.top,
                left: p.left,
                width: p.s,
                height: p.s,
                background: "rgba(255,255,255,0.20)",
              }}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: p.d,
                repeat: Infinity,
                delay: p.dl,
                ease: "easeInOut",
              }}
            />
          ))}

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
          <div className="absolute inset-0 bg-[#0F172A]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent" />

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            {/* UPGRADED - Floating badge - Properly positioned */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex justify-center mb-6"
            >
              <div 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md"
                style={{
                  backgroundColor: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(124,58,237,0.40)'
                }}
              >
                <span className="text-xs font-semibold text-white/90">✦ Personal Loan · Starting from 9.5% p.a.</span>
              </div>
            </motion.div>

            {/* UPGRADED - Trusted badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex justify-center mb-8"
            >
              <div 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md"
                style={{
                  backgroundColor: 'rgba(22,163,74,0.15)',
                  border: '1px solid rgba(22,163,74,0.40)'
                }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">Trusted by 2000+ customers</span>
              </div>
            </motion.div>

            {/* UPGRADED - Premium heading with stagger */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl sm:text-7xl font-black text-white mb-6"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              Personal Loan
            </motion.h1>

            {/* UPGRADED - Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-1 rounded-full mx-auto mb-8"
              style={{
                background: "linear-gradient(90deg, rgba(124,58,237,0.9), rgba(168,139,250,0.6))",
              }}
            />

            {/* UPGRADED - Premium subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg max-w-3xl mx-auto text-center mb-8"
              style={{ color: 'rgba(255,255,255,0.80)' }}
            >
              Quick funds for your personal needs. No collateral required. Get instant approval with competitive rates starting from 9.5% per annum.
            </motion.p>

            {/* UPGRADED - Premium CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={goToApplication}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#16A34A] to-[#22C55E] hover:from-[#15803D] hover:to-[#16A34A] text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-green-900/30 transition-all duration-300"
              >
                Apply Now
              </motion.button>
              <motion.button
                onClick={goToEligibility}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-[#7c3aed] text-white hover:bg-[#7c3aed]/20 px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Check Eligibility
              </motion.button>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.55,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                    className="relative group border-t-4 border-[#7c3aed] bg-white/90 backdrop-blur-xl rounded-3xl p-6 border-x border-b border-white/80 shadow-lg shadow-purple-900/5 transition-all duration-300 ease-out"
                  >
                    {/* UPGRADED - Hover glow */}
                    <div
                      className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 30% 20%, rgba(124,58,237,0.08), transparent 60%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] text-white shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                      <h3 className="text-xl text-[#1F2937]">
                        {/* UPGRADED - AnimatedCounter for numbers */}
                        {item.label === 'Interest Rate' ? (
                          <>Starting <AnimatedCounter end={9.5} decimals={1} suffix="% p.a." /></>
                        ) : item.label === 'Max Amount' ? (
                          <>Up to Rs. <AnimatedCounter end={40} suffix=" Lakhs" /></>
                        ) : item.label === 'Tenure' ? (
                          <>Up to <AnimatedCounter end={5} suffix=" Years" /></>
                        ) : item.label === 'Approval' ? (
                          <>Within <AnimatedCounter end={48} suffix=" Hours" /></>
                        ) : (
                          item.value
                        )}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="personal-loan-eligibility"
          className="py-16 lg:py-24 bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#0F172A] text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              {/* UPGRADED - Animated heading */}
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="text-3xl lg:text-4xl mb-3"
              >
                Who Can Apply
              </motion.h2>
              {/* UPGRADED - Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="h-1 rounded-full mt-3 mb-6"
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
                }}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibility.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg shadow-green-900/20">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-purple-100 mb-2">{item.label}</p>
                  <p className="text-lg text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                {/* UPGRADED - Animated heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="text-3xl lg:text-4xl text-[#1F2937] mb-3"
                >
                  Documents Required
                </motion.h2>
                {/* UPGRADED - Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="h-1 rounded-full mt-3 mb-6"
                  style={{
                    background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
                  }}
                />
              </div>

              <div className="flex w-full max-w-md rounded-2xl bg-white/80 p-2 shadow-lg shadow-purple-900/5 backdrop-blur-xl lg:w-auto">
                <button
                  onClick={() => setActiveDocumentTab('salaried')}
                  className={`flex-1 px-5 py-3 text-sm transition-all duration-300 ${
                    activeDocumentTab === 'salaried'
                      ? 'border-b-2 border-[#7c3aed] text-[#7c3aed]'
                      : 'border-b-2 border-transparent text-gray-500 hover:text-[#7c3aed]'
                  }`}
                >
                  Salaried
                </button>
                <button
                  onClick={() => setActiveDocumentTab('self-employed')}
                  className={`flex-1 px-5 py-3 text-sm transition-all duration-300 ${
                    activeDocumentTab === 'self-employed'
                      ? 'border-b-2 border-[#7c3aed] text-[#7c3aed]'
                      : 'border-b-2 border-transparent text-gray-500 hover:text-[#7c3aed]'
                  }`}
                >
                  Self Employed
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <DocumentColumn
                title="Salaried (Govt/Private)"
                documents={salariedDocuments}
                active={activeDocumentTab === 'salaried'}
              />
              <DocumentColumn
                title="Self Employed"
                documents={selfEmployedDocuments}
                active={activeDocumentTab === 'self-employed'}
              />
            </div>
          </div>
        </section>

        <PersonalLoanEmiCalculator />

        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#7c3aed] to-[#0F172A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <button
              onClick={goToApplication}
              className="relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#16A34A] to-[#22C55E] hover:brightness-110 active:scale-[0.97] text-white rounded-2xl transition-all duration-300 shadow-2xl shadow-green-950/30 text-lg ring-4 ring-[#16A34A]/25 animate-pulse"
            >
              Apply for Personal Loan
            </button>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md">
                <Lock className="h-5 w-5 text-[#16A34A]" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md">
                <ShieldCheck className="h-5 w-5 text-[#16A34A]" />
                <span>RBI Guidelines</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md">
                <Clock className="h-5 w-5 text-[#16A34A]" />
                <span>48hr Approval</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}