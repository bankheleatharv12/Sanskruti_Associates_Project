import { useState } from 'react';
import { Home, FileText, BarChart3, Calendar, FolderOpen, Bell, User, Headphones, LogOut, Search, ChevronDown, Phone, MessageCircle, Mail, Upload, CreditCard, TrendingUp } from 'lucide-react';
import { useNavigation } from './AppRouter';

export function UserDashboard() {
  const { navigateTo, scrollToSection } = useNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'loans', icon: CreditCard, label: 'My Active Loans' },
    { id: 'status', icon: BarChart3, label: 'Application Status' },
    { id: 'emi', icon: Calendar, label: 'EMI Due Dates' },
    { id: 'documents', icon: FolderOpen, label: 'Documents' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'support', icon: Headphones, label: 'Support / Contact Agent' },
  ];

  const summaryCards = [
    { label: 'Active Loans', value: '2', icon: CreditCard, color: '#2563EB' },
    { label: 'Pending Applications', value: '1', icon: FileText, color: '#F59E0B' },
    { label: 'Next EMI Due', value: '15 Jun 2025', icon: Calendar, color: '#EF4444' },
    { label: 'Documents Pending', value: '3', icon: FolderOpen, color: '#FBBF24' },
  ];

  const activeLoans = [
    { type: 'Home Loan', amount: '₹45,00,000', bank: 'HDFC Bank', emi: '₹32,500', dueDate: '15 Jun 2025', progress: 35 },
    { type: 'Personal Loan', amount: '₹5,00,000', bank: 'ICICI Bank', emi: '₹11,200', dueDate: '20 Jun 2025', progress: 60 },
  ];

  const emiDues = [
    { loanType: 'Home Loan', bank: 'HDFC', amount: '₹32,500', dueDate: '15 Jun 2025', status: 'Due Soon', statusColor: '#F59E0B' },
    { loanType: 'Personal Loan', bank: 'ICICI', amount: '₹11,200', dueDate: '20 Jun 2025', status: 'Upcoming', statusColor: '#2563EB' },
  ];

  const documents = [
    { name: 'Aadhaar Card', status: 'Uploaded', icon: '✅', color: '#16A34A' },
    { name: 'PAN Card', status: 'Uploaded', icon: '✅', color: '#16A34A' },
    { name: 'Salary Slip', status: 'Uploaded', icon: '✅', color: '#16A34A' },
    { name: 'Bank Statement', status: 'Expired', icon: '⚠️', color: '#F59E0B' },
    { name: 'ITR Document', status: 'Missing', icon: '❌', color: '#EF4444' },
  ];

  const notifications = [
    { text: 'Your Business Loan application is under review', time: '2 hrs ago', unread: true },
    { text: 'EMI payment of ₹32,500 received', time: '1 day ago', unread: false },
    { text: 'Bank Statement expired, please upload new one', time: '2 days ago', unread: true },
    { text: 'New loan offer available for you', time: '3 days ago', unread: false },
  ];

  const faqs = [
    { q: 'How do I check my loan status?', a: 'Go to Application Status section to track your loan application in real-time.' },
    { q: 'How can I upload documents?', a: 'Navigate to Documents section and click on Upload button for any missing document.' },
    { q: 'When will my EMI be debited?', a: 'EMI is auto-debited on the due date shown in EMI Due Dates section.' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(255, 255, 255, 0.95)' }}></div>
      </div>

      {/* Sidebar */}
      <aside className="fixed left-0 top-[70px] bottom-0 w-[260px] bg-[#0f172a] z-40 overflow-y-auto">
        <div className="p-4">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeMenu === item.id
                      ? 'bg-[#2563EB] text-white'
                      : 'text-white/70 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <button onClick={() => navigateTo('homepage')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-red-500/20 hover:text-red-400 transition-colors mt-8">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="relative z-10 ml-[260px] p-6 pt-6">
        {/* Top Header Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex items-center justify-between">
          <h1 className="text-2xl text-[#1F2937]">Welcome, Rahul 👋</h1>

          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-[#2563EB] focus:outline-none"
              />
            </div>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center text-white">
              RS
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {summaryCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.08)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${card.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-1">{card.label}</div>
                <div className="text-2xl text-[#1F2937]">{card.value}</div>
              </div>
            );
          })}
        </div>

        {/* My Active Loans */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl text-[#1F2937] mb-4">My Active Loans</h2>
          <div className="space-y-4">
            {activeLoans.map((loan, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg text-[#1F2937]">{loan.type}</h3>
                    <p className="text-sm text-gray-600">{loan.bank}</p>
                  </div>
                  <span className="px-3 py-1 bg-[#16A34A] text-white text-sm rounded-full">
                    Active
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Loan Amount</p>
                    <p className="text-lg text-[#1F2937]">{loan.amount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monthly EMI</p>
                    <p className="text-lg text-[#1F2937]">{loan.emi}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Next Due Date</p>
                    <p className="text-sm text-[#1F2937]">{loan.dueDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Repayment Progress</p>
                    <p className="text-sm text-[#16A34A]">{loan.progress}%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#16A34A] rounded-full"
                    style={{ width: `${loan.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Status Tracker */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl text-[#1F2937] mb-4">Application Status</h2>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="mb-6">
              <h3 className="text-lg text-[#1F2937]">Business Loan — ₹10,00,000</h3>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200"></div>
              {[
                { label: 'Application Submitted', status: 'completed' },
                { label: 'Documents Verified', status: 'completed' },
                { label: 'Bank Processing', status: 'current' },
                { label: 'Loan Approved', status: 'pending' },
                { label: 'Amount Disbursed', status: 'pending' },
              ].map((step, index) => (
                <div key={index} className="relative flex items-start gap-4 mb-6 last:mb-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      background:
                        step.status === 'completed'
                          ? '#16A34A'
                          : step.status === 'current'
                          ? '#2563EB'
                          : '#E5E7EB',
                    }}
                  >
                    {step.status === 'completed' && <span className="text-white text-xl">✓</span>}
                    {step.status === 'current' && (
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    )}
                    {step.status === 'pending' && <div className="w-3 h-3 bg-gray-400 rounded-full"></div>}
                  </div>
                  <div className="pt-2">
                    <p
                      className="text-sm"
                      style={{
                        color: step.status === 'pending' ? '#9CA3AF' : '#1F2937',
                        fontWeight: step.status === 'current' ? 600 : 400,
                      }}
                    >
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EMI Due Dates */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl text-[#1F2937] mb-4">Upcoming EMI Payments</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Loan Type</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Bank</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">EMI Amount</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Due Date</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {emiDues.map((emi, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-sm text-[#1F2937]">{emi.loanType}</td>
                    <td className="py-4 px-4 text-sm text-[#1F2937]">{emi.bank}</td>
                    <td className="py-4 px-4 text-sm text-[#1F2937]">{emi.amount}</td>
                    <td className="py-4 px-4 text-sm text-[#1F2937]">{emi.dueDate}</td>
                    <td className="py-4 px-4">
                      <span
                        className="px-3 py-1 text-xs rounded-full text-white"
                        style={{ background: emi.statusColor }}
                      >
                        {emi.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="px-4 py-2 bg-[#16A34A] text-white text-sm rounded-lg hover:bg-[#15803D]">
                        Pay Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl text-[#1F2937] mb-4">My Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <FolderOpen className="w-8 h-8 text-[#2563EB]" />
                  <span className="text-2xl">{doc.icon}</span>
                </div>
                <h3 className="text-sm text-[#1F2937] mb-2">{doc.name}</h3>
                <span
                  className="inline-block px-3 py-1 text-xs rounded-full text-white"
                  style={{ background: doc.color }}
                >
                  {doc.status}
                </span>
                {doc.status !== 'Uploaded' && (
                  <button className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 border border-[#2563EB] text-[#2563EB] text-sm rounded-lg hover:bg-blue-50">
                    <Upload className="w-4 h-4" />
                    Upload
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl text-[#1F2937] mb-4">Recent Notifications</h2>
          <div className="space-y-3">
            {notifications.map((notif, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border-l-4"
                style={{
                  borderLeftColor: notif.unread ? '#2563EB' : '#E5E7EB',
                  background: notif.unread ? 'rgba(37,99,235,0.05)' : '#F9FAFB',
                }}
              >
                <div className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#1F2937]">{notif.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl text-[#1F2937] mb-6">My Profile</h2>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center text-white text-3xl">
              RS
            </div>
            <div>
              <h3 className="text-xl text-[#1F2937]">Rahul Sharma</h3>
              <p className="text-sm text-gray-600">Member since Jan 2024</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <p className="text-sm text-[#1F2937]">rahul@email.com</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <p className="text-sm text-[#1F2937]">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">City</p>
              <p className="text-sm text-[#1F2937]">Pune</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">PAN</p>
              <p className="text-sm text-[#1F2937]">ABCDE1234F</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF]">
              Edit Profile
            </button>
            <button className="px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-blue-50">
              Change Password
            </button>
          </div>
        </div>

        {/* Support / Contact Agent */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl text-[#1F2937] mb-6">Contact Your Agent</h2>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center text-white text-xl">
                PD
              </div>
              <div>
                <h3 className="text-lg text-[#1F2937]">Priya Desai</h3>
                <p className="text-sm text-gray-600">Senior Loan Advisor</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm text-[#1F2937]">+91 7758 96 9798</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm text-[#1F2937]">priya@sanskruti.com</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D]">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D]">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF]">
                <Mail className="w-5 h-5" />
                Email
              </button>
            </div>
          </div>

          <h3 className="text-lg text-[#1F2937] mb-4">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="text-sm text-[#1F2937]">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      faqOpen === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
