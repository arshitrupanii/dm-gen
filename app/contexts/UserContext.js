"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from 'utils/supabase/client';
import { useRouter } from 'next/navigation';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    fullName: '',
    jobTitle: '',
    experienceLevel: 'beginner',
    companyName: '',
  });
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setIsLoading(false);
    });
    fetchUser();
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const logout = async () => {
    setIsLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setIsLoading(false);
    router.push('/dashboard');
  };

  const updateUserData = (newData) => {
    setUserData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  const clearUserData = () => {
    setUserData({
      fullName: '',
      jobTitle: '',
      experienceLevel: 'beginner',
      companyName: '',
    });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, clearUserData, user, isLoading, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
} 