import { motion } from "motion/react";
import { 
  TrendingDown,
  IndianRupee,
  Clock,
  MapPin,
  Building2,
  Store,
  Landmark,
  Map,
  Repeat,
  Building,
  HardHat,
  User,
  Users,
  Briefcase,
  Stethoscope,
  BedDouble,
  LayoutGrid,
  Home,
  UtensilsCrossed,
  Key,
  Hammer,
  Zap,
  RefreshCw,
  Shield,
  ChevronDown
} from "lucide-react";
import { useNavigate } from "react-router";

export function ConstructionLoan() {
  const navigate = useNavigate();

  const scrollToForm = () => {
    const formElement = document.getElementById('construction-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/construction-loan/apply');
    }
  };

  const highlightBadges = [
    {
      icon: TrendingDown,
      value: "12% p.a.",
      sub: "Starting Rate"
    },
    {
      icon: IndianRupee,
      value: "Up to Rs. 100 Cr",
      sub: "Loan Amount"
    },
    {
      icon: Clock,
      value: "5-7 Years",
      sub: "Tenure"
    },
    {
      icon: MapPin,
      value: "Mumbai & Pune",
      sub: "50km radius"
    }
  ];

  const loanProducts = [
    {
      icon: Building2,
      title: "Residential Construction",
      desc: "Funding for housing projects, apartments and residential complexes with 90% completion required",
      tag: "Most Popular"
    },
    {
      icon: Store,
      title: "Commercial Construction",
      desc: "Finance for shops, offices, commercial complexes and mixed-use developments",
      tag: "High Ticket"
    },
    {
      icon: Landmark,
      title: "Inventory Funding",
      desc: "Pure inventory funding for builders with min 4 completed projects. LTV up to 55%",
      tag: "Builder Special"
    },
    {
      icon: Map,
      title: "NA Land Funding",
      desc: "Loan against NA land for builder and normal profiles. LTV 40%, up to Rs. 5 Cr",
      tag: "Land Finance"
    },
    {
      icon: Repeat,
      title: "Balance Transfer",
      desc: "Transfer existing construction loan from banks or Patsanstha at better rates",
      tag: "BT Available"
    },
    {
      icon: Building,
      title: "Special Property Finance",
      desc: "Hospital, hotel, PG, restaurant, lodge and mixed-use property construction funding",
      tag: "Special Props"
    }
  ];

  const customerTypes = [
    {
      icon: HardHat,
      title: "Builder / Developer",
      desc: "Residential or commercial builder"
    },
    {
      icon: User,
      title: "Individual Owner",
      desc: "Self construction on own plot"
    },
    {
      icon: Users,
      title: "Partnership Firm",
      desc: "Construction partnership firms"
    },
    {
      icon: Building2,
      title: "Private Limited Co.",
      desc: "Registered Pvt Ltd builder company"
    },
    {
      icon: Briefcase,
      title: "LLP",
      desc: "Limited liability partnership"
    },
    {
      icon: Stethoscope,
      title: "Hospital / Nursing Home",
      desc: "Healthcare construction projects"
    },
    {
      icon: BedDouble,
      title: "Hotel / Lodge",
      desc: "Hospitality property construction"
    },
    {
      icon: Store,
      title: "Commercial Developer",
      desc: "Shops, offices, complexes"
    },
    {
      icon: LayoutGrid,
      title: "Mixed Use Developer",
      desc: "Residential + commercial mix"
    }
  ];

  const eligibilityCriteria = [
    "Min 4 Projects Completed (Builders)",
    "90% Construction Completion",
    "LTV: 40-55% of Project Value",
    "Mumbai & Pune — 50km Radius",
    "Basic Amenities in Place",
    "Clean CIBIL History Required"
  ];

  const specialProperties = [
    {
      icon: Stethoscope,
      title: "Hospital & Nursing Home"
    },
    {
      icon: Home,
      title: "PG Property"
    },
    {
      icon: BedDouble,
      title: "Hotel & Lodge"
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant & Bar"
    },
    {
      icon: Building2,
      title: "Mangal Karyalaya"
    },
    {
      icon: LayoutGrid,
      title: "Mixed Residential + Commercial"
    },
    {
      icon: Key,
      title: "Builder Rented Property"
    },
    {
      icon: Hammer,
      title: "Auction Property"
    }
  ];

  const keyFeatures = [
    {
      icon: Zap,
      title: "High LTV",
      desc: "Up to 55% LTV on eligible projects",
      color: "yellow"
    },
    {
      icon: IndianRupee,
      title: "Large Ticket Size",
      desc: "Loans from Rs. 10 Lakhs to Rs. 100 Crore",
      color: "green"
    },
    {
      icon: RefreshCw,
      title: "BT Available",
      desc: "Transfer from banks and Patsanstha",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Special Properties",
      desc: "Hotels, hospitals, PG and mixed-use funded",
      color: "yellow"
    },
    {
      icon: MapPin,
      title: "Mumbai & Pune",
      desc: "50km radius coverage from city centers",
      color: "green"
    },
    {
      icon: Clock,
      title: "Flexible Tenure",
      desc: "5 to 7 years repayment for inventory funding",
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          src="/Fintech.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)' }} />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Floating Badge - Properly positioned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center mb-6"
          >
            <div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md"
              style={{
                backgroundColor: 'rgba(22,163,74,0.15)',
                border: '1px solid rgba(22,163,74,0.40)'
              }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">Trusted by Builders & Developers</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-7xl font-black text-white mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Construction &<br />
            Builder Finance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg max-w-3xl mx-auto text-center mb-8"
            style={{ color: 'rgba(255,255,255,0.80)' }}
          >
            Funding for residential, commercial and mixed-use construction projects. Available for builders, developers and individual property owners across Mumbai and Pune region
          </motion.p>

          {/* Highlight Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
          >
            {highlightBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="rounded-2xl px-5 py-3 text-center backdrop-blur-md"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.20)'
                }}
              >
                <badge.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-white font-bold text-lg">{badge.value}</div>
                <div className="text-white/60 text-xs">{badge.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/construction-loan/apply')}
              className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300"
            >
              Apply Now
            </button>
            <button
              onClick={scrollToForm}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Check Eligibility
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </section>

      {/* Section A - Loan Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Construction Finance Products
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right funding solution for your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-yellow-400 relative group cursor-pointer"
              >
                <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                  {product.tag}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>    
  {/* Section B - Who Can Apply */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Who Can Apply?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {customerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/8 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {type.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Eligibility Criteria */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {eligibilityCriteria.map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 text-center"
              >
                <span className="text-white text-sm font-medium">{criteria}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section C - Special Properties */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-600">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Special Properties We Finance
            </h2>
            <p className="text-xl text-gray-800">
              We fund projects that others typically decline
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialProperties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500 group cursor-pointer"
              >
                <property.icon className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 group-hover:rotate-5 transition-all" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {property.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D - Documents Required */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Documents Required
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Tab 1 - KYC Documents */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                KYC Documents
              </div>
              <ul className="space-y-3">
                {[
                  'PAN Card — Applicant *',
                  'Aadhaar Card *',
                  'Address Proof *',
                  'Passport Size Photo *',
                  'Co-applicant PAN (Optional)',
                  'Co-applicant Aadhaar (Optional)'
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className={`text-sm ${doc.includes('*') ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tab 2 - Business Documents */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                Business / Builder Documents
              </div>
              <ul className="space-y-3">
                {[
                  'Builder Registration Certificate *',
                  'Company Registration / MOA AOA * (if Pvt Ltd or LLP)',
                  'GST Registration Certificate *',
                  'Partnership Deed (if applicable)',
                  'RERA Registration Certificate * (for residential projects)',
                  'Previous Project Completion Certificates (Min 4 for builders) *',
                  'Contractor Agreement (Optional)'
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className={`text-sm ${doc.includes('*') ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tab 3 - Financial Documents */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                Financial Documents
              </div>
              <ul className="space-y-3">
                {[
                  'ITR Last 2-3 Years *',
                  'Bank Statements Last 12 Months * (All accounts)',
                  'Audited Balance Sheet Last 2 Years *',
                  'Profit and Loss Statement *',
                  'GST Returns Last 1 Year *',
                  'Existing Loan Details (if any)',
                  'CA Certified Net Worth Statement'
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className={`text-sm ${doc.includes('*') ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tab 4 - Property Documents */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                Property / Project Documents
              </div>
              <ul className="space-y-3">
                {[
                  'Property Title / Ownership Papers *',
                  'NA Order / NOC from Authority *',
                  'Approved Building Plan *',
                  'IOD — Intimation of Disapproval (Mumbai projects) *',
                  'CC — Commencement Certificate *',
                  'Project Report with Cost Estimate *',
                  'Architect Certificate for Completion Stage *',
                  'Property Valuation Report *',
                  'Search Report and Title Certificate *',
                  'Encumbrance Certificate *',
                  '7/12 Utara (for land parcels)',
                  'Auction Property Papers (if auction property)'
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className={`text-sm ${doc.includes('*') ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section E - Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose This Product?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                  feature.color === 'yellow' ? 'bg-yellow-100' :
                  feature.color === 'green' ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <feature.icon className={`w-8 h-8 ${
                    feature.color === 'yellow' ? 'text-yellow-600' :
                    feature.color === 'green' ? 'text-green-600' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Fund Your Construction Project?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Talk to our construction finance expert today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => navigate('/construction-loan/apply')}
                className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300"
              >
                Apply for Construction Loan
              </button>
              <a
                href="tel:+917758969798"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Call Expert Now
              </a>
            </div>

            <p className="text-white/60 text-sm max-w-3xl mx-auto leading-relaxed">
              *Rates start from 12% p.a. Final rate depends on project profile, LTV, location and lender. Available in Mumbai and Pune region (50km radius). Subject to lender approval and project eligibility.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}