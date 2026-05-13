import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Bandage, 
  ShieldCheck, 
  Activity, 
  Zap,
  CheckCircle2
} from 'lucide-react';

const SportsTaping = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.reveal, .reveal-fade-up');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="service-detail-page overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-48 lg:pt-64 pb-32 lg:pb-48 bg-primary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Sports Taping" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">OUR SERVICES</span>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display tracking-tight leading-[0.9] uppercase mb-12">
              Sports <br />
              <span className="text-secondary">Taping.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl mb-16">
              Joint support during activity, as part of your broader treatment plan.
            </p>
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-14 py-6 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all active:scale-95 text-center shadow-2xl shadow-secondary/20 inline-block"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-section-gap bg-slate-50 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHAT IS IT</span>
              <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">
                Stay active <br />during your <br /><span className="text-secondary">recovery.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-500 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-2xl text-primary font-bold">
                Sports taping can be used to support and protect joints during training, competition, or everyday activity. It is used to help manage joint stress and allow patients to remain active during the recovery process where clinically appropriate.
              </p>
              <p>
                Our physiotherapists apply a range of taping techniques based on your injury, your activity demands, and your clinical assessment. Taping is used as part of a broader treatment plan. Speak to our team about whether taping is suited to your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques We Use Section */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="mb-24 reveal text-center max-w-3xl mx-auto">
            <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHAT WE USE</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">Techniques tailored <br />to your needs.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck size={40} />, title: 'Rigid Sports Taping', desc: 'Applied to help limit joint movement and provide structural support during high-demand activity.' },
              { icon: <Activity size={40} />, title: 'Kinesiology Taping', desc: 'Applied to support soft tissue, encourage movement patterns, and reduce discomfort during activity.' },
              { icon: <Zap size={40} />, title: 'Functional Taping', desc: 'Applied to support joint alignment and function during sport-specific or work-related movements.' }
            ].map((item, i) => (
              <div key={i} className="reveal-fade-up p-12 bg-slate-50 border border-slate-100 rounded-sm hover:border-secondary/30 transition-all duration-700 group">
                <div className="mb-8 text-secondary group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-3xl font-display font-bold text-primary mb-6 uppercase tracking-wide group-hover:text-secondary transition-colors duration-500 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-poppins leading-tight font-normal text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-cta-gap bg-primary text-white relative text-center overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-5xl md:text-8xl font-display tracking-tight leading-[0.9] uppercase mb-10 text-white">Speak to our <br /><span className="text-secondary">team about taping.</span></h2>
            <p className="text-2xl text-slate-400 font-poppins font-normal leading-tight mb-16 max-w-2xl mx-auto">
              Book an appointment and we will assess whether taping is the right option for your injury.
            </p>
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all shadow-2xl shadow-secondary/20"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary opacity-5 blur-[200px] rounded-full pointer-events-none"></div>
      </section>
    </div>
  );
};

export default SportsTaping;
