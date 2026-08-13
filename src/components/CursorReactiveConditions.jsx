import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldCheck, Target, Zap } from 'lucide-react';

const CursorReactiveConditions = () => {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const canvasRef = useRef(null);
  const btnRef = useRef(null);
  const cardsRef = useRef([]);

  // Glow Effect
  useEffect(() => {
    let mx = 0, my = 0, gx = 0, gy = 0;
    let animationFrameId;
    let isHovering = false;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const handleMouseEnter = () => isHovering = true;
    const handleMouseLeave = () => isHovering = false;

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    const moveGlow = () => {
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${gx - 250}px, ${gy - 250}px)`;
        glowRef.current.style.opacity = isHovering ? 1 : 0.4;
      }
      animationFrameId = requestAnimationFrame(moveGlow);
    };
    moveGlow();

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Tilt Cards
  const handleCardMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;

    const spot = card.querySelector('.spotlight');
    if (spot) {
      spot.style.background = `radial-gradient(circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(202,152,108,0.15) 0%, transparent 60%)`;
      spot.style.opacity = 1;
    }
  };

  const handleCardMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = `perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)`;
    const spot = card.querySelector('.spotlight');
    if (spot) {
      spot.style.background = `radial-gradient(circle at 50% 50%, rgba(202,152,108,0.05) 0%, transparent 60%)`;
      spot.style.opacity = 0.6;
    }
  };

  // Magnetic Button
  const handleBtnMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const bx = (e.clientX - cx) * 0.3;
    const by = (e.clientY - cy) * 0.3;
    btn.style.transform = `translate(${bx}px, ${by}px)`;
  };
  
  const handleBtnMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = `translate(0px, 0px)`;
  };

  // Click Ripples
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    
    const ctx = canvas.getContext('2d');
    let ripples = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleClick = (e) => {
      const rect = section.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        r: 0,
        alpha: 0.5
      });
    };
    section.addEventListener('click', handleClick);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = ripples.length - 1; i >= 0; i--) {
        let rip = ripples[i];
        rip.r += 4;
        rip.alpha -= 0.006;
        if (rip.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(202, 152, 108, ${rip.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      section.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const conditions = [
    { title: 'Sports Injuries', desc: 'These can include soft tissue tears and strains, joint instability, fractures, tendon overuse and many more. For athletes looking to elevate their performance and reduce injury risk, we provide individualised assessment and targeted exercise programs designed around the demands of your sport.', icon: <Zap size={40} /> },
    { title: 'Musculoskeletal Injuries', desc: 'Whether it be an overuse injury that you have been neglecting at work, a fall, an accident, or sudden pain with no apparent cause, we can help assess and guide your management with personalised goals and timelines.', icon: <Activity size={40} /> },
    { title: 'Chronic and Ongoing Conditions', desc: 'Degenerative conditions are common and often irreversible, but pain and function can be improved. We help with old and persisting injuries that have become a part of your life.', icon: <ShieldCheck size={40} /> }
  ];

  return (
    <section ref={sectionRef} className="py-section-gap bg-[#08080a] text-[#eae7e2] relative overflow-hidden font-poppins border-y border-[#1e1e22]">
      {/* Glow */}
      <div 
        ref={glowRef} 
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 transition-opacity duration-300 opacity-0"
        style={{ background: 'radial-gradient(circle, rgba(202,152,108, 0.08) 0%, transparent 70%)', willChange: 'transform' }}
      ></div>
      
      {/* Ripple Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="container relative z-10">
        <div className="mb-16">
          <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase block mb-6">HOW WE CAN HELP</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-normal leading-[1.1] uppercase mb-8 md:mb-12">
            Conditions & challenges <br className="hidden md:block" />we treat.
          </h2>
        </div>

        <div className="relative">
          {/* Ambient Grid Glow */}
          <div className="absolute inset-0 bg-secondary/5 blur-[120px] rounded-full pointer-events-none z-0 transform scale-105"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {conditions.map((item, i) => (
              <div 
                key={i} 
                ref={el => cardsRef.current[i] = el}
                onMouseMove={(e) => handleCardMouseMove(e, i)}
                onMouseLeave={() => handleCardMouseLeave(i)}
                className="bg-[#111114] border border-[#1e1e22] rounded-[20px] p-8 md:p-12 relative overflow-hidden transition-colors duration-300 hover:border-[#2a2a30]"
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
              >
                <div 
                className="spotlight absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[20px]"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(202,152,108,0.05) 0%, transparent 60%)', opacity: 0.6 }}
              ></div>
                
                <div className="w-20 h-20 rounded-[16px] bg-secondary/10 flex items-center justify-center text-secondary mb-6 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider leading-tight mb-4 relative z-10">{item.title}</h3>
                <p className="text-[#88888b] font-normal leading-relaxed text-lg relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center flex justify-center">
          <div 
            ref={btnRef}
            onMouseMove={handleBtnMouseMove}
            onMouseLeave={handleBtnMouseLeave}
            className="inline-block"
            style={{ transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)', willChange: 'transform' }}
          >
            <Link to="/conditions" className="inline-flex items-center gap-3 bg-secondary text-white px-6 py-3 rounded-[14px] font-normal text-base tracking-[0.2em] uppercase transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(202,152,108,0.25)] hover:bg-[#b0845a]">
              VIEW ALL CONDITIONS WE WORK WITH <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursorReactiveConditions;
