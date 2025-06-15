"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home(params) {
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const handleEmployerCardClick = () => {
    localStorage.setItem("role", "Employer");
    setModalOpen(true); 
  };

   const handleRoleSelection = (category) => {
    localStorage.setItem("role", `Employer (${category})`);
    setModalOpen(false); // Close modal after selection
    window.location.href = "/justice/login"; // Redirect to login page
  };

  const handleModalClose = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <main className="justice-home">
      <Image
        className="justice-home__logo"
        alt=""
        src="/assets/logo.png"
        width={110}
        height={110}
      />

      <h1 className="justice-home__title">
        Centralised Domestic Staff Register CDSR
      </h1>
      <h2 className="justice-home__subtitle">
        {/* Administered by Federal Ministry of Justice Department of Public
        Prosecution */}
      </h2>
      <h3 className="justice-home__subsubtitle">Sign In as</h3>

      <div className="justice-home__cards">
        <div
          className="justice-home__cards__card"
          onClick={handleEmployerCardClick}
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.816406"
              y="0.904297"
              width="32"
              height="32"
              rx="16"
              fill="#FFA24C"
            />
          </svg>
          <h4>Employer</h4>
        </div>

        <div
          className="justice-home__cards__card"
          onClick={() => {
            localStorage.setItem("role", "Employee");
            window.location.href = "/justice/login";
          }}
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.816406"
              y="0.904297"
              width="32"
              height="32"
              rx="16"
              fill="#FFA24C"
            />
          </svg>
          <h4>Employee</h4>
        </div>

        <div
          className="justice-home__cards__card"
          onClick={() => {
            localStorage.setItem("role", "Medical Sector (Vendor)");
            window.location.href = "/justice/login";
          }}
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.816406"
              y="0.904297"
              width="32"
              height="32"
              rx="16"
              fill="#FFA24C"
            />
          </svg>
          <h4>Medical Sector (Vendor)</h4>
        </div>

        <div
          className="justice-home__cards__card"
          onClick={() => {
            localStorage.setItem("role", "Governmental Party");
            window.location.href = "/justice/login";
          }}
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.816406"
              y="0.904297"
              width="32"
              height="32"
              rx="16"
              fill="#FFA24C"
            />
          </svg>
          <h4>Governmental Party</h4>
        </div>
      </div>

      {modalOpen && (
        <div
          className="auth__modal"
          onClick={handleModalClose} // Close modal when clicked outside
        >
          <form className="auth__modal__inner">
            <div className="auth__modal__inner__title">
              Employer Sign-In Options
            </div>
            <div className="auth__modal__inner__subtitle">
              Choose Your Employer Type
            </div>

            {/* Button to select Employer Type */}

            <div className="auth__modal__inner__options">
              <button onClick={() => handleRoleSelection("Individual")}>
                Individual
              </button>
              <button onClick={() => handleRoleSelection("Business")}>
                Business
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
