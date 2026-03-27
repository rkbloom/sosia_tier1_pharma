export default function PilotDesign() {
  const phases = [
    {
      num: '01',
      title: 'Recruit',
      bullets: [
        'Enroll diverse women through creators, gyms, beauty and wellness communities',
        'Capture consent, baseline symptoms, routines and goals',
      ],
    },
    {
      num: '02',
      title: 'Activate',
      bullets: [
        'Run AI intake, tailored education, care-pathway nudges and product journeys',
        'Track adherence, journaling and visible symptom change',
      ],
    },
    {
      num: '03',
      title: 'Validate (dependent upon agency campaign cycles)',
      bullets: [
        'Report 60/90/120-day retention, symptom movement and referral completion',
        'Connect creator efficiency to real-world engagement and launch readiness',
      ],
    },
  ]

  const kpis = [
    { label: 'Consent', sub: 'Opt-in rate' },
    { label: '120d', sub: '120-day retention' },
    { label: 'Change', sub: 'Symptom index' },
    { label: 'Referral', sub: 'Referral completion' },
    { label: 'CPE', sub: 'Creator efficiency' },
  ]

  return (
    <section id="pilot-design" className="bg-sosia-blue py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
            Pilot Design
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            What a 6-month Brazil pilot{' '}
            <span className="text-sosia-gold">looks like</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            A narrow, unbranded women's obesity pilot gives Tier 1 Pharma an evidence-ready proof point over 6 months.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="bg-sosia-slate/50 border border-white/10 rounded-2xl p-7 hover:border-sosia-gold/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-sosia-coral/20 border border-sosia-coral/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-sosia-coral text-xs font-black">{phase.num}</span>
                </div>
                <h3 className="text-white font-bold text-xl">{phase.title}</h3>
              </div>
              <ul className="space-y-2">
                {phase.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-sosia-coral/60 mt-1.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* KPI strip */}
        <div className="bg-sosia-slate border border-white/10 rounded-2xl p-6 mb-8">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
            Key Performance Indicators
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {kpis.map((kpi, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-sosia-coral mb-1">{kpi.label}</div>
                <div className="text-white/50 text-xs leading-tight">{kpi.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote callout */}
        <div className="bg-gradient-to-r from-sosia-coral/20 via-sosia-coral/10 to-sosia-coral/20 border border-sosia-coral/30 rounded-2xl px-8 py-6 text-center">
          <svg className="w-6 h-6 text-sosia-coral mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="text-white font-semibold text-lg italic">
            "Behavior change is easier when the experience feels like wellness, not paperwork."
          </p>
        </div>

      </div>
    </section>
  )
}
