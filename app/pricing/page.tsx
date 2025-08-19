export default function Pricing() {
  const tiers = [
    { name: 'Free', price: '€0', credits: '5 credits', cta: 'Try free', highlight: false },
    { name: 'Starter', price: '€20', credits: '60 credits', cta: 'Choose Starter', highlight: false },
    { name: 'Studio', price: '€35', credits: '180 credits', cta: 'Choose Studio', highlight: true },
    { name: 'Pro', price: '€60', credits: '500 credits', cta: 'Choose Pro', highlight: false },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight">Pricing</h2>
        <p className="mt-2 text-slate-600">One subscription works across Enhancement, Staging, and Design Options.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-6 shadow-sm bg-white hover:shadow-md transition ${
              t.highlight ? 'border-violet-300' : 'border-slate-200'
            }`}
          >
            {t.highlight && (
              <div className="mb-3 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                Most popular
              </div>
            )}
            <h3 className="font-bold text-lg">{t.name}</h3>
            <div className="mt-2 text-3xl font-extrabold text-violet-700">{t.price}</div>
            <p className="text-slate-600 mt-1">{t.credits}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Low / Medium / High quality</li>
              <li>• Commercial use</li>
              <li>• Download full-res</li>
            </ul>
            <a
              href="#"
              className={`mt-6 block w-full text-center rounded-xl py-3 font-semibold ${
                t.highlight
                  ? 'bg-violet-600 text-white hover:bg-violet-700'
                  : 'bg-white border border-slate-300 hover:border-violet-300'
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
