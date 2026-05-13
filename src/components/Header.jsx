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
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white border-b border-slate-200 h-[100px] flex items-center shadow-sm">
      <nav className="container flex justify-between items-center w-full">
        <Link to="/" className="flex items-center group">
          <img 
            src="/rehab-factory-logo.webp" 
            alt="Rehab Factory" 
            className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
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
            className="hidden sm:block bg-primary text-white font-black text-[13px] tracking-[0.2em] px-14 py-6 rounded-[25px] hover:bg-secondary hover:text-primary transition-all active:scale-95 no-underline uppercase shadow-xl"
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
      {isMenuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white border-b border-slate-200 p-8 flex flex-col gap-6 md:hidden animate-fadeUp shadow-xl">
          <NavLink className="font-medium text-sm tracking-widest text-primary" to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</NavLink>
          <NavLink className="font-medium text-sm tracking-widest text-primary" to="/services" onClick={() => setIsMenuOpen(false)}>SERVICES</NavLink>
          <NavLink className="font-medium text-sm tracking-widest text-primary" to="/insights" onClick={() => setIsMenuOpen(false)}>INSIGHTS</NavLink>
          <NavLink className="font-medium text-sm tracking-widest text-primary" to="/contact" onClick={() => setIsMenuOpen(false)}>ENQUIRY</NavLink>
          <a 
            href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-black text-center py-6 rounded-[25px] tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            BOOK NOW
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

