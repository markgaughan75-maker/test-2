export default function Pricing() {
  const tiers = [
    { name: 'Free', price: '€0', credits: '5 credits' },
    { name: 'Starter', price: '€20', credits: '60 credits' },
    { name: 'Studio', price: '€35', credits: '180 credits' },
    { name: 'Pro', price: '€60', credits: '500 credits' }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {tiers.map((tier) => (
          <div key={tier.name} className="border rounded-lg p-6 shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">{tier.name}</h3>
            <p className="text-2xl font-bold text-brand-purple">{tier.price}</p>
            <p className="text-gray-600">{tier.credits}</p>
            <button className="mt-4 px-4 py-2 bg-brand-purple text-white rounded hover:bg-purple-700">Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
}
