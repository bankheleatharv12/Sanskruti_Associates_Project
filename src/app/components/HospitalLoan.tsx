import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Calculator, 
  CheckCircle2, 
  TrendingDown, 
  IndianRupee, 
  Clock, 
  MapPin,
  User,
  Building,
  Home,
  Building2,
  Users,
  Briefcase,
  Shield,
  Activity,
  ArrowUpRight,
  Truck,
  Hammer,
  Wallet,
  ChevronDown,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

const highlightsData = [
  { 
    icon: TrendingDown, 
    label: 'Interest Rate', 
    value: '8.75%', 
    sub: 'p.a. onwards*',
    color: 'blue'
  },
  { 
    icon: IndianRupee, 
    label: 'Loan Amount', 
    value: 'Up to Rs.50 Cr', 
    sub: 'Based on project',
    color: 'green'
  },
  { 
    icon: Clock, 
    label: 'Tenure', 
    value: 'Up to 15 Yrs', 
    sub: 'Flexible repayment',
    color: 'blue'
  },
  { 
    icon: MapPin, 
    label: 'Available In', 
    value: '3 States', 
    sub: 'MH, MP & Gujarat',
    color: 'green'
  },
];

const keyFeatures = [
  '✓ Takeover of Existing Loan',
  '✓ Top Up Available',
  '✓ New Construction',
  '✓ Expansion Projects',
  '✓ Equipment Financing',
  '✓ Working Capital',
];

const customerTypes = [
  { name: 'Individual Doctor', icon: User, desc: 'MBBS, MD, specialist doctors' },
  { name: 'Clinic Owner', icon: Building, desc: 'Small clinic or medical center' },
  { name: 'Nursing Home', icon: Home, desc: 'Nursing home or maternity home' },
  { name: 'Hospital', icon: Building2, desc: 'General or multi-specialty hospital' },
  { name: 'Partnership Firm', icon: Users, desc: 'Medical partnership practice' },
  { name: 'LLP', icon: Briefcase, desc: 'Limited liability partnership' },
  { name: 'Private Limited Co.', icon: Building2, desc: 'Pvt Ltd medical company' },
  { name: 'Trust / Society', icon: Shield, desc: 'Charitable trust or society' },
];

const eligibilityCriteria = [
  { label: 'Available States', value: 'Maharashtra, MP, Gujarat' },
  { label: 'Loan Type', value: 'Term Loan, OD, Equipment Finance' },
  { label: 'Takeover', value: 'Available' },
  { label: 'Top Up', value: 'Available' },
  { label: 'New Construction', value: 'Eligible' },
  { label: 'Expansion', value: 'Eligible' },
];

const loanPurposes = [
  { 
    icon: Building2, 
    title: 'Hospital Setup', 
    desc: 'New hospital or nursing home construction from ground up' 
  },
  { 
    icon: ArrowUpRight, 
    title: 'Clinic Expansion', 
    desc: 'Expand existing facility, add new floors or wings' 
  },
  { 
    icon: Activity, 
    title: 'Medical Equipment', 
    desc: 'Purchase latest diagnostic and medical equipment' 
  },
  { 
    icon: Truck, 
    title: 'Ambulance Purchase', 
    desc: 'Add ambulance or patient transport vehicles to fleet' 
  },
  { 
    icon: Hammer, 
    title: 'Renovation', 
    desc: 'Modernize and renovate existing hospital facility' 
  },
  { 
    icon: Wallet, 
    title: 'Working Capital', 
    desc: 'Fund day-to-day operational expenses and payroll' 
  },
];

const documentTabs = [
  {
    name: 'KYC Documents',
    color: 'blue',
    documents: [
      { name: 'PAN Card (Applicant)', required: true },
      { name: 'Aadhaar Card (Applicant)', required: true },
      { name: 'Address Proof', required: true },
      { name: 'Passport Size Photo', required: true },
      { name: 'Co-applicant PAN', required: false },
      { name: 'Co-applicant Aadhaar', required: false },
    ]
  },
  {
    name: 'Professional Documents',
    color: 'green',
    documents: [
      { name: 'Medical Council Registration Certificate', required: true },
      { name: 'Qualification Certificates (MBBS/MD/Degree)', required: true },
      { name: 'Hospital/Clinic Registration Certificate', required: true },
      { name: 'Partnership Deed (if Partnership Firm)', required: true },
      { name: 'Incorporation Certificate (if Pvt Ltd/LLP)', required: true },
      { name: 'Trust Deed (if Trust/Society)', required: true },
      { name: 'GST Registration', required: false },
    ]
  },
  {
    name: 'Income Documents',
    color: 'orange',
    documents: [
      { name: 'ITR Last 2-3 Years', required: true },
      { name: 'Bank Statements 6-12 Months (All accounts)', required: true },
      { name: 'Profit and Loss Statement', required: true },
      { name: 'Balance Sheet / Audited Financials', required: true },
      { name: 'Income Proof of Doctor/Institution', required: true },
    ]
  },
  {
    name: 'Project & Property Documents',
    color: 'purple',
    documents: [
      { name: 'Project Report', required: true },
      { name: 'Equipment/Construction Quotation', required: true },
      { name: 'Hospital Plan or Expansion Proposal', required: false },
      { name: 'Vendor Quotation for Medical Equipment', required: false },
      { name: 'Ambulance Quotation (if needed)', required: false },
      { name: 'Property Ownership Papers (if secured)', required: false },
      { name: 'Title Documents and Valuation Papers', required: false },
      { name: 'Existing Loan Details (for Takeover)', required: false },
    ]
  },
];

