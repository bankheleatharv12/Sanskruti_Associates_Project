import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, Building2, BadgeCheck, PenSquare, Wallet, MessageCircle, Phone, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { useNavigation } from './AppRouter';

// Loan Status Data
const loanStatusData = {
  applicationId: 'SA2026HL00125',
  loanType: 'Home Loan',
  bank: 'HDFC Bank',
  status: 'In Progress',
  progressPercentage: 50,
  estimatedApprovalDate: '16 May 2026',
  estimatedDisbursementDate: '18 May 2026',
  steps: [
    {
      id: 1,
      title: 'Application Submitted',
      description: 'Application received successfully',
      date: '12 May 2026',
      status: 'completed',
      icon: FileText,
    },
    {
      id: 2,
      title: 'Documents Verified',
      description: 'Documents validated',
      date: '13 May 2026',
      status: 'completed',
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: 'Bank Review',
      description: 'Bank reviewing profile',
      date: '14 May 2026',
      status: 'active',
      icon: Building2,
    },
    {
      id: 4,
      title: 'Loan Approved',
      description: 'Waiting for approval',
      status: 'pending',
      icon: BadgeCheck,
    },
    {
      id: 5,
      title: 'Agreement Signed',
      description: 'Pending agreement signature',
      status: 'pending',
      icon: PenSquare,
    },
    {
      id: 6,
      title: 'Disbursed',
      description: 'Loan amount credited',
      status: 'pending',
      icon: Wallet,
    },
  ],
};

export function LoanStatusTracking() {
  const { navigateTo } = useNavigation();
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getStepColor = (status: string) => {
    if (status === 'completed') return 'bg-[#16A34A]';
    if (status === 'active') return 'bg-[#2563EB]';
    return 'bg-gray-300';
  };

  const getLineColor = (index: number) => {
    if (index < loanStatusData.steps.findIndex((s) => s.status === 'active')) return 'bg-[#16A34A]';
    return 'bg-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Home Button */}
      <button
        onClick={() => navigateTo('homepage')}
        className="fixed top-24 right-4 sm:right-6 z-50 flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors shadow-lg"
      >
        <HomeIcon className="w-5 h-5" />
        Home
      </button>

      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white px-6 sm:px-8 py-12">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-2"
            >
              Track Your Loan Application
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-blue-100 text-lg"
            >
              Monitor your loan journey in real time
            </motion.p>
          </div>

          {/* Loan Details Section */}
          <div className="px-6 sm:px-8 py-8 border-b border-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-gray-600 text-sm font-medium">Application ID</p>
                <p className="text-gray-900 text-lg font-semibold mt-1">{loanStatusData.applicationId}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-gray-600 text-sm font-medium">Loan Type</p>
                <p className="text-gray-900 text-lg font-semibold mt-1">{loanStatusData.loanType}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-gray-600 text-sm font-medium">Bank</p>
                <p className="text-gray-900 text-lg font-semibold mt-1">{loanStatusData.bank}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <p className="text-gray-600 text-sm font-medium">Status</p>
                <div className="mt-1 inline-block bg-blue-100 text-[#2563EB] px-3 py-1 rounded-full text-sm font-semibold">
                  {loanStatusData.status}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="px-6 sm:px-8 py-8 border-b border-gray-200">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-700 font-semibold">Application Progress</label>
                <span className="text-[#2563EB] font-bold text-lg">{loanStatusData.progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${loanStatusData.progressPercentage}%` }}
                  transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="px-6 sm:px-8 py-12">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 mb-12"
            >
              Application Timeline
            </motion.h2>

            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="space-y-8">
                {loanStatusData.steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = step.status === 'active';
                  const isCompleted = step.status === 'completed';
                  const isPending = step.status === 'pending';

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className="flex gap-6"
                    >
                      {/* Timeline Dot */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                          transition={isActive ? { repeat: Infinity, duration: 2 } : {}}
                          className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl ${getStepColor(step.status)} shadow-md ${
                            isActive ? 'ring-4 ring-blue-300' : ''
                          }`}
                        >
                          {isCompleted && <span>✓</span>}
                          {isActive && <Icon className="w-7 h-7" />}
                          {isPending && <span className="text-gray-400">○</span>}
                        </motion.div>

                        {/* Connecting Line */}
                        {index < loanStatusData.steps.length - 1 && (
                          <div
                            className={`w-1 h-16 mt-2 ${getLineColor(index)} transition-colors duration-500`}
                          />
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pt-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className={`text-lg font-bold ${isPending ? 'text-gray-500' : 'text-gray-900'}`}>
                              {step.title}
                            </h3>
                            {isActive && (
                              <motion.span
                                animate={{ opacity: [1, 0.6, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="inline-block text-[#2563EB] text-sm font-semibold mt-1"
                              >
                                ● Current Step
                              </motion.span>
                            )}
                            <p className={`text-sm mt-1 ${isPending ? 'text-gray-400' : 'text-gray-600'}`}>
                              {step.description}
                            </p>
                          </div>
                          {step.date && (
                            <div className="text-right ml-4">
                              <p className="text-gray-600 text-sm font-medium">{step.date}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden">
              <div className="space-y-6">
                {loanStatusData.steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = step.status === 'active';
                  const isCompleted = step.status === 'completed';
                  const isPending = step.status === 'pending';

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className={`p-4 rounded-lg border-2 ${
                        isActive
                          ? 'border-[#2563EB] bg-blue-50'
                          : isCompleted
                            ? 'border-[#16A34A] bg-green-50'
                            : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex gap-3 items-start">
                        <motion.div
                          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                          transition={isActive ? { repeat: Infinity, duration: 2 } : {}}
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${getStepColor(step.status)}`}
                        >
                          {isCompleted && <span>✓</span>}
                          {isActive && <Icon className="w-6 h-6" />}
                          {isPending && <span className="text-gray-400">○</span>}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className={`font-bold ${isPending ? 'text-gray-500' : 'text-gray-900'}`}>
                            {step.title}
                          </h3>
                          {isActive && (
                            <motion.span
                              animate={{ opacity: [1, 0.6, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="inline-block text-[#2563EB] text-xs font-semibold mt-1"
                            >
                              ● Current Step
                            </motion.span>
                          )}
                          <p className={`text-sm mt-1 ${isPending ? 'text-gray-400' : 'text-gray-600'}`}>
                            {step.description}
                          </p>
                          {step.date && (
                            <p className="text-gray-600 text-xs font-medium mt-2">{step.date}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimated Timeline Section */}
          <div className="px-6 sm:px-8 py-8 bg-gray-50 border-t border-gray-200">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="text-xl font-bold text-gray-900 mb-6"
            >
              Estimated Timeline
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <BadgeCheck className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Estimated Approval</p>
                    <p className="text-gray-900 text-lg font-bold mt-1">{loanStatusData.estimatedApprovalDate}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <Wallet className="w-6 h-6 text-[#16A34A] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Estimated Disbursement</p>
                    <p className="text-gray-900 text-lg font-bold mt-1">{loanStatusData.estimatedDisbursementDate}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Help Section */}
          <div className="px-6 sm:px-8 py-12 border-t border-gray-200">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Need Help?</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#1BA850] text-white font-semibold rounded-lg transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>

                <button
                  onClick={() => (window as any).location.href = 'tel:+919876543210'}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-semibold rounded-lg transition-colors shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  Call Our Agent
                </button>
              </div>

              <p className="text-gray-600 text-sm text-center mt-4">
                Our team is available Mon-Fri, 9 AM - 6 PM IST
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => navigateTo('homepage')}
            className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1E40AF] font-semibold transition-colors"
          >
            <span>Back to Home</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
