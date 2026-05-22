import { useState } from 'react';
import {
  Factory,
  ShoppingBag,
  Briefcase,
  HardHat,
  Leaf,
  Scissors,
  UtensilsCrossed,
  Heart,
  Truck,
  Check,
  CheckCircle2,
  MessageCircle,
  Upload,
  User,
  Users,
  Building2,
} from 'lucide-react';

const steps = [
  'Industry Type',
  'Business Details',
  'Loan Details',
  'Mobile Verify',
  'Documents',
  'Review & Submit',
];

const industries = [
  { id: 'Manufacturing', title: 'Manufacturing', sub: 'Production and plant units', icon: Factory },
  { id: 'Trading / Wholesale', title: 'Trading / Wholesale', sub: 'Wholesale and retail trading', icon: ShoppingBag },
  { id: 'Service Industry', title: 'Service Industry', sub: 'Service based businesses', icon: Briefcase },
  { id: 'Construction', title: 'Construction', sub: 'Civil and construction work', icon: HardHat },
  { id: 'Agriculture / Agro', title: 'Agriculture / Agro', sub: 'Farming and agro processing', icon: Leaf },
  { id: 'Textile / Garment', title: 'Textile / Garment', sub: 'Textile and garment industry', icon: Scissors },
  { id: 'Food Processing', title: 'Food Processing', sub: 'Food and beverage processing', icon: UtensilsCrossed },
  { id: 'Healthcare', title: 'Healthcare / Medical', sub: 'Hospitals and clinics', icon: Heart },
  { id: 'Transport / Logistics', title: 'Transport / Logistics', sub: 'Fleet and logistics business', icon: Truck },
];

const businessStructures = [
  { id: 'Proprietorship', title: 'Proprietorship', sub: 'Single owner business', icon: User },
  { id: 'Partnership / LLP', title: 'Partnership / LLP', sub: 'Partnership or LLP firm', icon: Users },
  { id: 'Private Limited', title: 'Private Limited', sub: 'Registered Pvt Ltd company', icon: Building2 },
  { id: 'MSME / SME', title: 'MSME / SME', sub: 'Registered MSME unit', icon: Factory },
  { id: 'Trust / Society', title: 'Trust / Society', sub: 'Registered trust or NGO', icon: Heart },
];

const financeTypePills = [
  'Term Loan',
  'Working Capital',
  'CC / OD Limit',
  'Project Finance',
  'MSME Loan',
  'Government Scheme',
];

const documentsRequired = [
  { key: 'PAN Card', label: 'PAN Card', required: true },
  { key: 'Aadhaar Card', label: 'Aadhaar Card', required: true },
  { key: 'Address Proof', label: 'Address Proof', required: true },
  { key: 'Photo', label: 'Photo', required: true },
  { key: 'Business Registration', label: 'Business Registration Proof', required: true },
  { key: 'GST Certificate', label: 'GST Registration Certificate', required: true },
  { key: 'GST Returns', label: 'GST Returns (Last 1–2 Years)', required: true },
  { key: 'Bank Statements', label: 'Bank Statements (Last 12 Months)', required: true },
  { key: 'ITR', label: 'ITR (Last 2–3 Years)', required: true },
  { key: 'P&L', label: 'P&L Statement + Balance Sheet', required: true },
  { key: 'Business Address', label: 'Business Address Proof', required: true },
  { key: 'Guarantor Docs', label: 'Guarantor PAN + Aadhaar', required: false },
];

const initialFormData = {
  industryType: '',
  businessStructure: '',
  financeType: '',
  ownerName: '',
  dob: '',
  panNumber: '',
  aadhaarNumber: '',
  currentAddress: '',
  city: '',
  pinCode: '',
  businessName: '',
  businessPan: '',
  gstin: '',
  businessAddress: '',
  businessVintage: '',
  annualTurnover: '',
  udyamNumber: '',
  loanAmount: 5000000,
  loanTenure: '84',
  monthlyIncome: '',
  existingEmi: '',
  collateralAvailable: 'No',
  collateralType: '',
  collateralValue: '',
  loanPurpose: '',
  mobileNumber: '',
};

