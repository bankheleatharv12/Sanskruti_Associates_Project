import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  BadgeCheck,
  Calculator,
  CalendarClock,
  CheckCircle2,
  Clock,
  IndianRupee,
  Lock,
  Percent,
  ShieldCheck,
} from 'lucide-react';

const highlights = [
  { label: 'Interest Rate', value: 'Starting 10.5% p.a.', icon: Percent },
  { label: 'Max Amount', value: 'Up to Rs. 40 Lakhs', icon: IndianRupee },
  { label: 'Tenure', value: 'Up to 5 Years', icon: CalendarClock },
  { label: 'Approval', value: 'Within 48 Hours', icon: BadgeCheck },
];

const eligibility = [
  { label: 'Age', value: '21 to 58 years' },
  { label: 'Employment', value: 'Salaried (Govt or Private)' },
  { label: 'Minimum Salary', value: 'Rs. 25,000 per month' },
  { label: 'Credit Score', value: '700 and above' },
];

const salariedDocuments = [
  'PAN Card',
  'Aadhaar Card',
  'Address Proof',
  '3 Month Salary Slip',
  'Last 6 Month Bank Statement',
  '2 Years Form 16',
  'Office ID Card',
  'Photo',
  'Minimum Salary Required 25000 per month',
];

const selfEmployedDocuments = [
  'PAN Card',
  'Aadhaar Card',
  'Address Proof',
  '3 Year ITR with Financial',
  'Last 1 Year Bank Statement',
  'GST Registration (if applicable)',
  'Business Proof',
  'Photo',
];

function PersonalLoanStyles() {
  return (
    <style>
      {`
        @keyframes personalLoanFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes personalLoanSlideUp {
          from { opacity: 0; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes personalLoanNumberPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.035); }
        }

        .personal-loan-range::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #2563EB;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
        }

        .personal-loan-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #2563EB;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
        }
      `}
    </style>
  );
}

function PersonalLoanEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('500000');
  const [interestRate, setInterestRate] = useState('10.5');
  const [tenure, setTenure] = useState('36');

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 12 / 100;
    const months = parseFloat(tenure);

    if (principal && monthlyRate && months) {
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      return Math.round(emi);
    }

    return 0;
  };

  const emi = calculateEMI();
  const totalAmount = emi * parseFloat(tenure);
  const principal = parseFloat(loanAmount) || 0;
  const totalInterest = totalAmount - principal;
  const interestShare =
    totalAmount > 0 ? Math.max(0, Math.min(100, (totalInterest / totalAmount) * 100)) : 0;

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-white/90 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl text-[#1F2937]">EMI Calculator</h2>
              </div>

              <p className="text-gray-600 mb-8">
                Calculate your monthly installment and plan your finances better
              </p>

              <div className="space-y-7">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937]">Loan Amount (Rs.)</label>
                    <span className="text-sm text-[#2563EB]">
                      Rs.{Number(loanAmount || 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="4000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(event) => setLoanAmount(event.target.value)}
                    className="personal-loan-range w-full h-2 appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937]">
                      Interest Rate (% per annum)
                    </label>
                    <span className="text-sm text-[#2563EB]">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="24"
                    step="0.1"
                    value={interestRate}
                    onChange={(event) => setInterestRate(event.target.value)}
                    className="personal-loan-range w-full h-2 appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <label className="block text-sm text-[#1F2937]">Tenure (Months)</label>
                    <span className="text-sm text-[#2563EB]">{tenure} months</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="60"
                    step="12"
                    value={tenure}
                    onChange={(event) => setTenure(event.target.value)}
                    className="personal-loan-range w-full h-2 appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#2563EB] to-[#0F172A] text-white">
              <h3 className="text-xl mb-8">Your EMI Breakdown</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center">
                  <div className="relative h-40 w-40">
                    <svg viewBox="0 0 120 120" className="-rotate-90 drop-shadow-xl">
                      <circle
                        cx="60"
                        cy="60"
                        r="44"
                        fill="none"
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="18"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="44"
                        fill="none"
                        stroke="#16A34A"
                        strokeWidth="18"
                        strokeDasharray={`${276.46 - (interestShare / 100) * 276.46} 276.46`}
                        strokeLinecap="round"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="44"
                        fill="none"
                        stroke="#FBBF24"
                        strokeWidth="18"
                        strokeDasharray={`${(interestShare / 100) * 276.46} 276.46`}
                        strokeDashoffset={`-${276.46 - (interestShare / 100) * 276.46}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xs text-blue-100">Total</span>
                      <span
                        key={Math.round(totalAmount || 0)}
                        className="text-lg [animation:personalLoanNumberPulse_0.35s_ease-out]"
                      >
                        Rs.{Math.round(totalAmount || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 shadow-lg">
                  <div className="text-sm text-blue-100 mb-1">Monthly EMI</div>
                  <div
                    key={emi}
                    className="text-3xl lg:text-4xl [animation:personalLoanNumberPulse_0.35s_ease-out]"
                  >
                    Rs.{emi.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                    <div className="text-xs text-blue-100 mb-1">Principal Amount</div>
                    <div className="text-lg">Rs.{principal.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                    <div className="text-xs text-blue-100 mb-1">Total Interest</div>
                    <div className="text-lg">
                      Rs.{Math.round(totalInterest || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                  <div className="text-xs text-blue-100 mb-1">Total Amount Payable</div>
                  <div className="text-xl">
                    Rs.{Math.round(totalAmount || 0).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentColumn({ title, documents, active }) {
  return (
    <div
      className={`rounded-3xl p-6 lg:p-8 border border-white/80 bg-white/90 shadow-xl shadow-blue-900/5 backdrop-blur-xl transition-all duration-300 ease-out [animation:personalLoanFadeUp_0.6s_ease-out_both] ${
        active ? 'block' : 'hidden lg:block'
      }`}
    >
      <h3 className="text-xl text-[#1F2937] mb-5">{title}</h3>
      <ul className="space-y-3">
        {documents.map((documentName, index) => (
          <li
            key={documentName}
            className="flex items-start gap-3 text-gray-700 transition-all duration-300 ease-out [animation:personalLoanFadeUp_0.5s_ease-out_both]"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
            <span>{documentName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PersonalLoan({ heroVideoSrc = '/Loan_approval_in_Indian_office_202605172325.mp4' }) {
  const navigate = useNavigate();
  const [activeDocumentTab, setActiveDocumentTab] = useState('salaried');

  const goToApplication = () => {
    navigate('/personal-loan/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('personal-loan-eligibility')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#EFF6FF]">
      <PersonalLoanStyles />
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-white/90" />
      </div>

      <div className="relative z-10">
        <section className="relative min-h-screen overflow-hidden text-white bg-[#0F172A]">
          <video
            className="absolute inset-0 h-full w-full object-cover scale-125 sm:scale-110"
            src={heroVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-[#0F172A]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white shadow-lg backdrop-blur-md [animation:personalLoanFadeUp_0.7s_ease-out_both]">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#16A34A]" />
                </span>
                Trusted by 500+ customers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-5 leading-tight [animation:personalLoanFadeUp_0.8s_ease-out_0.1s_both]">
                Personal Loan
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed [animation:personalLoanFadeUp_0.8s_ease-out_0.22s_both]">
                Quick funds for your personal needs. No collateral required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 [animation:personalLoanFadeUp_0.8s_ease-out_0.34s_both]">
                <button
                  onClick={goToApplication}
                  className="px-8 py-4 bg-gradient-to-r from-[#16A34A] to-[#22C55E] hover:brightness-110 active:scale-[0.97] text-white rounded-xl transition-all duration-300 shadow-xl shadow-green-900/30"
                >
                  Apply Now
                </button>
                <button
                  onClick={goToEligibility}
                  className="px-8 py-4 border-2 border-[#60A5FA] text-white hover:bg-white/10 active:scale-[0.97] rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  Check Eligibility
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group border-t-4 border-[#2563EB] bg-white/90 backdrop-blur-xl rounded-3xl p-6 border-x border-b border-white/80 shadow-lg shadow-blue-900/5 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/15 [animation:personalLoanSlideUp_0.7s_ease-out_both]"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                    <h3 className="text-xl text-[#1F2937]">{item.value}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="personal-loan-eligibility"
          className="py-16 lg:py-24 bg-gradient-to-br from-[#2563EB] via-[#1E40AF] to-[#0F172A] text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 [animation:personalLoanFadeUp_0.7s_ease-out_both]">
              <h2 className="text-3xl lg:text-4xl mb-3">Who Can Apply</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibility.map((item, index) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/15 [animation:personalLoanFadeUp_0.7s_ease-out_both]"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg shadow-green-900/20">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-blue-100 mb-2">{item.label}</p>
                  <p className="text-lg text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-3">Documents Required</h2>
              </div>

              <div className="flex w-full max-w-md rounded-2xl bg-white/80 p-2 shadow-lg shadow-blue-900/5 backdrop-blur-xl lg:w-auto">
                <button
                  onClick={() => setActiveDocumentTab('salaried')}
                  className={`flex-1 px-5 py-3 text-sm transition-all duration-300 ${
                    activeDocumentTab === 'salaried'
                      ? 'border-b-2 border-[#2563EB] text-[#2563EB]'
                      : 'border-b-2 border-transparent text-gray-500 hover:text-[#2563EB]'
                  }`}
                >
                  Salaried
                </button>
                <button
                  onClick={() => setActiveDocumentTab('self-employed')}
                  className={`flex-1 px-5 py-3 text-sm transition-all duration-300 ${
                    activeDocumentTab === 'self-employed'
                      ? 'border-b-2 border-[#2563EB] text-[#2563EB]'
                      : 'border-b-2 border-transparent text-gray-500 hover:text-[#2563EB]'
                  }`}
                >
                  Self Employed
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <DocumentColumn
                title="Salaried (Govt/Private)"
                documents={salariedDocuments}
                active={activeDocumentTab === 'salaried'}
              />
              <DocumentColumn
                title="Self Employed"
                documents={selfEmployedDocuments}
                active={activeDocumentTab === 'self-employed'}
              />
            </div>
          </div>
        </section>

        <PersonalLoanEmiCalculator />

        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2563EB] to-[#0F172A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <button
              onClick={goToApplication}
              className="relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#16A34A] to-[#22C55E] hover:brightness-110 active:scale-[0.97] text-white rounded-2xl transition-all duration-300 shadow-2xl shadow-green-950/30 text-lg ring-4 ring-[#16A34A]/25 animate-pulse"
            >
              Apply for Personal Loan
            </button>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md">
                <Lock className="h-5 w-5 text-[#16A34A]" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md">
                <ShieldCheck className="h-5 w-5 text-[#16A34A]" />
                <span>RBI Guidelines</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md">
                <Clock className="h-5 w-5 text-[#16A34A]" />
                <span>48hr Approval</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
