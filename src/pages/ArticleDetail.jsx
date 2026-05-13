import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, BookOpen, Share2 } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-primary">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-8">ARTICLE NOT FOUND</h1>
          <Link to="/insights" className="text-secondary font-black tracking-widest uppercase hover:text-primary transition-colors">
            BACK TO INSIGHTS
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page bg-white min-h-screen pt-20">
      {/* Article Header */}
      <header className="py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="container relative z-10">
          <Link 
            to="/insights" 
            className="inline-flex items-center gap-3 text-secondary font-black text-xs tracking-[0.3em] uppercase mb-12 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> BACK TO INSIGHTS
          </Link>
          
          <div className="max-w-4xl">
            <span className="text-[13px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-8 reveal">
              {article.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.95] uppercase mb-12 reveal-fade-up">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-slate-400 text-xs font-black tracking-widest uppercase reveal">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-secondary" />
                {article.readTime} READ
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-secondary" />
                MAY 2026
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes for premium feel */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent"></div>
      </header>

      {/* Main Content Area */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sidebar / Info */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-32 space-y-12">
                <div className="p-10 bg-slate-50 border border-slate-100 rounded-[25px] reveal">
                  <h4 className="text-primary font-display font-bold text-xl uppercase tracking-wider mb-6">Clinical Expertise</h4>
                  <p className="text-slate-500 font-poppins leading-tight mb-8 text-sm">
                    Rehab Factory's clinical team, led by Abdelrahman and Amr Elsamman, provides evidence-based information to support your recovery and performance.
                  </p>
                  <div className="flex -space-x-3 mb-6">
                    <img src="/team/abdelrahman-elsamman.webp" alt="Abdelrahman Elsamman" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                    <img src="/team/amr-elsamman.webp" alt="Amr Elsamman" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div>
                    <div className="text-primary font-bold text-sm uppercase tracking-wider">REHAB FACTORY</div>
                    <div className="text-secondary text-[10px] font-black tracking-widest uppercase">Clinical Team</div>
                  </div>
                </div>

                <div className="p-10 bg-primary text-white rounded-[25px] shadow-2xl reveal-fade-up">
                  <h4 className="font-display font-bold text-2xl uppercase tracking-tight leading-tight mb-6">Ready to start your <br /><span className="text-secondary">recovery?</span></h4>
                  <p className="text-slate-400 font-poppins text-sm leading-tight mb-10">
                    Book an initial assessment with our team in Narre Warren today.
                  </p>
                  <a 
                    href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-secondary text-primary py-5 rounded-[20px] font-black text-xs tracking-widest uppercase text-center hover:bg-white transition-all"
                  >
                    BOOK APPOINTMENT
                  </a>
                </div>

                <div className="flex items-center gap-6 reveal">
                  <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Share this article</span>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-all"><Share2 size={16} /></button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Content Body */}
            <main className="lg:col-span-8 order-1 lg:order-2">
              <div className="mb-20 aspect-video rounded-[25px] overflow-hidden shadow-2xl reveal-fade-up">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
              </div>

              <div className="max-w-none prose prose-slate prose-lg lg:prose-xl font-poppins text-slate-600 leading-tight">
                {article.content.map((block, idx) => {
                  if (block.type === 'intro') {
                    return <p key={idx} className="text-2xl md:text-3xl text-primary font-normal leading-tight mb-12 border-l-4 border-secondary pl-10 reveal">{block.text}</p>;
                  }
                  if (block.type === 'heading') {
                    return <h3 key={idx} className="text-3xl md:text-4xl font-display font-bold text-primary mt-20 mb-8 uppercase tracking-wide reveal">{block.text}</h3>;
                  }
                  if (block.type === 'paragraph') {
                    return <p key={idx} className="mb-10 reveal-fade-up">{block.text}</p>;
                  }
                  return null;
                })}
              </div>

              {/* Final CTA within flow */}
              <div className="mt-24 p-16 bg-slate-50 border border-slate-200 rounded-[25px] text-center reveal">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8 uppercase tracking-tight">HAVE QUESTIONS?</h3>
                <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto">
                  You do not need a referral to book with us. Start your journey today.
                </p>
                <a 
                  href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all shadow-xl"
                >
                  BOOK YOUR ASSESSMENT
                </a>
              </div>
            </main>

          </div>
        </div>
      </section>

      {/* Other Articles */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex justify-between items-end mb-16 reveal">
            <div>
              <span className="text-[13px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-4">KEEP READING</span>
              <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight uppercase">Recent Insights</h2>
            </div>
            <Link to="/insights" className="hidden md:flex items-center gap-3 text-secondary font-black text-xs tracking-widest uppercase hover:text-primary transition-colors">
              VIEW ALL <BookOpen size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.filter(a => a.id !== article.id).slice(0, 2).map((other, i) => (
              <Link to={`/insights/${other.slug}`} key={i} className="group reveal-fade-up">
                <div className="aspect-video rounded-[25px] overflow-hidden mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-700">
                  <img src={other.img} alt={other.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="flex items-center gap-4 mb-4 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  <span className="text-secondary">{other.category}</span>
                  <span>{other.readTime} READ</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary uppercase tracking-wide group-hover:text-secondary transition-colors leading-tight">
                  {other.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
