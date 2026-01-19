
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a0808] border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <Sparkles className="text-[#D4AF37]" size={24} />
              <span className="text-xl font-cinzel font-bold text-[#D4AF37] tracking-wider">WIZARD MARKET</span>
            </Link>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Your local portal to the magical world. Straight outta Diagon Alley, nestled in the heart of Toronto "under the dentist".
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/wizardmarket.to" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1a0808] transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cinzel text-lg text-[#D4AF37] mb-6">Quick Portal</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/60 hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-[#D4AF37] transition-colors">Our Story</Link></li>
              <li><Link to="/products" className="text-white/60 hover:text-[#D4AF37] transition-colors">Magical Goods</Link></li>
              <li><Link to="/visit" className="text-white/60 hover:text-[#D4AF37] transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-lg text-[#D4AF37] mb-6">Send an Owl</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/60">
                <MapPin size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                <span>346 Dundas St W (Below Street),<br />Toronto, ON M5T 1G5</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span>+1 416-519-5477</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Instagram size={18} className="text-[#D4AF37] shrink-0" />
                <span>@wizardmarket.to</span>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="flex flex-col items-center md:items-start">
             <h4 className="font-cinzel text-lg text-[#D4AF37] mb-6">Identity & Impact</h4>
             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="px-3 py-1 border border-[#D4AF37]/30 rounded-full text-[10px] uppercase tracking-widest text-[#D4AF37]">
                  LGBTQ+ Friendly 🏳️‍🌈
                </div>
                <div className="px-3 py-1 border border-[#D4AF37]/30 rounded-full text-[10px] uppercase tracking-widest text-[#D4AF37]">
                  Supporting The 519 🇨🇦
                </div>
             </div>
             <p className="text-[10px] text-white/40 mt-6 text-center md:text-left">
               We donate regularly to local community centers in Toronto. Magic is for everyone.
             </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Wizard Market. Toronto, Ontario.</p>
          <div className="flex items-center gap-2">
            <span>Follow @wizardmarket.to</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
