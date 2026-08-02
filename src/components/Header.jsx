import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinkClass = ({ isActive }) => 
    `font-medium text-[15px] uppercase tracking-[0.25em] transition-all duration-300 relative group py-2 ${
      isActive ? 'text-secondary' : 'text-primary/80 hover:text-secondary'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white border-b border-slate-200 h-[80px] flex items-center shadow-sm">
      <nav className="container flex justify-between items-center w-full">
        <Link to="/" className="flex items-center group">
          <img 
            src="/RFP-dark-logo-horizontal.svg" 
            alt="Rehab Factory" 
            className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <NavLink className={navLinkClass} to="/about">
            ABOUT
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          
          <div className="relative group/dropdown py-2">
            <NavLink className={navLinkClass} to="/services">
              SERVICES
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover/dropdown:w-full"></span>
            </NavLink>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-slate-200 shadow-xl rounded-[20px] opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 overflow-hidden flex flex-col py-2 z-50">
              <Link to="/services/individualised-exercise-therapy" className="px-6 py-3 hover:bg-slate-50 hover:text-secondary text-primary font-display font-normal uppercase tracking-widest text-base transition-colors text-left">
                Individualised Exercise Therapy
              </Link>
              <Link to="/services/manual-therapy" className="px-6 py-3 hover:bg-slate-50 hover:text-secondary text-primary font-display font-normal uppercase tracking-widest text-base transition-colors text-left border-t border-slate-100">
                Manual Therapy
              </Link>
              <Link to="/services/return-to-work-and-sport" className="px-6 py-3 hover:bg-slate-50 hover:text-secondary text-primary font-display font-normal uppercase tracking-widest text-base transition-colors text-left border-t border-slate-100">
                Return to Work and Sport
              </Link>
              <Link to="/services/sports-taping" className="px-6 py-3 hover:bg-slate-50 hover:text-secondary text-primary font-display font-normal uppercase tracking-widest text-base transition-colors text-left border-t border-slate-100">
                Sports Taping
              </Link>
            </div>
          </div>

          <NavLink className={navLinkClass} to="/conditions">
            CONDITIONS
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink className={navLinkClass} to="/insights">
            INSIGHTS
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink className={navLinkClass} to="/contact">
            ENQUIRY
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-primary text-white font-normal text-base tracking-[0.18em] px-8 py-3 rounded-full hover:bg-secondary hover:text-primary transition-all active:scale-95 no-underline uppercase shadow-lg"
          >
            BOOK NOW
          </a>
          <button 
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-primary z-[200] flex flex-col transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
          <img 
            src="/RFP-white-logo-horizontal.svg" 
            alt="Rehab Factory" 
            className="h-12 w-auto object-contain" 
          />
          <button 
            className="p-2 text-white hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center gap-8 p-8 overflow-y-auto">
          <NavLink className="text-4xl font-display font-bold text-white tracking-[0.25em] hover:text-secondary transition-colors" to="/about" onClick={() => setIsMenuOpen(false)}>
            ABOUT
          </NavLink>
          
          <div className="flex flex-col items-center text-center w-full shrink-0">
            <button 
              className="text-4xl font-display font-bold text-white tracking-[0.25em] hover:text-secondary transition-colors flex items-center justify-center gap-3 w-full" 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              SERVICES
              <svg className={`w-8 h-8 text-secondary transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {/* Submenu */}
            <div className={`flex flex-col items-center gap-6 overflow-hidden transition-all duration-300 w-full ${isServicesOpen ? 'max-h-[500px] opacity-100 mt-6 mb-2' : 'max-h-0 opacity-0 m-0'}`}>
              <NavLink className="text-sm font-display font-bold text-secondary tracking-[0.2em] hover:text-white transition-colors" to="/services" onClick={() => setIsMenuOpen(false)}>
                ALL SERVICES OVERVIEW
              </NavLink>
              <NavLink className="text-sm font-display font-bold text-white/70 tracking-[0.2em] hover:text-white transition-colors" to="/services/individualised-exercise-therapy" onClick={() => setIsMenuOpen(false)}>
                EXERCISE THERAPY
              </NavLink>
              <NavLink className="text-sm font-display font-bold text-white/70 tracking-[0.2em] hover:text-white transition-colors" to="/services/manual-therapy" onClick={() => setIsMenuOpen(false)}>
                MANUAL THERAPY
              </NavLink>
              <NavLink className="text-sm font-display font-bold text-white/70 tracking-[0.2em] hover:text-white transition-colors" to="/services/return-to-work-and-sport" onClick={() => setIsMenuOpen(false)}>
                RETURN TO WORK & SPORT
              </NavLink>
              <NavLink className="text-sm font-display font-bold text-white/70 tracking-[0.2em] hover:text-white transition-colors" to="/services/sports-taping" onClick={() => setIsMenuOpen(false)}>
                SPORTS TAPING
              </NavLink>
            </div>
          </div>

          <NavLink className="text-4xl font-display font-bold text-white tracking-[0.25em] hover:text-secondary transition-colors shrink-0" to="/conditions" onClick={() => setIsMenuOpen(false)}>
            CONDITIONS
          </NavLink>
          
          <NavLink className="text-4xl font-display font-bold text-white tracking-[0.25em] hover:text-secondary transition-colors shrink-0" to="/insights" onClick={() => setIsMenuOpen(false)}>
            INSIGHTS
          </NavLink>
          <NavLink className="text-4xl font-display font-bold text-white tracking-[0.25em] hover:text-secondary transition-colors shrink-0" to="/contact" onClick={() => setIsMenuOpen(false)}>
            ENQUIRY
          </NavLink>
          
          <div className="mt-8 w-full max-w-xs shrink-0">
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-secondary text-white font-black text-center py-6 rounded-full tracking-[0.25em] text-sm shadow-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK NOW
            </a>
          </div>
        </div>

        <div className="p-8 border-t border-white/10 text-center shrink-0">
          <p className="text-white/40 text-[10px] tracking-[0.3em] font-black uppercase">
            REHAB FACTORY PHYSIOTHERAPY
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

