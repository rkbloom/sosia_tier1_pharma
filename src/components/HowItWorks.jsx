const steps = [
  {
    step: '1',
    label: 'Community Signals',
    color: 'bg-sosia-coral',
    desc: 'Creators and community members consent to share behavioral and health signals through edge-native apps.',
  },
  {
    step: '2',
    label: 'Agent Processing',
    color: 'bg-sosia-gold',
    desc: 'Agentic AI processes signals in compliant vaults, generating anonymized, actionable intelligence.',
  },
  {
    step: '3',
    label: 'Partner Insights',
    color: 'bg-sosia-green',
    desc: 'Pharma and health partners receive real-world evidence — faster, richer, LGPD and HIPAA compliant.',
  },
]

const features = [
  {
    icon: '🔬',
    title: 'Faster, More Precise Insights',
    sub: 'for trials and approvals',
  },
  {
    icon: '📊',
    title: 'Actionable Evidence Termination',
    sub: 'for market access',
  },
  {
    icon: '📡',
    title: 'Superior Signal Detection',
    sub: 'across cohort populations',
  },
  {
    icon: '🛡️',
    title: 'Robust, Privacy-Compliant Data',
    sub: 'vault-grade architecture',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-sosia-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
            How Sosia Works
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Your community already generates the signals.{' '}
            <span className="text-gradient-gold">Sosia turns them into your next system of record.</span>
          </h2>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-4 flex-col md:flex-row">
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className={`w-14 h-14 rounded-full ${s.color} flex items-center justify-center text-white font-black text-xl mb-4`}>
                  {s.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block text-white/30 text-3xl mx-4">→</div>
              )}
              {i < steps.length - 1 && (
                <div className="md:hidden text-white/30 text-3xl my-2">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-sosia-coral/40 transition-colors"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
              <p className="text-white/40 text-xs">{f.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
