import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  ShieldCheck, 
  Activity, 
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

const ReturnToWorkAndSport = () => {
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
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop" 
            alt="Return to Work and Sport" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">OUR SERVICES</span>
            <h1 className="text-6xl md:text-8xl lg:text-[90px] font-display tracking-tight leading-[0.9] uppercase mb-12">
              Return to <br />
              <span className="text-secondary">Work & Sport.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl mb-16">
              Returning to activity is a milestone, not the finish line. We work with you to go further.
            </p>
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-14 py-6 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all active:scale-95 text-center shadow-2xl shadow-secondary/20 inline-block"
            >
              BOOK AN ASSESSMENT
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-section-gap bg-slate-50 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">OUR APPROACH</span>
              <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">
                Working towards <br />more than <br /><span className="text-secondary">symptom relief.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-500 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-2xl text-primary font-bold">
                At Rehab Factory, we do not consider a rehabilitation programme complete when a patient's symptoms have settled. Our goal is to work with you towards returning to your workplace or sport feeling more prepared and physically capable than before your injury.
              </p>
              <p>
                That means rebuilding strength, restoring movement quality, and working towards the physical capacity and confidence needed to perform at the level you want to reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pathways Section */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="mb-24 reveal">
            <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">TWO PATHWAYS</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">Return to sport or <br />return to work.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Return to Sport */}
            <div className="reveal-fade-up p-12 bg-slate-50 border border-slate-100 rounded-[25px] hover:border-secondary/30 transition-all duration-700 group">
              <div className="w-16 h-16 bg-white flex items-center justify-center rounded-[25px] mb-10 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                <Target size={32} className="text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-4xl font-display font-bold text-primary mb-8 uppercase tracking-wide">Return to Sport</h3>
              <p className="text-slate-500 font-poppins leading-tight text-lg mb-10">
                We work with athletes recovering from injury to build a structured, staged return to training and competition.
              </p>
              <ul className="space-y-6">
                {[
                  'Sport-specific movement screening',
                  'Strength and functional testing',
                  'Staged return-to-play programme'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-primary font-bold font-poppins uppercase tracking-widest text-sm">
                    <CheckCircle2 size={20} className="text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Return to Work */}
            <div className="reveal-fade-up p-12 bg-slate-50 border border-slate-100 rounded-[25px] hover:border-secondary/30 transition-all duration-700 group" style={{ transitionDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-white flex items-center justify-center rounded-[25px] mb-10 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                <ShieldCheck size={32} className="text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-4xl font-display font-bold text-primary mb-8 uppercase tracking-wide">Return to Work</h3>
              <p className="text-slate-500 font-poppins leading-tight text-lg mb-10">
                We work with patients recovering from workplace or motor vehicle injuries to support a structured return to full work capacity.
              </p>
              <ul className="space-y-6">
                {[
                  'Functional capacity assessment',
                  'WorkCover and TAC case management support',
                  'Graded return-to-work planning'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-primary font-bold font-poppins uppercase tracking-widest text-sm">
                    <CheckCircle2 size={20} className="text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-section-gap bg-primary text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mb-24 reveal text-center max-w-3xl mx-auto">
            <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">HOW IT WORKS</span>
            <h2 className="text-5xl md:text-7xl font-display text-white tracking-tight leading-[0.9] uppercase">A structured pathway, <br />every step.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { num: '01', title: 'Assessment', desc: 'We assess your current capacity against the physical demands of your sport or workplace.' },
              { num: '02', title: 'Programme Design', desc: 'A targeted return-to-sport or return-to-work programme is developed around your assessment findings.' },
              { num: '03', title: 'Supervised Training', desc: 'You progress through the programme in the clinic gym with physiotherapist oversight and guidance.' },
              { num: '04', title: 'Functional Testing', desc: 'We use objective strength and movement benchmarks to help assess your progress and readiness.' },
              { num: '05', title: 'Clearance', desc: 'We work collaboratively with your coach, employer, or treating practitioner to support your return.' }
            ].map((item, i) => (
              <div key={i} className="group reveal-fade-up p-8 bg-white/5 border border-white/10 rounded-[25px] hover:border-secondary/30 transition-all duration-500" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="text-secondary font-display font-black text-6xl block mb-8 opacity-40 group-hover:opacity-100 transition-opacity">{item.num}</span>
                <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-wide leading-tight group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 font-poppins font-normal leading-tight text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary opacity-5 blur-[250px] rounded-full pointer-events-none"></div>
      </section>

      {/* Final CTA */}
      <section className="py-cta-gap bg-white text-center overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-5xl md:text-8xl font-display tracking-tight leading-[0.9] uppercase mb-10 text-primary">Let us help you <br />work towards <br /><span className="text-secondary">getting back stronger.</span></h2>
            <p className="text-2xl text-slate-500 font-poppins font-normal leading-tight mb-16 max-w-2xl mx-auto">
              Book your initial assessment and take the first step.
            </p>
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/10"
            >
              BOOK AN ASSESSMENT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnToWorkAndSport;
