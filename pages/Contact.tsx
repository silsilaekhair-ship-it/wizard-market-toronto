
import React, { useState } from 'react';
import { Send, Instagram, Mail, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate owl delivery
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#0A0505]">
      <header className="py-20 bg-magic-gradient text-center px-4">
        <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#D4AF37] mb-4">Send an Owl</h1>
        <p className="text-white/60 tracking-widest uppercase text-sm">We'd love to hear from our community</p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-cinzel font-bold text-[#D4AF37] mb-12">Portal Connections</h2>
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="bg-white/5 p-4 rounded-full text-[#D4AF37] border border-[#D4AF37]/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Electronic Post</h4>
                  <p className="text-white/60">hello@wizardmarket.to</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-white/5 p-4 rounded-full text-[#D4AF37] border border-[#D4AF37]/20">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Social Echoes</h4>
                  <a href="https://instagram.com/wizardmarket.to" className="text-[#D4AF37] hover:text-white transition-colors">@wizardmarket.to</a>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-white/5 p-4 rounded-full text-[#D4AF37] border border-[#D4AF37]/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Our Sanctuary</h4>
                  <p className="text-white/60">346B Dundas St W Lower,<br />Toronto, ON M5T 1G5</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-magic-gradient border border-[#D4AF37]/20 rounded-lg relative overflow-hidden group">
               <div className="relative z-10">
                  <h4 className="font-cinzel text-xl text-[#D4AF37] mb-4">Magical Community</h4>
                  <p className="text-white/70 mb-8 leading-relaxed">Join 10,000+ local wizards on Instagram for restock alerts, giveaways, and hidden shop secrets.</p>
                  <a href="https://instagram.com/wizardmarket.to" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-[#D4AF37] text-[#1A0505] px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all">
                    <span>Follow Us</span>
                    <Sparkles size={16} />
                  </a>
               </div>
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                  <Instagram size={120} />
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 md:p-12 rounded-xl border border-white/10 shadow-2xl relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fadeIn">
                <div className="bg-[#D4AF37] p-6 rounded-full text-[#1A0505] animate-bounce">
                  <CheckCircle2 size={64} />
                </div>
                <h3 className="text-3xl font-cinzel font-bold text-[#D4AF37]">The Owl has Departed!</h3>
                <p className="text-white/60 max-w-sm">We've received your parchment and will get back to you by the next moon cycle.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] border-b-2 border-[#D4AF37] pb-1"
                >
                  Send another owl
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Witch/Wizard Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Harry Potter"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Return Address (Email)</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. harry@hogwarts.edu"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Subject of Inquiry</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-[#1A0505] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                  >
                    <option value="">Select a Category</option>
                    <option value="Product Availability">Product Availability</option>
                    <option value="Store Visit">In-Store Visit</option>
                    <option value="Collaborations">Collaborations</option>
                    <option value="Other">Other Magic</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Message (Parchment Content)</label>
                  <textarea 
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Write your magical thoughts here..."
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-white/20 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#D4AF37] text-[#1A0505] py-4 rounded-sm font-bold uppercase tracking-widest flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
                >
                  <span>Dispatch Owl</span>
                  <Send size={18} />
                </button>
                <p className="text-[10px] text-white/30 text-center uppercase tracking-[0.2em] mt-4">
                  Privacy charms are active. Your data is protected by the Ministry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
