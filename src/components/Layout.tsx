import React, { useState } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { TOOLS } from '../data/tools';
import { useTheme } from '../hooks/useTheme';
import { Icon } from './Icon';
import { getColorForId } from '../utils/colors';
import { Moon, Sun, Menu, X, ChevronDown, ChevronUp, Home, Grid, Wrench, User, BookOpen, Facebook, Twitter, Github, Linkedin, Mail, Zap, ExternalLink } from 'lucide-react';

export const Layout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  const isCategoriesActive = location.pathname.startsWith('/categories');

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 group border border-transparent ${
      isActive 
        ? 'bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-sm' 
        : 'text-white/40 hover:bg-white/5 hover:text-white hover:border-white/10'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center px-4 py-4 rounded-2xl text-base font-bold transition-all duration-300 border border-transparent ${
      isActive 
        ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' 
        : 'text-white hover:bg-white/5 hover:border-white/10'
    }`;

  return (
    <div className={cn(
      "min-h-screen flex flex-col transition-colors duration-300",
      theme === 'dark' ? "bg-[#020617] text-white" : "bg-slate-50 text-slate-900"
    )}>
      {/* Navigation */}
      <header className="border-b border-white/5 bg-[#020617]/80 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-black text-white flex items-center hover:scale-105 transition-transform tracking-tighter">
              <Zap className="w-8 h-8 text-blue-500 mr-2 fill-blue-500" />
              BDchatGPT
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink to="/" end className={navLinkClass}>
                <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Home
              </NavLink>
              
              <div 
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <Link 
                  to="/categories"
                  className={cn(
                    "flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 group border border-transparent",
                    megaMenuOpen || isCategoriesActive 
                      ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' 
                      : 'text-white/40 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <Grid className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Categories <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform duration-300", megaMenuOpen ? 'rotate-180' : '')} />
                </Link>

                {megaMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-[#0d1117]/95 backdrop-blur-2xl border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.5)] rounded-[2rem] p-8 mt-2 animate-in fade-in zoom-in-95 duration-200">
                    <div className="grid grid-cols-3 gap-4">
                      {CATEGORIES.map(category => (
                        <NavLink 
                          key={category.id}
                          to={`/categories/${category.id}`}
                          className={({ isActive }) => cn(
                            "flex items-center p-4 rounded-2xl transition-all group",
                            isActive ? 'bg-blue-500/10 border border-blue-500/20' : 'hover:bg-white/5 border border-transparent hover:border-white/10'
                          )}
                          onClick={() => setMegaMenuOpen(false)}
                        >
                          <div className="w-12 h-12 bg-white/5 text-white/40 flex items-center justify-center rounded-xl mr-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <Icon name={category.iconName} className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                              {category.name}
                            </h3>
                            <p className="text-[10px] text-white/20 line-clamp-1 uppercase tracking-widest mt-0.5">Explore Tools</p>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/tools" className={navLinkClass}>
                <Wrench className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Tools
              </NavLink>

              <NavLink to="/blog" className={navLinkClass}>
                <BookOpen className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Blog
              </NavLink>

              <NavLink to="/profile" className={navLinkClass}>
                <User className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Profile
              </NavLink>
              
              <div className="w-px h-6 bg-white/10 mx-2"></div>

              <button 
                onClick={toggleTheme} 
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95 shadow-sm"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <button 
                onClick={toggleTheme} 
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#020617] border-b border-white/5 animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[calc(100vh-80px)]">
            <div className="px-6 pt-4 pb-12 space-y-3">
              <NavLink to="/" end onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <Home className="w-5 h-5 mr-3 text-blue-500" />
                Home
              </NavLink>
              
              <div className="pt-4">
                <div className="flex items-center px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/20 mb-3">
                  <Grid className="w-3 h-3 mr-2" />
                  Categories
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {CATEGORIES.map(category => (
                    <NavLink 
                      key={category.id}
                      to={`/categories/${category.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => cn(
                        "flex items-center w-full text-left text-sm font-bold p-4 rounded-2xl transition-all group",
                        isActive ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-white/5 hover:bg-white/10'
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 flex items-center justify-center rounded-xl mr-4 transition-colors",
                        location.pathname === `/categories/${category.id}` ? 'bg-blue-500 text-white' : 'bg-white/10 text-white/40'
                      )}>
                        <Icon name={category.iconName} className="w-5 h-5" />
                      </div>
                      <span className={cn(
                        "transition-colors",
                        location.pathname === `/categories/${category.id}` ? 'text-blue-400' : 'text-white/60 group-hover:text-blue-400'
                      )}>
                        {category.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink to="/tools" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <Wrench className="w-5 h-5 mr-3 text-emerald-500" />
                Tools
              </NavLink>
              <NavLink to="/blog" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <BookOpen className="w-5 h-5 mr-3 text-purple-500" />
                Blog
              </NavLink>
              <NavLink to="/profile" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <User className="w-5 h-5 mr-3 text-orange-500" />
                Profile
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Enhanced Premium Footer */}
      <footer className="bg-[#020617] pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4">
              <Link to="/" className="text-3xl font-black text-white flex items-center mb-8 tracking-tighter">
                <Zap className="w-10 h-10 text-blue-500 mr-2 fill-blue-500" />
                BDchatGPT
              </Link>
              <p className="text-white/40 mb-8 leading-relaxed max-w-sm">
                The world's most advanced collection of free AI tools. 100+ utilities designed for speed, privacy, and productivity. Everything runs locally in your browser.
              </p>
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-sky-500 hover:text-white transition-all hover:-translate-y-1">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-slate-800 hover:text-white transition-all hover:-translate-y-1">
                  <Github className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-blue-700 hover:text-white transition-all hover:-translate-y-1">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-xs font-black uppercase tracking-widest text-white/20 mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><Link to="/tools" className="text-white/40 hover:text-blue-500 font-bold transition-colors">All Tools</Link></li>
                <li><Link to="/categories" className="text-white/40 hover:text-blue-500 font-bold transition-colors">Categories</Link></li>
                <li><Link to="/blog" className="text-white/40 hover:text-blue-500 font-bold transition-colors">Insights Blog</Link></li>
                <li><Link to="/profile" className="text-white/40 hover:text-blue-500 font-bold transition-colors">User Profile</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-white/20 mb-6">Legal & Trust</h4>
              <ul className="space-y-4">
                <li><Link to="/legal/privacy" className="text-white/40 hover:text-blue-500 font-bold transition-colors">Privacy Policy</Link></li>
                <li><Link to="/legal/terms" className="text-white/40 hover:text-blue-500 font-bold transition-colors">Terms of Service</Link></li>
                <li><Link to="/legal/disclaimer" className="text-white/40 hover:text-blue-500 font-bold transition-colors">Disclaimer</Link></li>
                <li><Link to="/legal/dmca" className="text-white/40 hover:text-blue-500 font-bold transition-colors">DMCA Notice</Link></li>
                <li><Link to="/legal/about" className="text-white/40 hover:text-blue-500 font-bold transition-colors">About BDchatGPT</Link></li>
                <li><Link to="/legal/contact" className="text-white/40 hover:text-blue-500 font-bold transition-colors">Contact Support</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-white/5">
                <h4 className="font-black text-white mb-4">Join our Newsletter</h4>
                <p className="text-white/40 text-xs mb-6">Get the latest AI tools and updates delivered to your inbox.</p>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-4 pr-12 outline-none focus:border-blue-500 transition-all text-sm"
                  />
                  <button className="absolute right-2 top-2 p-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white/20 text-xs font-bold">
              &copy; {new Date().getFullYear()} BDchatGPT (bdchatgpt.pro.bd). All rights reserved. 
              <span className="hidden md:inline mx-2">•</span> 
              <span className="text-emerald-500/60 flex md:inline-flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Fully Private & Static
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black tracking-widest flex items-center gap-2">
                <ExternalLink className="w-3 h-3" /> Status: Operational
              </span>
              <span className="text-white/20 text-[10px] font-black tracking-widest">Version 2.4.0 (Stable)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
const ShieldCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);
const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
