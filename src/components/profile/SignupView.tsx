import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Phone, Globe, ArrowLeft, UserPlus, Chrome, Github, Facebook } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface SignupViewProps {
  onBack: () => void;
  onLogin: () => void;
}

export const SignupView: React.FC<SignupViewProps> = ({ onBack, onLogin }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: 'Bangladesh'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setError('');
    
    // Simulate API delay
    setTimeout(() => {
      login({
        uid: 'user-' + Math.random().toString(36).substr(2, 9),
        displayName: formData.name,
        email: formData.email,
        photoURL: null,
        isAnonymous: false
      });
      setLoading(false);
    }, 1000);
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
        <h2 className="text-3xl font-black mb-2">Create Account</h2>
        <p className="text-white/40">Join the premium AI tool suite</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-4">
        <div className="relative group">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-blue-500 transition-colors" />
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
          />
        </div>

        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-blue-500 transition-colors" />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-blue-500 transition-colors" />
            <input
              name="phone"
              type="tel"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-11 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium text-sm"
            />
          </div>
          <div className="relative group">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-blue-500 transition-colors" />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-11 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium text-sm appearance-none"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="United States">USA</option>
              <option value="United Kingdom">UK</option>
              <option value="India">India</option>
            </select>
          </div>
        </div>

        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-blue-500 transition-colors" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
          />
        </div>

        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-blue-500 transition-colors" />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
          />
        </div>

        <div className="px-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500/50" />
            <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
              I agree to the Terms & Conditions and Privacy Policy of BDchatGPT tools.
            </span>
          </label>
        </div>

        {error && <div className="text-red-400 text-xs px-2 font-medium">{error}</div>}

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {loading ? "Creating..." : <><UserPlus className="w-5 h-5" /> Create Account</>}
        </motion.button>
      </form>

      <div className="my-10 flex items-center gap-4 text-white/10">
        <div className="h-px flex-1 bg-current" />
        <span className="text-xs font-bold uppercase tracking-widest">OR</span>
        <div className="h-px flex-1 bg-current" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button 
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              login({
                uid: 'google-' + Math.random().toString(36).substr(2, 9),
                displayName: 'Guest User',
                email: 'guest@google.com',
                photoURL: null,
                isAnonymous: false
              });
              setLoading(false);
            }, 1000);
          }} 
          className="flex items-center justify-center py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
        >
          <Chrome className="w-5 h-5 text-white/60" />
        </button>
        <button className="flex items-center justify-center py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
          <Github className="w-5 h-5 text-white/60" />
        </button>
        <button className="flex items-center justify-center py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
          <Facebook className="w-5 h-5 text-blue-500" />
        </button>
      </div>

      <p className="mt-12 text-center text-sm text-white/40">
        Already have an account?{' '}
        <button onClick={onLogin} className="text-blue-500 font-bold hover:text-blue-400 transition-colors">
          Login
        </button>
      </p>
    </motion.div>
  );
};
