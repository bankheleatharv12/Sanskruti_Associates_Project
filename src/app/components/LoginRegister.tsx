import { FormEvent, useState } from 'react';
import { Eye, EyeOff, Home as HomeIcon } from 'lucide-react';
import { useNavigation } from './AppRouter';

type AuthErrors = Partial<Record<'name' | 'email' | 'phone' | 'password' | 'confirmPassword', string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[6-9]\d{9}$/;

export function LoginRegister() {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<AuthErrors>({});

  const validateLogin = () => {
    const nextErrors: AuthErrors = {};

    if (!emailPattern.test(loginData.email)) {
      nextErrors.email = 'Enter a valid email address';
    }

    if (loginData.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateRegister = () => {
    const nextErrors: AuthErrors = {};

    if (registerData.name.trim().length < 3) {
      nextErrors.name = 'Full name is required';
    }

    if (!emailPattern.test(registerData.email)) {
      nextErrors.email = 'Enter a valid email address';
    }

    if (!phonePattern.test(registerData.phone)) {
      nextErrors.phone = 'Enter a valid 10 digit Indian mobile number';
    }

    if (registerData.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters';
    }

    if (registerData.confirmPassword !== registerData.password) {
      nextErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateLogin()) {
      navigateTo('user-dashboard');
    }
  };

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateRegister()) {
      navigateTo('user-dashboard');
    }
  };

  const switchTab = (tab: 'login' | 'register') => {
    setActiveTab(tab);
    setErrors({});
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={() => navigateTo('homepage')}
        className="fixed top-24 right-4 sm:right-6 z-50 flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors shadow-lg"
      >
        <HomeIcon className="w-5 h-5" />
        Home
      </button>

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
          <div className="text-center mb-6">
            <img
              src="/src/imports/ChatGPT_Image_May_3,_2026,_08_05_15_PM.png"
              alt="Sanskruti Associates Logo"
              className="h-16 w-auto mx-auto mb-4"
            />
          </div>

          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => switchTab('login')}
              className={`flex-1 pb-3 text-center transition-colors ${
                activeTab === 'login'
                  ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                  : 'text-gray-500'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => switchTab('register')}
              className={`flex-1 pb-3 text-center transition-colors ${
                activeTab === 'register'
                  ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                  : 'text-gray-500'
              }`}
            >
              Register
            </button>
          </div>

          {activeTab === 'login' && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl text-[#1F2937] mb-2">Welcome Back</h2>
                <p className="text-sm text-[#6B7280]">Login to track your loan application</p>
              </div>

              <form className="space-y-4" onSubmit={handleLogin} noValidate>
                <div>
                  <label className="block text-sm text-[#374151] mb-2">Email</label>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(event) => setLoginData({ ...loginData, email: event.target.value })}
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                    style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginData.password}
                      onChange={(event) => setLoginData({ ...loginData, password: event.target.value })}
                      placeholder="Enter your password"
                      className="w-full h-12 px-4 pr-12 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                      style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(event) => setRememberMe(event.target.checked)}
                      className="w-4 h-4 accent-[#2563EB]"
                    />
                    <span className="text-sm text-[#374151]">Remember Me</span>
                  </label>
                  <button type="button" className="text-sm text-[#16A34A] hover:underline">
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
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
                    onClick={() => switchTab('register')}
                    className="text-[#16A34A] hover:underline"
                  >
                    Register here
                  </button>
                </p>
              </form>
            </div>
          )}

          {activeTab === 'register' && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl text-[#1F2937] mb-2">Create Account</h2>
                <p className="text-sm text-[#6B7280]">Start your loan journey today</p>
              </div>

              <form className="space-y-4" onSubmit={handleRegister} noValidate>
                <div>
                  <label className="block text-sm text-[#374151] mb-2">Full Name</label>
                  <input
                    type="text"
                    value={registerData.name}
                    onChange={(event) => setRegisterData({ ...registerData, name: event.target.value })}
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                    style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Email</label>
                  <input
                    type="email"
                    value={registerData.email}
                    onChange={(event) => setRegisterData({ ...registerData, email: event.target.value })}
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                    style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={registerData.phone}
                    onChange={(event) => setRegisterData({ ...registerData, phone: event.target.value.replace(/\D/g, '').slice(0, 10) })}
                    placeholder="Enter your phone number"
                    className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                    style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={registerData.password}
                      onChange={(event) => setRegisterData({ ...registerData, password: event.target.value })}
                      placeholder="Create a password"
                      className="w-full h-12 px-4 pr-12 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                      style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-sm text-[#374151] mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={registerData.confirmPassword}
                      onChange={(event) => setRegisterData({ ...registerData, confirmPassword: event.target.value })}
                      placeholder="Confirm your password"
                      className="w-full h-12 px-4 pr-12 rounded-lg border border-[#E5E7EB] focus:border-[#2563EB] focus:outline-none transition-colors text-[#1F2937]"
                      style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                      aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors"
                >
                  Register
                </button>

                <p className="text-center text-sm text-[#374151]">
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => switchTab('login')}
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
