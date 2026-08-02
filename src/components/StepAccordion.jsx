import { useState } from 'react';

/**
 * StepAccordion
 * Vertical accordion image slider — collapsed strips that expand on hover/click
 * revealing a full background image + step content.
 *
 * Props:
 *   steps: Array of { num, label, title, subtitle, desc, focus, img }
 *   heading?: string — section heading (optional)
 *   sectionLabel?: string — small uppercase label above heading
 */
const StepAccordion = ({ steps, heading, sectionLabel }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-primary py-24 md:py-32 border-t border-white/10">
      <div className="container">

        {/* Section header */}
        {(sectionLabel || heading) && (
          <div className="mb-14">
            {sectionLabel && (
              <span className="text-[10px] font-normal tracking-[0.3em] text-secondary uppercase font-poppins block mb-5">
                {sectionLabel}
              </span>
            )}
            {heading && (
              <h2 className="font-display text-4xl md:text-6xl text-white leading-[0.9] uppercase tracking-normal max-w-2xl">
                {heading}
              </h2>
            )}
          </div>
        )}

        {/* Accordion panels */}
        <div className="flex flex-col gap-[6px]">
          {steps.map((step, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{
                  height: isActive ? '300px' : '64px',
                  transition: 'height 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                  flexShrink: 0,
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${step.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isActive ? 'scale(1.03)' : 'scale(1)',
                    transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />

                {/* Dark overlay — stronger on collapsed, gradient on expanded */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)'
                      : 'rgba(0,0,0,0.65)',
                    transition: 'background 0.4s ease',
                  }}
                />

                {/* Collapsed state: step num + title in a row */}
                <div
                  className="absolute inset-0 flex items-center px-6 z-10"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: 'opacity 0.25s ease',
                    pointerEvents: isActive ? 'none' : 'auto',
                  }}
                >
                  <span className="font-display font-bold text-secondary text-sm tracking-widest mr-5 shrink-0">
                    {step.num}
                  </span>
                  <span className="font-poppins text-white text-sm font-medium tracking-[0.06em] uppercase truncate">
                    {step.title}
                  </span>
                  {/* Expand caret */}
                  <span className="ml-auto text-white/30 group-hover:text-secondary transition-colors text-lg shrink-0">+</span>
                </div>

                {/* Expanded state: full content */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-8 z-10"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(12px)',
                    transition: isActive
                      ? 'opacity 0.4s ease 0.18s, transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.18s'
                      : 'opacity 0.2s ease, transform 0.2s ease',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  {/* Step num */}
                  <span className="font-display font-black text-secondary block mb-2" style={{ fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 1 }}>
                    {step.num}.
                  </span>
                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-4xl text-white uppercase tracking-normal leading-tight mb-2">
                    {step.title}
                  </h3>
                  {/* Subtitle */}
                  <p className="text-slate-300 font-poppins text-base md:text-lg font-medium mb-3 leading-snug max-w-lg">
                    {step.subtitle}
                  </p>
                  {/* Description */}
                  <p className="text-slate-400 font-poppins text-sm md:text-base leading-relaxed max-w-xl mb-5">
                    {step.desc}
                  </p>
                  {/* Focus tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.focus.map((f, i) => (
                      <span key={i} className="text-[11px] font-poppins text-slate-300 border border-white/15 px-3 py-1 rounded-full bg-white/5">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StepAccordion;
