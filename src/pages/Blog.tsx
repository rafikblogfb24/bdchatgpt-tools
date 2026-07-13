import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';
import { Calendar, User, Clock, ArrowRight, ChevronRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="bg-[#020617] min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Blog - AI Tools & Insights | BDchatGPT</title>
        <meta name="description" content="Stay updated with the latest AI tools, guides, and technology trends." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
              Insights & <span className="text-blue-500">Guides</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Expert articles to help you master AI tools and stay ahead in the digital world.
            </p>
          </motion.div>
        </div>

        {/* Featured Post */}
        <div className="mb-24">
          <Link to={`/blog/${BLOG_POSTS[0].id}`} className="group relative block rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={BLOG_POSTS[0].image} 
                  alt={BLOG_POSTS[0].title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent lg:hidden" />
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/30">
                    {BLOG_POSTS[0].category}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {BLOG_POSTS[0].readingTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-white/40 text-lg mb-8 leading-relaxed">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-white/40" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{BLOG_POSTS[0].author}</div>
                    <div className="text-white/20 text-xs">{BLOG_POSTS[0].date}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="group block bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-white/20">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-blue-500 text-xs font-black uppercase tracking-widest gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
