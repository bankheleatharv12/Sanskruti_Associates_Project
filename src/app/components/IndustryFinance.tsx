import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  Calculator,
  CheckCircle2,
  Factory,
  ShoppingBag,
  Briefcase,
  HardHat,
  Leaf,
  Scissors,
  UtensilsCrossed,
  Heart,
  Truck,
  ChevronDown,
} from 'lucide-react';

// Fix 1: Import image properly so Vite can resolve it
const bgVideoSrc = '/Your_Role__You_are_a_202605181834 (1).mp4';
const industryVideoSrc = bgVideoSrc;

const highlights = [
  { label: 'Interest Rate', value: 'From 10% p.a.', sub: 'Varies by industry & lender' },
  { label: 'Loan Amount', value: 'Up to ₹10 Crore', sub: 'Based on turnover & profile' },
  { label: 'Tenure', value: 'Up to 10 Years', sub: 'Flexible repayment options' },
  { label: 'Approval', value: '48–72 Hours', sub: 'Quick processing & disbursal' },
];

const industriesWeFinance = [
  { icon: Factory, name: 'Manufacturing', description: 'Plant, machinery, raw material finance' },
  { icon: ShoppingBag, name: 'Trading / Wholesale', description: 'Inventory and working capital finance' },
  { icon: Briefcase, name: 'Service Industry', description: 'Working capital for service businesses' },
  { icon: HardHat, name: 'Construction', description: 'Project and equipment finance' },
  { icon: Leaf, name: 'Agriculture / Agro', description: 'Farm equipment and agro processing' },
  { icon: Scissors, name: 'Textile / Garment', description: 'Machinery and working capital' },
  { icon: UtensilsCrossed, name: 'Food Processing', description: 'Plant setup and expansion finance' },
  { icon: Heart, name: 'Healthcare / Medical', description: 'Equipment and clinic expansion' },
  { icon: Truck, name: 'Transport / Logistics', description: 'Fleet and vehicle finance' },
];

const financeTypes = [
  { title: 'Term Loan', description: 'For machinery, equipment purchase and business expansion' },
  { title: 'Working Capital Loan', description: 'For raw material, inventory and operational expenses' },
  { title: 'CC / OD Limit', description: 'Cash Credit and Overdraft facility for day-to-day business needs' },
  { title: 'Project Finance', description: 'For new plant setup or large scale industrial projects' },
  { title: 'MSME Loan', description: 'Special schemes for registered MSME and SME units' },
  { title: 'Government Schemes', description: 'MUDRA, CGTMSE, Standup India and other govt-backed schemes' },
];

const loanFeatures = [
  { title: 'Loan Amount', description: '₹5 Lakh to ₹10 Crore' },
  { title: 'Interest Rate', description: 'From 10% p.a. — varies by profile' },
  { title: 'Processing Fee', description: '0.5%–2% as per lender' },
  { title: 'Collateral', description: 'Secured and unsecured options' },
  { title: 'Repayment', description: 'Monthly EMI or flexible as per cash flow cycle' },
  { title: 'Government Schemes', description: 'MUDRA / CGTMSE / Standup India available for eligible units' },
];

const eligibilityItems = [
  { label: 'Business Vintage', value: 'Minimum 2–3 years in operation' },
  { label: 'Credit Score', value: '650+ preferred, 700+ for best rates' },
  { label: 'Annual Turnover', value: 'As per lender requirement' },
  { label: 'GST Filing', value: 'Active GST registration and returns' },
  { label: 'Business Type', value: 'Proprietorship, Partnership, LLP, Pvt Ltd, MSME, Trust, Society' },
  { label: 'Collateral', value: 'Property, machinery, or stock as collateral if secured loan' },
];

const documentsRequired = [
  'PAN Card',
  'Aadhaar Card',
  'Address Proof',
  'Passport-size Photo',
  'Business Registration Proof',
  'GST Registration Certificate',
  'GST Returns — Last 1–2 Years',
  'Bank Statements — Last 12 Months',
  'ITR — Last 2–3 Years',
  'P&L Statement + Balance Sheet',
  'Business Address Proof',
  'Nominee / Guarantor PAN + Aadhaar (if applicable)',
];

function IndustryFinanceEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('5000000');
  const [interestRate, setInterestRate] = useState('10');
  const [tenure, setTenure] = useState('84');

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
            {/* Left: Inputs */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl text-[#1F2937]">EMI Calculator</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Calculate your monthly installment and plan your finances better
              </p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[#1F2937] mb-2">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#1F2937] mb-2">
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
                  <label className="block text-sm text-[#1F2937] mb-2">Tenure (Months)</label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
              <h3 className="text-xl mb-8">Your EMI Breakdown</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center">
                  <div className="relative h-40 w-40">
                    <svg viewBox="0 0 120 120" className="-rotate-90">
                      <circle
                        cx="60" cy="60" r="44"
                        fill="none"
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="18"
                      />
                      <circle
                        cx="60" cy="60" r="44"
                        fill="none"
                        stroke="#16A34A"
                        strokeWidth="18"
                        strokeDasharray={`${276.46 - (interestShare / 100) * 276.46} 276.46`}
                        strokeLinecap="round"
                      />
                      <circle
                        cx="60" cy="60" r="44"
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
                      <span className="text-lg">
                        ₹{Math.round(totalAmount || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-blue-200 mb-1">Monthly EMI</div>
                  <div className="text-3xl lg:text-4xl">₹{emi.toLocaleString('en-IN')}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Principal Amount</div>
                    <div className="text-lg">₹{principal.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Total Interest</div>
                    <div className="text-lg">
                      ₹{Math.round(totalInterest || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Total Amount Payable</div>
                  <div className="text-xl">
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

// Fix 2: title prop typed properly
function DocumentsColumn({ title, documents }: { title: string; documents: string[] }) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/70 shadow-lg">
      <h3 className="text-xl text-[#1F2937] mb-5">{title}</h3>
      <ul className="space-y-3">
        {documents.map((doc) => (
          <li key={doc} className="flex items-start gap-3 text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
            <span>{doc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IndustryFinance() {
  const navigate = useNavigate();

  const goToApplication = () => {
    navigate('/industry-finance/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('industry-finance-eligibility')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#EFF6FF]">
      {/* Fix 3: Use imported bgImage variable instead of raw /src/ path */}
      <div className="absolute inset-0 z-0">
        <video
          src={bgVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-white/90" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
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

          <video
            className="absolute inset-0 h-full w-full object-cover scale-125 sm:scale-110"
            src={industryVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            onError={(e) => {
              (e.currentTarget as HTMLVideoElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-[#0F172A]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent" />

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            {/* Badge Animation */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
                <span className="text-sm font-semibold tracking-wide">All Industry Types Covered</span>
              </div>
            </motion.div>

            {/* Heading Animation - Word by Word */}
            <div className="mb-6">
              {["Industry", "Finance"].map((word, i) => (
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
              Complete financial solutions for manufacturing, trading, and service industries — fast approval, best rates
            </motion.p>

            {/* Stats Row - Stagger Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto"
            >
              {[
                { number: "10%", label: "Starting Rate" },
                { number: "₹10Cr", label: "Max Amount" },
                { number: "10 Years", label: "Max Tenure" },
                { number: "48-72 Hrs", label: "Approval" }
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
                className="px-8 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg text-sm font-bold tracking-wide shadow-lg transition-colors"
              >
                Apply Now
              </motion.button>
              <motion.button
                onClick={goToEligibility}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-4 border-2 border-[#60A5FA] text-white hover:bg-white/10 rounded-lg text-sm font-bold tracking-wide transition-colors"
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

        {/* Loan Highlights */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <p className="text-xs uppercase tracking-widest font-medium opacity-70 mb-2">{item.label}</p>
                  <h3 className="text-2xl md:text-3xl font-black text-[#1F2937] mb-1">{item.value}</h3>
                  <p className="text-sm font-normal leading-relaxed text-gray-600">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Industry Finance */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-12">
              {["What", "is", "Industry", "Finance?"].map((word, i) => (
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
              className="h-1 rounded-full mb-12"
              style={{
                background: "linear-gradient(90deg, #60A5FA, #3B82F6)",
              }}
            />

            <div className="grid lg:grid-cols-2 gap-8">
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
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 font-normal leading-relaxed"
              >
                <p className="text-lg leading-relaxed">
                  Industry Finance provides structured financial solutions to businesses across
                  manufacturing, trading, and service sectors. Get funds for expansion, working
                  capital, equipment, or raw material procurement.
                </p>
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
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 font-normal leading-relaxed"
              >
                <p className="text-lg leading-relaxed">
                  Whether you run a small MSME unit or a large industrial setup — we connect you
                  with the right lender from 20+ banks and NBFCs for the best deal tailored to
                  your industry type.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries We Finance */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-12">
              {["Industries", "We", "Finance"].map((word, i) => (
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
              className="h-1 rounded-full mb-12"
              style={{
                background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              }}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industriesWeFinance.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
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
                    className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg group"
                  >
                    {/* Icon with animation */}
                    <div className="relative mb-4">
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
                        className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-lg flex items-center justify-center relative"
                      >
                        <Icon className="w-6 h-6 text-white" />
                        
                        {/* Pulsing ring */}
                        <motion.div
                          className="absolute inset-0 rounded-lg"
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
                    
                    <h3 className="text-xl font-bold tracking-tight text-[#1F2937] mb-2">{industry.name}</h3>
                    <p className="text-gray-600 text-sm font-normal leading-relaxed">{industry.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Finance Types */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-12">
              {["Types", "of", "Industry", "Finance"].map((word, i) => (
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
              className="h-1 rounded-full mb-12"
              style={{
                background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              }}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {financeTypes.map((type, index) => (
                <motion.div
                  key={type.title}
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
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg"
                >
                  <h3 className="text-xl font-bold tracking-tight text-[#1F2937] mb-3">{type.title}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Features */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-12">
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
              className="h-1 rounded-full mb-12"
              style={{
                background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              }}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanFeatures.map((feature, index) => (
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
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg"
                >
                  <h3 className="text-lg font-bold tracking-tight text-[#1F2937] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section id="industry-finance-eligibility" className="py-16 lg:py-20">
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

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {eligibilityItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg"
                >
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
              className="bg-gray-100 border-l-4 border-gray-400 rounded-lg p-6"
            >
              <p className="text-gray-700">
                * Eligibility depends on lender policy, business profile, and document
                verification. Contact our expert for accurate assessment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-16 lg:py-20">
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

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/70 shadow-lg"
            >
              <h3 className="text-xl font-bold tracking-tight text-[#1F2937] mb-5">Common Documents for All Business Types</h3>
              <ul className="space-y-3">
                {documentsRequired.map((doc, index) => (
                  <motion.li
                    key={doc}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium leading-relaxed">{doc}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* EMI Calculator */}
        <IndustryFinanceEmiCalculator />

        {/* Apply CTA */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* CTA Heading - Split into lines */}
            <div className="mb-8">
              {["Apply", "for", "Industry", "Finance"].map((word, i) => (
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
                  className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#1F2937] inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            <motion.button
              onClick={goToApplication}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-10 py-5 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl transition-colors shadow-xl text-lg font-bold tracking-wide"
            >
              Apply for Industry Finance
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
}
