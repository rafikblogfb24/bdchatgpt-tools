import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

interface ForgotPasswordViewProps {
  onBack: () => void;
}

export const ForgotPasswordView: React.FC<ForgotPasswordViewProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Simulate reset
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 1000);
  };

  if (success) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto px-6 py-20 text-center"
      >
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black mb-4">Reset Link Sent</h2>
        <p className="text-white/40 mb-10 leading-relaxed">
          We've sent a password reset link to <span className="text-white font-bold">{email}</span>. 
          Please check your inbox and spam folder.
        </p>
        <button 
          onClick={onBack}
          className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-white/90 transition-all"
        >
          Back to Login
        </button>
      </motion.div>
    );
  }

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

      <div className="mb-10">
        <h2 className="text-3xl font-black mb-2">Forgot Password?</h2>
        <p className="text-white/40">Don't worry, it happens. Enter your email and we'll send you a link to reset your password.</p>
      </div>

      <form onSubmit={handleReset} className="space-y-6">
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

        {error && <div className="text-red-400 text-xs px-2 font-medium">{error}</div>}

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {loading ? "Sending..." : <><Send className="w-5 h-5" /> Send Reset Link</>}
        </motion.button>
      </form>
    </motion.div>
  );
};
