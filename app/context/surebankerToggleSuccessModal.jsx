"use client";
import React, { createContext, useContext, useState } from "react";

// Create the context with a default value of `undefined`
const SurebankerToggleSuccessContext = createContext();
// Create the provider component
export function SurebankerToggleSuccessProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <SurebankerToggleSuccessContext.Provider
      value={{
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </SurebankerToggleSuccessContext.Provider>
  );
}

// Custom hook to use the SurebankerToggleSuccess context
export function useSurebankerToggleSuccess() {
  const context = useContext(SurebankerToggleSuccessContext);
  if (context === undefined) {
    throw new Error("useSurebankerToggleSuccess must be used within a SurebankerToggleSuccessProvider");
  }
  return context;
}
