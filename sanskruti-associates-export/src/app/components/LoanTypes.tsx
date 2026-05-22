import { Home, User, Briefcase, Car, Building2, CreditCard, GraduationCap } from 'lucide-react';
import { useNavigation } from './AppRouter';
const loanTypes = [
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Get your dream home with attractive interest rates starting from 8.5%',
  },
  {
    icon: User,
    title: 'Personal Loan',
    description: 'Instant personal loans up to ₹25 lakhs with minimal documentation',
  },
  {
    icon: Briefcase,
    title: 'Business Loan',
    description: 'Grow your business with flexible repayment options and quick approval',
  },
  {
    icon: Car,
    title: 'Car Loan',
    description: 'Drive your dream car with loans up to 90% on-road price',
  },
  {
    icon: Building2,
    title: 'Loan Against Property',
    description: 'Unlock the value of your property with competitive interest rates',
  },
  {
    icon: CreditCard,
    title: 'CC/OD',
    description: 'Cash credit and overdraft facilities for your business needs',
  },
  {
    icon: GraduationCap,
    title: 'School Finance',
    description: 'Finance school fees, admission, books, hostel and education expenses with easy EMI options.',
    interest: 'Starts from 6.85% p.a.',
    badge: 'Quick Approval',
    route: 'school-finance',
  },
];

export function LoanTypes() {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.5, filter: 'blur(2px)' }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(219, 234, 254, 0.75) 50%, rgba(255, 255, 255, 0.85) 100%)',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-4">Loan Solutions for Every Need</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of loan products designed to meet your financial goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan, index) => {
            const Icon = loan.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-200 group hover:-translate-y-1 shadow-lg relative"
              >
                {loan.badge && (
                  <span className="absolute top-6 right-6 bg-[#16A34A]/10 text-[#16A34A] text-xs font-semibold px-3 py-1 rounded-full">
                    {loan.badge}
                  </span>
                )}
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-[#1F2937] mb-3">{loan.title}</h3>
                <p className={`text-gray-600 leading-relaxed ${loan.interest ? 'mb-2' : 'mb-6'}`}>{loan.description}</p>
                {loan.interest && (
                  <p className="text-sm font-medium text-gray-900 mb-6">
                    Interest: <span className="text-[#16A34A] font-semibold">{loan.interest}</span>
                  </p>
                )}
                <button onClick={() => navigateTo(loan.route || 'loan-application')} className="text-[#2563EB] hover:text-[#1E40AF] transition-colors flex items-center gap-2">
                  Apply Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
