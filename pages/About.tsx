
import React from 'react';
import { Sparkles, Heart, Globe, User, BookOpen, Star } from 'lucide-react';
import MagicParticles from '../components/MagicParticles';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark-red-tint">
      <section className="relative py-24 px-4 text-center bg-magic-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <MagicParticles count={40} />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-white mb-6">Our Magic Story</h1>
          <p className="text-lg text-[#D4AF37] max-w-2xl mx-auto uppercase tracking-[0.3em] font-bold">@wizardmarket.to • Toronto Community</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-cinzel font-bold text-[#D4AF37] leading-tight">Magic for Everyone</h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Founded in Toronto, Wizard Market is a small, independent shop that believes magic is for everyone. We started with a few wands and a lot of passion, and have grown into a community hub for fans of the fantastical.
              </p>
              <p>
                Our shop at 346 Dundas St W is a "safe space" for all witches, wizards, and magical creatures. We are <span className="text-[#D4AF37] font-bold">Pride-Friendly</span> and committed to supporting our local community.
              </p>
              <p className="bg-[#8B0000]/20 border-l-4 border-[#D4AF37] p-6 italic">
                "We believe in giving back to the magic that surrounds us. A portion of our proceeds is regularly donated to <span className="text-white font-bold underline">The 519 Community Center</span> to support our LGBTQ+ neighbors in Toronto."
              </p>
              <p>
                Whether you're looking for a handcrafted wand, a crystal skull for your desk, or just a bit of wonder, we welcome you with open arms (and maybe a bit of house pride).
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-sm shadow-2xl z-10 magic-glow border border-[#D4AF37]/30 overflow-hidden bg-[#1a0808] flex items-center justify-center">
               <Star size={120} className="text-[#D4AF37] opacity-10 animate-pulse" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808] via-transparent to-transparent flex flex-col justify-end p-8">
                 <span className="font-cinzel text-xl text-[#D4AF37] tracking-widest uppercase font-bold drop-shadow-lg">Toronto's Local Portal</span>
                 <span className="text-white/60 text-xs mt-2">Visit us at 346 Dundas W</span>
               </div>
            </div>
            <div className="absolute -inset-10 bg-[#8B0000]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0d0404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-cinzel font-bold text-[#D4AF37] mb-16">Community Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="text-[#D4AF37]" size={40} />,
                title: "Inclusivity First",
                desc: "We are a safe, pride-friendly space. We proudly support The 519 and local LGBTQ+ initiatives."
              },
              {
                icon: <Globe className="text-[#D4AF37]" size={40} />,
                title: "Locally Sourced",
                desc: "Many of our wands and jewelry pieces are handcrafted right here in Toronto by local artisans."
              },
              {
                icon: <Sparkles className="text-[#D4AF37]" size={40} />,
                title: "Community Driven",
                desc: "Join us for local events and pop-ups. We're more than a shop, we're a portal for fans."
              }
            ].map((v, i) => (
              <div key={i} className="p-8 rounded-sm bg-[#1a0808] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">{v.icon}</div>
                <h4 className="text-xl font-cinzel font-bold text-white mb-4 tracking-widest uppercase">{v.title}</h4>
                <p className="text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
