import React from 'react';
import { motion } from 'motion/react';
import { 
  User, Shield, MapPin, Calendar, Hash, Mail, 
  Settings, Bell, Globe, Moon, Palette, Zap, 
  History, Heart, Download, Bookmark, 
  HelpCircle, MessageSquare, Info, LogOut, 
  Trash2, ChevronRight, Verified, Activity,
  Smartphone, Lock, Key, MousePointer2,
  Camera, Award, LayoutGrid, FileText, 
  Layers, BarChart3, TrendingUp, Star,
  SmartphoneIcon, Languages, Type, Monitor,
  Wifi, RefreshCcw, Share2, Bug, Lightbulb,
  FileCode, Cpu, ShieldCheck, Box
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { cn } from '../../lib/utils';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="mb-10">
    <h3 className="text-xs font-black text-white/20 uppercase tracking-[0.2em] mb-4 ml-2">{title}</h3>
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden">
      {children}
    </div>
  </div>
);

const ActionItem = ({ icon: Icon, label, value, subLabel, danger, onClick }: any) => (
  <button 
    onClick={onClick}
    className={cn(
      "w-full px-6 py-4 flex items-center justify-between group hover:bg-white/5 transition-all active:scale-[0.99] border-b border-white/5 last:border-0",
      danger ? "text-red-400" : "text-white/80"
    )}
  >
    <div className="flex items-center gap-4">
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
        danger ? "bg-red-400/10" : "bg-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-400"
      )}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-left">
        <div className="font-bold text-sm md:text-base">{label}</div>
        {subLabel && <div className="text-[10px] md:text-xs text-white/30">{subLabel}</div>}
      </div>
    </div>
    <div className="flex items-center gap-3">
      {value && <span className="text-xs md:text-sm font-medium text-white/40">{value}</span>}
      <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white/40 group-hover:translate-x-1 transition-all" />
    </div>
  </button>
);

const StatCard = ({ icon: Icon, label, value, color }: any) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-[2rem] flex flex-col items-center text-center hover:bg-white/10 transition-all group">
    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110", color)}>
      <Icon className="w-6 h-6" />
    </div>
    <div className="text-xl font-black mb-0.5">{value}</div>
    <div className="text-[9px] font-black uppercase tracking-wider text-white/30">{label}</div>
  </div>
);

