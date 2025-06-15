"use client";
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        open,
        close,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

// Custom hook to use the modal context
export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
