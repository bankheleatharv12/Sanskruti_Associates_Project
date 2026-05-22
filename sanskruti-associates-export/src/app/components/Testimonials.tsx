import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    rating: 5,
    text: 'Sanskruti Associates helped me get a business loan with the best interest rate. The process was smooth and the team was very professional.',
  },
  {
    name: 'Priya Sharma',
    role: 'Homebuyer',
    rating: 5,
    text: 'I got my home loan approved in just 3 days! The documentation process was so easy. Highly recommended for anyone looking for home loans.',
  },
  {
    name: 'Amit Patel',
    role: 'Entrepreneur',
    rating: 5,
    text: 'Best loan consultancy service I have used. They compared offers from multiple banks and helped me save lakhs in interest payments.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all relative"
            >
              <div className="absolute top-6 right-6 text-[#2563EB] opacity-10">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-full flex items-center justify-center text-white text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[#1F2937]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
