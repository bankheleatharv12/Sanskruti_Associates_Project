import { Home as HomeIcon, ArrowRight, Users, FileText, BarChart3, CreditCard, Calculator, Phone, Info } from 'lucide-react';
import { useNavigation } from './AppRouter';

export function SiteMap() {
  const { navigateTo } = useNavigation();

  const pages = [
    { id: 'homepage', name: 'Homepage', icon: HomeIcon, color: '#2563EB' },
    { id: 'login', name: 'Login / Register', icon: Users, color: '#16A34A' },
    { id: 'loan-application', name: 'Loan Application Form', icon: FileText, color: '#F59E0B' },
    { id: 'user-dashboard', name: 'User Dashboard', icon: BarChart3, color: '#8B5CF6' },
    { id: 'emi-calculator', name: 'EMI Calculator', icon: Calculator, color: '#EC4899' },
    { id: 'leads-management', name: 'Leads Management (Admin)', icon: Users, color: '#EF4444' },
    { id: 'lead-details', name: 'Lead Details (Admin)', icon: FileText, color: '#EF4444' },
    { id: 'about', name: 'About Us', icon: Info, color: '#6B7280' },
    { id: 'contact', name: 'Contact Us', icon: Phone, color: '#6B7280' },
  ];

  const flows = [
    { from: 'Homepage', to: 'Login/Register', action: 'Click Login/Apply Now' },
    { from: 'Login/Register', to: 'User Dashboard', action: 'After Login/Register' },
    { from: 'Homepage', to: 'Loan Application', action: 'Click Apply Now' },
    { from: 'Loan Application', to: 'User Dashboard', action: 'After Submit' },
    { from: 'Homepage', to: 'EMI Calculator', action: 'Click EMI Calculator' },
    { from: 'Admin Dashboard', to: 'Leads Management', action: 'Click Leads Menu' },
    { from: 'Leads Management', to: 'Lead Details', action: 'Click View Lead' },
    { from: 'Homepage', to: 'About Us', action: 'Click About Us' },
    { from: 'Homepage', to: 'Contact Us', action: 'Click Contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl text-[#1F2937] mb-2">Site Map & Navigation Flow</h1>
            <p className="text-lg text-gray-600">Complete website structure and user flows</p>
          </div>
          <button
            onClick={() => navigateTo('homepage')}
            className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            Home
          </button>
        </div>

        {/* All Pages Grid */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl text-[#1F2937] mb-6">All Pages (13 Total)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, index) => {
              const Icon = page.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigateTo(page.id as any)}
                  className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#2563EB] hover:shadow-lg transition-all text-left group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ background: `${page.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: page.color }} />
                    </div>
                    <span className="text-sm text-gray-500">Page {index + 1}</span>
                  </div>
                  <h3 className="text-lg text-[#1F2937] group-hover:text-[#2563EB] transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">Click to navigate →</p>
                </button>
              );
            })}

            {/* Additional Pages */}
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm text-gray-500">Page 10</span>
              </div>
              <h3 className="text-lg text-[#1F2937]">Design System</h3>
              <button
                onClick={() => navigateTo('design-system' as any)}
                className="text-sm text-[#2563EB] mt-2 hover:underline"
              >
                View Design System →
              </button>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm text-gray-500">Page 11</span>
              </div>
              <h3 className="text-lg text-[#1F2937]">Site Map</h3>
              <p className="text-sm text-gray-500 mt-2">Current page</p>
            </div>
          </div>
        </section>

        {/* Navigation Flows */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl text-[#1F2937] mb-6">Navigation Flows</h2>
          <div className="space-y-4">
            {flows.map((flow, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1 bg-white px-4 py-3 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500">From</p>
                  <p className="text-[#1F2937]">{flow.from}</p>
                </div>
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-6 h-6 text-[#2563EB]" />
                  <p className="text-xs text-gray-500 mt-1 max-w-[120px] text-center">
                    {flow.action}
                  </p>
                </div>
                <div className="flex-1 bg-white px-4 py-3 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500">To</p>
                  <p className="text-[#1F2937]">{flow.to}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* User Journey */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl text-[#1F2937] mb-6">User Journey Paths</h2>

          <div className="space-y-8">
            {/* Customer Journey */}
            <div className="border-l-4 border-[#2563EB] pl-6">
              <h3 className="text-xl text-[#1F2937] mb-4">Customer Journey</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-4 py-2 bg-blue-100 text-[#2563EB] rounded-lg">Homepage</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-blue-100 text-[#2563EB] rounded-lg">Apply Now</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-blue-100 text-[#2563EB] rounded-lg">Loan Application</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-blue-100 text-[#2563EB] rounded-lg">Submit</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-green-100 text-[#16A34A] rounded-lg">Success</span>
              </div>
            </div>

            {/* Returning User Journey */}
            <div className="border-l-4 border-[#16A34A] pl-6">
              <h3 className="text-xl text-[#1F2937] mb-4">Returning User Journey</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-4 py-2 bg-green-100 text-[#16A34A] rounded-lg">Homepage</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-green-100 text-[#16A34A] rounded-lg">Login</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-green-100 text-[#16A34A] rounded-lg">User Dashboard</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-green-100 text-[#16A34A] rounded-lg">Track Status</span>
              </div>
            </div>

            {/* Admin Journey */}
            <div className="border-l-4 border-[#EF4444] pl-6">
              <h3 className="text-xl text-[#1F2937] mb-4">Admin Journey</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-4 py-2 bg-red-100 text-[#EF4444] rounded-lg">Admin Login</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-red-100 text-[#EF4444] rounded-lg">Leads Management</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-red-100 text-[#EF4444] rounded-lg">Lead Details</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="px-4 py-2 bg-red-100 text-[#EF4444] rounded-lg">Update Status</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
