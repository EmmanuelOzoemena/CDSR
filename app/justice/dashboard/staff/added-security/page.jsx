import React from "react";

const AddedSecurity = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose(); 
    window.location.reload();
  };

  return (
    <div className="added-security">
      <div className="added-security__overlay" onClick={handleClose}></div>
      <div className="added-security__added-notif">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill="#C0FFC3" />
          <path
            d="M28.5099 14.85L22.5699 11.42C21.5999 10.86 20.3999 10.86 19.4199 11.42L13.4899 14.85C12.5199 15.41 11.9199 16.45 11.9199 17.58V24.42C11.9199 25.54 12.5199 26.58 13.4899 27.15L19.4299 30.58C20.3999 31.14 21.5999 31.14 22.5799 30.58L28.5199 27.15C29.4899 26.59 30.0899 25.55 30.0899 24.42V17.58C30.0799 16.45 29.4799 15.42 28.5099 14.85ZM20.9999 16.34C22.2899 16.34 23.3299 17.38 23.3299 18.67C23.3299 19.96 22.2899 21 20.9999 21C19.7099 21 18.6699 19.96 18.6699 18.67C18.6699 17.39 19.7099 16.34 20.9999 16.34ZM23.6799 25.66H18.3199C17.5099 25.66 17.0399 24.76 17.4899 24.09C18.1699 23.08 19.4899 22.4 20.9999 22.4C22.5099 22.4 23.8299 23.08 24.5099 24.09C24.9599 24.75 24.4799 25.66 23.6799 25.66Z"
            fill="#009B07"
          />
        </svg>
        <div>
          A new Security Guard has been added <span>(Femi Olalekan)</span>
        </div>
      </div>
    </div>
  );
};

export default AddedSecurity;
