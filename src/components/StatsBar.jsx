const stats = [
  { value: '4.3M', label: 'Active Influencers', sub: 'in Brazil' },
  { value: '12M', label: 'Sponsored Posts/Year', sub: 'across cohorts' },
  { value: '#3', label: 'Global Beauty Market', sub: 'worldwide ranking' },
  { value: '6%', label: 'Avg. Engagement Rate', sub: '2× the US average' },
  { value: '8 in 10', label: 'Brazilians Buy', sub: 'creator-recommended products' },
  { value: '55.5%', label: 'Black/Mixed-Race', sub: 'phenotype-rich population' },
]

export default function StatsBar() {
  return (
    <section className="bg-sosia-navy border-y border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sosia-gold text-sm font-semibold uppercase tracking-widest mb-10">
          The Data Advantage
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sosia-gold/40 transition-colors"
            >
              <div className="text-3xl font-black text-sosia-gold mb-1">{s.value}</div>
              <div className="text-white text-sm font-semibold mb-0.5">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
