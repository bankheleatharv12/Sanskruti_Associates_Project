import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  BadgeCheck,
  Calculator,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  IndianRupee,
  Lock,
  Percent,
  ShieldCheck,
} from 'lucide-react';

const highlights = [
  { label: 'Interest Rate', value: 'Starting 7.5% p.a.', sub: 'Varies by lender & CIBIL score', icon: Percent },
  { label: 'Max Amount', value: 'Up to ₹5 Crore', sub: 'Based on property value', icon: IndianRupee },
  { label: 'Tenure', value: 'Up to 30 Years', sub: 'Flexible EMI options', icon: CalendarClock },
  { label: 'Approval', value: 'Within 72 Hours', sub: 'Quick processing', icon: BadgeCheck },
];

const eligibility = [
  { label: 'Age', value: '21 to 65 years' },
  { label: 'Employment', value: 'Salaried or Self Employed' },
  { label: 'Minimum Salary', value: 'Rs. 25,000 per month' },
  { label: 'Property', value: 'Residential or Commercial' },
];

const kycDocuments = [
  'Aadhaar Card (आधार कार्ड)',
  'PAN Card (पॅन कार्ड)',
  'Bank Statement 6 Months (बँक स्टेटमेंट 6 महिने)',
  'Photo 1 (फोटो)',
  'Cheque 1 (चेक)',
];

const incomeDocuments = [
  '3 Month Salary Slip (3 महिने सॅलरी स्लिप)',
  'Joining Letter / Offer Letter / Form 16 (जॉइनिंग लेटर / ऑफर लेटर / फॉर्म 16)',
];

const propertyDocuments = [
  '8A Utara - House Record (८ अ उतारा - घराचा उतारा)',
  'Chatuhsima Dakhla (चतु:सीमा दाखला)',
  'Plan Estimate and Blue Print (प्लॅन एस्टीमेंट व ब्लू प्रिंट)',
  '7/12 Utara and Ferfar 13 Years (७/१२ उतारा व फेरफार - 13 वर्ष जुने व चालू)',
  'Gharpatti Receipt (घरपट्टी भरलेली पावती)',
  'Sale Deed / Gift Deed / Partition Deed / Release Deed if applicable (खरेदीखत / बक्षीसपत्र / वाटप पत्र / हक्कसोड असेल तर)',
];

function HomeLoanEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('3000000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [tenure, setTenure] = useState('240');

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

function DocumentSection({ title, documents, headerClassName }) {
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

export function HomeLoan({ heroVideoSrc = '/home-loan-hero.mp4' }) {
  const navigate = useNavigate();

  const goToApplication = () => {
    navigate('/home-loan/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('home-loan-eligibility')?.scrollIntoView({
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
          src={heroVideoSrc}
          onError={(e) => {
            e.target.style.display = 'none';
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
          <span className="text-white text-sm font-medium">Trusted by 500+ Customers</span>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight"
          >
            Home Loan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Apne sapno ka ghar banaye — sabse kam byaj dar par
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

        <section
          id="home-loan-eligibility"
          className="py-16 lg:py-20 bg-gradient-to-r from-[#2563EB] to-[#1e3a8a] text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Who Can Apply?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                * Eligibility depends on lender profile, CIBIL score, income, and property type.
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
                title="KYC Documents (कर्जदार / सहकर्जदार)"
                documents={kycDocuments}
                headerClassName="from-[#2563EB] to-[#1E40AF]"
              />
              <DocumentSection
                title="Income Documents (इनकम कागदपत्र)"
                documents={incomeDocuments}
                headerClassName="from-[#16A34A] to-[#22C55E]"
              />
              <DocumentSection
                title="Property Documents (प्रॉपर्टी कागदपत्र)"
                documents={propertyDocuments}
                headerClassName="from-orange-500 to-amber-500"
              />
            </div>
          </div>
        </section>

        <HomeLoanEmiCalculator />

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
                Make Your Dream Home a Reality
              </h2>
              <p className="text-lg text-white/85 mb-10">
                Simple online process. Fast approval. Flexible repayment.
              </p>

              <button
                onClick={goToApplication}
                className="px-10 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors shadow-lg font-semibold mb-8"
              >
                Apply for Home Loan
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
