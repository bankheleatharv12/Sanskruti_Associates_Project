import { useState } from 'react';
import { Home as HomeIcon, Phone, MessageCircle, Mail, MapPin, Clock, ChevronRight, ChevronDown, Send, Facebook, Instagram, Linkedin, Youtube, Twitter, CheckCircle2, Map } from 'lucide-react';

const faqs = [
  { q: 'What documents are required?', a: 'Basic documents include Aadhaar card, PAN card, income proof (salary slips/ITR), bank statements for last 6 months, and property documents (for home/LAP loans).' },
  { q: 'How long does approval take?', a: 'Typically, loan approval takes 2-3 working days after all documents are submitted and verified. For urgent cases, we can expedite the process.' },
  { q: 'What is the minimum credit score?', a: 'Generally, a CIBIL score of 700+ is preferred. However, we work with multiple banks and can help even with lower scores depending on your overall profile.' },
  { q: 'Can I apply for multiple loans?', a: 'Yes, you can apply for multiple loan types. However, approval depends on your repayment capacity, existing EMIs, and debt-to-income ratio.' },
  { q: 'Is there any processing fee?', a: 'Our consultation service is FREE. Bank processing fees vary by lender and loan amount. We help you find banks with minimal processing fees.' },
];

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: '',
    loanAmount: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const isWeekday = () => {
    const day = new Date().getDay();
    return day >= 1 && day <= 5;
  };

  return (
    <div className="min-h-screen" style={{ background: '#EFF6FF' }}>
      {/* Hero Banner */}
      <section
        className="relative h-[250px] flex items-center justify-center text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#16A34A] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <div className="flex items-center justify-center gap-2 text-sm mb-4 text-blue-200">
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl lg:text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">We are here to help you get the best loan deal</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 -mt-12 mb-16 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-[#16A34A] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-[#16A34A]" />
            </div>
            <h3 className="text-xl text-[#1F2937] mb-2">Call Us</h3>
            <p className="text-lg text-[#1F2937] mb-1">7758 96 9798 / 9921 37 4565</p>
            <p className="text-sm text-gray-500 mb-4">Mon-Sat: 9AM to 7PM</p>
            <a href="tel:+917758969798" className="block w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-3 rounded-lg transition-colors">
              Call Now
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-[#25D366] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h3 className="text-xl text-[#1F2937] mb-2">WhatsApp Us</h3>
            <p className="text-lg text-[#1F2937] mb-1">7758 96 9798</p>
            <p className="text-sm text-gray-500 mb-4">Quick response guaranteed</p>
            <button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 rounded-lg transition-colors">
              Chat Now
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-[#2563EB] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-[#2563EB]" />
            </div>
            <h3 className="text-xl text-[#1F2937] mb-2">Email Us</h3>
            <p className="text-lg text-[#1F2937] mb-1">sanskruti.sss1108@gmail.com</p>
            <p className="text-sm text-gray-500 mb-4">Reply within 24 hours</p>
            <button className="w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white py-3 rounded-lg transition-colors">
              Send Email
            </button>
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <h2 className="text-3xl text-[#1F2937] mb-8">Send Us a Message</h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-[#374151] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#374151] mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#374151] mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#374151] mb-2">Loan Type</label>
                    <select
                      value={formData.loanType}
                      onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                    >
                      <option value="">Select loan type</option>
                      <option>Home Loan</option>
                      <option>Personal Loan</option>
                      <option>Car Loan</option>
                      <option>Business Loan</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[#374151] mb-2">Loan Amount</label>
                    <select
                      value={formData.loanAmount}
                      onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none"
                    >
                      <option value="">Select loan amount</option>
                      <option>Under 5L</option>
                      <option>5L - 25L</option>
                      <option>25L - 1Cr</option>
                      <option>Above 1Cr</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[#374151] mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:outline-none resize-none"
                      placeholder="Describe your requirement..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl text-[#1F2937] mb-3">Message sent successfully!</h3>
                  <p className="text-gray-600">We will contact you within 2 hours</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Office Address */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2563EB] bg-opacity-20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl text-[#1F2937]">Our Office</h3>
              </div>
              <p className="text-gray-700 mb-4">
                123 Business Park<br />
                Mumbai, Maharashtra<br />
                India - 400001
              </p>

              <div className="bg-blue-100 rounded-lg h-48 flex items-center justify-center mb-4">
                <Map className="w-16 h-16 text-[#2563EB]" />
              </div>

              <button className="w-full border-2 border-[#2563EB] text-[#2563EB] py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Get Directions
              </button>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#16A34A] bg-opacity-20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#16A34A]" />
                </div>
                <h3 className="text-xl text-[#1F2937]">Business Hours</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-[#1F2937] flex items-center gap-2">
                    9:00 AM - 7:00 PM
                    <span className="text-[#16A34A]">✅</span>
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-[#1F2937] flex items-center gap-2">
                    9:00 AM - 5:00 PM
                    <span className="text-[#16A34A]">✅</span>
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-[#1F2937] flex items-center gap-2">
                    Closed
                    <span className="text-[#EF4444]">❌</span>
                  </span>
                </div>
              </div>

              {isWeekday() && (
                <div className="mt-4 p-3 bg-[#16A34A] bg-opacity-10 rounded-lg text-center">
                  <span className="text-[#16A34A]">🟢 We are currently Open</span>
                </div>
              )}
            </div>

            {/* Follow Us */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl text-[#1F2937] mb-4">Follow Us</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <Facebook className="w-6 h-6 text-[#1877F2]" />
                  <span className="text-gray-700">Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                  <Instagram className="w-6 h-6 text-[#E4405F]" />
                  <span className="text-gray-700">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                  <span className="text-gray-700">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                  <Youtube className="w-6 h-6 text-[#FF0000]" />
                  <span className="text-gray-700">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 shadow-lg overflow-hidden"
                style={{ borderLeftColor: activeFaq === index ? '#2563EB' : 'transparent' }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-[#1F2937] pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <section
        className="py-12 text-white text-center mb-16"
        style={{
          background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Need Instant Help?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-white text-[#2563EB] hover:bg-gray-100 px-10 py-4 rounded-lg transition-colors shadow-lg">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-4 rounded-lg transition-colors shadow-lg">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl text-white mb-4">Sanskruti Associates</div>
              <p className="text-sm mb-6 leading-relaxed">
                Your trusted partner for all loan solutions. We help you find the best deals from multiple banks with expert guidance.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">EMI Calculator</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Apply Now</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Loan Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Home Loan</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Personal Loan</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Business Loan</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Car Loan</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Education Loan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>123 Business Park, Mumbai, Maharashtra 400001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                  <a href="tel:+917758969798" className="hover:text-[#2563EB] transition-colors">+91 7758 96 9798</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                  <a href="mailto:sanskruti.sss1108@gmail.com" className="hover:text-[#2563EB] transition-colors">sanskruti.sss1108@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>© 2026 Sanskruti Associates. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#2563EB] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
