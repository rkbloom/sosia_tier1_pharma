const gains = [
  {
    icon: '🔬',
    title: 'Faster, More Precise Insights',
    desc: "Accelerate trial timelines with pre-consented, phenotype-rich cohorts from Brazil's 4.3M influencer network.",
  },
  {
    icon: '📋',
    title: 'Actionable Evidence for Market Access',
    desc: 'Real-world evidence built from community signals supports faster regulatory submissions and HTA dossiers.',
  },
  {
    icon: '📡',
    title: 'Superior Signal Detection',
    desc: 'Community-embedded sensors capture metabolic and behavioral data at unprecedented resolution.',
  },
  {
    icon: '🛡️',
    title: 'Robust, Privacy-Compliant Data',
    desc: 'LGPD-native architecture with Digital Doppelganger Vault ensures data sovereignty and audit trails.',
  },
]

const advantages = [
  { label: 'Edge computing at point of care' },
  { label: 'Vault-grade security' },
  { label: 'Human-in-the-loop validation' },
]

const wins = [
  { label: 'Unparalleled data quality' },
  { label: 'Regulatory compliance built-in' },
  { label: 'Actionable insights' },
  { label: 'Faster time-to-insight' },
]

const commercial = [
  { label: 'Pilot programs' },
  { label: 'Licensing options' },
  { label: 'Add-on services' },
]

export default function PharmaVertical() {
  return (
    <section id="pharma" className="bg-sosia-blue py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-4">
              Pharma Vertical · Beachhead
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Pharmaceutical Companies:{' '}
              <span className="text-gradient-gold">
                Turn Your Community's Consented Signals into Faster, Richer Real-World Evidence.
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Our platform transforms consented patient data into real-world evidence, enabling
              faster, more precise insights for clinical trials, market access, and drug development.
            </p>
            <a
              href="#cta"
              className="inline-block bg-sosia-coral text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 transition-all shadow-lg shadow-sosia-coral/30"
            >
              Schedule Pharma Pilot
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-sosia-slate/60 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white/40 text-xs ml-2">Sosia Clinical Dashboard</span>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/50 text-xs mb-1">Cohort Population</p>
                  <p className="text-white font-bold text-2xl">4.3M <span className="text-sm font-normal text-white/50">active participants</span></p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/50 text-xs mb-1">Phenotype Diversity</p>
                    <p className="text-sosia-gold font-bold text-lg">55.5%</p>
                    <p className="text-white/40 text-xs">Black/mixed-race</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/50 text-xs mb-1">Signal Velocity</p>
                    <p className="text-sosia-gold font-bold text-lg">12M</p>
                    <p className="text-white/40 text-xs">posts/year</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {['Consented Data Control', 'Creator-Led Scale', 'User-Controlled Data', 'Launch-Ready Outcomes'].map((label, i) => (
                    <div key={i} className="flex items-center gap-2 bg-sosia-gold/10 border border-sosia-gold/20 rounded-lg px-4 py-2">
                      <span className="text-sosia-green">✓</span>
                      <span className="text-white/80 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Pharma Gains */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            What Pharma <span className="text-sosia-gold">Gains</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gains.map((g, i) => (
              <div
                key={i}
                className="bg-sosia-slate/40 border border-white/10 rounded-xl p-6 hover:border-sosia-coral/40 transition-colors"
              >
                <div className="text-3xl mb-3">{g.icon}</div>
                <h4 className="text-white font-semibold mb-2">{g.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-column info */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-sosia-slate/40 border border-white/10 rounded-xl p-6">
            <h4 className="text-sosia-coral font-bold mb-4">Structural Advantage for Pharma</h4>
            <ul className="space-y-2">
              {advantages.map((a, i) => (
                <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <span className="text-sosia-green">✓</span> {a.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-sosia-slate/40 border border-white/10 rounded-xl p-6">
            <h4 className="text-sosia-gold font-bold mb-4">Why It Wins for Pharma</h4>
            <ul className="space-y-2">
              {wins.map((w, i) => (
                <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <span className="text-sosia-gold">✓</span> {w.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-sosia-slate/40 border border-white/10 rounded-xl p-6">
            <h4 className="text-sosia-green font-bold mb-4">Commercial Path</h4>
            <ul className="space-y-2">
              {commercial.map((c, i) => (
                <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <span className="text-sosia-coral">✓</span> {c.label}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/50 text-xs">Flexible contracts · No lock-in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
