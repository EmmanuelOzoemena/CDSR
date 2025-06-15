"use client";

import React, { useState } from "react";
import Image from "next/image";
import Payment from "../payment/page";

const Review = ({ isOpen, onClose }) => {
  
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);
  
  if (!isOpen) return null;
  const handleOpenUserRequest = () => {
    setUserRequestOpen(true);
  };

  const handleCloseUserRequest = () => {
    setUserRequestOpen(false);
  };

  return (
    <div className="review">
      <div className="review__overlay" onClick={onClose}></div>
      <div className="review__content">
        <header className="review__content__header">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClose}
            >
              <path
                d="M9.57141 18.82C9.38141 18.82 9.19141 18.75 9.04141 18.6L2.97141 12.53C2.68141 12.24 2.68141 11.76 2.97141 11.47L9.04141 5.4C9.33141 5.11 9.81141 5.11 10.1014 5.4C10.3914 5.69 10.3914 6.17 10.1014 6.46L4.56141 12L10.1014 17.54C10.3914 17.83 10.3914 18.31 10.1014 18.6C9.96141 18.75 9.76141 18.82 9.57141 18.82Z"
                fill="#061B2E"
              />
              <path
                d="M20.5014 12.75H3.67141C3.26141 12.75 2.92141 12.41 2.92141 12C2.92141 11.59 3.26141 11.25 3.67141 11.25H20.5014C20.9114 11.25 21.2514 11.59 21.2514 12C21.2514 12.41 20.9114 12.75 20.5014 12.75Z"
                fill="#061B2E"
              />
            </svg>
            <h2>Review</h2>
          </div>

          <div>
            <button className="close-button" onClick={onClose}>
              <svg
                width="40"
                height="40"
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
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="#EAEEF4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.6233 20.6849L15.3536 24.9546L14.293 23.8939L18.5626 19.6243L14.293 15.3546L15.3536 14.2939L19.6233 18.5636L23.893 14.2939L24.9536 15.3546L20.684 19.6243L24.9536 23.8939L23.893 24.9546L19.6233 20.6849Z"
                  fill="#ED1651"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="review__content__container">
          <h2 className="review__content__container__title">Review</h2>
          <div className="review__content__container__infos">
            <Image
              alt=""
              src="/assets/rev-pic.png"
              width={83}
              height={82}
              style={{ borderRadius: "6px" }}
            />

            <div>
              <p>First Name:</p>
              <h2>Enogbo</h2>
            </div>
            <div>
              <p>Middle Name:</p>
              <h2>Ademola</h2>
            </div>
            <div>
              <p>Last Name:</p>
              <h2>Junior</h2>
            </div>
            <div>
              <p>Phone Number:</p>
              <h2>08037234897</h2>
            </div>
            <div>
              <p>Email Address:</p>
              <h2>junior01@gmail.com</h2>
            </div>
          </div>

          <div className="review__content__container__infos">
            <div>
              <p>Nationality:</p>
              <h2>Nigerian</h2>
            </div>
            <div>
              <p>State of Origin:</p>
              <h2>Delat State</h2>
            </div>
            <div>
              <p>LGA of Origin:</p>
              <h2>Ika Northeast</h2>
            </div>
            <div>
              <p>Last Known Address:</p>
              <h2>No 16 Akoje Street, Opebi, Ikeja</h2>
            </div>
          </div>

          <div className="review__content__container__infos">
            {/* <div>
              <h2>Identity Details</h2>
            </div> */}

            <div>
              <p>BVN:</p>
              <h2>
                77734792452
                <span className="unverify">
                  Unverified{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M5.83325 7.00016C5.83325 7.30958 5.95617 7.60633 6.17496 7.82512C6.39375 8.04391 6.6905 8.16683 6.99992 8.16683C7.30934 8.16683 7.60608 8.04391 7.82488 7.82512C8.04367 7.60633 8.16659 7.30958 8.16659 7.00016C8.16659 6.69074 8.04367 6.394 7.82488 6.17521C7.60608 5.95641 7.30934 5.8335 6.99992 5.8335C6.6905 5.8335 6.39375 5.95641 6.17496 6.17521C5.95617 6.394 5.83325 6.69074 5.83325 7.00016Z"
                      stroke="#BA0000"
                      stroke-width="1.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.61133 10.4662C7.40839 10.4893 7.20426 10.5006 7 10.5C4.9 10.5 3.15 9.33333 1.75 7C3.15 4.66667 4.9 3.5 7 3.5C9.1 3.5 10.85 4.66667 12.25 7C12.0111 7.40127 11.7457 7.78615 11.4555 8.15208M12.8333 12.8333L9.91667 9.91667M9.91667 12.8333L12.8333 9.91667"
                      stroke="#BA0000"
                      stroke-width="1.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>
            <div>
              <p>NIN:</p>
              <h2>
                22228959824
                <span className="verify">
                  Verified{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_400_88132)">
                      <path
                        d="M12 8.5L9.5 11L7.75 9.25L8.5 8.5L9.5 9.5L11.25 7.75L12 8.5ZM6.25 4.5C6.64782 4.5 7.02936 4.65804 7.31066 4.93934C7.59196 5.22064 7.75 5.60218 7.75 6C7.75 6.39782 7.59196 6.77936 7.31066 7.06066C7.02936 7.34196 6.64782 7.5 6.25 7.5C5.85218 7.5 5.47064 7.34196 5.18934 7.06066C4.90804 6.77936 4.75 6.39782 4.75 6C4.75 5.60218 4.90804 5.22064 5.18934 4.93934C5.47064 4.65804 5.85218 4.5 6.25 4.5ZM6.25 8.5C6.5 8.5 6.735 8.465 6.96 8.395C6.825 8.75 6.75 9.11 6.75 9.5V9.725L6.25 9.75C3.75 9.75 1.615 8.195 0.75 6C1.615 3.805 3.75 2.25 6.25 2.25C8.75 2.25 10.885 3.805 11.75 6C11.625 6.32 11.47 6.63 11.29 6.925C10.84 6.655 10.31 6.5 9.75 6.5C9.36 6.5 9 6.575 8.645 6.71C8.715 6.485 8.75 6.25 8.75 6C8.75 5.33696 8.48661 4.70107 8.01777 4.23223C7.54893 3.76339 6.91304 3.5 6.25 3.5C5.58696 3.5 4.95107 3.76339 4.48223 4.23223C4.01339 4.70107 3.75 5.33696 3.75 6C3.75 6.66304 4.01339 7.29893 4.48223 7.76777C4.95107 8.23661 5.58696 8.5 6.25 8.5Z"
                        fill="#177D52"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_400_88132">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.25)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </h2>
            </div>
            <div>
              <p>Driver's License Number:</p>
              <h2>
                KJ2893959824
                <span className="pending">
                  Pending
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <path
                      d="M2.5 0.5C1.945 0.5 1.5 0.945 1.5 1.5V3.5C1.5 4.055 1.945 4.5 2.5 4.5H1V5.5H7V4.5H5.5C6.055 4.5 6.5 4.055 6.5 3.5V1.5C6.5 0.945 6.055 0.5 5.5 0.5H2.5ZM2.5 1.5H5.5V3.5H2.5V1.5ZM2 6V7H3V6H2ZM7.5 6.5C6.945 6.5 6.5 6.945 6.5 7.5V9.5C6.5 10.055 6.945 10.5 7.5 10.5H6V11.5H12V10.5H10.5C11.055 10.5 11.5 10.055 11.5 9.5V7.5C11.5 6.945 11.055 6.5 10.5 6.5H7.5ZM2 7.5V8.5H3V7.5H2ZM7.5 7.5H10.5V9.5H7.5V7.5ZM2 9V10H3V9H2ZM3.5 9V10H4.5V9H3.5ZM5 9V10H6V9H5Z"
                      fill="#C27700"
                    />
                  </svg>
                </span>
              </h2>
            </div>
            <div>
              <p>Passport Number:</p>
              <h2>
                KJ2893959824
                <span className="verify">
                  Verified
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_400_88132)">
                      <path
                        d="M12 8.5L9.5 11L7.75 9.25L8.5 8.5L9.5 9.5L11.25 7.75L12 8.5ZM6.25 4.5C6.64782 4.5 7.02936 4.65804 7.31066 4.93934C7.59196 5.22064 7.75 5.60218 7.75 6C7.75 6.39782 7.59196 6.77936 7.31066 7.06066C7.02936 7.34196 6.64782 7.5 6.25 7.5C5.85218 7.5 5.47064 7.34196 5.18934 7.06066C4.90804 6.77936 4.75 6.39782 4.75 6C4.75 5.60218 4.90804 5.22064 5.18934 4.93934C5.47064 4.65804 5.85218 4.5 6.25 4.5ZM6.25 8.5C6.5 8.5 6.735 8.465 6.96 8.395C6.825 8.75 6.75 9.11 6.75 9.5V9.725L6.25 9.75C3.75 9.75 1.615 8.195 0.75 6C1.615 3.805 3.75 2.25 6.25 2.25C8.75 2.25 10.885 3.805 11.75 6C11.625 6.32 11.47 6.63 11.29 6.925C10.84 6.655 10.31 6.5 9.75 6.5C9.36 6.5 9 6.575 8.645 6.71C8.715 6.485 8.75 6.25 8.75 6C8.75 5.33696 8.48661 4.70107 8.01777 4.23223C7.54893 3.76339 6.91304 3.5 6.25 3.5C5.58696 3.5 4.95107 3.76339 4.48223 4.23223C4.01339 4.70107 3.75 5.33696 3.75 6C3.75 6.66304 4.01339 7.29893 4.48223 7.76777C4.95107 8.23661 5.58696 8.5 6.25 8.5Z"
                        fill="#177D52"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_400_88132">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.25)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </h2>
            </div>
          </div>

          <div className="review__content__container__employ">
            <h2>Previous Employment</h2>

            <div className="employ-flex">
              <div>
                <div>Address</div>
                <div>Employment Name:</div>
                <div>End </div>
                <div>Mode</div>
                <div></div>
              </div>

              <div>
                <div>No 16 Akoje Street, Opebi, Ikeja</div>
                <div>Adewale Onugbo</div>
                <div>Ongoing</div>
                <div>Full Time</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#009B07"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <div>No 16 Akoje Street, Opebi, Ikeja</div>
                <div>Adewale Onugbo</div>
                <div>Ongoing</div>
                <div>Full Time</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#009B07"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="review__content__container__reg">
            <div className="employ-flex">
              <div>
                <div>Registration Fee</div>
                <div>N4,000.00</div>
              </div>

              <div>
                <div className="tax">Tax</div>
                <div className="tax">800.00</div>
              </div>

              <div>
                <div className="total">Total</div>
                <div className="total">N4,800.00</div>
              </div>
            </div>
          </div>

          <div
            className="review__content__container__button"
            onClick={handleOpenUserRequest}
          >
            Proceed
          </div>

          <Payment
            isOpen={isUserRequestOpen}
            onClose={handleCloseUserRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
