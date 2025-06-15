"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import FaceSuccessful from "../successful/page";

const FacialVerification = ({ onClose }) => {
  const [currentContent, setCurrentContent] = useState(1);
  const [showDone, setShowDone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [faceSuccessful, setFaceSuccessful] = useState(false);

  const handleOpenSuccess = () => {
    setFaceSuccessful(true);
  };

  const handleCloseSuccess = () => {
    setFaceSuccessful(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNextContent = () => {
    setCurrentContent((prev) => prev + 1);
  };

  const handleClose = () => {
    onClose();
    window.location.reload();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDone(true);
    }, 6500);

    return () => clearTimeout(timer);
  }, []);

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

        {currentContent === 1 && (
          <>
            <div className="kyc__added-notif__heading">
              <h1>Face Verification</h1>
              <p className="face-verify">
                Your face needs to be verified against your NIN information.{" "}
                <br />
                Please follow the guardline below to ensure proper capture
              </p>
            </div>

            <div className="kyc__added-notif__facial-icon">
              Facial Verification Icon

               </div>

            <div className="kyc__added-notif__tips">
              <h2>Tips:</h2>

              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#fff" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.666 9.33301C12.9046 9.33301 10.666 11.6236 10.666 14.4493C10.666 15.9642 11.31 17.3258 12.3317 18.2619C12.6723 18.574 12.9246 18.8051 13.1034 18.9728C13.1928 19.0567 13.2611 19.1222 13.3115 19.1725C13.3367 19.1976 13.3559 19.2174 13.3703 19.2328C13.3773 19.2404 13.3827 19.2463 13.3866 19.2507C13.3903 19.2551 13.3921 19.2573 13.3921 19.2573C13.5498 19.4564 13.5839 19.5078 13.6043 19.5543C13.6246 19.6009 13.6392 19.6611 13.679 19.9141C13.6947 20.014 13.6963 20.1851 13.6963 20.6508L13.6963 20.6708C13.6963 20.9436 13.6963 21.1788 13.7134 21.3719C13.7315 21.576 13.7715 21.7781 13.879 21.9687C13.9987 22.1808 14.1708 22.3569 14.3781 22.4794C14.5643 22.5894 14.7619 22.6304 14.9614 22.6489C15.15 22.6664 15.3799 22.6664 15.6465 22.6663H15.6856C15.9521 22.6664 16.182 22.6664 16.3707 22.6489C16.5702 22.6304 16.7677 22.5894 16.9539 22.4794C17.1612 22.3569 17.3333 22.1808 17.453 21.9687C17.5605 21.7781 17.6006 21.576 17.6186 21.3719C17.6357 21.1788 17.6357 20.9436 17.6357 20.6708V20.6508C17.6357 20.1851 17.6373 20.014 17.653 19.9141C17.6928 19.6611 17.7074 19.6009 17.7278 19.5543C17.7481 19.5078 17.7822 19.4564 17.9399 19.2573C17.9399 19.2573 17.9415 19.2553 17.9455 19.2507C17.9494 19.2463 17.9547 19.2404 17.9618 19.2328C17.9761 19.2174 17.9953 19.1976 18.0205 19.1725C18.0709 19.1222 18.1393 19.0567 18.2287 18.9728C18.4075 18.8051 18.6597 18.574 19.0003 18.2619C20.022 17.3258 20.666 15.9642 20.666 14.4493C20.666 11.6236 18.4274 9.33301 15.666 9.33301ZM16.7227 21.116H14.6093C14.6113 21.1806 14.6143 21.2371 14.6188 21.2879C14.6311 21.4275 14.652 21.4782 14.6663 21.5036C14.7062 21.5743 14.7636 21.633 14.8327 21.6738C14.8574 21.6884 14.907 21.7098 15.0434 21.7224C15.1861 21.7357 15.3744 21.7361 15.666 21.7361C15.9576 21.7361 16.1459 21.7357 16.2886 21.7224C16.425 21.7098 16.4746 21.6884 16.4993 21.6738C16.5684 21.633 16.6258 21.5743 16.6657 21.5036C16.68 21.4782 16.7009 21.4275 16.7133 21.2879C16.7178 21.2371 16.7207 21.1806 16.7227 21.116ZM16.4063 13.4507C16.6106 13.6 16.6579 13.8904 16.512 14.0995L15.7267 15.2245H16.6616C16.8319 15.2245 16.9879 15.3219 17.0658 15.4768C17.1437 15.6317 17.1304 15.8182 17.0315 15.9599L15.7328 17.8204C15.5869 18.0294 15.303 18.0778 15.0987 17.9285C14.8944 17.7792 14.8471 17.4887 14.993 17.2797L15.7783 16.1547H14.8434C14.6732 16.1547 14.5172 16.0573 14.4393 15.9024C14.3613 15.7475 14.3746 15.561 14.4735 15.4193L15.7722 13.5588C15.9182 13.3498 16.202 13.3013 16.4063 13.4507Z"
                    fill="#009b07"
                  />
                </svg>
                <span>Stay in a brightly lit environment</span>
              </div>

              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#dbffdd" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2014 9.71279C15.2534 9.9693 15.0877 10.2195 14.8312 10.2715C12.5417 10.7362 10.7372 12.5407 10.2725 14.8302C10.2204 15.0867 9.97023 15.2524 9.71372 15.2003C9.45721 15.1483 9.29148 14.8981 9.34355 14.6416C9.88401 11.9791 11.9801 9.88303 14.6426 9.3426C14.8991 9.29054 15.1493 9.45628 15.2014 9.71279Z"
                    fill="#009b07"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.71382 16.799C9.97033 16.747 10.2205 16.9127 10.2726 17.1692C10.7373 19.4587 12.5418 21.2632 14.8313 21.7279C15.0878 21.7799 15.2535 22.0301 15.2015 22.2866C15.1494 22.5431 14.8992 22.7088 14.6427 22.6568C11.9802 22.1164 9.88411 20.0203 9.34365 17.3578C9.29158 17.1013 9.45731 16.8511 9.71382 16.799Z"
                    fill="#009b07"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7999 9.71276C16.852 9.45624 17.1022 9.29051 17.3587 9.34257C20.0212 9.88299 22.1173 11.9791 22.6578 14.6416C22.7098 14.8981 22.5441 15.1482 22.2876 15.2003C22.0311 15.2524 21.7809 15.0866 21.7288 14.8301C21.2641 12.5407 19.4596 10.7362 17.1701 10.2715C16.9136 10.2194 16.7479 9.96927 16.7999 9.71276Z"
                    fill="#009b07"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2876 16.799C22.5441 16.8511 22.7098 17.1013 22.6578 17.3578C22.1173 20.0203 20.0212 22.1164 17.3587 22.6568C17.1022 22.7088 16.852 22.5431 16.7999 22.2866C16.7479 22.0301 16.9136 21.7799 17.1701 21.7279C19.4596 21.2632 21.2641 19.4587 21.7288 17.1692C21.7809 16.9127 22.0311 16.747 22.2876 16.799Z"
                    fill="#009b07"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0006 21.0549C18.7925 21.0549 21.0558 18.7916 21.0558 15.9997C21.0558 13.2078 18.7925 10.9445 16.0006 10.9445C13.2087 10.9445 10.9454 13.2078 10.9454 15.9997C10.9454 18.7916 13.2087 21.0549 16.0006 21.0549ZM13.9611 17.6922C14.117 17.4819 14.4138 17.4378 14.6241 17.5936C15.0171 17.885 15.491 18.0534 16.0006 18.0534C16.5102 18.0534 16.9841 17.885 17.3771 17.5936C17.5874 17.4378 17.8842 17.4819 18.0401 17.6922C18.1959 17.9024 18.1518 18.1993 17.9416 18.3551C17.3943 18.7608 16.7245 19.0012 16.0006 19.0012C15.2767 19.0012 14.6069 18.7608 14.0596 18.3551C13.8494 18.1993 13.8053 17.9024 13.9611 17.6922ZM18.2123 14.9334C18.2123 15.3914 17.9647 15.7627 17.6593 15.7627C17.354 15.7627 17.1064 15.3914 17.1064 14.9334C17.1064 14.4753 17.354 14.104 17.6593 14.104C17.9647 14.104 18.2123 14.4753 18.2123 14.9334ZM14.3419 15.7627C14.6472 15.7627 14.8948 15.3914 14.8948 14.9334C14.8948 14.4753 14.6472 14.104 14.3419 14.104C14.0365 14.104 13.789 14.4753 13.789 14.9334C13.789 15.3914 14.0365 15.7627 14.3419 15.7627Z"
                    fill="#009b07"
                  />
                </svg>

                <span>Your face is inside the frame</span>
              </div>

              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#dbffdd" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1588 11.1415C12.4207 11.0541 12.5623 10.771 12.475 10.509C12.3877 10.247 12.1045 10.1055 11.8425 10.1928L11.4727 10.3161C11.0921 10.4429 10.7695 10.5505 10.5134 10.6675C10.2408 10.7921 10.0023 10.9449 9.81238 11.1847C9.62248 11.4245 9.52834 11.6917 9.46951 11.9855C9.41422 12.2616 9.38344 12.6003 9.34713 12.9998L8.88229 18.113C8.85084 18.2913 8.83429 18.4746 8.83398 18.6618C8.83761 20.4076 10.254 21.8338 12.0006 21.8338C13.5761 21.8338 14.8829 20.6832 15.1266 19.1765L15.2726 19.1244C15.7434 18.9564 16.2579 18.9564 16.7287 19.1244L16.8747 19.1765C17.1184 20.6832 18.4251 21.8338 20.0006 21.8338C21.7473 21.8338 23.1637 20.4076 23.1673 18.6618C23.167 18.4746 23.1505 18.2913 23.119 18.113L22.6542 12.9998C22.6179 12.6003 22.5871 12.2616 22.5318 11.9855C22.4729 11.6917 22.3788 11.4245 22.1889 11.1847C21.999 10.9449 21.7605 10.7921 21.4879 10.6675C21.2318 10.5505 20.9092 10.4429 20.5286 10.3161L20.1588 10.1928C19.8968 10.1055 19.6136 10.247 19.5263 10.509C19.439 10.771 19.5806 11.0541 19.8425 11.1415L20.188 11.2566C20.5996 11.3938 20.8707 11.4849 21.0722 11.577C21.2627 11.6641 21.3482 11.7339 21.405 11.8056C21.4618 11.8772 21.5101 11.9764 21.5513 12.1818C21.5948 12.3991 21.6213 12.6839 21.6606 13.1159L21.9375 16.1616C21.4021 15.7471 20.7302 15.5005 20.0006 15.5005C18.4372 15.5005 17.1384 16.6334 16.8805 18.1231C16.3058 17.9569 15.6955 17.9569 15.1208 18.1231C14.8628 16.6334 13.5641 15.5005 12.0006 15.5005C11.2711 15.5005 10.5992 15.7471 10.0638 16.1616L10.096 15.8071L10.3407 13.1159C10.38 12.6839 10.4065 12.3991 10.45 12.1818C10.4912 11.9764 10.5395 11.8772 10.5963 11.8056C10.6531 11.7339 10.7385 11.6641 10.9291 11.577C11.1306 11.4849 11.4017 11.3938 11.8133 11.2566L12.1588 11.1415Z"
                    fill="#009b07"
                  />
                  <rect
                    x="7.29334"
                    y="9.75568"
                    width="2"
                    height="22"
                    rx="1"
                    transform="rotate(-47.0431 7.29334 9.75568)"
                    fill="#009b07"
                    stroke="#dbffdd"
                  />
                </svg>

                <span>
                  Remove sunglasses, hats, hijabs, face masks or any other{" "}
                  <br /> face coverings
                </span>
              </div>
            </div>

            <div
              className="kyc__added-notif__proceed"
              onClick={handleNextContent}
            >
              <div>Let's Start</div>
            </div>
          </>
        )}

        {currentContent === 2 && (
          <>
            <div className="kyc__added-notif__heading">
              <p className="scan">
                Please keep your face centered on the <br />
                screen and facing forward
              </p>
            </div>

            <div className="kyc__added-notif__scan-face">
              <Image alt="" src="/assets/face.png" width={206} height={255} />
            </div>

            {!showDone ? (
              <>
                <div className="kyc__added-notif__scanning-line">
                  <div className="scanning-line"></div>
                </div>

                <div className="kyc__added-notif__scanning-text">Scanning</div>
              </>
            ) : (
              <div
                className="kyc__added-notif__scanning-text"
                onClick={handleNextContent}
              >
                Done{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_6126_28290"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                  >
                    <path
                      d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12L11 15L17 9"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_6126_28290)">
                    <path
                      d="M0 0H24V24H0V0Z"
                      fill="url(#paint0_linear_6126_28290)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_6126_28290"
                      x1="12"
                      y1="0"
                      x2="12"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00CC25" />
                      <stop offset="0.0001" stopColor="#57F936" />
                      <stop offset="1" stopColor="#009B07" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </>
        )}

        {currentContent === 3 && (
          <>
            <div className="kyc__added-notif__scan-face">
              <Image alt="" src="/assets/face.png" width={206} height={255} />
            </div>

            <div
              className="kyc__added-notif__next-text"
              onClick={handleNextContent}
            >
              {" "}
              Next
            </div>
          </>
        )}

        {currentContent === 4 && (
          <>
            <div className="kyc__added-notif__heading">
              <p className="text">Blink your eyes</p>
            </div>

            <div className="kyc__added-notif__scan-face">
              <Image alt="" src="/assets/face.png" width={206} height={255} />
            </div>

            <div
              className="kyc__added-notif__next-text"
              onClick={handleNextContent}
            >
              {" "}
              Next
            </div>
          </>
        )}

        {currentContent === 5 && (
          <>
            <>
              <div className="kyc__added-notif__heading">
                <p className="text">Turn your head left/right</p>
              </div>

              <div className="kyc__added-notif__scan-face">
                <Image alt="" src="/assets/face.png" width={206} height={255} />
              </div>

              <div
                className="kyc__added-notif__next-text"
                onClick={handleNextContent}
              >
                {" "}
                Next
              </div>
            </>
          </>
        )}

        {currentContent === 6 && (
          <>
            <>
              <div className="kyc__added-notif__heading">
                <p className="text">Smile</p>
              </div>

              <div className="kyc__added-notif__scan-face">
                <Image alt="" src="/assets/face.png" width={206} height={255} />
              </div>

              <div
                className="kyc__added-notif__next-text"
                onClick={handleNextContent}
              >
                {" "}
                Next
              </div>
            </>
          </>
        )}

        {currentContent === 7 && (
          <>
            <>
              <div className="kyc__added-notif__heading">
                <p className="text">Say the phrase displayed</p>
              </div>

              <div className="kyc__added-notif__scan-face">
                <Image alt="" src="/assets/face.png" width={206} height={255} />
              </div>

              <div className="kyc__added-notif__scanning-text">
                Something Huge
              </div>

              <div
                className="kyc__added-notif__next-text"
                onClick={toggleModal}
              >
                {" "}
                Next
              </div>
            </>
          </>
        )}
      </div>

      {isModalOpen && (
        <div className="pass">
          <div className="pass__overlay" onClick={handleOpenSuccess}></div>

          <div className="pass__content">
            <div className="pass__content__image">
              <Image
                alt="Profile"
                src="/assets/face2.png"
                width={219}
                height={219}
              />

              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="white" />
                <mask
                  id="mask0_5752_77290"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="2"
                  width="36"
                  height="36"
                >
                  <path
                    d="M20.0026 36.6654C22.1917 36.6681 24.3598 36.2382 26.3822 35.4004C28.4047 34.5627 30.2416 33.3336 31.7876 31.7837C33.3375 30.2377 34.5666 28.4008 35.4044 26.3783C36.2421 24.3559 36.672 22.1878 36.6693 19.9987C36.672 17.8096 36.2421 15.6416 35.4044 13.6191C34.5666 11.5967 33.3375 9.75969 31.7876 8.21371C30.2416 6.66384 28.4047 5.43473 26.3822 4.59697C24.3598 3.75922 22.1917 3.32934 20.0026 3.33204C17.8135 3.32934 15.6455 3.75922 13.623 4.59697C11.6006 5.43473 9.76359 6.66384 8.21762 8.21371C6.66775 9.75969 5.43863 11.5967 4.60088 13.6191C3.76313 15.6416 3.33325 17.8096 3.33595 19.9987C3.33325 22.1878 3.76313 24.3559 4.60088 26.3783C5.43863 28.4008 6.66775 30.2377 8.21762 31.7837C9.76359 33.3336 11.6006 34.5627 13.623 35.4004C15.6455 36.2382 17.8135 36.6681 20.0026 36.6654Z"
                    fill="white"
                    stroke="white"
                    stroke-width="2.375"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3359 20L18.3359 25L28.3359 15"
                    stroke="black"
                    stroke-width="2.375"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_5752_77290)">
                  <path
                    d="M0.000488281 0H40.0005V40H0.000488281V0Z"
                    fill="#079200"
                  />
                </g>
              </svg>
            </div>

            <div className="pass__content__text">
              <h2 style={{ marginBottom: "7px" }}>
                Face Verification Complete
              </h2>
              <span style={{ color: "#717070" }}>
                Your smile just unlocked a world of possibilities.
              </span>
            </div>
          </div>
        </div>
      )}

      <FaceSuccessful isOpen={faceSuccessful} onClose={handleCloseSuccess} />
    </div>
  );
};

export default FacialVerification;
