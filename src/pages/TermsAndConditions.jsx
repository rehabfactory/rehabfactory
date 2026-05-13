import { useEffect } from 'react';
import { FileText } from 'lucide-react';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header */}
      <header className="py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <span className="text-[13px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-8 reveal">
            LEGAL
          </span>
          <h1 className="text-5xl md:text-8xl font-display tracking-tight leading-[0.95] uppercase mb-12 reveal-fade-up">
            Terms & <span className="text-secondary">Conditions</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-400 text-xs font-black tracking-widest uppercase reveal">
            <FileText size={16} className="text-secondary" />
            Last updated: May 2026
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent"></div>
      </header>

      {/* Content */}
      <section className="py-section-gap">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose-custom text-slate-600 font-poppins">
              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">About These Terms</h2>
              <p className="text-lg leading-tight mb-8">
                These Terms and Conditions govern your use of the Rehab Factory Physiotherapy website and your engagement with our services. By accessing our website or booking an appointment with us, you agree to be bound by these terms.
              </p>
              <p className="text-lg leading-tight mb-16">
                Please read them carefully. If you do not agree with any part of these terms, please do not use our website or services.
              </p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">About Rehab Factory Physiotherapy</h2>
              <p className="mb-16">
                Rehab Factory Physiotherapy Pty Ltd provides physiotherapy and rehabilitation services from our clinic located at 9/25-35 Cranbourne Road, Narre Warren VIC 3805. All treating practitioners are registered with the Physiotherapy Board of Australia.
              </p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">Website Use</h2>
              <p className="mb-8">
                The content on this website is provided for general information purposes only. It is not intended to constitute medical advice, diagnosis, or treatment. You should not rely on any information on this website as a substitute for professional clinical advice from a qualified and registered health practitioner.
              </p>
              <p className="mb-8">
                You agree to use this website for lawful purposes only and in a manner that does not infringe the rights of others or restrict their use of the website.
              </p>
              <p className="mb-16">
                We reserve the right to modify, suspend, or discontinue any part of this website at any time without notice.
              </p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">Health Information Disclaimer</h2>
              <p className="mb-16">
                The information provided on this website, including descriptions of conditions, services, and techniques, is intended to be general and educational in nature. It does not account for your individual circumstances, medical history, or clinical presentation. Nothing on this website constitutes a diagnosis or a recommendation to undertake any specific treatment or course of action.
              </p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">Appointments and Cancellations</h2>
              <p className="mb-8 font-bold">Booking</p>
              <p className="mb-8">Appointments can be made online, by phone, or via email. A booking is confirmed once you receive confirmation from our clinic.</p>
              
              <p className="mb-8 font-bold">Cancellations and late notice</p>
              <p className="mb-8">We request a minimum of 24 hours notice if you need to cancel or reschedule your appointment. Cancellations made with less than 24 hours notice or missed appointments may incur a cancellation fee. Our team will advise you of the applicable fee at the time of booking.</p>
              
              <p className="mb-16 italic">WorkCover and TAC patients: Your insurer may have specific requirements regarding appointment attendance and cancellation. Please confirm these with your case manager.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">Fees and Payment</h2>
              <p className="mb-8">Our current fee schedule is available at the clinic and on request. Fees are subject to change. We accept EFTPOS, Medicare, WorkCover, and TAC where applicable.</p>
              <p className="mb-8">Medicare rebates apply to physiotherapy services provided under a GP Management Plan or Team Care Arrangement. Please discuss your eligibility with your GP.</p>
              <p className="mb-16">Payment is due at the time of your appointment unless a prior arrangement has been made with our team.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">Intellectual Property</h2>
              <p className="mb-16">
                All content on this website, including text, images, logos, and design elements, is the property of Rehab Factory Physiotherapy Pty Ltd or its content suppliers and is protected by Australian copyright law. You may not reproduce, distribute, modify, or republish any content from this website without our prior written consent.
              </p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">Limitation of Liability</h2>
              <p className="mb-16">
                To the extent permitted by law, Rehab Factory Physiotherapy Pty Ltd excludes all liability for loss or damage arising from your use of this website or reliance on its content. This includes but is not limited to direct, indirect, incidental, or consequential loss. Nothing in these terms limits any rights you may have under the Australian Consumer Law.
              </p>

              <div className="p-12 bg-slate-50 border border-slate-100 rounded-[25px]">
                <h3 className="text-xl font-display font-bold text-primary mb-6 uppercase tracking-wide">Contact Us</h3>
                <div className="space-y-2 text-slate-500 font-poppins">
                  <p className="font-bold">Rehab Factory Physiotherapy Pty Ltd</p>
                  <p>9/25-35 Cranbourne Road, Narre Warren VIC 3805</p>
                  <p>Phone: (03) 9704 6111</p>
                  <p>Email: admin@rehabfactory.com.au</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
