"use client";
import React, { createContext, useContext, useState } from 'react';


const SurebankerToggleContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function SurebankerToggleProvider({ children}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <SurebankerToggleContext.Provider
      value={{
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </SurebankerToggleContext.Provider>
  );
}

// Custom hook to use the surebanker modal context
export function useSurebankerToggle() {
  const context = useContext(SurebankerToggleContext);
  if (context === undefined) {
    throw new Error('useSurebankerToggle must be used within a SurebankerToggleProvider');
  }
  return context;
}
