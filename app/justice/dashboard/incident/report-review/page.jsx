"use client";

import React, { useState } from "react";
import Image from "next/image";
import IncidentPayment from "../payment/page";

const ReviewReport = ({ isOpen, onClose }) => {
  
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);
  
  if (!isOpen) return null;
  const handleOpenUserRequest = () => {
    setUserRequestOpen(true);
  };

  const handleCloseUserRequest = () => {
    setUserRequestOpen(false);
  };

  return (
    <div className="review-report">
      <div className="review-report__overlay" onClick={onClose}></div>
      <div className="review-report__content">
        <header className="review-report__content__header">
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

        <h2 className="review-report__content__title">
          Review <span onClick={onClose}>Edit</span>
        </h2>

        <div className="review-report__content__container">
          <div className="review-report__content__container__infos">
            <Image
              alt=""
              src="/assets/rev-pic.png"
              width={183}
              height={182}
              style={{ borderRadius: "6px" }}
              className="report-pic"
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

          <div className="review-report__content__container__details">
            <div className="review-report__content__container__details__content">
              <div>
                <h2>Incident Details:</h2>
                <p>Title of Incident:</p>
                <h2>Stolen Money</h2>
              </div>

              <div>
                <p>Location:</p>
                <h2>
                  Interstate 95, Mile Marker 45, <br /> Springfield
                </h2>
              </div>

              <div>
                <p>Incident Date:</p>
                <h2>JUN 21, 2024</h2>
                <span>18:28:34</span>
              </div>
            </div>

            <div className="review-report__content__container__details__text">
              <h2>Incident Details</h2>

              <p>
                According to him, following reports of theft of artifacts from
                the residence of the Esama of Benin, Dr Gabriel Osawaru
                Igbinedion located at Okada Avenue, GRA Benin City, operatives
                of the Command on surveillance around the residence arrested one
                Adamu Usman ‘m’ 18yrs on 23/07/2024 at about 0130hrs while
                trying to steal artifacts. “Upon interrogation, the suspect’s
                confession led to the arrest of another suspect named Etuk
                Bassey ‘m’ 36yrs who happened to be the driver who usually
                conveys the stolen artifacts.{" "}
              </p>
            </div>

            <div className="review-report__content__container__details__text">
              <h2>Reported By:</h2>

              <div>
                <Image
                  alt=""
                  src="/assets/cdsr.png"
                  width={30}
                  height={30}
                  style={{ borderRadius: "50%", float: "left" }}
                />

                <span>Okoroafor Jonna</span>
              </div>
            </div>

            <h2 className="review-report__content__container__details__title">
              Incident Details:
            </h2>

            <div className="review-report__content__container__details__doc">
              <div className="review-report__content__container__details__doc__contract">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2106_68547)">
                    <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#64AFF3" />
                    <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2106_68547">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <h2>Contract</h2>
                  <p>1.2 MB</p>
                </div>
              </div>

              <div className="review-report__content__container__details__doc__contract">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                >
                  <path
                    d="M25.625 0.25H4.375C3.24821 0.25123 2.16792 0.699392 1.37116 1.49616C0.574392 2.29292 0.12623 3.37321 0.125 4.5V21.5C0.12623 22.6268 0.574392 23.7071 1.37116 24.5038C2.16792 25.3006 3.24821 25.7488 4.375 25.75H25.625C26.7518 25.7488 27.8321 25.3006 28.6288 24.5038C29.4256 23.7071 29.8738 22.6268 29.875 21.5V4.5C29.8738 3.37321 29.4256 2.29292 28.6288 1.49616C27.8321 0.699392 26.7518 0.25123 25.625 0.25ZM20.3125 4.5C20.9429 4.5 21.5592 4.68694 22.0834 5.03719C22.6076 5.38744 23.0161 5.88526 23.2574 6.4677C23.4986 7.05014 23.5617 7.69104 23.4388 8.30935C23.3158 8.92766 23.0122 9.49562 22.5664 9.9414C22.1206 10.3872 21.5527 10.6908 20.9344 10.8138C20.316 10.9367 19.6751 10.8736 19.0927 10.6324C18.5103 10.3911 18.0124 9.98256 17.6622 9.45838C17.3119 8.9342 17.125 8.31793 17.125 7.6875C17.1259 6.84239 17.462 6.03215 18.0596 5.43457C18.6571 4.83699 19.4674 4.50088 20.3125 4.5ZM4.375 23.625C3.81141 23.625 3.27091 23.4011 2.8724 23.0026C2.47388 22.6041 2.25 22.0636 2.25 21.5V17.0089L8.54797 11.4109C9.15561 10.872 9.94587 10.585 10.7577 10.6085C11.5696 10.6319 12.342 10.964 12.9175 11.5371L17.2306 15.8409L9.44645 23.625H4.375ZM27.75 21.5C27.75 22.0636 27.5261 22.6041 27.1276 23.0026C26.7291 23.4011 26.1886 23.625 25.625 23.625H12.452L20.515 15.562C21.0859 15.0765 21.8104 14.809 22.5597 14.8071C23.3091 14.8051 24.0349 15.0688 24.6083 15.5513L27.75 18.1691V21.5Z"
                    fill="#64AFF3"
                  />
                </svg>

                <div>
                  <h2>Glenn.png</h2>
                  <p>1.2 MB</p>
                </div>
              </div>
            </div>

            <div className="review-report__content__container__details__reg">
            <div className="employ-flex">
              <div>
                <div>Incident Report Fee</div>
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
            className="review-report__content__container__details__button"
            onClick={handleOpenUserRequest}
          >
            Pay
          </div>

          </div>

         
          <IncidentPayment
            isOpen={isUserRequestOpen}
            onClose={handleCloseUserRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewReport;
