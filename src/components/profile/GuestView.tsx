import React from 'react';
import { motion } from 'motion/react';
import { Mail, Globe, Sparkles, ShieldCheck, History, Moon, Cloud, Zap, LogIn, UserPlus, Heart } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface GuestViewProps {
  onLogin: () => void;
  onSignup: () => void;
  onGuestLogin: () => void;
}

const BenefitCard = ({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-colors"
  >
    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-sm font-medium text-white/80">{title}</span>
  </motion.div>
);

export const GuestView: React.FC<GuestViewProps> = ({ onLogin, onSignup, onGuestLogin }) => {
  const { login } = useAuth();

  const handleGoogleLogin = () => {
    login({
      uid: 'google-user-123',
      displayName: 'Google User',
      email: 'user@google.com',
      photoURL: 'https://api.dicebear.com/7.x/avataaars/svg?seed=google',
      isAnonymous: false
    });
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Top Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative inline-block"
          >
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full" />
            <img
              src="/src/assets/images/premium_ai_welcome_illustration_1783960297631.jpg"
              alt="Premium AI Illustration"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/10 shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-500 p-3 rounded-2xl shadow-lg ring-4 ring-background">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight"
          >
            Welcome to <span className="text-blue-500">BDchatGPT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-xl mx-auto mb-12"
          >
            Access your favorites, sync your data and unlock more features with a premium account.
          </motion.p>

          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-3 bg-white text-black font-bold py-4 rounded-2xl shadow-xl hover:bg-white/90 transition-all"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
              Continue with Google
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onLogin}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold py-4 rounded-2xl hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5" />
              Continue with Email
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onGuestLogin}
              className="text-white/40 font-medium py-3 hover:text-white transition-all text-sm border border-white/5 rounded-2xl"
            >
              Continue as Guest
            </motion.button>
          </div>

          <div className="my-12 flex items-center gap-4 text-white/20">
            <div className="h-px flex-1 bg-current" />
            <span className="text-xs font-bold uppercase tracking-widest">OR</span>
            <div className="h-px flex-1 bg-current" />
          </div>

          <div className="flex flex-col text-center">
            <p className="text-white/40 text-sm mb-4 font-medium">Already have an account?</p>
            <button 
              onClick={onLogin}
              className="max-w-md mx-auto w-full bg-blue-600/10 border border-blue-500/30 text-blue-400 font-bold py-4 rounded-2xl hover:bg-blue-600/20 transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" /> Login Now
            </button>
            <p className="mt-6 text-white/40 text-sm font-medium">
              Don't have an account?{' '}
              <button onClick={onSignup} className="text-purple-400 font-bold hover:text-purple-300">Sign Up</button>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-sm font-black text-white/20 uppercase tracking-[0.2em] mb-8 text-center">Premium Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <BenefitCard icon={Heart} title="Save Favorites" delay={0.2} />
          <BenefitCard icon={Globe} title="Sync Devices" delay={0.3} />
          <BenefitCard icon={History} title="Usage History" delay={0.4} />
          <BenefitCard icon={Cloud} title="Cloud Backup" delay={0.5} />
          <BenefitCard icon={UserPlus} title="Personalized" delay={0.6} />
          <BenefitCard icon={Zap} title="Faster Access" delay={0.7} />
          <BenefitCard icon={Moon} title="Dark Mode Sync" delay={0.8} />
          <BenefitCard icon={ShieldCheck} title="Secure Account" delay={0.9} />
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 pt-12 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-6 mb-8 text-white/40 text-sm font-medium">
          <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-all">Terms</a>
          <span>Version 2.4.0</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-white/10 font-black text-xl tracking-tighter">
          <Zap className="w-6 h-6 fill-current" />
          BDchatGPT
        </div>
      </footer>
    </div>
  );
};
