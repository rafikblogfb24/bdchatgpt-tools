import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { TOOLS } from '../data/tools';
import { Icon } from '../components/Icon';
import { getColorForId } from '../utils/colors';
import { Search, Zap, ArrowRight, Grid as GridIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

export const AllTools: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = TOOLS.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#020617] min-h-screen pt-24 pb-32">
      <Helmet>
        <title>All AI Tools - Explore the Complete Collection | BDchatGPT</title>
        <meta name="description" content="Access 100+ professional AI tools for text, media, calculations, and development. Completely free, client-side, and secure." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
              Universe of <span className="text-blue-500">AI Tools</span>
            </h1>
            <p className="text-white/40 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Browse our entire library of professional utilities, all running locally in your browser for absolute speed and privacy.
            </p>

            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-25 group-focus-within:opacity-75 transition duration-500"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/20 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  className="w-full pl-16 pr-6 py-6 bg-[#0d1117] border border-white/10 rounded-[2rem] text-white text-lg outline-none focus:border-blue-500 transition-all placeholder:text-white/10 shadow-2xl"
                  placeholder="Search for any tool (e.g. 'Word Counter', 'BMI')..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories Navigation (Quick scroll) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-24">
          {CATEGORIES.map(category => (
            <a 
              key={category.id} 
              href={`#${category.id}`}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all"
            >
              {category.name}
            </a>
          ))}
        </div>

        {/* Main Grid */}
        <div className="space-y-32">
          {CATEGORIES.map(category => {
            const categoryTools = filteredTools.filter(t => t.categoryId === category.id);
            if (categoryTools.length === 0) return null;

            return (
              <section key={category.id} id={category.id} className="scroll-mt-32">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                      <Icon name={category.iconName} className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-white tracking-tight">{category.name}</h2>
                      <p className="text-white/40 text-sm font-medium mt-1 uppercase tracking-widest">{categoryTools.length} Professional Tools</p>
                    </div>
                  </div>
                  <div className="text-white/20 text-[10px] font-black uppercase tracking-widest hidden md:block">
                    Explore Collection <ArrowRight className="inline w-3 h-3 ml-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryTools.map((tool, idx) => {
                    const colors = getColorForId(tool.id);
                    return (
                      <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link 
                          to={`/tools/${tool.id}`}
                          className="group relative block h-full p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all shadow-xl hover:-translate-y-2 overflow-hidden"
                        >
                          <div className={cn(
                            "absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity",
                            colors.bg
                          )}></div>
                          
                          <div className="flex items-center gap-4 mb-6">
                            <div className={cn(
                              "w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110",
                              colors.bg, colors.text
                            )}>
                              <Icon name={tool.iconName} className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                              {tool.name}
                            </h3>
                          </div>
                          <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3">
                            {tool.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-blue-500">
                              <Zap className="w-3 h-3 fill-current" /> Instant
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-600 transition-all">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-32">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
              <Search className="w-10 h-10 text-white/10" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4">No Tools Found</h3>
            <p className="text-white/40">We couldn't find any tools matching "{searchTerm}". Try another search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};
