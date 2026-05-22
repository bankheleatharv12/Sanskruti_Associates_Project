import { FileText, Upload, CheckCircle2, Banknote } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Apply Online',
    description: 'Fill our simple online form in just 5 minutes',
  },
  {
    icon: Upload,
    title: 'Upload Documents',
    description: 'Submit required documents digitally through our secure portal',
  },
  {
    icon: CheckCircle2,
    title: 'Get Approval',
    description: 'Receive loan approval within 2-3 working days',
  },
  {
    icon: Banknote,
    title: 'Receive Loan',
    description: 'Get funds disbursed directly to your bank account',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your loan in 4 simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#16A34A] to-[#2563EB] opacity-20"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-full mb-6 shadow-lg">
                    <Icon className="w-12 h-12 text-white" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#16A34A] rounded-full flex items-center justify-center text-white shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl text-[#1F2937] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#16A34A] hover:bg-[#15803D] text-white px-10 py-4 rounded-lg transition-colors shadow-lg">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
}
