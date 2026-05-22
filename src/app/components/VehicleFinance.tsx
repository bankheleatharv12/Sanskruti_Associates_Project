import { motion } from 'motion/react';
import {
  Zap,
  FileCheck,
  TrendingDown,
  Shield,
  Users,
  Car,
  Sparkles,
  RefreshCw,
  ChevronDown
} from 'lucide-react';
import { useNavigation } from './AppRouter';

const heroVideoSrc = '/Commercial.mp4';

const features = [
  {
    icon: Zap,
    title: 'Fast Approval',
    desc: 'Loan sanction within 48 hours',
    color: 'blue'
  },
  {
    icon: FileCheck,
    title: 'Minimal Documents',
    desc: 'कमीत कमी कागदपत्र — simple process',
    color: 'green'
  },
  {
    icon: TrendingDown,
    title: 'Low Interest Rates',
    desc: 'Attractive व्याजदर starting 7.5%',
    color: 'blue'
  },
  {
    icon: Shield,
    title: 'No Hidden Fees',
    desc: 'कोणतीही hidden fee नाही',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Expert Support',
    desc: 'Dedicated loan expert for you',
    color: 'blue'
  },
  {
    icon: Car,
    title: 'New & Old Vehicles',
    desc: 'नवीन व जुन्या दोन्ही वाहनांवर कर्ज',
    color: 'green'
  }
];

const vehicleTypes = [
  {
    emoji: '🚛',
    title: 'Commercial Vehicles',
    marathi: 'व्यावसायिक वाहने',
    examples: [
      'Truck / ट्रक',
      'Tempo / टेम्पो',
      'Pickup / पिकअप',
      'Cargo / मालवाहतूक',
      'Mini Truck / छोटा हत्ती',
      'Mahindra Dost / दोस्त',
      'Super Carry'
    ]
  },
  {
    emoji: '🚜',
    title: 'Agricultural Vehicles',
    marathi: 'शेती वाहने',
    examples: [
      'Tractor / ट्रॅक्टर',
      'Farm Equipment',
      'Power Tiller',
      'Harvester'
    ]
  },
  {
    emoji: '🏗️',
    title: 'Construction Machines',
    marathi: 'बांधकाम यंत्रे',
    examples: [
      'JCB / जेसीबी',
      'Excavator / खोदकाम यंत्र',
      'Loader / लोडर',
      'Bulldozer',
      'Crane / क्रेन',
      'Concrete Mixer',
      'Dump Truck'
    ]
  }
];

const applicantDocs = [
  '2 Photos (२ फोटो)',
  'Voter ID / Aadhaar Card (मतदान कार्ड / आधार कार्ड)',
  'Driving License / PAN Card (ड्रा. लायसन्स / पॅनकार्ड)',
  'Bank 3 CTS 2010 Cheques (बँक ३ चेक CTS 2010)',
  'Bank Passbook Xerox (बँक पासबुक झेरॉक्स)',
  'Khanpatti Receipt / Light Bill (खणपट्टी पावती / लाईटबील)',
  '7/12 (8A) / Parcha Utara (७/१२ (८अ) / परचा उतारा)'
];

const coApplicantDocs = [
  '2 Photos (२ फोटो)',
  'Driving License (ड्रा. लायसन्स)',
  'Voter ID Card / Aadhaar (मतदान कार्ड / आधार कार्ड)',
  'PAN Card Xerox (पॅनकार्ड झेरॉक्स)'
];

const vehicleDocs = [
  'RC Book (वाहनाचे आर.सी. बुक)',
  'Insurance (विमा)',
  'Tax Receipt (टॅक्स पावती)',
  'Permit (if applicable)',
  'Fitness Certificate'
];

