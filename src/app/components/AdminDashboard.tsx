import { useState } from 'react';
import { Home, FileText, CheckCircle, Clock, XCircle, Users, Building2, UserCheck, BarChart3, Settings, Bell, ChevronDown, Eye, Edit, Plus, Phone, Download, TrendingUp } from 'lucide-react';

export function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'all-leads', icon: FileText, label: 'All Leads' },
    { id: 'approved', icon: CheckCircle, label: 'Approved Loans' },
    { id: 'pending', icon: Clock, label: 'Pending Loans' },
    { id: 'rejected', icon: XCircle, label: 'Rejected Loans' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'banks', icon: Building2, label: 'Bank Management' },
    { id: 'agents', icon: UserCheck, label: 'Agents' },
    { id: 'reports', icon: BarChart3, label: 'Reports' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const statsCards = [
    { title: 'Total Leads', value: '248', icon: FileText, color: '#2563EB', bgColor: 'rgba(37,99,235,0.1)', growth: '+12%' },
    { title: 'Approved', value: '142', icon: CheckCircle, color: '#16A34A', bgColor: 'rgba(22,163,74,0.1)', growth: '+8%' },
    { title: 'Pending', value: '67', icon: Clock, color: '#F59E0B', bgColor: 'rgba(245,158,11,0.1)', growth: '27%' },
    { title: 'Rejected', value: '39', icon: XCircle, color: '#EF4444', bgColor: 'rgba(239,68,68,0.1)', growth: '16%' },
  ];

  const recentLeads = [
    { name: 'Shekhar Shinde', phone: '+91 7758969798', loanType: 'Home Loan', amount: 'â‚¹45,00,000', status: 'Approved', date: '05 May 2026' },
    { name: 'Shekhar Shinde', phone: '+91 7758969798', loanType: 'Personal & Personal & Business Loan', amount: 'â‚¹5,00,000', status: 'Pending', date: '04 May 2026' },
    { name: 'Shekhar Shinde', phone: '+91 7758969798', loanType: 'Personal & Business Loan', amount: 'â‚¹25,00,000', status: 'Approved', date: '04 May 2026' },
    { name: 'Shekhar Shinde', phone: '+91 7758969798', loanType: 'Car Loan', amount: 'â‚¹8,00,000', status: 'Pending', date: '03 May 2026' },
    { name: 'Shekhar Shinde', phone: '+91 7758969798', loanType: 'Machinery Loan', amount: 'â‚¹12,00,000', status: 'Rejected', date: '03 May 2026' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return { bg: '#16A34A', text: 'white' };
      case 'Pending':
        return { bg: '#F59E0B', text: 'white' };
      case 'Rejected':
        return { bg: '#EF4444', text: 'white' };
      default:
        return { bg: '#6B7280', text: 'white' };
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-[#0f172a] z-50">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/src/imports/ChatGPT_Image_May_3,_2026,_08_05_15_PM.png"
              alt="Logo"
              className="h-10 w-auto"
              style={{ mixBlendMode: 'lighten' }}
            />
            <div>
              <div className="text-white text-sm">Sanskruti Associates</div>
              <div className="text-white/60 text-xs">Admin Panel</div>
            </div>
          </div>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                  isActive
                    ? 'bg-[rgba(22,163,74,0.15)] border-l-4 border-[#16A34A] text-white'
                    : 'text-white/70 hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" style={{ color: isActive ? '#16A34A' : 'currentColor' }} />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-[260px] flex-1">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-[#1F2937]">Dashboard</h1>

            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center text-white">
                  SA
                </div>
                <div className="text-sm">
                  <div className="text-[#1F2937]">Super Admin</div>
                  <div className="text-gray-500 text-xs">sanskruti.sss1108@gmail.com</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">{card.title}</p>
                      <p className="text-3xl text-[#1F2937]">{card.value}</p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: card.bgColor }}
                    >
                      <Icon className="w-6 h-6" style={{ color: card.color }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs" style={{ color: card.color }}>
                    <TrendingUp className="w-4 h-4" />
                    <span>{card.growth} from last month</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Line Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
              <h3 className="text-lg text-[#1F2937] mb-6">Loan Applications This Month</h3>
              <div className="h-64 flex items-end justify-between gap-4">
                {[65, 85, 72, 95, 88, 78, 92, 70, 82, 90, 75, 85].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-lg transition-all hover:opacity-80"
                      style={{
                        height: `${height}%`,
                        background: index % 2 === 0 ? '#2563EB' : '#16A34A',
                      }}
                    ></div>
                    <span className="text-xs text-gray-500">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donut Chart */}
            <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
              <h3 className="text-lg text-[#1F2937] mb-6">Loan Type Distribution</h3>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-40 h-40">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#2563EB" strokeWidth="20" strokeDasharray="75 251" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#16A34A" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-75" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="20" strokeDasharray="40 251" strokeDashoffset="-125" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#EF4444" strokeWidth="20" strokeDasharray="35 251" strokeDashoffset="-165" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="20" strokeDasharray="51 251" strokeDashoffset="-200" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { label: 'Home Loan', color: '#2563EB', percent: '30%' },
                  { label: 'Personal & Personal & Business Loan', color: '#16A34A', percent: '20%' },
                  { label: 'Personal & Business Loan', color: '#F59E0B', percent: '16%' },
                  { label: 'Car Loan', color: '#EF4444', percent: '14%' },
                  { label: 'Others', color: '#8B5CF6', percent: '20%' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: item.color }}></div>
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-gray-500">{item.percent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Leads Table */}
          <div className="bg-white rounded-2xl p-6 mb-8" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-[#1F2937]">Recent Leads</h3>
              <button className="text-sm text-[#2563EB] hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Name</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Phone</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Loan Type</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Amount</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead, index) => {
                    const statusColor = getStatusColor(lead.status);
                    return (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50"
                        style={{ background: index % 2 === 0 ? 'white' : '#F9FAFB' }}
                      >
                        <td className="py-4 px-4 text-sm text-[#1F2937]">{lead.name}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{lead.phone}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{lead.loanType}</td>
                        <td className="py-4 px-4 text-sm text-[#1F2937]">{lead.amount}</td>
                        <td className="py-4 px-4">
                          <span
                            className="inline-block px-3 py-1 rounded-full text-xs"
                            style={{ background: statusColor.bg, color: statusColor.text }}
                          >
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">{lead.date}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-blue-50 rounded-lg text-[#2563EB]">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-600">Showing 1 to 5 of 248 entries</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Previous</button>
                <button className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm hover:bg-[#1E40AF]">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <h3 className="text-lg text-[#1F2937] mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D] transition-colors">
                <Plus className="w-5 h-5" />
                Add New Lead
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors">
                <Phone className="w-5 h-5" />
                Follow Up Calls
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <BarChart3 className="w-5 h-5" />
                Generate Report
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <Download className="w-5 h-5" />
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
