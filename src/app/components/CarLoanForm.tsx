import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Briefcase,
  Building2,
  Car,
  CarFront,
  Check,
  CheckCircle2,
  MessageCircle,
  Upload,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const steps = [
  'Loan Type',
  'Personal Details',
  'Car & Loan Details',
  'Mobile Verify',
  'Documents',
  'Review & Submit',
];

const newCarSalariedDocs = [
  { key: 'PAN Card', label: 'PAN Card', required: true, section: 'KYC Documents' },
  { key: 'Aadhaar Card', label: 'Aadhaar Card', required: true, section: 'KYC Documents' },
  { key: 'Address Proof', label: 'Address Proof', required: true, section: 'KYC Documents' },
  { key: 'Passport-size Photo', label: 'Passport-size Photo', required: true, section: 'KYC Documents' },
  { key: 'Salary Slips', label: 'Salary Slips for last 3 months', required: true, section: 'Income Documents' },
  { key: 'Bank Statements', label: 'Bank Statements for last 6 months', required: true, section: 'Income Documents' },
  { key: 'Form 16', label: 'Form 16 for last 2 years', required: true, section: 'Income Documents' },
  { key: 'Office ID Card', label: 'Office ID Card / Employee ID', required: true, section: 'Income Documents' },
  { key: 'Car Quotation', label: 'Car Quotation from Dealer', required: true, section: 'Vehicle Documents' },
];

const newCarSelfEmployedDocs = [
  { key: 'PAN Card', label: 'PAN Card', required: true, section: 'KYC Documents' },
  { key: 'Aadhaar Card', label: 'Aadhaar Card', required: true, section: 'KYC Documents' },
  { key: 'Address Proof', label: 'Address Proof', required: true, section: 'KYC Documents' },
  { key: 'Passport-size Photo', label: 'Passport-size Photo', required: true, section: 'KYC Documents' },
  { key: 'ITR', label: 'ITR for last 2-3 years', required: true, section: 'Business + Income' },
  { key: 'Bank Statements', label: 'Bank Statements last 6-12 months', required: true, section: 'Business + Income' },
  { key: 'GST Registration', label: 'GST Registration Certificate', required: true, section: 'Business + Income' },
  { key: 'Business Proof', label: 'Business Proof', required: true, section: 'Business + Income' },
  { key: 'Ownership Proof', label: 'Ownership / Business Address Proof', required: true, section: 'Business + Income' },
  { key: 'Car Quotation', label: 'Car Quotation from Dealer', required: true, section: 'Vehicle Documents' },
];

const usedCarSalariedDocs = [
  { key: 'PAN Card', label: 'PAN Card', required: true, section: 'KYC Documents' },
  { key: 'Aadhaar Card', label: 'Aadhaar Card', required: true, section: 'KYC Documents' },
  { key: 'Address Proof', label: 'Address Proof', required: true, section: 'KYC Documents' },
  { key: 'Passport-size Photo', label: 'Passport-size Photo', required: true, section: 'KYC Documents' },
  { key: 'Salary Slips', label: 'Salary Slips for last 3 months', required: true, section: 'Income Documents' },
  { key: 'Bank Statements', label: 'Bank Statements for last 6 months', required: true, section: 'Income Documents' },
  { key: 'Form 16', label: 'Form 16 for last 2 years', required: true, section: 'Income Documents' },
  { key: 'Office ID Card', label: 'Office ID Card', required: true, section: 'Income Documents' },
  { key: 'RC Copy', label: 'RC of the Vehicle', required: true, section: 'Vehicle Documents' },
  { key: 'Insurance Copy', label: 'Insurance Copy of Vehicle', required: true, section: 'Vehicle Documents' },
];

