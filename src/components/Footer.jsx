import { Link } from 'react-router-dom';
import { Send, Globe, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020C1B] w-full pt-24 pb-12 text-white">
      <div className="container swiss-grid gap-y-12">
        <div className="col-span-12 lg:col-span-4">
          <Link to="/" className="inline-block mb-8">
            <img 
              src="/rehab-factory-logo-white.webp" 
              alt="Rehab Factory" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </Link>
          <p className="text-slate-400 max-w-xs text-sm leading-tight mb-6 font-poppins">
            Built for peak performance.<br />
            Gym-based physiotherapy and rehabilitation.
          </p>
          <div className="mb-8">
            <h5 className="text-[10px] tracking-[0.2em] font-bold text-secondary mb-2">LOCATION</h5>
            <p className="text-sm text-slate-300 font-poppins">9/25-35 Cranbourne Road, Narre Warren 3805</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
              <Mail size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-2">
          <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase mb-8 text-secondary">SERVICES</h4>
          <ul className="space-y-4">
            {['Individualised Exercise Therapy', 'Manual Therapy', 'Return to Work and Sport', 'Sports Taping'].map((item) => (
              <li key={item}>
                <Link className="text-slate-400 hover:text-white transition-all text-xs uppercase tracking-wider flex items-center gap-2 group font-poppins" to="/services">
                  <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-2">
          <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase mb-8 text-secondary">RESOURCES</h4>
          <ul className="space-y-4">
            {['Insights', 'Conditions', 'About Us', 'Contact', 'Privacy Policy', 'Terms and Conditions'].map((item) => (
              <li key={item}>
                <Link className="text-slate-400 hover:text-white transition-all text-xs uppercase tracking-wider flex items-center gap-2 group font-poppins" to={`/${item.toLowerCase().replace(' ', '-')}`}>
                  <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase mb-8 text-secondary">CONTACT</h4>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-6">
            <p className="text-slate-400 text-xs tracking-widest uppercase mb-2">TALK TO OUR TEAM TODAY:</p>
            <p className="text-2xl font-display font-bold text-white uppercase tracking-tight">(03) 9704 6111</p>
          </div>
          <p className="text-slate-400 text-sm mb-6 font-poppins">Join our community for performance insights.</p>
          <div className="flex gap-0 border-b border-white/10 pb-2 focus-within:border-secondary transition-colors">
            <input 
              className="bg-transparent border-none text-white text-xs w-full outline-none py-2 font-poppins" 
              placeholder="YOUR EMAIL ADDRESS" 
              type="email"
            />
            <button className="text-white hover:text-secondary transition-colors p-2">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-slate-500 tracking-widest uppercase text-center md:text-left leading-relaxed">
          Copyright © {new Date().getFullYear()} Rehab Factory Physiotherapy PTY LTD - All Rights Reserved. <span className="hidden md:inline mx-2">|</span> <span className="block md:inline mt-2 md:mt-0">ABN 47 279 025 634</span>
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/terms-and-conditions" className="text-[10px] text-slate-500 hover:text-white transition-colors uppercase tracking-widest">TERMS</Link>
          <Link to="/privacy-policy" className="text-[10px] text-slate-500 hover:text-white transition-colors uppercase tracking-widest">PRIVACY</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

