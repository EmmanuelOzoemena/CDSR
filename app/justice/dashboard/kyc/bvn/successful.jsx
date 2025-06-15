"use client"

import React from "react";

const BvnSuccessful = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    window.location.reload();
  };

  return (
    <div className="bvn-successful">
      <div className="bvn-successful__overlay" onClick={handleClose}></div>
      <div className="bvn-successful__added-notif">
        <svg
          width="34"
          height="34"
          viewBox="0 0 93 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.6069 86.25C57.2819 86.25 67.5196 82.0094 75.068 74.461C82.6163 66.9127 86.8569 56.675 86.8569 46C86.8569 35.325 82.6163 25.0873 75.068 17.539C67.5196 9.99061 57.2819 5.75 46.6069 5.75C35.932 5.75 25.6942 9.99061 18.1459 17.539C10.5975 25.0873 6.35693 35.325 6.35693 46C6.35693 56.675 10.5975 66.9127 18.1459 74.461C25.6942 82.0094 35.932 86.25 46.6069 86.25ZM40.7419 62.5025H36.6594L23.6069 49.45L27.6894 45.3675L38.7294 56.4075L62.8794 32.2L66.9619 36.2825L40.7419 62.5025Z"
            fill="#009B07"
          />
        </svg>
        <div>
          <span>BVN Verification Successful</span>
        </div>
      </div>
    </div>
  );
};

export default BvnSuccessful;
