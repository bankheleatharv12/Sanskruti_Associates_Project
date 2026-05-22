import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from './AppRouter';

export const SchoolFinanceForm: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigateTo('school-finance' as any)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-xl font-bold text-gray-900">School Finance Application</h1>
            <div className="text-sm text-gray-500">
              Form
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              School Finance Application
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-blue-800 font-medium mb-2">
                🚧 Form Under Development
              </p>
              <p className="text-blue-700 text-sm">
                The full School Finance application form fields are currently being built out. 
                This placeholder will be replaced with a comprehensive multi-step form similar 
                to other loan applications in the system.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Planned Form Sections:
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• School Information & Registration Details</li>
                  <li>• Financial Requirements & Loan Amount</li>
                  <li>• Infrastructure Development Plans</li>
                  <li>• Management Team Information</li>
                  <li>• Document Upload & Verification</li>
                  <li>• Terms & Conditions</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigateTo('school-finance' as any)}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Back to School Finance Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolFinanceForm;