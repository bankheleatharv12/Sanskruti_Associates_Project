import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  Calculator,
  Car,
  CarFront,
  CheckCircle2,
  Clock,
  IndianRupee,
  TrendingUp,
  Zap,
  ChevronDown,
} from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Interest Rate',
    value: 'From 8.5% p.a.',
    sub: 'Competitive rates from top banks',
  },
  {
    icon: IndianRupee,
    title: 'Loan Amount',
    value: 'Up to 100% On-road',
    sub: 'New car - up to full on-road price',
  },
  {
    icon: Clock,
    title: 'Tenure',
    value: 'Up to 7 Years',
    sub: 'Flexible repayment options',
  },
  {
    icon: Zap,
    title: 'Approval',
    value: 'Same Day',
    sub: 'Fast processing, quick disbursal',
  },
];

const loanTypes = [
  {
    icon: Car,
    color: '#2563EB',
    title: 'New Car - Salaried',
    lines: [
      'Best rates for salaried employees',
      'Min salary Rs.25,000/month',
      'Fast approval with salary slips',
    ],
  },
  {
    icon: Car,
    color: '#16A34A',
    title: 'New Car - Self Employed',
    lines: [
      'Business owners and freelancers',
      'ITR-based eligibility',
      'GST registration preferred',
    ],
  },
  {
    icon: CarFront,
    color: '#2563EB',
    title: 'Used Car - Salaried',
    lines: [
      'Pre-owned vehicle finance',
      'Car not older than 10 years',
      'RC and insurance required',
    ],
  },
  {
    icon: CarFront,
    color: '#16A34A',
    title: 'Used Car - Self Employed',
    lines: [
      'Used car for business owners',
      'ITR-based income assessment',
      'Quick documentation process',
    ],
  },
];

const features = [
  ['New Car Amount', 'Up to 100% on-road price'],
  ['Used Car Amount', 'Up to 80-85% of car value'],
  ['Interest Rate', '8.5%-15% p.a. based on profile'],
  ['Processing Fee', '0.5%-1% or flat as per lender'],
  ['Tenure', '12 to 84 months flexible'],
  ['Approval', 'Same day to 48 hours'],
];

const salariedEligibility = [
  'Age: 21 to 60 years',
  'Minimum salary: Rs.25,000/month',
  'Employment: Minimum 1 year',
  'Credit Score: 700+ preferred',
  'Employment type: Govt or Private',
];

const selfEmployedEligibility = [
  'Age: 21 to 65 years',
  'Business vintage: 2+ years',
  'ITR: Minimum 2 years filed',
  'Credit Score: 700+ preferred',
  'GST registration preferred',
];

const documentTabs = [
  {
    label: 'New Car - Salaried',
    sections: [
      {
        title: 'KYC Documents',
        color: '#2563EB',
        docs: ['PAN Card *', 'Aadhaar Card *', 'Address Proof *', 'Passport-size Photo *'],
      },
      {
        title: 'Income Documents',
        color: '#16A34A',
        docs: [
          'Salary Slips for last 3 months *',
          'Bank Statements for last 6 months *',
          'Form 16 for last 2 years *',
          'Office ID Card / Employee ID *',
        ],
      },
      {
        title: 'Vehicle Documents',
        color: '#F97316',
        docs: ['Car Quotation from Dealer *'],
      },
    ],
  },
  {
    label: 'New Car - Self Employed',
    sections: [
      {
        title: 'KYC Documents',
        color: '#2563EB',
        docs: ['PAN Card *', 'Aadhaar Card *', 'Address Proof *', 'Passport-size Photo *'],
      },
      {
        title: 'Business + Income',
        color: '#16A34A',
        docs: [
          'ITR for last 2-3 years *',
          'Bank Statements last 6-12 months *',
          'GST Registration Certificate *',
          'Business Proof *',
          'Ownership / Business Address Proof *',
        ],
      },
      {
        title: 'Vehicle Documents',
        color: '#F97316',
        docs: ['Car Quotation from Dealer *'],
      },
    ],
  },
  {
    label: 'Used Car - Salaried',
    sections: [
      {
        title: 'KYC Documents',
        color: '#2563EB',
        docs: ['PAN Card *', 'Aadhaar Card *', 'Address Proof *', 'Passport-size Photo *'],
      },
      {
        title: 'Income Documents',
        color: '#16A34A',
        docs: [
          'Salary Slips for last 3 months *',
          'Bank Statements for last 6 months *',
          'Form 16 for last 2 years *',
          'Office ID Card *',
        ],
      },
      {
        title: 'Vehicle Documents',
        color: '#F97316',
        docs: ['RC of the Vehicle *', 'Insurance Copy of the Vehicle *'],
      },
    ],
  },
  {
    label: 'Used Car - Self Employed',
    sections: [
      {
        title: 'KYC Documents',
        color: '#2563EB',
        docs: ['PAN Card *', 'Aadhaar Card *', 'Address Proof *', 'Passport-size Photo *'],
      },
      {
        title: 'Business + Income',
        color: '#16A34A',
        docs: [
          'ITR for last 2-3 years *',
          'Bank Statements last 6-12 months *',
          'GST Registration Certificate *',
          'Business Proof *',
          'Ownership Proof *',
        ],
      },
      {
        title: 'Vehicle Documents',
        color: '#F97316',
        docs: ['RC of the Vehicle *', 'Insurance Copy of the Vehicle *'],
      },
    ],
  },
];

function CarLoanEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('800000');
  const [interestRate, setInterestRate] = useState('8.5');
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
                <h2 className="text-2xl lg:text-3xl text-[#1F2937]">EMI Calculator</h2>
              </div>

              <p className="text-gray-600 mb-8">
                Calculate your monthly installment and plan your car loan better
              </p>

              <div className="space-y-6">
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white" type="number" value={loanAmount} onChange={(event) => setLoanAmount(event.target.value)} />
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white" type="number" step="0.1" value={interestRate} onChange={(event) => setInterestRate(event.target.value)} />
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white" type="number" value={tenure} onChange={(event) => setTenure(event.target.value)} />
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
              <h3 className="text-xl mb-8">Your EMI Breakdown</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-4">
                <div className="text-sm text-blue-200 mb-1">Monthly EMI</div>
                <div className="text-3xl lg:text-4xl">Rs.{emi.toLocaleString('en-IN')}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Principal Amount</div>
                  <div className="text-lg">Rs.{principal.toLocaleString('en-IN')}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Total Interest</div>
                  <div className="text-lg">Rs.{Math.round(totalInterest || 0).toLocaleString('en-IN')}</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-xs text-blue-200 mb-1">Total Amount Payable</div>
                <div className="text-xl">Rs.{Math.round(totalAmount || 0).toLocaleString('en-IN')}</div>
              </div>
              <div className="mt-6 h-2 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full bg-[#16A34A]" style={{ width: `${100 - interestShare}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CarLoan() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const goToApplication = () => {
    navigate('/car-loan/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('car-loan-eligibility')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#EFF6FF]">
      <div className="absolute inset-0 z-0">
        <img src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png" alt="" className="w-full h-full object-cover object-center opacity-30" />
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

          <video
            className="absolute inset-0 h-full w-full object-cover scale-125 sm:scale-110"
            src="/Your_Role__You_are_a_202605172311 (1).mp4"
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
            {/* Badge Animation */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                <span className="text-sm font-semibold tracking-wide text-blue-50">New & Used Car Finance Available</span>
              </div>
            </motion.div>

            {/* Heading Animation - Word by Word */}
            <div className="mb-6">
              {["Car", "Loan"].map((word, i) => (
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
              New or used car - fast approval, minimal paperwork, competitive rates for salaried and self-employed
            </motion.p>

            {/* Stats Row - Stagger Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto"
            >
              {[
                { number: "8.5%", label: "Starting Rate" },
                { number: "100%", label: "On-road Price" },
                { number: "7 Years", label: "Max Tenure" },
                { number: "Same Day", label: "Approval" }
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
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-[#2563EB] mb-4" />
                    <p className="text-xs uppercase tracking-widest font-medium opacity-70 mb-2">{item.title}</p>
                    <h3 className="text-2xl md:text-3xl font-black text-[#1F2937] mb-2">{item.value}</h3>
                    <p className="text-gray-600 text-sm font-normal leading-relaxed">{item.sub}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-gradient-to-br from-[#2563EB] to-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-8">
              {["New", "Car", "or", "Used", "Car", "-", "We", "Finance", "Both"].map((word, i) => (
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

            <div className="grid lg:grid-cols-2 gap-6">
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
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 font-normal leading-relaxed"
              >
                Get a car loan for any new car from any authorised dealer. Finance up to 100% of the on-road price with competitive interest rates and flexible tenure up to 7 years.
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
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 font-normal leading-relaxed"
              >
                Looking for a used car? We also finance pre-owned vehicles. Loan amount depends on car age, condition, and valuation. Quick approval for salaried and self-employed applicants.
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-10">
              {["Choose", "Your", "Car", "Loan", "Type"].map((word, i) => (
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

            <div className="grid lg:grid-cols-2 gap-6">
              {loanTypes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
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
                        className="w-12 h-12 rounded-2xl flex items-center justify-center relative"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <Icon className="w-9 h-9" style={{ color: item.color }} />
                        
                        {/* Pulsing ring */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          animate={{
                            boxShadow: [
                              `0 0 0 0px ${item.color}30`,
                              `0 0 0 8px ${item.color}00`,
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
                    
                    <h3 className="text-xl md:text-2xl font-black tracking-tight text-[#1F2937] mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.lines.map((line, lineIndex) => (
                        <motion.li
                          key={line}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-20px" }}
                          transition={{
                            delay: lineIndex * 0.08,
                            duration: 0.5,
                          }}
                          className="flex gap-2 text-gray-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                          <span className="text-sm font-medium leading-relaxed">{line}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(([title, value], index) => (
                <motion.div
                  key={title}
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
                  <p className="text-sm font-semibold tracking-wide uppercase text-[#2563EB] mb-2">{title}</p>
                  <p className="text-lg font-bold tracking-tight text-[#1F2937]">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="car-loan-eligibility" className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-10">
              {["Basic", "Eligibility"].map((word, i) => (
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

            <div className="grid lg:grid-cols-2 gap-6">
              {[['Salaried', salariedEligibility], ['Self Employed', selfEmployedEligibility]].map(([title, items], index) => (
                <motion.div
                  key={title as string}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/70 shadow-lg"
                >
                  <h3 className="text-lg font-bold tracking-tight text-[#1F2937] mb-5">{title as string}</h3>
                  <ul className="space-y-3">
                    {(items as string[]).map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading - Word by Word */}
            <div className="mb-8">
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
              className="h-1 rounded-full mb-8"
              style={{
                background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              }}
            />

            <div className="flex flex-wrap gap-4 border-b border-gray-300 mb-8">
              {documentTabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(index)}
                  className={`pb-3 text-sm font-bold tracking-wide transition-colors border-b-2 ${activeTab === index
                      ? 'border-[#2563EB] text-[#2563EB]'
                      : 'border-transparent text-gray-500 hover:text-[#2563EB]'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {documentTabs[activeTab].sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg"
                >
                  <h3 className="text-lg font-bold tracking-tight mb-4" style={{ color: section.color }}>
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.docs.map((doc, docIndex) => (
                      <motion.li
                        key={doc}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: docIndex * 0.05, duration: 0.4 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium leading-relaxed">{doc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CarLoanEmiCalculator />

        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-gradient-to-br from-[#2563EB] to-[#0F172A] text-white rounded-2xl p-8 lg:p-12 text-center shadow-2xl"
            >
              {/* CTA Heading - Split into lines */}
              <div className="mb-3">
                {["Drive", "Home", "Your", "Dream", "Car", "Today"].map((word, i) => (
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
                New or used - we finance both
              </motion.p>
              
              <motion.button
                onClick={goToApplication}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.6 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl text-lg font-bold tracking-wide shadow-xl animate-pulse transition-colors"
              >
                Apply for Car Loan
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-blue-50"
              >
                {["100% Secure", "New & Used Cars", "Same Day Approval", "Best Rates Guaranteed"].map((feature, index) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    className="text-base font-light leading-relaxed opacity-80"
                  >
                    {feature}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
