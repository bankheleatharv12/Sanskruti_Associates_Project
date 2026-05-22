import { useState } from 'react';
import { Eye, EyeOff, Home as HomeIcon } from 'lucide-react';
import { useNavigation } from './AppRouter';

export function LoginRegister() {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div
          className="w-full max-w-md"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 8px 32px rgba(37, 99, 235, 0.15)',
          }}
        >
          {/* Logo */}
          <div className="text-center mb-6">
            <img
              src="/src/imports/ChatGPT_Image_May_3,_2026,_08_05_15_PM.png"
              alt="Sanskruti Associates Logo"
              className="h-16 w-auto mx-auto mb-4"
            />
          </div>

          {/* Tab Switcher */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 pb-3 text-center transition-colors ${
                activeTab === 'login'
                  ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                  : 'text-gray-500'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 pb-3 text-center transition-colors ${
                activeTab === 'register'
                  ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                  : 'text-gray-500'
              }`}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl text-[#1F2937] mb-2">Welcome Back</h2>
                <p className="text-sm text-[#6B7280]">Login to track your loan application</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-[#374151] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                    style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full h-12 px-4 pr-12 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                      style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 accent-[#2563EB]"
                    />
                    <span className="text-sm text-[#374151]">Remember Me</span>
                  </label>
                  <a href="#" className="text-sm text-[#16A34A] hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('user-dashboard');
                  }}
                  className="w-full h-12 bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg transition-colors"
                >
                  Login
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                <p className="text-center text-sm text-[#374151]">
                  New user?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('register')}
                    className="text-[#16A34A] hover:underline"
                  >
                    Register here
                  </button>
                </p>
              </form>
            </div>
          )}

          {/* Register Form */}
          {activeTab === 'register' && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl text-[#1F2937] mb-2">Create Account</h2>
                <p className="text-sm text-[#6B7280]">Start your loan journey today</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-[#374151] mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                    style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                    style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                    style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      className="w-full h-12 px-4 pr-12 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                      style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      className="w-full h-12 px-4 pr-12 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                      style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('user-dashboard');
                  }}
                  className="w-full h-12 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors"
                >
                  Register
                </button>

                <p className="text-center text-sm text-[#374151]">
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="text-[#2563EB] hover:underline"
                  >
                    Login here
                  </button>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
