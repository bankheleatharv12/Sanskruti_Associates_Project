import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { 
  ArrowLeft, ArrowRight, Check, CheckCircle2, Upload, 
  Landmark, Home, PiggyBank, Zap, Building2, 
  Users, User, Briefcase, Phone, MessageCircle, 
  FileText, Shield, CreditCard
} from 'lucide-react';

interface FormData {
  facilityType: string;
  businessType: string;
  businessDetails: any;
  facilityDetails: any;
  mobileVerified: boolean;
  documents: any;
}

const CCODFinanceForm: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    facilityType: '',
    businessType: '',
    businessDetails: {},
    facilityDetails: {},
    mobileVerified: false,
    documents: {}
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    'Facility Type',
    'Business Type', 
    'Details',
    'Facility Info',
    'Mobile Verify',
    'Documents'
  ];

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Step 1: Facility Type Selection
  const FacilityTypeStep = () => {
    const facilityTypes = [
      {
        id: 'cc',
        icon: Landmark,
        title: 'Cash Credit',
        subtitle: 'Stock / Inventory Based',
        color: 'emerald',
        features: ['Separate CC account', 'Based on stock value', 'For ongoing operations']
      },
      {
        id: 'property-od',
        icon: Home,
        title: 'Overdraft (Property)',
        subtitle: 'Property Based OD facility',
        color: 'blue',
        features: ['Against residential/commercial', 'Higher limit available', 'Longer tenure']
      },
      {
        id: 'fd-od',
        icon: PiggyBank,
        title: 'Overdraft (FD Based)',
        subtitle: 'Fixed Deposit Based OD',
        color: 'purple',
        features: ['Up to 90% of FD value', 'Lower interest rate', 'Quick processing']
      },
      {
        id: 'unsecured-od',
        icon: Zap,
        title: 'Unsecured OD',
        subtitle: 'Without Collateral',
        color: 'orange',
        features: ['Based on income/turnover', 'Quick approval', 'For professionals']
      }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What type of facility do you need?
          </h2>
          <p className="text-gray-600">Select the CC/OD facility that suits your requirements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilityTypes.map((type, index) => {
            const Icon = type.icon;
            const isSelected = formData.facilityType === type.id;
            
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-gray-200 hover:border-emerald-300 hover:shadow-lg'
                }`}
                onClick={() => setFormData({...formData, facilityType: type.id})}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  type.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  type.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  type.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.subtitle}</p>
                
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-4 flex items-center justify-center"
                  >
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  // Step 2: Business Type
  const BusinessTypeStep = () => {
    const businessTypes = [
      { id: 'proprietorship', title: 'Proprietorship', subtitle: 'Individual Ownership', icon: User },
      { id: 'partnership', title: 'Partnership Firm', subtitle: 'Partnership Business', icon: Users },
      { id: 'private-limited', title: 'Private Limited Company', subtitle: 'Private Limited', icon: Building2 },
      { id: 'llp', title: 'LLP', subtitle: 'Limited Liability Partnership', icon: Briefcase },
      { id: 'individual', title: 'Individual (for OD)', subtitle: 'Personal', icon: User },
      { id: 'professional', title: 'Professional', subtitle: 'CA / Doctor / Lawyer', icon: Briefcase }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What is your business type?
          </h2>
          <p className="text-gray-600">Select your business structure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessTypes.map((type, index) => {
            const Icon = type.icon;
            const isSelected = formData.businessType === type.id;
            
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                }`}
                onClick={() => setFormData({...formData, businessType: type.id})}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{type.title}</h3>
                  <p className="text-sm text-gray-600">{type.subtitle}</p>
                  
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mt-3"
                    >
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };  // Step 3: Business/Personal Details
  const DetailsStep = () => {
    const isIndividual = formData.businessType === 'individual';
    
    const businessTypes = [
      'Trading / Business',
      'Manufacturing / Production', 
      'Services',
      'Agriculture / Farming',
      'Construction',
      'Transport / Logistics',
      'Food & Beverage',
      'Other'
    ];

    const cities = [
      'Mumbai', 'Pune', 'Nashik', 'Nagpur', 'Aurangabad', 'Solapur', 
      'Kolhapur', 'Sangli', 'Satara', 'Ahmednagar', 'Other'
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isIndividual ? 'Personal Details' : 'Business Details'}
          </h2>
          <p className="text-gray-600">
            {isIndividual ? 'Enter your personal information' : 'Enter your business information'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          {!isIndividual ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter business name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Business *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option value="">Select business type</option>
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years in Business *
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter years"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Turnover (₹) *
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter annual turnover"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Account Bank Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter bank name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter GST number"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Existing CC/OD Facility
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="existingCCOD" value="yes" className="mr-2" />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="existingCCOD" value="no" className="mr-2" />
                    No
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Authorized Person Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter authorized person name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Authorized Person PAN *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter PAN number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Authorized Person Aadhaar *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter Aadhaar number"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address *
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  rows={3}
                  placeholder="Enter complete business address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option value="">Select city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PIN Code *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter PIN code"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PAN Number *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter PAN number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aadhaar Number *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter Aadhaar number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Occupation *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter occupation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Income (₹) *
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter monthly income"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employer Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter employer name (if salaried)"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  rows={3}
                  placeholder="Enter complete address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option value="">Select city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PIN Code *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter PIN code"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };  // Step 4: Facility Details
  const FacilityDetailsStep = () => {
    const [limitRequired, setLimitRequired] = useState(500000);
    const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);

    const purposes = [
      'Stock Purchase',
      'Salary Payment', 
      'Supplier Payment',
      'Inventory Management',
      'Day-to-day Operations',
      'Export Finance',
      'Seasonal Business',
      'Emergency Buffer'
    ];

    const formatCurrency = (amount: number) => {
      if (amount >= 10000000) {
        return `₹${(amount / 10000000).toFixed(1)} Crore`;
      } else if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(1)} Lakh`;
      } else {
        return `₹${amount.toLocaleString()}`;
      }
    };

    const togglePurpose = (purpose: string) => {
      setSelectedPurposes(prev => 
        prev.includes(purpose) 
          ? prev.filter(p => p !== purpose)
          : [...prev, purpose]
      );
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            CC/OD Limit Details
          </h2>
          <p className="text-gray-600">Specify your facility requirements</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Limit Required: <span className="text-2xl font-bold text-emerald-600">{formatCurrency(limitRequired)}</span>
            </label>
            <input
              type="range"
              min="100000"
              max="100000000"
              step="100000"
              value={limitRequired}
              onChange={(e) => setLimitRequired(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-emerald"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>₹1 Lakh</span>
              <span>₹10 Crore</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Purpose of Limit (Select multiple)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {purposes.map(purpose => (
                <motion.div
                  key={purpose}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl border-2 cursor-pointer transition-all text-center text-sm font-medium ${
                    selectedPurposes.includes(purpose)
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 hover:border-emerald-300 text-gray-700'
                  }`}
                  onClick={() => togglePurpose(purpose)}
                >
                  {purpose}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Existing Monthly Sales (₹) *
              </label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter monthly sales"
              />
            </div>

            {formData.facilityType === 'cc' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Stock Value (₹) *
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter average stock value"
                />
              </div>
            )}

            {formData.facilityType === 'property-od' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Value (₹) *
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter property value"
                />
              </div>
            )}

            {formData.facilityType === 'fd-od' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  FD Amount (₹) *
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter FD amount"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Bank (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter preferred bank"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Step 5: Mobile Verification
  const MobileVerifyStep = () => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [otpSent, setOtpSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const handleOtpChange = (index: number, value: string) => {
      if (value.length <= 1) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        
        if (value && index < 5) {
          const nextInput = document.getElementById(`otp-${index + 1}`);
          nextInput?.focus();
        }
      }
    };

    const sendOtp = () => {
      if (mobile.length === 10) {
        setOtpSent(true);
      }
    };

    const verifyOtp = () => {
      const otpValue = otp.join('');
      if (otpValue.length === 6) {
        setIsVerified(true);
        setFormData({...formData, mobileVerified: true});
      }
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Mobile Verification
          </h2>
          <p className="text-gray-600">Verify your mobile number to proceed</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            {!isVerified ? (
              <>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter mobile number"
                      maxLength={10}
                    />
                  </div>
                </div>

                {!otpSent ? (
                  <button
                    onClick={sendOtp}
                    disabled={mobile.length !== 10}
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Send OTP
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter 6-digit OTP
                      </label>
                      <div className="flex space-x-2 justify-center">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg font-medium"
                            maxLength={1}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={verifyOtp}
                      disabled={otp.join('').length !== 6}
                      className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Verify OTP
                    </button>

                    <button
                      onClick={() => setOtpSent(false)}
                      className="w-full text-emerald-600 py-2 text-sm hover:text-emerald-700"
                    >
                      Change Mobile Number
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verified!</h3>
                <p className="text-gray-600">Mobile number +91 {mobile} verified successfully</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };  // Step 6: Documents & Review
  const DocumentsStep = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);

    const UploadBox = ({ title, required = false }: { title: string; required?: boolean }) => (
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        {required && <span className="text-red-500 text-xs">* Required</span>}
      </div>
    );

    const getCollateralDocs = () => {
      switch (formData.facilityType) {
        case 'cc':
          return [
            { title: 'Stock Statement', required: true },
            { title: 'Debtors List', required: true },
            { title: 'Stock Insurance', required: false }
          ];
        case 'property-od':
          return [
            { title: 'Property Title Deed', required: true },
            { title: 'Property Valuation Report', required: true },
            { title: '7/12 Utara', required: true }
          ];
        case 'fd-od':
          return [
            { title: 'FD Receipt', required: true },
            { title: 'FD Certificate', required: true }
          ];
        default:
          return [];
      }
    };

    const handleSubmit = () => {
      if (termsAccepted) {
        setIsSubmitted(true);
      }
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Documents & Review
          </h2>
          <p className="text-gray-600">Upload required documents and review your application</p>
        </div>

        <div className="space-y-8">
          <div className="bg-emerald-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              KYC Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UploadBox title="PAN Card" required />
              <UploadBox title="Aadhaar Card" required />
              <UploadBox title="Passport Photo" required />
              <UploadBox title="Address Proof" required />
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Business Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UploadBox title="GST Registration" required />
              <UploadBox title="Bank Statement (12 Months)" required />
              <UploadBox title="Last 2 Year ITR" required />
              <UploadBox title="CA Financials / Balance Sheet" required />
              <UploadBox title="Business Registration" required />
              <UploadBox title="Shop Act License" />
            </div>
          </div>

          {formData.facilityType !== 'unsecured-od' && (
            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Collateral Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getCollateralDocs().map((doc, index) => (
                  <UploadBox key={index} title={doc.title} required={doc.required} />
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Application Review</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Facility Type:</span>
                <p className="font-medium">{formData.facilityType}</p>
              </div>
              <div>
                <span className="text-gray-600">Business Type:</span>
                <p className="font-medium">{formData.businessType}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                I agree to the <span className="text-emerald-600 underline">Terms & Conditions</span> and 
                <span className="text-emerald-600 underline"> Privacy Policy</span>. I authorize Sanskruti Associates 
                to process my application and contact me regarding this facility.
              </span>
            </label>

            <button
              onClick={handleSubmit}
              disabled={!termsAccepted}
              className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
            >
              Submit CC/OD Application
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Success Screen
  const SuccessScreen = () => {
    const applicationId = `CCOD-${Math.floor(Math.random() * 100000000).toString().padStart(8, '0')}`;

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-slate-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="h-12 w-12" />
          </motion.div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Application Submitted! 🎉
          </h2>
          
          <p className="text-gray-600 mb-4">
            Our Business Finance Expert<br />
            will contact you within 2 hours
          </p>

          <div className="bg-emerald-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Application ID</p>
            <p className="text-xl font-bold text-emerald-600">{applicationId}</p>
          </div>

          <div className="space-y-3">
            <a
              href="https://wa.me/917758969798"
              className="w-full bg-emerald-500 text-white py-3 rounded-xl font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
            
            <a
              href="tel:+917758969798"
              className="w-full border-2 border-emerald-400 text-emerald-600 py-3 rounded-xl font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Expert
            </a>
            
            <button
              onClick={() => navigate('/')}
              className="w-full border-2 border-gray-300 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  if (isSubmitted) {
    return <SuccessScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/cc-od-finance')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-xl font-bold text-gray-900">CC/OD Application</h1>
            <div className="text-sm text-gray-500">
              Step {currentStep} of 6
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-xs font-medium ${
                  index + 1 <= currentStep ? 'text-emerald-600' : 'text-gray-400'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-emerald-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 6) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && <FacilityTypeStep />}
          {currentStep === 2 && <BusinessTypeStep />}
          {currentStep === 3 && <DetailsStep />}
          {currentStep === 4 && <FacilityDetailsStep />}
          {currentStep === 5 && <MobileVerifyStep />}
          {currentStep === 6 && <DocumentsStep />}
        </motion.div>

        {currentStep < 6 && (
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </button>

            <button
              onClick={nextStep}
              disabled={
                (currentStep === 1 && !formData.facilityType) ||
                (currentStep === 2 && !formData.businessType) ||
                (currentStep === 5 && !formData.mobileVerified)
              }
              className="flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CCODFinanceForm;