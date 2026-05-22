import { CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigation } from './AppRouter';

const slideImages = [
  '/src/imports/ChatGPT_Image_May_3,_2026,_07_41_15_PM.png',
  '/src/imports/670486ce-7c2d-4528-bb8d-ddca5789fca4.png',
  '/src/imports/ChatGPT_Image_May_3,_2026,_07_40_58_PM.png',
  '/src/imports/ChatGPT_Image_May_3,_2026,_07_40_44_PM.png',
  '/src/imports/ChatGPT_Image_May_3,_2026,_07_40_34_PM.png',
  '/src/imports/ChatGPT_Image_May_3,_2026,_07_17_58_PM.png',
  '/src/imports/ChatGPT_Image_May_3,_2026,_07_12_10_PM.png',
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { navigateTo } = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 1 : 0,
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Dark Blue Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(37, 99, 235, 0.4) 100%)',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
              <span className="text-sm">Trusted by 1000+ customers</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Get the Best Loan Deals from Multiple Banks
            </h1>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
              Fast approval, competitive interest rates, and expert guidance. Compare loan offers from top banks and choose the best deal tailored for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigateTo('loan-application')} className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-lg transition-colors shadow-lg">
                Apply Now
              </button>
              <button onClick={() => navigateTo('emi-calculator')} className="bg-white hover:bg-gray-100 text-[#2563EB] px-8 py-4 rounded-lg transition-colors shadow-lg">
                Check EMI
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl">1000+</div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl">₹500Cr+</div>
                <div className="text-sm text-blue-200">Loans Disbursed</div>
              </div>
              <div>
                <div className="text-3xl">25+</div>
                <div className="text-sm text-blue-200">Bank Partners</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Quick Process</div>
                      <div className="text-xl">2-3 Days Approval</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Interest Rate</div>
                      <div className="text-xl">Starting from 8.5%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Documentation</div>
                      <div className="text-xl">Minimal & Easy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className="transition-all duration-300 hover:scale-110"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? 'bg-white scale-110'
                    : 'bg-transparent border-2 border-white'
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
