const pillars = [
  {
    number: '01',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'Edge-First Decision Capture',
    description:
      'Sosia captures context at the point of origin — on devices, in apps, and at interaction surfaces — rather than only inside centralized enterprise workflows.',
    tag: 'Cohort Discovery without PHI Exposure',
  },
  {
    number: '02',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Digital Doppelganger Vault Architecture',
    description:
      'Your community members retain control over their consented signals. Access is purpose-bound, policy-driven, and auditable. Signals can be shared without relinquishing ownership.',
    tag: 'Engagement & Education Optimization',
  },
  {
    number: '03',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Agentic Human-in-the-Loop',
    description:
      'Human judgment is a first-class signal. Each human-validated decision becomes a high-value precedent in the richer context graph, ensuring clinical-grade accuracy.',
    tag: 'Real-World Insight Generation',
  },
]

export default function StructuralAdvantage() {
  return (
    <section id="platform" className="bg-sosia-blue py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
            Structural Advantage
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Sosia Systems Inc:{' '}
            <span className="text-gradient-gold">Three Pillars of Decision Advantage</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            This is not just tooling — it's new infrastructure for how intelligence, trust, and
            autonomy are managed at scale.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="relative bg-sosia-slate/50 border border-white/10 rounded-2xl p-8 hover:border-sosia-gold/40 transition-all group"
            >
              <div className="absolute top-6 right-6 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none">
                {p.number}
              </div>
              <div className="text-sosia-coral mb-4">{p.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{p.description}</p>
              <span className="inline-block bg-sosia-gold/10 border border-sosia-gold/30 text-sosia-gold text-xs px-3 py-1 rounded-full">
                {p.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="bg-gradient-to-r from-sosia-gold/20 via-sosia-gold/10 to-sosia-gold/20 border border-sosia-gold/30 rounded-2xl p-8 text-center">
          <p className="text-2xl font-bold text-white">
            Agentic AI orchestration,{' '}
            <span className="text-sosia-gold">not static dashboards</span>
          </p>
          <p className="text-white/60 mt-2">
            Faster time-to-insight · Regulatory compliance built-in · Actionable at every stage
          </p>
        </div>
      </div>
    </section>
  )
}
