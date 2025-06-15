import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useSurebankerToggle } from "../../../../context/surebankerToogleModal";
import { useSurebankerToggleSuccess } from "../../../../context/surebankerToggleSuccessModal";

import "./SurebankerOtp.scss";

const SureBankerOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isError, setIsError] = useState(false);
  const { close } = useSurebankerToggle();
  const { open } = useSurebankerToggleSuccess();

  const handleChange = () => {
    // Only allow single digit
    if (value.length > 1) return;

    // Only allow numbers
    if (value && isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setIsError(false);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  return (
    <section className="surebanker-otp-overlay">
      <div className="surebanker-otp-container">
        <div className="surebanker-otp-close-btn">
          <button onClick={() => (window.location.href = "/justice/dashboard")}>
            <Image
              src="/icons/closeBtn.svg"
              alt="close btn"
              width={30}
              height={10}
            />
          </button>
        </div>
        <div className="space-y-6">
          {/* Header Section */}
          <div className="surebanker-otp-header">
            <h1 className="surebanker-otp-title">OTP Verification</h1>
            <p className="surebanker-otp-description">
              Enter the OTP sent to your Email and Phone Number, to link your
              Surebanker Account.
            </p>
          </div>

          <div className="surebanker-otp-inputs">
            <div className="surebanker-otp-grid">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleChange(index, e.target.value)
                  }
                  className={`surebanker-otp-input ${
                    isError
                      ? "surebanker-otp-input-error"
                      : "surebanker-otp-input-default"
                  }`}
                />
              ))}
            </div>
            <div>
              <Link href="" className="surebanker-otp-link">
                Request a new code
              </Link>
            </div>

            {/* Footer Section */}
            <div className="surebanker-otp-footer">
              <button
                className="surebanker-otp-button"
                onClick={() => {
                  close();
                  open();
                }}
              >
                Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SureBankerOtp;
