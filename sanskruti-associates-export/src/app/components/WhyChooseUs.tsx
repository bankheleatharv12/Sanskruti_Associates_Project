import { Building2, Zap, TrendingDown, Headphones, FileCheck } from 'lucide-react';

const benefits = [
  {
    icon: Building2,
    title: 'Multiple Bank Options',
    description: 'Compare offers from 25+ leading banks and NBFCs in one place',
  },
  {
    icon: Zap,
    title: 'Fast Approval',
    description: 'Get loan approval in 2-3 days with our streamlined process',
  },
  {
    icon: TrendingDown,
    title: 'Low Interest Rates',
    description: 'Competitive rates starting from 8.5% per annum',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated loan advisors to guide you at every step',
  },
  {
    icon: FileCheck,
    title: 'Easy Documentation',
    description: 'Minimal paperwork with digital document submission',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_4,_2026,_03_14_06_PM.png"
          alt="Modern corporate office background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Blue Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(15, 23, 42, 0.80)',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">Why Choose Sanskruti Associates?</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            We make loan approval simple, fast, and transparent
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#16A34A]/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform border border-[#16A34A]/30">
                  <Icon className="w-10 h-10 text-[#16A34A]" />
                </div>
                <h3 className="text-lg text-white mb-2">{benefit.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
