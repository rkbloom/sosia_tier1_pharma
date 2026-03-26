export default function Footer() {
  return (
    <footer className="bg-sosia-navy border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M14 14 C14 14 18 10 20 14 C22 18 26 14 26 14 C26 14 22 18 20 22 C18 26 14 22 14 22 C14 22 10 18 14 14Z" fill="#FF7A5A"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-lg">Sosia Systems Inc.</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Consented Intelligence from the World's Strongest Communities. Built for pharma,
              powered by Brazil.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Platform</p>
              <ul className="space-y-2">
                <li><a href="#platform" className="text-white/40 hover:text-white text-sm transition-colors">How It Works</a></li>
                <li><a href="#platform" className="text-white/40 hover:text-white text-sm transition-colors">Structural Advantage</a></li>
                <li><a href="#pharma" className="text-white/40 hover:text-white text-sm transition-colors">Pharma Vertical</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Company</p>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white/40 hover:text-white text-sm transition-colors">About</a></li>
                <li><a href="#faq" className="text-white/40 hover:text-white text-sm transition-colors">FAQ</a></li>
                <li><a href="#cta" className="text-white/40 hover:text-white text-sm transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Compliance</p>
              <ul className="space-y-2">
                <li><span className="text-white/40 text-sm">LGPD Compliant</span></li>
                <li><span className="text-white/40 text-sm">HIPAA Ready</span></li>
                <li><span className="text-white/40 text-sm">Consent-First</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© 2025 Sosia Systems Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Data Processing Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
