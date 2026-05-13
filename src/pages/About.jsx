import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Zap, ShieldCheck } from 'lucide-react';

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
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2000&auto=format&fit=crop" 
            alt="About Rehab Factory" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">ABOUT US</span>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display tracking-tight leading-[0.9] uppercase mb-12">
              Meet the Team <br />
              Behind the <br />
              <span className="text-secondary">Rehab.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-2xl">
              We are physiotherapists who believe in doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section-gap bg-slate-50 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">OUR STORY</span>
              <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight leading-[0.9] uppercase">
                A different <br />kind of <br />physiotherapy <br />clinic.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-slate-500 font-poppins text-lg leading-tight reveal-fade-up">
              <p className="text-2xl text-primary font-bold">
                Rehab Factory Physiotherapy was founded on a simple belief: exercise is medicine. Most clinics focus on the treatment bed. We built a gym.
              </p>
              <p>
                Our approach centres on individualised exercise rehabilitation. We use hands-on therapy to reduce pain and restore movement, then we get patients working. Hard, structured, and goal-driven. Because the most sustainable recoveries are built on the gym floor.
              </p>
              <p>
                Based in Narre Warren, we work with patients of all ages and activity levels, from junior athletes and weekend sport participants to WorkCover patients and people managing long-term musculoskeletal conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team (Placeholder for Profiles) */}
      <section className="py-section-gap bg-white overflow-hidden">
        <div className="container">
          <div className="mb-20 reveal">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">THE TEAM</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase mb-6">Your practitioners.</h2>
            <p className="text-xl text-slate-500 font-poppins font-normal uppercase tracking-widest">
              All practitioners are registered with the Physiotherapy Board of Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 max-w-5xl">
            {[
              {
                name: 'Abdelrahman Elsamman',
                role: 'Physiotherapist',
                img: '/team/abdelrahman-elsamman.webp',
                bio: 'Specialising in musculoskeletal rehabilitation and sports-specific strength and conditioning. Abdelrahman focuses on high-performance recovery pathways and functional testing.'
              },
              {
                name: 'Amr Elsamman',
                role: 'Physiotherapist',
                img: '/team/amr-elsamman.webp',
                bio: 'Expertise in clinical assessment and individualised exercise therapy. Amr works closely with patients to bridge the gap between initial injury and returning to full physical capacity.'
              }
            ].map((practitioner, i) => (
              <div key={i} className="group reveal-fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="aspect-[4/5] bg-slate-100 mb-8 rounded-[25px] overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-700">
                   <img src={practitioner.img} alt={practitioner.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <h3 className="text-3xl font-display font-bold text-primary mb-2 uppercase tracking-wide group-hover:text-secondary transition-colors">{practitioner.name}</h3>
                <p className="text-secondary font-black text-sm tracking-widest uppercase mb-6">{practitioner.role}</p>
                <p className="text-slate-500 font-poppins leading-tight text-lg">{practitioner.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gym Space */}
      <section className="py-section-gap bg-primary text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">OUR SPACE</span>
              <h2 className="text-5xl md:text-7xl font-display text-white tracking-tight leading-[0.9] uppercase mb-8">Where Recovery <br />Gets to Work.</h2>
              <p className="text-2xl text-slate-400 font-poppins font-normal leading-tight mb-12">
                Our clinic is built around a fully equipped gym. This is where the real rehabilitation happens.
              </p>
              <div className="border-l-4 border-secondary pl-8 py-4">
                <blockquote className="text-3xl font-display font-bold text-white uppercase tracking-tight leading-tight italic">
                  "Returning to function is a milestone, not the finish line."
                </blockquote>
              </div>
            </div>
            <div className="aspect-video bg-slate-800 rounded-[25px] overflow-hidden reveal shadow-2xl border border-white/5">
               <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop" alt="Gym Space" className="w-full h-full object-cover opacity-50" />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary opacity-5 blur-[250px] rounded-full pointer-events-none"></div>
      </section>

      {/* Our Values */}
      <section className="py-section-gap bg-white">
        <div className="container">
          <div className="mb-24 reveal text-center max-w-3xl mx-auto">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">WHAT WE STAND FOR</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight leading-[0.9] uppercase">The way we work.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <Zap size={32} className="text-secondary mb-8" />, title: 'Work Hard', desc: 'We do not believe in passive recovery. Every session is purposeful, progressive, and built around your goals.' },
              { icon: <Target size={32} className="text-secondary mb-8" />, title: 'Be Specific', desc: 'Generic programmes produce generic results. Every patient gets a plan designed around their body, their injury, and their timeline.' },
              { icon: <ShieldCheck size={32} className="text-secondary mb-8" />, title: 'Aim Higher', desc: 'Our goal is not just to get you back to where you were. We aim to work with you to build towards something stronger.' }
            ].map((value, i) => (
              <div key={i} className="text-center reveal-fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-3xl font-display font-bold text-primary mb-6 uppercase tracking-wide leading-tight">{value.title}</h3>
                <p className="text-slate-500 font-poppins font-normal leading-tight">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-cta-gap bg-slate-50 border-t border-slate-200 text-center">
        <div className="container reveal">
          <h2 className="text-5xl md:text-8xl font-display text-primary tracking-tight leading-[0.9] uppercase mb-12">Come and see <br /><span className="text-secondary">the difference.</span></h2>
          <p className="text-2xl text-slate-500 font-poppins font-normal mb-16 max-w-2xl mx-auto">
            Book your first appointment at Rehab Factory Physiotherapy.
          </p>
          <a 
            href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all shadow-xl inline-block"
          >
            BOOK AN APPOINTMENT
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
