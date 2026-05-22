import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-gray-300">
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
            <h4 className="text-white mb-4">Loan Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Home Loan</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Personal Loan</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Business Loan</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Car Loan</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Loan Against Property</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">CC/OD</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Compare Loans</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Check Eligibility</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Contact Us</a></li>
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
  );
}