const trustPoints = [
  '✅ Quick approval for healthcare projects',
  '✅ Easy online application process',
  '✅ Hospital setup and expansion funding',
  '✅ Equipment and ambulance purchase',
  '✅ Collateral-free options available',
  '✅ Flexible repayment up to 15 years',
];

function HospitalLoanEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('10000000');
  const [interestRate, setInterestRate] = useState('8.75');
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
                  <label className="block text-sm text-[#1F2937] mb-2">Loan Amount (Rs.)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(event) => setLoanAmount(event.target.value)}
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
                    onChange={(event) => setInterestRate(event.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1F2937] mb-2">Tenure (Months)</label>
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
              <h3 className="text-xl mb-8">Your EMI Breakdown</h3>

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
                      <span className="text-lg">
                        Rs.{Math.round(totalAmount || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-blue-200 mb-1">Monthly EMI</div>
                  <div className="text-3xl lg:text-4xl">Rs.{emi.toLocaleString('en-IN')}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Principal Amount</div>
                    <div className="text-lg">Rs.{principal.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Total Interest</div>
                    <div className="text-lg">
                      Rs.{Math.round(totalInterest || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Total Amount Payable</div>
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

function DocumentTabContent({ tab }) {
  const colorMap = {
    blue: 'from-[#2563EB] to-[#1E40AF]',
    green: 'from-[#16A34A] to-[#15803D]',
    orange: 'from-[#F97316] to-[#EA580C]',
    purple: 'from-[#9333EA] to-[#7E22CE]',
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/70 shadow-lg">
      <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${colorMap[tab.color]} mb-6`} />
      <h3 className="text-xl text-[#1F2937] mb-5">{tab.name}</h3>
      <ul className="space-y-3">
        {tab.documents.map((doc) => (
          <li key={doc.name} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
            <span className={doc.required ? 'text-[#1F2937] font-medium' : 'text-gray-600'}>
              {doc.name}
              {doc.required && <span className="text-red-600 ml-1">*</span>}
              {!doc.required && <span className="text-gray-500 text-sm ml-1">(Optional)</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HospitalLoan() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const goToApplication = () => {
    navigate('/hospital-loan/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('hospital-loan-who-can-apply')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
        >
          <source src="/videos/hospital-loan-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{ background: 'rgba(15, 23, 42, 0.65)' }}
        />

        {/* Floating Badge - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-10 right-10 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20"
        >
          <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
          <span className="text-white text-sm">Trusted Healthcare Financing Partner</span>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight"
          >
            Loan Against Hospital<br />& Nursing Home Finance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            New construction, expansion, takeover and top up — available across Maharashtra, MP & Gujarat
          </motion.p>

          {/* CTA Buttons */}
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

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <ChevronDown className="w-6 h-6 text-white/70" />
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 bg-gradient-to-br from-[#EFF6FF] via-green-50 to-white">
        {/* Loan Highlights Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlightsData.map((item, index) => {
                const Icon = item.icon;
                const isGreen = item.color === 'green';
                
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isGreen 
                        ? 'bg-gradient-to-br from-[#16A34A] to-[#15803D]' 
                        : 'bg-gradient-to-br from-[#2563EB] to-[#1E40AF]'
                    }`}>
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

        {/* Key Features Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-12 text-center">Key Features</h2>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-full px-6 py-3 border-l-4 border-[#16A34A] shadow-md hover:shadow-lg hover:bg-[#f0fdf4] transition-all"
                >
                  <span className="text-[#16A34A] font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Can Apply Section */}
        <section id="hospital-loan-who-can-apply" className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-12 text-center">Who Can Apply?</h2>

            {/* Customer Type Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {customerTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1E40AF] transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-[#1F2937] font-semibold mb-2">{type.name}</h3>
                    <p className="text-gray-600 text-sm">{type.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Eligibility Criteria Grid */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl text-[#1F2937] mb-6 font-semibold">Eligibility Criteria</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eligibilityCriteria.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#16A34A] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                      <p className="text-[#1F2937] font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Loan Purpose Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-12 text-center">What Can You Use This Loan For?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanPurposes.map((purpose, index) => {
                const Icon = purpose.icon;
                return (
                  <motion.div
                    key={purpose.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-t-4 border-[#2563EB]"
                  >
                    <div className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg text-[#1F2937] font-semibold mb-2">{purpose.title}</h3>
                      <p className="text-gray-600 text-sm">{purpose.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-12 text-center">Documents Required</h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {documentTabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === index
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
              className="grid lg:grid-cols-1"
            >
              <DocumentTabContent tab={documentTabs[activeTab]} />
            </motion.div>
          </div>
        </section>

        {/* EMI Calculator */}
        <HospitalLoanEmiCalculator />

        {/* Why Trust Us Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-12 text-center">
              Why Healthcare Institutions Trust Us
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
                  <p className="text-[#1F2937] font-medium">{point.replace('✅ ', '')}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0f172a] to-[#2563EB] rounded-2xl p-10 lg:p-16 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Finance Your Healthcare Vision?
              </h2>
              <p className="text-lg text-white/85 mb-10">
                Talk to our dedicated healthcare finance expert today
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goToApplication}
                  className="px-10 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors shadow-lg font-semibold"
                >
                  Apply for Hospital Loan
                </button>
                <a
                  href="tel:+917758969798"
                  className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors font-semibold"
                >
                  Call Expert Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              *Interest rates start from 8.75% p.a. Final rate depends on borrower profile, project size, collateral, and lender policy.
              Available in Maharashtra, MP and Gujarat only. Takeover and Top Up subject to lender approval.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
