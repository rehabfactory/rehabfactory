import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, MapPin } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white relative text-center overflow-hidden mt-16 md:mt-24 mb-16 md:mb-24 rounded-[30px] md:rounded-[40px] mx-4 lg:mx-8">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-4xl md:text-7xl font-display tracking-normal leading-[0.85] uppercase mb-6 md:mb-10">
            Your recovery <br /><span className="text-secondary">starts here.</span>
          </h2>
          <p className="text-base md:text-xl text-slate-400 font-poppins font-normal leading-tight mb-8 md:mb-12 max-w-2xl mx-auto">
            Book your initial assessment at Rehab Factory Physiotherapy in Narre Warren and let us build your program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-10 md:mb-16">
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 whitespace-nowrap rounded-full md:rounded-[25px] font-normal text-base tracking-[0.2em] uppercase hover:bg-white transition-all shadow-xl shadow-secondary/20"
            >
              BOOK YOUR ASSESSMENT
            </a>
            <Link to="/services" className="border-2 border-slate-700 text-white px-6 md:px-8 py-3 md:py-4 whitespace-nowrap rounded-full md:rounded-[25px] font-normal text-base tracking-[0.2em] uppercase hover:bg-white hover:text-primary hover:border-white transition-all">
              VIEW OUR SERVICES
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-50">
            {[
              { icon: <ShieldCheck size={16} />, text: 'Registered Practitioners' },
              { icon: <Target size={16} />, text: 'Individualised Programs' },
              { icon: <MapPin size={16} />, text: 'Narre Warren, VIC' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase">
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Abstract Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-[0.05] blur-[150px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};

export default CTA;
