import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Upload, Home, User, Car, Briefcase, Building2, GraduationCap, School, Hospital, Cog, Factory, Phone, CheckCircle2, MessageCircle, Home as HomeIcon, FileText, Info } from 'lucide-react';
import { useNavigation } from './AppRouter';

const loanTypes = [
  { icon: Home, label: 'Home Loan' },
  { icon: User, label: 'Personal & Personal & Business Loan' },
  { icon: Car, label: 'Car Loan' },
  { icon: Briefcase, label: 'Personal & Business Loan' },
  { icon: Building2, label: 'Loan Against Property' },
  { icon: GraduationCap, label: 'Machinery Loan' },
  { icon: School, label: 'School Finance' },
  { icon: Hospital, label: 'Hospital Finance' },
  { icon: Cog, label: 'Machinery Loan' },
  { icon: Factory, label: 'SME / Industrial Loan' },
];

// Dynamic loan documents mapping
const loanDocuments: Record<string, { documents: string[]; minimumSalary: number }> = {
  'Personal & Personal & Business Loan': {
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Address Proof',
      'Last 3 Month Salary Slip',
      'Last 6 Month Bank Statement',
      '2 Years Form 16',
      'Office ID Card',
      'Passport Size Photo',
    ],
    minimumSalary: 25000,
  },
};

