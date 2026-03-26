export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-sosia-blue pt-20"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[800px] rounded-full bg-sosia-coral/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sosia-gold/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-sosia-coral animate-pulse" />
          <span className="text-white/80 text-sm font-medium">Tier1 Pharma Strategic Vendor Demo</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-5xl mb-6">
          Consented Intelligence from the{' '}
          <span className="text-gradient-gold">World's Strongest Communities</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Brazil's 4.3 million active influencers and 8 in 10 creator-trusted buyers power
          Tier1 Pharma-level metabolic health outcomes.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#cta"
            className="bg-sosia-coral text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 transition-all shadow-lg shadow-sosia-coral/30 hover:scale-105"
          >
            Engage as Strategic Vendor Partner
          </a>
          <a
            href="#platform"
            className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
          >
            See How It Works
          </a>
        </div>

        {/* Community photo strip */}
        <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl">
          <div className="flex gap-3 justify-center">
            {[
              // Young — smiling, earrings, natural hair
              'https://images.unsplash.com/photo-1744040866609-2b8952159e1e?w=200&h=250&fit=crop&crop=face',
              // Young Brazilian man — yellow hoodie, warm smile
              'https://images.unsplash.com/photo-1710357956769-232ef8e9e1aa?w=200&h=250&fit=crop&crop=face',
              // 30s — modern, warm smile, outdoor
              'https://images.unsplash.com/photo-1707305531814-6749e9e7da29?w=200&h=250&fit=crop&crop=face',
              // Middle-aged Brazilian man — mustachioed, warm portrait (Retrato de Vitor em Camburi das Pedras)
              'https://images.unsplash.com/photo-1694185749841-b501fc75faa9?w=200&h=250&fit=crop&crop=face',
              // 40s–50s — dreadlocks, smiling, color portrait
              'https://images.unsplash.com/photo-1645736353780-e70a7d508088?w=200&h=250&fit=crop&crop=face',
              // Elder — smiling broadly, warm and joyful
              'https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?w=200&h=250&fit=crop&crop=face',
            ].map((src, i) => (
              <div
                key={i}
                className="flex-1 min-w-0 rounded-xl overflow-hidden opacity-80 hover:opacity-100 transition-opacity"
                style={{ maxWidth: '160px' }}
              >
                <img
                  src={src}
                  alt={`Brazilian community member ${i + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
          {/* Gradient overlay on sides */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-sosia-blue to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-sosia-blue to-transparent pointer-events-none" />
        </div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <span className="flex items-center gap-1.5">
            <span className="text-sosia-gold">✦</span> LGPD &amp; HIPAA Compliant
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-sosia-gold">✦</span> User-Controlled Data
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-sosia-gold">✦</span> Creator-Led Cohorts
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-sosia-gold">✦</span> Consent-First by Design
          </span>
        </div>
      </div>
    </section>
  )
}
