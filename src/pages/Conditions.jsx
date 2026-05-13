import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Activity, 
  ShieldCheck, 
  Zap,
  Info
} from 'lucide-react';

const Conditions = () => {
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

  const conditionList = [
    { title: 'Sports Injuries', desc: 'We work with patients recovering from sprains, muscle strains, ligament tears, and other sports-related injuries.' },
    { title: 'Knee Injuries', desc: 'Including ACL and PCL injuries, meniscus-related conditions, patellofemoral pain, and post-surgical knee rehabilitation.' },
    { title: 'Back and Neck Pain', desc: 'We work with patients managing acute and persistent back and neck pain, including disc-related presentations.' },
    { title: 'Shoulder Injuries', desc: 'Including rotator cuff injuries, shoulder impingement presentations, and instability following dislocation.' },
    { title: 'Fracture Rehabilitation', desc: 'We work with patients in the post-immobilisation phase to support restoration of strength, movement, and function.' },
    { title: 'Chronic Pain', desc: 'We work with patients managing ongoing musculoskeletal pain to support improved movement and quality of daily life.' },
    { title: 'Post-Surgical Rehabilitation', desc: 'Following orthopaedic surgery, we work with patients to rebuild strength and function through structured exercise rehabilitation.' },
    { title: 'Workplace Injuries', desc: 'We work with WorkCover and TAC patients to support recovery and a graded return to work.' }
  ];

  return (
    <div className="conditions-page overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-48 lg:pt-64 pb-32 lg:pb-48 bg-primary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2000&auto=format&fit=crop" 
            alt="Conditions We Help With" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">CONDITIONS</span>
            <h1 className="text-6xl md:text-8xl lg:text-[90px] font-display tracking-tight leading-[0.9] uppercase mb-12">
              We work with patients <br />
              managing a wide <br />
              <span className="text-secondary">range of conditions.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl mb-12">
              If it affects how you move, we want to help.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Note */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="flex items-center gap-6 p-8 bg-white border border-slate-200 rounded-[25px] reveal">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 text-secondary">
              <Info size={24} />
            </div>
            <p className="text-slate-500 font-poppins text-lg italic leading-tight">
              <strong>Disclaimer Note:</strong> The information below describes conditions our physiotherapists commonly work with. It is not intended as medical advice. Please book an assessment so we can properly evaluate your individual presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="mb-24 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHAT WE WORK WITH</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">Conditions our <br />team has experience <br />working with.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {conditionList.map((item, i) => (
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

      {/* Not Listed Section */}
      <section className="py-section-gap bg-slate-50 relative border-y border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">NOT LISTED</span>
              <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">
                Do not see your <br /><span className="text-secondary">condition listed?</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-500 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-2xl text-primary font-bold">
                Our team works with a broad range of musculoskeletal presentations. Get in touch and we will let you know how we may be able to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a 
                  href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-10 py-5 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all text-center"
                >
                  BOOK AN ASSESSMENT
                </a>
                <Link to="/contact" className="border-2 border-primary text-primary px-10 py-5 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all text-center">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-cta-gap bg-primary text-white relative text-center overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-5xl md:text-8xl font-display tracking-tight leading-[0.9] uppercase mb-10 text-white">Take the <br /><span className="text-secondary">first step.</span></h2>
            <p className="text-2xl text-slate-400 font-poppins font-normal leading-tight mb-16 max-w-2xl mx-auto">
              Book your initial assessment and let us understand what you are working through.
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

export default Conditions;
