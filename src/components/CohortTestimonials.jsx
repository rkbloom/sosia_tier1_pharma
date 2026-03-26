const cohorts = [
  {
    name: 'João Silva',
    handle: '@jsilva_fitness',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    category: 'Fitness',
  },
  {
    name: 'Maria Oliveira',
    handle: '@mariaskin',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face',
    category: 'Skincare',
  },
  {
    name: 'Ana Rodrigues',
    handle: '@ana.wellness',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face',
    category: 'Wellness',
  },
  {
    name: 'Gleama Santos',
    handle: '@gleama_health',
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face',
    category: 'Health',
  },
  {
    name: 'Clara Profton',
    handle: '@claraprofton',
    img: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=80&h=80&fit=crop&crop=face',
    category: 'Nutrition',
  },
  {
    name: 'Dale St.',
    handle: '@dalest_br',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&h=80&fit=crop&crop=face',
    category: 'Lifestyle',
  },
]

const testimonials = [
  {
    name: 'Ana Costa',
    handle: 'Director, Clinical Partnerships',
    quote: 'Sosia helped us grow our audience by 300% in 6 months with fully consented, community-driven health insights.',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=48&h=48&fit=crop&crop=face',
  },
  {
    name: 'Pisa Oliveira',
    handle: 'VP Strategy, Pharma Client',
    quote: 'The quality of real-world evidence we get through Sosia is unmatched — phenotype diversity we simply cannot source elsewhere.',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=48&h=48&fit=crop&crop=face',
  },
  {
    name: 'Picaro Giester',
    handle: 'Head of Market Access',
    quote: 'Sosia helped us grow our audience by 200% in 6 months — and every signal is consented, auditable, and launch-ready.',
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=48&h=48&fit=crop&crop=face',
  },
]

export default function CohortTestimonials() {
  return (
    <section className="bg-sosia-blue py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Cohort Examples */}
          <div>
            <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
              Community Network
            </p>
            <h3 className="text-3xl font-extrabold text-white mb-8">
              Cohort <span className="text-gradient-gold">Examples</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {cohorts.map((c, i) => (
                <div
                  key={i}
                  className="bg-sosia-slate/40 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-sosia-gold/30 transition-colors"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{c.name}</p>
                    <p className="text-white/40 text-xs">{c.handle}</p>
                    <span className="inline-block mt-1 text-xs bg-sosia-coral/20 text-sosia-coral px-2 py-0.5 rounded-full">
                      {c.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-sosia-gold/10 border border-sosia-gold/20 rounded-xl text-center">
              <p className="text-sosia-gold font-semibold text-sm">
                🔒 Consented · User-Controlled · Actionable 🔒
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
              Partner Voices
            </p>
            <h3 className="text-3xl font-extrabold text-white mb-8">
              <span className="text-gradient-gold">Testimonials</span>
            </h3>
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-sosia-slate/40 border border-white/10 rounded-xl p-6 hover:border-sosia-coral/30 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs">{t.handle}</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-sosia-gold text-xs">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed italic">"{t.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 text-center">
          <a
            href="#cta"
            className="inline-block bg-sosia-coral text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-lg shadow-sosia-coral/30 hover:scale-105"
          >
            Recruit Your Next Cohort with Sosia
          </a>
        </div>
      </div>
    </section>
  )
}