export function VehicleFinance() {
  const { navigateTo } = useNavigation();

  const scrollToForm = () => {
    const formElement = document.getElementById('vehicle-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo('/vehicle-finance/apply');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          src={heroVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#1e3a8a]/60 to-[#0f172a]/90" />

        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute h-2 w-2 rounded-full blur-sm ${i % 2 === 0 ? 'bg-[#2563EB]/30' : 'bg-[#16A34A]/20'
              }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
            >
              🚗 Vehicle Finance Solutions
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="mb-2 text-5xl font-black text-white sm:text-7xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                वाहन कर्ज
              </h1>
              <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Vehicle Finance Solutions
              </h2>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mx-auto mb-8 max-w-2xl text-center text-lg text-white/80"
            >
              सर्व प्रकारच्या नवीन व जुन्या वाहनांवर कर्ज सुविधा<br />
              कमीत कमी कागदपत्र | कमी व्याजदर | त्वरित मंजुरी
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <button
                onClick={scrollToForm}
                className="rounded-xl bg-[#16A34A] px-8 py-4 font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:bg-[#15803D] hover:shadow-xl"
              >
                Apply Now
              </button>
              <button
                onClick={() => navigateTo('/vehicle-finance/apply')}
                className="rounded-xl border-2 border-white/40 px-8 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                Check Eligibility
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-white/60" />
        </motion.div>
      </section>

      {/* Quick Stats Bar */}
      <section className="border-y border-white/10 bg-[#0f172a] py-8">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { number: '₹50K – ₹2Cr', label: 'Loan Range' },
              { number: '48 Hours', label: 'Fast Approval' },
              { number: '7.5% p.a.', label: 'Starting Rate' },
              { number: '10+ Years', label: 'Max Tenure' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#EFF6FF] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Us for Vehicle Finance?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${feature.color === 'blue' ? 'bg-blue-50' : 'bg-green-50'
                    }`}>
                    <Icon className={`h-6 w-6 ${feature.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                      }`} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              We Finance All Vehicle Types
            </h2>
            <p className="text-xl text-blue-100">सर्व प्रकारच्या वाहनांवर कर्ज उपलब्ध</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {vehicleTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-white/15 bg-white/8 p-8 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-white/30 hover:bg-white/12 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
              >
                <div className="mb-6 text-6xl">{type.emoji}</div>
                <h3 className="mb-2 text-2xl font-bold text-white">{type.title}</h3>
                <p className="mb-6 text-lg text-blue-100">{type.marathi}</p>

                <div className="space-y-3">
                  {type.examples.map((example) => (
                    <div key={example} className="flex items-center gap-2 text-sm text-white/90">
                      <span className="text-[#16A34A]">✓</span>
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* New vs Old Vehicle Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              New Vehicle or Old Vehicle?
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* New Vehicle Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group cursor-pointer rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg transition-all duration-300 hover:border-[#2563EB] hover:shadow-xl"
              onClick={() => navigateTo('/vehicle-finance/apply')}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white">
                <Sparkles className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-gray-900">New Vehicle</h3>
              <p className="mb-6 text-lg text-blue-600">नवीन वाहन कर्ज</p>

              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Up to 90% of vehicle cost
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Competitive interest rates
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Longer tenure options
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Manufacturer tie-ups
                </li>
              </ul>

              <button className="w-full rounded-xl bg-[#2563EB] py-3 text-white transition-all duration-300 hover:bg-[#1E40AF]">
                Apply for New Vehicle
              </button>
            </motion.div>

            {/* Old Vehicle Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group cursor-pointer rounded-3xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-lg transition-all duration-300 hover:border-[#16A34A] hover:shadow-xl"
              onClick={() => navigateTo('/vehicle-finance/apply')}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-[#16A34A] group-hover:bg-[#16A34A] group-hover:text-white">
                <RefreshCw className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-gray-900">Old / Used Vehicle</h3>
              <p className="mb-6 text-lg text-green-600">जुनी वाहन कर्ज</p>

              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Up to 80% of vehicle value
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Fast valuation process
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Flexible tenure
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  All brands accepted
                </li>
              </ul>

              <button className="w-full rounded-xl bg-[#16A34A] py-3 text-white transition-all duration-300 hover:bg-[#15803D]">
                Apply for Old Vehicle
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="bg-[#EFF6FF] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Required Documents / आवश्यक कागदपत्रे
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Applicant Documents */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                Applicant (कर्जदार - गाडी मालक)
              </div>

              <ul className="space-y-3">
                {applicantDocs.map((doc) => (
                  <li key={doc} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 text-green-500">✓</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Co-applicant Documents */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-2 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                Co-applicant (सहकर्जदार - घरातील व्यक्ती)
              </div>
              <p className="mb-4 text-xs text-gray-500">(आई/वडील/पत्नी/भाऊ)</p>

              <ul className="space-y-3">
                {coApplicantDocs.map((doc) => (
                  <li key={doc} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 text-green-500">✓</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vehicle Documents */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
                Vehicle Documents (गाडीचे पेपर)
              </div>

              <ul className="space-y-3">
                {vehicleDocs.map((doc) => (
                  <li key={doc} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 text-green-500">✓</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="vehicle-form" className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Your Vehicle Finance?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Start your application now and get approved within 48 hours
            </p>

            <button
              onClick={() => navigateTo('/vehicle-finance/apply')}
              className="rounded-xl bg-[#16A34A] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#15803D] hover:shadow-xl"
            >
              Apply for Vehicle Finance
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}