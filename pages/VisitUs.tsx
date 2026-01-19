
import React from 'react';
import { MapPin, Bus, Car, Clock, Phone, Navigation, Sparkles, Wand2, Star } from 'lucide-react';

const VisitUs: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark-red-tint">
      <header className="py-24 bg-magic-gradient text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-white mb-4">Find the Portal</h1>
          <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs md:text-sm font-bold">346 Dundas St W (Under the Dentist), Toronto</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info Column */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-cinzel font-bold text-[#D4AF37] mb-8 flex items-center gap-2">
                <Clock className="text-[#D4AF37]" size={24} />
                Portal Hours
              </h2>
              <div className="space-y-4 bg-[#1a0808] p-8 rounded-sm border border-[#D4AF37]/20 shadow-xl">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-white/70">Regular Wed - Sat</span>
                  <span className="text-[#D4AF37] font-bold">11:00 - 7:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 py-4">
                  <span className="text-white/70">Regular Sun - Tue</span>
                  <span className="text-[#D4AF37] font-bold">12:00 - 6:00 PM</span>
                </div>
                <div className="pt-6">
                  <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-4">Special Holiday Hours</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Dec 31 (New Year's Eve)</span>
                      <span className="text-white font-bold">10 AM - 5 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Jan 1 (New Year's Day)</span>
                      <span className="text-white font-bold">12 PM - 8 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-cinzel font-bold text-[#D4AF37] mb-8 flex items-center gap-2">
                <Navigation className="text-[#D4AF37]" size={24} />
                Getting Here
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Bus className="text-[#D4AF37] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Public Transit</h4>
                    <p className="text-white/60 text-sm">Right next to the Art Gallery of Ontario (AGO). Take the 505 Streetcar to St. Patrick Station and walk west.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#D4AF37] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Entrance Note</h4>
                    <p className="text-[#D4AF37] text-sm font-bold">Look for the staircase "Under the Dentist" at 346 Dundas St W. That's our hidden entrance!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#8B0000] p-8 rounded-sm text-white shadow-2xl border border-[#D4AF37]/30">
              <h4 className="font-cinzel font-bold text-lg mb-4">Muggle Hotline</h4>
              <p className="text-sm mb-6 font-medium opacity-80">Getting lost? Give us a call or DM us @wizardmarket.to</p>
              <div className="space-y-3">
                <a href="tel:+14165195477" className="flex items-center space-x-3 font-bold text-xl border-b border-white/20 pb-2 hover:text-[#D4AF37] transition-colors">
                  <Phone size={20} />
                  <span>416-519-5477</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2 space-y-12">
            <div className="rounded-sm overflow-hidden h-[500px] border border-[#D4AF37]/30 shadow-2xl relative bg-[#0d0404]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6806085532565!2d-79.3955675!3d43.6547844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c89869695d%3A0x8e83f3e1f13b194d!2s346%20Dundas%20St%20W%2C%20Toronto%2C%20ON%20M5T%201G5!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="grayscale-[30%] contrast-[1.1] invert-[0.1] opacity-70"
              />
              <div className="absolute top-6 right-6 bg-[#1a0808]/90 backdrop-blur-md p-4 rounded-sm border border-[#D4AF37]/30 shadow-lg hidden md:block">
                 <div className="flex items-center gap-3">
                    <div className="bg-[#D4AF37] p-2 rounded-full">
                      <Sparkles size={16} className="text-[#1a0808]" />
                    </div>
                    <span className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Secret Entrance Below St</span>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="relative aspect-video rounded-sm overflow-hidden border border-[#D4AF37]/20 group bg-[#1a0808] flex items-center justify-center">
                  <Wand2 size={48} className="text-[#D4AF37] opacity-10 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="font-cinzel text-[#D4AF37] font-bold uppercase tracking-widest">Wand Shop Interior</span>
                  </div>
               </div>
               <div className="relative aspect-video rounded-sm overflow-hidden border border-[#D4AF37]/20 group bg-[#1a0808] flex items-center justify-center">
                  <Star size={48} className="text-[#D4AF37] opacity-10 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="font-cinzel text-[#D4AF37] font-bold uppercase tracking-widest">Store Atmosphere</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitUs;