const usedCarSelfEmployedDocs = [
  { key: 'PAN Card', label: 'PAN Card', required: true, section: 'KYC Documents' },
  { key: 'Aadhaar Card', label: 'Aadhaar Card', required: true, section: 'KYC Documents' },
  { key: 'Address Proof', label: 'Address Proof', required: true, section: 'KYC Documents' },
  { key: 'Passport-size Photo', label: 'Passport-size Photo', required: true, section: 'KYC Documents' },
  { key: 'ITR', label: 'ITR for last 2-3 years', required: true, section: 'Business + Income' },
  { key: 'Bank Statements', label: 'Bank Statements last 6-12 months', required: true, section: 'Business + Income' },
  { key: 'GST Registration', label: 'GST Registration Certificate', required: true, section: 'Business + Income' },
  { key: 'Business Proof', label: 'Business Proof', required: true, section: 'Business + Income' },
  { key: 'Ownership Proof', label: 'Ownership Proof', required: true, section: 'Business + Income' },
  { key: 'RC Copy', label: 'RC of the Vehicle', required: true, section: 'Vehicle Documents' },
  { key: 'Insurance Copy', label: 'Insurance Copy of Vehicle', required: true, section: 'Vehicle Documents' },
];

const tenures = [12, 24, 36, 48, 60, 72, 84];

const initialFormData = {
  fullName: '',
  dateOfBirth: '',
  panNumber: '',
  aadhaarNumber: '',
  currentAddress: '',
  city: '',
  pinCode: '',
  // Salaried fields
  employerName: '',
  monthlySalary: '',
  workExperience: '',
  officeIdNumber: '',
  // Self Employed fields
  businessName: '',
  businessPan: '',
  gstinNumber: '',
  businessVintage: '',
  annualTurnover: '',
  // Car & Loan details
  carBrand: '',
  carModel: '',
  carVariant: '',
  onRoadPrice: '',
  manufacturingYear: '',
  registrationNumber: '',
  currentValue: '',
  loanAmount: 800000,
  loanTenure: '60',
  dealerName: '',
  dealerLocation: '',
  existingEmi: '',
  mobileNumber: '',
};

