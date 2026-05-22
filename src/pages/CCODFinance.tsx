import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { 
  ChevronDown,
  Landmark,
  CreditCard,
  TrendingUp,
  Percent,
  RefreshCw,
  BarChart2,
  Package,
  Users,
  Handshake,
  Shield,
  Store,
  Factory,
  Briefcase,
  User,
  CheckCircle2,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router";

const heroVideo = '/ccod.mp4';

export function CCODFinance() {
  const navigate = useNavigate();
  const [calculatorData, setCalculatorData] = useState({
    limit: 1000000,
    utilized: 500000,
    rate: 12,
    months: 6
  });

  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator-section');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const calculateInterest = (utilized: number, annualRate: number, months: number) => {
    const monthlyRate = annualRate / 100 / 12;
    const ccInterest = utilized * monthlyRate * months;
    
    // Traditional loan EMI for comparison
    const r = monthlyRate;
    const n = months;
    const traditionalEMI = (utilized * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const traditionalTotal = traditionalEMI * months;
    
    const savings = traditionalTotal - ccInterest;
    
    return { ccInterest, traditionalTotal, savings, monthlyInterest: ccInterest / months };
  };

  const { ccInterest, traditionalTotal, savings, monthlyInterest } = calculateInterest(
    calculatorData.utilized,
    calculatorData.rate,
    calculatorData.months
  );

  // Horizontal scroll benefits
  const benefitsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: benefitsRef,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Cash Flow Management",
      desc: "व्यवसायाचा cash flow smooth राहतो",
      color: "emerald",
      tag: "Essential"
    },
    {
      icon: Percent,
      title: "Interest Optimization", 
      desc: "फक्त वापरलेल्या रकमेवर व्याज बचत जास्त होते",
      color: "blue",
      tag: "Save Money"
    },
    {
      icon: RefreshCw,
      title: "Flexible Access",
      desc: "गरजेनुसार पैसे काढा आणि परत करा",
      color: "purple",
      tag: "Flexibility"
    },
    {
      icon: BarChart2,
      title: "Business Growth",
      desc: "नवीन opportunities साठी instant capital access",
      color: "orange",
      tag: "Growth"
    },
    {
      icon: Package,
      title: "Inventory Purchase",
      desc: "Stock / Inventory खरेदीसाठी तात्काळ निधी",
      color: "green",
      tag: "Stock"
    },
    {
      icon: Users,
      title: "Salary Management",
      desc: "Employee salaries वेळेत द्या cash flow tension नाही",
      color: "blue",
      tag: "HR"
    },
    {
      icon: Handshake,
      title: "Supplier Payments",
      desc: "Suppliers ला वेळेत payment — discount benefits मिळवा",
      color: "emerald",
      tag: "Suppliers"
    },
    {
      icon: Shield,
      title: "Emergency Buffer",
      desc: "Unexpected expenses साठी ready buffer नेहमी available",
      color: "red",
      tag: "Security"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* PART A - HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b]/90 via-[#065f46]/70 to-[#0f172a]/90" />
        
        {/* Floating Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-sm ${
              i % 3 === 0 ? 'bg-emerald-400/20' : 
              i % 3 === 1 ? 'bg-green-300/15' : 'bg-emerald-300/10'
            }`}
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 rounded-full px-5 py-2 mb-8"
          >
            💼 CC / OD — Business Finance Solutions
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl sm:text-8xl font-black text-white mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            कॅश क्रेडिट / ओव्हरड्राफ्ट
            <br />
            <span className="text-5xl sm:text-6xl">CC / OD Finance</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/80 text-xl max-w-3xl mx-auto mb-8"
          >
            व्यवसायाच्या Working Capital गरजांसाठी सर्वात सुलभ वित्तपुरवठा<br />
            Pay Interest Only on Amount Utilized<br />
            ₹1 Lakh ते ₹10 Crore पर्यंत
          </motion.p>

          {/* Animated Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto"
          >
            {[
              { number: "₹10Cr+", label: "Maximum Limit" },
              { number: "48 Hrs", label: "Quick Approval" },
              { number: "Only Utilized", label: "Interest Charged" },
              { number: "Renewable", label: "Annually" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-emerald-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/cc-od-finance/apply')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-emerald-500/40 transition-all duration-300"
            >
              Apply Now
            </button>
            <button
              onClick={scrollToCalculator}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-xl transition-all duration-300"
            >
              Calculate Savings
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </section>     
 {/* PART B - WHAT IS CC/OD */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cash Credit Card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-t-4 border-emerald-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    CC — Cash Credit
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Cash Credit क्या है?</h3>
                  <p className="text-emerald-600 font-medium">कामकाजी भांडवलासाठी विशेष सुविधा</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                व्यवसायाला approved limit पर्यंत पैसे काढण्याची सुविधा देते — Stock, Inventory किंवा Receivables च्या विरोधात.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Separate CC Account",
                  "Stock/Inventory वर आधारित", 
                  "Only on utilized amount व्याज",
                  "Ongoing business operations साठी",
                  "Annual renewal"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                <p className="text-emerald-800 text-sm font-medium">
                  <strong>उदाहरण:</strong> CC Limit ₹10 Lakh — फक्त ₹4 Lakh वापरल्यास व्याज फक्त ₹4 Lakh वर
                </p>
              </div>
            </motion.div>

            {/* Overdraft Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-t-4 border-blue-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    OD — Overdraft
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Overdraft म्हणजे काय?</h3>
                  <p className="text-blue-600 font-medium">Account Balance पलीकडे पैसे काढा</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Bank approved limit पर्यंत available balance पेक्षा जास्त पैसे काढण्याची सुविधा. व्यक्ती आणि व्यवसाय दोघांसाठी.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Existing account linked",
                  "Secured या Unsecured दोन्ही",
                  "FD Property Salary वर",
                  "Short-term cash gaps साठी", 
                  "Flexible repayment"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-800 text-sm font-medium">
                  <strong>उदाहरण:</strong> Account Balance ₹50,000 OD Limit ₹2 Lakh असल्यास Total ₹2.5 Lakh पर्यंत काढता येते
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART C - CC vs OD COMPARISON TABLE */}
      <section className="py-20 bg-gradient-to-br from-[#064e3b] to-[#0f172a]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              CC vs OD — फरक समजून घ्या
            </h2>
          </motion.div>

          <div className="bg-white/8 backdrop-blur rounded-3xl overflow-hidden border border-white/10">
            <div className="bg-emerald-600/40 text-white font-bold p-4 grid grid-cols-3 gap-4">
              <div>Feature</div>
              <div>Cash Credit (CC)</div>
              <div>Overdraft (OD)</div>
            </div>
            
            {[
              {
                feature: "Purpose",
                cc: "व्यवसाय Working Capital",
                od: "Business + Personal"
              },
              {
                feature: "Collateral", 
                cc: "Stock / Receivables / Inventory",
                od: "FD / Property / Salary"
              },
              {
                feature: "Account Type",
                cc: "Separate CC Account", 
                od: "Existing account linked"
              },
              {
                feature: "Best For",
                cc: "Ongoing operations",
                od: "Temporary cash gaps"
              },
              {
                feature: "Interest",
                cc: "Only on utilized amount",
                od: "Only on overdrawn amount"
              },
              {
                feature: "Tenure",
                cc: "Annual renewal",
                od: "Short-term / Annual"
              },
              {
                feature: "Limit Range",
                cc: "₹1 Lakh to ₹10 Crore",
                od: "₹50K to ₹5 Crore"
              }
            ].map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`p-4 grid grid-cols-3 gap-4 border-b border-white/10 ${
                  index % 2 === 0 ? 'bg-white/5' : 'bg-white/3'
                }`}
              >
                <div className="text-white/90 font-medium">{row.feature}</div>
                <div className="text-emerald-300">{row.cc}</div>
                <div className="text-blue-300">{row.od}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PART D - BENEFITS (Horizontal Scroll) */}
      <section ref={benefitsRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-8 px-8"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`w-[320px] shrink-0 h-[380px] bg-white rounded-3xl p-8 shadow-2xl border-t-4 border-${benefit.color}-500 hover:scale-105 transition-transform duration-300`}
              >
                <div className={`w-16 h-16 bg-${benefit.color}-50 text-${benefit.color}-600 rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {benefit.desc}
                </p>
                <div className={`inline-block bg-${benefit.color}-100 text-${benefit.color}-700 px-3 py-1 rounded-full text-xs font-medium`}>
                  {benefit.tag}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gray-200 rounded-full">
          <motion.div
            style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            className="h-full bg-emerald-500 rounded-full"
          />
        </div>
      </section>  
    {/* PART E - WHO CAN APPLY */}
      <section className="py-20 bg-[#EFF6FF]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              कोण Apply करू शकतो?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Store,
                title: "Small & Medium Business",
                examples: [
                  "Traders / व्यापारी",
                  "Retailers / किरकोळ विक्रेते", 
                  "Wholesalers / घाऊक विक्रेते",
                  "Distributors"
                ]
              },
              {
                icon: Factory,
                title: "Manufacturing Units",
                examples: [
                  "Small factories",
                  "Workshop owners",
                  "Production units",
                  "Food processing"
                ]
              },
              {
                icon: Briefcase,
                title: "Service Businesses", 
                examples: [
                  "Contractors",
                  "Transport companies",
                  "Hospitality businesses",
                  "Professional firms"
                ]
              },
              {
                icon: User,
                title: "Individuals (OD)",
                examples: [
                  "Salaried employees",
                  "Property owners", 
                  "FD holders",
                  "Professionals"
                ]
              }
            ].map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-300 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-xl p-3 flex items-center justify-center mb-4">
                  <profile.icon className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {profile.title}
                </h3>
                <div className="space-y-2">
                  {profile.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PART F - INTERACTIVE CALCULATOR */}
      <section id="calculator-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              CC/OD Interest Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Calculate savings vs Traditional Loan
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT - Input Sliders */}
            <div className="space-y-8">
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Approved Limit: {formatCurrency(calculatorData.limit)}
                </label>
                <input
                  type="range"
                  min="100000"
                  max="100000000"
                  step="100000"
                  value={calculatorData.limit}
                  onChange={(e) => setCalculatorData({
                    ...calculatorData,
                    limit: Number(e.target.value),
                    utilized: Math.min(calculatorData.utilized, Number(e.target.value))
                  })}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-gray-500 text-sm mt-1">
                  <span>₹1L</span>
                  <span>₹10Cr</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Amount You'll Use: {formatCurrency(calculatorData.utilized)}
                  <span className="text-emerald-600 text-sm ml-2">Interest charged only on this</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max={calculatorData.limit}
                  step="10000"
                  value={calculatorData.utilized}
                  onChange={(e) => setCalculatorData({
                    ...calculatorData,
                    utilized: Number(e.target.value)
                  })}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-gray-500 text-sm mt-1">
                  <span>₹0</span>
                  <span>{formatCurrency(calculatorData.limit)}</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Interest Rate: {calculatorData.rate}% p.a.
                </label>
                <input
                  type="range"
                  min="8"
                  max="18"
                  step="0.5"
                  value={calculatorData.rate}
                  onChange={(e) => setCalculatorData({
                    ...calculatorData,
                    rate: Number(e.target.value)
                  })}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-gray-500 text-sm mt-1">
                  <span>8%</span>
                  <span>18%</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Period of Usage: {calculatorData.months} months
                </label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={calculatorData.months}
                  onChange={(e) => setCalculatorData({
                    ...calculatorData,
                    months: Number(e.target.value)
                  })}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-gray-500 text-sm mt-1">
                  <span>1 month</span>
                  <span>12 months</span>
                </div>
              </div>
            </div>

            {/* RIGHT - Results */}
            <div className="space-y-6">
              {/* CC/OD Interest */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Your CC/OD Interest</h3>
                <div className="text-5xl font-black mb-2">
                  ₹{Math.round(ccInterest).toLocaleString()}
                </div>
                <p className="text-emerald-100">
                  Per month: ₹{Math.round(monthlyInterest).toLocaleString()}
                </p>
              </div>

              {/* Traditional Loan Comparison */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">If you had taken Term Loan</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ₹{Math.round(traditionalTotal).toLocaleString()}
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  You Save: ₹{Math.round(savings).toLocaleString()}
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Breakdown</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Utilized Amount:</span>
                    <span className="font-semibold">{formatCurrency(calculatorData.utilized)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Unused Limit:</span>
                    <span className="font-semibold">{formatCurrency(calculatorData.limit - calculatorData.utilized)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest (Monthly):</span>
                    <span className="font-semibold">₹{Math.round(monthlyInterest).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest (Full Period):</span>
                    <span className="font-semibold">₹{Math.round(ccInterest).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Effective Annual Rate:</span>
                    <span className="font-semibold">{calculatorData.rate}%</span>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => navigate('/cc-od-finance/apply')}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors"
              >
                Apply for CC/OD Facility
              </button>
            </div>
          </div>
        </div>
      </section>      
{/* PART G - DOCUMENTS REQUIRED */}
      <section className="py-20 bg-gradient-to-br from-[#064e3b] to-[#0f172a]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Required Documents / आवश्यक कागदपत्रे
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* KYC Documents */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/8 backdrop-blur rounded-2xl p-6 border border-white/15"
            >
              <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                KYC Documents
              </div>
              <div className="space-y-3">
                {[
                  { doc: "PAN Card (Proprietor / Partners / Directors)", required: true },
                  { doc: "Aadhaar Card", required: true },
                  { doc: "Passport size Photos", required: true },
                  { doc: "Address Proof", required: true }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/85 text-sm">
                      {item.doc}
                      {item.required && <span className="text-red-400 ml-1">*</span>}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Documents */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/8 backdrop-blur rounded-2xl p-6 border border-white/15"
            >
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                Business Documents
              </div>
              <div className="space-y-3">
                {[
                  { doc: "GST Registration Certificate", required: true },
                  { doc: "Udyam / MSME Registration", required: false },
                  { doc: "Business Address Proof", required: true },
                  { doc: "Shop Act License", required: false },
                  { doc: "Partnership Deed / MOA / AOA", required: true },
                  { doc: "Last 2-3 Years ITR with CA Financials", required: true },
                  { doc: "Last 12 Month Bank Statement", required: true },
                  { doc: "Current Account Statement", required: true }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/85 text-sm">
                      {item.doc}
                      {item.required ? (
                        <span className="text-red-400 ml-1">*</span>
                      ) : (
                        <span className="text-gray-400 ml-1">Optional</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Collateral Documents */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/8 backdrop-blur rounded-2xl p-6 border border-white/15"
            >
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                Collateral Documents
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium text-sm mb-2">For CC (Stock Based):</h4>
                  <div className="space-y-2">
                    {[
                      { doc: "Stock Statement (Monthly)", required: true },
                      { doc: "Debtors List / Book Debts statement", required: true },
                      { doc: "Stock Insurance Policy", required: true }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/85 text-sm">
                          {item.doc}
                          {item.required && <span className="text-red-400 ml-1">*</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium text-sm mb-2">For OD (Property Based):</h4>
                  <div className="space-y-2">
                    {[
                      { doc: "Property Title Deed", required: true },
                      { doc: "Property Valuation Report", required: true },
                      { doc: "7/12 Utara", required: true },
                      { doc: "Property Insurance", required: true }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/85 text-sm">
                          {item.doc}
                          {item.required && <span className="text-red-400 ml-1">*</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium text-sm mb-2">For OD (FD Based):</h4>
                  <div className="space-y-2">
                    {[
                      { doc: "Fixed Deposit Receipt", required: true },
                      { doc: "FD Certificate", required: true }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/85 text-sm">
                          {item.doc}
                          {item.required && <span className="text-red-400 ml-1">*</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART H - CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 via-emerald-800 to-[#0f172a] relative overflow-hidden">
        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-sm ${
              i % 2 === 0 ? 'bg-emerald-400/20' : 'bg-green-300/15'
            }`}
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Working Capital की ज़रूरत है?
            </h2>
            <h3 className="text-2xl font-semibold text-emerald-200 mb-6">
              CC / OD Facility आत्ताच मिळवा
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our business finance expert will help you get the best CC/OD limit within 48 hours
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/cc-od-finance/apply')}
                className="bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                Apply Now
              </button>
              <a
                href="tel:+917758969798"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                Call Expert
              </a>
              <a
                href="https://wa.me/917758969798"
                className="bg-emerald-500 text-white px-8 py-4 rounded-xl hover:bg-emerald-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}