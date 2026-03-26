/* ─────────────────────────────────────────────
   HowItWorks — clean pipeline infographic
   Matches mockup: Community → Sosia Agent → Insights
───────────────────────────────────────────── */

const steps = [
  {
    id: 'community',
    color: '#FF7A5A',
    bg: 'rgba(255,122,90,0.12)',
    border: 'rgba(255,122,90,0.35)',
    label: 'Community Cohorts',
    sublabel: 'Community Corale',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="6" stroke="#FF7A5A" strokeWidth="1.8" />
        <circle cx="32" cy="16" r="6" stroke="#FF7A5A" strokeWidth="1.8" />
        <circle cx="24" cy="30" r="6" stroke="#FF7A5A" strokeWidth="1.8" />
        <path d="M21 21l-3 4M27 21l3 4M22 16h4" stroke="#FF7A5A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    desc: '4.3M consented creators share behavioral & health signals through edge-native apps.',
  },
  {
    id: 'agent',
    color: '#DAA520',
    bg: 'rgba(218,165,32,0.12)',
    border: 'rgba(218,165,32,0.35)',
    label: 'Sosia Agent',
    sublabel: 'Agent Tea · #0F172A',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <rect x="8" y="14" width="32" height="22" rx="5" stroke="#DAA520" strokeWidth="1.8" />
        <circle cx="24" cy="25" r="5" stroke="#DAA520" strokeWidth="1.8" />
        <path d="M24 8v6M16 10l2 4M32 10l-2 4" stroke="#DAA520" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 25h2M29 25h2" stroke="#DAA520" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    desc: 'Agentic AI processes signals in compliant vaults — anonymized, auditable, actionable.',
  },
  {
    id: 'insights',
    color: '#14BBA6',
    bg: 'rgba(20,187,166,0.12)',
    border: 'rgba(20,187,166,0.35)',
    label: 'Partner Insights',
    sublabel: 'Sovereign Navy',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <path d="M8 36l10-12 8 6 8-14 6 8" stroke="#14BBA6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="6" y="8" width="36" height="30" rx="4" stroke="#14BBA6" strokeWidth="1.8" />
        <circle cx="36" cy="14" r="4" fill="rgba(20,187,166,0.2)" stroke="#14BBA6" strokeWidth="1.5" />
        <path d="M35 14l1 1 2-2" stroke="#14BBA6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    desc: 'Pharma partners receive real-world evidence — faster, richer, LGPD & HIPAA compliant.',
  },
]

const cards = [
  {
    color: '#FF7A5A',
    num: '01',
    title: 'Edge-First Decision Capture',
    body: 'Sosia captures context at the point of origin — on devices, in apps, and at interaction surfaces — rather than only inside centralized enterprise workflows.',
    bullets: [],
  },
  {
    color: '#DAA520',
    num: '02',
    title: 'Digital Doppelganger Vault Architecture',
    body: 'Your community members retain full control over their consented signals.',
    bullets: [
      'Access is purpose-bound, policy-driven, and auditable.',
      'Signals can be shared without relinquishing ownership.',
    ],
  },
  {
    color: '#14BBA6',
    num: '03',
    title: 'Agentic Human-in-the-Loop',
    body: 'Human judgment is a first-class signal. Each human-validated decision becomes a high-value precedent in the richer context graph.',
    bullets: [],
  },
]

/* Animated connector between pipeline nodes */
function Connector({ color }) {
  return (
    <div className="hidden md:flex items-center flex-1 px-2 min-w-0">
      <div className="relative w-full h-px">
        {/* Static base line */}
        <div className="absolute inset-0 rounded-full" style={{ background: `${color}30` }} />
        {/* Animated traveling glow */}
        <div
          className="absolute top-0 h-px rounded-full animate-flow"
          style={{
            width: '40%',
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
        />
        {/* Arrowhead */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            borderLeft: `7px solid ${color}60`,
          }}
        />
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0F172A] py-24 overflow-hidden">

      <style>{`
        @keyframes flow {
          0%   { left: -40%; }
          100% { left: 110%; }
        }
        .animate-flow {
          animation: flow 2.4s linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sosia-coral text-xs font-semibold uppercase tracking-widest mb-3">
            How Sosia Works
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Your community already generates the signals.{' '}
            <span className="text-sosia-gold">Sosia turns them into your next system of record.</span>
          </h2>
        </div>

        {/* ── Pipeline flow diagram ── */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 mb-6 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.id} className="flex flex-col md:flex-row items-center flex-1 min-w-0">

              {/* Node card */}
              <div
                className="flex flex-col items-center text-center p-6 rounded-2xl w-full md:w-48 flex-shrink-0 transition-transform hover:-translate-y-1"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: `${s.color}18`, border: `1.5px solid ${s.border}` }}
                >
                  {s.icon}
                </div>
                <p className="text-white font-bold text-sm leading-snug mb-3">{s.label}</p>
                <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
              </div>

              {/* Connector (not after last node) */}
              {i < steps.length - 1 && (
                <>
                  {/* Mobile: vertical connector */}
                  <div className="flex md:hidden flex-col items-center py-3">
                    <div className="w-px h-8 relative overflow-hidden" style={{ background: `${steps[i + 1].color}30` }}>
                      <div
                        className="absolute w-px animate-flow"
                        style={{
                          height: '40%',
                          background: `linear-gradient(180deg, transparent, ${steps[i + 1].color}, transparent)`,
                        }}
                      />
                    </div>
                    <div
                      className="w-0 h-0"
                      style={{
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: `7px solid ${steps[i + 1].color}60`,
                      }}
                    />
                  </div>
                  {/* Desktop: horizontal connector */}
                  <Connector color={steps[i + 1].color} />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Color-coded legend */}
        <div className="flex justify-center gap-6 mb-16">
          {steps.map(s => (
            <div key={s.id} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: s.color }} />
              <span className="text-white/40 text-xs">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Three feature cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 transition-colors hover:border-white/20"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="text-xs font-black mb-4 tracking-widest"
                style={{ color: c.color }}
              >
                {c.num}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{c.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{c.body}</p>
              {c.bullets.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {c.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/50 text-sm">
                      <span className="mt-0.5 shrink-0" style={{ color: c.color }}>•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom banner ── */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,122,90,0.08), rgba(218,165,32,0.08), rgba(20,187,166,0.08))',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p className="text-white text-xl md:text-2xl font-bold">
            Agentic AI orchestration,{' '}
            <span className="text-sosia-gold">not static dashboards.</span>
          </p>
        </div>

      </div>
    </section>
  )
}
