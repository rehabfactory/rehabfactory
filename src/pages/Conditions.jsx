import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Activity, 
  ShieldCheck, 
  Zap,
  Dumbbell,
  HeartPulse,
  Briefcase
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import returnToSport from '../assets/return-to-sport.webp';
import individualisedExercise from '../assets/individualised-exercise.webp';
import manualTherapyImg from '../assets/manual-therapy.webp';
import sportsTaping from '../assets/sports-taping.webp';
import workcoverRehabImg from '../assets/workcover-rehab.webp';
import fractureRehabImg from '../assets/fracture-rehab.webp';
import chronicPainImg from '../assets/chronic-pain.webp';
import postSurgicalImg from '../assets/post-surgical.webp';
import conditionsHeroImg from '../assets/conditions-we-treat.webp';

gsap.registerPlugin(ScrollTrigger);

const Conditions = () => {
  const stripsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we are on mobile - the CSS disables transform on mobile, so we shouldn't GSAP it if it fights the CSS.
      // But ScrollTrigger can handle it. We will just animate normally.
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 769px)", () => {
        stripsRef.current.forEach((strip, index) => {
          if (!strip) return;
          
          const xOffset = index % 2 === 0 ? '-15vw' : '15vw';
          
          gsap.fromTo(strip, 
            { x: xOffset },
            {
              x: '0vw',
              ease: 'none',
              scrollTrigger: {
                trigger: strip.parentElement, // .service-strip-wrapper
                start: 'top bottom', 
                end: 'center center',
                scrub: 1,
              }
            }
          );
        });
      });
      
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => el.classList.add('active'),
          once: true
        });
      });
    });
    
    return () => ctx.revert();
  }, []);

  const conditionList = [
    { 
      num: '01',
      title: 'Sports Injuries', 
      tag: 'Rehabilitation',
      icon: Activity,
      desc: 'We work with patients recovering from sprains, muscle strains, ligament tears, and other sports-related injuries.',
      features: ['Acute sprain management', 'Ligament tear recovery', 'Return-to-sport planning'],
      img: returnToSport 
    },
    { 
      num: '02',
      title: 'Knee Injuries', 
      tag: 'Lower Limb',
      icon: Target,
      desc: 'Including ACL and PCL injuries, meniscus-related conditions, patellofemoral pain, and post-surgical knee rehabilitation.', 
      features: ['ACL & PCL protocols', 'Meniscus conservation', 'Patellofemoral pain'],
      img: individualisedExercise 
    },
    { 
      num: '03',
      title: 'Back & Neck Pain', 
      tag: 'Spinal Health',
      icon: ShieldCheck,
      desc: 'We work with patients managing acute and persistent back and neck pain, including disc-related presentations.', 
      features: ['Acute spasm relief', 'Disc-related management', 'Postural strengthening'],
      img: manualTherapyImg 
    },
    { 
      num: '04',
      title: 'Shoulder Injuries', 
      tag: 'Upper Limb',
      icon: Zap,
      desc: 'Including rotator cuff injuries, shoulder impingement presentations, and instability following dislocation.', 
      features: ['Rotator cuff repair', 'Impingement syndromes', 'Dislocation stability'],
      img: sportsTaping 
    },
    { 
      num: '05',
      title: 'Fracture Rehab', 
      tag: 'Recovery',
      icon: Dumbbell,
      desc: 'We work with patients in the post-immobilisation phase to support restoration of strength, movement, and function.', 
      features: ['Post-immobilisation', 'Restoration of strength', 'Restoration of movement'],
      img: fractureRehabImg 
    },
    { 
      num: '06',
      title: 'Chronic Pain', 
      tag: 'Management',
      icon: HeartPulse,
      desc: 'We work with patients managing ongoing musculoskeletal pain to support improved movement and quality of daily life.', 
      features: ['Ongoing pain support', 'Improved movement', 'Quality of life focus'],
      img: chronicPainImg 
    },
    { 
      num: '07',
      title: 'Post-Surgical', 
      tag: 'Orthopaedic',
      icon: Target,
      desc: 'Following orthopaedic surgery, we work with patients to rebuild strength and function through structured exercise rehabilitation.', 
      features: ['Orthopaedic recovery', 'Rebuild strength', 'Structured rehab'],
      img: postSurgicalImg 
    },
    { 
      num: '08',
      title: 'Workplace Injuries', 
      tag: 'Occupational',
      icon: Briefcase,
      desc: 'We work with WorkCover and TAC patients to support recovery and a graded return to work.', 
      features: ['WorkCover support', 'TAC patients', 'Graded return to work'],
      img: workcoverRehabImg 
    }
  ];

  return (
    <div className="conditions-page bg-[#0a0a0a] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col justify-center pt-40 pb-64 lg:pb-72 bg-[#0a0a0a] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={conditionsHeroImg}
            alt="Conditions We Help With" 
            className="w-full h-full object-cover opacity-100 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container relative z-10 mb-8 lg:mb-16">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[#E49E73] text-[12px] md:text-[15px] font-black tracking-[0.4em] uppercase font-poppins block mb-8 md:mb-10">
              WHAT WE TREAT
            </span>
            <h1 className="text-[50px] leading-[0.95] md:text-8xl lg:text-[100px] font-display font-bold tracking-normal uppercase mb-8 md:mb-12">
              Conditions <br />
              we manage.
            </h1>
            <p className="text-xl md:text-3xl text-white/80 font-poppins font-normal leading-relaxed max-w-3xl">
              From acute sports injuries to chronic pain and post-surgical rehabilitation. If it affects how you move, we want to help.
            </p>
          </div>
        </div>

        {/* Icon Navigation Menu - Inside Hero */}
        <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent pt-32 pb-8 lg:pb-12 border-b border-white/5">
          <div className="container max-w-7xl">
            <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-10">
              {conditionList.map((item, idx) => {
                const IconComponent = item.icon;
                const sectionId = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                
                return (
                  <a 
                    key={`nav-${idx}`}
                    href={`#${sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(sectionId);
                      if (el) {
                         const y = el.getBoundingClientRect().top + window.scrollY - 100;
                         window.scrollTo({top: y, behavior: 'smooth'});
                      }
                    }}
                    className="flex flex-col items-center justify-center gap-4 group cursor-pointer"
                  >
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-white/10 bg-black/30 backdrop-blur-md flex items-center justify-center text-[#E49E73] group-hover:bg-[#E49E73] group-hover:text-primary group-hover:border-[#E49E73] transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(228,158,115,0.3)]">
                      <IconComponent size={36} className="lg:w-10 lg:h-10" />
                    </div>
                    <span className="text-white/70 font-poppins text-base md:text-base font-normal uppercase tracking-widest text-center group-hover:text-[#E49E73] transition-colors leading-snug px-2">
                      {item.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stacked Strips Section */}
      <div className="services-stacked services-stacked-theme border-t border-white/5">
        <div className="services-strips-container">
          {conditionList.map((item, idx) => {
            const IconComponent = item.icon;
            const isEven = idx % 2 === 0;
            const stripClass = isEven ? 'strip-even' : 'strip-odd';
            const sectionId = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            return (
              <div key={idx} id={sectionId} className="service-strip-wrapper">
                <div 
                  ref={el => stripsRef.current[idx] = el}
                  className={`service-strip ${stripClass}`}
                >
                  {/* Background Image */}
                  <img src={item.img} alt={item.title} className="strip-bg-img grayscale-[20%]" />
                  
                  {/* Overlays mapped from CSS */}
                  <div className="strip-overlay"></div>
                  <div className="strip-dark-fade"></div>

                  {/* Inner Content Container */}
                  <div className="strip-content-inner">
                    
                    {/* Top Row: Icon + Badge */}
                    <div className="strip-top-row">
                      <div className="strip-icon">
                        <IconComponent />
                      </div>
                      <span className="strip-tag">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="strip-title">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="strip-desc">
                      {item.desc}
                    </p>

                    {/* Bulleted List */}
                    <ul className="strip-bullets">
                      {item.features.map((feature, i) => (
                        <li key={i}>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Huge Watermark Number */}
                    <div className="strip-num">
                      {item.num}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="container relative z-10 reveal">
          <span className="text-secondary text-[12px] uppercase tracking-[0.4em] font-bold block mb-6">NEXT STEPS</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-primary uppercase tracking-normal leading-[0.9] mb-10">
            Start your <br />recovery.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white hover:bg-secondary hover:text-white px-6 py-3 font-display font-normal text-base uppercase tracking-widest transition-colors duration-300 rounded-full shadow-2xl"
            >
              BOOK AN ASSESSMENT
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 font-display font-normal text-base uppercase tracking-widest transition-colors duration-300 rounded-full"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Conditions;
