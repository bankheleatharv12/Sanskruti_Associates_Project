import { Phone, MessageCircle, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanType: '',
  });

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2563EB] to-[#1E40AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl mb-6">Talk to Our Loan Expert Today</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get personalized loan advice and find the perfect solution for your needs. Our experts are here to help you every step of the way.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="tel:+917758969798"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-4 rounded-xl border border-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-[#16A34A] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">Call Us Now</div>
                  <div className="text-lg">+91 7758 96 9798</div>
                </div>
              </a>

              <a
                href="https://wa.me/917758969798"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-4 rounded-xl border border-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-[#16A34A] rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">WhatsApp Us</div>
                  <div className="text-lg">Chat on WhatsApp</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-200">
              <Mail className="w-4 h-4" />
              <span>sanskruti.sss1108@gmail.com</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl text-[#1F2937] mb-6">Quick Inquiry Form</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-[#1F2937] mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-[#1F2937] mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-[#1F2937] mb-2">Loan Type *</label>
                <select
                  value={formData.loanType}
                  onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  required
                >
                  <option value="">Select loan type</option>
                  <option value="home">Home Loan</option>
                  <option value="personal">Personal Loan</option>
                  <option value="business">Business Loan</option>
                  <option value="car">Car Loan</option>
                  <option value="lap">Loan Against Property</option>
                  <option value="ccod">CC/OD</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Submit Inquiry
                <Send className="w-5 h-5" />
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our Terms & Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
