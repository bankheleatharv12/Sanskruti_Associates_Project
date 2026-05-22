import { useState } from 'react';
import {
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  MessageCircle,
  Upload,
  User,
} from 'lucide-react';

const steps = [
  'Employment Type',
  'Personal Details',
  'Loan Details',
  'Mobile Verify',
  'Upload Documents',
  'Review & Submit',
];

const employmentTypes = [
  {
    id: 'Government Employee',
    title: 'Government Employee',
    subtext: 'Central or State Govt job',
    icon: Building2,
  },
  {
    id: 'Private Employee',
    title: 'Private Employee',
    subtext: 'Private company salaried',
    icon: Briefcase,
  },
  {
    id: 'Self Employed',
    title: 'Self Employed',
    subtext: 'Business owner or freelancer',
    icon: User,
  },
];

const salariedDocuments = [
  { key: 'PAN Card', label: 'PAN Card', required: true },
  { key: 'Aadhaar Card', label: 'Aadhaar Card', required: true },
  { key: 'Address Proof', label: 'Address Proof', required: true },
  { key: 'Salary Slip (3 months)', label: 'Salary Slip (3 months)', required: true },
  { key: 'Bank Statement (6 months)', label: 'Bank Statement (6 months)', required: true },
  { key: 'Form 16 (2 years)', label: 'Form 16 (2 years)', required: true },
  { key: 'Office ID Card', label: 'Office ID Card', required: true },
  { key: 'Photo', label: 'Photo', required: true },
];

const selfEmployedDocuments = [
  { key: 'PAN Card', label: 'PAN Card', required: true },
  { key: 'Aadhaar Card', label: 'Aadhaar Card', required: true },
  { key: 'Address Proof', label: 'Address Proof', required: true },
  { key: 'ITR 3 Years', label: 'ITR 3 Years', required: true },
  { key: 'Bank Statement 1 Year', label: 'Bank Statement 1 Year', required: true },
  { key: 'GST Registration', label: 'GST Registration', required: false },
  { key: 'Business Proof', label: 'Business Proof', required: true },
  { key: 'Photo', label: 'Photo', required: true },
];

const loanPurposes = [
  'Medical Emergency',
  'Home Renovation',
  'Wedding',
  'Travel',
  'Education',
  'Other',
];

const tenures = [12, 24, 36, 48, 60];

const initialFormData = {
  fullName: '',
  dateOfBirth: '',
  panNumber: '',
  aadhaarNumber: '',
  currentAddress: '',
  city: '',
  pinCode: '',
  loanAmount: 500000,
  loanTenure: '36',
  monthlySalary: '',
  existingEmi: '',
  purposeOfLoan: '',
  mobileNumber: '',
};

