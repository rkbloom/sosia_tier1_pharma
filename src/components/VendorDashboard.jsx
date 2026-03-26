export default function VendorDashboard() {
  return (
    <section className="bg-sosia-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
            Long-Term Partnership
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
            Your Long-Term Vendor for{' '}
            <span className="text-gradient-gold">Health Equity and Performance</span>
          </h2>
        </div>

        {/* Quote + Platform */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Quote */}
          <div className="bg-sosia-slate/40 border border-white/10 rounded-2xl p-10">
            <div className="text-sosia-gold text-5xl font-black mb-6 leading-none">"</div>
            <blockquote className="text-white text-xl font-medium leading-relaxed mb-6">
              For 20+ years I've built brands by the community — Sosia is that vision in AI
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sosia-gold/20 flex items-center justify-center text-sosia-gold font-bold">
                AW
              </div>
              <div>
                <p className="text-white font-semibold">Aaron Walton</p>
                <p className="text-white/50 text-sm">Founder &amp; CEO, Sosia Systems Inc.</p>
              </div>
            </div>
          </div>

          {/* The Platform */}
          <div>
            <h3 className="text-sosia-gold font-bold text-xl mb-6">The Platform</h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Built on Brazil's 55.5% Black or mixed-race population and genetic diversity for
              unmatched phenotype data — powering Tier1 Pharma-level metabolic health outcomes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🤖', label: 'Agentic AI', desc: 'Autonomous signal processing' },
                { icon: '🧬', label: 'Agentic AI', desc: 'Phenotype-rich cohorts' },
                { icon: '📊', label: 'Real-World Evidence', desc: 'Clinical-grade insights' },
                { icon: '🌍', label: 'Scale', desc: '4.3M active participants' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verticals */}
        <div className="mb-12">
          <h3 className="text-white font-bold text-xl text-center mb-8">Our Verticals</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: '💊', label: 'Pharmaceutical', sub: 'Clinical trials & market access' },
              { icon: '🏥', label: 'Insurance', sub: 'Risk modeling & underwriting' },
              { icon: '👨‍⚕️', label: 'Providers', sub: 'Care delivery optimization' },
              { icon: '🏢', label: 'GWS / Media', sub: 'Media & brand intelligence' },
            ].map((v, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-sosia-slate/40 border border-white/10 rounded-2xl p-8 w-48 hover:border-sosia-gold/40 transition-colors"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <p className="text-white font-semibold text-sm text-center">{v.label}</p>
                <p className="text-white/40 text-xs text-center mt-1">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership row */}
        <div className="bg-sosia-slate/30 border border-white/10 rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-6 text-center">Leadership</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                initials: 'AW',
                name: 'Aaron Walton',
                role: 'Founder & CEO',
                detail: 'LGPD Compliant · Consent-First by Design · 20+ years brand-building in multicultural markets',
              },
              {
                initials: 'SS',
                name: 'Sosia Systems Team',
                role: 'Engineering & Data Science',
                detail: "LGPD Compliant · Consent-First by Design · Builders of Brazil's largest consented creator network",
              },
            ].map((l, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-sosia-coral/20 flex items-center justify-center text-sosia-coral font-bold flex-shrink-0">
                  {l.initials}
                </div>
                <div>
                  <p className="text-white font-semibold">{l.name}</p>
                  <p className="text-sosia-gold text-sm">{l.role}</p>
                  <p className="text-white/40 text-xs mt-1">{l.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
