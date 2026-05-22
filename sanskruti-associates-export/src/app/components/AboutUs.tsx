import { Home as HomeIcon, Users, TrendingUp, Award, Building2, Zap, DollarSign, Headphones, Phone, MessageCircle, Star, ChevronRight, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const services = [
  { icon: '🏠', name: 'Home Loan', desc: 'Affordable housing loans with best rates' },
  { icon: '👤', name: 'Personal Loan', desc: 'Quick personal loans up to ₹25 lakhs' },
  { icon: '🚗', name: 'Car Loan', desc: 'Drive your dream car with easy EMIs' },
  { icon: '💼', name: 'Business Loan', desc: 'Grow your business with our funding' },
  { icon: '🏢', name: 'Loan Against Property', desc: 'Unlock your property value' },
  { icon: '🎓', name: 'Education Loan', desc: 'Invest in your future education' },
  { icon: '🏫', name: 'School Finance', desc: 'Fund educational institutions' },
  { icon: '🏥', name: 'Hospital Finance', desc: 'Healthcare facility financing' },
  { icon: '⚙️', name: 'Machinery Loan', desc: 'Finance industrial equipment' },
];

const whyChooseUs = [
  { icon: Building2, title: 'Multiple Banks', desc: 'Access to 20+ banks and NBFCs', color: '#2563EB' },
  { icon: Zap, title: 'Fast Approval', desc: 'Loan approval in 48 hours', color: '#16A34A' },
  { icon: DollarSign, title: 'Best Rates', desc: 'Lowest interest rates guaranteed', color: '#2563EB' },
  { icon: Headphones, title: 'Expert Team', desc: 'Dedicated loan experts', color: '#16A34A' },
];

const team = [
  { name: 'Shekhar Shinde', designation: 'President', phone: '+91 7758 96 9798', email: 'sanskruti.sss1108@gmail.com' },
];

const testimonials = [
  { name: 'Rajesh Kumar', loanType: 'Home Loan', text: 'Sanskruti Associates helped me get the best home loan deal. The process was smooth and transparent. Highly recommended!', rating: 5 },
  { name: 'Sneha Patel', loanType: 'Personal Loan', text: 'Got my personal loan approved in just 2 days! The team was very professional and supportive throughout.', rating: 5 },
  { name: 'Vikram Reddy', loanType: 'Business Loan', text: 'Excellent service! They helped me compare multiple banks and saved lakhs in interest. Thank you team!', rating: 5 },
];

export function AboutUs() {
  return (
    <div className="min-h-screen" style={{ background: '#EFF6FF' }}>
      {/* Hero Banner */}
      <section
        className="relative h-[300px] flex items-center justify-center text-white overflow-hidden"
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
            <span>About Us</span>
          </div>
          <h1 className="text-4xl lg:text-5xl mb-4">About Sanskruti Associates</h1>
          <p className="text-xl text-blue-100">Your Trusted Loan Partner — Always With You</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Intro Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sanskruti Associates is a leading loan brokerage firm based in Maharashtra, helping individuals and businesses get the best loan deals from 20+ top banks and NBFCs. We specialize in providing personalized financial solutions tailored to your unique needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to simplify the loan process and ensure every client gets the most competitive interest rates, fastest approvals, and exceptional customer service. With over 10 years of experience, we've helped thousands achieve their financial goals.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center justify-center mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center text-white text-6xl">
                  SA
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl text-[#2563EB] mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl text-[#16A34A] mb-1">20+</div>
                  <div className="text-sm text-gray-600">Bank Partners</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl text-[#2563EB] mb-1">₹50Cr+</div>
                  <div className="text-sm text-gray-600">Loans Disbursed</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl text-[#16A34A] mb-1">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Counter Section */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl text-[#1F2937] mb-2">500+</div>
              <div className="text-sm text-gray-600">Customers</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#16A34A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl text-[#1F2937] mb-2">20+</div>
              <div className="text-sm text-gray-600">Bank Partners</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl text-[#1F2937] mb-2">₹50Cr+</div>
              <div className="text-sm text-gray-600">Disbursed</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#16A34A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl text-[#1F2937] mb-2">10+</div>
              <div className="text-sm text-gray-600">Loan Products</div>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">Our Loan Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl text-[#1F2937] mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">Why Choose Sanskruti Associates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
                <div className="w-32 h-32 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl text-[#1F2937] mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{member.designation}</p>
                <p className="text-sm text-gray-700 mb-4">{member.phone}</p>
                <button className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 rounded-lg transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="text-[#1F2937] mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.loanType}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Banner */}
      <section
        className="py-16 lg:py-24 text-white text-center"
        style={{
          background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl mb-4">Ready to Get Your Loan?</h2>
          <p className="text-xl text-blue-100 mb-8">Talk to our expert today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2563EB] hover:bg-gray-100 px-10 py-4 rounded-lg transition-colors shadow-lg">
              Apply Now
            </button>
            <button className="bg-[#16A34A] hover:bg-[#15803D] text-white px-10 py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
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
