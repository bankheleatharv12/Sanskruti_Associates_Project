import { useEffect, useState } from 'react';
import { useNavigation } from './AppRouter';
import { 
  CheckCircle2, 
  GraduationCap, 
  FileText, 
  User, 
  Building, 
  IndianRupee, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Calculator,
  Percent,
  Wallet,
  ThumbsUp,
  School,
  Users
} from 'lucide-react';

export function SchoolFinance() {
  const { navigateTo } = useNavigation();
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Apply Button */}
      {showStickyButton && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
          <button 
            onClick={() => navigateTo('school-finance-apply')}
            className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-2 font-semibold transition-all hover:scale-105 border border-blue-400"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* TOP HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Full width video hero */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/src/imports/Your_Role__You_are_a_202605182056_1_1.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white w-full">
          <div className="max-w-3xl">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-up">
              <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
              <span className="text-sm font-medium tracking-wide">Trusted by families</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
              School Finance
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Pay school fees, admission fees, books, hostel, transport and education expenses with easy repayment options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => navigateTo('school-finance-apply')}
                className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigateTo('school-finance-apply')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                Check Eligibility
                <Calculator className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Wave Background Divider (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.45,123.4,206.8,107.57,247.33,98.24,288.58,80.7,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* LOAN HIGHLIGHTS */}
      <section className="py-16 bg-white relative z-30 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Percent, label: 'Interest', value: 'Starts from 6.85% p.a.*' },
              { icon: Wallet, label: 'Loan Amount', value: 'Based on school fee and family eligibility' },
              { icon: Clock, label: 'Repayment', value: 'Flexible EMI options' },
              { icon: ThumbsUp, label: 'Approval', value: 'Quick approval' },
            ].map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 hover:-translate-y-1 transition-transform group">
                  <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-gray-500 text-sm mb-1 font-medium">{highlight.label}</div>
                  <div className="text-[#1F2937] font-semibold text-lg">{highlight.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Why Choose Our School Finance?</h2>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Easy online application',
              'Multiple lender comparison',
              'Expert support',
              'Flexible EMI',
              'No hidden charges',
              'Fast review'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                </div>
                <span className="text-[#1F2937] font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* WHO CAN APPLY & ELIGIBILITY */}
        <section className="py-20 bg-white">
          <div className="max-w-xl ml-auto px-4 sm:px-6 lg:px-12 w-full">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1F2937]">Who Can Apply</h2>
              </div>
              <ul className="space-y-4">
                {['Parent', 'Guardian', 'Student with co-applicant'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#16A34A]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1F2937]">Eligibility</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Confirmed admission',
                  'Parent/guardian co-applicant',
                  'Stable income',
                  'Good credit preferred',
                  'Collateral for large amounts',
                  'Eligibility varies by lender'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DOCUMENTS SECTION */}
        <section className="py-20 bg-gray-50 border-l border-gray-200">
          <div className="max-w-xl mr-auto px-4 sm:px-6 lg:px-12 w-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h2 className="text-3xl font-bold text-[#1F2937]">Required Documents</h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: 'Student',
                  icon: GraduationCap,
                  items: ['Student Aadhaar', 'Birth Proof', 'Previous marksheets']
                },
                {
                  title: 'Parent/Guardian',
                  icon: User,
                  items: ['PAN', 'Aadhaar', 'Passport photo', 'Address proof']
                },
                {
                  title: 'School',
                  icon: School,
                  items: ['Admission letter', 'School fee structure', 'Fee receipt']
                },
                {
                  title: 'Financial',
                  icon: IndianRupee,
                  items: ['Income proof', 'Bank statement 6 months', 'Salary slips or ITR']
                },
                {
                  title: 'Additional',
                  icon: Building,
                  items: ['Collateral documents if required']
                }
              ].map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                      <h3 className="text-lg font-semibold text-[#1F2937]">{category.title}</h3>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* BOTTOM CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#1D4ED8]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <GraduationCap className="w-16 h-16 text-white/90 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to finance your child's education?
          </h2>
          <button 
            onClick={() => navigateTo('school-finance-apply')}
            className="bg-white text-[#2563EB] hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-[0_10px_40px_rgba(0,0,0,0.2)] flex items-center justify-center gap-3 mx-auto"
          >
            Apply for School Finance
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
}
