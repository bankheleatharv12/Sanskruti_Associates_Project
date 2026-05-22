import { useState } from 'react';
import { Calculator } from 'lucide-react';

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('1000000');
  const [interestRate, setInterestRate] = useState('9.5');
  const [tenure, setTenure] = useState('120');

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure);

    if (P && r && n) {
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      return Math.round(emi);
    }
    return 0;
  };

  const emi = calculateEMI();
  const totalAmount = emi * parseFloat(tenure);
  const totalInterest = totalAmount - parseFloat(loanAmount);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2563EB] to-[#1E40AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl text-[#1F2937]">EMI Calculator</h2>
              </div>

              <p className="text-gray-600 mb-8">
                Calculate your monthly installment and plan your finances better
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[#1F2937] mb-2">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1F2937] mb-2">Interest Rate (% per annum)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1F2937] mb-2">Tenure (Months)</label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
              <h3 className="text-xl mb-8">Your EMI Breakdown</h3>

              <div className="space-y-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-blue-200 mb-1">Monthly EMI</div>
                  <div className="text-3xl lg:text-4xl">₹{emi.toLocaleString('en-IN')}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Principal Amount</div>
                    <div className="text-lg">₹{parseFloat(loanAmount).toLocaleString('en-IN')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-blue-200 mb-1">Total Interest</div>
                    <div className="text-lg">₹{Math.round(totalInterest).toLocaleString('en-IN')}</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Total Amount Payable</div>
                  <div className="text-xl">₹{Math.round(totalAmount).toLocaleString('en-IN')}</div>
                </div>
              </div>

              <button className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-4 rounded-lg transition-colors">
                Apply Based on This EMI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
