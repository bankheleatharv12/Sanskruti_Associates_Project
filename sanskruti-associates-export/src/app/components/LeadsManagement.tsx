import { useState } from 'react';
import { Home, Users, FileText, Settings, LogOut, Plus, Download, Search, Filter, Eye, Edit, Trash2, LayoutDashboard, CreditCard, Bell, BarChart3 } from 'lucide-react';
import { useNavigation } from './AppRouter';

const leadsData = [
  { id: 1, name: 'Rajesh Kumar', phone: '+91 98765 43210', loanType: 'Home Loan', amount: '₹45,00,000', status: 'Approved', assignedTo: 'Priya Desai', date: '15/04/2026' },
  { id: 2, name: 'Amit Sharma', phone: '+91 98765 43211', loanType: 'Personal Loan', amount: '₹5,00,000', status: 'Pending', assignedTo: 'Rahul Singh', date: '14/04/2026' },
  { id: 3, name: 'Sneha Patel', phone: '+91 98765 43212', loanType: 'Car Loan', amount: '₹8,50,000', status: 'In Review', assignedTo: 'Priya Desai', date: '13/04/2026' },
  { id: 4, name: 'Vikram Reddy', phone: '+91 98765 43213', loanType: 'Business Loan', amount: '₹25,00,000', status: 'Approved', assignedTo: 'Amit Kumar', date: '12/04/2026' },
  { id: 5, name: 'Pooja Singh', phone: '+91 98765 43214', loanType: 'Home Loan', amount: '₹60,00,000', status: 'Rejected', assignedTo: 'Rahul Singh', date: '11/04/2026' },
  { id: 6, name: 'Arjun Mehta', phone: '+91 98765 43215', loanType: 'Personal Loan', amount: '₹3,00,000', status: 'Pending', assignedTo: 'Priya Desai', date: '10/04/2026' },
  { id: 7, name: 'Kavya Nair', phone: '+91 98765 43216', loanType: 'Education Loan', amount: '₹12,00,000', status: 'In Review', assignedTo: 'Amit Kumar', date: '09/04/2026' },
  { id: 8, name: 'Rohit Verma', phone: '+91 98765 43217', loanType: 'Home Loan', amount: '₹55,00,000', status: 'Approved', assignedTo: 'Rahul Singh', date: '08/04/2026' },
  { id: 9, name: 'Priya Joshi', phone: '+91 98765 43218', loanType: 'Car Loan', amount: '₹6,50,000', status: 'Pending', assignedTo: 'Priya Desai', date: '07/04/2026' },
  { id: 10, name: 'Karan Gupta', phone: '+91 98765 43219', loanType: 'Business Loan', amount: '₹18,00,000', status: 'Approved', assignedTo: 'Amit Kumar', date: '06/04/2026' },
];

export function LeadsManagement() {
  const { navigateTo } = useNavigation();
  const [activeMenu, setActiveMenu] = useState('leads');
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'leads', icon: Users, label: 'Leads Management' },
    { id: 'loans', icon: CreditCard, label: 'Loan Applications' },
    { id: 'reports', icon: BarChart3, label: 'Reports & Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const statsCards = [
    { label: 'Total Leads', value: '248', color: '#2563EB', bgColor: '#EFF6FF' },
    { label: 'Approved', value: '142', color: '#16A34A', bgColor: '#F0FDF4' },
    { label: 'Pending', value: '67', color: '#F59E0B', bgColor: '#FFFBEB' },
    { label: 'Rejected', value: '39', color: '#EF4444', bgColor: '#FEF2F2' },
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

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leadsData.map((lead) => lead.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectLead = (id: number) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter((leadId) => leadId !== id));
    } else {
      setSelectedLeads([...selectedLeads, id]);
    }
  };

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

        {/* Page Title & Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl text-[#1F2937]">All Leads</h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-blue-50 transition-colors">
              <Download className="w-5 h-5" />
              Export CSV
            </button>
            <button onClick={() => navigateTo('loan-application')} className="flex items-center gap-2 px-6 py-3 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D] transition-colors">
              <Plus className="w-5 h-5" />
              Add New Lead
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or phone..."
                  className="w-full h-12 pl-10 pr-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                />
              </div>
            </div>

            <select className="h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none">
              <option>All Loan Types</option>
              <option>Home Loan</option>
              <option>Personal Loan</option>
              <option>Car Loan</option>
              <option>Business Loan</option>
              <option>Education Loan</option>
            </select>

            <select className="h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none">
              <option>All Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
              <option>In Review</option>
            </select>

            <button className="h-12 px-6 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors flex items-center justify-center gap-2">
              <Filter className="w-5 h-5" />
              Apply Filter
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-lg"
              style={{ background: card.bgColor }}
            >
              <div className="text-sm mb-2" style={{ color: card.color }}>
                {card.label}
              </div>
              <div className="text-3xl" style={{ color: card.color }}>
                {card.value}
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Actions Bar */}
        {selectedLeads.length > 0 && (
          <div className="bg-[#2563EB] text-white rounded-xl p-4 mb-6 flex items-center justify-between shadow-lg">
            <span className="text-sm">{selectedLeads.length} leads selected</span>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors">
                Assign to Agent
              </button>
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors">
                Change Status
              </button>
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm transition-colors">
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Leads Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-4 w-12">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="w-5 h-5 accent-[#2563EB]"
                    />
                  </th>
                  <th className="text-left py-4 px-4 text-sm text-gray-600">#</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-600">Name</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-600">Loan Type</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-600">Amount</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-600">Status</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-600">Assigned To</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-600">Date</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leadsData.map((lead, index) => {
                  const statusColors = getStatusColor(lead.status);
                  const isEven = index % 2 === 1;
                  return (
                    <tr
                      key={lead.id}
                      className="border-b border-gray-100 hover:bg-[#EFF6FF] transition-colors"
                      style={{ background: isEven ? '#F8FAFF' : 'white' }}
                    >
                      <td className="py-4 px-4">
                        <input
                          type="checkbox"
                          checked={selectedLeads.includes(lead.id)}
                          onChange={() => handleSelectLead(lead.id)}
                          className="w-5 h-5 accent-[#2563EB]"
                        />
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{lead.id}</td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-[#1F2937]">{lead.name}</div>
                        <div className="text-xs text-gray-500">{lead.phone}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 bg-blue-100 text-[#2563EB] text-xs rounded-full">
                          {lead.loanType}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-[#1F2937]">{lead.amount}</td>
                      <td className="py-4 px-4">
                        <span
                          className="px-3 py-1 text-xs rounded-full"
                          style={{ background: statusColors.bg, color: statusColors.text }}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{lead.assignedTo}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{lead.date}</td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button onClick={() => navigateTo('lead-details')} className="p-2 text-[#2563EB] hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Showing 1-{itemsPerPage} of 248 leads
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm transition-colors ${
                    currentPage === page
                      ? 'bg-[#2563EB] text-white'
                      : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Next
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Items per page:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-[#2563EB] focus:outline-none"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
