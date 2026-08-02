import { useEffect } from 'react';
import CTA from '../components/CTA';
import { Link } from 'react-router-dom';
import { Target, Zap, ShieldCheck } from 'lucide-react';
import aboutHero from '../assets/about_hero.webp';
import aboutTrenches from '../assets/about_trenches.webp';

const About = () => {
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
    <div className="about-page overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-48 lg:pt-64 pb-32 lg:pb-48 bg-primary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHero} 
            alt="About Rehab Factory" 
            className="w-full h-full object-cover opacity-100"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6 md:mb-10">ABOUT US</span>
            <h1 className="text-4xl md:text-8xl lg:text-[100px] font-display tracking-normal leading-[0.95] md:leading-[0.9] uppercase mb-4 md:mb-12">
              Meet the Team <br />
              Behind the <br className="hidden md:block" />
              <span className="text-secondary">Rehab.</span>
            </h1>
            <p className="text-lg md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-2xl">
              We are physiotherapists who believe in doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section-gap bg-slate-50 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-4 md:mb-6">OUR STORY</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-normal leading-[0.9] uppercase">
                A different <br />kind of <br /><span className="text-secondary">physiotherapy</span> <br />clinic.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 md:space-y-8 text-slate-500 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-lg md:text-2xl text-primary font-semibold leading-tight">
                Rehab Factory Physiotherapy was founded on a simple belief: exercise is medicine. Most clinics focus on the treatment bed. We built a gym.
              </p>
              <p className="text-base md:text-lg">
                Our approach centres on individualised exercise rehabilitation. We use hands-on therapy to reduce pain and restore movement, then we get patients working. Hard, structured, and goal-driven. Because the most sustainable recoveries are built on the gym floor.
              </p>
              <p className="text-base md:text-lg">
                Based in Narre Warren, we work with patients of all ages and activity levels, from junior athletes and weekend sport participants to WorkCover patients and people managing long-term musculoskeletal conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team (Placeholder for Profiles) */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="mb-12 md:mb-20 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-4 md:mb-6">THE TEAM</span>
            <h2 className="text-4xl md:text-7xl font-display text-primary tracking-normal leading-[0.9] uppercase mb-2 md:mb-6">Your practitioners.</h2>
            <p className="text-lg md:text-xl text-slate-500 font-poppins font-normal leading-relaxed">
              All practitioners are registered with the Physiotherapy Board of Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
            {[
              {
                name: 'Abdelrahman Elsamman',
                role: 'Physiotherapist',
                img: '/team/practitioner-abdelrahman-elsamman.webp',
                bioParagraphs: [
                  'Abdelrahman is a physiotherapist who completed his studies at Monash and Swinburne University, with additional qualifications in strength and conditioning through the Australian Strength and Conditioning Association. He works closely with local and semi-professional athletes across a range of sports, specialising in ankle, hamstring, knee, tendon and hip injuries. Abdelrahman also supports patients through work injuries, vehicle accidents, DVA and NDIS, helping them restore function and return to full capacity.'
                ],
                servicesTitle: 'His services include:',
                services: [
                  'Detailed exercise programs with progressive return to sport and work capacity pathways',
                  'Manual therapy',
                  'Dry needling',
                  'Mobilisations and manipulations',
                  'Taping'
                ],
                footerParagraph: 'Outside the clinic, Abdelrahman referees basketball professionally, plays the sport himself and holds a strong personal interest in strength and conditioning.'
              },
              {
                name: 'Amr Elsamman',
                role: 'Physiotherapist',
                img: '/team/practitioner-amr-elsamman.webp',
                bioParagraphs: [
                  'Amr is a physiotherapist with a multidisciplinary background spanning biomedical sciences, strength and conditioning, sports training and disability studies. With a strong focus on sports and musculoskeletal injuries, he works with athletes, both junior and senior, suffering from various injuries. Amr also works with people who have had road accidents, work injuries, disabilities under NDIS and DVA. Amr is trilingual, fluent in English, Arabic and Japanese, allowing him to connect meaningfully with patients from diverse backgrounds.',
                  'Amr enjoys spending time in the gym working closely with his patients helping them return to work, sport and everyday life at their pre-injury level. He empowers patients with the knowledge, tools and strategies to confidently self-manage their long-term health and wellbeing.'
                ],
                footerParagraph: 'Outside the clinic, Amr is an active basketball player and a Big V basketball referee, travelling across Victoria on weekends to officiate games.'
              }
            ].map((practitioner, i) => (
              <div key={i} className="group reveal-fade-up flex flex-col h-full" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="aspect-[4/5] bg-slate-100 mb-4 md:mb-8 rounded-[25px] overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-700">
                   <img src={practitioner.img} alt={practitioner.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <h3 className="text-xl md:text-3xl font-display font-bold text-primary mb-1 md:mb-2 uppercase tracking-wide group-hover:text-secondary transition-colors leading-tight">{practitioner.name}</h3>
                <p className="text-secondary font-normal text-xs md:text-sm tracking-[0.25em] uppercase mb-3 md:mb-6">{practitioner.role}</p>
                <div className="text-slate-500 font-poppins leading-relaxed text-base md:text-lg space-y-4 flex-grow">
                  {practitioner.bioParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  
                  {practitioner.services && (
                    <div className="mt-6">
                      <p className="font-bold text-primary mb-3 font-display uppercase tracking-[0.18em] text-sm md:text-base">{practitioner.servicesTitle}</p>
                      <ul className="space-y-3 pl-1">
                        {practitioner.services.map((service, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-secondary mt-2 shrink-0 block w-2 h-2 rounded-full bg-secondary"></span>
                            <span className="text-slate-500 text-sm md:text-base leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {practitioner.footerParagraph && (
                    <p className="pt-6 mt-6 border-t border-slate-100 italic text-slate-400 text-sm md:text-base">{practitioner.footerParagraph}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gym Space */}
      <section className="py-section-gap bg-primary text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-4 md:mb-6">OUR SPACE</span>
              <h2 className="text-4xl md:text-7xl font-display text-white tracking-normal leading-[0.9] uppercase mb-4 md:mb-8">Where Recovery <br />Gets to Work.</h2>
              <p className="text-lg md:text-2xl text-slate-400 font-poppins font-normal leading-relaxed mb-6 md:mb-12">
                Our clinic is built around a fully equipped gym. This is where the real rehabilitation happens.
              </p>
              <div className="border-l-4 border-secondary pl-6 md:pl-8 py-3 md:py-4">
                <blockquote className="text-xl md:text-3xl font-display font-medium text-white uppercase tracking-normal leading-relaxed italic">
                  "Returning to function is a milestone, not the finish line."
                </blockquote>
              </div>
            </div>
            <div className="aspect-video bg-slate-800 rounded-[25px] overflow-hidden reveal shadow-2xl border border-white/5">
               <img src={aboutTrenches} alt="Gym Space" className="w-full h-full object-cover opacity-50" />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary opacity-5 blur-[250px] rounded-full pointer-events-none"></div>
      </section>

      {/* Our Values */}
      <section className="py-section-gap bg-white">
        <div className="container">
          <div className="mb-12 md:mb-24 reveal text-center max-w-3xl mx-auto">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-4 md:mb-6">WHAT WE STAND FOR</span>
            <h2 className="text-4xl md:text-7xl font-display text-primary tracking-normal leading-[0.9] uppercase">The way we work.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { icon: <Zap size={32} className="text-secondary mb-4 md:mb-8 mx-auto" />, title: 'Work Hard', desc: 'We do not believe in passive recovery. Every session is purposeful, progressive, and built around your goals.' },
              { icon: <Target size={32} className="text-secondary mb-4 md:mb-8 mx-auto" />, title: 'Be Specific', desc: 'Generic Programs produce generic results. Every patient gets a plan designed around their body, their injury, and their timeline.' },
              { icon: <ShieldCheck size={32} className="text-secondary mb-4 md:mb-8 mx-auto" />, title: 'Aim Higher', desc: 'Our goal is not just to get you back to where you were. We aim to work with you to build towards something stronger.' }
            ].map((value, i) => (
              <div key={i} className="text-center reveal-fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl md:text-3xl font-display font-bold text-primary mb-2 md:mb-6 uppercase tracking-wide leading-tight">{value.title}</h3>
                <p className="text-slate-500 font-poppins font-normal leading-relaxed text-base md:text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />
    </div>
  );
};

export default About;