export function LoanApplicationForm() {
  const { navigateTo } = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [selectedLoanType, setSelectedLoanType] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    pan: '',
    aadhaar: '',
    city: '',
    employmentType: '',
    loanAmount: '',
    loanTenure: 15,
    monthlyIncome: '',
    existingEmi: '',
    loanPurpose: '',
  });
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, boolean>>({});
  const [uploadedDocNames, setUploadedDocNames] = useState<Record<string, string>>({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const steps = [
    { num: 1, label: 'Mobile Verify' },
    { num: 2, label: 'Loan Type' },
    { num: 3, label: 'Personal Details' },
    { num: 4, label: 'Loan Details' },
    { num: 5, label: 'Submit' },
  ];

  const getRequiredDocuments = () => {
    return loanDocuments[selectedLoanType]?.documents || [];
  };

  const getMinimumSalary = () => {
    return loanDocuments[selectedLoanType]?.minimumSalary || null;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const validateStep = (step = currentStep) => {
    setFormError('');

    if (step === 1 && (!/^[6-9]\d{9}$/.test(mobileNumber) || (otpSent && otp.join('').length !== 4))) {
      setFormError(otpSent ? 'Enter the 4 digit OTP to continue.' : 'Enter a valid 10 digit Indian mobile number.');
      return false;
    }

    if (step === 2 && !selectedLoanType) {
      setFormError('Select a loan type to continue.');
      return false;
    }

    if (
      step === 3 &&
      (!formData.fullName.trim() ||
        !formData.email.includes('@') ||
        !formData.dob ||
        !/^[A-Z]{5}\d{4}[A-Z]$/i.test(formData.pan) ||
        formData.aadhaar.replace(/\D/g, '').length !== 12 ||
        !formData.city.trim() ||
        !formData.employmentType)
    ) {
      setFormError('Complete all personal details with valid PAN and Aadhaar numbers.');
      return false;
    }

    if (
      step === 4 &&
      (!formData.loanAmount ||
        Number(formData.loanAmount) <= 0 ||
        !formData.monthlyIncome ||
        Number(formData.monthlyIncome) <= 0 ||
        !formData.loanPurpose)
    ) {
      setFormError('Complete loan amount, income, and loan purpose before continuing.');
      return false;
    }

    if (step === 5) {
      const requiredDocs = getRequiredDocuments();
      const allDocsUploaded = requiredDocs.every((doc) => uploadedDocs[doc]);
      if (!allDocsUploaded || !termsAccepted) {
        setFormError('Upload all required documents and accept the terms to submit.');
        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (validateStep() && currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep(5)) {
      setSubmitted(true);
    }
  };

  const handleDocumentUpload = (docKey: string, file?: File) => {
    if (!file) return;
    setUploadedDocs({ ...uploadedDocs, [docKey]: true });
    setUploadedDocNames({ ...uploadedDocNames, [docKey]: file.name });
    setFormError('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(255, 255, 255, 0.15)' }}></div>
      </div>

      {/* Home Button */}
      <button
        onClick={() => navigateTo('homepage')}
        className="fixed top-24 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors shadow-lg"
      >
        <HomeIcon className="w-5 h-5" />
        Home
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.num} className="flex-1 flex flex-col items-center relative">
                {index < steps.length - 1 && (
                  <div
                    className="absolute top-5 left-1/2 w-full h-0.5"
                    style={{
                      background: step.num < currentStep ? '#16A34A' : '#E5E7EB',
                    }}
                  ></div>
                )}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center relative z-10 mb-2"
                  style={{
                    background: step.num < currentStep ? '#16A34A' : step.num === currentStep ? '#2563EB' : '#E5E7EB',
                    border: step.num === currentStep ? '3px solid #2563EB' : 'none',
                  }}
                >
                  {step.num < currentStep ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-white text-sm">{step.num}</span>
                  )}
                </div>
                <span className="text-xs text-[#1F2937] text-center">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div
          className="max-w-2xl mx-auto"
          style={{
            background: 'rgba(255, 255, 255, 0.90)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 8px 32px rgba(37, 99, 235, 0.12)',
          }}
        >
          {!submitted ? (
            <>
              {formError && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {formError}
                </div>
              )}

              {/* Step 1: Mobile Verify */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl text-[#1F2937] mb-2">Verify Your Mobile</h2>
                  <p className="text-sm text-gray-600 mb-6">Enter mobile number to get started</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Mobile Number</label>
                      <div className="flex gap-2">
                        <div className="w-16 h-[50px] flex items-center justify-center border border-[#E5E7EB] rounded-lg bg-gray-50 text-[#1F2937]">
                          +91
                        </div>
                        <input
                          type="tel"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="Enter 10 digit mobile"
                          className="flex-1 h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none text-[#1F2937]"
                          maxLength={10}
                        />
                      </div>
                    </div>

                    {!otpSent ? (
                      <button
                        onClick={() => {
                          if (/^[6-9]\d{9}$/.test(mobileNumber)) {
                            setFormError('');
                            setOtpSent(true);
                          } else {
                            setFormError('Enter a valid 10 digit Indian mobile number.');
                          }
                        }}
                        className="w-full h-[50px] bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg transition-colors"
                      >
                        Send OTP
                      </button>
                    ) : (
                      <>
                        <div>
                          <label className="block text-sm text-[#374151] mb-2">Enter OTP</label>
                          <div className="flex gap-3 justify-center">
                            {otp.map((digit, index) => (
                              <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                className="w-14 h-14 text-center text-xl border-2 border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none rounded-lg"
                                maxLength={1}
                              />
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={nextStep}
                          className="w-full h-[50px] bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors"
                        >
                          Verify OTP
                        </button>
                        <button className="w-full text-sm text-[#16A34A] hover:underline">
                          Resend OTP
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Loan Type */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl text-[#1F2937] mb-6">Select Loan Type</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    {loanTypes.map((loan) => {
                      const Icon = loan.icon;
                      const isSelected = selectedLoanType === loan.label;
                      return (
                        <div
                          key={loan.label}
                          onClick={() => setSelectedLoanType(loan.label)}
                          className="relative p-4 rounded-xl cursor-pointer transition-all hover:shadow-lg"
                          style={{
                            border: isSelected ? '2px solid #2563EB' : '1px solid #E5E7EB',
                            background: isSelected ? 'rgba(37, 99, 235, 0.08)' : 'white',
                          }}
                        >
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-[#2563EB] rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                          <Icon className="w-8 h-8 text-[#2563EB] mb-2" />
                          <div className="text-xs text-[#1F2937]">{loan.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Show Required Documents When Loan Type Selected */}
                  {selectedLoanType && loanDocuments[selectedLoanType] ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-8 space-y-4"
                    >
                      {/* Minimum Salary Card */}
                      {getMinimumSalary() && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-[#2563EB] shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center">
                              <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-[#374151] font-medium">Minimum Salary Required</p>
                              <p className="text-lg font-bold text-[#2563EB]">₹{getMinimumSalary()?.toLocaleString()}+</p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Required Documents Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-6 rounded-xl bg-white border-l-4 border-[#2563EB] shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <FileText className="w-5 h-5 text-[#2563EB]" />
                          <h3 className="text-lg font-bold text-[#1F2937]">Required Documents</h3>
                        </div>
                        <div className="space-y-3">
                          {getRequiredDocuments().map((doc, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                              className="flex items-center gap-3"
                            >
                              <Check className="w-5 h-5 text-[#16A34A] flex-shrink-0" />
                              <span className="text-[#374151]">{doc}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Information Box */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-3"
                        >
                          <Info className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-[#374151]">
                            Please keep all documents ready before submitting application
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ) : selectedLoanType ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-sm text-yellow-700 mb-8"
                    >
                      Documents will update based on selected loan type
                    </motion.div>
                  ) : null}

                  <div className="flex gap-3">
                    <button onClick={prevStep} className="flex-1 h-[50px] bg-white border-2 border-[#2563EB] text-[#2563EB] rounded-lg">
                      Previous
                    </button>
                    <button onClick={nextStep} className="flex-1 h-[50px] bg-[#2563EB] text-white rounded-lg">
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Personal Details */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl text-[#1F2937] mb-6">Personal Details</h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Date of Birth</label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">PAN Number</label>
                      <input
                        type="text"
                        value={formData.pan}
                        onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Aadhaar Number</label>
                      <input
                        type="text"
                        value={formData.aadhaar}
                        onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Employment Type</label>
                      <select
                        value={formData.employmentType}
                        onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                      >
                        <option value="">Select employment type</option>
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self Employed</option>
                        <option value="business">Business Owner</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevStep} className="flex-1 h-[50px] bg-white border-2 border-[#2563EB] text-[#2563EB] rounded-lg">
                      Previous
                    </button>
                    <button onClick={nextStep} className="flex-1 h-[50px] bg-[#2563EB] text-white rounded-lg">
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Loan Details */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl text-[#1F2937] mb-6">Loan Details</h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Loan Amount (â‚¹)</label>
                      <input
                        type="number"
                        value={formData.loanAmount}
                        onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Loan Tenure: {formData.loanTenure} years</label>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={formData.loanTenure}
                        onChange={(e) => setFormData({ ...formData, loanTenure: parseInt(e.target.value) })}
                        className="w-full accent-[#2563EB]"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>1 year</span>
                        <span>30 years</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Monthly Income (â‚¹)</label>
                      <input
                        type="number"
                        value={formData.monthlyIncome}
                        onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                        placeholder="Enter monthly income"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Existing EMI (â‚¹)</label>
                      <input
                        type="number"
                        value={formData.existingEmi}
                        onChange={(e) => setFormData({ ...formData, existingEmi: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                        placeholder="Enter existing EMI"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#374151] mb-2">Purpose of Loan</label>
                      <select
                        value={formData.loanPurpose}
                        onChange={(e) => setFormData({ ...formData, loanPurpose: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
                      >
                        <option value="">Select purpose</option>
                        <option value="purchase">Property Purchase</option>
                        <option value="construction">Construction</option>
                        <option value="renovation">Renovation</option>
                        <option value="business">Business Expansion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevStep} className="flex-1 h-[50px] bg-white border-2 border-[#2563EB] text-[#2563EB] rounded-lg">
                      Previous
                    </button>
                    <button onClick={nextStep} className="flex-1 h-[50px] bg-[#2563EB] text-white rounded-lg">
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Documents & Review */}
              {currentStep === 5 && (
                <div>
                  <h2 className="text-2xl text-[#1F2937] mb-6">Upload Documents</h2>
                  
                  {/* Show required documents list */}
                  {loanDocuments[selectedLoanType] && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200"
                    >
                      <h3 className="text-sm font-semibold text-[#1F2937] mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#2563EB]" />
                        Required Documents for {selectedLoanType}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {getRequiredDocuments().map((doc, index) => (
                          <div key={index} className="text-xs text-[#374151] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                            {doc}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-4 mb-6">
                    {getRequiredDocuments().map((doc, index) => (
                      <motion.label
                        key={doc}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        htmlFor={`doc-${doc}`}
                        className="border-2 border-dashed border-[#2563EB] rounded-lg p-6 cursor-pointer hover:bg-blue-50 transition-all"
                      >
                        <input
                          id={`doc-${doc}`}
                          type="file"
                          className="sr-only"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(event) => handleDocumentUpload(doc, event.target.files?.[0])}
                        />
                        {uploadedDocs[doc] ? (
                          <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="text-center text-[#16A34A]"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <CheckCircle2 className="w-6 h-6" />
                              <span>{doc} Uploaded</span>
                            </div>
                            <div className="mt-2 text-xs text-gray-600 break-all">
                              {uploadedDocNames[doc]}
                            </div>
                          </motion.div>
                        ) : (
                          <div className="text-center">
                            <Upload className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
                            <div className="text-sm text-[#1F2937] mb-1">{doc}</div>
                            <div className="text-xs text-gray-500">Click to upload or drag & drop</div>
                          </div>
                        )}
                      </motion.label>
                    ))}
                  </div>

                  <div className="bg-blue-50 border border-[#2563EB] rounded-lg p-4 mb-6">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="w-5 h-5 accent-[#2563EB] mt-0.5"
                      />
                      <span className="text-sm text-[#1F2937]">
                        I agree to the Terms & Conditions and authorize Sanskruti Associates to contact me regarding my loan application.
                      </span>
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={prevStep} className="flex-1 h-[50px] bg-white border-2 border-[#2563EB] text-[#2563EB] rounded-lg">
                      Previous
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!termsAccepted}
                      className="flex-1 h-[50px] bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl text-[#1F2937] mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our expert will call you within 2 hours
              </p>
              <button className="w-full h-[50px] bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
