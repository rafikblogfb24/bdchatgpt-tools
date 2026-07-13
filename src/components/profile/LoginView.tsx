import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, LogIn, Github, Facebook, Apple, Chrome } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { cn } from '../../lib/utils';

interface LoginViewProps {
  onBack: () => void;
  onSignup: () => void;
  onForgot: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onBack, onSignup, onForgot }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API delay
    setTimeout(() => {
      login({
        uid: 'user-' + Math.random().toString(36).substr(2, 9),
        displayName: email.split('@')[0],
        email: email,
        photoURL: null,
        isAnonymous: false
      });
      setLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    login({
      uid: 'google-user-' + Math.random().toString(36).substr(2, 9),
      displayName: 'Google User',
      email: 'google@example.com',
      photoURL: null,
      isAnonymous: false
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-md mx-auto px-6 py-12"
    >
      <button onClick={onBack} className="mb-8 p-2 rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white">
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black mb-2">Welcome Back</h2>
        <p className="text-white/40">Log in to your BDchatGPT account</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
          />
        </div>

        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-blue-500 transition-colors" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex items-center justify-between px-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500/50" />
            <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">Remember Me</span>
          </label>
          <button type="button" onClick={onForgot} className="text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors">
            Forgot Password?
          </button>
        </div>

        {error && <div className="text-red-400 text-xs px-2 font-medium">{error}</div>}

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {loading ? "Authenticating..." : <><LogIn className="w-5 h-5" /> Login</>}
        </motion.button>
      </form>

      <div className="my-10 flex items-center gap-4 text-white/10">
        <div className="h-px flex-1 bg-current" />
        <span className="text-xs font-bold uppercase tracking-widest">OR</span>
        <div className="h-px flex-1 bg-current" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-4 rounded-2xl hover:bg-white/10 transition-all">
          <Chrome className="w-5 h-5 text-white/60" />
          <span className="text-xs font-bold">Google</span>
        </button>
        <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-4 rounded-2xl hover:bg-white/10 transition-all">
          <Github className="w-5 h-5 text-white/60" />
          <span className="text-xs font-bold">GitHub</span>
        </button>
        <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-4 rounded-2xl hover:bg-white/10 transition-all">
          <Facebook className="w-5 h-5 text-blue-500" />
          <span className="text-xs font-bold">Facebook</span>
        </button>
        <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-4 rounded-2xl hover:bg-white/10 transition-all">
          <Apple className="w-5 h-5 text-white/60" />
          <span className="text-xs font-bold">Apple</span>
        </button>
      </div>

      <p className="mt-12 text-center text-sm text-white/40">
        Don't have an account?{' '}
        <button onClick={onSignup} className="text-blue-500 font-bold hover:text-blue-400 transition-colors">
          Sign Up
        </button>
      </p>

      <div className="mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-white/20 uppercase tracking-widest leading-relaxed">
        By continuing, you agree to our <br />
        <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>
      </div>
    </motion.div>
  );
};
