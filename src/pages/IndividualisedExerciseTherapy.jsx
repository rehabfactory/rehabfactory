import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Activity, 
  Dumbbell,
  ShieldCheck
} from 'lucide-react';

const IndividualisedExerciseTherapy = () => {
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
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop" 
            alt="Individualised Exercise Therapy" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">OUR SERVICES</span>
            <h1 className="text-6xl md:text-8xl lg:text-[90px] font-display tracking-tight leading-[0.9] uppercase mb-12">
              Individualised <br />
              <span className="text-secondary">Exercise Therapy.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl mb-16">
              Your programme. Your injury. Your goals.
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

      {/* What It Is Section */}
      <section className="py-section-gap bg-slate-50 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHAT IS IT</span>
              <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">
                Built around <br />you from <br /><span className="text-secondary">day one.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-500 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-2xl text-primary font-bold">
                Individualised exercise therapy is the foundation of everything we do at Rehab Factory. After a thorough clinical assessment, your treating physiotherapist will design a structured exercise programme tailored specifically to your injury, your body, and your goals.
              </p>
              <p>
                No two programmes are the same. Whether you are recovering from an ACL reconstruction, managing a chronic lower back condition, or preparing to return to competitive sport, your programme is built for you, not copied from a template.
              </p>
              <p>
                We use the gym space within the clinic to deliver every session, progressing your programme over time as your strength, mobility, and confidence develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="mb-24 reveal text-center max-w-3xl mx-auto">
            <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">HOW IT WORKS</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">From assessment <br />to recovery.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: 'Step 1', title: 'Initial Assessment', desc: 'We take the time to understand your injury, your history, and your goals before any treatment begins.' },
              { step: 'Step 2', title: 'Programme Design', desc: 'Your physiotherapist designs a structured exercise programme tailored to your specific needs and presentation.' },
              { step: 'Step 3', title: 'Supervised Sessions', desc: 'You work through your programme in the clinic gym under physiotherapist guidance and supervision.' },
              { step: 'Step 4', title: 'Progress and Evolve', desc: 'Your programme is reviewed and progressed regularly to reflect your recovery and keep you challenged.' }
            ].map((item, i) => (
              <div key={i} className="reveal-fade-up p-10 bg-slate-50 border border-slate-100 rounded-[25px] hover:border-secondary/30 transition-all duration-500" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="text-secondary font-black text-sm tracking-widest uppercase block mb-6">{item.step}</span>
                <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-wide leading-tight">{item.title}</h3>
                <p className="text-slate-500 font-poppins font-normal leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Is Suited To */}
      <section className="py-section-gap bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="mb-20 reveal">
            <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHO IT IS FOR</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase mb-6">Designed for patients <br />at every level.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="text-secondary" size={32} />, title: 'Athletes Working Towards a Return to Sport', desc: 'We work with athletes at all levels to rebuild strength and function and support a structured return to training and competition.' },
              { icon: <ShieldCheck className="text-secondary" size={32} />, title: 'WorkCover and TAC Patients', desc: 'We work alongside treating practitioners to support patients recovering from workplace or motor vehicle injuries through structured exercise rehabilitation.' },
              { icon: <Dumbbell className="text-secondary" size={32} />, title: 'Everyday Active People', desc: 'Whether you play sport recreationally or simply want to move better, our exercise programmes are designed to meet you where you are.' }
            ].map((item, i) => (
              <div key={i} className="group reveal-fade-up p-12 bg-white border border-slate-200 rounded-[25px] hover:border-secondary/30 hover:shadow-2xl transition-all duration-700" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="mb-8">{item.icon}</div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-wide group-hover:text-secondary transition-colors duration-500 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-poppins leading-tight font-normal">
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
            <h2 className="text-5xl md:text-8xl font-display tracking-tight leading-[0.9] uppercase mb-10">Start your recovery <br /><span className="text-secondary">the right way.</span></h2>
            <p className="text-2xl text-slate-400 font-poppins font-normal leading-tight mb-16 max-w-2xl mx-auto">
              Book an initial assessment and let us build your programme.
            </p>
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all shadow-2xl shadow-secondary/20"
            >
              BOOK AN ASSESSMENT
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary opacity-5 blur-[200px] rounded-full pointer-events-none"></div>
      </section>
    </div>
  );
};

export default IndividualisedExerciseTherapy;
