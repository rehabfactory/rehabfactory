import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  HandHelping,
  Dumbbell,
  Bandage,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  CheckCircle2
} from 'lucide-react';
import heroImg from '../assets/hero_premium.png';

const Home = () => {
  const [activeService, setActiveService] = useState(0);

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

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <Dumbbell size={40} />,
      title: 'Individualised Exercise Therapy',
      desc: 'Following your clinical assessment, we design and supervise a structured exercise programme built entirely around your body, your injury, and where you want to get to.',
      link: '/services/individualised-exercise-therapy',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop'
    },
    {
      icon: <HandHelping size={40} />,
      title: 'Manual Therapy',
      desc: 'Soft tissue massage, dry needling, joint mobilisation and manipulation, and trigger point release. Used to reduce pain and restore movement so you can train.',
      link: '/services/manual-therapy',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop'
    },
    {
      icon: <Activity size={40} />,
      title: 'Return to Work and Sport',
      desc: 'A staged, objective return-to-sport or return-to-work pathway. We use functional testing and sport-specific screening to help assess your readiness before you return.',
      link: '/services/return-to-work-and-sport',
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop'
    },
    {
      icon: <Bandage size={40} />,
      title: 'Sports Taping',
      desc: 'Protective and supportive taping applied to help manage joint stress during training and competition. Speak to our team about whether taping is right for your injury.',
      link: '/services/sports-taping',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <div className="home-page overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[95vh] flex items-center relative pt-32 lg:pt-40 bg-white">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 reveal-fade-up">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">PHYSIOTHERAPY / NARRE WARREN, VIC</span>

              <h1 className="text-5xl md:text-7xl lg:text-[100px] font-display text-primary tracking-tight mb-12 uppercase leading-[0.9]">
                Your <span className="text-secondary">REHAB</span> <br />
                starts on the <br />
                <span className="text-secondary">gym</span> floor.
              </h1>

              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-slate-500 font-poppins font-normal leading-tight mb-12">
                  At Rehab Factory, the gym is the treatment room. We use hands-on physiotherapy to get you moving, then we put you to work. Hard, structured, goal-driven exercise rehabilitation designed to build lasting strength and function.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-12 py-6 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all active:scale-95 text-center shadow-xl"
                  >
                    BOOK YOUR ASSESSMENT
                  </a>
                  <Link to="/services" className="border-2 border-primary text-primary px-12 py-6 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all text-center">
                    SEE HOW WE WORK
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-4 relative h-[65vh] reveal-fade-up">
              <div className="absolute inset-0 bg-slate-100 rounded-[25px] overflow-hidden">
                <img src={heroImg} alt="Elite Performance Clinic" className="w-full h-full object-cover transition-all duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary py-12 border-y border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center">
            {[
              { icon: <Target className="text-secondary mx-auto mb-4" size={32} />, title: 'Gym-Based Rehabilitation' },
              { icon: <ShieldCheck className="text-secondary mx-auto mb-4" size={32} />, title: 'Athlete and Patient Focused' },
              { icon: <Zap className="text-secondary mx-auto mb-4" size={32} />, title: 'AHPRA Registered Practitioners' }
            ].map((item, i) => (
              <div key={i} className="reveal">
                {item.icon}
                <span className="text-white font-display font-bold text-lg md:text-xl uppercase tracking-widest block whitespace-nowrap">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="mb-16 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-7">
                <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-8">THE DIFFERENCE</span>
                <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[1.0] uppercase mb-10">
                  Most clinics focus on the <br />
                  <span className="text-secondary">treatment bed.</span> <br />
                  We focus on the <br />
                  <span className="text-secondary">gym floor.</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-500 font-poppins font-normal leading-tight max-w-xl">
                  Hands-on treatment has its place. But it is just the start. The real work happens in the gym, and that is where we spend most of our time with you.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-square bg-slate-100 overflow-hidden shadow-2xl reveal-fade-up rounded-[25px]">
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
                    alt="The Rehab Factory Difference" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-slate-200">
            {[
              { title: 'We assess before we assume.', desc: 'Your first appointment is a thorough clinical assessment. We take the time to understand your injury, your history, your lifestyle, and your goals before we design a single exercise.' },
              { title: 'Your programme is built for you, not copied from a template.', desc: 'Every patient at Rehab Factory receives an individualised exercise programme. No generic plans. No one-size-fits-all approaches. Your programme evolves as your recovery progresses.' },
              { title: 'Returning to function is a milestone, not the finish line.', desc: 'We do not consider your rehabilitation complete when symptoms settle. We work with you until you are stronger, more capable, and more confident than you were before your injury.' }
            ].map((feature, i) => (
              <div key={i} className="reveal-fade-up p-12 border-r border-slate-200 last:border-r-0 hover:bg-slate-50 transition-all group" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-wide leading-tight group-hover:text-secondary transition-colors">{feature.title}</h3>
                <p className="text-slate-500 font-poppins font-normal leading-tight">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-section-gap bg-white border-t border-slate-100">
        <div className="container">
          <div className="mb-20 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHAT WE DO</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">
              Four services. One goal:<br /><span className="text-secondary">get you back stronger.</span>
            </h2>
            <p className="text-2xl text-slate-500 font-poppins font-normal leading-tight max-w-2xl mt-10">
              Every service at Rehab Factory is connected. Manual therapy prepares the body. Exercise rehabilitation rebuilds it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white border border-slate-100 rounded-[25px] overflow-hidden hover:shadow-2xl transition-all duration-700 reveal-fade-up shadow-sm"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-100" />
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white text-secondary flex items-center justify-center rounded-[25px] shadow-xl z-20 transition-all duration-300 group-hover:bg-white group-hover:text-primary group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-wide group-hover:text-secondary transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-poppins leading-tight mb-10 text-sm">
                    {service.desc}
                  </p>
                  <div className="mt-auto">
                    <Link to={service.link} className="inline-flex items-center gap-3 text-primary font-black text-[11px] tracking-[0.2em] uppercase group-hover:text-secondary transition-colors duration-500">
                      LEARN MORE <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-section-gap bg-slate-50">
        <div className="container">
          <div className="mb-20 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHO WE WORK WITH</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">
              From junior athletes to <br />weekend warriors to <br /><span className="text-secondary">WorkCover patients.</span>
            </h2>
            <p className="text-2xl text-slate-500 font-poppins font-normal leading-tight max-w-2xl mt-10">
              Rehab Factory is not just for elite athletes. It is for anyone who wants to recover properly and work towards coming back stronger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Athletes at Every Level', desc: 'Whether you are a junior player, a semi-professional competitor, or an established athlete, we build rehabilitation programmes designed to support your return to the level of performance you are working towards.', tags: ['Sports Injuries', 'Return to Sport', 'Exercise Rehab'] },
              { title: 'Active Adults and Weekend Warriors', desc: 'Injured playing social footy? Tweaked your back at the gym? You do not have to be an elite athlete to deserve a proper rehabilitation programme.', tags: ['Injury Recovery', 'Chronic Pain', 'Exercise Therapy'] },
              { title: 'WorkCover and TAC Patients', desc: 'We work with patients recovering from workplace and motor vehicle injuries, supporting a structured and sustainable return to full work capacity.', tags: ['WorkCover', 'TAC', 'Return to Work'] }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 border border-slate-200 rounded-[25px] hover:border-secondary/30 transition-all reveal-fade-up shadow-sm" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="text-3xl font-display font-bold text-primary mb-6 uppercase tracking-wide leading-tight">{item.title}</h3>
                <p className="text-slate-500 font-poppins font-normal leading-tight mb-8">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-black tracking-widest uppercase py-2 px-3 bg-slate-50 text-slate-400 rounded-[25px] border border-slate-100">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Help With */}
      <section className="py-section-gap bg-white border-t border-slate-100">
        <div className="container">
          <div className="mb-16 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">HOW WE CAN HELP</span>
            <h2 className="text-5xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">The conditions and challenges <br />our team works with every day.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: 'Injury Management and Recovery', desc: 'We work with patients managing musculoskeletal injuries from acute sprains and strains to post-surgical rehabilitation, developing a personalised plan built around your recovery timeline and goals.' },
              { title: 'Chronic Pain and Ongoing Conditions', desc: 'Ongoing pain does not have to mean ongoing limitation. We work with patients managing long-term musculoskeletal conditions to support improved movement, strength, and quality of life.' },
              { title: 'Patient Education and Self-Management', desc: 'Understanding your injury is part of recovering from it. We give every patient the knowledge and tools they need to take an active role in their own health and long-term wellbeing.' },
              { title: 'Sports Performance and Injury Prevention', desc: 'For athletes looking to build capacity and reduce injury risk, we provide individualised assessment and targeted exercise programmes designed around the demands of your sport.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group reveal">
                <div className="w-12 h-12 bg-slate-50 rounded-[25px] flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors border border-slate-100 text-secondary">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-slate-500 font-poppins font-normal leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <Link to="/conditions" className="inline-flex items-center gap-3 text-secondary font-black text-sm tracking-[0.3em] uppercase hover:text-primary transition-colors">
              VIEW ALL CONDITIONS WE WORK WITH <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-section-gap bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">FIND US</span>
              <h2 className="text-6xl md:text-8xl font-display text-primary tracking-tight leading-[0.9] uppercase mb-10">Based in <br />Narre Warren, <br /><span className="text-secondary">Victoria.</span></h2>
              <div className="flex items-center gap-4 text-slate-500 mb-10">
                <MapPin size={24} className="text-secondary" />
                <span className="font-poppins font-bold tracking-widest text-sm uppercase">Serving the South East, Victoria.</span>
              </div>
              <a href="https://maps.google.com/?q=9/25-35+Narre+Warren+-+Cranbourne+Road" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-10 py-5 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all inline-block shadow-xl">
                GET DIRECTIONS
              </a>
            </div>
            <div className="h-[500px] bg-slate-200 rounded-[25px] overflow-hidden border border-slate-200 reveal shadow-2xl">
              <iframe
                src="https://maps.google.com/maps?q=9/25-35%20Narre%20Warren%20-%20Cranbourne%20Road&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-cta-gap bg-primary text-white relative text-center overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-6xl md:text-9xl font-display tracking-tight leading-[0.85] uppercase mb-12">Your recovery <br /><span className="text-secondary">starts here.</span></h2>
            <p className="text-2xl text-slate-400 font-poppins font-normal leading-tight mb-16 max-w-2xl mx-auto">
              Book your initial assessment at Rehab Factory Physiotherapy in Narre Warren and let us build your programme.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-20">
              <a 
                href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all shadow-2xl shadow-secondary/20"
              >
                BOOK YOUR ASSESSMENT
              </a>
              <Link to="/services" className="border-2 border-slate-700 text-white px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-primary hover:border-white transition-all">
                VIEW OUR SERVICES
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40">
              {[
                { icon: <ShieldCheck size={18} />, text: 'Registered Practitioners' },
                { icon: <Target size={18} />, text: 'Individualised Programmes' },
                { icon: <MapPin size={18} />, text: 'Narre Warren, VIC' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[11px] font-black tracking-widest uppercase">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Abstract Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary opacity-5 blur-[200px] rounded-full pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Home;