function PersonalLoanFormStyles() {
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

export function PersonalLoanForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [employmentType, setEmploymentType] = useState('');
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

  const documents =
    employmentType === 'Self Employed' ? selfEmployedDocuments : salariedDocuments;

  const uploadedRequiredCount = documents.filter(
    (documentItem) => documentItem.required && uploadedFiles[documentItem.key],
  ).length;

  const requiredDocumentsCount = documents.filter((documentItem) => documentItem.required).length;
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

  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(0, 1);
    const nextOtp = [...otp];
    nextOtp[index] = digit;
    setOtp(nextOtp);

    if (digit && index < 5) {
      document.getElementById(`personal-loan-otp-${index + 1}`)?.focus();
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
        <PersonalLoanFormStyles />
        <div className="absolute inset-0 z-0">
          <img
            src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg"
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
              Application Submitted Successfully
            </h1>
            <p className="mb-2 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.25s_both]">
              Application ID generated
            </p>
            <p className="mb-5 text-3xl text-[#2563EB] [animation:loanFadeUp_0.5s_ease-out_0.35s_both]">
              PL-{Date.now().toString().slice(-8)}
            </p>
            <p className="mb-8 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.45s_both]">
              Our team will contact you within 2 hours
            </p>
            <button
              onClick={() => setShowWhatsAppPopup(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] [animation:loanFadeUp_0.5s_ease-out_0.55s_both]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </button>
            {showWhatsAppPopup && (
              <div className="mt-5 rounded-2xl border border-green-100 bg-green-50 p-5 text-center shadow-lg [animation:loanFadeUp_0.3s_ease-out_both]">
                <p className="mb-2 text-sm text-gray-600">WhatsApp Number</p>
                <p className="mb-4 text-2xl text-[#16A34A]">+91 7758 96 9798</p>
                <a
                  href="https://wa.me/917758969798"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-6 py-3 text-white transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden py-12">
      <PersonalLoanFormStyles />
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-50/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ProgressBar currentStep={currentStep} />

        <div className="mx-auto rounded-[24px] border border-white/95 bg-white/90 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-8 [animation:loanStepIn_0.3s_ease-in-out_both]">
          {currentStep === 1 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">
                What is your employment type?
              </h1>
              <div className="grid gap-5 md:grid-cols-3">
                {employmentTypes.map((type) => {
                  const Icon = type.icon;
                  const selected = employmentType === type.id;

                  return (
                    <button
                      key={type.id}
                      onClick={() => setEmploymentType(type.id)}
                      className={`relative rounded-3xl border-2 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:shadow-xl hover:shadow-blue-500/10 active:[animation:loanCardTap_0.22s_ease-out] ${
                        selected
                          ? 'border-[#2563EB] bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white shadow-xl shadow-blue-500/25'
                          : 'border-[#2563EB]/25 bg-white text-[#1F2937]'
                      }`}
                    >
                      {selected ? (
                        <CheckCircle2 className="absolute right-5 top-5 h-6 w-6 text-[#16A34A]" />
                      ) : null}
                      <div
                        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                          selected ? 'bg-white/15 text-white' : 'bg-blue-50 text-[#2563EB]'
                        }`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className={`mb-2 text-xl ${selected ? 'text-white' : 'text-[#1F2937]'}`}>
                        {type.title}
                      </h2>
                      <p className={selected ? 'text-blue-100' : 'text-gray-600'}>{type.subtext}</p>
                    </button>
                  );
                })}
              </div>

              {employmentType && (
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
                <Field label="Full Name">
                  <TextInput
                    value={formData.fullName}
                    onChange={(value) => updateFormData('fullName', value)}
                  />
                </Field>
                <Field label="Date of Birth">
                  <TextInput
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(value) => updateFormData('dateOfBirth', value)}
                  />
                </Field>
                <Field label="PAN Number">
                  <TextInput
                    value={formData.panNumber}
                    onChange={(value) => updateFormData('panNumber', value.toUpperCase())}
                  />
                </Field>
                <Field label="Aadhaar Number">
                  <TextInput
                    value={formData.aadhaarNumber}
                    onChange={(value) => updateFormData('aadhaarNumber', value)}
                  />
                </Field>
                <div className="md:col-span-2">
                  <Field label="Current Address">
                    <textarea
                      value={formData.currentAddress}
                      onChange={(event) => updateFormData('currentAddress', event.target.value)}
                      className="min-h-28 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    />
                  </Field>
                </div>
                <Field label="City">
                  <TextInput
                    value={formData.city}
                    onChange={(value) => updateFormData('city', value)}
                  />
                </Field>
                <Field label="PIN Code">
                  <TextInput
                    value={formData.pinCode}
                    onChange={(value) => updateFormData('pinCode', value)}
                  />
                </Field>
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
                <Field label={`Loan Amount (Rs. ${Number(formData.loanAmount).toLocaleString('en-IN')})`}>
                  <input
                    type="range"
                    min="50000"
                    max="4000000"
                    step="50000"
                    value={formData.loanAmount}
                    onChange={(event) => updateFormData('loanAmount', Number(event.target.value))}
                    className="h-2 w-full appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Loan Tenure">
                    <select
                      value={formData.loanTenure}
                      onChange={(event) => updateFormData('loanTenure', event.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    >
                      {tenures.map((tenure) => (
                        <option key={tenure} value={tenure}>
                          {tenure} months
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Monthly Salary (Rs.)">
                    <TextInput
                      type="number"
                      value={formData.monthlySalary}
                      onChange={(value) => updateFormData('monthlySalary', value)}
                    />
                  </Field>
                  <Field label="Existing EMI per month">
                    <TextInput
                      type="number"
                      value={formData.existingEmi}
                      onChange={(value) => updateFormData('existingEmi', value)}
                    />
                  </Field>
                  <Field label="Purpose of Loan">
                    <select
                      value={formData.purposeOfLoan}
                      onChange={(event) => updateFormData('purposeOfLoan', event.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    >
                      <option value="">Select purpose</option>
                      {loanPurposes.map((purpose) => (
                        <option key={purpose} value={purpose}>
                          {purpose}
                        </option>
                      ))}
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
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">
                Verify Your Mobile Number
              </h1>
              <div className="max-w-xl">
                <Field label="Mobile Number">
                  <div className="flex">
                    <span className="rounded-l-xl border border-r-0 border-gray-200 bg-blue-50 px-4 py-3 text-[#1F2937]">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(event) => updateFormData('mobileNumber', event.target.value)}
                      className="w-full rounded-r-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    />
                  </div>
                </Field>

                <PrimaryButton onClick={() => setOtpSent(true)} className="mt-5">
                  Send OTP
                </PrimaryButton>

                {otpSent && (
                  <div className="mt-8 [animation:loanFadeUp_0.35s_ease-out_both]">
                    <div className="mb-5 flex gap-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`personal-loan-otp-${index}`}
                          type="text"
                          value={digit}
                          onChange={(event) => handleOtpChange(index, event.target.value)}
                          className={`h-[60px] w-[50px] border-0 border-b-4 bg-transparent text-center text-2xl text-[#1F2937] outline-none transition-all duration-300 ${
                            mobileVerified
                              ? 'border-[#16A34A]'
                              : digit
                                ? 'border-[#2563EB] shadow-[0_10px_24px_rgba(37,99,235,0.18)]'
                                : 'border-gray-300 focus:border-[#2563EB] focus:shadow-[0_10px_24px_rgba(37,99,235,0.18)]'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setMobileVerified(true)}
                        className="rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-7 py-3 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
                      >
                        Verify
                      </button>
                      <button
                        onClick={() => setOtp(['', '', '', '', '', ''])}
                        className="text-[#2563EB] transition-colors hover:text-[#1E40AF]"
                      >
                        Resend OTP
                      </button>
                    </div>
                    {mobileVerified && (
                      <p className="mt-4 flex items-center gap-2 text-[#16A34A]">
                        <CheckCircle2 className="h-5 w-5" />
                        Mobile number verified
                      </p>
                    )}
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
              <h1 className="mb-2 text-2xl text-[#1F2937] sm:text-3xl">Upload Documents</h1>
              <p className="mb-6 text-gray-600">Documents shown for {employmentType}</p>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {documents.map((documentItem) => (
                  <UploadBox
                    key={documentItem.key}
                    documentItem={documentItem}
                    fileName={uploadedFiles[documentItem.key]}
                    onUpload={handleUpload}
                  />
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
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Review and Submit</h1>

              <div className="space-y-5">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                  <p className="mb-1 text-sm text-gray-500">Loan type</p>
                  <p className="text-lg text-[#1F2937]">Personal Loan</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">Employment type</p>
                    <p className="text-[#1F2937]">{employmentType}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">Documents uploaded count</p>
                    <p className="text-[#1F2937]">
                      {uploadedTotalCount} uploaded, {uploadedRequiredCount} of {requiredDocumentsCount} required
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                  <h2 className="mb-4 text-xl text-[#1F2937]">Personal details summary</h2>
                  <div className="grid gap-3 text-gray-700 md:grid-cols-2">
                    <p>Full Name: {formData.fullName}</p>
                    <p>Date of Birth: {formData.dateOfBirth}</p>
                    <p>PAN Number: {formData.panNumber}</p>
                    <p>Aadhaar Number: {formData.aadhaarNumber}</p>
                    <p>City: {formData.city}</p>
                    <p>PIN Code: {formData.pinCode}</p>
                    <p className="md:col-span-2">Current Address: {formData.currentAddress}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                  <h2 className="mb-4 text-xl text-[#1F2937]">Loan amount and tenure</h2>
                  <div className="grid gap-3 text-gray-700 md:grid-cols-2">
                    <p>Loan Amount: Rs. {Number(formData.loanAmount).toLocaleString('en-IN')}</p>
                    <p>Loan Tenure: {formData.loanTenure} months</p>
                    <p>Monthly Salary: Rs. {formData.monthlySalary}</p>
                    <p>Existing EMI: Rs. {formData.existingEmi}</p>
                    <p>Purpose of Loan: {formData.purposeOfLoan}</p>
                  </div>
                </div>

                <label className="flex items-start gap-3 text-gray-700">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(event) => setTermsAccepted(event.target.checked)}
                    className="mt-1 accent-[#2563EB]"
                  />
                  <span>Terms and conditions checkbox</span>
                </label>

                <div className="flex justify-between gap-4">
                  <BackButton onClick={goPrevious}>Previous</BackButton>
                  <button
                    onClick={submitApplication}
                    disabled={!termsAccepted}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none"
                  >
                    Submit Application
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
