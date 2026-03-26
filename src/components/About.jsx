export default function About() {
  return (
    <section id="about" className="relative bg-sosia-navy py-24 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&h=600&fit=crop"
          alt="Community gathering"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sosia-navy/80 via-sosia-navy/60 to-sosia-navy/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
            About Sosia Systems
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
            Turning communities' consented signals into{' '}
            <span className="text-gradient-gold">
              faster, richer real-world evidence
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 bg-sosia-coral/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-sosia-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-4">User-Controlled Data</h3>
            <p className="text-white/60 leading-relaxed">
              User-controlled data means individuals and communities retain full ownership and
              control over their consented health and behavioral signals. This privacy-first
              architecture turns community insights into faster, richer real-world evidence for
              partners like Pfizer and Publicis.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 bg-sosia-gold/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-sosia-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Delivering for Partners</h3>
            <p className="text-white/60 leading-relaxed">
              Compliant-by-design from day one, this powers LGPD-ready cohorts in Brazil and
              seamless scaling to US Latino and Afro-American communities — delivering visible
              metabolic outcomes and launch-ready insights for your pipeline.
            </p>
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-sosia-gold/10 border border-sosia-gold/20 rounded-2xl px-10 py-6 max-w-2xl">
            <p className="text-sosia-gold font-semibold text-lg">
              "Not just tooling — new infrastructure for how intelligence, trust, and autonomy
              are managed at scale."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
