export default function MVPFit() {
  const steps = [
    {
      num: '01',
      title: 'Recruit',
      body: 'Creators, fitness, beauty and wellness communities',
    },
    {
      num: '02',
      title: 'AI Intake',
      body: 'Consent, phenotype, symptoms, routines, goals',
    },
    {
      num: '03',
      title: 'Support',
      body: 'Education, routines, product pathways, nudges',
    },
    {
      num: '04',
      title: 'Measure',
      body: '30/60/90-day change, adherence, referral, RWE',
    },
  ]

  const symptoms = [
    'Acanthosis nigricans',
    'Acne / PIH',
    'Hirsutism',
    'Hair thinning',
    'Hidradenitis / intertrigo',
    'Friction / sweat issues',
  ]

  return (
    <section id="mvp-fit" className="bg-sosia-navy py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
            MVP Fit
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Why obesity fits the{' '}
            <span className="text-sosia-gold">Sosia platform</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            The wedge is visible, personal, and measurable without over-claiming clinical efficacy.
          </p>
        </div>

        {/* 4-step flow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-sosia-slate/50 border border-white/10 rounded-2xl p-6 hover:border-sosia-coral/40 transition-all group"
            >
              <span className="text-sosia-coral text-xs font-bold uppercase tracking-widest mb-2 block">
                {step.num}
              </span>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{step.body}</p>
              {/* connector arrow — hidden on last item */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 5l5 5-5 5" stroke="#FF7A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visible manifestation layer */}
        <div className="bg-sosia-slate border border-sosia-coral/20 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2 h-2 rounded-full bg-sosia-coral" />
            <h3 className="text-white font-bold text-lg">Visible manifestation layer</h3>
          </div>
          <p className="text-white/55 text-sm mb-6 max-w-xl">
            This lets Sosia start with education, behavior support, and referral logic while
            tracking issues women can actually see and feel.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {symptoms.map((s, i) => (
              <div
                key={i}
                className="bg-sosia-navy border border-sosia-coral/30 rounded-xl px-4 py-3 text-center text-sm text-white/80 font-medium hover:border-sosia-coral/70 hover:text-white transition-all"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="bg-sosia-gold/10 border border-sosia-gold/30 rounded-2xl px-8 py-5 flex items-start gap-4">
          <svg className="w-5 h-5 text-sosia-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
          <p className="text-white/70 text-sm leading-relaxed">
            <span className="text-sosia-gold font-semibold">No branded treatment claim in the pilot.</span>{' '}
            The goal is consented data, tailored support, symptom tracking, and escalation when needed.
          </p>
        </div>

      </div>
    </section>
  )
}
