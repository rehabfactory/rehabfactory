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
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import CTA from '../components/CTA';
import heroImg from '../assets/hero_premium.webp';
import heroVideo from '../assets/rehab-factory-hero.mp4';
import individualisedExercise from '../assets/individualised-exercise.webp';
import conditionsWeTreatImg from '../assets/conditions-we-treat.webp';
import CursorReactiveConditions from '../components/CursorReactiveConditions';
import manualTherapyImg from '../assets/manual-therapy.webp';
import returnToSport from '../assets/return-to-sport.webp';
import sportsTaping from '../assets/sports-taping.webp';
import differenceHero from '../assets/the-difference-hero.webp';

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
      desc: 'Following your clinical assessment, we design and supervise a structured exercise program built entirely around your body, your injury, and where you want to get to.',
      link: '/services/individualised-exercise-therapy',
      img: individualisedExercise
    },
    {
      icon: <HandHelping size={40} />,
      title: 'Manual Therapy',
      desc: 'Soft tissue massage, dry needling, joint mobilisation and manipulation, and trigger point release. Used to reduce pain and restore movement so you can train.',
      link: '/services/manual-therapy',
      img: manualTherapyImg
    },
    {
      icon: <Activity size={40} />,
      title: 'Return to Work and Sport',
      desc: 'A staged, objective return-to-sport or return-to-work pathway. We use functional testing and sport-specific screening to help assess your readiness before you return.',
      link: '/services/return-to-work-and-sport',
      img: returnToSport
    },
    {
      icon: <Bandage size={40} />,
      title: 'Sports Taping',
      desc: 'Protective and supportive taping applied to help manage joint stress during training and competition. Speak to our team about whether taping is right for your injury.',
      link: '/services/sports-taping',
      img: sportsTaping
    }
  ];

  return (
    <div className="home-page overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[100dvh] flex flex-col relative pt-32 lg:pt-0 bg-primary overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"></div>

        <div className="container relative z-10 flex-grow flex flex-col justify-center pb-12 md:pb-0">
          <div className="max-w-[1000px] reveal-fade-up text-white mt-auto md:mt-0">
            <span className="text-[12px] md:text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6 md:mb-10">GYM-BASED PHYSIOTHERAPY</span>

            <h1 className="text-[46px] leading-[0.95] md:text-8xl lg:text-[110px] font-display font-bold text-white tracking-normal mb-8 md:mb-16 uppercase md:leading-[0.9]">
              Your <span className="text-secondary">REHAB</span> <br className="hidden md:block" />
              starts on the <br className="hidden md:block" />
              <span className="text-secondary">gym</span> floor.
            </h1>

            <div className="max-w-2xl">
              <p className="text-xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight mb-10 md:mb-16">
                At Rehab Factory, the gym is the treatment room. We use hands-on physiotherapy to get you moving, then we put you to work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <a 
                  href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 whitespace-nowrap rounded-full md:rounded-[25px] font-normal text-base md:text-base tracking-[0.2em] uppercase hover:bg-white transition-all active:scale-95 text-center shadow-2xl shadow-secondary/20"
                >
                  BOOK YOUR ASSESSMENT
                </a>
                <Link to="/services" className="border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 whitespace-nowrap rounded-full md:rounded-[25px] font-normal text-base md:text-base tracking-[0.2em] uppercase hover:bg-white hover:text-primary hover:border-white transition-all text-center">
                  SEE HOW WE WORK
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Trust Bar Overlay */}
        <div className="relative md:absolute bottom-0 left-0 w-full z-20 py-8 md:py-10 bg-[#020C1B] md:bg-gradient-to-t md:from-primary md:to-transparent mt-0 md:mt-0 border-t border-white/5 md:border-t-0">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center text-center">
              {[
                { icon: <Target className="text-secondary mx-auto mb-3 md:mb-4" size={24} />, title: 'Gym-Based Rehabilitation' },
                { icon: <ShieldCheck className="text-secondary mx-auto mb-3 md:mb-4" size={24} />, title: 'Athlete and Patient Focused' },
                { icon: <Zap className="text-secondary mx-auto mb-3 md:mb-4" size={24} />, title: 'AHPRA Registered Practitioners' }
              ].map((item, i) => (
                <div key={i} className="reveal-fade-up" style={{ transitionDelay: `${0.5 + i * 0.1}s` }}>
                  {item.icon}
                  <span className="text-white font-display font-bold text-[11px] md:text-base uppercase tracking-[0.2em] block whitespace-nowrap opacity-90">{item.title}</span>
                </div>
              ))}
            </div>
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
                <h2 className="text-4xl md:text-7xl font-display text-primary tracking-normal leading-[1.0] uppercase mb-8 md:mb-10">
                  Most clinics focus on the <br />
                  <span className="text-secondary">treatment bed.</span> <br />
                  We focus on the <br />
                  <span className="text-secondary">gym floor.</span>
                </h2>
                <p className="text-lg md:text-2xl text-slate-500 font-poppins font-normal leading-tight max-w-xl">
                  Hands-on treatment has its place. But it is just the start. The real work happens in the gym, and that is where we spend most of our time with you.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-square bg-slate-100 overflow-hidden shadow-2xl reveal-fade-up rounded-[25px]">
                  <img 
                    src={differenceHero} 
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
              { title: 'Your program is built for you, not copied from a template.', desc: 'Every patient at Rehab Factory receives an individualised exercise program. No generic plans. No one-size-fits-all approaches. Your program evolves as your recovery progresses.' },
              { title: 'Returning to function is a milestone, not the finish line.', desc: 'We do not consider your rehabilitation complete when symptoms settle. We work with you until you are stronger, more capable, and more confident than you were before your injury.' }
            ].map((feature, i) => (
              <div key={i} className="reveal-fade-up p-8 md:p-16 border-b md:border-b-0 md:border-r border-slate-200 last:border-b-0 last:border-r-0 hover:bg-slate-50 transition-all group flex flex-col h-full" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="md:min-h-[100px] lg:min-h-[120px] mb-4">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-primary uppercase tracking-wider leading-tight group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate-500 font-poppins font-normal leading-relaxed text-base md:text-xl">{feature.desc}</p>
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
            <h2 className="text-4xl md:text-7xl font-display font-bold text-primary tracking-normal leading-[1.1] uppercase mb-8 md:mb-12">
              Four services. One goal:<br /><span className="text-secondary">get you back stronger.</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 font-poppins font-normal leading-tight max-w-2xl mt-6 md:mt-10">
              Every service at Rehab Factory is connected. Manual therapy prepares the body. Exercise rehabilitation rebuilds it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
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
                <div className="p-8 md:p-12 flex flex-col flex-grow">
                  <div className="md:min-h-[60px] lg:min-h-[80px] mb-4">
                    <h3 className="text-xl md:text-3xl font-display font-bold text-primary uppercase tracking-wider group-hover:text-secondary transition-colors duration-500 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 font-poppins leading-relaxed mb-8 md:mb-12 text-lg md:text-xl">
                    {service.desc}
                  </p>
                  <div className="mt-auto">
                    <Link to={service.link} className="inline-flex items-center gap-3 text-primary font-normal text-xs md:text-sm tracking-[0.2em] uppercase group-hover:text-secondary transition-colors duration-500">
                      LEARN MORE <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
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
            <h2 className="text-4xl md:text-7xl font-display font-bold text-primary tracking-normal leading-[1.1] uppercase mb-8 md:mb-12">
              From junior athletes to <br className="hidden md:block" />weekend warriors to <br className="hidden md:block" /><span className="text-secondary">WorkCover patients.</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 font-poppins font-normal leading-tight max-w-2xl mt-6 md:mt-10">
              Rehab Factory is not just for elite athletes. It is for anyone who wants to recover properly and work towards coming back stronger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Athletes at Every Level', desc: 'Whether you are a junior player, a semi-professional competitor, or an established athlete, we build rehabilitation programs designed to support your return to the level of performance you are working towards.', tags: ['Sports Injuries', 'Return to Sport', 'Exercise Rehab'] },
              { title: 'Active Adults and Weekend Warriors', desc: 'Injured playing social footy? Tweaked your back at the gym? You do not have to be an elite athlete to deserve a proper rehabilitation program.', tags: ['Injury Recovery', 'Chronic Pain', 'Exercise Therapy'] },
              { title: 'WorkCover and TAC Patients', desc: 'We work with patients recovering from workplace and motor vehicle injuries, supporting a structured and sustainable return to full work capacity.', tags: ['WorkCover', 'TAC', 'Return to Work'] }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-14 border border-slate-200 rounded-[25px] hover:border-secondary/30 transition-all reveal-fade-up shadow-sm flex flex-col" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="md:min-h-[120px] lg:min-h-[140px] mb-4">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary uppercase tracking-wider leading-tight">{item.title}</h3>
                </div>
                <p className="text-slate-500 font-poppins font-normal leading-relaxed mb-8 md:mb-10 text-base md:text-xl">{item.desc}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-normal tracking-widest uppercase py-2 px-4 bg-slate-50 text-slate-500 rounded-[25px] border border-slate-100">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Help With (Cursor Reactive) */}
      <CursorReactiveConditions />

      {/* Team Section */}
      <section className="py-section-gap bg-slate-50 border-t border-slate-200">
        <div className="container">
          <div className="mb-20 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">OUR PRACTITIONERS</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-primary tracking-normal leading-[1.1] uppercase mb-8 md:mb-12">
              Meet our <br className="hidden md:block" />
              <span className="text-secondary">clinical team.</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 font-poppins font-normal leading-tight max-w-2xl mt-6 md:mt-10">
              Experienced, AHPRA-registered physiotherapists dedicated to bridging the gap between injury and peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl">
            {[
              {
                name: 'Abdelrahman Elsamman',
                role: 'Physiotherapist',
                img: '/team/practitioner-abdelrahman-elsamman.webp',
                bio: 'Abdelrahman has a strong focus on sports and musculoskeletal physiotherapy, working with athletes and everyday patients through injuries, work claims, DVA and NDIS. With additional qualifications in strength and conditioning, he builds progressive, goal-driven programs to restore function and performance. Off the court, he is a passionate basketball player and professional referee.'
              },
              {
                name: 'Amr Elsamman',
                role: 'Physiotherapist',
                img: '/team/practitioner-amr-elsamman.webp',
                bio: 'Amr brings a multidisciplinary background in biomedical sciences, strength and conditioning and disability studies to every patient he sees. Passionate about sports and musculoskeletal rehabilitation, he takes a holistic, evidence-based approach to help patients return to the activities they love. Trilingual in English, Arabic and Japanese, Amr is also a Big V basketball referee.'
              }
            ].map((practitioner, i) => (
              <div key={i} className="group reveal-fade-up flex flex-col h-full bg-white p-8 md:p-12 border border-slate-200 rounded-[25px] hover:shadow-2xl hover:border-secondary/20 transition-all duration-700" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="aspect-[4/5] bg-slate-100 mb-6 md:mb-8 rounded-[20px] overflow-hidden relative shadow-lg group-hover:shadow-xl transition-all duration-700">
                   <img src={practitioner.img} alt={practitioner.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <h3 className="text-xl md:text-3xl font-display font-bold text-primary mb-2 uppercase tracking-wide group-hover:text-secondary transition-colors leading-tight">{practitioner.name}</h3>
                <p className="text-secondary font-black text-xs md:text-sm tracking-widest uppercase mb-6">{practitioner.role}</p>
                <p className="text-slate-500 font-poppins leading-relaxed text-base md:text-lg mb-8 flex-grow">{practitioner.bio}</p>
                <div className="mt-auto">
                  <Link to="/about" className="inline-flex items-center gap-3 text-primary font-normal text-xs tracking-[0.2em] uppercase group-hover:text-secondary transition-colors duration-500">
                    READ FULL BIO <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-section-gap bg-white border-t border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="text-[12px] md:text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-4 md:mb-6">FIND US</span>
              <h2 className="text-[40px] md:text-8xl font-display text-primary tracking-normal leading-[0.9] uppercase mb-6 md:mb-10">Based in <br className="hidden md:block" />Narre Warren, <br /><span className="text-secondary">Victoria.</span></h2>
              <div className="flex items-center gap-4 text-slate-500 mb-8 md:mb-10">
                <MapPin size={24} className="text-secondary shrink-0" />
                <span className="font-poppins font-bold tracking-widest text-[11px] md:text-sm uppercase">Serving the South East, Victoria.</span>
              </div>
              <a href="https://maps.google.com/?q=9/25-35+Narre+Warren+-+Cranbourne+Road" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-3 rounded-[25px] font-normal text-base tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all inline-block shadow-xl">
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
      <CTA />
    </div>
  );
};

export default Home;
