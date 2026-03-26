export default function VendorDashboard() {
  return (
    <section className="bg-sosia-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
            Infrastructure Partnerships —{' '}
            <span className="text-gradient-gold">Your Strategic Vendor for Health Equity and Performance</span>
          </h2>
        </div>

        {/* Quote + Platform */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Quote */}
          <div className="bg-sosia-slate/40 border border-white/10 rounded-2xl p-10">
            <div className="text-sosia-gold text-5xl font-black mb-6 leading-none">"</div>
            <blockquote className="text-white text-xl font-medium leading-relaxed mb-6">
              Building brand & consumer loyalty from targeted consent and community owned health data — Sosia is that vision in AI
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sosia-gold/20 flex items-center justify-center text-sosia-gold font-bold">
                AR
              </div>
              <div>
                <p className="text-white font-semibold">Arian Roman</p>
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
              { icon: '🏢', label: 'GWS / Agency', sub: 'Media & brand intelligence' },
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
          <h3 className="text-white font-bold text-2xl mb-2 text-center">Meet the Visionaries Behind Our Mission</h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {[
              {
                initials: 'AR',
                name: 'Arian Roman',
                role: 'Founder & CEO',
                bio: 'MIT-trained entrepreneur and award-winning innovator, Arian Roman leads the creation of next-generation health and wellness platforms. As founder of Pistil, Alysida Health, and Pivital Holdings, he merges science, design, and community impact to build technologies that empower women\'s health and underserved populations. His mission: make advanced, AI-driven health innovation accessible and meaningful for all.',
              },
              {
                initials: 'TL',
                name: 'Tracy Lauren',
                role: 'Head of Engineering',
                bio: 'A former Amazon Software Development Manager with 20 years in tech leadership, Tracy Lauren builds the AI-driven platforms behind the future of health. She\'s led large engineering teams, architected enterprise-scale systems, and pioneered secure, scalable data infrastructures. Her work turns complex technology into real-world health breakthroughs.',
              },
            ].map((l, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-full bg-sosia-coral/20 flex items-center justify-center text-sosia-coral font-bold text-lg flex-shrink-0">
                  {l.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{l.name}</p>
                  <p className="text-sosia-gold text-sm mb-2">{l.role}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
