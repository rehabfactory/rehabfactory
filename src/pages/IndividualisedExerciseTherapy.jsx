import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroWebp from '../assets/hero.webp';
import indivWebp from '../assets/individualised-exercise.webp';
import diffHeroWebp from '../assets/the-difference-hero.webp';
import premiumHeroWebp from '../assets/hero_premium.webp';
import aboutHeroWebp from '../assets/about_hero.webp';

gsap.registerPlugin(ScrollTrigger);

const techniques = [
  { num: '01', title: 'Strength Training', focus: 'Building robust muscle and tendon capacity to withstand daily loads and athletic demands.', img: indivWebp },
  { num: '02', title: 'Mobility & Control', focus: 'Enhancing joint range of motion while ensuring active control throughout movement pathways.', img: diffHeroWebp },
  { num: '03', title: 'Motor Re-patterning', focus: 'Correcting dysfunctional movement habits that contribute to recurrent injuries or pain.', img: premiumHeroWebp },
  { num: '04', title: 'Load Management', focus: 'Strategic progression of exercise intensity to safely adapt tissues without flare-ups.', img: aboutHeroWebp },
];

const IndividualisedExerciseTherapy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero text animation on load (Smooth & Cinematic)
      gsap.from('.hero-anim', {
        opacity: 0,
        y: 60,
        duration: 1.5,
        stagger: 0.2,
        ease: 'expo.out'
      });

      // 2. APPLE-STYLE PINNED SCROLL
      const pinContainer = containerRef.current.querySelector('.pin-wrapper');
      const panels = gsap.utils.toArray('.slide-panel');
      
      // Initially show the first panel container
      gsap.set(panels[0], { autoAlpha: 1 });

      // First slide entrance animation
      ScrollTrigger.create({
        trigger: pinContainer,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(panels[0].querySelector('.anim-num'), { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
          gsap.to(panels[0].querySelector('.anim-title'), { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.15 });
          gsap.to(panels[0].querySelector('.anim-desc'), { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.3 });
          gsap.to(panels[0].querySelector('.indicator-anim'), { opacity: 1, duration: 1, delay: 0.4 });
          gsap.to(panels[0].querySelector('.slide-bg-img'), { scale: 1, duration: 2, ease: 'power3.out' });
        },
        once: true
      });

      // Scrubbed timeline for remaining slides
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainer,
          start: 'top top',
          end: '+=300%', // 3 transitions for 4 slides
          pin: true,
          scrub: true, // perfectly seamless to scroll
        }
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;

        const prevPanel = panels[i - 1];
        const startLabel = `transition-${i}`;
        tl.addLabel(startLabel);

        // Crossfade panels
        tl.to(prevPanel, { autoAlpha: 0, duration: 1 }, startLabel);
        tl.to(panel, { autoAlpha: 1, duration: 1 }, startLabel);

        // Slide up text of current panel
        const num = panel.querySelector('.anim-num');
        const title = panel.querySelector('.anim-title');
        const desc = panel.querySelector('.anim-desc');
        const img = panel.querySelector('.slide-bg-img');
        const indicator = panel.querySelector('.indicator-anim');

        tl.to(num, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, startLabel + "+=0.2");
        tl.to(title, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, startLabel + "+=0.3");
        tl.to(desc, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, startLabel + "+=0.4");
        tl.to(indicator, { opacity: 1, duration: 0.5 }, startLabel + "+=0.4");

        // Subtle scale effect on the image
        tl.to(img, { scale: 1, duration: 2, ease: "power2.out" }, startLabel);

        if (i < panels.length - 1) {
            tl.to({}, { duration: 0.8 }); // add a pause to read before the next transition
        }
      });

      setTimeout(() => ScrollTrigger.refresh(), 200);
    }, containerRef);

    // Standard Intersection Observer for non-pinned sections
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
      ctx.revert();
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden bg-primary">

      {/* ── 1. HERO SECTION ───────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img src={heroWebp} alt="Exercise Therapy Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 md:pt-32">
          <div className="max-w-3xl">
            <span className="hero-anim text-[13px] md:text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6 drop-shadow-md">OUR SERVICES</span>
            <h1 className="hero-anim font-display font-bold leading-[0.85] tracking-normal uppercase text-white mb-8" style={{ fontSize: 'clamp(48px, 8vw, 130px)' }}>
              Individualised<br /><span className="text-secondary">Exercise.</span>
            </h1>
            <p className="hero-anim text-2xl md:text-3xl text-white/80 font-poppins font-light leading-relaxed max-w-2xl mb-12 drop-shadow-lg">
              Custom-built rehabilitation programs conducted in our clinic gym to rebuild strength and restore functional capacity.
            </p>
            <a href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location" target="_blank" rel="noopener noreferrer"
              className="hero-anim inline-block bg-secondary text-white px-6 md:px-8 py-3 md:py-4 whitespace-nowrap font-normal text-base md:text-lg tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-colors rounded-[16px] shadow-2xl">
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. SEAMLESS TRANSITION BAND ──────────────────── */}
      <section className="bg-primary py-24 md:py-32 relative z-20 border-b border-white/5">
        <div className="container reveal">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-[13px] md:text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-8">THE REHAB FACTORY WAY</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-[100px] uppercase tracking-normal leading-[0.85] text-white mb-10">
              Four Stages of <br className="hidden md:block" />
              <span className="text-secondary">Conditioning.</span>
            </h2>
            <p className="text-slate-400 font-poppins text-xl md:text-3xl leading-tight font-normal max-w-3xl mx-auto mb-16">
              Passive therapy only takes you so far. Active, progressive exercise is the only way to build lasting resilience.
            </p>
            <div className="inline-flex flex-col items-center justify-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-xs tracking-[0.3em] uppercase font-bold text-white">
                SCROLL TO EXPLORE
              </span>
              <div className="w-[1px] h-[40px] bg-secondary"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. APPLE-STYLE PINNED SCROLL ─────────────────────── */}
      <section className="pin-wrapper relative h-screen w-full bg-primary overflow-hidden">
        {techniques.map((t, idx) => {
          return (
            <div key={idx} className="slide-panel absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden invisible opacity-0" style={{ zIndex: idx + 10 }}>
              <div className="absolute inset-0 overflow-hidden">
                <img src={t.img} alt={t.title} className="slide-bg-img w-full h-full object-cover scale-110" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
              </div>

              {/* Constrained layout for text block */}
              <div className="relative z-10 flex w-full h-full items-center px-6 md:px-16 max-w-[1400px] mx-auto pt-24 md:pt-0">
                <div className={`w-full lg:w-[55%] flex flex-col ${idx % 2 === 0 ? 'mr-auto items-start text-left' : 'ml-auto items-end text-right'}`}>
                  <div className="anim-num font-display font-black text-secondary select-none mb-0 leading-none drop-shadow-lg opacity-0 whitespace-nowrap"
                    style={{ 
                      fontSize: 'clamp(100px, 15vw, 250px)', 
                      lineHeight: 0.82,
                      color: 'transparent',
                      WebkitTextStroke: '2px currentColor',
                      transform: `translateY(60px)`
                    }}>
                    {t.num}
                  </div>
                  <h2 className={`anim-title font-display font-bold text-white uppercase tracking-normal mt-2 mb-6 drop-shadow-md opacity-0 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}
                    style={{ 
                      fontSize: 'clamp(42px, 5.5vw, 90px)', 
                      lineHeight: 0.9,
                      transform: `translateY(40px)`
                    }}>
                    {t.title}
                  </h2>
                  <p className={`anim-desc text-white/80 font-poppins text-lg md:text-xl leading-relaxed drop-shadow-lg opacity-0 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}
                    style={{ transform: `translateY(30px)` }}>
                    {t.focus}
                  </p>
                </div>
              </div>

              {/* LARGER PROGRESS INDICATOR */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 md:gap-8 z-10 bg-black/40 backdrop-blur-md px-6 py-3 md:px-10 md:py-5 rounded-full border border-white/10 indicator-anim opacity-0">
                {techniques.map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 md:gap-4 text-base md:text-lg font-poppins transition-all duration-500 ${i === idx ? 'text-secondary font-bold' : 'text-white/40 font-medium'}`}>
                    <span>{item.num}</span>
                    {i === idx && <span className="hidden md:inline uppercase text-xs md:text-sm tracking-[0.2em] whitespace-nowrap">{item.title}</span>}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ── 4. CTA BRIDGE ─────────────────────────────────────── */}
      <section className="bg-[#fcfaf8] pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container reveal-fade-up">
          <div className="max-w-5xl mx-auto bg-primary rounded-[32px] md:rounded-[64px] p-10 md:p-20 lg:p-24 text-center shadow-[0_30px_80px_rgba(0,0,0,0.2)] overflow-hidden relative">
            
            {/* Subtle glow effects inside the card */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-[13px] md:text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">CLINICAL STRENGTH</span>
              <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl uppercase tracking-normal leading-[0.9] mb-8 text-white">
                We bridge the gap between<br />treatment and training.
              </h2>
              <p className="text-white/70 font-poppins text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                Utilise our purpose-built rehab facility under the direct supervision of experienced physiotherapists.
              </p>
              <a href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-secondary text-white px-6 md:px-8 py-3 md:py-4 whitespace-nowrap font-normal text-base md:text-lg tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-colors rounded-[16px] shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300">
                BOOK AN APPOINTMENT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OTHER SERVICES (NICE CARDS) ────────────────────── */}
      <section className="bg-[#fcfaf8] py-24 md:py-32 border-t border-black/10">
        <div className="container">
          <div className="mb-16 text-center reveal">
            <span className="text-[13px] md:text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-4">EXPLORE MORE</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-primary leading-[0.9] uppercase tracking-normal">Other services.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 reveal-fade-up">
            {[
              { title: 'Manual Therapy', link: '/services/manual-therapy', desc: 'Hands-on techniques that reduce pain and restore movement.' },
              { title: 'Return to Function', link: '/services/return-to-work-and-sport', desc: 'A structured, staged pathway back to your workplace or sport.' },
              { title: 'Education', link: '/services/education', desc: 'Empowering you with knowledge about your body and recovery.' }
            ].map((item, i) => (
              <Link to={item.link} key={i} className="group p-10 md:p-12 flex flex-col justify-between bg-white rounded-[32px] border border-black/5 shadow-xl shadow-black/5 hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-primary uppercase tracking-wide mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                  <p className="text-primary/70 font-poppins text-sm leading-relaxed mb-10">{item.desc}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-primary text-[10px] tracking-[0.25em] uppercase font-poppins font-bold group-hover:text-secondary transition-colors relative z-10">
                  VIEW SERVICE <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndividualisedExerciseTherapy;
