"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import "./BvnOtp.scss";

const BtnOtpVerification = ({ onToggle, onNavigate }) => {
  // const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  // const [isError, setIsError] = useState(false);

  const [bvn, setBvn] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

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

  // const handleChange = (index, value) => {
  //   if (value.length > 1 || (value && isNaN(Number(value)))) return;

  //   const newOtp = [...otp];
  //   newOtp[index] = value;
  //   setOtp(newOtp);
  //   setIsError(false);

  //   if (value && index < 5) {
  //     const nextInput = document.getElementById(`otp-${index + 1}`);
  //     if (nextInput) nextInput.focus();
  //   }
  // };

  return (
    <div className="auth__modal" onClick={onToggle}>
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
          onClick={onNavigate}
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
  );
};

export default BtnOtpVerification;
