import { Shield, Award, CheckCircle2, Lock } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: '100% Secure',
    description: 'Bank-level security',
  },
  {
    icon: Award,
    title: 'Trusted Service',
    description: '1000+ happy customers',
  },
  {
    icon: CheckCircle2,
    title: 'Verified Partners',
    description: '25+ banks & NBFCs',
  },
  {
    icon: Lock,
    title: 'Data Protected',
    description: 'SSL encrypted',
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center mb-3">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-[#1F2937] mb-1">{badge.title}</div>
                <div className="text-sm text-gray-500">{badge.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
