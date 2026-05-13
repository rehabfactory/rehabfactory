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
  ShieldCheck
} from 'lucide-react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

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
      icon: <Dumbbell size={32} />,
      title: 'Individualised Exercise Therapy',
      desc: 'A structured, personalised exercise programme designed around your injury, your body, and your goals. This is the foundation of everything we do.',
      link: '/services/individualised-exercise-therapy',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop'
    },
    {
      icon: <HandHelping size={32} />,
      title: 'Manual Therapy',
      desc: 'Soft tissue massage, dry needling, joint mobilisation and manipulation, and trigger point release, used to reduce pain and restore movement.',
      link: '/services/manual-therapy',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop'
    },
    {
      icon: <Activity size={32} />,
      title: 'Return to Work and Sport',
      desc: 'A staged, structured pathway back to your workplace or sport. We work with you to help ensure you return feeling prepared, not just symptom-free.',
      link: '/services/return-to-work-and-sport',
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop'
    },
    {
      icon: <Bandage size={32} />,
      title: 'Sports Taping',
      desc: 'Protective and supportive taping techniques applied to help manage joint stress during activity and competition. Discuss with our team whether taping suits your situation.',
      link: '/services/sports-taping',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop'
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
      a: "Initial assessments are typically longer than follow-up sessions to allow time for a thorough assessment and programme design. Your physiotherapist will advise you on session length and frequency at your first appointment."
    },
    {
      q: "Is exercise rehabilitation suitable for older patients?",
      a: "Yes. Exercise rehabilitation is beneficial for patients of all ages. Your programme is designed around your individual capacity and goals, regardless of age or fitness level."
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
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop"
            alt="Rehab Factory Services"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">OUR SERVICES</span>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display tracking-tight leading-[0.9] uppercase mb-12">
              Everything we do <br />
              is built <br />
              <span className="text-secondary">around you.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl">
              From your first assessment to your return to sport, we work with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-section-gap bg-slate-50 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">OUR APPROACH</span>
              <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">
                Exercise first. <br /><span className="text-secondary">Always.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-500 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-2xl text-primary font-bold">
                At Rehab Factory, every service starts with a thorough clinical assessment. We take the time to understand your injury, your history, your goals, and your lifestyle before designing your programme.
              </p>
              <p>
                Hands-on treatment is part of the plan, but exercise rehabilitation is the foundation. We use manual therapy to reduce pain and restore movement so you can get back to the work that supports your recovery.
              </p>
              <p>
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
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">Our services.</h2>
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
                <div className="p-12">
                  <h3 className="text-3xl font-display font-bold text-primary mb-6 uppercase tracking-wide group-hover:text-secondary transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-poppins leading-tight mb-10 text-lg">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-3 text-secondary font-black text-xs tracking-[0.2em] uppercase group-hover:text-primary transition-colors duration-500">
                    LEARN MORE <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHY CHOOSE US</span>
                <h2 className="text-5xl md:text-8xl font-display tracking-tight leading-[0.9] uppercase">What makes us <br /><span className="text-secondary">different.</span></h2>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <p className="text-xl text-slate-400 font-poppins leading-tight">
                  Built for peak performance.<br />
                  Gym-based physiotherapy and rehabilitation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'We start with a proper assessment.',
                desc: 'Before any treatment begins, we take the time to understand you. Your injury, your history, your lifestyle, your goals. That assessment shapes everything that follows. We do not guess, and we do not rush.'
              },
              {
                title: 'Your programme is yours.',
                desc: 'Every patient at Rehab Factory receives an individualised exercise programme. There are no generic handouts or one-size-fits-all approaches. Your programme is designed for your body, your injury, and where you want to get to. It evolves as your recovery progresses.'
              },
              {
                title: 'The gym is our treatment room.',
                desc: 'Most physiotherapy clinics are built around a treatment table. We built a gym. That is where the real rehabilitation work happens, and it is where you will spend most of your time with us.'
              },
              {
                title: 'Full function, not just symptom relief.',
                desc: 'Our goal is not simply to reduce your pain. We work with you to rebuild strength, restore movement quality, and help you return to the activity, sport, or workplace you want to get back to.'
              },
              {
                title: 'We work with patients at every level.',
                desc: 'From junior athletes and weekend warriors to WorkCover patients and people managing long-term musculoskeletal conditions, we build programmes suited to where you are and what you need.'
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[25px] hover:border-secondary transition-all group reveal-fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-secondary text-primary flex items-center justify-center rounded-[25px] mb-8 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 uppercase tracking-wide leading-tight">{item.title}</h3>
                <p className="text-slate-400 font-poppins leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">YOUR FIRST VISIT</span>
              <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase mb-8">
                Here is what <br />happens when <br /><span className="text-secondary">you come in.</span>
              </h2>
              <p className="text-xl text-slate-500 font-poppins leading-tight">
                We've designed our process to be thorough, transparent, and focused entirely on your progress.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-12 reveal-fade-up">
              {[
                { step: '01', title: 'Your Initial Assessment', desc: 'Your first appointment is dedicated entirely to understanding you. We talk through your injury, your history, your goals, and your lifestyle. We assess your movement, strength, and function. Nothing is rushed.' },
                { step: '02', title: 'Your Programme is Designed', desc: 'Based on your assessment, your physiotherapist designs an individualised exercise programme. You will understand the reasoning behind every exercise and what each one is working towards.' },
                { step: '03', title: 'You Get to Work', desc: 'Sessions take place in the clinic gym. Your physiotherapist supervises and guides you through your programme, progressing it as you develop strength and confidence.' },
                { step: '04', title: 'We Reassess and Evolve', desc: 'Your programme is reviewed regularly. As your capacity improves, we adjust your programme to keep you progressing and working towards your goals.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 group">
                  <span className="text-4xl md:text-6xl font-display font-black text-slate-100 group-hover:text-secondary/20 transition-colors shrink-0">{item.step}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-lg text-slate-500 font-poppins leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-section-gap bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="mb-20 reveal text-center">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHO WE SEE</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">Rehab Factory is for <br />anyone who wants to <br /><span className="text-secondary">recover properly.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Athletes at Every Level', desc: 'From junior club players to semi-professional and established competitors, we work with athletes recovering from injury and working towards a return to sport.' },
              { title: 'Active Adults and Weekend Warriors', desc: 'You do not need to be an elite athlete to benefit from a structured rehabilitation programme. If you are active and injured, we want to help you get back to the activities you enjoy.' },
              { title: 'WorkCover and TAC Patients', desc: 'We work with patients recovering from workplace and motor vehicle injuries, supporting a structured and sustainable return to full work capacity. We work alongside your treating practitioners and case managers throughout the process.' },
              { title: 'People Managing Chronic Conditions', desc: 'If you are living with ongoing musculoskeletal pain or a long-term condition, we work with you to improve your movement, build strength, and support a better quality of daily life.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[25px] border border-slate-200 hover:border-secondary/30 transition-all reveal-fade-up group">
                <div className="w-14 h-14 bg-slate-50 rounded-[25px] flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all text-secondary">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-wide leading-tight">{item.title}</h3>
                <p className="text-lg text-slate-500 font-poppins leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-section-gap bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-4">FAQS</span>
              <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">Common questions <br /><span className="text-secondary">about our services.</span></h2>
            </div>

            <div className="space-y-2 reveal-fade-up">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-100 rounded-[20px] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 px-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base font-display font-bold text-primary uppercase tracking-wide">{faq.q}</span>
                    {openFaq === i ? <Minus className="text-secondary" /> : <Plus className="text-secondary" />}
                  </button>
                  {openFaq === i && (
                    <div className="p-6 pt-0 bg-slate-50/50">
                      <p className="text-base text-slate-500 font-poppins leading-tight">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure Where to Start */}
      <section className="py-cta-gap bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto reveal text-center">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">GETTING STARTED</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase mb-10">Not sure which <br />service is <br /><span className="text-secondary">right for you?</span></h2>
            <p className="text-2xl text-slate-500 font-poppins font-normal leading-tight mb-16 max-w-2xl mx-auto">
              Book an initial assessment and we will work with you to understand your needs and design the right plan. You do not need to know exactly what you need before you come in. That is what the assessment is for.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/10 text-center"
              >
                BOOK AN ASSESSMENT
              </a>
              <Link to="/contact" className="border-2 border-primary text-primary px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all text-center">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Services;
