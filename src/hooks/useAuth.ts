import { useState, useEffect } from 'react';

export interface LocalUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  isAnonymous: boolean;
}

export function useAuth() {
  const [user, setUser] = useState<LocalUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for a stored user
    const storedUser = localStorage.getItem('bdchatgpt_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData: LocalUser) => {
    localStorage.setItem('bdchatgpt_user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('bdchatgpt_user');
    setUser(null);
  };

  return { user, loading, login, logout };
}
