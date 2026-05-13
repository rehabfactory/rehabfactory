import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
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
    <div className="contact-page overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-48 lg:pt-64 pb-32 lg:pb-48 bg-primary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Rehab Factory" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">ENQUIRY</span>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display tracking-tight leading-[0.9] uppercase mb-12">
              Book your <br />
              <span className="text-secondary">assessment.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl">
              Ready to start your recovery? Get in touch and let our team build your treatment plan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-16 reveal">
              <div>
                <h3 className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">CLINIC DETAILS</h3>
                <div className="space-y-12">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-2">LOCATION</span>
                      <p className="text-xl font-display font-bold text-primary uppercase leading-tight">
                        9/25-35 Cranbourne Road,<br />Narre Warren VIC 3805
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                      <Phone size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-2">PHONE</span>
                      <p className="text-xl font-display font-bold text-primary uppercase leading-tight">
                        (03) 9704 6111
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                      <Mail size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-2">EMAIL</span>
                      <p className="text-xl font-display font-bold text-primary uppercase leading-tight">
                        admin@rehabfactory.com.au
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">CLINIC HOURS</h3>
                <div className="space-y-4">
                  {[
                    { day: 'MON - FRI', hours: '8:00 AM – 7:00 PM' },
                    { day: 'SATURDAY', hours: '9:00 AM – 1:00 PM' },
                    { day: 'SUNDAY', hours: 'CLOSED' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-slate-200 last:border-0">
                      <span className="font-poppins font-black text-[11px] tracking-widest uppercase text-slate-400">{item.day}</span>
                      <span className="font-display font-bold text-primary uppercase tracking-wide">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 reveal-fade-up">
              <div className="bg-white p-10 md:p-16 rounded-sm border border-slate-200 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -translate-y-16 translate-x-16 rounded-full blur-3xl"></div>
                
                <h3 className="text-4xl font-display font-bold text-primary mb-12 uppercase tracking-tight">Send an enquiry</h3>
                
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">FULL NAME</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-100 p-5 focus:outline-none focus:border-secondary transition-colors font-poppins" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">PHONE NUMBER</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-100 p-5 focus:outline-none focus:border-secondary transition-colors font-poppins" placeholder="Your Phone" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">EMAIL ADDRESS</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-100 p-5 focus:outline-none focus:border-secondary transition-colors font-poppins" placeholder="Your Email" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">PREFERRED SERVICE</label>
                    <select className="w-full bg-slate-50 border border-slate-100 p-5 focus:outline-none focus:border-secondary transition-colors font-poppins appearance-none">
                      <option>Select a service</option>
                      <option>Individualised Exercise Therapy</option>
                      <option>Manual Therapy</option>
                      <option>Return to Work and Sport</option>
                      <option>Sports Taping</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">YOUR MESSAGE</label>
                    <textarea rows="5" className="w-full bg-slate-50 border border-slate-100 p-5 focus:outline-none focus:border-secondary transition-colors font-poppins" placeholder="How can we help?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary text-white py-6 rounded-[25px] font-black text-sm tracking-[0.3em] uppercase hover:bg-secondary hover:text-primary transition-all flex items-center justify-center gap-4 shadow-xl">
                    SUBMIT ENQUIRY <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full reveal">
        <iframe 
          src="https://maps.google.com/maps?q=9/25-35%20Narre%20Warren%20-%20Cranbourne%20Road&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
