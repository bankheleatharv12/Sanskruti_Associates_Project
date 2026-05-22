import { useState } from 'react';
import { ArrowLeft, Check, Clock, Bell, Send, Phone, Download, Plus, LayoutDashboard, Users, CreditCard, BarChart3, Settings, LogOut } from 'lucide-react';

export function LoanStatusUpdate() {
  const [activeMenu, setActiveMenu] = useState('leads');
  const [selectedStatus, setSelectedStatus] = useState('Sent to Bank');
  const [statusReason, setStatusReason] = useState('');
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [whatsappEnabled, setWhatsappEnabled] = useState(false);
  const [messageTemplate, setMessageTemplate] = useState('Status Update Message');
  const [commType, setCommType] = useState('Sent');
  const [commMessage, setCommMessage] = useState('');
  const [newNote, setNewNote] = useState('');

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'leads', icon: Users, label: 'Leads Management' },
    { id: 'loans', icon: CreditCard, label: 'Loan Applications' },
    { id: 'reports', icon: BarChart3, label: 'Reports & Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const statusPipeline = [
    { label: 'New Lead', status: 'completed', date: '01 Jun 2025' },
    { label: 'Documents Collected', status: 'completed', date: '02 Jun 2025' },
    { label: 'Verification Done', status: 'completed', date: '03 Jun 2025' },
    { label: 'Sent to Bank', status: 'current', date: '05 Jun 2025' },
    { label: 'Bank Processing', status: 'pending', date: '' },
    { label: 'Loan Sanctioned', status: 'pending', date: '' },
    { label: 'Amount Disbursed', status: 'pending', date: '' },
    { label: 'Case Closed', status: 'pending', date: '' },
  ];

  const communications = [
    { date: '07 Jun 2025', type: 'Call', badge: '#F59E0B', message: 'Called loan officer Mr. Anil Patil, processing in progress', by: 'Agent Priya' },
    { date: '06 Jun 2025', type: 'Received', badge: '#16A34A', message: 'Bank acknowledged receipt, assigned ref: HDFC/2025/45678', by: 'System' },
    { date: '05 Jun 2025', type: 'Sent', badge: '#2563EB', message: 'Application documents submitted to HDFC Pune branch', by: 'Admin Suresh' },
  ];

  const statusHistory = [
    { status: 'Sent to Bank', date: '05 Jun 2025 10:30 AM', by: 'Admin Suresh', reason: 'All documents verified and complete', color: '#2563EB' },
    { status: 'Under Verification', date: '03 Jun 2025 02:15 PM', by: 'Admin Priya', reason: 'Documents received from client', color: '#16A34A' },
    { status: 'Documents Pending', date: '02 Jun 2025 11:00 AM', by: 'System', reason: 'Application submitted by client', color: '#16A34A' },
    { status: 'New Lead', date: '01 Jun 2025 09:00 AM', by: 'System', reason: 'New application received', color: '#16A34A' },
  ];

  const documents = [
    { name: 'Aadhaar Card', received: true },
    { name: 'PAN Card', received: true },
    { name: 'Salary Slip', received: true },
    { name: 'ITR Document', received: false },
    { name: 'Property Papers', received: false },
    { name: 'NOC Certificate', received: false },
  ];

  const notes = [
    { text: 'CIBIL score 780 — excellent profile', by: 'Admin Suresh', date: '02 Jun 2025' },
    { text: 'Bank processing expected 7 days', by: 'Admin Priya', date: '05 Jun 2025' },
  ];

  const getMessagePreview = () => {
    return `Dear Rahul, Your Home Loan application status has been updated to: ${selectedStatus}. Our team will contact you shortly. — Sanskruti Associates`;
  };

  return (
    <div className="min-h-screen" style={{ background: '#F8FAFC' }}>
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
                    activeMenu === item.id ? 'bg-[#2563EB] text-white' : 'text-white/70 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-red-500/20 hover:text-red-400 transition-colors mt-8">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-[260px] p-6 pb-24">
        {/* Top Header Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <button className="flex items-center gap-2 text-[#2563EB] hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Lead Details
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-[#1F2937] mb-2">Loan Status Update</h1>
              <p className="text-lg text-gray-600">Rahul Sharma — Home Loan ₹45,00,000</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-4 py-2 bg-[#2563EB] text-white rounded-full mb-2">
                Sent to Bank
              </span>
              <p className="text-sm text-gray-500">Updated: 05 Jun 2025 by Admin Suresh</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3 space-y-6">
            {/* Current Status Display */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl text-[#1F2937] mb-6">Current Loan Status</h2>

              {/* Horizontal Progress Bar */}
              <div className="mb-8 overflow-x-auto">
                <div className="flex items-center gap-2 min-w-max">
                  {statusPipeline.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
                          style={{
                            background: step.status === 'completed' ? '#16A34A' : step.status === 'current' ? '#2563EB' : '#E5E7EB',
                          }}
                        >
                          {step.status === 'completed' && <Check className="w-5 h-5 text-white" />}
                          {step.status === 'current' && <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>}
                          {step.status === 'pending' && <Clock className="w-5 h-5 text-gray-400" />}
                        </div>
                        <span className="text-xs text-center text-[#1F2937] max-w-[80px]">{step.label}</span>
                        {step.date && <span className="text-xs text-gray-500 mt-1">{step.date}</span>}
                      </div>
                      {index < statusPipeline.length - 1 && (
                        <div className="w-12 h-0.5 mb-12" style={{ background: step.status === 'completed' ? '#16A34A' : '#E5E7EB' }}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Days in Current Status</p>
                  <p className="text-xl text-[#F59E0B]">3 Days</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expected Completion</p>
                  <p className="text-xl text-[#1F2937]">12 Jun 2025</p>
                </div>
              </div>
            </div>

            {/* Status Change Dropdown */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl text-[#1F2937] mb-6">Update Loan Status</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#374151] mb-2">Select New Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                  >
                    <option>🆕 New Lead</option>
                    <option>📋 Documents Pending</option>
                    <option>🔍 Under Verification</option>
                    <option>🏦 Sent to Bank</option>
                    <option>⚙️ Bank Processing</option>
                    <option>✅ Loan Sanctioned</option>
                    <option>💰 Amount Disbursed</option>
                    <option>❌ Rejected</option>
                    <option>🔒 Case Closed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#374151] mb-2">Reason for Status Change</label>
                  <textarea
                    value={statusReason}
                    onChange={(e) => setStatusReason(e.target.value)}
                    placeholder="Enter reason or remarks..."
                    className="w-full h-24 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm text-[#374151] mb-2">Effective Date</label>
                  <input
                    type="date"
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                  />
                </div>
                <button className="w-full h-12 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors">
                  Update Status
                </button>
                <p className="text-sm text-[#F59E0B] flex items-center gap-2">
                  ⚠️ This will notify the applicant via SMS and Email automatically
                </p>
              </div>
            </div>

            {/* Bank Communication Log */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl text-[#1F2937] mb-6">Bank Communication Log</h2>
              <div className="space-y-4 mb-6">
                {communications.map((comm, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">{comm.date}</span>
                      <span className="px-3 py-1 text-xs text-white rounded-full" style={{ background: comm.badge }}>
                        {comm.type === 'Sent' && '📤'} {comm.type === 'Received' && '📥'} {comm.type === 'Call' && '📞'} {comm.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#1F2937] mb-2">{comm.message}</p>
                    <p className="text-xs text-gray-500">By: {comm.by}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6 space-y-3">
                <select
                  value={commType}
                  onChange={(e) => setCommType(e.target.value)}
                  className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                >
                  <option>Sent</option>
                  <option>Received</option>
                  <option>Call</option>
                  <option>Email</option>
                  <option>Visit</option>
                </select>
                <textarea
                  value={commMessage}
                  onChange={(e) => setCommMessage(e.target.value)}
                  placeholder="Enter communication details..."
                  className="w-full h-20 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none resize-none"
                ></textarea>
                <button className="w-full h-10 bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg transition-colors">
                  Add Entry
                </button>
              </div>
            </div>

            {/* Status History Log */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl text-[#1F2937] mb-6">Status History</h2>
              <div className="space-y-3">
                {statusHistory.map((entry, index) => (
                  <div key={index} className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full mt-1.5" style={{ background: entry.color }}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm text-[#1F2937]">{entry.status}</h4>
                          <span className="text-xs text-gray-500">{entry.date}</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-1">Changed by: {entry.by}</p>
                        <p className="text-xs text-gray-600">Reason: {entry.reason}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="lg:col-span-2 space-y-6">
            {/* SMS/Email Notification */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl text-[#1F2937] mb-6">Send Notification</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#1F2937]">Send SMS</span>
                  <button
                    onClick={() => setSmsEnabled(!smsEnabled)}
                    className={`w-12 h-6 rounded-full transition-colors ${smsEnabled ? 'bg-[#16A34A]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${smsEnabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#1F2937]">Send Email</span>
                  <button
                    onClick={() => setEmailEnabled(!emailEnabled)}
                    className={`w-12 h-6 rounded-full transition-colors ${emailEnabled ? 'bg-[#16A34A]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${emailEnabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#1F2937]">Send WhatsApp</span>
                  <button
                    onClick={() => setWhatsappEnabled(!whatsappEnabled)}
                    className={`w-12 h-6 rounded-full transition-colors ${whatsappEnabled ? 'bg-[#16A34A]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${whatsappEnabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </button>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg space-y-1">
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm text-[#1F2937]">+91 98765 43210</p>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm text-[#1F2937]">rahul@email.com</p>
                </div>

                <select
                  value={messageTemplate}
                  onChange={(e) => setMessageTemplate(e.target.value)}
                  className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                >
                  <option>Status Update Message</option>
                  <option>Document Request</option>
                  <option>Approval Congratulations</option>
                  <option>Rejection with Reason</option>
                  <option>EMI Reminder</option>
                  <option>Custom Message</option>
                </select>

                <div className="p-4 bg-gray-100 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Preview:</p>
                  <p className="text-sm text-[#1F2937]">{getMessagePreview()}</p>
                </div>

                <button className="w-full h-12 bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg transition-colors">
                  Send Now
                </button>
                <button className="w-full h-12 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-blue-50 transition-colors">
                  Schedule for Later
                </button>
              </div>
            </div>

            {/* Document Request */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl text-[#1F2937] mb-6">Request Documents</h2>
              <div className="space-y-3 mb-4">
                {documents.map((doc, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={doc.received}
                      readOnly
                      className="w-5 h-5 accent-[#16A34A]"
                    />
                    <span className={`text-sm ${doc.received ? 'text-[#16A34A]' : 'text-[#EF4444]'}`}>
                      {doc.name} — {doc.received ? 'Received' : 'Not Received'}
                    </span>
                  </label>
                ))}
              </div>

              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Enter document name..."
                  className="flex-1 h-10 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                />
                <button className="px-4 h-10 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-blue-50">
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <button className="w-full h-12 bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-lg transition-colors mb-2">
                Request Missing Documents via SMS
              </button>
              <p className="text-xs text-gray-500 text-center">Client will receive SMS with document upload link</p>
            </div>

            {/* Admin Notes */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl text-[#1F2937] mb-6">Admin Notes</h2>
              <div className="space-y-3 mb-4">
                {notes.map((note, index) => (
                  <div key={index} className="p-3 bg-gray-100 rounded-lg">
                    <p className="text-sm text-[#1F2937] mb-2">{note.text}</p>
                    <p className="text-xs text-gray-500">{note.by} — {note.date}</p>
                  </div>
                ))}
              </div>

              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a private note..."
                className="w-full h-20 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none resize-none mb-2"
              ></textarea>
              <p className="text-xs text-gray-500 mb-3">(Only visible to admins)</p>
              <button className="w-full h-10 bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg transition-colors">
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fixed Action Bar */}
      <div className="fixed bottom-0 left-[260px] right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-30">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Applicant: <span className="text-[#1F2937]">Rahul Sharma</span> |
            Loan: <span className="text-[#1F2937]">Home Loan</span> |
            Amount: <span className="text-[#1F2937]">₹45,00,000</span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D] transition-colors">
              Save All Changes
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-blue-50 transition-colors">
              <Download className="w-5 h-5" />
              Export PDF
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#16A34A] text-[#16A34A] rounded-lg hover:bg-green-50 transition-colors">
              <Phone className="w-5 h-5" />
              Call Applicant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
