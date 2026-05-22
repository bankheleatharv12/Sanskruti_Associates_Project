import { useState } from 'react';
import { ArrowLeft, Edit, Phone, MessageCircle, Download, Eye, Check, X, Bell, ChevronDown, Mail, Calendar, LayoutDashboard, Users, CreditCard, BarChart3, Settings, LogOut } from 'lucide-react';
import { useNavigation } from './AppRouter';

export function LeadDetails() {
  const { navigateTo } = useNavigation();
  const [activeMenu, setActiveMenu] = useState('leads');
  const [status, setStatus] = useState('In Review');
  const [assignedAgent, setAssignedAgent] = useState('Priya Desai');
  const [remarks, setRemarks] = useState('');
  const [sendNotification, setSendNotification] = useState(true);

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'leads', icon: Users, label: 'Leads Management' },
    { id: 'loans', icon: CreditCard, label: 'Loan Applications' },
    { id: 'reports', icon: BarChart3, label: 'Reports & Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const documents = [
    { name: 'Aadhaar Card', size: '2.4 MB', uploaded: true },
    { name: 'PAN Card', size: '1.8 MB', uploaded: true },
    { name: 'Income Proof', size: '3.2 MB', uploaded: true },
    { name: 'Bank Statement', size: '5.1 MB', uploaded: false },
  ];

  const timeline = [
    { label: 'Application Submitted', date: '01 May 2026', status: 'completed' },
    { label: 'Documents Verified', date: '02 May 2026', status: 'completed' },
    { label: 'Under Review', date: '03 May 2026', status: 'current' },
    { label: 'Awaiting Approval', date: '', status: 'pending' },
  ];

  const bankOffers = [
    { bank: 'HDFC Bank', interest: '8.5%', emi: '₹32,450', isBest: true },
    { bank: 'ICICI Bank', interest: '8.7%', emi: '₹32,650', isBest: false },
    { bank: 'SBI', interest: '8.6%', emi: '₹32,550', isBest: false },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return { bg: '#16A34A', text: '#ffffff' };
      case 'Pending':
        return { bg: '#F59E0B', text: '#ffffff' };
      case 'Rejected':
        return { bg: '#EF4444', text: '#ffffff' };
      case 'In Review':
        return { bg: '#2563EB', text: '#ffffff' };
      default:
        return { bg: '#6B7280', text: '#ffffff' };
    }
  };

  const statusColors = getStatusColor(status);

  return (
    <div className="min-h-screen" style={{ background: '#EFF6FF' }}>
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
      <div className="ml-[260px] p-6">
        {/* Top Header Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex items-center justify-between">
          <h1 className="text-2xl text-[#1F2937]">Admin Panel</h1>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                5
              </span>
            </button>

            <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center text-white">
              AD
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('leads-management')} className="flex items-center gap-2 text-gray-600 hover:text-[#2563EB] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back to Leads</span>
            </button>
            <h2 className="text-3xl text-[#1F2937]">Lead Details</h2>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-blue-50 transition-colors">
              <Edit className="w-5 h-5" />
              Edit Lead
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D] transition-colors">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl text-[#1F2937] mb-6">Personal Information</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Full Name</p>
                  <p className="text-sm text-[#1F2937]">Rajesh Kumar</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone Number</p>
                  <p className="text-sm text-[#1F2937]">+91 98765 43210</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm text-[#1F2937]">rajesh.kumar@email.com</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Date of Birth</p>
                  <p className="text-sm text-[#1F2937]">15/03/1985</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">PAN Number</p>
                  <p className="text-sm text-[#1F2937]">ABCDE1234F</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Aadhaar Number</p>
                  <p className="text-sm text-[#1F2937]">**** **** 5678</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">City</p>
                  <p className="text-sm text-[#1F2937]">Mumbai</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Employment Type</p>
                  <p className="text-sm text-[#1F2937]">Salaried</p>
                </div>
              </div>
            </div>

            {/* Loan Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl text-[#1F2937] mb-6">Loan Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Loan Type</p>
                  <p className="text-sm text-[#1F2937]">Home Loan</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Loan Amount</p>
                  <p className="text-sm text-[#1F2937]">₹45,00,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Loan Tenure</p>
                  <p className="text-sm text-[#1F2937]">20 years</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Monthly Income</p>
                  <p className="text-sm text-[#1F2937]">₹1,20,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Existing EMI</p>
                  <p className="text-sm text-[#1F2937]">₹18,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Purpose</p>
                  <p className="text-sm text-[#1F2937]">Property Purchase</p>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl text-[#1F2937] mb-6">Uploaded Documents</h3>
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        📄
                      </div>
                      <div>
                        <p className="text-sm text-[#1F2937]">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.uploaded ? (
                        <>
                          <span className="text-[#16A34A]">
                            <Check className="w-5 h-5" />
                          </span>
                          <button className="p-2 text-[#2563EB] hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-[#2563EB] hover:bg-blue-50 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <span className="text-[#EF4444]">
                          <X className="w-5 h-5" />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl text-[#1F2937] mb-6">Activity Timeline</h3>
              <div className="relative">
                <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-gray-200"></div>
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-4 mb-6 last:mb-0">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background:
                          item.status === 'completed'
                            ? '#16A34A'
                            : item.status === 'current'
                            ? '#2563EB'
                            : '#E5E7EB',
                      }}
                    >
                      {item.status === 'completed' && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                      {item.status === 'current' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <p
                        className="text-sm"
                        style={{
                          color: item.status === 'pending' ? '#9CA3AF' : '#1F2937',
                          fontWeight: item.status === 'current' ? 600 : 400,
                        }}
                      >
                        {item.label}
                      </p>
                      {item.date && (
                        <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Update */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl text-[#1F2937] mb-6">Update Status</h3>

              <div className="flex justify-center mb-6">
                <span
                  className="px-6 py-3 text-lg rounded-full"
                  style={{ background: statusColors.bg, color: statusColors.text }}
                >
                  {status}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#374151] mb-2">Change Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                  >
                    <option>Pending</option>
                    <option>In Review</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Remarks</label>
                  <textarea
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="Add remarks or notes..."
                    className="w-full h-24 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sendNotification}
                    onChange={(e) => setSendNotification(e.target.checked)}
                    className="w-5 h-5 accent-[#2563EB]"
                  />
                  <span className="text-sm text-[#1F2937]">Notify customer via SMS</span>
                </label>

                <button className="w-full h-12 bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg transition-colors">
                  Update Status
                </button>
              </div>
            </div>

            {/* Assign Agent */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl text-[#1F2937] mb-6">Assign To Agent</h3>

              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Currently Assigned To</p>
                <p className="text-sm text-[#1F2937]">{assignedAgent}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#374151] mb-2">Select Agent</label>
                  <select
                    value={assignedAgent}
                    onChange={(e) => setAssignedAgent(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                  >
                    <option>Priya Desai</option>
                    <option>Rahul Singh</option>
                    <option>Amit Kumar</option>
                    <option>Sneha Patel</option>
                  </select>
                </div>

                <button className="w-full h-12 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors">
                  Assign Agent
                </button>
              </div>
            </div>

            {/* Bank Offers */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl text-[#1F2937] mb-6">Recommended Banks</h3>
              <div className="space-y-3">
                {bankOffers.map((offer, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border-2 transition-all"
                    style={{
                      borderColor: offer.isBest ? '#16A34A' : '#E5E7EB',
                      background: offer.isBest ? '#F0FDF4' : 'white',
                    }}
                  >
                    {offer.isBest && (
                      <span className="inline-block px-3 py-1 bg-[#16A34A] text-white text-xs rounded-full mb-2">
                        Best Offer
                      </span>
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm text-[#1F2937]">{offer.bank}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                      <div>
                        <p className="text-gray-500">Interest Rate</p>
                        <p className="text-[#1F2937]">{offer.interest}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">EMI</p>
                        <p className="text-[#1F2937]">{offer.emi}</p>
                      </div>
                    </div>
                    <button className="w-full h-10 bg-[#2563EB] hover:bg-[#1E40AF] text-white text-sm rounded-lg transition-colors">
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl text-[#1F2937] mb-6">Contact Customer</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-sm text-[#1F2937]">+91 98765 43210</p>
                </div>

                <button className="w-full flex items-center justify-center gap-2 h-12 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>

                <button className="w-full flex items-center justify-center gap-2 h-12 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>

                <button className="w-full flex items-center justify-center gap-2 h-12 bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg transition-colors">
                  <Mail className="w-5 h-5" />
                  Send Email
                </button>

                <button className="w-full flex items-center justify-center gap-2 h-12 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-blue-50 transition-colors">
                  <Calendar className="w-5 h-5" />
                  Schedule Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
