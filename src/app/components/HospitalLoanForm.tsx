import { useState } from 'react';
import {
  Briefcase,
  Building,
  Building2,
  Check,
  CheckCircle2,
  MessageCircle,
  Upload,
  User,
  Home,
  Users,
  Shield,
  Activity,
} from 'lucide-react';

const steps = [
  'Customer Type',
  'Basic Details',
  'Loan Details',
  'Mobile Verify',
  'Upload Documents',
  'Review & Submit',
];

const customerTypes = [
  { id: 'individual-doctor', name: 'Individual Doctor', icon: User, desc: 'Individual medical practitioner' },
  { id: 'clinic-owner', name: 'Clinic Owner', icon: Building, desc: 'Small clinic or medical center' },
  { id: 'nursing-home', name: 'Nursing Home', icon: Home, desc: 'Nursing home or maternity home' },
  { id: 'hospital', name: 'Hospital', icon: Building2, desc: 'General or multi-specialty' },
  { id: 'partnership-firm', name: 'Partnership Firm', icon: Users, desc: 'Medical partnership' },
  { id: 'llp', name: 'LLP', icon: Briefcase, desc: 'Limited liability partnership' },
  { id: 'private-limited', name: 'Private Limited Co.', icon: Building2, desc: 'Pvt Ltd medical company' },
  { id: 'trust-society', name: 'Trust / Society', icon: Shield, desc: 'Charitable trust or society' },
];

const specializations = [
  'General Practitioner',
  'Surgeon / Orthopedic',
  'Cardiologist',
  'Gynecologist / Obstetrician',
  'Pediatrician',
  'Dentist',
  'Radiologist',
  'Anesthesiologist',
  'ENT Specialist',
  'Ophthalmologist',
  'Other',
];

const facilityTypes = [
  'Clinic',
  'Nursing Home',
  'Maternity Home',
  'General Hospital',
  'Multi-Specialty Hospital',
  'Day Care Center',
];

const maharashtraCities = [
  'Pune', 'Mumbai', 'Nashik', 'Nagpur', 'Aurangabad',
  'Kolhapur', 'Satara', 'Solapur', 'Baramati',
  'Sangli', 'Ahmednagar', 'Jalgaon', 'Nanded',
  'Amravati', 'Latur', 'Other',
];

const loanPurposes = [
  'Hospital Setup / New Construction',
  'Clinic Expansion',
  'Add New Wing / Floor',
  'Medical Equipment Purchase',
  'Ambulance Purchase',
  'Renovation and Modernization',
  'Working Capital',
  'Takeover of Existing Loan',
  'Top Up on Existing Loan',
  'Combination Purpose',
];

const tenures = [
  { months: 12, label: '1 Year (12 months)' },
  { months: 24, label: '2 Years (24 months)' },
  { months: 36, label: '3 Years (36 months)' },
  { months: 60, label: '5 Years (60 months)' },
  { months: 84, label: '7 Years (84 months)' },
  { months: 120, label: '10 Years (120 months)' },
  { months: 144, label: '12 Years (144 months)' },
  { months: 180, label: '15 Years (180 months)' },
];

