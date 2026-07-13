import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES } from '../data/categories';
import { TOOLS } from '../data/tools';
import { Icon } from '../components/Icon';
import { getColorForId } from '../utils/colors';
import { Search, ShieldCheck, Zap, Smartphone, Sparkles, TrendingUp, History, Heart, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('recent_searches');
    if (stored) setRecentSearches(JSON.parse(stored));
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() && !recentSearches.includes(term)) {
      const newRecent = [term, ...recentSearches].slice(0, 5);
      setRecentSearches(newRecent);
      localStorage.setItem('recent_searches', JSON.stringify(newRecent));
    }
  };

  const filteredTools = TOOLS.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredTools = TOOLS.slice(0, 6);
  const popularKeywords = ['Word Counter', 'Case Converter', 'PDF', 'QR Generator'];

  return (
    <div className="flex flex-col bg-[#020617]">
      <Helmet>
        <title>BDchatGPT - 100+ Free Premium AI Tools</title>
        <meta name="description" content="Explore a world-class suite of free AI tools. Fast, secure, and fully client-side. No sign-up required." />
      </Helmet>

      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-emerald-600/5 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-8">
              <TrendingUp className="w-3 h-3" /> Trending: AI Word Counter
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
              100+ Free <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600">AI Tool Suite</span>
            </h1>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Experience a premium world-class suite of AI tools. Fast, secure, and 100% private. No sign-up, no downloads, just instant performance.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-2xl mx-auto relative z-20"
          >
            <div className={cn(
              "relative group transition-all duration-500",
              isSearchFocused ? "scale-105" : "scale-100"
            )}>
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className={cn(
                  "h-6 w-6 transition-colors duration-300",
                  isSearchFocused ? "text-blue-500" : "text-white/20"
                )} />
              </div>
              <input
                type="text"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="block w-full pl-16 pr-6 py-6 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-2xl text-white placeholder-white/20 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500/50 text-xl shadow-2xl transition-all"
                placeholder="What can I help you find today?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              
              {/* Search Suggestions Dropdown */}
              <AnimatePresence>
                {isSearchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-4 p-4 bg-[#0d1117]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden text-left z-50"
                  >
                    {recentSearches.length > 0 && (
                      <div className="mb-4">
                        <h4 className="px-4 text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Recent Searches</h4>
                        {recentSearches.map(s => (
                          <button key={s} onClick={() => handleSearch(s)} className="w-full text-left px-4 py-2 hover:bg-white/5 text-white/60 hover:text-white rounded-xl transition-colors flex items-center gap-3">
                            <History className="w-4 h-4" /> {s}
                          </button>
                        ))}
                      </div>
                    )}
                    <div>
                      <h4 className="px-4 text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Popular Tools</h4>
                      <div className="flex flex-wrap gap-2 px-4 pb-2">
                        {popularKeywords.map(k => (
                          <button key={k} onClick={() => handleSearch(k)} className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold hover:bg-blue-500/20 transition-all">
                            {k}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/20">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Private</div>
            <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500" /> Fast</div>
            <div className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-blue-500" /> Responsive</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        {searchTerm ? (
          <div>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-black tracking-tight mb-2">Search Results</h2>
                <p className="text-white/40">Found {filteredTools.length} tools for "{searchTerm}"</p>
              </div>
              <button onClick={() => setSearchTerm('')} className="text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors">Clear Search</button>
            </div>
            
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
              </div>
            ) : (
              <div className="text-center py-24 bg-white/5 rounded-[3rem] border border-white/10 border-dashed">
                <Search className="w-16 h-16 text-white/10 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2">No tools found</h3>
                <p className="text-white/30">Try a different keyword or browse categories</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-32">
            {/* Featured Section */}
            <div>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-black tracking-tight flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  Popular Tools
                </h2>
                <Link to="/tools" className="group flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white transition-all">
                  View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTools.map(tool => <ToolCard key={tool.id} tool={tool} isPopular />)}
              </div>
            </div>

            {/* Categories Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {CATEGORIES.slice(0, 4).map(category => {
                const categoryTools = TOOLS.filter(t => t.categoryId === category.id).slice(0, 3);
                return (
                  <div key={category.id}>
                    <div className="mb-8 flex items-center justify-between group">
                      <div>
                        <h3 className="text-2xl font-black mb-1 flex items-center gap-3">
                          {category.name}
                        </h3>
                        <p className="text-white/40 text-sm">{category.description}</p>
                      </div>
                      <Link to={`/categories/${category.id}`} className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                        <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-blue-500" />
                      </Link>
                    </div>
                    <div className="space-y-4">
                      {categoryTools.map(tool => (
                        <Link 
                          key={tool.id} 
                          to={`/tools/${tool.id}`}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-blue-500 transition-colors">
                            <Icon name={tool.iconName} className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-sm">{tool.name}</h4>
                            <p className="text-white/20 text-[10px] line-clamp-1">{tool.description}</p>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/60">Free</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

const ToolCard: React.FC<{ tool: typeof TOOLS[0], isPopular?: boolean }> = ({ tool, isPopular }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const colors = getColorForId(tool.id);

  return (
    <Link 
      to={`/tools/${tool.id}`}
      className="group relative flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]"
    >
      {isPopular && (
        <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 z-10">
          <Sparkles className="w-3 h-3" /> Popular
        </div>
      )}
      
      <button 
        onClick={(e) => {
          e.preventDefault();
          setIsFavorite(!isFavorite);
        }}
        className={cn(
          "absolute top-6 right-6 p-2.5 rounded-2xl transition-all z-10",
          isFavorite ? "bg-rose-500/20 text-rose-500" : "bg-white/5 text-white/20 hover:text-white"
        )}
      >
        <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
      </button>

      <div className="mb-8 mt-4">
        <div className={cn(
          "w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
          colors.bg, colors.text
        )}>
          <Icon name={tool.iconName} className="w-8 h-8" />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
          {tool.name}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-3">
          {tool.description}
        </p>
      </div>

      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Ready to use</span>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 group-hover:translate-x-1 transition-transform">
          Try Now →
        </div>
      </div>
    </Link>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
