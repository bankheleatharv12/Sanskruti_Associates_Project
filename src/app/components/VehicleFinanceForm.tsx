import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Upload,
  MessageCircle,
  Home,
  Truck,
  Tractor,
  Building2,
  Sparkles,
  RefreshCw
} from "lucide-react";
import { useNavigate } from "react-router";

interface FormData {
  vehicleType: string;
  vehicleCategory: 'new' | 'old' | '';
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: string;
  vehicleValue: number;
  loanAmount: number;
  tenure: string;
  purpose: string;
  fullName: string;
  dateOfBirth: string;
  panNumber: string;
  aadhaarNumber: string;
  occupation: string;
  monthlyIncome: number;
  address: string;
  city: string;
  pinCode: string;
  coApplicantRelation: string;
  coApplicantName: string;
  coApplicantPAN: string;
  coApplicantAadhaar: string;
  mobile: string;
  otp: string[];
  isVerified: boolean;
  documents: { [key: string]: File[] };
  termsAccepted: boolean;
}

export function VehicleFinanceForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    vehicleType: '',
    vehicleCategory: '',
    vehicleBrand: '',
    vehicleModel: '',
    manufacturingYear: '',
    vehicleValue: 0,
    loanAmount: 50000,
    tenure: '',
    purpose: '',
    fullName: '',
    dateOfBirth: '',
    panNumber: '',
    aadhaarNumber: '',
    occupation: '',
    monthlyIncome: 0,
    address: '',
    city: '',
    pinCode: '',
    coApplicantRelation: '',
    coApplicantName: '',
    coApplicantPAN: '',
    coApplicantAadhaar: '',
    mobile: '',
    otp: ['', '', '', '', '', ''],
    isVerified: false,
    documents: {},
    termsAccepted: false
  });

  const totalSteps = 7;

  const vehicleTypes = [
    {
      id: 'commercial',
      title: 'Commercial Vehicles',
      subtitle: 'Truck, Tempo, Pickup, Cargo',
      icon: Truck,
      emoji: '🚛'
    },
    {
      id: 'agricultural',
      title: 'Agricultural Vehicles', 
      subtitle: 'Tractor, Farm Equipment',
      icon: Tractor,
      emoji: '🚜'
    },
    {
      id: 'construction',
      title: 'Construction Machines',
      subtitle: 'JCB, Excavator, Loader',
      icon: Building2,
      emoji: '🏗️'
    }
  ];

  const vehicleCategories = [
    {
      id: 'new',
      title: 'New Vehicle',
      subtitle: 'नवीन वाहन — straight from showroom',
      icon: Sparkles,
      emoji: '✨'
    },
    {
      id: 'old',
      title: 'Old / Used Vehicle',
      subtitle: 'जुनी वाहन — pre-owned finance',
      icon: RefreshCw,
      emoji: '🔄'
    }
  ];

  const tenureOptions = [
    '12 months', '24 months', '36 months', 
    '48 months', '60 months', '84 months', '120 months'
  ];

  const purposeOptions = [
    'Personal Use', 'Commercial Use', 'Agricultural Use', 'Construction Use'
  ];

  const occupationOptions = [
    'Farmer / शेतकरी',
    'Business Owner / व्यापारी', 
    'Salaried / नोकरदार',
    'Transport Business / वाहतूक व्यवसाय',
    'Contractor / कंत्राटदार',
    'Other'
  ];

  const relationOptions = [
    'Father', 'Mother', 'Spouse', 'Brother', 'Other'
  ];

  const maharashtraCities = [
    'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 
    'Amravati', 'Kolhapur', 'Sangli', 'Jalgaon', 'Akola', 'Latur'
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });
      
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
      
      if (newOtp.every(digit => digit !== '')) {
        setFormData({ ...formData, otp: newOtp, isVerified: true });
      }
    }
  };

  const handleFileUpload = (category: string, files: FileList | null) => {
    if (files) {
      setFormData({
        ...formData,
        documents: {
          ...formData.documents,
          [category]: Array.from(files)
        }
      });
    }
  };

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  const UploadBox = ({ label, category, required = false }: { 
    label: string; 
    category: string; 
    required?: boolean; 
  }) => (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:border-white/40 transition-all duration-300">
      <label className="block text-white text-sm font-medium mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="border-2 border-dashed border-white/30 rounded-lg p-4 text-center hover:border-white/50 transition-colors cursor-pointer">
        <input
          type="file"
          multiple
          onChange={(e) => handleFileUpload(category, e.target.files)}
          className="hidden"
          id={`upload-${category}`}
        />
        <label htmlFor={`upload-${category}`} className="cursor-pointer">
          <Upload className="w-8 h-8 text-white/60 mx-auto mb-2" />
          <p className="text-white/80 text-sm">Click to upload files</p>
          {formData.documents[category] && (
            <p className="text-green-400 text-xs mt-1">
              {formData.documents[category].length} file(s) selected
            </p>
          )}
        </label>
      </div>
    </div>
  );

  if (showSuccess) {
    const applicationId = `VF-${Math.floor(Math.random() * 100000000).toString().padStart(8, '0')}`;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            Application Submitted Successfully! 🎉
          </h2>
          
          <p className="text-white/80 mb-2">
            आमचे तज्ञ लवकरच तुमच्याशी संपर्क करतील
          </p>
          
          <p className="text-white/60 text-sm mb-6">
            Our vehicle finance expert will contact you within 2 hours
          </p>
          
          <div className="bg-white/10 rounded-xl p-4 mb-6">
            <p className="text-white/80 text-sm">Application ID</p>
            <p className="text-white font-mono text-lg">{applicationId}</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/917758969798"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] hover:bg-[#15803D] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            
            <button
              onClick={() => navigate('/')}
              className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Home className="w-5 h-5" />
              Go Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => navigate('/vehicle-finance')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Vehicle Finance
          </button>
          
          <h1 className="text-3xl font-bold text-white mb-2">
            Vehicle Finance Application
          </h1>
          <p className="text-white/80">
            वाहन कर्ज अर्ज - Step {currentStep} of {totalSteps}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/10 rounded-full h-2 mb-8">
          <motion.div
            className="bg-gradient-to-r from-[#16A34A] to-[#22C55E] h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Form Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8"
        >  
      {/* Step 1: Vehicle Type Selection */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Select Vehicle Type
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {vehicleTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData({ ...formData, vehicleType: type.id })}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.vehicleType === type.id
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-white/30 hover:border-blue-400 bg-white/5'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{type.emoji}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {type.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Vehicle Category */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              New or Used Vehicle?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {vehicleCategories.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData({ ...formData, vehicleCategory: category.id as 'new' | 'old' })}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.vehicleCategory === category.id
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-white/30 hover:border-blue-400 bg-white/5'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{category.emoji}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {category.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Vehicle & Loan Details */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Vehicle & Loan Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Vehicle Brand *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tata, Mahindra, JCB..."
                  value={formData.vehicleBrand}
                  onChange={(e) => setFormData({ ...formData, vehicleBrand: e.target.value })}
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Vehicle Model *
                </label>
                <input
                  type="text"
                  placeholder="Model name"
                  value={formData.vehicleModel}
                  onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                />
              </div>
              
              {formData.vehicleCategory === 'old' && (
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Manufacturing Year *
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 2020"
                    value={formData.manufacturingYear}
                    onChange={(e) => setFormData({ ...formData, manufacturingYear: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Estimated Vehicle Value (₹) *
                </label>
                <input
                  type="number"
                  placeholder="Vehicle value"
                  value={formData.vehicleValue || ''}
                  onChange={(e) => setFormData({ ...formData, vehicleValue: Number(e.target.value) })}
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2">
                Loan Amount Required: {formatCurrency(formData.loanAmount)}
              </label>
              <input
                type="range"
                min="50000"
                max="20000000"
                step="10000"
                value={formData.loanAmount}
                onChange={(e) => setFormData({ ...formData, loanAmount: Number(e.target.value) })}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-white/60 text-xs mt-1">
                <span>₹50K</span>
                <span>₹2Cr</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Loan Tenure *
                </label>
                <select
                  value={formData.tenure}
                  onChange={(e) => setFormData({ ...formData, tenure: e.target.value })}
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                >
                  <option value="">Select tenure</option>
                  {tenureOptions.map((option) => (
                    <option key={option} value={option} className="bg-gray-800">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Purpose of Finance *
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                >
                  <option value="">Select purpose</option>
                  {purposeOptions.map((option) => (
                    <option key={option} value={option} className="bg-gray-800">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Personal Details */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Personal Details
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Full Name (Applicant) *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    PAN Number *
                  </label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    value={formData.panNumber}
                    onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Aadhaar Number *
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012"
                    value={formData.aadhaarNumber}
                    onChange={(e) => setFormData({ ...formData, aadhaarNumber: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Occupation *
                  </label>
                  <select
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                  >
                    <option value="">Select occupation</option>
                    {occupationOptions.map((option) => (
                      <option key={option} value={option} className="bg-gray-800">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Monthly Income (₹) *
                  </label>
                  <input
                    type="number"
                    placeholder="Monthly income"
                    value={formData.monthlyIncome || ''}
                    onChange={(e) => setFormData({ ...formData, monthlyIncome: Number(e.target.value) })}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Current Address *
                </label>
                <textarea
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none resize-none"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                  >
                    <option value="">Select city</option>
                    {maharashtraCities.map((city) => (
                      <option key={city} value={city} className="bg-gray-800">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    placeholder="PIN Code"
                    value={formData.pinCode}
                    onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>
              
              {/* Co-applicant Section */}
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Co-applicant Details (सहकर्जदार)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Relation *
                    </label>
                    <select
                      value={formData.coApplicantRelation}
                      onChange={(e) => setFormData({ ...formData, coApplicantRelation: e.target.value })}
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                    >
                      <option value="">Select relation</option>
                      {relationOptions.map((option) => (
                        <option key={option} value={option} className="bg-gray-800">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Co-applicant Name *
                    </label>
                    <input
                      type="text"
                      value={formData.coApplicantName}
                      onChange={(e) => setFormData({ ...formData, coApplicantName: e.target.value })}
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Co-applicant PAN *
                    </label>
                    <input
                      type="text"
                      placeholder="ABCDE1234F"
                      value={formData.coApplicantPAN}
                      onChange={(e) => setFormData({ ...formData, coApplicantPAN: e.target.value.toUpperCase() })}
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Co-applicant Aadhaar *
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012"
                      value={formData.coApplicantAadhaar}
                      onChange={(e) => setFormData({ ...formData, coApplicantAadhaar: e.target.value })}
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}    
    {/* Step 5: Mobile Verify */}
        {currentStep === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Mobile Verification
            </h2>
            
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">
                  Mobile Number *
                </label>
                <div className="flex">
                  <span className="bg-white/10 border border-white/30 border-r-0 rounded-l-xl px-4 py-3 text-white">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="flex-1 bg-white/10 border border-white/30 rounded-r-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">
                  Enter OTP
                </label>
                <div className="flex gap-2 justify-center">
                  {formData.otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-12 bg-white/10 border border-white/30 rounded-xl text-center text-white text-lg font-semibold focus:border-blue-400 focus:outline-none"
                    />
                  ))}
                </div>
              </div>
              
              {formData.isVerified && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2 text-green-400 mb-4"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Mobile number verified!</span>
                </motion.div>
              )}
            </div>
          </div>
        )}

        {/* Step 6: Upload Documents */}
        {currentStep === 6 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Upload Documents
            </h2>
            
            <div className="space-y-8">
              {/* Applicant Documents */}
              <div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Applicant Documents (कर्जदार)
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <UploadBox label="Photo x2 (अर्जदाराचे 2 फोटो)" category="applicant-photos" required />
                  <UploadBox label="Voter ID / Aadhaar Card (मतदान कार्ड / आधार कार्ड)" category="applicant-id" required />
                  <UploadBox label="Driving License / PAN Card (ड्रा. लायसन्स / पॅनकार्ड)" category="applicant-license" required />
                  <UploadBox label="Bank CTS Cheques (3) (बँक ३ चेक CTS 2010)" category="applicant-cheques" required />
                  <UploadBox label="Bank Passbook Xerox (बँक पासबुक झेरॉक्स)" category="applicant-passbook" required />
                  <UploadBox label="Khanpatti / Light Bill (खणपट्टी पावती / लाईटबील)" category="applicant-address" required />
                  <UploadBox label="7/12 or Address Proof (७/१२ (८अ) / परचा उतारा)" category="applicant-712" required />
                </div>
              </div>
              
              {/* Co-applicant Documents */}
              <div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Co-applicant Documents (सहकर्जदार)
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <UploadBox label="Photo x2" category="co-applicant-photos" required />
                  <UploadBox label="Driving License" category="co-applicant-license" required />
                  <UploadBox label="Voter ID / Aadhaar" category="co-applicant-id" required />
                  <UploadBox label="PAN Card Xerox" category="co-applicant-pan" required />
                </div>
              </div>
              
              {/* Vehicle Documents */}
              <div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Vehicle Documents (गाडीचे पेपर)
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <UploadBox label="RC Book (वाहनाचे आर.सी. बुक)" category="vehicle-rc" required />
                  <UploadBox label="Insurance (विमा)" category="vehicle-insurance" required />
                  <UploadBox label="Tax Receipt (टॅक्स पावती)" category="vehicle-tax" required />
                  <UploadBox label="Permit (if applicable)" category="vehicle-permit" />
                  {formData.vehicleCategory === 'old' && (
                    <UploadBox label="Fitness Certificate" category="vehicle-fitness" />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 7: Review & Submit */}
        {currentStep === 7 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Review & Submit
            </h2>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Application Summary</h3>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-white/60">Vehicle Type:</span>
                  <span className="text-white ml-2 capitalize">{formData.vehicleType}</span>
                </div>
                <div>
                  <span className="text-white/60">Category:</span>
                  <span className="text-white ml-2 capitalize">{formData.vehicleCategory}</span>
                </div>
                <div>
                  <span className="text-white/60">Vehicle:</span>
                  <span className="text-white ml-2">{formData.vehicleBrand} {formData.vehicleModel}</span>
                </div>
                <div>
                  <span className="text-white/60">Loan Amount:</span>
                  <span className="text-white ml-2">{formatCurrency(formData.loanAmount)}</span>
                </div>
                <div>
                  <span className="text-white/60">Tenure:</span>
                  <span className="text-white ml-2">{formData.tenure}</span>
                </div>
                <div>
                  <span className="text-white/60">Applicant:</span>
                  <span className="text-white ml-2">{formData.fullName}</span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-white/60">Documents Uploaded:</span>
                  <span className="text-white ml-2">
                    {Object.keys(formData.documents).length} categories
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                  className="mt-1 w-4 h-4 text-blue-600 bg-white/10 border-white/30 rounded focus:ring-blue-500"
                />
                <span className="text-white/80 text-sm">
                  I agree to the terms and conditions and authorize Sanskruti Associates to process my application and contact me regarding this loan.
                </span>
              </label>
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={!formData.termsAccepted}
              className="w-full bg-gradient-to-r from-[#16A34A] to-[#22C55E] text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              Submit Vehicle Finance Application
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={
              currentStep === totalSteps ||
              (currentStep === 1 && !formData.vehicleType) ||
              (currentStep === 2 && !formData.vehicleCategory) ||
              (currentStep === 5 && !formData.isVerified)
            }
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        </motion.div>
      </div>
    </div>
  );
}