const documentSections = [
  {
    name: 'KYC Documents',
    color: 'blue',
    documents: [
      { key: 'pan-card', label: 'PAN Card', required: true },
      { key: 'aadhaar-card', label: 'Aadhaar Card', required: true },
      { key: 'address-proof', label: 'Address Proof', required: true },
      { key: 'passport-photo', label: 'Passport Photo', required: true },
      { key: 'co-applicant-pan', label: 'Co-applicant PAN', required: false },
      { key: 'co-applicant-aadhaar', label: 'Co-applicant Aadhaar', required: false },
    ]
  },
  {
    name: 'Professional Documents',
    color: 'green',
    documents: [
      { key: 'med-council-cert', label: 'Medical Council Registration Certificate', required: true },
      { key: 'qualification-cert', label: 'Qualification Certificates', required: true },
      { key: 'hospital-reg', label: 'Hospital/Clinic Registration Certificate', required: true },
      { key: 'partnership-deed', label: 'Partnership Deed', required: true },
      { key: 'incorporation-cert', label: 'Incorporation Certificate', required: true },
      { key: 'trust-deed', label: 'Trust Deed', required: true },
      { key: 'gst-cert', label: 'GST Registration', required: false },
    ]
  },
  {
    name: 'Income Documents',
    color: 'orange',
    documents: [
      { key: 'itr-2-3-years', label: 'ITR Last 2-3 Years', required: true },
      { key: 'bank-statement', label: 'Bank Statements 6-12 Months', required: true },
      { key: 'pl-statement', label: 'Profit and Loss Statement', required: true },
      { key: 'balance-sheet', label: 'Balance Sheet / Audited Financials', required: true },
      { key: 'income-proof', label: 'Income Proof of Doctor/Institution', required: true },
    ]
  },
  {
    name: 'Project & Property Documents',
    color: 'purple',
    documents: [
      { key: 'project-report', label: 'Project Report', required: true },
      { key: 'quotation', label: 'Equipment/Construction Quotation', required: true },
      { key: 'hospital-plan', label: 'Hospital Plan or Expansion Proposal', required: false },
      { key: 'vendor-quotation', label: 'Vendor Quotation for Medical Equipment', required: false },
      { key: 'ambulance-quotation', label: 'Ambulance Quotation', required: false },
      { key: 'property-papers', label: 'Property Ownership Papers', required: false },
      { key: 'title-documents', label: 'Title Documents and Valuation Papers', required: false },
      { key: 'existing-loan-details', label: 'Existing Loan Details', required: false },
    ]
  },
];

