export default function PartnerRecommendation() {
  const columns = [
    {
      num: '01',
      title: 'Why Now',
      body: 'Start with a narrow, unbranded scope that fits women\'s wellness behavior and avoids inflated claims. Build LGPD-safe consent, governance, and local diligence from day one.',
    },
    {
      num: '02',
      title: 'What gets measured',
      body: 'Make success legible to Tier 1 Pharma: creator-attributed efficiency, opt-in, retention, visible symptom movement, referral completion, and evidence packaging.',
    },
    {
      num: '03',
      title: 'Where it expands next',
      body: 'Use the pilot to open a broader relationship — PD-1xVEGF endometrial cancer as the oncology bridge, then adjacent immunoderm opportunities such as vitiligo or alopecia areata.',
    },
  ]

  return (
    <section id="partner-recommendation" className="bg-sosia-navy py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
            Partner Recommendation
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            What Sosia{' '}
            <span className="text-sosia-gold">recommends now</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Frame Sosia as a scoped partner that can prove a new operating model — not just another content vendor.
          </p>
        </div>

        {/* Top callout */}
        <div className="bg-gradient-to-r from-sosia-slate to-sosia-slate border border-sosia-gold/30 rounded-2xl p-8 mb-10 text-center">
          <p className="text-white font-bold text-xl md:text-2xl leading-relaxed">
            Sponsor an unbranded obesity pilot in Brazil for diverse women —{' '}
            <span className="text-sosia-gold">
              then use proof to expand into endometrial oncology and immunoderm.
            </span>
          </p>
        </div>

        {/* 3-column cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {columns.map((col, i) => (
            <div
              key={i}
              className="bg-sosia-slate/50 border border-white/10 rounded-2xl p-7 hover:border-sosia-coral/30 transition-all group"
            >
              <span className="text-sosia-coral text-xs font-black uppercase tracking-widest mb-3 block">
                {col.num}
              </span>
              <h3 className="text-white font-bold text-lg mb-4 group-hover:text-sosia-gold transition-colors">
                {col.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{col.body}</p>
            </div>
          ))}
        </div>

        {/* Decision ask */}
        <div className="bg-sosia-coral/10 border border-sosia-coral/30 rounded-2xl px-8 py-6 flex items-start gap-4">
          <svg className="w-5 h-5 text-sosia-coral mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-white/80 text-sm leading-relaxed">
            <span className="text-sosia-coral font-semibold">Decision ask: </span>
            Commission a 4–6 week diligence sprint, local regulatory review, and a detailed pilot
            blueprint with measurement architecture.
          </p>
        </div>

      </div>
    </section>
  )
}
