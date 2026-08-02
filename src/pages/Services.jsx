import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Dumbbell,
  HandHelping,
  Activity,
  Bandage,
  ChevronRight,
  CheckCircle2,
  Plus,
  Minus,
  HelpCircle,
  Users,
  Calendar,
  Zap,
  Target,
  ShieldCheck,
  BookOpen,
  ClipboardCheck,
  Trophy,
  Briefcase,
  HeartPulse
} from 'lucide-react';
import serviceHero from '../assets/service_hero.webp';
import individualisedExercise from '../assets/individualised-exercise.webp';
import manualTherapyImg from '../assets/manual-therapy.webp';
import workcoverRehabImg from '../assets/workcover-rehab.webp';
import returnToSport from '../assets/return-to-sport.webp';
import sportsTaping from '../assets/sports-taping.webp';
import CTA from '../components/CTA';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(0);

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

  const serviceList = [
    {
      icon: <BookOpen size={32} />,
      title: 'Education',
      desc: 'Education is an empowering tool that is often overlooked. The more you understand your body and nature of your injury, the better you can help yourself. Hence, our initial focus is to examine and explain our findings to you. This collaborative approach allows us to guide you through the necessary steps and equip you with the understanding and confidence required for your road to recovery.',
      link: '/services/education',
      img: individualisedExercise
    },
    {
      icon: <HandHelping size={32} />,
      title: 'Manual therapy',
      desc: 'Exercise is the ultimate goal, however, recovery often begins with hands-on treatment to facilitate rehabilitation. We utilise a range of skills including soft and deep tissue massage, sports taping, dry needling, joint mobilisation and trigger point release to help you get started.',
      link: '/services/manual-therapy',
      img: manualTherapyImg
    },
    {
      icon: <Dumbbell size={32} />,
      title: 'Tailored functional rehabilitation',
      desc: 'The stronger the muscle, the less load there is on your joints. We first find deficits contributing to your injury, then manage your symptoms, then take you through exercises appropriate to your body and level of function. It is simple, and it works!',
      link: '/services/individualised-exercise-therapy',
      img: returnToSport
    },
    {
      icon: <Activity size={32} />,
      title: 'Return to function',
      desc: 'We collect measurable data that we review periodically to ensure we are progressing well. Your rehab Program is guided by this data, with clear checkpoints for when to return to work/sports.',
      link: '/services/return-to-work-and-sport',
      img: sportsTaping
    }
  ];

  const faqs = [
    {
      q: "Do I need a referral to see a physiotherapist at Rehab Factory?",
      a: "No. You can book directly without a GP referral. If you are a WorkCover or TAC patient, you will need the appropriate approval from your insurer before your first appointment."
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Wear comfortable clothing you can move in. If you have any relevant imaging such as X-rays or MRI scans, bring those along. If you are a WorkCover or TAC patient, bring your claim details."
    },
    {
      q: "How long are appointments?",
      a: "Initial assessments are typically longer than follow-up sessions to allow time for a thorough assessment and program design. Your physiotherapist will advise you on session length and frequency at your first appointment."
    },
    {
      q: "Is exercise rehabilitation suitable for older patients?",
      a: "Yes. Exercise rehabilitation is beneficial for patients of all ages. Your program is designed around your individual capacity and goals, regardless of age or fitness level."
    },
    {
      q: "Can I claim physiotherapy through Medicare or private health insurance?",
      a: "Physiotherapy may be claimable through a GP Management Plan (Medicare) or private health insurance depending on your cover. We recommend checking with your fund or GP. WorkCover and TAC patients are bulk billed under their approved claims."
    },
    {
      q: "What happens if my condition is outside your scope?",
      a: "If we assess that your condition requires a different approach or another health professional, we will let you know and refer you appropriately."
    }
  ];

  return (
    <div className="services-page overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-48 lg:pt-64 pb-32 lg:pb-48 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={serviceHero}
            alt="Rehab Factory Services"
            className="w-full h-full object-cover opacity-100"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">OUR SERVICES</span>
            <h1 className="text-4xl md:text-8xl lg:text-[100px] font-display tracking-normal leading-[0.95] md:leading-[0.9] uppercase mb-8 md:mb-12">
              Everything we do <br />
              is built <br className="hidden md:block" />
              <span className="text-secondary">around you.</span>
            </h1>
            <p className="text-lg md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl">
              From your first assessment to your return to sport, we work with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-section-gap bg-slate-50 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">OUR APPROACH</span>
              <h2 className="text-4xl md:text-6xl font-display text-primary tracking-normal leading-[0.9] uppercase">
                Exercise first. <br /><span className="text-secondary">Always.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-10 text-slate-500 font-poppins leading-tight reveal-fade-up">
              <p className="text-lg md:text-2xl text-primary font-semibold leading-tight">
                At Rehab Factory, every service starts with a thorough clinical assessment. We take the time to understand your injury, your history, your goals, and your lifestyle before designing your program.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Hands-on treatment is part of the plan, but exercise rehabilitation is the foundation. We use manual therapy to reduce pain and restore movement so you can get back to the work that supports your recovery.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We do not believe in passive treatment. We believe in building you up. That means every service we offer is connected to a broader plan, and every plan is built around you as an individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-section-gap bg-white">
        <div className="container">
          <div className="mb-16 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHAT WE OFFER</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-normal leading-[0.9] uppercase">Our services.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {serviceList.map((service, i) => (
              <Link
                to={service.link}
                key={i}
                className="group reveal-fade-up border border-slate-200 rounded-[25px] overflow-hidden bg-white hover:border-secondary/30 hover:shadow-2xl transition-all duration-700"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white text-secondary flex items-center justify-center rounded-[25px] shadow-xl transition-all duration-300 group-hover:bg-white group-hover:text-primary group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="md:min-h-[60px] lg:min-h-[80px] mb-4">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary uppercase tracking-wide group-hover:text-secondary transition-colors duration-500 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 font-poppins leading-relaxed mb-8 md:mb-10 text-lg md:text-xl">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-3 text-secondary font-normal text-xs md:text-sm tracking-[0.2em] uppercase group-hover:text-primary transition-colors duration-500">
                    LEARN MORE <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Rehab Factory */}
      <section className="py-section-gap bg-primary text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="mb-16 reveal">
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHY CHOOSE US</span>
                <h2 className="text-4xl md:text-8xl font-display tracking-normal leading-[0.9] uppercase mb-6">What makes us <br /><span className="text-secondary">different.</span></h2>
                <p className="text-xl text-slate-400 font-poppins leading-tight max-w-2xl mt-6">
                  Built for peak performance.<br />
                  Gym-based physiotherapy and rehabilitation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              {
                title: 'We start with a proper assessment.',
                desc: 'Before any treatment begins, we take the time to understand you. Your injury, your history, your lifestyle, your goals. That assessment shapes everything that follows. We do not guess, and we do not rush.',
                icon: <ClipboardCheck size={24} />
              },
              {
                title: 'Your program is yours.',
                desc: 'Every patient at Rehab Factory receives an individualised exercise program. There are no generic handouts or one-size-fits-all approaches. Your program is designed for your body, your injury, and where you want to get to. It evolves as your recovery progresses.',
                icon: <Target size={24} />
              },
              {
                title: 'The gym is our treatment room.',
                desc: 'Most physiotherapy clinics are built around a treatment table. We built a gym. That is where the real rehabilitation work happens, and it is where you will spend most of your time with us.',
                icon: <Dumbbell size={24} />
              },
              {
                title: 'Full function, not just symptom relief.',
                desc: 'Our goal is not simply to reduce your pain. We work with you to rebuild strength, restore movement quality, and help you return to the activity, sport, or workplace you want to get back to.',
                icon: <Activity size={24} />
              },
              {
                title: 'We work with patients at every level.',
                desc: 'From junior athletes and weekend warriors to WorkCover patients and people managing long-term musculoskeletal conditions, we build programs suited to where you are and what you need.',
                icon: <Users size={24} />
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 bg-white/5 border border-white/10 rounded-[25px] shadow-[0_0_40px_rgba(161,97,61,0.4)] hover:shadow-[0_0_60px_rgba(161,97,61,0.8)] hover:border-secondary transition-all duration-500 group reveal-fade-up md:col-span-2 lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''} ${i === 4 ? 'md:col-start-2 lg:col-start-auto' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-secondary text-white flex items-center justify-center rounded-[25px] mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6 uppercase tracking-wide leading-tight">{item.title}</h3>
                <p className="text-slate-400 font-poppins leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">YOUR FIRST VISIT</span>
              <h2 className="text-4xl md:text-7xl font-display text-primary tracking-normal leading-[0.9] uppercase mb-8">
                Here is what <br />happens when <br className="hidden md:block" /><span className="text-secondary">you come in.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-poppins leading-relaxed">
                We've designed our process to be thorough, transparent, and focused entirely on your progress.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-12 reveal-fade-up">
              {[
                { step: '01', title: 'Your Initial Assessment', desc: 'Your first appointment is dedicated entirely to understanding you. We talk through your injury, your history, your goals, and your lifestyle. We assess your movement, strength, and function. Nothing is rushed.' },
                { step: '02', title: 'Your Program is Designed', desc: 'Based on your assessment, your physiotherapist designs an individualised exercise program. You will understand the reasoning behind every exercise and what each one is working towards.' },
                { step: '03', title: 'You Get to Work', desc: 'Sessions take place in the clinic gym. Your physiotherapist supervises and guides you through your program, progressing it as you develop strength and confidence.' },
                { step: '04', title: 'We Reassess and Evolve', desc: 'Your program is reviewed regularly. As your capacity improves, we adjust your program to keep you progressing and working towards your goals.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-10 group">
                  <span className="text-4xl md:text-6xl font-display font-black text-transparent group-hover:text-secondary/30 transition-colors duration-500 shrink-0 select-none">{item.step}</span>
                  <div>
                    <h3 className="text-xl md:text-3xl font-display font-bold text-primary mb-3 md:mb-4 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-base md:text-lg text-slate-500 font-poppins leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      {/* Who We Work With */}
      <section className="py-section-gap bg-white border-y border-slate-100">
        <div className="container max-w-7xl">
          <div className="mb-16 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHO WE SEE</span>
            <h2 className="text-4xl md:text-6xl font-display text-primary tracking-normal leading-[0.9] uppercase">Rehab Factory is for <br className="hidden md:block" />anyone who wants to <br className="hidden md:block" /><span className="text-secondary">recover properly.</span></h2>
          </div>

          <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] gap-4 md:gap-6">
            {[
              { 
                category: 'ALL LEVELS',
                title: 'Athletes', 
                desc: 'From junior club players to semi-professional and established competitors, we work with athletes recovering from injury and working towards a return to sport.',
                icon: <Trophy size={48} />,
                img: returnToSport
              },
              { 
                category: 'EVERYDAY ACTIVITY',
                title: 'Weekend Warriors', 
                desc: 'You do not need to be an elite athlete to benefit from a structured rehabilitation program. If you are active and injured, we want to help you get back to the activities you enjoy.',
                icon: <Activity size={48} />,
                img: individualisedExercise
              },
              { 
                category: 'WORKPLACE & MOTOR',
                title: 'WorkCover & TAC', 
                desc: 'We work with patients recovering from workplace and motor vehicle injuries, supporting a structured and sustainable return to full work capacity.',
                icon: <Briefcase size={48} />,
                img: workcoverRehabImg
              },
              { 
                category: 'LONG-TERM CARE',
                title: 'Chronic Conditions', 
                desc: 'If you are living with ongoing musculoskeletal pain or a long-term condition, we work with you to improve your movement, build strength, and support a better quality of daily life.',
                icon: <HeartPulse size={48} />,
                img: sportsTaping
              }
            ].map((item, i) => (
              <div 
                key={i} 
                onClick={() => setActiveAccordion(i)}
                onMouseEnter={() => setActiveAccordion(i)}
                className={`relative rounded-[32px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 bg-black group reveal-fade-up ${
                  activeAccordion === i 
                    ? 'flex-[3] md:flex-[4]' 
                    : 'flex-1 md:flex-1'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Background Image */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ease-out opacity-80 group-hover:opacity-100 ${
                    activeAccordion === i ? 'scale-105' : 'scale-100 grayscale-[30%]'
                  }`}
                />
                
                {/* Dark Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-700 ${
                  activeAccordion === i ? 'opacity-90' : 'opacity-80'
                }`}></div>
                <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                  activeAccordion === i ? 'opacity-0' : 'opacity-40 group-hover:opacity-20'
                }`}></div>
                
                {/* Content for Expanded State */}
                <div className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-end transition-all duration-700 ease-out ${
                  activeAccordion === i ? 'opacity-100 translate-y-0 pointer-events-auto delay-200' : 'opacity-0 translate-y-8 pointer-events-none'
                }`}>
                  <span className="text-[12px] font-bold tracking-[0.2em] text-[#E49E73] uppercase font-poppins mb-3 block">{item.category}</span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-normal leading-[0.95]">{item.title}</h3>
                  <p className="text-base md:text-lg text-white/80 font-poppins leading-relaxed max-w-md hidden md:block">{item.desc}</p>
                </div>

                {/* Content for Collapsed State (Mobile: Icon only, Desktop: Icon + Vertical Text) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-12 transition-opacity duration-500 ${
                  activeAccordion === i ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>
                  <div className="text-[#E49E73]/80 group-hover:text-[#E49E73] transition-colors duration-300 md:mb-8">
                    {item.icon}
                  </div>
                  <h3 
                    className="text-2xl font-display font-bold text-white/80 group-hover:text-white uppercase tracking-wide whitespace-nowrap transition-colors duration-300 hidden md:block"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-section-gap bg-[#0a0a0a] border-y border-white/5">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 reveal">
              <span className="text-[15px] font-bold tracking-[0.4em] text-[#E49E73] uppercase font-poppins block mb-4">FAQS</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white tracking-normal leading-[0.9] uppercase mb-6">Common questions <br className="hidden lg:block" /><span className="text-secondary">about our services.</span></h2>
              <p className="text-white/60 font-poppins text-lg max-w-md mb-8">Can't find what you're looking for? Reach out to our clinic directly and our team will be happy to assist.</p>
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#E49E73] text-primary hover:bg-white px-6 py-3 font-display font-bold uppercase tracking-widest transition-colors duration-300">
                Have your own questions?
              </Link>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 reveal-fade-up">
              <div className="border-t border-white/10">
                {faqs.map((faq, i) => (
                  <div key={i} className={`border-b transition-colors duration-300 ${openFaq === i ? 'border-secondary/50' : 'border-white/10'}`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-wide group-hover:text-[#E49E73] transition-colors pr-8">{faq.q}</span>
                      <div className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'text-secondary rotate-180' : 'text-white/30 group-hover:text-[#E49E73] rotate-0'}`}>
                        {openFaq === i ? <Minus size={24} /> : <Plus size={24} />}
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}`}>
                      <p className="text-base md:text-lg text-white/70 font-poppins leading-relaxed pr-4 md:pr-12">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />


    </div>
  );
};

export default Services;
