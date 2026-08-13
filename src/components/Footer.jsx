import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Globe, Mail, Phone, ArrowRight, CheckCircle, Loader } from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Could not connect. Please try again.');
    }
  };
  return (
    <footer className="bg-black w-full pt-24 pb-12 text-white border-t border-white/10">
      <div className="w-full px-6 md:px-12 lg:px-20 2xl:px-32 swiss-grid gap-y-12">
        <div className="col-span-12 lg:col-span-4">
          <Link to="/" className="inline-block mb-8">
            <img 
              src="/RFP-white-logo-horizontal.svg" 
              alt="Rehab Factory" 
              className="h-20 md:h-24 w-auto object-contain" 
            />
          </Link>
          <p className="text-slate-400 max-w-sm text-base md:text-lg leading-relaxed mb-8 font-poppins">
            Restore, Reload, Return.<br />
            Gym-based physiotherapy and rehabilitation.
          </p>
          <div className="mb-8">
            <h5 className="text-[12px] md:text-[15px] tracking-[0.25em] font-bold text-secondary mb-2">LOCATION</h5>
            <p className="text-sm text-slate-300 font-poppins">
              <a href="https://maps.google.com/?q=9/25-35+Narre+Warren+-+Cranbourne+Road" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                9/25-35 Cranbourne Road, Narre Warren 3805
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/people/Rehab-Factory-Physiotherapy/61583085661831/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
              <FacebookIcon size={18} />
            </a>
            <a href="https://www.instagram.com/rehab.factory/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
              <InstagramIcon size={18} />
            </a>
            <a href="mailto:admin@rehabfactory.com.au" aria-label="Email" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
              <Mail size={18} />
            </a>
            <a href="tel:0428046819" aria-label="Phone" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-2">
          <h4 className="font-bold text-[12px] md:text-[15px] tracking-[0.25em] uppercase mb-8 text-secondary">SERVICES</h4>
          <ul className="space-y-2">
            {['Education', 'Manual therapy', 'Tailored Exercise', 'Return to Function'].map((item) => (
              <li key={item}>
                <Link className="text-slate-400 hover:text-white transition-colors text-[13px] md:text-sm uppercase tracking-[0.18em] block font-poppins leading-tight" to="/services">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-2">
          <h4 className="font-bold text-[12px] md:text-[15px] tracking-[0.25em] uppercase mb-8 text-secondary">RESOURCES</h4>
          <ul className="space-y-2">
            {[
              { name: 'Insights', path: '/insights' },
              { name: 'Conditions', path: '/conditions' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
              { name: 'Privacy Policy', path: '/privacy-policy' },
              { name: 'Terms and Conditions', path: '/terms-and-conditions' }
            ].map((item) => (
              <li key={item.name}>
                <Link className="text-slate-400 hover:text-white transition-colors text-[13px] md:text-sm uppercase tracking-[0.18em] block font-poppins leading-tight" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <h4 className="font-bold text-[12px] md:text-[15px] tracking-[0.25em] uppercase mb-8 text-secondary">CONTACT</h4>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-6">
            <p className="text-slate-400 text-xs tracking-[0.25em] uppercase mb-2">TALK TO OUR TEAM TODAY:</p>
            <div className="text-2xl font-light tracking-[0.3em]">
              <a href="tel:0428046819" className="hover:text-secondary transition-colors">0428 046 819</a>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-6 font-poppins">Join our community for performance insights.</p>

          {status === 'success' ? (
            <div className="flex items-center gap-3 text-secondary py-3">
              <CheckCircle size={20} />
              <span className="text-sm font-poppins">You're in! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe}>
              <div className="flex gap-0 border-b border-white/10 pb-2 focus-within:border-secondary transition-colors">
                <input
                  className="bg-transparent border-none text-white text-xs w-full outline-none py-2 font-poppins placeholder-slate-500"
                  placeholder="YOUR EMAIL ADDRESS"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                  disabled={status === 'loading'}
                  required
                />
                <button
                  type="submit"
                  className="text-white hover:text-secondary transition-colors p-2 disabled:opacity-50"
                  disabled={status === 'loading'}
                >
                  {status === 'loading'
                    ? <Loader size={20} className="animate-spin" />
                    : <ArrowRight size={20} />
                  }
                </button>
              </div>
              {status === 'error' && (
                <p className="text-red-400 text-xs mt-2 font-poppins">{errorMsg}</p>
              )}
            </form>
          )}
        </div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 2xl:px-32 mt-8 md:mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-slate-500 tracking-[0.25em] uppercase text-center md:text-left leading-relaxed">
          Copyright © {new Date().getFullYear()} Rehab Factory Physiotherapy PTY LTD - All Rights Reserved. <span className="hidden md:inline mx-2">|</span> <span className="block md:inline mt-2 md:mt-0">ABN 12 695 148 791</span>
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/terms-and-conditions" className="text-[10px] text-slate-500 hover:text-white transition-colors uppercase tracking-[0.25em]">TERMS</Link>
          <Link to="/privacy-policy" className="text-[10px] text-slate-500 hover:text-white transition-colors uppercase tracking-[0.25em]">PRIVACY</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

