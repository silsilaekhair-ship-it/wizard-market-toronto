
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Wand2, Shirt, Trophy, Scroll, FlaskConical, ShoppingBag, Heart, ShieldCheck, Star, BookOpen, Skull, Shield } from 'lucide-react';
import MagicParticles from '../components/MagicParticles';

const Home: React.FC = () => {
  const categories = [
    { title: 'Wands', icon: <Wand2 size={40} />, path: '/products?category=Wands' },
    { title: 'Gothic Decor', icon: <Skull size={40} />, path: '/products?category=Gothic%20Decor' },
    { title: 'Jewelry', icon: <Sparkles size={40} />, path: '/products?category=Jewelry' },
    { title: 'Collectibles', icon: <Star size={40} />, path: '/products?category=Collectibles' },
    { title: 'House Merch', icon: <Shield size={40} />, path: '/products?category=House%20Merch' },
  ];

  const featuredProducts = [
    { id: 1, name: "Elder Wand Replica", price: "$45.00", cat: "Wands", icon: <Wand2 size={64} /> },
    { id: 2, name: "Large Crystal Skull", price: "$65.00", cat: "Gothic Decor", icon: <Skull size={64} /> },
    { id: 3, name: "Sorting Hat Replica", price: "$59.99", cat: "Collectibles", icon: <Star size={64} /> },
    { id: 4, name: "Golden Snitch Replica", price: "$85.00", cat: "Collectibles", icon: <Star size={64} /> },
    { id: 5, name: "Deathly Hallows Necklace", price: "$32.00", cat: "Jewelry", icon: <Sparkles size={64} /> },
    { id: 6, name: "Platform 9¾ Sign", price: "$40.00", cat: "Gothic Decor", icon: <Skull size={64} /> },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-magic-gradient">
        <MagicParticles count={80} />
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
             <span className="text-[#D4AF37] text-sm md:text-base font-bold tracking-[0.4em] uppercase">@wizardmarket.to</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-cinzel font-bold text-white mb-6 drop-shadow-2xl text-shadow-gold">
            Wizard Market
          </h1>
          <p className="text-xl md:text-2xl text-[#D4AF37] font-medium mb-10 tracking-widest italic drop-shadow-lg">
            "Under the Dentist" at 346 Dundas St W
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/products" 
              className="bg-[#D4AF37] text-[#1a0808] px-10 py-5 rounded-sm font-bold uppercase tracking-widest magic-glow-hover transition-all hover:scale-105"
            >
              Explore Inventory
            </Link>
            <Link 
              to="/visit" 
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all"
            >
              Portal Hours
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
           <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Enter Diagon Alley</span>
           <ArrowRight className="rotate-90 text-[#D4AF37]" size={20} />
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 bg-dark-red-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cinzel font-bold text-[#D4AF37] mb-4">Store Collections</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto opacity-30"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat, idx) => (
              <Link 
                key={idx} 
                to={cat.path} 
                className="group relative h-64 overflow-hidden rounded-lg border border-[#D4AF37]/20 bg-[#2d0a0a] transition-all hover:border-[#D4AF37] hover:bg-[#4a0000] shadow-xl flex flex-col items-center justify-center"
              >
                <div className="text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white uppercase tracking-widest text-center">
                  {cat.title}
                </h3>
                <div className="mt-4 w-8 h-[1px] bg-[#D4AF37]/30 transition-all group-hover:w-16"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#0d0404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-cinzel font-bold text-[#D4AF37] mb-4">Actual Shop Favorites</h2>
              <p className="text-white/40 uppercase tracking-widest text-xs">Themed artifacts from our portal</p>
            </div>
            <Link to="/products" className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm flex items-center gap-2 mt-4 md:mt-0 hover:underline">
              View All Artifacts <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <div key={p.id} className="group bg-[#1a0808] border border-white/5 p-4 rounded-sm transition-all hover:border-[#D4AF37]/30">
                <div className="aspect-square mb-6 bg-[#2d0a0a] rounded flex items-center justify-center relative overflow-hidden group-hover:bg-[#4a0000] transition-colors border border-[#D4AF37]/10">
                  <div className="text-[#D4AF37] opacity-40 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110">
                    {p.icon}
                  </div>
                  <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#1a0808] px-2 py-1 text-[10px] font-bold uppercase tracking-tighter rounded shadow-lg z-10">
                    Insta-Featured
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-cinzel text-lg text-white group-hover:text-[#D4AF37] transition-colors">{p.name}</h3>
                    <span className="text-[#D4AF37] font-cinzel font-bold">{p.price}</span>
                  </div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">{p.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-dark-red-tint border-y border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-[#D4AF37]/30 rounded-lg group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="relative rounded-lg w-full h-80 bg-[#1a0808] border border-[#D4AF37]/20 flex items-center justify-center overflow-hidden">
                <Sparkles size={120} className="text-[#D4AF37] opacity-10 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/10 to-transparent"></div>
                <span className="absolute bottom-8 font-cinzel text-[#D4AF37]/50 tracking-[0.4em] uppercase text-xs">Toronto's Sanctuary</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-8 rounded-lg shadow-xl hidden md:block">
                <Sparkles size={40} className="text-[#1a0808]" />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-cinzel font-bold text-white mb-8 leading-tight">Toronto's Pride-Friendly Sanctuary</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We are a small, independent shop "Under the Dentist" at 346 Dundas St W. A portion of every purchase goes directly to <span className="text-[#D4AF37] font-bold">The 519</span>, supporting our local LGBTQ+ community.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-[#D4AF37]/20">
                  <div className="bg-[#D4AF37] p-3 rounded-full text-[#1a0808]">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#D4AF37] text-sm">Pride Friendly</h4>
                    <p className="text-xs text-white/60">Supporting The 519 Center.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-[#D4AF37]/20">
                  <div className="bg-[#D4AF37] p-3 rounded-full text-[#1a0808]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#D4AF37] text-sm">Community Focus</h4>
                    <p className="text-xs text-white/60">Supporting local Toronto magic.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center space-x-2 text-[#D4AF37] font-bold uppercase tracking-[0.2em] group"
              >
                <span>Read Our Mission</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
