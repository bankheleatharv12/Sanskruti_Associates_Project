import { useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import confetti from 'canvas-confetti';
import {
  Building2,
  Check,
  CheckCircle2,
  Heart,
  MessageCircle,
  Upload,
  User,
  Users,
} from 'lucide-react';

const steps = [
  'Business Type',
  'Personal Details',
  'Loan Details',
  'Mobile Verify',
  'Documents',
  'Review & Submit',
];

const businessTypes = [
  { id: 'Proprietorship', title: 'Proprietorship', subtext: 'Single owner business', icon: User },
  { id: 'Partnership', title: 'Partnership', subtext: '2 or more partners', icon: Users },
  { id: 'LLP', title: 'LLP', subtext: 'Limited liability partnership', icon: Users },
  {
    id: 'Private Limited Company',
    title: 'Private Limited Company',
    subtext: 'Registered Pvt Ltd company',
    icon: Building2,
  },
  { id: 'Trust / Society / NGO', title: 'Trust / Society / NGO', subtext: 'Registered trust or society', icon: Heart },
];

const documents = [
  { key: 'PAN Card', label: 'PAN Card', required: true },
  { key: 'Aadhaar Card', label: 'Aadhaar Card', required: true },
  { key: 'Address Proof', label: 'Address Proof', required: true },
  { key: 'ITR 3 Years with Financial Statements', label: 'ITR 3 Years with Financial Statements', required: true },
  { key: 'Bank Statement 6-12 Months All Accounts', label: 'Bank Statement 6-12 Months All Accounts', required: true },
  { key: 'GST Registration Certificate', label: 'GST Registration Certificate', required: true },
  { key: 'GST Return 3B GSTR Last 1 Year', label: 'GST Return 3B GSTR Last 1 Year', required: true },
  { key: 'Business Proof - 3 Years Old', label: 'Business Proof - 3 Years Old', required: true },
  { key: 'Ownership Proof / Rent Agreement', label: 'Ownership Proof / Rent Agreement', required: true },
  { key: 'Photo', label: 'Photo', required: true },
  { key: 'Nominee PAN Card', label: 'Nominee PAN Card', required: true },
  { key: 'Nominee Aadhaar Card', label: 'Nominee Aadhaar Card', required: true },
  { key: 'Nominee Photo', label: 'Nominee Photo', required: true },
  {
    key: 'Udyam / Shop Act / Trade License / Incorporation Certificate',
    label: 'Udyam / Shop Act / Trade License / Incorporation Certificate',
    required: true,
  },
  { key: 'Co-applicant / Guarantor Documents', label: 'Co-applicant / Guarantor Documents (Optional)', required: false },
];

const tenures = [12, 24, 36, 48, 60, 72, 84];

const loanPurposes = [
  'Working Capital',
  'Business Expansion',
  'Machinery Purchase',
  'Inventory Purchase',
  'Office Renovation',
  'Marketing & Advertising',
  'Debt Consolidation',
  'Cash Flow Management',
  'Other',
];

const initialFormData = {
  ownerFullName: '',
  dateOfBirth: '',
  panNumber: '',
  aadhaarNumber: '',
  currentAddress: '',
  city: '',
  pinCode: '',
  businessName: '',
  businessPanNumber: '',
  gstinNumber: '',
  businessVintage: '',
  udyamRegistration: '',
  loanAmount: 2500000,
  loanTenure: '60',
  annualTurnover: '',
  monthlyBusinessIncome: '',
  existingEmi: '',
  collateralAvailable: false,
  collateralDescription: '',
  repaymentPreference: 'Monthly EMI',
  loanPurpose: '',
  mobileNumber: '',
};

function BusinessLoanFormStyles() {
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
        @keyframes loanCardTap {
          0% { transform: scale(1); }
          50% { transform: scale(0.97); }
          100% { transform: scale(1); }
        }
        @keyframes successCircle {
          from { stroke-dashoffset: 240; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes successCheck {
          from { stroke-dashoffset: 70; }
          to { stroke-dashoffset: 0; }
        }
      `}
    </style>
  );
}

function ProgressBar({ currentStep }: { currentStep: number }) {
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
              <span className={`mt-3 text-xs ${active ? 'text-[#1F2937]' : completed ? 'text-[#16A34A]' : 'text-gray-500'}`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
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

function TextInput({
  value,
  onChange,
  type = 'text',
}: {
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 pr-11 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
      />
      {value ? <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#16A34A]" /> : null}
    </div>
  );
}

function PrimaryButton({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1E40AF] px-8 py-3 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function BackButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="rounded-xl border border-[#2563EB]/25 px-8 py-3 text-[#1F2937] transition-all duration-300 hover:bg-blue-50 hover:text-[#2563EB] active:scale-[0.97]"
      {...props}
    >
      {children}
    </button>
  );
}

function UploadBox({
  documentItem,
  fileName,
  onUpload,
}: {
  documentItem: { key: string; label: string; required: boolean };
  fileName?: string;
  onUpload: (key: string, file?: File) => void;
}) {
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
      <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${fileName ? 'bg-[#16A34A] text-white' : 'bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white'}`}>
        {fileName ? <CheckCircle2 className="h-7 w-7" /> : <Upload className="h-7 w-7" />}
      </div>
      <span className="mb-2 text-[#1F2937]">
        {documentItem.label.replace(' (Optional)', '')}
        {documentItem.required ? <span className="text-red-500"> *</span> : null}
      </span>
      {!documentItem.required ? <span className="mb-3 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">(Optional)</span> : null}
      <span className={`break-all text-sm ${fileName ? 'text-[#16A34A]' : 'text-gray-500'}`}>
        {fileName || 'Upload file'}
      </span>
    </label>
  );
}

export function BusinessLoanForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [businessType, setBusinessType] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const updateFormData = (field: keyof typeof initialFormData, value: string | number | boolean) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const uploadedTotalCount = documents.filter((documentItem) => uploadedFiles[documentItem.key]).length;

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

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(0, 1);
    const nextOtp = [...otp];
    nextOtp[index] = digit;
    setOtp(nextOtp);

    if (digit && index < 5) {
      document.getElementById(`business-loan-otp-${index + 1}`)?.focus();
    }
  };

  const handleUpload = (key: string, file?: File) => {
    if (!file) return;
    setUploadedFiles((current) => ({ ...current, [key]: file.name }));
  };

  const submitApplication = () => {
    if (!termsAccepted) return;
    setApplicationId(`SA-BL-${Math.floor(10000000 + Math.random() * 90000000)}`);
    setSubmitted(true);
    setTimeout(() => {
      confetti({ particleCount: 160, spread: 75, origin: { y: 0.65 } });
    }, 200);
  };

  const maskedPan = formData.panNumber
    ? `${'X'.repeat(Math.max(0, formData.panNumber.length - 4))}${formData.panNumber.slice(-4)}`
    : '';

  if (submitted) {
    return (
      <div className="relative min-h-screen overflow-hidden py-16">
        <BusinessLoanFormStyles />
        <div className="absolute inset-0 z-0">
          <img src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-blue-50/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <div className="rounded-[24px] border border-white/95 bg-white/90 p-8 text-center shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-10 [animation:loanFadeUp_0.6s_ease-out_both]">
            <svg className="mx-auto mb-5 h-24 w-24" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#16A34A" strokeWidth="7" strokeDasharray="240" strokeDashoffset="240" className="[animation:successCircle_0.8s_ease-out_forwards]" />
              <path d="M32 51 L45 64 L70 36" fill="none" stroke="#16A34A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="70" strokeDashoffset="70" className="[animation:successCheck_0.55s_ease-out_0.65s_forwards]" />
            </svg>
            <h1 className="mb-3 text-3xl text-[#1F2937]">Application Submitted Successfully! 🎉</h1>
            <p className="mb-2 text-gray-600">Application ID</p>
            <p className="mb-5 text-3xl text-[#2563EB]">{applicationId}</p>
            <p className="mb-8 text-gray-600">
              Our business loan expert will contact you within 24 hours with best lender options for your profile.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/917758969798"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat with Our Expert
              </a>
              <button
                onClick={() => navigate('/')}
                className="rounded-xl border border-[#2563EB]/30 px-8 py-4 text-[#2563EB] transition-all duration-300 hover:bg-blue-50"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden py-12">
      <BusinessLoanFormStyles />
      <div className="absolute inset-0 z-0">
        <img src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-blue-50/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ProgressBar currentStep={currentStep} />

        <div className="mx-auto rounded-[24px] border border-white/95 bg-white/90 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-8 [animation:loanStepIn_0.3s_ease-in-out_both]">
          {currentStep === 1 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Select Your Business Type</h1>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {businessTypes.map((type) => {
                  const Icon = type.icon;
                  const selected = businessType === type.id;

                  return (
                    <button
                      key={type.id}
                      onClick={() => setBusinessType(type.id)}
                      className={`relative rounded-3xl border-2 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:shadow-xl hover:shadow-blue-500/10 active:[animation:loanCardTap_0.22s_ease-out] ${
                        selected
                          ? 'border-[#2563EB] bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white shadow-xl shadow-blue-500/25'
                          : 'border-[#2563EB]/25 bg-white text-[#1F2937]'
                      }`}
                    >
                      {selected ? <CheckCircle2 className="absolute right-5 top-5 h-6 w-6 text-[#16A34A]" /> : null}
                      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${selected ? 'bg-white/15 text-white' : 'bg-blue-50 text-[#2563EB]'}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className={`mb-2 text-xl ${selected ? 'text-white' : 'text-[#1F2937]'}`}>{type.title}</h2>
                      <p className={selected ? 'text-blue-100' : 'text-gray-600'}>{type.subtext}</p>
                    </button>
                  );
                })}
              </div>

              {businessType && (
                <div className="mt-8 flex justify-end">
                  <PrimaryButton onClick={goNext}>Next</PrimaryButton>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Personal Details</h1>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Owner Full Name *"><TextInput value={formData.ownerFullName} onChange={(value) => updateFormData('ownerFullName', value)} /></Field>
                <Field label="Date of Birth *"><TextInput type="date" value={formData.dateOfBirth} onChange={(value) => updateFormData('dateOfBirth', value)} /></Field>
                <Field label="PAN Card Number *"><TextInput value={formData.panNumber} onChange={(value) => updateFormData('panNumber', value.toUpperCase())} /></Field>
                <Field label="Aadhaar Number *"><TextInput value={formData.aadhaarNumber} onChange={(value) => updateFormData('aadhaarNumber', value)} /></Field>
                <div className="md:col-span-2">
                  <Field label="Current Address *">
                    <textarea value={formData.currentAddress} onChange={(event) => updateFormData('currentAddress', event.target.value)} className="min-h-28 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10" />
                  </Field>
                </div>
                <Field label="City *"><TextInput value={formData.city} onChange={(value) => updateFormData('city', value)} /></Field>
                <Field label="PIN Code *"><TextInput value={formData.pinCode} onChange={(value) => updateFormData('pinCode', value)} /></Field>
                <Field label="Business Name *"><TextInput value={formData.businessName} onChange={(value) => updateFormData('businessName', value)} /></Field>
                <Field label="Business PAN Number *"><TextInput value={formData.businessPanNumber} onChange={(value) => updateFormData('businessPanNumber', value.toUpperCase())} /></Field>
                <Field label="GSTIN Number *"><TextInput value={formData.gstinNumber} onChange={(value) => updateFormData('gstinNumber', value.toUpperCase())} /></Field>
                <Field label="Business Vintage (Years in operation) *"><TextInput type="number" value={formData.businessVintage} onChange={(value) => updateFormData('businessVintage', value)} /></Field>
                <Field label="Udyam / MSME Registration (Optional)"><TextInput value={formData.udyamRegistration} onChange={(value) => updateFormData('udyamRegistration', value)} /></Field>
              </div>

              <div className="mt-8 flex justify-between">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext}>Next</PrimaryButton>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Loan Details</h1>
              <div className="space-y-6">
                <Field label={`Loan Amount (₹${Number(formData.loanAmount).toLocaleString('en-IN')})`}>
                  <input type="range" min="50000" max="50000000" step="50000" value={formData.loanAmount} onChange={(event) => updateFormData('loanAmount', Number(event.target.value))} className="h-2 w-full appearance-none rounded-full bg-blue-100 accent-[#2563EB]" />
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Loan Tenure">
                    <select value={formData.loanTenure} onChange={(event) => updateFormData('loanTenure', event.target.value)} className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10">
                      {tenures.map((tenure) => <option key={tenure} value={tenure}>{tenure} months</option>)}
                    </select>
                  </Field>
                  <Field label="Annual Business Turnover (₹) *">
                    <TextInput type="number" value={formData.annualTurnover} onChange={(value) => updateFormData('annualTurnover', value)} />
                    <p className="mt-2 text-xs text-gray-500">As per latest ITR</p>
                  </Field>
                  <Field label="Monthly Business Income (₹) *"><TextInput type="number" value={formData.monthlyBusinessIncome} onChange={(value) => updateFormData('monthlyBusinessIncome', value)} /></Field>
                  <Field label="Existing EMI per month"><TextInput type="number" value={formData.existingEmi} onChange={(value) => updateFormData('existingEmi', value)} /></Field>
                  <Field label="Collateral Available">
                    <button type="button" onClick={() => updateFormData('collateralAvailable', !formData.collateralAvailable)} className={`w-full rounded-xl px-4 py-3 text-left transition-all duration-300 ${formData.collateralAvailable ? 'bg-[#16A34A] text-white' : 'bg-gray-100 text-[#1F2937]'}`}>
                      {formData.collateralAvailable ? 'Yes' : 'No'}
                    </button>
                  </Field>
                  {formData.collateralAvailable && (
                    <Field label="Describe Property/Asset"><TextInput value={formData.collateralDescription} onChange={(value) => updateFormData('collateralDescription', value)} /></Field>
                  )}
                  <Field label="Repayment Preference">
                    <select value={formData.repaymentPreference} onChange={(event) => updateFormData('repaymentPreference', event.target.value)} className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10">
                      <option>Monthly EMI</option>
                      <option>Flexible (as per lender)</option>
                    </select>
                  </Field>
                  <Field label="Loan Purpose">
                    <select value={formData.loanPurpose} onChange={(event) => updateFormData('loanPurpose', event.target.value)} className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10">
                      <option value="">Select purpose</option>
                      {loanPurposes.map((purpose) => <option key={purpose} value={purpose}>{purpose}</option>)}
                    </select>
                  </Field>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext}>Next</PrimaryButton>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Verify Your Mobile Number</h1>
              <div className="max-w-xl">
                <Field label="Mobile Number">
                  <div className="flex">
                    <span className="rounded-l-xl border border-r-0 border-gray-200 bg-blue-50 px-4 py-3 text-[#1F2937]">+91</span>
                    <input type="tel" value={formData.mobileNumber} onChange={(event) => updateFormData('mobileNumber', event.target.value)} className="w-full rounded-r-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10" />
                  </div>
                </Field>

                <PrimaryButton onClick={() => setOtpSent(true)} className="mt-5">Send OTP</PrimaryButton>

                {otpSent && (
                  <div className="mt-8 [animation:loanFadeUp_0.35s_ease-out_both]">
                    <div className="mb-5 flex gap-3">
                      {otp.map((digit, index) => (
                        <input key={index} id={`business-loan-otp-${index}`} type="text" value={digit} onChange={(event) => handleOtpChange(index, event.target.value)} className={`h-[60px] w-[50px] border-0 border-b-4 bg-transparent text-center text-2xl text-[#1F2937] outline-none transition-all duration-300 ${mobileVerified ? 'border-[#16A34A]' : digit ? 'border-[#2563EB] shadow-[0_10px_24px_rgba(37,99,235,0.18)]' : 'border-gray-300 focus:border-[#2563EB] focus:shadow-[0_10px_24px_rgba(37,99,235,0.18)]'}`} />
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <button onClick={() => setMobileVerified(true)} className="rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-7 py-3 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97]">Verify OTP</button>
                      <button onClick={() => setOtp(['', '', '', '', '', ''])} className="text-[#2563EB] transition-colors hover:text-[#1E40AF]">Resend OTP</button>
                    </div>
                    {mobileVerified && <p className="mt-4 flex items-center gap-2 text-[#16A34A]"><CheckCircle2 className="h-5 w-5" />Mobile number verified</p>}
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-between">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                {mobileVerified && <PrimaryButton onClick={goNext}>Next</PrimaryButton>}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Upload Documents</h1>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {documents.map((documentItem) => (
                  <UploadBox key={documentItem.key} documentItem={documentItem} fileName={uploadedFiles[documentItem.key]} onUpload={handleUpload} />
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext}>Next</PrimaryButton>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Review & Submit</h1>

              <div className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    ['Loan Type', 'Business Loan'],
                    ['Business Type', businessType],
                    ['Business Name', formData.businessName],
                    ['Owner Name', formData.ownerFullName],
                    ['PAN', maskedPan],
                    ['Loan Amount', `₹${Number(formData.loanAmount).toLocaleString('en-IN')}`],
                    ['Tenure', `${formData.loanTenure} months`],
                    ['Documents', `${uploadedTotalCount} of 15 uploaded`],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                      <p className="mb-1 text-sm text-gray-500">{label}</p>
                      <p className="text-[#1F2937]">{value}</p>
                    </div>
                  ))}
                </div>

                <label className="flex items-start gap-3 text-gray-700">
                  <input type="checkbox" checked={termsAccepted} onChange={(event) => setTermsAccepted(event.target.checked)} className="mt-1 accent-[#2563EB]" />
                  <span>Terms & Conditions checkbox <span className="text-red-500">*</span></span>
                </label>

                <div className="flex justify-between gap-4">
                  <BackButton onClick={goPrevious}>Previous</BackButton>
                  <button onClick={submitApplication} disabled={!termsAccepted} className="flex-1 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none">
                    Submit Business Loan Application
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}