export const LoggedInView: React.FC<{ user: any }> = ({ user }) => {
  const { logout } = useAuth();
  const handleLogout = () => logout();

  return (
    <div className="min-h-screen pb-24">
      {/* Top Card / Header */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32" />

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full" />
              <div className="relative">
                <img
                  src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`}
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 shadow-2xl relative z-10 object-cover transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-1 right-1 bg-white text-black p-2 rounded-xl shadow-xl hover:scale-110 transition-all z-20">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-amber-400 to-amber-600 p-2 rounded-xl shadow-lg ring-4 ring-background z-20">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
            </div>

            <div className="text-center md:text-left flex-1 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter">{user.displayName || 'BD User'}</h2>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/30 flex items-center gap-1">
                    <Verified className="w-3 h-3" /> Verified
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest border border-amber-500/30">Premium</span>
                </div>
              </div>
              <p className="text-white/40 font-medium mb-8 flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                <Mail className="w-4 h-4" /> {user.email}
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="flex items-center gap-3 text-white/60">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div className="text-xs">
                    <div className="text-white/30 font-black uppercase tracking-tighter text-[9px]">Member Since</div>
                    <div className="font-bold">July 2024</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Globe className="w-5 h-5 text-purple-500" />
                  <div className="text-xs">
                    <div className="text-white/30 font-black uppercase tracking-tighter text-[9px]">Country</div>
                    <div className="font-bold">Bangladesh</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Award className="w-5 h-5 text-amber-500" />
                  <div className="text-xs">
                    <div className="text-white/30 font-black uppercase tracking-tighter text-[9px]">Rank</div>
                    <div className="font-bold">Elite</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Hash className="w-5 h-5 text-emerald-500" />
                  <div className="text-xs">
                    <div className="text-white/30 font-black uppercase tracking-tighter text-[9px]">User ID</div>
                    <div className="font-bold truncate max-w-[80px]">{user.uid.slice(0, 8)}...</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <StatCard icon={Heart} label="Favorites" value="12" color="bg-rose-500/20 text-rose-400" />
          <StatCard icon={History} label="Recent" value="48" color="bg-blue-500/20 text-blue-400" />
          <StatCard icon={TrendingUp} label="Usage" value="2.4h" color="bg-emerald-500/20 text-emerald-400" />
          <StatCard icon={Download} label="Downloads" value="124" color="bg-purple-500/20 text-purple-400" />
          <StatCard icon={FileText} label="Saved Files" value="32" color="bg-blue-600/20 text-blue-400" />
          <StatCard icon={Layers} label="Collections" value="5" color="bg-amber-500/20 text-amber-500" />
          <StatCard icon={Bookmark} label="Bookmarks" value="18" color="bg-indigo-500/20 text-indigo-400" />
          <StatCard icon={BarChart3} label="Weekly" value="+15%" color="bg-pink-500/20 text-pink-400" />
          <StatCard icon={Award} label="Achievements" value="8" color="bg-cyan-500/20 text-cyan-400" />
          <StatCard icon={Activity} label="Streak" value="12d" color="bg-orange-500/20 text-orange-400" />
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div>
            <Section title="Quick Actions">
              <ActionItem icon={User} label="Edit Profile" subLabel="Update your personal details" />
              <ActionItem icon={Camera} label="Edit Avatar" subLabel="Change your profile picture" />
              <ActionItem icon={Lock} label="Change Password" />
              <ActionItem icon={Bell} label="Notifications" value="On" />
              <ActionItem icon={Monitor} label="Appearance" subLabel="Dark Mode, Themes" />
              <ActionItem icon={Type} label="Font Size" value="Standard" />
            </Section>

            <Section title="My Activity">
              <ActionItem icon={History} label="Recent Tools" />
              <ActionItem icon={Heart} label="Favorites" />
              <ActionItem icon={Bookmark} label="Bookmarks" />
              <ActionItem icon={Activity} label="Full History" />
              <ActionItem icon={Download} label="Downloads" />
              <ActionItem icon={FileCode} label="Saved Prompts" />
            </Section>

            <Section title="Account & Security">
              <ActionItem icon={ShieldCheck} label="Security Status" value="Secure" />
              <ActionItem icon={Shield} label="Email Verification" value="Verified" />
              <ActionItem icon={SmartphoneIcon} label="Phone Verification" subLabel="Add phone for recovery" />
              <ActionItem icon={Key} label="Two-Factor Auth" subLabel="Extra layer of security" />
              <ActionItem icon={Smartphone} label="Manage Devices" subLabel="3 devices active" />
              <ActionItem icon={History} label="Login Sessions" />
            </Section>
          </div>

          <div>
            <Section title="Preferences">
              <ActionItem icon={Languages} label="App Language" value="English (US)" />
              <ActionItem icon={Palette} label="Theme Engine" value="Material 3" />
              <ActionItem icon={Moon} label="Dark Mode" value="Auto" />
              <ActionItem icon={LayoutGrid} label="Default View" value="Grid" />
              <ActionItem icon={MousePointer2} label="Default Search" value="Gemini AI" />
              <ActionItem icon={Zap} label="Animations" value="Enabled" />
              <ActionItem icon={Smartphone} label="Haptic Feedback" value="Medium" />
              <ActionItem icon={RefreshCcw} label="Auto Sync" value="On" />
            </Section>

            <Section title="Support">
              <ActionItem icon={HelpCircle} label="Help Center" />
              <ActionItem icon={MessageSquare} label="Live Chat" value="Soon" />
              <ActionItem icon={Info} label="FAQs" />
              <ActionItem icon={Bug} label="Report a Bug" />
              <ActionItem icon={Lightbulb} label="Feature Request" />
              <ActionItem icon={Star} label="Rate App" />
              <ActionItem icon={Share2} label="Share App" />
            </Section>

            <Section title="Legal & Info">
              <ActionItem icon={ShieldCheck} label="Privacy Policy" />
              <ActionItem icon={FileText} label="Terms & Conditions" />
              <ActionItem icon={Box} label="Open Source Licenses" />
              <ActionItem icon={Cpu} label="Developer Info" />
              <ActionItem icon={Zap} label="Version" value="2.4.0 (Stable)" />
            </Section>

            <Section title="Danger Zone">
              <ActionItem icon={LogOut} label="Logout" danger onClick={handleLogout} />
              <ActionItem icon={Trash2} label="Delete Account" subLabel="Permanent action" danger />
            </Section>
          </div>
        </div>

        {/* Future Features / Streaks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-black text-white mb-1">Referral Program</h4>
              <p className="text-white/70 text-sm">Invite friends and earn 3 months of Premium for free!</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-2xl hover:scale-105 transition-transform">
            Invite Now
          </button>
        </motion.div>
      </div>

      {/* Bottom Branding */}
      <div className="text-center mt-12 text-white/10 font-black text-3xl tracking-tighter flex items-center justify-center gap-2">
        <Zap className="w-8 h-8 fill-current" />
        BDchatGPT
      </div>
    </div>
  );
};
