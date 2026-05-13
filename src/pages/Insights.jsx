import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';

const Insights = () => {
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

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="insights-page overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-48 lg:pt-64 pb-32 lg:pb-48 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop" 
            alt="Rehab Factory Insights" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1000px] reveal-fade-up text-white">
            <span className="text-[13px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-8">
              KNOWLEDGE HUB
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display tracking-tight leading-[0.9] uppercase mb-12">
              Insights for <br />
              sustainable <br />
              <span className="text-secondary">recovery.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-poppins font-normal leading-tight max-w-3xl">
              Practical resources from our clinical team to help you understand your injury and get back to doing what you love.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 lg:py-32 bg-white relative z-20 -mt-20">
        <div className="container">
          <Link to={`/insights/${featuredArticle.slug}`} className="group block relative bg-primary rounded-[25px] overflow-hidden shadow-2xl reveal-fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-video lg:aspect-auto relative overflow-hidden">
                <img src={featuredArticle.img} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent lg:hidden"></div>
              </div>
              <div className="lg:col-span-5 p-12 lg:p-20 flex flex-col justify-center text-white">
                <div className="flex items-center gap-4 mb-8 text-secondary text-[10px] font-black tracking-widest uppercase">
                  <span className="bg-secondary text-primary px-3 py-1 rounded-full">{featuredArticle.category}</span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock size={14} /> {featuredArticle.readTime} READ
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase tracking-tight leading-[1.0] group-hover:text-secondary transition-colors duration-500">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-400 font-poppins text-lg leading-tight mb-10 line-clamp-3">
                  {featuredArticle.desc}
                </p>
                <div className="inline-flex items-center gap-4 text-secondary font-black text-xs tracking-widest uppercase">
                  READ ARTICLE <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex justify-between items-end mb-20 reveal">
            <div>
              <span className="text-[13px] font-black tracking-[0.4em] text-secondary uppercase font-poppins block mb-4">LATEST ARTICLES</span>
              <h2 className="text-5xl md:text-7xl font-display text-primary tracking-tight uppercase">Recent Updates</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {otherArticles.map((article, i) => (
              <Link to={`/insights/${article.slug}`} key={i} className="group reveal-fade-up flex flex-col" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="aspect-video rounded-[25px] overflow-hidden mb-10 shadow-lg group-hover:shadow-2xl transition-all duration-700 relative">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-primary uppercase shadow-lg">
                    {article.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6 text-slate-400 text-[10px] font-black tracking-widest uppercase">
                  <Clock size={14} className="text-secondary" />
                  {article.readTime} READ
                </div>
                <h3 className="text-3xl font-display font-bold text-primary mb-6 uppercase tracking-wide group-hover:text-secondary transition-colors duration-500 leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-500 font-poppins leading-tight mb-8 flex-grow">
                  {article.desc}
                </p>
                <div className="flex items-center gap-2 text-secondary font-black text-[10px] tracking-widest uppercase group-hover:text-primary transition-colors">
                  READ FULL STORY <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap bg-primary text-white relative text-center overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-5xl md:text-8xl font-display tracking-tight leading-[0.9] uppercase mb-10">
              Need a plan for <br /><span className="text-secondary">your recovery?</span>
            </h2>
            <p className="text-2xl text-slate-400 font-poppins font-normal leading-tight mb-16 max-w-2xl mx-auto">
              Our Narre Warren clinic focuses on goal-driven rehabilitation. Book an assessment today.
            </p>
            <a 
              href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-16 py-8 rounded-[25px] font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all shadow-2xl"
            >
              BOOK AN ASSESSMENT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
