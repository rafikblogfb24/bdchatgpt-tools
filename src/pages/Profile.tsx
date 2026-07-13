import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../hooks/useAuth';
import { GuestView } from '../components/profile/GuestView';
import { LoggedInView } from '../components/profile/LoggedInView';
import { LoginView } from '../components/profile/LoginView';
import { SignupView } from '../components/profile/SignupView';
import { ForgotPasswordView } from '../components/profile/ForgotPasswordView';
import { Loader2 } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

type ProfileState = 'GUEST' | 'LOGIN' | 'SIGNUP' | 'FORGOT';

export const Profile: React.FC = () => {
  const { user, loading, login } = useAuth();
  const [state, setState] = useState<ProfileState>('GUEST');

  const handleGuestLogin = () => {
    login({
      uid: 'guest-' + Math.random().toString(36).substr(2, 9),
      displayName: 'Guest User',
      email: null,
      photoURL: null,
      isAnonymous: true
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617]">
        <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
        <p className="text-white/40 font-medium animate-pulse">Initializing Premium Environment...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#020617] text-white min-h-screen">
      <Helmet>
        <title>{user ? `${user.displayName || 'Profile'} | BDchatGPT` : 'Welcome | BDchatGPT'}</title>
      </Helmet>

      <div className="pt-16 md:pt-20">
        {user ? (
          <LoggedInView user={user} />
        ) : (
          <AnimatePresence mode="wait">
            {state === 'GUEST' && (
              <GuestView 
                key="guest"
                onLogin={() => setState('LOGIN')} 
                onSignup={() => setState('SIGNUP')} 
                onGuestLogin={handleGuestLogin}
              />
            )}
            {state === 'LOGIN' && (
              <LoginView 
                key="login"
                onBack={() => setState('GUEST')} 
                onSignup={() => setState('SIGNUP')}
                onForgot={() => setState('FORGOT')}
              />
            )}
            {state === 'SIGNUP' && (
              <SignupView 
                key="signup"
                onBack={() => setState('GUEST')} 
                onLogin={() => setState('LOGIN')}
              />
            )}
            {state === 'FORGOT' && (
              <ForgotPasswordView 
                key="forgot"
                onBack={() => setState('LOGIN')} 
              />
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