function CarLoanFormStyles() {
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
      <div className="grid grid-cols-3 gap-y-6 lg:grid-cols-6 lg:gap-y-0">
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
                  active ? 'text-[#1F2937] font-medium' : completed ? 'text-[#16A34A]' : 'text-gray-500'
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
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

function TextInput({ value, onChange, type = 'text', placeholder = '' }: any) {
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

function UploadBox({ documentItem, fileName, onUpload }: any) {
  const inputId = `upload-${documentItem.key.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <label
      htmlFor={inputId}
      className={`group flex min-h-[176px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 p-5 text-center transition-all duration-300 ${
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
      <span className="mb-2 text-sm text-[#1F2937]">{documentItem.label}</span>
      <span
        className={`mb-3 rounded-full px-3 py-1 text-[10px] uppercase font-bold tracking-wider ${
          documentItem.required ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600'
        }`}
      >
        {documentItem.required ? '* Required' : 'Optional'}
      </span>
      <span className={`break-all text-xs ${fileName ? 'text-[#16A34A] font-medium' : 'text-gray-500'}`}>
        {fileName || 'Click to browse'}
      </span>
    </label>
  );
}

export function CarLoanForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [carType, setCarType] = useState<'new' | 'used' | ''>('');
  const [employmentType, setEmploymentType] = useState<'salaried' | 'self-employed' | ''>('');
  const [formData, setFormData] = useState(initialFormData);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateFormData = (field: string, value: any) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const getDocumentsList = () => {
    if (carType === 'new' && employmentType === 'salaried') return newCarSalariedDocs;
    if (carType === 'new' && employmentType === 'self-employed') return newCarSelfEmployedDocs;
    if (carType === 'used' && employmentType === 'salaried') return usedCarSalariedDocs;
    if (carType === 'used' && employmentType === 'self-employed') return usedCarSelfEmployedDocs;
    return newCarSalariedDocs;
  };

  const currentDocs = getDocumentsList();
  
  // Group documents by section
  const docsBySection = currentDocs.reduce((acc, doc) => {
    if (!acc[doc.section]) acc[doc.section] = [];
    acc[doc.section].push(doc);
    return acc;
  }, {} as Record<string, typeof currentDocs>);

  const goNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goPrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(0, 1);
    const nextOtp = [...otp];
    nextOtp[index] = digit;
    setOtp(nextOtp);
    if (digit && index < 5) {
      document.getElementById(`car-loan-otp-${index + 1}`)?.focus();
    }
    if (nextOtp.every((d) => d !== '')) {
      setTimeout(() => setMobileVerified(true), 300);
    }
  };

  const handleUpload = (key: string, file?: File) => {
    if (!file) return;
    setUploadedFiles((current) => ({ ...current, [key]: file.name }));
  };

  const submitApplication = () => {
    if (!termsAccepted) return;
    
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#2563EB', '#16A34A', '#FCD34D']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#2563EB', '#16A34A', '#FCD34D']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen overflow-hidden py-16">
        <CarLoanFormStyles />
        <div className="absolute inset-0 z-0">
          <img src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png" alt="" className="w-full h-full object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-white/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <div className="rounded-[24px] border border-white/95 bg-white/90 p-8 text-center shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-10 [animation:loanFadeUp_0.6s_ease-out_both]">
            <svg className="mx-auto mb-5 h-24 w-24" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#16A34A" strokeWidth="7" strokeDasharray="240" strokeDashoffset="240" className="[animation:successCircle_0.8s_ease-out_forwards]" />
              <path d="M32 51 L45 64 L70 36" fill="none" stroke="#16A34A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="70" strokeDashoffset="70" className="[animation:successCheck_0.55s_ease-out_0.65s_forwards]" />
            </svg>
            <h1 className="mb-3 text-3xl font-bold text-[#1F2937] [animation:loanFadeUp_0.5s_ease-out_0.15s_both]">
              Car Loan Application Submitted! 🎉
            </h1>
            <p className="mb-2 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.25s_both]">
              Application ID
            </p>
            <p className="mb-5 text-3xl font-bold text-[#2563EB] [animation:loanFadeUp_0.5s_ease-out_0.35s_both]">
              SA-CL-{Math.floor(10000000 + Math.random() * 90000000)}
            </p>
            <p className="mb-8 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.45s_both]">
              Our car loan expert will contact you within 24 hours with the best offers from top banks for your profile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center [animation:loanFadeUp_0.5s_ease-out_0.55s_both]">
              <a href="https://wa.me/917758969798" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#15803D] active:scale-[0.97]">
                <MessageCircle className="h-5 w-5" />
                Chat with Our Expert
              </a>
              <button onClick={() => navigate('/')} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#2563EB] px-8 py-4 text-[#2563EB] transition-all duration-300 hover:bg-blue-50 active:scale-[0.97]">
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getSectionColor = (section: string) => {
    if (section.includes('KYC')) return 'text-[#2563EB] border-[#2563EB]/20 bg-blue-50';
    if (section.includes('Income')) return 'text-[#16A34A] border-[#16A34A]/20 bg-green-50';
    return 'text-[#F97316] border-[#F97316]/20 bg-orange-50';
  };

  return (
    <div className="relative min-h-screen overflow-hidden py-12">
      <CarLoanFormStyles />
      <div className="absolute inset-0 z-0">
        <img src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png" alt="" className="w-full h-full object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-white/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ProgressBar currentStep={currentStep} />

        <div className="mx-auto rounded-[24px] border border-white/95 bg-white/90 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-8">
          
          {currentStep === 1 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-2 text-2xl font-bold text-[#1F2937] sm:text-3xl">Select Your Car Loan Type</h1>
              <p className="mb-8 text-gray-600">Choose based on employment and car type for accurate documents</p>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-medium mb-4 text-[#1F2937]">What type of car?</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <button onClick={() => setCarType('new')} className={`flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${carType === 'new' ? 'border-[#2563EB] bg-blue-50 shadow-md' : 'border-gray-200 bg-white hover:border-[#2563EB]/50'}`}>
                      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${carType === 'new' ? 'bg-[#2563EB] text-white' : 'bg-blue-100 text-[#2563EB]'}`}>
                        <Car className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1F2937] text-lg">New Car</h3>
                        <p className="text-sm text-gray-500">Brand new car from dealer</p>
                      </div>
                      {carType === 'new' && <CheckCircle2 className="ml-auto h-6 w-6 text-[#2563EB]" />}
                    </button>
                    <button onClick={() => setCarType('used')} className={`flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${carType === 'used' ? 'border-[#16A34A] bg-green-50 shadow-md' : 'border-gray-200 bg-white hover:border-[#16A34A]/50'}`}>
                      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${carType === 'used' ? 'bg-[#16A34A] text-white' : 'bg-green-100 text-[#16A34A]'}`}>
                        <CarFront className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1F2937] text-lg">Used Car</h3>
                        <p className="text-sm text-gray-500">Pre-owned certified vehicle</p>
                      </div>
                      {carType === 'used' && <CheckCircle2 className="ml-auto h-6 w-6 text-[#16A34A]" />}
                    </button>
                  </div>
                </div>

                {carType && (
                  <div className="[animation:loanFadeUp_0.4s_ease-out_both]">
                    <h2 className="text-lg font-medium mb-4 text-[#1F2937]">What is your employment type?</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <button onClick={() => setEmploymentType('salaried')} className={`flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${employmentType === 'salaried' ? 'border-[#2563EB] bg-blue-50 shadow-md' : 'border-gray-200 bg-white hover:border-[#2563EB]/50'}`}>
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${employmentType === 'salaried' ? 'bg-[#2563EB] text-white' : 'bg-blue-100 text-[#2563EB]'}`}>
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#1F2937]">Salaried</h3>
                          <p className="text-sm text-gray-500 whitespace-pre-line">Govt or private job employee{'\n'}Min salary ₹25,000/month</p>
                        </div>
                        {employmentType === 'salaried' && <CheckCircle2 className="ml-auto h-6 w-6 text-[#2563EB]" />}
                      </button>
                      <button onClick={() => setEmploymentType('self-employed')} className={`flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${employmentType === 'self-employed' ? 'border-[#2563EB] bg-blue-50 shadow-md' : 'border-gray-200 bg-white hover:border-[#2563EB]/50'}`}>
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${employmentType === 'self-employed' ? 'bg-[#2563EB] text-white' : 'bg-blue-100 text-[#2563EB]'}`}>
                          <Building2 className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#1F2937]">Self Employed</h3>
                          <p className="text-sm text-gray-500 whitespace-pre-line">Business owner or freelancer{'\n'}ITR-based eligibility</p>
                        </div>
                        {employmentType === 'self-employed' && <CheckCircle2 className="ml-auto h-6 w-6 text-[#2563EB]" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {carType && employmentType && (
                <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6 [animation:loanFadeUp_0.4s_ease-out_both]">
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                    <CheckCircle2 className="h-4 w-4" />
                    Selected: {carType === 'new' ? 'New Car' : 'Used Car'} — {employmentType === 'salaried' ? 'Salaried' : 'Self Employed'}
                  </div>
                  <button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">
                    Next Step
                  </button>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl font-bold text-[#1F2937] sm:text-3xl">Personal Details</h1>
              <div className="grid gap-5 md:grid-cols-2 mb-8">
                <Field label="Full Name *"><TextInput value={formData.fullName} onChange={(v: string) => updateFormData('fullName', v)} /></Field>
                <Field label="Date of Birth *"><TextInput type="date" value={formData.dateOfBirth} onChange={(v: string) => updateFormData('dateOfBirth', v)} /></Field>
                <Field label="PAN Card Number *"><TextInput value={formData.panNumber} onChange={(v: string) => updateFormData('panNumber', v.toUpperCase())} /></Field>
                <Field label="Aadhaar Number *"><TextInput value={formData.aadhaarNumber} onChange={(v: string) => updateFormData('aadhaarNumber', v)} /></Field>
                <div className="md:col-span-2">
                  <Field label="Current Address *">
                    <textarea value={formData.currentAddress} onChange={(e) => updateFormData('currentAddress', e.target.value)} className="min-h-[100px] w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10" />
                  </Field>
                </div>
                <Field label="City *"><TextInput value={formData.city} onChange={(v: string) => updateFormData('city', v)} /></Field>
                <Field label="PIN Code *"><TextInput value={formData.pinCode} onChange={(v: string) => updateFormData('pinCode', v)} /></Field>
              </div>

              <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">Employment Information</h2>
              <div className="grid gap-5 md:grid-cols-2">
                {employmentType === 'salaried' ? (
                  <>
                    <Field label="Employer / Company Name *"><TextInput value={formData.employerName} onChange={(v: string) => updateFormData('employerName', v)} /></Field>
                    <Field label="Monthly Salary (₹) *"><TextInput type="number" value={formData.monthlySalary} onChange={(v: string) => updateFormData('monthlySalary', v)} /></Field>
                    <Field label="Total Work Experience (years) *"><TextInput type="number" value={formData.workExperience} onChange={(v: string) => updateFormData('workExperience', v)} /></Field>
                    <Field label="Office ID / Employee ID Number *"><TextInput value={formData.officeIdNumber} onChange={(v: string) => updateFormData('officeIdNumber', v)} /></Field>
                  </>
                ) : (
                  <>
                    <Field label="Business Name *"><TextInput value={formData.businessName} onChange={(v: string) => updateFormData('businessName', v)} /></Field>
                    <Field label="Business PAN *"><TextInput value={formData.businessPan} onChange={(v: string) => updateFormData('businessPan', v.toUpperCase())} /></Field>
                    <Field label="GSTIN Number *"><TextInput value={formData.gstinNumber} onChange={(v: string) => updateFormData('gstinNumber', v.toUpperCase())} /></Field>
                    <Field label="Business Vintage (years) *"><TextInput type="number" value={formData.businessVintage} onChange={(v: string) => updateFormData('businessVintage', v)} /></Field>
                    <Field label="Annual Turnover (₹) *"><TextInput type="number" value={formData.annualTurnover} onChange={(v: string) => updateFormData('annualTurnover', v)} /></Field>
                  </>
                )}
              </div>

              <div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
                <button onClick={goPrevious} className="rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95">Previous</button>
                <button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-2xl font-bold text-[#1F2937] sm:text-3xl">Car & Loan Details</h1>
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-[#2563EB]">
                  {carType === 'new' ? 'New Car' : 'Used Car'} Loan
                </span>
              </div>
              
              <div className="grid gap-5 md:grid-cols-2 mb-8">
                <Field label="Car Brand *"><TextInput placeholder="e.g. Hyundai, Maruti" value={formData.carBrand} onChange={(v: string) => updateFormData('carBrand', v)} /></Field>
                <Field label="Car Model *"><TextInput placeholder="e.g. Creta, Swift" value={formData.carModel} onChange={(v: string) => updateFormData('carModel', v)} /></Field>
                <Field label="Car Variant (Optional)"><TextInput placeholder="e.g. SX, VXI" value={formData.carVariant} onChange={(v: string) => updateFormData('carVariant', v)} /></Field>
                <Field label="Approx. On-road Price (₹) *"><TextInput type="number" value={formData.onRoadPrice} onChange={(v: string) => updateFormData('onRoadPrice', v)} /></Field>
                
                {carType === 'used' && (
                  <>
                    <Field label="Manufacturing Year *">
                      <select value={formData.manufacturingYear} onChange={(e) => updateFormData('manufacturingYear', e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10">
                        <option value="">Select year</option>
                        {Array.from({ length: 10 }, (_, i) => 2024 - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Car Registration Number *"><TextInput placeholder="e.g. MH12AB1234" value={formData.registrationNumber} onChange={(v: string) => updateFormData('registrationNumber', v.toUpperCase())} /></Field>
                    <Field label="Approx. Current Value (₹) *"><TextInput type="number" placeholder="As per market valuation" value={formData.currentValue} onChange={(v: string) => updateFormData('currentValue', v)} /></Field>
                  </>
                )}
              </div>

              <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">Loan Requirements</h2>
              <div className="space-y-6">
                <Field label={`Loan Amount Required: ₹ ${Number(formData.loanAmount).toLocaleString('en-IN')}`}>
                  <input type="range" min="100000" max={carType === 'new' ? "5000000" : "2500000"} step="50000" value={formData.loanAmount} onChange={(e) => updateFormData('loanAmount', Number(e.target.value))} className="h-2 w-full appearance-none rounded-full bg-blue-100 accent-[#2563EB]" />
                </Field>
                
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Loan Tenure">
                    <select value={formData.loanTenure} onChange={(e) => updateFormData('loanTenure', e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10">
                      {tenures.map(t => <option key={t} value={t}>{t} months</option>)}
                    </select>
                  </Field>
                  <Field label="Existing EMI per month (if any)"><TextInput type="number" value={formData.existingEmi} onChange={(v: string) => updateFormData('existingEmi', v)} /></Field>
                  <Field label="Dealer Name (Optional)"><TextInput value={formData.dealerName} onChange={(v: string) => updateFormData('dealerName', v)} /></Field>
                  <Field label="Dealer Location (Optional)"><TextInput value={formData.dealerLocation} onChange={(v: string) => updateFormData('dealerLocation', v)} /></Field>
                </div>
              </div>

              <div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
                <button onClick={goPrevious} className="rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95">Previous</button>
                <button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl font-bold text-[#1F2937] sm:text-3xl">Verify Your Mobile Number</h1>
              <div className="max-w-xl">
                <Field label="Mobile Number">
                  <div className="flex">
                    <span className="rounded-l-xl border border-r-0 border-gray-200 bg-blue-50 px-4 py-3 text-[#1F2937] font-medium">+91</span>
                    <input type="tel" maxLength={10} value={formData.mobileNumber} onChange={(e) => updateFormData('mobileNumber', e.target.value.replace(/\D/g, ''))} className="w-full rounded-r-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] font-medium tracking-wide shadow-sm transition-all focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10" />
                  </div>
                </Field>
                
                <button onClick={() => setOtpSent(true)} className="mt-5 rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Send OTP</button>

                {otpSent && (
                  <div className="mt-8 [animation:loanFadeUp_0.35s_ease-out_both]">
                    <div className="mb-5 flex gap-3">
                      {otp.map((digit, i) => (
                        <input key={i} id={`car-loan-otp-${i}`} type="text" maxLength={1} value={digit} onChange={(e) => handleOtpChange(i, e.target.value)} className={`h-[60px] w-[50px] border-0 border-b-4 bg-transparent text-center text-2xl font-bold text-[#1F2937] outline-none transition-all duration-300 ${mobileVerified ? 'border-[#16A34A]' : digit ? 'border-[#2563EB]' : 'border-gray-300 focus:border-[#2563EB]'}`} />
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <button onClick={() => setMobileVerified(true)} className={`rounded-xl px-8 py-3 text-white shadow-md transition-all active:scale-95 ${mobileVerified ? 'bg-[#16A34A] pointer-events-none' : 'bg-gradient-to-r from-[#16A34A] to-[#22C55E] hover:brightness-110'}`}>{mobileVerified ? 'Verified' : 'Verify'}</button>
                      {!mobileVerified && <button onClick={() => setOtp(['', '', '', '', '', ''])} className="text-[#2563EB] font-medium hover:underline">Resend OTP</button>}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
                <button onClick={goPrevious} className="rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95">Previous</button>
                {mobileVerified && <button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <div className="mb-8">
                <h1 className="mb-2 text-2xl font-bold text-[#1F2937] sm:text-3xl">Documents Required</h1>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-[#2563EB]">
                  {carType === 'new' ? 'New Car' : 'Used Car'} — {employmentType === 'salaried' ? 'Salaried' : 'Self Employed'} Documents
                </div>
              </div>

              <div className="space-y-8">
                {Object.entries(docsBySection).map(([sectionName, items]) => (
                  <div key={sectionName} className={`rounded-2xl border p-6 ${getSectionColor(sectionName)}`}>
                    <h2 className="mb-4 text-lg font-semibold">{sectionName}</h2>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map(doc => (
                        <UploadBox key={doc.key} documentItem={doc} fileName={uploadedFiles[doc.key]} onUpload={handleUpload} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
                <button onClick={goPrevious} className="rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95">Previous</button>
                <button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl font-bold text-[#1F2937] sm:text-3xl">Review & Submit</h1>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">Loan Type</p>
                  <p className="font-semibold text-[#1F2937]">Car Loan</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">Car & Employment</p>
                  <p className="font-semibold text-[#1F2937]">{carType === 'new' ? 'New' : 'Used'} Car — {employmentType === 'salaried' ? 'Salaried' : 'Self Employed'}</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">Loan Amount</p>
                  <p className="font-bold text-[#2563EB] text-xl">₹ {Number(formData.loanAmount).toLocaleString('en-IN')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 font-semibold text-[#1F2937] border-b pb-2">Vehicle Details</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div><p className="text-gray-500">Brand</p><p className="font-medium text-[#1F2937]">{formData.carBrand || '-'}</p></div>
                    <div><p className="text-gray-500">Model</p><p className="font-medium text-[#1F2937]">{formData.carModel || '-'}</p></div>
                    <div><p className="text-gray-500">On-road Price</p><p className="font-medium text-[#1F2937]">₹ {formData.onRoadPrice || '-'}</p></div>
                    <div><p className="text-gray-500">Tenure</p><p className="font-medium text-[#1F2937]">{formData.loanTenure} Months</p></div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 font-semibold text-[#1F2937] border-b pb-2">Applicant Details</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div><p className="text-gray-500">Name</p><p className="font-medium text-[#1F2937]">{formData.fullName || '-'}</p></div>
                    <div><p className="text-gray-500">PAN Card</p><p className="font-medium text-[#1F2937]">{formData.panNumber ? `${formData.panNumber.substring(0, 2)}XXXXXX${formData.panNumber.substring(8)}` : '-'}</p></div>
                    <div><p className="text-gray-500">Mobile</p><p className="font-medium text-[#1F2937]">+91 {formData.mobileNumber || '-'}</p></div>
                    <div><p className="text-gray-500">Documents</p><p className="font-medium text-[#16A34A]">{Object.keys(uploadedFiles).length} Uploaded</p></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <label className="flex items-start gap-3 mb-6 cursor-pointer">
                  <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="mt-1 h-5 w-5 accent-[#16A34A] rounded border-gray-300" />
                  <span className="text-sm text-gray-600">I hereby declare that the information provided is true and correct. I authorize Sanskruti Associates and its banking partners to verify my details, fetch my credit report, and contact me via call/SMS/WhatsApp regarding this application.</span>
                </label>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={goPrevious} className="rounded-xl border border-gray-300 px-8 py-4 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95 sm:w-auto w-full">Previous</button>
                  <button disabled={!termsAccepted} onClick={submitApplication} className="flex-1 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                    Submit Car Loan Application
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
