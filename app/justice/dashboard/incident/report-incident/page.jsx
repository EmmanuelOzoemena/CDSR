"use client";

import React, { useState } from "react";
import Image from "next/image";

const ReportIncident = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

  //   const [isUserRequestOpen, setUserRequestOpen] = useState(false);

  //   const handleOpenUserRequest = () => {
  //     setUserRequestOpen(true);
  //   };

  //   const handleCloseUserRequest = () => {
  //     setUserRequestOpen(false);
  //   };

  const handleClose = () => {
    onClose(); 
    window.location.reload();
  };

  return (
    <div className="report-incident">
      <div className="report-incident__overlay" onClick={onClose}></div>
      <div className="report-incident__content">
        <header className="report-incident__header">
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
            <h2>Incident Report</h2>
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
                  d="M21.6933 19.1933C21.5759 19.3106 21.4168 19.3766 21.2508 19.3766C21.0848 19.3766 20.9256 19.3106 20.8083 19.1933C20.6909 19.0759 20.625 18.9168 20.625 18.7508C20.625 18.5848 20.6909 18.4256 20.8083 18.3083L25.8083 13.3083C25.8664 13.2502 25.9354 13.2041 26.0113 13.1726C26.0872 13.1412 26.1686 13.125 26.2508 13.125C26.333 13.125 26.4143 13.1412 26.4903 13.1726C26.5662 13.2041 26.6352 13.2502 26.6933 13.3083C26.7514 13.3664 26.7975 13.4354 26.8289 13.5113C26.8604 13.5872 26.8766 13.6686 26.8766 13.7508C26.8766 13.833 26.8604 13.9143 26.8289 13.9903C26.7975 14.0662 26.7514 14.1352 26.6933 14.1933L21.6933 19.1933ZM14.1933 26.6933C14.1352 26.7514 14.0662 26.7975 13.9903 26.8289C13.9143 26.8604 13.833 26.8766 13.7508 26.8766C13.6686 26.8766 13.5872 26.8604 13.5113 26.8289C13.4354 26.7975 13.3664 26.7514 13.3083 26.6933C13.2502 26.6352 13.2041 26.5662 13.1726 26.4903C13.1412 26.4143 13.125 26.333 13.125 26.2508C13.125 26.1686 13.1412 26.0872 13.1726 26.0113C13.2041 25.9354 13.2502 25.8664 13.3083 25.8083L18.3083 20.8083C18.4256 20.6909 18.5848 20.625 18.7508 20.625C18.9168 20.625 19.0759 20.6909 19.1933 20.8083C19.3106 20.9256 19.3766 21.0848 19.3766 21.2508C19.3766 21.4168 19.3106 21.5759 19.1933 21.6933L14.1933 26.6933Z"
                  fill="black"
                />
                <path
                  d="M13.75 26.875C13.5842 26.875 13.4253 26.8092 13.3081 26.6919C13.1908 26.5747 13.125 26.4158 13.125 26.25C13.125 26.0842 13.1908 25.9253 13.3081 25.8081C13.4253 25.6908 13.5842 25.625 13.75 25.625H18.75C18.9158 25.625 19.0747 25.6908 19.1919 25.8081C19.3092 25.9253 19.375 26.0842 19.375 26.25C19.375 26.4158 19.3092 26.5747 19.1919 26.6919C19.0747 26.8092 18.9158 26.875 18.75 26.875H13.75Z"
                  fill="black"
                />
                <path
                  d="M14.375 26.25C14.375 26.4158 14.3092 26.5747 14.1919 26.6919C14.0747 26.8092 13.9158 26.875 13.75 26.875C13.5842 26.875 13.4253 26.8092 13.3081 26.6919C13.1908 26.5747 13.125 26.4158 13.125 26.25V21.25C13.125 21.0842 13.1908 20.9253 13.3081 20.8081C13.4253 20.6908 13.5842 20.625 13.75 20.625C13.9158 20.625 14.0747 20.6908 14.1919 20.8081C14.3092 20.9253 14.375 21.0842 14.375 21.25V26.25ZM26.875 18.75C26.875 18.9158 26.8092 19.0747 26.6919 19.1919C26.5747 19.3092 26.4158 19.375 26.25 19.375C26.0842 19.375 25.9253 19.3092 25.8081 19.1919C25.6908 19.0747 25.625 18.9158 25.625 18.75V13.75C25.625 13.5842 25.6908 13.4253 25.8081 13.3081C25.9253 13.1908 26.0842 13.125 26.25 13.125C26.4158 13.125 26.5747 13.1908 26.6919 13.3081C26.8092 13.4253 26.875 13.5842 26.875 13.75V18.75Z"
                  fill="black"
                />
                <path
                  d="M21.25 14.375C21.0842 14.375 20.9253 14.3092 20.8081 14.1919C20.6908 14.0747 20.625 13.9158 20.625 13.75C20.625 13.5842 20.6908 13.4253 20.8081 13.3081C20.9253 13.1908 21.0842 13.125 21.25 13.125H26.25C26.4158 13.125 26.5747 13.1908 26.6919 13.3081C26.8092 13.4253 26.875 13.5842 26.875 13.75C26.875 13.9158 26.8092 14.0747 26.6919 14.1919C26.5747 14.3092 26.4158 14.375 26.25 14.375H21.25Z"
                  fill="black"
                />
              </svg>
            </button>

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

        <div className="report-incident__container">
          <div className="report-incident__container__heading">
            <div className="cancel pointer" onClick={onClose}>
              Cancel
            </div>

            <div className="report pointer" onClick={handleClose}>Report</div>
          </div>

          <form className="report-incident__container__form">
            <div>
              <label>Title of Incident:</label>
              <div>
                <input type="text" placeholder="Title" />
              </div>
            </div>

            <div>
              <label>Location:</label>
              <div>
                <input type="text" placeholder="Enter Location" />
              </div>
            </div>

            <div>
              <label>Time of Incident:</label>
              <div>
                <input type="time" />
              </div>
            </div>

            <div>
              <label>Date of Incident:</label>
              <div>
                <input type="date" />
              </div>
            </div>
          </form>

          <form className="report-incident__container__desc">
            <div>
              <label>Details of Incident:</label>
              <textarea name="" id="" placeholder="Enter Details"></textarea>
            </div>
          </form>

          <form className="report-incident__container__form">
            <div>
              <label>People Involved:</label>
              <div>
                <input type="text" placeholder="Select" />
              </div>
            </div>
          </form>

          <form className="report-incident__container__form">
            <div className="upload-doc">
              <label>Upload Certicate:</label>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5ZM4.16667 17.5L13.3333 8.33333L17.5 12.5M8.33333 7.08333C8.33333 7.77369 7.77369 8.33333 7.08333 8.33333C6.39298 8.33333 5.83333 7.77369 5.83333 7.08333C5.83333 6.39298 6.39298 5.83333 7.08333 5.83333C7.77369 5.83333 8.33333 6.39298 8.33333 7.08333Z"
                    stroke="#101828"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>Upload document</span>
              </div>
            </div>
          </form>

          <div className="report-incident__container__reg">
            <div className="employ-flex">
              <div>
                <div>Mediacal History</div>
                <div>N20,000.00</div>
              </div>

              <div>
                <div className="tax">Tax</div>
                <div className="tax">300.00</div>
              </div>

              <div>
                <div className="total">Total</div>
                <div className="total">N54,800.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIncident;
