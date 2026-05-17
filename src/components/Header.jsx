import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) => 
    `font-medium text-[15px] uppercase tracking-[0.2em] transition-all duration-300 relative group py-2 ${
      isActive ? 'text-secondary' : 'text-primary/80 hover:text-secondary'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white border-b border-slate-200 h-[80px] flex items-center shadow-sm">
      <nav className="container flex justify-between items-center w-full">
        <Link to="/" className="flex items-center group">
          <img 
            src="/rehab-factory-logo.webp" 
            alt="Rehab Factory" 
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'ABOUT', path: '/about' },
            { name: 'SERVICES', path: '/services' },
            { name: 'INSIGHTS', path: '/insights' },
            { name: 'ENQUIRY', path: '/contact' }
          ].map((item) => (
            <NavLink key={item.name} className={navLinkClass} to={item.path}>
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-primary text-white font-black text-[12px] tracking-[0.2em] px-8 py-3 rounded-full hover:bg-secondary hover:text-primary transition-all active:scale-95 no-underline uppercase shadow-lg"
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
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <img 
            src="/rehab-factory-logo-white.webp" 
            alt="Rehab Factory" 
            className="h-10 w-auto object-contain" 
          />
          <button 
            className="p-2 text-white hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center gap-10 p-8">
          {[
            { name: 'ABOUT', path: '/about' },
            { name: 'SERVICES', path: '/services' },
            { name: 'INSIGHTS', path: '/insights' },
            { name: 'ENQUIRY', path: '/contact' }
          ].map((item, i) => (
            <NavLink 
              key={item.name} 
              className="text-4xl font-display font-bold text-white tracking-widest hover:text-secondary transition-colors" 
              to={item.path} 
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.name}
            </NavLink>
          ))}
          
          <div className="mt-10 w-full max-w-xs">
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-secondary text-primary font-black text-center py-6 rounded-full tracking-[0.2em] text-sm shadow-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK NOW
            </a>
          </div>
        </div>

        <div className="p-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-[10px] tracking-[0.3em] font-black uppercase">
            REHAB FACTORY PHYSIOTHERAPY
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

