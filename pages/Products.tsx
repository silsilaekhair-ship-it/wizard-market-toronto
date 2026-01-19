
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, Sparkles, ChevronRight, Eye, Wand2, Skull, Sparkle, Star, Shield, BookOpen, FlaskConical, LayoutGrid } from 'lucide-react';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [filter, setFilter] = useState(initialCategory);

  useEffect(() => {
    setFilter(initialCategory);
  }, [initialCategory]);
  
  const categories = ['All', 'Wands', 'Gothic Decor', 'Jewelry', 'Collectibles', 'Potions', 'House Merch', 'Literary'];
  
  const getThemedIcon = (cat: string) => {
    switch (cat) {
      case 'Wands': return <Wand2 size={64} />;
      case 'Gothic Decor': return <Skull size={64} />;
      case 'Jewelry': return <Sparkle size={64} />;
      case 'Collectibles': return <Star size={64} />;
      case 'Potions': return <FlaskConical size={64} />;
      case 'House Merch': return <Shield size={64} />;
      case 'Literary': return <BookOpen size={64} />;
      default: return <LayoutGrid size={64} />;
    }
  };

  const products = [
    // WANDS
    { id: 1, name: "Elder Wand Replica", cat: "Wands", price: "$45.00", desc: "A faithful reproduction of the legendary wand." },
    { id: 2, name: "Harry Potter's Wand", cat: "Wands", price: "$42.00", desc: "11 inches, holly with phoenix feather core replica." },
    { id: 3, name: "Hermione's Wand", cat: "Wands", price: "$42.00", desc: "Elegant vine wood design replica." },
    { id: 4, name: "Dumbledore's Wand", cat: "Wands", price: "$45.00", desc: "The Headmaster's iconic tool of magic." },
    { id: 5, name: "Elder Wand Display Stand", cat: "Wands", price: "$25.00", desc: "Dark wood stand for your most prized wands." },

    // GOTHIC DECOR
    { id: 6, name: "Large Crystal Skull", cat: "Gothic Decor", price: "$65.00", desc: "Intricately detailed skull artifact." },
    { id: 7, name: "Platform 9¾ Sign", cat: "Gothic Decor", price: "$40.00", desc: "Metal embossed sign for your magical wall." },
    { id: 8, name: "Miniature Cauldron", cat: "Gothic Decor", price: "$22.00", desc: "Cast-iron style decorative pot." },
    { id: 9, name: "Gothic Crow Skull", cat: "Gothic Decor", price: "$35.00", desc: "A dark aesthetic piece for your collection." },

    // JEWELRY
    { id: 10, name: "Deathly Hallows Necklace", cat: "Jewelry", price: "$32.00", desc: "Spinning triangle pendant on a silver-finish chain." },
    { id: 11, name: "Emerald Serpent Ring", cat: "Jewelry", price: "$32.00", desc: "Silver ring set with a deep green gemstone." },
    { id: 12, name: "Sapphire Moon Pendant", cat: "Jewelry", price: "$28.00", desc: "Delicate lunar jewelry for any witch." },
    { id: 13, name: "Witch's Protective Amulet", cat: "Jewelry", price: "$25.00", desc: "Etched sigils for warding off muggle energy." },

    // COLLECTIBLES
    { id: 14, name: "Wizarding Chess Set", cat: "Collectibles", price: "$120.00", desc: "Full-size replica of the enchanted chess pieces." },
    { id: 15, name: "Sorting Hat Replica", cat: "Collectibles", price: "$59.99", desc: "Faux-suede hat with realistic weathered look." },
    { id: 16, name: "Golden Snitch Replica", cat: "Collectibles", price: "$85.00", desc: "Gold-plated display snitch with detachable wings." },
    { id: 17, name: "Invisibility Cloak Display", cat: "Collectibles", price: "$150.00", desc: "High-quality velvet cloak with silk lining." },
    { id: 18, name: "Ministry of Magic ID Cards", cat: "Collectibles", price: "$15.00", desc: "Customizable employee identification cards." },

    // POTIONS
    { id: 19, name: "Felix Felicis Potion", cat: "Potions", price: "$18.00", desc: "Liquid luck bottle with decorative shimmering fluid." },
    { id: 20, name: "Butterbeer Recipe Kit", cat: "Potions", price: "$15.99", desc: "All the non-magical ingredients for a perfect brew." },
    { id: 21, name: "Polyjuice Potion Kit", cat: "Potions", price: "$35.00", desc: "Glass vial set with parchment labels." },

    // HOUSE MERCH
    { id: 22, name: "Scarlet & Gold Scarf", cat: "House Merch", price: "$29.00", desc: "Tasselled knit scarf in brave colors." },
    { id: 23, name: "Emerald & Silver Scarf", cat: "House Merch", price: "$29.00", desc: "Soft knit scarf for ambitious wizards." },
    { id: 24, name: "House Tie Collection", cat: "House Merch", price: "$22.00", desc: "Available for all four noble houses." },

    // LITERARY
    { id: 25, name: "Hogwarts Spell Book Replica", cat: "Literary", price: "$55.00", desc: "Aged parchment pages with hand-drawn spells." },
    { id: 26, name: "Marauder's Map Print", cat: "Literary", price: "$35.00", desc: "Full-scale fold-out map on heavy parchment." },
  ];

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.cat === filter);

  return (
    <div className="pt-24 min-h-screen bg-dark-red-tint">
      <header className="py-24 bg-magic-gradient text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-white mb-4">Portal Inventory</h1>
          <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs md:text-sm font-bold">Artifacts from @wizardmarket.to</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-[#D4AF37]">Home</Link>
          <ChevronRight size={10} />
          <span className="text-[#D4AF37]">Products</span>
          <ChevronRight size={10} />
          <span className="text-white/80">{filter}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-64 shrink-0">
            <div className="bg-[#1a0808] border border-[#D4AF37]/20 p-8 rounded-sm sticky top-32">
              <h3 className="text-xl font-cinzel font-bold text-[#D4AF37] mb-8 flex items-center gap-2">
                <LayoutGrid size={18} /> Filters
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`w-full text-left px-4 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all ${
                      filter === cat 
                        ? 'bg-[#8B0000] text-white border border-[#D4AF37]/50 shadow-lg' 
                        : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                  Visit us "under the dentist" <br/> <span className="text-[#D4AF37] font-bold">346 Dundas St W</span>
                </p>
              </div>
            </div>
          </aside>

          <div className="flex-grow">
            <div className="bg-[#2d0a0a] border border-[#D4AF37]/30 p-6 rounded-sm mb-12 flex items-center gap-4">
              <div className="bg-[#D4AF37] p-2 rounded-full text-[#1a0808]">
                <Sparkles size={20} />
              </div>
              <p className="text-sm text-white/90">
                Explore our themed collections. All items available for <span className="text-[#D4AF37] font-bold">In-Store Purchase only</span> at our Toronto sanctuary.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((p) => (
                <div key={p.id} className="group flex flex-col h-full bg-[#1a0808] border border-white/5 p-4 rounded-sm transition-all hover:border-[#D4AF37]/30">
                  <div className="relative aspect-square mb-6 overflow-hidden rounded-sm bg-[#2d0a0a] border border-[#D4AF37]/10 flex items-center justify-center">
                    <div className="text-[#D4AF37] opacity-40 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110">
                      {getThemedIcon(p.cat)}
                    </div>
                    
                    <div className="absolute top-4 left-4 bg-[#8B0000] border border-[#D4AF37]/40 text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg z-10">
                      In Stock
                    </div>
                    <div className="absolute inset-0 bg-[#0d0404]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <button className="bg-[#D4AF37] text-[#1a0808] px-6 py-2 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                         <Eye size={14} /> View Artifact
                       </button>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-cinzel text-xl text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                        {p.name}
                      </h3>
                      <span className="text-[#D4AF37] font-cinzel text-lg font-bold">{p.price}</span>
                    </div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Type: {p.cat}</p>
                    <p className="text-white/60 text-sm leading-relaxed flex-grow">{p.desc}</p>
                    <div className="pt-4 border-t border-white/5 mt-auto">
                       <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] italic">Pick up @ 346 Dundas W</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center bg-[#1a0808] border border-white/5 rounded">
                <h3 className="text-2xl font-cinzel text-[#D4AF37]">No Artifacts Found</h3>
                <button onClick={() => setFilter('All')} className="mt-4 text-white/40 uppercase tracking-widest hover:text-[#D4AF37]">Clear Filters</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