function HospitalLoanFormStyles() {
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
  const inputId = `upload-${documentItem.key}`;

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

export function HospitalLoanForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [customerType, setCustomerType] = useState('');
  const [formData, setFormData] = useState({
    // Basic Details
    fullName: '',
    dateOfBirth: '',
    panNumber: '',
    aadhaarNumber: '',
    medicalRegNumber: '',
    specialization: '',
    experience: '',
    institutionName: '',
    facilityType: '',
    registrationNumber: '',
    yearEstablished: '',
    numberOfBeds: '',
    authorizedPersonName: '',
    authorizedPersonDesignation: '',
    authorizedPersonPAN: '',
    authorizedPersonAadhaar: '',
    companyName: '',
    cinNumber: '',
    companyPAN: '',
    gstNumber: '',
    dateOfIncorporation: '',
    trustName: '',
    trustRegNumber: '',
    trustPAN: '',
    registrationDate: '',
    trusteeName: '',
    trusteePAN: '',
    trusteeAadhaar: '',
    currentAddress: '',
    city: '',
    pinCode: '',
    state: 'Maharashtra',
    // Loan Details
    loanPurpose: '',
    projectLocation: '',
    loanAmount: 5000000,
    tenure: '120',
    existingLoan: 'no',
    bankName: '',
    outstandingAmount: '',
    currentEMI: '',
    projectDescription: '',
    mobileNumber: '',
  });
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
      document.getElementById(`hospital-loan-otp-${index + 1}`)?.focus();
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

  const getBasicDetailsFields = () => {
    if (customerType === 'individual-doctor') {
      return (
        <>
          <Field label="Full Name *">
            <TextInput value={formData.fullName} onChange={(value) => updateFormData('fullName', value)} />
          </Field>
          <Field label="Date of Birth *">
            <TextInput type="date" value={formData.dateOfBirth} onChange={(value) => updateFormData('dateOfBirth', value)} />
          </Field>
          <Field label="PAN Number *">
            <TextInput value={formData.panNumber} onChange={(value) => updateFormData('panNumber', value.toUpperCase())} />
          </Field>
          <Field label="Aadhaar Number *">
            <TextInput value={formData.aadhaarNumber} onChange={(value) => updateFormData('aadhaarNumber', value)} />
          </Field>
          <Field label="Medical Registration Number *">
            <TextInput value={formData.medicalRegNumber} onChange={(value) => updateFormData('medicalRegNumber', value)} />
          </Field>
          <Field label="Specialization *">
            <select
              value={formData.specialization}
              onChange={(event) => updateFormData('specialization', event.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
            >
              <option value="">Select specialization</option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </Field>
          <Field label="Years of Experience *">
            <TextInput type="number" value={formData.experience} onChange={(value) => updateFormData('experience', value)} />
          </Field>
        </>
      );
    }

    if (['clinic-owner', 'nursing-home', 'hospital'].includes(customerType)) {
      return (
        <>
          <Field label="Institution Name *">
            <TextInput value={formData.institutionName} onChange={(value) => updateFormData('institutionName', value)} />
          </Field>
          <Field label="Type of Facility *">
            <select
              value={formData.facilityType}
              onChange={(event) => updateFormData('facilityType', event.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
            >
              <option value="">Select facility type</option>
              {facilityTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </Field>
          <Field label="Registration Number *">
            <TextInput value={formData.registrationNumber} onChange={(value) => updateFormData('registrationNumber', value)} />
          </Field>
          <Field label="Year Established *">
            <TextInput type="number" value={formData.yearEstablished} onChange={(value) => updateFormData('yearEstablished', value)} />
          </Field>
          <Field label="Number of Beds *">
            <TextInput type="number" value={formData.numberOfBeds} onChange={(value) => updateFormData('numberOfBeds', value)} />
          </Field>
          <Field label="Authorized Person Name *">
            <TextInput value={formData.authorizedPersonName} onChange={(value) => updateFormData('authorizedPersonName', value)} />
          </Field>
          <Field label="Authorized Person Designation *">
            <TextInput value={formData.authorizedPersonDesignation} onChange={(value) => updateFormData('authorizedPersonDesignation', value)} />
          </Field>
          <Field label="Authorized Person PAN *">
            <TextInput value={formData.authorizedPersonPAN} onChange={(value) => updateFormData('authorizedPersonPAN', value.toUpperCase())} />
          </Field>
          <Field label="Authorized Person Aadhaar *">
            <TextInput value={formData.authorizedPersonAadhaar} onChange={(value) => updateFormData('authorizedPersonAadhaar', value)} />
          </Field>
        </>
      );
    }

    if (['partnership-firm', 'llp', 'private-limited'].includes(customerType)) {
      return (
        <>
          <Field label="Company / Firm Name *">
            <TextInput value={formData.companyName} onChange={(value) => updateFormData('companyName', value)} />
          </Field>
          <Field label="CIN / LLP / Partnership Reg. Number *">
            <TextInput value={formData.cinNumber} onChange={(value) => updateFormData('cinNumber', value.toUpperCase())} />
          </Field>
          <Field label="PAN of Company *">
            <TextInput value={formData.companyPAN} onChange={(value) => updateFormData('companyPAN', value.toUpperCase())} />
          </Field>
          <Field label="GST Number">
            <TextInput value={formData.gstNumber} onChange={(value) => updateFormData('gstNumber', value)} />
          </Field>
          <Field label="Date of Incorporation *">
            <TextInput type="date" value={formData.dateOfIncorporation} onChange={(value) => updateFormData('dateOfIncorporation', value)} />
          </Field>
          <Field label="Authorized Director / Partner Name *">
            <TextInput value={formData.authorizedPersonName} onChange={(value) => updateFormData('authorizedPersonName', value)} />
          </Field>
          <Field label="Director PAN *">
            <TextInput value={formData.authorizedPersonPAN} onChange={(value) => updateFormData('authorizedPersonPAN', value.toUpperCase())} />
          </Field>
          <Field label="Director Aadhaar *">
            <TextInput value={formData.authorizedPersonAadhaar} onChange={(value) => updateFormData('authorizedPersonAadhaar', value)} />
          </Field>
        </>
      );
    }

    if (customerType === 'trust-society') {
      return (
        <>
          <Field label="Trust / Society Name *">
            <TextInput value={formData.trustName} onChange={(value) => updateFormData('trustName', value)} />
          </Field>
          <Field label="Registration Number *">
            <TextInput value={formData.trustRegNumber} onChange={(value) => updateFormData('trustRegNumber', value)} />
          </Field>
          <Field label="PAN of Trust *">
            <TextInput value={formData.trustPAN} onChange={(value) => updateFormData('trustPAN', value.toUpperCase())} />
          </Field>
          <Field label="Registration Date *">
            <TextInput type="date" value={formData.registrationDate} onChange={(value) => updateFormData('registrationDate', value)} />
          </Field>
          <Field label="Authorized Trustee Name *">
            <TextInput value={formData.trusteeName} onChange={(value) => updateFormData('trusteeName', value)} />
          </Field>
          <Field label="Trustee PAN *">
            <TextInput value={formData.trusteePAN} onChange={(value) => updateFormData('trusteePAN', value.toUpperCase())} />
          </Field>
          <Field label="Trustee Aadhaar *">
            <TextInput value={formData.trusteeAadhaar} onChange={(value) => updateFormData('trusteeAadhaar', value)} />
          </Field>
        </>
      );
    }
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen overflow-hidden py-16">
        <HospitalLoanFormStyles />
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
              Application Submitted!
            </h1>
            <p className="mb-2 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.25s_both]">
              Application ID
            </p>
            <p className="mb-5 text-3xl text-[#2563EB] [animation:loanFadeUp_0.5s_ease-out_0.35s_both]">
              HOSP-{Date.now().toString().slice(-8)}
            </p>
            <p className="mb-3 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.45s_both]">
              Our healthcare finance expert will contact you within 2 business hours
            </p>
            <p className="mb-8 text-sm text-gray-500 [animation:loanFadeUp_0.5s_ease-out_0.5s_both]">
              Mon-Sat: 9AM to 7PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center [animation:loanFadeUp_0.5s_ease-out_0.55s_both]">
              <a
                href="https://wa.me/917758969798"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-8 py-4 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="tel:+917758969798"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#2563EB] px-8 py-4 text-[#2563EB] transition-all duration-300 hover:bg-blue-50 active:scale-[0.97]"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden py-12">
      <HospitalLoanFormStyles />
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
              <h1 className="mb-2 text-2xl text-[#1F2937] sm:text-3xl">Select Your Customer Type</h1>
              <p className="mb-6 text-gray-600">Choose the option that best describes your organization</p>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {customerTypes.map((type) => {
                  const Icon = type.icon;
                  const selected = customerType === type.id;

                  return (
                    <button
                      key={type.id}
                      onClick={() => setCustomerType(type.id)}
                      className={`relative rounded-2xl border-2 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:shadow-xl hover:shadow-blue-500/10 active:[animation:loanCardTap_0.22s_ease-out] ${
                        selected
                          ? 'border-[#2563EB] bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white shadow-xl shadow-blue-500/25'
                          : 'border-[#2563EB]/25 bg-white text-[#1F2937]'
                      }`}
                    >
                      {selected ? (
                        <CheckCircle2 className="absolute right-5 top-5 h-6 w-6 text-[#16A34A]" />
                      ) : null}
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                          selected ? 'bg-white/15 text-white' : 'bg-blue-50 text-[#2563EB]'
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className={`mb-2 text-sm font-semibold ${selected ? 'text-white' : 'text-[#1F2937]'}`}>
                        {type.name}
                      </h2>
                      <p className={`text-xs ${selected ? 'text-blue-100' : 'text-gray-600'}`}>{type.desc}</p>
                    </button>
                  );
                })}
              </div>

              {customerType && (
                <div className="mt-8 flex justify-end">
                  <PrimaryButton onClick={goNext}>Next</PrimaryButton>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Basic Details</h1>
              <div className="grid gap-5 md:grid-cols-2">
                {getBasicDetailsFields()}
                <div className="md:col-span-2">
                  <Field label="Current Address *">
                    <textarea
                      value={formData.currentAddress}
                      onChange={(event) => updateFormData('currentAddress', event.target.value)}
                      className="min-h-28 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    />
                  </Field>
                </div>
                <Field label="City *">
                  <select
                    value={formData.city}
                    onChange={(event) => updateFormData('city', event.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                  >
                    <option value="">Select city</option>
                    {maharashtraCities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="PIN Code *">
                  <TextInput value={formData.pinCode} onChange={(value) => updateFormData('pinCode', value)} />
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
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Loan Purpose *">
                    <select
                      value={formData.loanPurpose}
                      onChange={(event) => updateFormData('loanPurpose', event.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    >
                      <option value="">Select purpose</option>
                      {loanPurposes.map((purpose) => (
                        <option key={purpose} value={purpose}>{purpose}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Project Location *">
                    <select
                      value={formData.projectLocation}
                      onChange={(event) => updateFormData('projectLocation', event.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    >
                      <option value="">Select city</option>
                      {maharashtraCities.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label={`Loan Amount (Rs. ${Number(formData.loanAmount).toLocaleString('en-IN')})`}>
                  <input
                    type="range"
                    min="500000"
                    max="500000000"
                    step="100000"
                    value={formData.loanAmount}
                    onChange={(event) => updateFormData('loanAmount', Number(event.target.value))}
                    className="h-2 w-full appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                  <div className="mt-2 text-sm text-gray-500">
                    Min: Rs. 5 Lakhs | Max: Rs. 50 Crores
                  </div>
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Preferred Tenure *">
                    <select
                      value={formData.tenure}
                      onChange={(event) => updateFormData('tenure', event.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    >
                      {tenures.map((t) => (
                        <option key={t.months} value={t.months}>{t.label}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Existing Loan">
                    <select
                      value={formData.existingLoan}
                      onChange={(event) => updateFormData('existingLoan', event.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </Field>
                </div>

                {formData.existingLoan === 'yes' && (
                  <div className="grid gap-5 md:grid-cols-2 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                    <Field label="Bank Name *">
                      <TextInput value={formData.bankName} onChange={(value) => updateFormData('bankName', value)} />
                    </Field>
                    <Field label="Outstanding Amount *">
                      <TextInput type="number" value={formData.outstandingAmount} onChange={(value) => updateFormData('outstandingAmount', value)} />
                    </Field>
                    <Field label="Current EMI *">
                      <TextInput type="number" value={formData.currentEMI} onChange={(value) => updateFormData('currentEMI', value)} />
                    </Field>
                  </div>
                )}

                <Field label="Project Description *">
                  <textarea
                    value={formData.projectDescription}
                    onChange={(event) => updateFormData('projectDescription', event.target.value)}
                    maxLength="500"
                    placeholder="Briefly describe your project..."
                    className="min-h-28 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                  />
                  <div className="text-xs text-gray-500 mt-2">
                    {formData.projectDescription.length}/500 characters
                  </div>
                </Field>
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

                <PrimaryButton onClick={() => setOtpSent(true)} className="mt-5 w-full">
                  Send OTP
                </PrimaryButton>

                {otpSent && (
                  <div className="mt-8 [animation:loanFadeUp_0.35s_ease-out_both]">
                    <div className="mb-5 flex gap-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`hospital-loan-otp-${index}`}
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
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Upload Documents</h1>

              {documentSections.map((section) => (
                <div key={section.name} className="mb-10">
                  <div className={`h-1 w-16 rounded-full bg-gradient-to-r mb-4 ${
                    section.color === 'blue' ? 'from-[#2563EB] to-[#1E40AF]' :
                    section.color === 'green' ? 'from-[#16A34A] to-[#15803D]' :
                    section.color === 'orange' ? 'from-[#F97316] to-[#EA580C]' :
                    'from-[#9333EA] to-[#7E22CE]'
                  }`} />
                  <h2 className="text-lg text-[#1F2937] mb-5 font-semibold">{section.name}</h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    {section.documents.map((doc) => (
                      <UploadBox
                        key={doc.key}
                        documentItem={doc}
                        fileName={uploadedFiles[doc.key]}
                        onUpload={handleUpload}
                      />
                    ))}
                  </div>
                </div>
              ))}

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
                  <p className="mb-1 text-sm text-gray-500">Customer Type</p>
                  <p className="text-lg text-[#1F2937] capitalize">
                    {customerTypes.find(t => t.id === customerType)?.name}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                  <h2 className="mb-4 text-xl text-[#1F2937]">Loan Information</h2>
                  <div className="grid gap-3 text-gray-700 md:grid-cols-2">
                    <p><span className="font-semibold">Purpose:</span> {formData.loanPurpose}</p>
                    <p><span className="font-semibold">Location:</span> {formData.projectLocation}</p>
                    <p><span className="font-semibold">Amount:</span> Rs. {Number(formData.loanAmount).toLocaleString('en-IN')}</p>
                    <p><span className="font-semibold">Tenure:</span> {formData.tenure} months</p>
                  </div>
                </div>

                <label className="flex items-start gap-3 text-gray-700">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(event) => setTermsAccepted(event.target.checked)}
                    className="mt-1 accent-[#2563EB]"
                  />
                  <span>I agree to the Terms & Conditions and authorize Sanskruti Associates to process my application and contact me regarding loan offers.</span>
                </label>

                <div className="flex justify-between gap-4">
                  <BackButton onClick={goPrevious}>Previous</BackButton>
                  <button
                    onClick={submitApplication}
                    disabled={!termsAccepted}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none"
                  >
                    Submit Hospital Loan Application
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
