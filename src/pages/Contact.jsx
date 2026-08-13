import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, AlertCircle } from 'lucide-react';

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Select a service',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please enter your full name.' });
      return;
    }
    if (!formData.email.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please enter your email address.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ submitting: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please enter your message.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service === 'Select a service' ? '' : formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Select a service',
          message: ''
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.error || 'There was a problem sending your message. Please try again.'
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Network error. Please check your connection and try again.'
      });
    }
  };


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
            <h1 className="text-4xl md:text-8xl lg:text-[100px] font-display font-bold tracking-normal leading-[0.95] md:leading-[0.9] uppercase mb-8 md:mb-12">
              Join the <br />
              <span className="text-secondary">community.</span>
            </h1>
            <p className="text-lg md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl">
              Ready to start your recovery? Get in touch and let's build your treatment plan.
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
                      <span className="block text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase mb-2">LOCATION</span>
                      <p className="text-lg md:text-xl font-display font-bold text-primary uppercase leading-tight">
                        <a href="https://maps.google.com/?q=9/25-35+Narre+Warren+-+Cranbourne+Road" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                          9/25-35 Cranbourne Road,<br />Narre Warren VIC 3805
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                      <Phone size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase mb-2">PHONE</span>
                      <p className="text-lg md:text-xl font-display font-bold text-primary uppercase leading-tight">
                        <a href="tel:0428046819" className="hover:text-secondary transition-colors">
                          0428 046 819
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                      <Mail size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase mb-2">EMAIL</span>
                      <p className="text-lg md:text-xl font-display font-bold text-primary uppercase leading-tight">
                        <a href="mailto:admin@rehabfactory.com.au" className="hover:text-secondary transition-colors">
                          admin@rehabfactory.com.au
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-10">CLINIC HOURS</h3>
                <div className="space-y-4">
                  {[
                    { day: 'MONDAY', hours: '8:00 AM – 1:00 PM' },
                    { day: 'FRIDAY', hours: '9:00 AM - 5:00 PM' },
                    { day: 'SATURDAY', hours: '9:00 AM – 2:00 PM' },
                    { day: 'SUNDAY', hours: '8:00 AM – 12:00 PM' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-slate-200 last:border-0">
                      <span className="font-poppins font-normal text-[11px] tracking-[0.25em] uppercase text-slate-400">{item.day}</span>
                      <span className="font-display font-bold text-primary uppercase tracking-wide">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[15px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-6">FOLLOW US</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/people/Rehab-Factory-Physiotherapy/61583085661831/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-5 py-3 rounded-md bg-white border border-slate-200 text-primary font-display font-bold text-xs uppercase tracking-widest hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-sm"
                  >
                    <FacebookIcon size={16} /> Facebook
                  </a>
                  <a 
                    href="https://www.instagram.com/rehab.factory/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-5 py-3 rounded-md bg-white border border-slate-200 text-primary font-display font-bold text-xs uppercase tracking-widest hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-sm"
                  >
                    <InstagramIcon size={16} /> Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 reveal-fade-up">
              <div className="bg-white p-10 md:p-16 rounded-sm border border-slate-200 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -translate-y-16 translate-x-16 rounded-full blur-3xl"></div>
                
                {status.success ? (
                  <div className="text-center py-12 px-4 space-y-6">
                    <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-primary uppercase tracking-normal">Message Sent</h3>
                    <p className="text-slate-500 font-poppins leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out! We have received your enquiry and a confirmation email has been sent. One of our team members will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus({ submitting: false, success: false, error: null })} 
                      className="mt-8 px-6 md:px-8 py-3 md:py-4 whitespace-nowrap bg-primary text-white rounded-full md:rounded-[25px] font-normal text-base tracking-[0.18em] uppercase hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 md:mb-12 uppercase tracking-normal">Send an enquiry</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {status.error && (
                        <div className="p-5 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-poppins rounded-sm flex items-start gap-3">
                          <AlertCircle className="shrink-0 text-red-500 mt-0.5" size={18} />
                          <span>{status.error}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">FULL NAME</label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={status.submitting}
                            className="w-full bg-slate-50 border border-slate-100 p-5 focus:outline-none focus:border-secondary transition-colors font-poppins disabled:opacity-50" 
                            placeholder="Your Name" 
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">PHONE NUMBER</label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status.submitting}
                            className="w-full bg-slate-50 border border-slate-100 p-5 focus:outline-none focus:border-secondary transition-colors font-poppins disabled:opacity-50" 
                            placeholder="Your Phone" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status.submitting}
                          className="w-full bg-slate-50 border border-slate-100 p-4 md:p-5 focus:outline-none focus:border-secondary transition-colors font-poppins disabled:opacity-50" 
                          placeholder="Your Email" 
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">PREFERRED SERVICE</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          disabled={status.submitting}
                          className="w-full bg-slate-50 border border-slate-100 p-4 md:p-5 focus:outline-none focus:border-secondary transition-colors font-poppins appearance-none disabled:opacity-50"
                        >
                          <option>Select a service</option>
                          <option>Individualised Exercise Therapy</option>
                          <option>Manual Therapy</option>
                          <option>Return to Work and Sport</option>
                          <option>Sports Taping</option>
                          <option>Other Enquiry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">YOUR MESSAGE</label>
                        <textarea 
                          rows="5" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          disabled={status.submitting}
                          className="w-full bg-slate-50 border border-slate-100 p-5 focus:outline-none focus:border-secondary transition-colors font-poppins disabled:opacity-50" 
                          placeholder="How can we help?"
                          required
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={status.submitting}
                        className="w-full bg-primary text-white py-3 md:py-4 whitespace-nowrap rounded-full md:rounded-[25px] font-normal text-base md:text-lg tracking-[0.18em] uppercase hover:bg-secondary hover:text-primary transition-all flex items-center justify-center gap-4 shadow-xl disabled:opacity-50"
                      >
                        {status.submitting ? 'SENDING...' : 'SUBMIT ENQUIRY'} <Send size={18} />
                      </button>
                    </form>
                  </>
                )}
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
