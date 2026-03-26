import { useState } from 'react'

const faqs = [
  {
    q: 'How is data kept under user control and compliant in Brazil?',
    a: 'Sosia Systems Inc. is LGPD-ready with over 4.3 million creators already onboarded, ensuring your data remains compliant and secure. Our Digital Doppelganger Vault architecture guarantees data sovereignty at every layer — from signal capture to partner delivery.',
  },
  {
    q: 'What makes Sosia different from traditional data providers?',
    a: 'Unlike traditional panel-based providers, Sosia operates at the edge — capturing consented signals directly within community apps and interaction surfaces. This produces richer, more accurate real-world evidence that reflects how people actually live, not just how they answer surveys.',
  },
  {
    q: 'Can the platform scale with our growing needs?',
    a: 'Absolutely. Our infrastructure supports seamless scaling to accommodate your expanding requirements, maintaining performance and security. We currently serve 4.3M participants in Brazil with direct pathways to US Latino and Afro-American markets.',
  },
  {
    q: 'What outcomes can we expect from using this service?',
    a: 'Clients typically see improved efficiency, cost savings, and enhanced data security within the first quarter of implementation. Pharma partners specifically benefit from faster trial enrollment, richer phenotypic diversity, and launch-ready real-world evidence packages.',
  },
  {
    q: 'Is there a long-term commitment required?',
    a: 'No. Our contracts are flexible with no lock-in, allowing you to scale or exit as needed. We offer pilot programs, licensing options, and add-on services that can be tailored to your organization\'s timeline and budget.',
  },
  {
    q: 'How does Sosia ensure HIPAA compliance for US-market operations?',
    a: 'Sosia is HIPAA-ready by architecture. Our consent-first design and Digital Doppelganger Vault ensure PHI is never exposed in cohort discovery or signal transfer. All data access is purpose-bound, policy-driven, and fully auditable.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium group-hover:text-sosia-gold transition-colors pr-4">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all ${
            open ? 'bg-sosia-coral border-sosia-coral rotate-45 text-white' : ''
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-white/60 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-sosia-slate/30 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sosia-coral text-sm font-semibold uppercase tracking-widest mb-3">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">FAQ</h2>
        </div>

        <div className="mb-12">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/10">
          {[
            { icon: '✓', label: 'Updated Trust' },
            { icon: '✓', label: 'Trust Compilation Grulge' },
            { icon: '✓', label: 'Regulated by Calling Contagline' },
            { icon: '✓', label: 'Sosia Systems Inc.' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-white/40 text-xs">
              <span className="w-5 h-5 rounded-full bg-sosia-green/20 flex items-center justify-center text-sosia-green text-xs">
                {b.icon}
              </span>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
