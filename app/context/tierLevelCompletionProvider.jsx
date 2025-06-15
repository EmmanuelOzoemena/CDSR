"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const TierLevelCompletionContext = createContext();

export function TierLevelCompletionProvider({ children }) {
  const [generalType, setGeneralType] = useState("");
  const [tierStates, setTierStates] = useState({
    tierOne: false,
    tierTwo: false,
    tierTwoNin: false,
    tierTwoBusiness: false,
    success: false,
    tierTwoAttest: false,
    final: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("type");
      if (item !== null) {
        setGeneralType(item);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("type", generalType);
    }
  }, [generalType]);

  const toggleTier = (tier, value) => {
    setTierStates((prev) => ({ ...prev, [tier]: value }));
  };

  return (
    <TierLevelCompletionContext.Provider
      value={{
        generalType,
        setGeneralType,
        tierStates,
        toggleTier,
      }}
    >
      {children}
    </TierLevelCompletionContext.Provider>
  );
}

export function useTierLevelCompletion() {
  const context = useContext(TierLevelCompletionContext);
  if (context === undefined) {
    throw new Error("useTierLevelCompletion must be used within a TierLevelCompletionProvider");
  }
  return context;
}
