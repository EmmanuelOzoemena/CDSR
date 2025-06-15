import React from "react";

const SuspectRetrieved = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="retrieved">
      <div className="retrieved__overlay" onClick={onClose}></div>
      <div className="retrieve-notif">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill="#C0FFC3" />
          <path
            d="M25 21.9V26.1C25 29.6 23.6 31 20.1 31H15.9C12.4 31 11 29.6 11 26.1V21.9C11 18.4 12.4 17 15.9 17H20.1C23.6 17 25 18.4 25 21.9Z"
            fill="#009B07"
          />
          <path
            d="M26.0998 11H21.8998C18.8167 11 17.3707 12.0941 17.0695 14.739C17.0065 15.2923 17.4648 15.75 18.0217 15.75H20.0998C24.2998 15.75 26.2498 17.7 26.2498 21.9V23.9781C26.2498 24.535 26.7074 24.9933 27.2608 24.9303C29.9057 24.629 30.9998 23.1831 30.9998 20.1V15.9C30.9998 12.4 29.5998 11 26.0998 11Z"
            fill="#009B07"
          />
        </svg>

        <div>Suspect Profile Retrieved</div>
      </div>
    </div>
  );
};

export default SuspectRetrieved;
