import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  HandHelping, 
  CheckCircle2,
  Zap,
  ShieldCheck,
  Target
} from 'lucide-react';

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
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop" 
            alt="Manual Therapy" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">OUR SERVICES</span>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display tracking-tight leading-[0.9] uppercase mb-12">
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
              <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHAT IS MANUAL THERAPY</span>
              <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">
                Hands-on care, <br />as part of a <br /><span className="text-secondary">bigger plan.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-500 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-2xl text-primary font-bold">
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
          <div className="mb-24 reveal text-center max-w-3xl mx-auto">
            <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">OUR TECHNIQUES</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">What manual therapy <br />includes.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Soft Tissue Massage', desc: 'Targeted massage techniques applied to muscles, tendons, and connective tissue to help reduce tension, support circulation, and assist recovery.' },
              { title: 'Dry Needling', desc: 'Fine filiform needles are inserted into myofascial trigger points to help reduce localised muscle pain and tension. Dry needling is used alongside other treatment techniques as part of your overall plan.' },
              { title: 'Joint Mobilisation and Manipulation', desc: 'Gentle, controlled movement of joint surfaces to help restore range of motion and reduce pain, applied according to your assessment findings.' },
              { title: 'Trigger Point Release', desc: 'Sustained manual pressure applied to trigger points within muscle tissue to help reduce referred pain and support normal muscle function.' }
            ].map((item, i) => (
              <div key={i} className="group reveal-fade-up p-12 bg-slate-50 border border-slate-100 rounded-[25px] hover:border-secondary/30 hover:bg-white hover:shadow-2xl transition-all duration-700" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="text-3xl font-display font-bold text-primary mb-6 uppercase tracking-wide group-hover:text-secondary transition-colors duration-500 leading-tight">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 reveal">
              <span className="text-[12px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">HOW IT FITS IN</span>
              <h2 className="text-4xl md:text-6xl font-display text-white tracking-tight leading-[0.9] uppercase">
                Part of the <br />plan, not the <br /><span className="text-secondary">whole plan.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-400 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-2xl text-white font-bold">
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
                  className="bg-secondary text-primary px-12 py-6 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all shadow-xl inline-block"
                >
                  BOOK AN APPOINTMENT
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary opacity-5 blur-[200px] rounded-full pointer-events-none"></div>
      </section>

      {/* Final CTA */}
      <section className="py-cta-gap bg-white text-center overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-5xl md:text-8xl font-display tracking-tight leading-[0.9] uppercase mb-10 text-primary">Ready to <br /><span className="text-secondary">move better?</span></h2>
            <p className="text-2xl text-slate-500 font-poppins font-normal leading-tight mb-16 max-w-2xl mx-auto">
              Book your initial assessment and let our team build your treatment plan.
            </p>
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/10"
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
