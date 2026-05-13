import { useEffect } from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
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
            Privacy <span className="text-secondary">Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-400 text-xs font-black tracking-widest uppercase reveal">
            <Shield size={16} className="text-secondary" />
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
              
              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">1. Introduction and Our Commitment</h2>
              <p>Rehab Factory Physiotherapy Pty Ltd (ABN 47 279 025 634) ("we", "us", "our") is committed to protecting the privacy and confidentiality of every patient, website visitor, and individual whose personal information we handle.</p>
              <p>We are bound by the following legislation and frameworks:</p>
              <ul>
                <li>The Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs)</li>
                <li>The Health Records Act 2001 (Vic) and the Health Privacy Principles (HPPs)</li>
                <li>The My Health Records Act 2012 (Cth)</li>
                <li>The Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act 1988 (Cth)</li>
                <li>The Health Practitioner Regulation National Law, as it applies in Victoria</li>
              </ul>
              <p>This Privacy Policy explains how we collect, use, store, disclose, and manage your personal information, including your health information. It also explains your rights in relation to that information and how you can exercise them.</p>
              <p>By using our website or engaging our services, you consent to the practices described in this policy. If you do not agree with any part of this policy, please contact us before using our services.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">2. What Is Personal Information and Health Information</h2>
              <p>Personal information is any information or opinion about an identified individual, or an individual who is reasonably identifiable, whether true or not and whether recorded in a material form or not.</p>
              <p>Health information is a subset of personal information and includes information or opinion about the health or disability of an individual, their expressed wishes about future health services, or health services provided or to be provided to them. Health information is classified as sensitive information under the Privacy Act and attracts a higher standard of protection.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">3. What Information We Collect</h2>
              <p>We may collect the following categories of personal and health information:</p>
              
              <p className="font-bold mt-8 mb-4 text-slate-800">Identity and contact information:</p>
              <ul>
                <li>Full name, date of birth, gender, address, phone number, and email address</li>
                <li>Emergency contact name and relationship</li>
              </ul>

              <p className="font-bold mt-8 mb-4 text-slate-800">Health and clinical information:</p>
              <ul>
                <li>Current injury or condition, presenting symptoms, and relevant medical history</li>
                <li>Previous injuries, surgeries, or health conditions</li>
                <li>Current medications and treating practitioners</li>
                <li>Imaging reports including X-rays, MRI, and ultrasound</li>
                <li>Occupation, physical activity level, and rehabilitation goals</li>
                <li>Clinical assessment findings, treatment notes, and progress records</li>
              </ul>

              <p className="font-bold mt-8 mb-4 text-slate-800">Insurance and funding information:</p>
              <ul>
                <li>Medicare number and concession card details where applicable</li>
                <li>Private health insurance fund and membership number</li>
                <li>WorkCover Victoria claim number and insurer details</li>
                <li>Transport Accident Commission (TAC) claim number and insurer details</li>
              </ul>

              <p className="font-bold mt-8 mb-4 text-slate-800">Payment information:</p>
              <ul>
                <li>Payment method and transaction records</li>
                <li>EFTPOS and billing records</li>
              </ul>

              <p className="font-bold mt-8 mb-4 text-slate-800">Website and communications data:</p>
              <ul>
                <li>Pages visited, browser type, device type, and IP address collected via cookies and analytics tools</li>
                <li>Enquiry form submissions, email correspondence, and appointment booking records</li>
              </ul>
              <p>We only collect information that is reasonably necessary for one or more of our functions or activities as a health service provider.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">4. Anonymity and Pseudonymity</h2>
              <p>Under Australian Privacy Principle 2, individuals have the right to interact with us anonymously or under a pseudonym where lawful and practicable.</p>
              <p>In the context of providing physiotherapy services, it is generally not practicable to provide clinical assessment or treatment anonymously, as we require accurate identifying and health information to provide safe and appropriate care. However, you may make general enquiries about our services without identifying yourself. Please let us know if you wish to do so and we will accommodate this where possible.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">5. How We Collect Your Information</h2>
              <p>We collect personal and health information in the following ways:</p>
              <ul>
                <li>Directly from you when you complete intake or health history forms at your first appointment</li>
                <li>When you book an appointment online, by phone, or via email</li>
                <li>When you submit an enquiry through our website contact form</li>
                <li>During the course of your clinical assessment and treatment</li>
                <li>From your treating practitioners, specialists, GP, or other health professionals involved in your care, where relevant and with your consent or as otherwise permitted by law</li>
                <li>From WorkCover Victoria, the TAC, or other insurers where you are an approved claimant and disclosure is required for claims management</li>
                <li>Automatically through our website via cookies and third party analytics tools such as Google Analytics</li>
              </ul>
              <p>Where we collect information about you from a third party, we will take reasonable steps to notify you of that collection as soon as practicable unless doing so would be unlawful or unreasonable in the circumstances.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">6. How We Use Your Information</h2>
              <p>We use your personal and health information for the following purposes:</p>
              
              <p className="font-bold mt-8 mb-4 text-slate-800">Primary purposes (direct health care):</p>
              <ul>
                <li>Providing physiotherapy assessment, treatment, and rehabilitation services</li>
                <li>Designing, delivering, supervising, and progressing your individualised rehabilitation programme</li>
                <li>Communicating with you about your appointments, treatment plan, and ongoing care</li>
                <li>Communicating with other treating health professionals involved in your care</li>
                <li>Managing referrals to and from other practitioners</li>
                <li>Processing payments and managing billing including Medicare, WorkCover, and TAC claims</li>
                <li>Maintaining accurate and complete clinical records</li>
                <li>Complying with our legal and professional obligations as registered physiotherapists</li>
              </ul>

              <p className="font-bold mt-8 mb-4 text-slate-800">Secondary purposes:</p>
              <ul>
                <li>Improving the quality, safety, and effectiveness of our services</li>
                <li>Internal administrative, practice management, and reporting functions</li>
                <li>Sending you practice updates or general health information where you have provided consent</li>
                <li>Responding to complaints or enquiries</li>
              </ul>
              <p>We will not use your sensitive health information for direct marketing purposes. We will not use your personal information for purposes beyond those described above without your consent, except where required or permitted by law.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">7. Disclosure of Your Information</h2>
              <p>We may disclose your personal and health information to the following parties:</p>

              <p className="font-bold mt-8 mb-4 text-slate-800">Treating health professionals:</p>
              <p>We may share relevant clinical information with your GP, specialist, surgeon, or other health professionals involved in your care, where this is necessary for the provision of treatment and is within your reasonable expectation or with your consent.</p>

              <p className="font-bold mt-8 mb-4 text-slate-800">Insurers and funding bodies:</p>
              <p>For WorkCover Victoria and TAC patients, we are required to provide clinical information to your insurer as part of the claims management process. We will discuss the nature of these disclosures with you at your first appointment.</p>

              <p className="font-bold mt-8 mb-4 text-slate-800">Medicare:</p>
              <p>Where applicable, we share billing information with Medicare Australia for the purpose of processing rebate claims under a GP Management Plan or Team Care Arrangement.</p>

              <p className="font-bold mt-8 mb-4 text-slate-800">Service providers:</p>
              <p>We engage third party service providers including practice management software providers and IT support services who may have access to personal information in the course of providing services to us. These providers are required to handle information confidentially and in accordance with applicable privacy laws.</p>

              <p className="font-bold mt-8 mb-4 text-slate-800">Legal and regulatory bodies:</p>
              <p>We may be required to disclose information to regulatory bodies including the Health Complaints Commissioner Victoria, the Office of the Australian Information Commissioner, courts, or law enforcement agencies where required or permitted by law.</p>

              <p>We will not sell, rent, trade, or otherwise disclose your personal information to third parties for commercial or marketing purposes.</p>

              <p className="font-bold mt-8 mb-4 text-slate-800">Overseas disclosure:</p>
              <p>We do not routinely disclose personal information to overseas recipients. In the event that any of our service providers store or process data overseas, we take reasonable steps to ensure those providers handle your information in a manner consistent with the Australian Privacy Principles. Where an overseas disclosure is made, we will comply with APP 8.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">8. Health Information and Sensitive Information</h2>
              <p>Health information is treated as sensitive information under the Privacy Act and the Health Records Act 2001 (Vic) and is subject to a higher standard of protection than general personal information.</p>
              <p>We will only collect, use, and disclose your health information with your consent, or where collection, use, or disclosure is required or permitted by law. Consent may be express (written or verbal) or implied in circumstances where you have voluntarily sought health services and it is within your reasonable expectations that your information will be used for that purpose.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">9. Children and Parental Consent</h2>
              <p>Where a patient is under the age of 18, we will generally collect information from and provide information to a parent or legal guardian as well as the patient, having regard to the patient's maturity and capacity to make decisions about their own health.</p>
              <p>A parent or legal guardian of a minor patient has the right to access the health records of that minor, subject to any legal limitations and the best interests of the child.</p>
              <p>Where a patient who was a minor has reached adulthood, they assume full rights over their own health information.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">10. Storage and Security</h2>
              <p>Your personal and health information is stored securely using the following measures:</p>
              <ul>
                <li>Electronic records are stored in our practice management system, which is protected by password authentication, encryption, and access controls limited to authorised staff</li>
                <li>Paper records, where held, are stored in locked filing systems accessible only to authorised staff</li>
                <li>Physical access to clinical and administrative areas is restricted</li>
                <li>Staff are trained in privacy obligations and the handling of health information</li>
              </ul>
              <p>We take reasonable steps to protect your information from unauthorised access, misuse, interference, loss, and disclosure. However, no data transmission or storage system is completely secure, and we cannot guarantee absolute security.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">11. Retention and Destruction of Records</h2>
              <p>We retain health records for a minimum of seven years from the date of the last service provided to an adult patient, in accordance with the Health Records Act 2001 (Vic). For patients who were minors at the time of treatment, records are retained until the patient turns 25 years of age or for seven years from the date of last service, whichever is the longer period.</p>
              <p>Following the applicable retention period, records are securely destroyed or de-identified in a manner that prevents reconstruction of the information.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">12. Notifiable Data Breaches</h2>
              <p>We are subject to the Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act 1988 (Cth). In the event of an eligible data breach, meaning a breach that is likely to result in serious harm to one or more affected individuals, we are required to:</p>
              <ul>
                <li>Notify affected individuals as soon as practicable</li>
                <li>Notify the Office of the Australian Information Commissioner (OAIC)</li>
                <li>Provide a statement describing the breach, the information involved, and the steps we recommend affected individuals take</li>
              </ul>
              <p>We maintain an internal data breach response plan and will act promptly in the event of any suspected or confirmed data breach.</p>
              <p>If you believe your personal information held by us may have been compromised, please contact us immediately using the details in Section 18.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">13. Accessing and Correcting Your Information</h2>
              <p className="font-bold mt-8 mb-4 text-slate-800">Right of access:</p>
              <p>You have the right to request access to the personal and health information we hold about you. Requests should be made in writing to the contact details in Section 18. We will respond within 30 days. In some circumstances access may be limited or refused, for example where providing access would pose a serious threat to the health or safety of any person, or where the information relates to legal proceedings. If we refuse access we will explain why in writing.</p>

              <p className="font-bold mt-8 mb-4 text-slate-800">Right to correction:</p>
              <p>If you believe that information we hold about you is inaccurate, incomplete, misleading, or out of date, you have the right to request that we correct it. We will respond within 30 days and will either correct the information or, if we do not agree it requires correction, we will note your request alongside the record.</p>
              <p>A reasonable administrative fee may apply to access requests where significant staff time or resources are required to locate and compile records.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">14. Direct Marketing</h2>
              <p>We will only send you direct marketing communications, such as practice newsletters or health information, where you have provided your express consent to receive them.</p>
              <p>We will not use your sensitive health information for direct marketing purposes under any circumstances.</p>
              <p>You may withdraw your consent to receive marketing communications at any time by clicking the unsubscribe link in any email or by contacting us directly. Withdrawal of consent will not affect the lawfulness of any marketing communications sent prior to withdrawal.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">15. Cookies and Website Analytics</h2>
              <p>Our website uses cookies and third party analytics tools including Google Analytics to help us understand how visitors use the site and to improve user experience. Cookies are small files placed on your device when you visit our website.</p>
              <p>The information collected through cookies is aggregated and does not identify individual users. It may include pages visited, time spent on pages, geographic region, browser and device type, and referral source.</p>
              <p>You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of some parts of our website.</p>
              <p>We do not use website analytics data to identify individual users or to make decisions about individual patients.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">16. Privacy Complaints</h2>
              <p>If you have a concern about the way we have collected, used, stored, or disclosed your personal or health information, we encourage you to contact us in the first instance so that we can attempt to resolve the matter directly.</p>
              
              <p className="font-bold mt-8 mb-4 text-slate-800">Contact details:</p>
              <p>Rehab Factory Physiotherapy Pty Ltd<br />9/25-35 Cranbourne Road, Narre Warren VIC 3805<br />Phone: (03) 9704 6111<br />Email: admin@rehabfactory.com.au</p>
              
              <p>We will acknowledge your complaint within five business days and aim to resolve it within 30 days. If the matter is complex, we will keep you informed of progress.</p>
              <p>If you are not satisfied with our response, you may lodge a complaint with:</p>

              <p className="font-bold mt-8 mb-2 text-slate-800">Office of the Australian Information Commissioner (OAIC)</p>
              <p>Website: oaic.gov.au<br />Phone: 1300 363 992<br />For matters relating to the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>

              <p className="font-bold mt-8 mb-2 text-slate-800">Health Complaints Commissioner Victoria</p>
              <p>Website: hcc.vic.gov.au<br />Phone: 1300 582 113<br />For matters relating to the Health Records Act 2001 (Vic) and the Health Privacy Principles.</p>

              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-wide">17. Updates to This Policy</h2>
              <p>We review and update this Privacy Policy periodically to reflect changes in our practices, technology, legal obligations, or regulatory guidance. The current version, including the date of last update, will always be published on our website.</p>
              <p>We encourage patients and website visitors to review this policy from time to time. Where changes are material, we will take reasonable steps to notify patients directly.</p>

              <div className="p-12 bg-slate-50 border border-slate-100 rounded-[25px] mt-16">
                <h3 className="text-xl font-display font-bold text-primary mb-6 uppercase tracking-wide">18. Contact Us</h3>
                <div className="space-y-2 text-slate-500 font-poppins">
                  <p className="font-bold text-slate-800">Privacy Officer</p>
                  <p className="font-bold text-slate-800">Rehab Factory Physiotherapy Pty Ltd</p>
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

export default PrivacyPolicy;
