import { useState } from 'react';
import { useNavigation } from './AppRouter';

const banks = [
  { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg', url: 'https://www.hdfcbank.com' },
  { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg', url: 'https://www.icicibank.com' },
  { name: 'State Bank of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg', url: 'https://sbi.co.in' },
  { name: 'Axis Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg', url: 'https://www.axisbank.com' },
  { name: 'Kotak Mahindra Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Kotak_Mahindra_Bank_logo.svg', url: 'https://www.kotak.com' },
  { name: 'Punjab National Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Punjab_National_Bank_logo.svg', url: 'https://www.pnbindia.in' },
  { name: 'Bank of Baroda', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Bank_of_Baroda_logo.svg', url: 'https://www.bankofbaroda.in' },
  { name: 'IDFC First Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/IDFC_FIRST_Bank_Logo.svg', url: 'https://www.idfcfirstbank.com' },
  { name: 'Yes Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Yes_Bank_Logo.svg', url: 'https://www.yesbank.in' },
  { name: 'Bajaj Finserv', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Bajaj_finserv.svg', url: 'https://www.bajajfinserv.in' },
  { name: 'IndusInd Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/IndusInd_Bank_Logo.svg', url: 'https://www.indusind.com' },
  { name: 'Union Bank of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Union_Bank_of_India_Logo.svg', url: 'https://www.unionbankofindia.co.in' },
  { name: 'Canara Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Canara_Bank_Logo.svg', url: 'https://canarabank.com' },
  { name: 'Federal Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Federal_Bank_Logo.svg', url: 'https://www.federalbank.co.in' },
  { name: 'RBL Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/RBL_Bank_logo.svg', url: 'https://www.rblbank.com' },
  { name: 'HSBC India', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg', url: 'https://www.hsbc.co.in' },
  { name: 'Standard Chartered', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Standard_Chartered_%282021%29.svg', url: 'https://www.sc.com/in' },
  { name: 'Tata Capital', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_Capital_Logo.svg', url: 'https://www.tatacapital.com' },
  { name: 'Mahindra Finance', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahindra_Finance_logo.svg', url: 'https://www.mahindrafinance.com' },
  { name: 'Aditya Birla Finance', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Aditya_Birla_Capital_logo.svg', url: 'https://abfl.adityabirlacapital.com' },
];

type Bank = {
  name: string;
  logo: string;
  url: string;
};

function getDomain(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];
}

function BankCard({ bank }: { bank: Bank }) {
  const [logoSourceIndex, setLogoSourceIndex] = useState(0);
  const domain = getDomain(bank.url);
  const logoSources = [
    `https://logo.clearbit.com/${domain}?size=256`,
    `https://www.google.com/s2/favicons?domain_url=${bank.url}&sz=128`,
  ];
  const initials = bank.name
    .split(' ')
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0])
    .join('');

  return (
    <a
      href={bank.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${bank.name} official website`}
      className="group block h-full rounded-xl border border-white/70 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] outline-none transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[#2563EB]/30 hover:shadow-[0_18px_40px_rgba(37,99,235,0.18)] focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
    >
      <div className="flex h-full min-h-[184px] flex-col items-center justify-between gap-4 p-4 sm:p-5">
        <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-lg bg-white p-3 ring-1 ring-[#E5E7EB]/80">
          {logoSourceIndex < logoSources.length ? (
            <img
              src={logoSources[logoSourceIndex]}
              alt={`${bank.name} logo`}
              loading="lazy"
              onError={() => setLogoSourceIndex((currentIndex) => currentIndex + 1)}
              className="h-full max-h-16 w-full max-w-[150px] object-contain transition-transform duration-300 ease-out group-hover:scale-105"
            />
          ) : (
            <div
              aria-label={`${bank.name} logo`}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#16A34A] text-lg text-white shadow-[0_8px_22px_rgba(37,99,235,0.24)]"
            >
              {initials}
            </div>
          )}
        </div>
        <div className="min-h-[32px] w-full text-center text-xs leading-tight text-[#374151] sm:text-sm">
          {bank.name}
        </div>
        <span className="inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-[#2563EB] px-3 py-2 text-xs text-white shadow-[0_6px_16px_rgba(37,99,235,0.24)] transition-colors duration-300 group-hover:bg-[#16A34A] sm:text-sm">
          Visit Bank
        </span>
      </div>
    </a>
  );
}

export function OurBankPartners() {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Abstract Financial Network Background */}
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(22, 163, 74, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%),
              linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
            `,
          }}
        ></div>
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(15, 23, 42, 0.85)',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">Our Bank Partners</h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            We work with 20+ leading banks to get you the best loan deals at minimum interest rates
          </p>
        </div>

        {/* Bank Logos Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 mb-12">
          {banks.map((bank, index) => (
            <BankCard key={`${bank.name}-${index}`} bank={bank} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('loan-application')}
            className="bg-[#16A34A] hover:bg-[#15803D] text-white px-10 py-4 transition-colors shadow-lg"
            style={{ borderRadius: '8px' }}
          >
            Compare Bank Offers
          </button>
        </div>
      </div>
    </section>
  );
}
