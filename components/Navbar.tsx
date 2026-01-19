
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Visit', path: '/visit' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1A0505]/95 backdrop-blur-sm py-3 border-b border-[#D4AF37]/30' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="text-[#D4AF37] group-hover:rotate-12 transition-transform" size={28} />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-cinzel font-bold text-[#D4AF37] tracking-wider leading-none">WIZARD MARKET</span>
              <span className="text-[10px] text-[#D4AF37]/70 uppercase tracking-[0.2em]">Toronto's Magic Shop</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs lg:text-sm font-medium tracking-widest uppercase hover:text-[#D4AF37] transition-colors ${location.pathname === link.path ? 'text-[#D4AF37]' : 'text-white/80'}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://instagram.com/wizardmarket.to" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#D4AF37] transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-[#1A0505] border-b border-[#D4AF37]/30 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 text-base font-cinzel font-medium tracking-widest uppercase border-b border-white/5 ${location.pathname === link.path ? 'text-[#D4AF37]' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex justify-center">
             <a href="https://instagram.com/wizardmarket.to" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] flex items-center gap-2">
              <Instagram size={20} />
              <span className="text-sm font-bold">@wizardmarket.to</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
