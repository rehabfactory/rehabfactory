import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  HandHelping, 
  CheckCircle2,
  Zap,
  ShieldCheck,
  Target,
  Dumbbell,
  Activity,
  Bandage
} from 'lucide-react';
import manualTherapyImg from '../assets/manual-therapy.webp';

const ManualTherapy = () => {
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
            src={manualTherapyImg} 
            alt="Manual Therapy" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">OUR SERVICES</span>
            <h1 className="text-[42px] leading-[0.95] md:text-8xl lg:text-[100px] font-display tracking-tight uppercase mb-8 md:mb-12">
              Manual <br />
              <span className="text-secondary">Therapy.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl mb-16">
              Hands-on techniques used to reduce pain and restore movement, so you can get back to the work that supports your recovery.
            </p>
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-8 md:px-14 py-5 md:py-6 rounded-full md:rounded-[25px] font-black text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-white transition-all active:scale-95 text-center shadow-2xl shadow-secondary/20 inline-block"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-section-gap bg-slate-50 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHAT IS MANUAL THERAPY</span>
              <h2 className="text-3xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">
                Hands-on care, <br className="hidden md:block" />as part of a <br className="hidden md:block" /><span className="text-secondary">bigger plan.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-500 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-lg md:text-2xl text-primary font-bold">
                Manual therapy at Rehab Factory is not the whole treatment. It is one part of a broader rehabilitation plan. Our physiotherapists use a range of hands-on techniques to help reduce pain, improve joint range of motion, and restore tissue health, so that patients can engage more fully with their exercise programme.
              </p>
              <p>
                Every technique is selected based on your assessment findings and your individual presentation. We do not apply a one-size-fits-all approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques We Use Section */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="mb-24 reveal max-w-3xl">
            <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">OUR TECHNIQUES</span>
            <h2 className="text-4xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">What manual therapy <br />includes.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: 'Soft Tissue Massage', desc: 'Targeted massage techniques applied to muscles, tendons, and connective tissue to help reduce tension, support circulation, and assist recovery.' },
              { title: 'Dry Needling', desc: 'Fine filiform needles are inserted into myofascial trigger points to help reduce localised muscle pain and tension. Dry needling is used alongside other treatment techniques as part of your overall plan.' },
              { title: 'Joint Mobilisation and Manipulation', desc: 'Gentle, controlled movement of joint surfaces to help restore range of motion and reduce pain, applied according to your assessment findings.' },
              { title: 'Trigger Point Release', desc: 'Sustained manual pressure applied to trigger points within muscle tissue to help reduce referred pain and support normal muscle function.' }
            ].map((item, i) => (
              <div key={i} className="group reveal-fade-up p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-[25px] hover:border-secondary/30 hover:bg-white hover:shadow-2xl transition-all duration-700" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="text-xl md:text-3xl font-display font-bold text-primary mb-4 md:mb-6 uppercase tracking-wide group-hover:text-secondary transition-colors duration-500 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-poppins font-normal leading-tight text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Fits In Section */}
      <section className="py-section-gap bg-primary text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 reveal">
              <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">HOW IT FITS IN</span>
              <h2 className="text-4xl md:text-6xl font-display text-white tracking-tight leading-[0.9] uppercase">
                Part of the <br />plan, not the <br /><span className="text-secondary">whole plan.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-400 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-lg md:text-2xl text-white font-bold">
                At Rehab Factory, manual therapy is used to help prepare the body for exercise. We work to reduce pain and restore movement first, then we build strength and function on the gym floor.
              </p>
              <p>
                That combination is central to the rehabilitation approach we take with every patient.
              </p>
              <div className="pt-8">
                <a 
                  href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-primary px-8 md:px-12 py-5 md:py-6 rounded-full md:rounded-[25px] font-black text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-white transition-all shadow-xl inline-block"
                >
                  BOOK AN APPOINTMENT
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary opacity-5 blur-[200px] rounded-full pointer-events-none"></div>
      </section>

      {/* The Process Section */}
      <section className="py-section-gap bg-slate-50 overflow-hidden">
        <div className="container">
          <div className="mb-24 reveal max-w-3xl">
            <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">HOW IT WORKS</span>
            <h2 className="text-4xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">From assessment <br />to movement.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { step: 'Step 1', title: 'Initial Assessment', desc: 'We take the time to understand your injury, your history, and your goals before any treatment begins.' },
              { step: 'Step 2', title: 'Technique Selection', desc: 'Your physiotherapist selects the most appropriate manual therapy techniques based on your assessment findings.' },
              { step: 'Step 3', title: 'Treatment Application', desc: 'Hands-on care is applied to reduce pain, restore joint mobility, and improve tissue health.' },
              { step: 'Step 4', title: 'Exercise Integration', desc: 'We bridge the gap between hands-on care and the gym floor to ensure long-term recovery.' }
            ].map((item, i) => (
              <div key={i} className="reveal-fade-up p-8 md:p-10 bg-white border border-slate-100 rounded-[25px] hover:border-secondary/30 transition-all duration-500" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="text-secondary font-black text-xs md:text-sm tracking-widest uppercase block mb-4 md:mb-6">{item.step}</span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4 md:mb-6 uppercase tracking-wide leading-tight">{item.title}</h3>
                <p className="text-slate-500 font-poppins font-normal leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="mb-10 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">EXPLORE MORE</span>
            <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">Other services.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell size={24} />,
                title: 'Individualised Exercise',
                link: '/services/individualised-exercise-therapy',
                desc: 'A personalised exercise programme designed around your body and goals.'
              },
              {
                icon: <Activity size={24} />,
                title: 'Return to Work and Sport',
                link: '/services/return-to-work-and-sport',
                desc: 'A structured, staged pathway back to your workplace or sport.'
              },
              {
                icon: <Bandage size={24} />,
                title: 'Sports Taping',
                link: '/services/sports-taping',
                desc: 'Protective and supportive taping applied to help manage joint stress.'
              }
            ].map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="group p-8 md:p-10 bg-slate-50 border border-slate-100 rounded-[25px] hover:border-secondary/30 hover:bg-white hover:shadow-2xl transition-all duration-500 reveal-fade-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-white text-secondary flex items-center justify-center rounded-[15px] mb-6 md:mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-3 md:mb-4 uppercase tracking-wide group-hover:text-secondary transition-colors duration-500">{service.title}</h3>
                <p className="text-slate-500 font-poppins text-sm leading-relaxed mb-8">{service.desc}</p>
                <span className="inline-flex items-center gap-2 text-primary font-black text-[10px] tracking-widest uppercase group-hover:text-secondary transition-colors">
                  VIEW SERVICE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-cta-gap bg-white text-center overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-[40px] leading-[0.95] md:text-8xl font-display tracking-tight uppercase mb-8 md:mb-10 text-primary">Ready to <br /><span className="text-secondary">move better?</span></h2>
            <p className="text-xl md:text-2xl text-slate-500 font-poppins font-normal leading-tight mb-12 md:mb-16 max-w-2xl mx-auto">
              Book your initial assessment and let our team build your treatment plan.
            </p>
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 md:px-16 py-5 md:py-8 rounded-full md:rounded-[25px] font-black text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/10"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManualTherapy;
