"use client";

import React, { useState, useRef } from "react";
import BvnSuccessful from "./successful";

const BVN = ({ onClose }) => {
  const [bvn, setBvn] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [bvnSuccessful, setBvnSuccessful] = useState(false);

  const handleOpenSuccess = () => {
    setBvnSuccessful(true);
  };

  const handleCloseSuccess = () => {
    setBvnSuccessful(false);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input if a number is entered
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleRequestNewCode = () => {
    alert("A new OTP code has been sent!");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and limit to 11 characters
    if (/^\d*$/.test(value) && value.length <= 11) {
      setBvn(value);
    }
  };

  const handleProceedClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    onClose();
    // window.location.reload();
  };

  return (
    <div className="kyc">
      <div className="kyc__overlay" onClick={handleClose}></div>
      <div className="kyc__added-notif">
        <div className="kyc__added-notif__back">
          <div onClick={onClose}>
            <svg
              width="35"
              height="35"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                fill="white"
                fill-opacity="0.26"
              />
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#E0E0E0"
              />
              <path
                d="M22.5 15L17.5 20L22.5 25"
                stroke="#101828"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Back</span>
          </div>
        </div>

        <div className="kyc__added-notif__heading">
          <h3>Please enter your BVN</h3>
          <p>Enter BVN of business owner</p>
        </div>

        <div className="kyc__added-notif__form">
          <form action="">
            <label htmlFor="BVN">Enter BVN</label>

            <div>
              <input
                type="text"
                placeholder="00989482922"
                value={bvn}
                onChange={handleInputChange}
              />
              {bvn.length === 11 && (
                <svg
                  width="18"
                  height="17"
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
              )}
            </div>

            <p>
              Dial <span>*565*0#</span> on your registered phone number to get
              your BVN
            </p>
          </form>
        </div>

        <div className="kyc__added-notif__proceed" onClick={handleProceedClick}>
          <div>Procced</div>
        </div>
      </div>

      {isModalOpen && (
        <div className="auth__modal">
          <div className="auth__modal__inner">
            <div className="auth__modal__inner__title">OTP Verification</div>
            <div className="auth__modal__inner__subtitle">
              Enter the OTP sent to the phone number registered to your BVN
              07036****90.
            </div>

            <div className="auth__modal__inner__otp-group">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="auth__modal__inner__otp-group__input"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>

            <div
              className="auth__modal__inner__request pointer"
              onClick={handleRequestNewCode}
            >
              Request a new code
            </div>

            <button
              onClick={handleOpenSuccess}
              disabled={!isOtpComplete}
              style={{
                backgroundColor: isOtpComplete ? "#009b07" : "#ccc",
                cursor: isOtpComplete ? "pointer" : "not-allowed",
              }}
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}

      <BvnSuccessful isOpen={bvnSuccessful} onClose={handleCloseSuccess} />
    </div>
  );
};

export default BVN;
