import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/blog';
import { ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Link as LinkIcon, ChevronRight, ArrowRight } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
        <button onClick={() => navigate('/blog')} className="text-blue-500 font-bold flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#020617] min-h-screen text-white pt-24 pb-32">
      <Helmet>
        <title>{post.title} | BDchatGPT Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-white/20 text-[10px] font-black uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-blue-500 truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/30">
              {post.category}
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/20 flex items-center gap-2">
              <Clock className="w-3 h-3" /> {post.readingTime} Reading Time
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <User className="w-6 h-6 text-white/40" />
              </div>
              <div>
                <div className="font-bold">{post.author}</div>
                <div className="text-white/20 text-xs flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> Published on {post.date}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Share2 className="w-5 h-5 text-white/40" />
              </button>
              <button className="p-3 rounded-2xl bg-[#1877F2]/10 border border-[#1877F2]/20 hover:bg-[#1877F2]/20 transition-all">
                <Facebook className="w-5 h-5 text-[#1877F2]" />
              </button>
              <button className="p-3 rounded-2xl bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/20 transition-all">
                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
          <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-blue max-w-none mb-24">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4">Table of Contents</h4>
            <ul className="space-y-2 m-0 p-0 list-none">
              <li className="m-0"><a href="#intro" className="text-white/60 hover:text-blue-400 no-underline text-sm font-medium">1. Introduction</a></li>
              <li className="m-0"><a href="#guide" className="text-white/60 hover:text-blue-400 no-underline text-sm font-medium">2. Comprehensive Guide</a></li>
              <li className="m-0"><a href="#faq" className="text-white/60 hover:text-blue-400 no-underline text-sm font-medium">3. Frequently Asked Questions</a></li>
            </ul>
          </div>
          <div 
            className="text-white/80 text-lg leading-relaxed space-y-8"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        {/* Footer */}
        <footer className="pt-16 border-t border-white/5">
          <div className="bg-white/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <User className="w-10 h-10 text-white/20" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h4 className="text-2xl font-black mb-2">About the Author</h4>
              <p className="text-white/40 mb-6 leading-relaxed">
                Expert in AI technologies and digital content creation with over 10 years of experience in the industry.
              </p>
              <button className="text-sm font-bold text-blue-500 hover:text-blue-400 flex items-center gap-2 mx-auto md:mx-0">
                View All Posts <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
