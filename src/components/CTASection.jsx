export default function CTASection() {
  return (
    <section id="cta" className="bg-sosia-blue py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main CTA block */}
        <div className="bg-gradient-to-br from-sosia-slate to-sosia-navy border border-sosia-gold/20 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-sosia-coral/10 blur-[80px] pointer-events-none" />

          <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-4">
            Ready to Transform Your Pharma Insights?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Start with a{' '}
            <span className="text-gradient-gold">Pilot Today</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Join Tier1 Pharma and leading pharmaceutical companies leveraging Brazil's most
            powerful consented creator community for real-world evidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:partnerships@sosiasystems.com"
              className="bg-sosia-coral text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-lg shadow-sosia-coral/30 hover:scale-105"
            >
              Book a 30-Minute Strategy Call
            </a>
            <a
              href="mailto:partnerships@sosiasystems.com"
              className="border-2 border-sosia-gold text-sosia-gold px-10 py-4 rounded-full font-bold text-lg hover:bg-sosia-gold/10 transition-all"
            >
              Initiate Long-Term Vendor Contract Discussion
            </a>
          </div>

          <p className="text-white/30 text-sm">
            No lock-in contracts · LGPD &amp; HIPAA compliant · Pilot-to-scale pathway
          </p>
        </div>

        {/* Secondary trust row */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: '🔒',
              title: 'Consent-First Architecture',
              desc: 'Every signal is user-consented, purpose-bound, and auditable.',
            },
            {
              icon: '🚀',
              title: 'Pilot-to-Scale Ready',
              desc: 'From proof-of-concept to enterprise deployment in weeks, not years.',
            },
            {
              icon: '📋',
              title: 'Compliance Built-In',
              desc: 'LGPD-native in Brazil, HIPAA-ready for US market expansion.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-sosia-slate/30 border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
