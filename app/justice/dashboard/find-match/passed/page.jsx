"use client";

import Image from "next/image";
import { useState } from "react";

export default function Passed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // if (!isOpen) return null;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleProcessed = () => {
    setIsProcessed(true);
    setIsModalOpen(false);
  };

  const handleClose = () => {
    closeModal()
    window.location.reload();
  };

  return (
    <div className="pass">
      <div className="pass__overlay" onClick={handleClose}></div>

      <div className="pass__content">
        {!isModalOpen && !isProcessed && (
          <>
            <div className="pass__content__img">
              <Image
                alt="Profile"
                src="/assets/suspect-img.png"
                width={106.786}
                height={110}
                style={{ borderRadius: "50%" }}
              />

              <svg
                width="33"
                height="32"
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
            </div>

            <div className="pass__content__text">
              <h2>Frank Karfa Ammadou</h2>
              <p>Passed Background Check</p>
            </div>

            <div
              className={`pass__content__button 
            ${isModalOpen ? "register" : ""}`}
              onClick={handleModalOpen}
            >
              Register
            </div>
          </>
        )}

        {isModalOpen && !isProcessed && (
          <div className="pass__content__occupation">
            <h2>Register Staff as</h2>

            <div className="pass__content__occupation__btn">
              <div onClick={handleProcessed}>Domestic Staff</div>
              <div onClick={handleProcessed}>Security Guard</div>
              <div onClick={handleProcessed}>Driver</div>
            </div>
          </div>
        )}

        {isProcessed && (
          <>
            <div className="pass__content__img">
              <Image
                alt="Profile"
                src="/assets/suspect-img.png"
                width={106.786}
                height={110}
                style={{ borderRadius: "50%" }}
              />

              <svg
                width="33"
                height="32"
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
            </div>

            <div className="pass__content__text">
              <h2>Background Check is being processed</h2>
              <span>
                Please check your email for a status update <br />
                within 12hrs - 48hrs <br /> <br />
                Confirmation #: CDSR20240918
              </span>
            </div>

            <div className="pass__content__button" onClick={handleClose}>
              Done
            </div>
          </>
        )}
      </div>
    </div>
  );
}