function IndustryFinanceFormStyles() {
  return (
    <style>
      {`
        @keyframes loanStepIn {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes loanFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes successCircle {
          from { stroke-dashoffset: 240; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes successCheck {
          from { stroke-dashoffset: 70; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes confettiFall {
          0% { opacity: 0; transform: translateY(-24px) rotate(0deg); }
          15% { opacity: 1; }
          100% { opacity: 0; transform: translateY(130px) rotate(220deg); }
        }
      `}
    </style>
  );
}

function ProgressBar({ currentStep }) {
  return (
    <div className="mb-8 rounded-[24px] border border-white/95 bg-white/90 p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px]">
      <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const completed = stepNumber < currentStep;
          const active = stepNumber === currentStep;

          return (
            <div key={step} className="relative flex flex-col items-center text-center">
              {index < steps.length - 1 && (
                <div
                  className={`absolute left-1/2 top-5 hidden h-0.5 w-full lg:block ${
                    completed ? 'bg-[#16A34A]' : 'border-t border-dashed border-gray-300'
                  }`}
                />
              )}
              <div
                className={`relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm transition-all duration-300 ${
                  completed
                    ? 'bg-[#16A34A] text-white shadow-lg shadow-green-500/25'
                    : active
                      ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/30 ring-8 ring-[#2563EB]/15 animate-pulse'
                      : 'border-2 border-gray-300 bg-white text-gray-400'
                }`}
              >
                {completed ? <Check className="h-5 w-5" /> : stepNumber}
              </div>
              <span
                className={`mt-3 text-xs transition-colors duration-300 ${
                  active ? 'text-[#1F2937]' : completed ? 'text-[#16A34A]' : 'text-gray-500'
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="group relative block pt-2">
      <span className="mb-2 block text-sm text-[#374151] transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-[#2563EB]">
        {label}
      </span>
      <div className="relative">
        {children}
        <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-[#2563EB] transition-all duration-300 group-focus-within:w-full" />
      </div>
    </label>
  );
}

function TextInput({ value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 pr-11 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
      />
      {value ? (
        <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#16A34A]" />
      ) : null}
    </div>
  );
}

function UploadBox({ documentItem, fileName, onUpload }) {
  const inputId = `upload-${documentItem.key.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <label
      htmlFor={inputId}
      className={`group flex min-h-44 cursor-pointer flex-col items-center rounded-2xl border-2 p-5 text-center transition-all duration-300 ${
        fileName
          ? 'border-[#16A34A] bg-green-50/80 shadow-lg shadow-green-500/10'
          : 'border-dashed border-[#2563EB] bg-white/80 hover:border-solid hover:bg-blue-50'
      }`}
    >
      <input
        id={inputId}
        type="file"
        className="hidden"
        onChange={(event) => onUpload(documentItem.key, event.target.files?.[0])}
      />
      <div
        className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
          fileName
            ? 'bg-[#16A34A] text-white'
            : 'bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white'
        }`}
      >
        {fileName ? <CheckCircle2 className="h-7 w-7" /> : <Upload className="h-7 w-7" />}
      </div>
      <span className="mb-2 text-[#1F2937]">{documentItem.label}</span>
      <span
        className={`mb-3 rounded-full px-3 py-1 text-xs ${
          documentItem.required ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600'
        }`}
      >
        {documentItem.required ? 'Required' : 'Optional'}
      </span>
      <span className={`break-all text-sm ${fileName ? 'text-[#16A34A]' : 'text-gray-500'}`}>
        {fileName || 'Upload file'}
      </span>
      {fileName ? <span className="mt-1 text-xs text-gray-500">File selected</span> : null}
    </label>
  );
}

function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1E40AF] px-8 py-3 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function BackButton({ children, ...props }) {
  return (
    <button
      className="rounded-xl border border-[#2563EB]/25 px-8 py-3 text-[#1F2937] transition-all duration-300 hover:bg-blue-50 hover:text-[#2563EB] active:scale-[0.97]"
      {...props}
    >
      {children}
    </button>
  );
}

export function IndustryFinanceForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  const updateFormData = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const uploadedRequiredCount = documentsRequired.filter(
    (doc) => doc.required && uploadedFiles[doc.key],
  ).length;

  const requiredDocumentsCount = documentsRequired.filter((doc) => doc.required).length;

  const goNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((step) => step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goPrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(0, 1);
    const nextOtp = [...otp];
    nextOtp[index] = digit;
    setOtp(nextOtp);

    if (digit && index < 5) {
      document.getElementById(`industry-finance-otp-${index + 1}`)?.focus();
    }
  };

  const handleUpload = (key, file) => {
    if (!file) return;
    setUploadedFiles((current) => ({ ...current, [key]: file.name }));
  };

  const submitApplication = () => {
    if (!termsAccepted) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen overflow-hidden py-16">
        <IndustryFinanceFormStyles />
        <div className="absolute inset-0 z-0">
          <img
            src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-50/80" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-10 z-10 mx-auto h-40 max-w-xl">
          {['left-8 bg-[#2563EB]', 'left-24 bg-[#16A34A]', 'left-44 bg-yellow-400', 'right-16 bg-[#2563EB]', 'right-32 bg-[#16A34A]'].map((item, index) => (
            <span
              key={item}
              className={`absolute h-3 w-2 rounded-sm ${item} [animation:confettiFall_1.5s_ease-in-out_infinite]`}
              style={{ animationDelay: `${index * 180}ms` }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <div className="rounded-[24px] border border-white/95 bg-white/90 p-8 text-center shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-10 [animation:loanFadeUp_0.6s_ease-out_both]">
            <svg className="mx-auto mb-5 h-24 w-24" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="#16A34A"
                strokeWidth="7"
                strokeDasharray="240"
                strokeDashoffset="240"
                className="[animation:successCircle_0.8s_ease-out_forwards]"
              />
              <path
                d="M32 51 L45 64 L70 36"
                fill="none"
                stroke="#16A34A"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="70"
                strokeDashoffset="70"
                className="[animation:successCheck_0.55s_ease-out_0.65s_forwards]"
              />
            </svg>
            <h1 className="mb-3 text-3xl text-[#1F2937] [animation:loanFadeUp_0.5s_ease-out_0.15s_both]">
              Application Submitted Successfully! 🎉
            </h1>
            <p className="mb-2 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.25s_both]">
              Application ID
            </p>
            <p className="mb-5 text-3xl text-[#2563EB] [animation:loanFadeUp_0.5s_ease-out_0.35s_both]">
              SA-IF-{Date.now().toString().slice(-8)}
            </p>
            <p className="mb-8 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.45s_both]">
              Our industry finance expert will contact you within 24 hours with the best lender options tailored to your industry and profile.
            </p>
            <button
              onClick={() => setShowWhatsAppPopup(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] [animation:loanFadeUp_0.5s_ease-out_0.55s_both]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with Our Expert
            </button>
            {showWhatsAppPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="rounded-2xl bg-white p-8 text-center shadow-2xl">
                  <p className="mb-4 text-gray-700">Opening WhatsApp...</p>
                  <a
                    href="https://wa.me/917758969798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xl bg-[#16A34A] px-6 py-3 text-white transition-all hover:brightness-110"
                  >
                    Open WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden py-16">
      <IndustryFinanceFormStyles />
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-50/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-4">
        <div className="rounded-[24px] border border-white/95 bg-white/90 p-8 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-10">
          <ProgressBar currentStep={currentStep} />

          {/* STEP 1: Industry & Business Type */}
          {currentStep === 1 && (
            <div className="[animation:loanStepIn_0.3s_ease-out_both]">
              <h2 className="mb-4 text-2xl text-[#1F2937]">Select Your Industry</h2>
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {industries.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => updateFormData('industryType', ind.id)}
                      className={`rounded-xl border-2 p-4 text-center transition-all ${
                        formData.industryType === ind.id
                          ? 'border-[#2563EB] bg-blue-50 shadow-lg'
                          : 'border-gray-200 bg-white hover:border-[#2563EB] hover:bg-blue-50/50'
                      }`}
                    >
                      <Icon className="mx-auto mb-2 h-6 w-6 text-[#2563EB]" />
                      <span className="text-sm font-medium text-[#1F2937]">{ind.title}</span>
                      <span className="text-xs text-gray-500">{ind.sub}</span>
                    </button>
                  );
                })}
              </div>

              {formData.industryType && (
                <>
                  <h2 className="mb-4 mt-8 text-2xl text-[#1F2937]">Select Business Structure</h2>
                  <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {businessStructures.map((bs) => {
                      const Icon = bs.icon;
                      return (
                        <button
                          key={bs.id}
                          onClick={() => updateFormData('businessStructure', bs.id)}
                          className={`rounded-xl border-2 p-4 text-center transition-all ${
                            formData.businessStructure === bs.id
                              ? 'border-[#2563EB] bg-blue-50 shadow-lg'
                              : 'border-gray-200 bg-white hover:border-[#2563EB] hover:bg-blue-50/50'
                          }`}
                        >
                          <Icon className="mx-auto mb-2 h-6 w-6 text-[#2563EB]" />
                          <span className="text-sm font-medium text-[#1F2937]">{bs.title}</span>
                          <span className="text-xs text-gray-500">{bs.sub}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              {formData.businessStructure && (
                <>
                  <h2 className="mb-4 mt-8 text-2xl text-[#1F2937]">Finance Type Needed</h2>
                  <div className="mb-8 flex flex-wrap gap-3">
                    {financeTypePills.map((ft) => (
                      <button
                        key={ft}
                        onClick={() => updateFormData('financeType', ft)}
                        className={`rounded-full border-2 px-4 py-2 text-sm transition-all ${
                          formData.financeType === ft
                            ? 'border-[#2563EB] bg-[#2563EB] text-white'
                            : 'border-gray-300 bg-white text-[#1F2937] hover:border-[#2563EB]'
                        }`}
                      >
                        {ft}
                      </button>
                    ))}
                  </div>

                  {formData.financeType && (
                    <div className="mb-8 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1E40AF] p-4 text-white">
                      <p className="text-sm">
                        <span className="font-semibold">{formData.industryType}</span> — <span className="font-semibold">{formData.businessStructure}</span> —{' '}
                        <span className="font-semibold">{formData.financeType}</span>
                      </p>
                    </div>
                  )}
                </>
              )}

              <div className="mt-8 flex justify-end gap-3">
                <PrimaryButton onClick={goNext} disabled={!formData.industryType || !formData.businessStructure || !formData.financeType}>
                  Next
                </PrimaryButton>
              </div>
            </div>
          )}

          {/* STEP 2: Business Details */}
          {currentStep === 2 && (
            <div className="space-y-5 [animation:loanStepIn_0.3s_ease-out_both]">
              <div className="mb-6 rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-[#1F2937]">
                  <span className="font-semibold text-[#2563EB]">{formData.industryType}</span> — <span className="font-semibold text-[#2563EB]">{formData.businessStructure}</span> —{' '}
                  <span className="font-semibold text-[#2563EB]">{formData.financeType}</span>
                </p>
              </div>

              <Field label="Owner / Director Full Name *">
                <TextInput value={formData.ownerName} onChange={(v) => updateFormData('ownerName', v)} placeholder="Enter full name" />
              </Field>

              <Field label="Date of Birth *">
                <TextInput value={formData.dob} onChange={(v) => updateFormData('dob', v)} type="date" />
              </Field>

              <Field label="PAN Card Number *">
                <TextInput value={formData.panNumber} onChange={(v) => updateFormData('panNumber', v)} placeholder="AAABBB1234C" />
              </Field>

              <Field label="Aadhaar Number *">
                <TextInput value={formData.aadhaarNumber} onChange={(v) => updateFormData('aadhaarNumber', v)} placeholder="1234 5678 9012" />
              </Field>

              <Field label="Current Address *">
                <TextInput value={formData.currentAddress} onChange={(v) => updateFormData('currentAddress', v)} placeholder="Street address" />
              </Field>

              <Field label="City *">
                <TextInput value={formData.city} onChange={(v) => updateFormData('city', v)} placeholder="City name" />
              </Field>

              <Field label="PIN Code *">
                <TextInput value={formData.pinCode} onChange={(v) => updateFormData('pinCode', v)} placeholder="123456" />
              </Field>

              <Field label="Business Name *">
                <TextInput value={formData.businessName} onChange={(v) => updateFormData('businessName', v)} placeholder="Business name" />
              </Field>

              <Field label="Business PAN *">
                <TextInput value={formData.businessPan} onChange={(v) => updateFormData('businessPan', v)} placeholder="AAABBB1234C" />
              </Field>

              <Field label="GSTIN Number *">
                <TextInput value={formData.gstin} onChange={(v) => updateFormData('gstin', v)} placeholder="27AAPBS1234B1Z0" />
              </Field>

              <Field label="Business Address *">
                <TextInput value={formData.businessAddress} onChange={(v) => updateFormData('businessAddress', v)} placeholder="Business address" />
              </Field>

              <Field label="Business Vintage (Years) *">
                <TextInput value={formData.businessVintage} onChange={(v) => updateFormData('businessVintage', v)} placeholder="2" />
              </Field>

              <Field label="Annual Turnover (₹) *">
                <TextInput value={formData.annualTurnover} onChange={(v) => updateFormData('annualTurnover', v)} placeholder="5000000" />
              </Field>

              <div className="mt-8 flex justify-between gap-3">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext} disabled={!formData.ownerName || !formData.panNumber || !formData.businessName}>
                  Next
                </PrimaryButton>
              </div>
            </div>
          )}

          {/* STEP 3: Loan Details */}
          {currentStep === 3 && (
            <div className="space-y-5 [animation:loanStepIn_0.3s_ease-out_both]">
              <Field label="Finance Type">
                <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[#1F2937]">{formData.financeType}</div>
              </Field>

              <Field label="Loan Amount (₹)">
                <input
                  type="range"
                  min="500000"
                  max="1000000000"
                  value={formData.loanAmount}
                  onChange={(e) => updateFormData('loanAmount', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="mt-2 text-lg text-[#2563EB]">₹{formData.loanAmount.toLocaleString('en-IN')}</div>
              </Field>

              <Field label="Loan Tenure (Months)">
                <select
                  value={formData.loanTenure}
                  onChange={(e) => updateFormData('loanTenure', e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937]"
                >
                  {[12, 24, 36, 48, 60, 72, 84, 96, 108, 120].map((m) => (
                    <option key={m} value={m}>
                      {m} months
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Monthly Business Income (₹) *">
                <TextInput value={formData.monthlyIncome} onChange={(v) => updateFormData('monthlyIncome', v)} placeholder="500000" />
              </Field>

              <Field label="Existing EMI / Obligations (₹)">
                <TextInput value={formData.existingEmi} onChange={(v) => updateFormData('existingEmi', v)} placeholder="0" />
              </Field>

              <Field label="Collateral Available">
                <select
                  value={formData.collateralAvailable}
                  onChange={(e) => updateFormData('collateralAvailable', e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937]"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>

              {formData.collateralAvailable === 'Yes' && (
                <>
                  <Field label="Type of Collateral">
                    <select
                      value={formData.collateralType}
                      onChange={(e) => updateFormData('collateralType', e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937]"
                    >
                      <option value="">Select collateral type</option>
                      <option>Property</option>
                      <option>Machinery</option>
                      <option>Stock / Inventory</option>
                      <option>Fixed Deposit</option>
                      <option>Other</option>
                    </select>
                  </Field>

                  <Field label="Estimated Value (₹)">
                    <TextInput value={formData.collateralValue} onChange={(v) => updateFormData('collateralValue', v)} placeholder="0" />
                  </Field>
                </>
              )}

              <Field label="Loan Purpose">
                <select
                  value={formData.loanPurpose}
                  onChange={(e) => updateFormData('loanPurpose', e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937]"
                >
                  <option value="">Select purpose</option>
                  <option>Business Expansion</option>
                  <option>Working Capital</option>
                  <option>Machinery Purchase</option>
                  <option>Raw Material Purchase</option>
                  <option>Plant Setup</option>
                  <option>Project Finance</option>
                  <option>Debt Consolidation</option>
                  <option>Government Scheme Application</option>
                  <option>Other</option>
                </select>
              </Field>

              <div className="mt-8 flex justify-between gap-3">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext} disabled={!formData.monthlyIncome}>
                  Next
                </PrimaryButton>
              </div>
            </div>
          )}

          {/* STEP 4: Mobile Verify */}
          {currentStep === 4 && (
            <div className="text-center [animation:loanStepIn_0.3s_ease-out_both]">
              <h2 className="mb-2 text-2xl text-[#1F2937]">Verify Your Mobile Number</h2>
              <p className="mb-8 text-gray-600">Enter your 10-digit mobile number to verify</p>

              <Field label="Mobile Number">
                <div className="flex gap-2">
                  <div className="flex items-center rounded-xl border border-gray-200 bg-white/90 px-3 text-[#1F2937]">+91</div>
                  <TextInput
                    value={formData.mobileNumber}
                    onChange={(v) => updateFormData('mobileNumber', v)}
                    placeholder="9876543210"
                    type="tel"
                  />
                </div>
              </Field>

              {!otpSent ? (
                <PrimaryButton onClick={() => setOtpSent(true)} className="mt-8 w-full" disabled={formData.mobileNumber.length !== 10}>
                  Send OTP
                </PrimaryButton>
              ) : !mobileVerified ? (
                <>
                  <div className="mb-6 mt-8">
                    <p className="mb-4 text-sm text-gray-600">Enter the 6-digit OTP sent to +91{formData.mobileNumber}</p>
                    <div className="flex justify-center gap-2">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`industry-finance-otp-${index}`}
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          className="h-12 w-12 rounded-lg border-2 border-gray-200 text-center text-xl font-bold focus:border-[#2563EB] focus:outline-none"
                        />
                      ))}
                    </div>
                  </div>

                  <PrimaryButton
                    onClick={() => setMobileVerified(true)}
                    className="mt-8 w-full"
                    disabled={otp.some((d) => !d)}
                  >
                    Verify OTP
                  </PrimaryButton>

                  <button className="mt-4 text-sm text-[#2563EB] hover:underline">Resend OTP</button>
                </>
              ) : (
                <div className="mt-8 rounded-xl bg-green-50 p-4 text-green-700">✓ Mobile verified successfully</div>
              )}

              <div className="mt-8 flex justify-between gap-3">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext} disabled={!mobileVerified}>
                  Next
                </PrimaryButton>
              </div>
            </div>
          )}

          {/* STEP 5: Upload Documents */}
          {currentStep === 5 && (
            <div className="[animation:loanStepIn_0.3s_ease-out_both]">
              <h2 className="mb-2 text-2xl text-[#1F2937]">Upload Documents</h2>
              <p className="mb-6 text-sm text-gray-600">
                Documents shown based on your industry and business type selection ({uploadedRequiredCount}/{requiredDocumentsCount} required)
              </p>

              <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {documentsRequired.map((doc) => (
                  <UploadBox
                    key={doc.key}
                    documentItem={doc}
                    fileName={uploadedFiles[doc.key]}
                    onUpload={handleUpload}
                  />
                ))}
              </div>

              <div className="mt-8 flex justify-between gap-3">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext} disabled={uploadedRequiredCount < requiredDocumentsCount}>
                  Next
                </PrimaryButton>
              </div>
            </div>
          )}

          {/* STEP 6: Review & Submit */}
          {currentStep === 6 && (
            <div className="space-y-6 [animation:loanStepIn_0.3s_ease-out_both]">
              <h2 className="text-2xl text-[#1F2937]">Review & Submit</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-gray-600">Loan Type</p>
                  <p className="text-lg font-semibold text-[#1F2937]">Industry Finance</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-gray-600">Industry</p>
                  <p className="text-lg font-semibold text-[#1F2937]">{formData.industryType}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-gray-600">Business Structure</p>
                  <p className="text-lg font-semibold text-[#1F2937]">{formData.businessStructure}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-gray-600">Finance Type</p>
                  <p className="text-lg font-semibold text-[#1F2937]">{formData.financeType}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-gray-600">Business Name</p>
                  <p className="text-lg font-semibold text-[#1F2937]">{formData.businessName}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-gray-600">Owner Name</p>
                  <p className="text-lg font-semibold text-[#1F2937]">{formData.ownerName}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-gray-600">Loan Amount</p>
                  <p className="text-lg font-semibold text-[#1F2937]">₹{formData.loanAmount.toLocaleString('en-IN')}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-gray-600">Tenure</p>
                  <p className="text-lg font-semibold text-[#1F2937]">{formData.loanTenure} months</p>
                </div>
              </div>

              <div className="rounded-xl border-2 border-gray-200 p-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded accent-[#2563EB]"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the Terms & Conditions and authorize Sanskruti Associates to fetch my credit information and contact me.
                  </span>
                </label>
              </div>

              <div className="mt-8 flex justify-between gap-3">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={submitApplication} disabled={!termsAccepted} className="w-full sm:w-auto">
                  Submit Industry Finance Application
                </PrimaryButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
