import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TOOLS } from '../data/tools';
import { CATEGORIES } from '../data/categories';
import { Icon } from '../components/Icon';
import { getColorForId } from '../utils/colors';
import { ChevronRight, Share2, Facebook, Twitter, Link as LinkIcon, CheckCircle2, ShieldCheck, Zap, Grid } from 'lucide-react';
import { useToolMetadata } from '../hooks/useToolMetadata';
import { cn } from '../utils/cn';

export const ToolPageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { tool, metadata } = useToolMetadata();
  
  if (!tool || !metadata) {
    return <Navigate to="/" replace />;
  }

  const category = CATEGORIES.find(c => c.id === tool.categoryId);
  const relatedTools = TOOLS.filter(t => t.categoryId === tool.categoryId && t.id !== tool.id).slice(0, 4);
  const toolColors = getColorForId(tool.id);

  const shareUrl = window.location.href;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(metadata.title)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        return;
    }
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="bg-[#020617] min-h-screen pt-24 pb-32">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonicalUrl} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitterTitle} />
        <meta name="twitter:description" content={metadata.twitterDescription} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-white/20 text-[10px] font-black uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/categories" className="hover:text-white transition-colors">Categories</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-blue-500 truncate">{tool.name}</span>
        </nav>

        {/* Hero Header */}
        <div className="mb-16 text-center">
          <div className={cn(
            "mx-auto w-24 h-24 flex items-center justify-center rounded-[2rem] mb-8 shadow-2xl relative group overflow-hidden",
            toolColors.bg
          )}>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <Icon name={tool.iconName} className={cn("w-12 h-12 relative z-10 transition-transform group-hover:scale-110", toolColors.text)} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            {tool.name}
          </h1>
          <p className="text-white/40 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {tool.description}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-emerald-500" /> 100% Client-Side
            </div>
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-3 h-3 text-yellow-500" /> Instant Results
            </div>
          </div>
        </div>

        {/* Tool Interaction Container */}
        <div className="relative mb-24 group">
          <div className={cn(
            "absolute -inset-1 rounded-[3rem] opacity-20 blur-2xl transition duration-1000 group-hover:opacity-40 group-hover:duration-200",
            toolColors.bg
          )}></div>
          <div className="relative bg-[#0d1117] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl">
            <div className="flex justify-end mb-8">
              <div className="flex items-center gap-2">
                <button onClick={() => handleShare('facebook')} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </button>
                <button onClick={() => handleShare('twitter')} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:bg-sky-500 hover:text-white transition-all">
                  <Twitter className="w-4 h-4" />
                </button>
                <button onClick={() => handleShare('copy')} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:bg-white/10 hover:text-white transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            {children}
          </div>
        </div>

        {/* Informational Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <article className="prose prose-invert prose-blue max-w-none">
              <section className="mb-16">
                <h2 className="text-3xl font-black tracking-tight mb-8">Mastering the {tool.name}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">{tool.seo.whatIsIt}</p>
                <div className="space-y-4">
                  {tool.seo.howToUse.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-6 rounded-3xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-black shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-white/80 font-medium m-0">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-black tracking-tight mb-8">Why Professional Tools Matter</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                    <h3 className="text-blue-400 font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Key Features
                    </h3>
                    <ul className="space-y-3 m-0 p-0 list-none">
                      {tool.seo.features.map((feature, idx) => (
                        <li key={idx} className="text-white/60 text-sm font-medium flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-blue-500" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                    <h3 className="text-purple-400 font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Use Cases
                    </h3>
                    <ul className="space-y-3 m-0 p-0 list-none">
                      {tool.seo.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-white/60 text-sm font-medium flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-purple-500" /> {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-black tracking-tight mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {tool.seo.faqs.map((faq, idx) => (
                    <div key={idx} className="rounded-3xl border border-white/5 overflow-hidden">
                      <div className="p-6 bg-white/5">
                        <h3 className="text-white font-bold m-0 text-lg">{faq.question}</h3>
                      </div>
                      <div className="p-6 text-white/40 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          </div>

          {/* Sidebar / Related Tools */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">Need More Power?</h3>
                  <p className="text-white/80 text-sm mb-8 leading-relaxed">
                    Check out our full collection of AI-powered tools for every digital task.
                  </p>
                  <Link to="/tools" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-blue-600 font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
                    Explore All <Zap className="w-4 h-4 fill-current" />
                  </Link>
                </div>
              </div>

              {relatedTools.length > 0 && (
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-white/20 mb-6 flex items-center gap-2">
                    <Grid className="w-3 h-3" /> Related in {category?.name}
                  </h4>
                  <div className="space-y-4">
                    {relatedTools.map(t => {
                      const rColor = getColorForId(t.id);
                      return (
                        <Link 
                          key={t.id}
                          to={`/tools/${t.id}`}
                          className="flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                        >
                          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all group-hover:scale-110", rColor.bg, rColor.text)}>
                            <Icon name={t.iconName} className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-bold text-sm truncate">{t.name}</h5>
                            <p className="text-white/20 text-[10px] font-black uppercase tracking-widest truncate">{t.categoryId}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
