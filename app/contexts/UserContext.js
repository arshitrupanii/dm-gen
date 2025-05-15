"use client"
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    fullName: '',
    jobTitle: '',
    experienceLevel: 'beginner',
    companyName: '',
  });

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
    <UserContext.Provider value={{ userData, updateUserData, clearUserData }}>
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