export function BankPartners() {
  const banks = [
    { name: 'HDFC Bank', rate: '8.5%' },
    { name: 'ICICI Bank', rate: '8.7%' },
    { name: 'SBI', rate: '8.6%' },
    { name: 'Axis Bank', rate: '8.8%' },
    { name: 'Kotak Mahindra', rate: '8.9%' },
    { name: 'Bank of Baroda', rate: '8.7%' },
    { name: 'PNB', rate: '8.6%' },
    { name: 'IDFC First Bank', rate: '9.0%' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-4">Our Bank Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with India's leading banks and NBFCs to get you the best deals
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {banks.map((bank, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all text-center group hover:-translate-y-1"
              >
                <div className="h-12 flex items-center justify-center mb-3">
                  <div className="text-lg text-[#1F2937] group-hover:text-[#2563EB] transition-colors">
                    {bank.name}
                  </div>
                </div>
                <div className="text-sm text-gray-500">Starting from</div>
                <div className="text-xl text-[#16A34A]">{bank.rate}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-10 py-4 rounded-lg transition-colors shadow-lg">
              Compare All Offers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
