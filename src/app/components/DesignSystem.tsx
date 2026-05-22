import { Check, X, AlertCircle, Home as HomeIcon } from 'lucide-react';
import { useNavigation } from './AppRouter';

export function DesignSystem() {
  const { navigateTo } = useNavigation();

  const colors = [
    { name: 'Primary Blue', hex: '#2563EB', usage: 'Primary buttons, links, active states' },
    { name: 'Accent Green', hex: '#16A34A', usage: 'Success, CTAs, positive actions' },
    { name: 'Dark Navy', hex: '#0f172a', usage: 'Sidebar, headers, dark backgrounds' },
    { name: 'Background', hex: '#EFF6FF', usage: 'Page backgrounds, light sections' },
    { name: 'Text Dark', hex: '#1F2937', usage: 'Primary text, headings' },
    { name: 'Text Gray', hex: '#6B7280', usage: 'Secondary text, captions' },
    { name: 'White', hex: '#FFFFFF', usage: 'Cards, light backgrounds' },
    { name: 'Orange', hex: '#F59E0B', usage: 'Warnings, pending status' },
    { name: 'Red', hex: '#EF4444', usage: 'Errors, rejected status' },
  ];

  const typography = [
    { name: 'Heading 1', size: '48px', weight: 'Bold', usage: 'Page titles' },
    { name: 'Heading 2', size: '36px', weight: 'Bold', usage: 'Section titles' },
    { name: 'Heading 3', size: '24px', weight: 'Bold', usage: 'Card titles' },
    { name: 'Body', size: '16px', weight: 'Regular', usage: 'Body text' },
    { name: 'Small', size: '14px', weight: 'Regular', usage: 'Captions' },
    { name: 'Caption', size: '12px', weight: 'Regular', usage: 'Labels' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl text-[#1F2937] mb-2">Design System</h1>
            <p className="text-lg text-gray-600">Sanskruti Associates â€” Design Guidelines</p>
          </div>
          <button
            onClick={() => navigateTo('homepage')}
            className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            Home
          </button>
        </div>

        {/* Colors Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl text-[#1F2937] mb-6">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div
                  className="w-full h-24 rounded-lg mb-4"
                  style={{ background: color.hex }}
                ></div>
                <h3 className="text-lg text-[#1F2937] mb-1">{color.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{color.hex}</p>
                <p className="text-xs text-gray-500">{color.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl text-[#1F2937] mb-6">Typography</h2>
          <div className="space-y-6">
            {typography.map((type, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-baseline justify-between mb-2">
                  <span style={{ fontSize: type.size, fontWeight: type.weight === 'Bold' ? 700 : 400 }}>
                    {type.name}
                  </span>
                  <div className="text-sm text-gray-500">
                    {type.size} / {type.weight}
                  </div>
                </div>
                <p className="text-xs text-gray-500">{type.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl text-[#1F2937] mb-6">Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-3">Primary Button</p>
              <button className="w-full h-12 bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg transition-colors">
                Primary Button
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-3">Secondary Button</p>
              <button className="w-full h-12 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors">
                Secondary Button
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-3">Outline Button</p>
              <button className="w-full h-12 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-blue-50 transition-colors">
                Outline Button
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-3">Disabled Button</p>
              <button className="w-full h-12 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
                Disabled Button
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-3">Danger Button</p>
              <button className="w-full h-12 bg-[#EF4444] hover:bg-red-600 text-white rounded-lg transition-colors">
                Danger Button
              </button>
            </div>
          </div>
        </section>

        {/* Input Fields Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl text-[#1F2937] mb-6">Input Fields</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-[#374151] mb-2">Normal State</label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[#374151] mb-2">Focused State</label>
              <input
                type="text"
                placeholder="Focused input..."
                className="w-full h-12 px-4 rounded-lg border-2 border-[#2563EB] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[#374151] mb-2">Error State</label>
              <input
                type="text"
                placeholder="Error input..."
                className="w-full h-12 px-4 rounded-lg border-2 border-[#EF4444] outline-none"
              />
              <p className="text-sm text-[#EF4444] mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                This field is required
              </p>
            </div>
            <div>
              <label className="block text-sm text-[#374151] mb-2">Disabled State</label>
              <input
                type="text"
                placeholder="Disabled input..."
                className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed"
                disabled
              />
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl text-[#1F2937] mb-6">Card Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl text-[#1F2937] mb-2">Basic Card</h3>
              <p className="text-gray-600">Simple card with border and padding. Used for content sections.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl text-[#1F2937] mb-2">Elevated Card</h3>
              <p className="text-gray-600">Card with shadow elevation. Used for prominent sections.</p>
            </div>
            <div className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white rounded-xl p-6">
              <h3 className="text-xl mb-2">Gradient Card</h3>
              <p className="text-blue-100">Blue gradient card. Used for hero sections and CTAs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl text-[#1F2937] mb-2">Glass Card</h3>
              <p className="text-gray-600">Glassmorphism effect. Used on image backgrounds.</p>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl text-[#1F2937] mb-6">Badge Styles</h2>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-[#16A34A] text-white text-sm rounded-full">
              Approved
            </span>
            <span className="px-4 py-2 bg-[#F59E0B] text-white text-sm rounded-full">
              Pending
            </span>
            <span className="px-4 py-2 bg-[#EF4444] text-white text-sm rounded-full">
              Rejected
            </span>
            <span className="px-4 py-2 bg-[#2563EB] text-white text-sm rounded-full">
              In Review
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-full">
              Inactive
            </span>
            <span className="px-4 py-2 border-2 border-[#2563EB] text-[#2563EB] text-sm rounded-full">
              Outline Badge
            </span>
          </div>
        </section>

        {/* Status Icons Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl text-[#1F2937] mb-6">Status Icons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-2">
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600">Success</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#EF4444] rounded-full flex items-center justify-center mx-auto mb-2">
                <X className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600">Error</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-2">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600">Warning</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600">Active</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
