"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReportIncident from "../../incident/report-incident/page";
import IncidentReview from "../../incident/incident-details/page";
import { current } from "@reduxjs/toolkit";

const SecurityDetails = ({ isOpen, onClose }) => {
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Incident");
  const [isReviewOpen, setReviewOpen] = useState(false);
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [showVitals, setShowVitals] = useState(false);

  const [currentTab, setCurrentTab] = useState("Security guard Information");

  const handleCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  if (!isOpen) return null;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOpenReview = () => {
    setReviewOpen(true);
  };

  const handleCloseReview = () => {
    setReviewOpen(false);
  };

  const handleOpenUserRequest = () => {
    setUserRequestOpen(true);
  };

  const handleCloseUserRequest = () => {
    setUserRequestOpen(false);
  };

  const handleReRequestAccess = () => {
    alert("Request sent");
    setIsRequestSent(true);

    setTimeout(() => {
      setIsAccessGranted(true);
    }, 2500);
  };

  const handleViewMedicalProfile = () => {
    setShowVitals(true);
  };
  
  return (
    <div className="security-details">
      <div className="security-details__overlay" onClick={onClose}></div>
      <div className="security-details__content">
        <header className="security-details__header">
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
            <h2>Security guard Details</h2>
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

        <div className="security-details__container">
          <div className="security-details__container__heading">
            <div className="edit pointer">
              Edit
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2893_30314)">
                  <path
                    d="M14.168 2.5009C14.3868 2.28203 14.6467 2.10842 14.9326 1.98996C15.2186 1.87151 15.5251 1.81055 15.8346 1.81055C16.1442 1.81055 16.4507 1.87151 16.7366 1.98996C17.0226 2.10842 17.2824 2.28203 17.5013 2.5009C17.7202 2.71977 17.8938 2.97961 18.0122 3.26558C18.1307 3.55154 18.1917 3.85804 18.1917 4.16757C18.1917 4.4771 18.1307 4.7836 18.0122 5.06956C17.8938 5.35553 17.7202 5.61537 17.5013 5.83424L6.2513 17.0842L1.66797 18.3342L2.91797 13.7509L14.168 2.5009Z"
                    stroke="white"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2893_30314">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="report pointer" onClick={handleOpenUserRequest}>
              Report Incident
            </div>

            <ReportIncident
              isOpen={isUserRequestOpen}
              onClose={handleCloseUserRequest}
            />
          </div>

          <div className="security-details__container__content">
            <div className="security-details__container__content__basic-info">
              <Image
                alt=""
                src="/assets/security.png"
                width={261}
                height={261}
                style={{ borderRadius: "16px" }}
                className="detail-pic"
              />

              <div className="security-details__container__content__basic-info__details">
                <div>
                  <h2>First Name:</h2>
                  <p>Enogbo</p>
                </div>

                <div>
                  <h2>Middle Name:</h2>
                  <p>Ademola</p>
                </div>

                <div>
                  <h2>Last Name:</h2>
                  <p>Junior</p>
                </div>

                <div>
                  <h2>License Status:</h2>
                  <div className="active">Active</div>
                </div>

                <div>
                  <h2>Date of Registration:</h2>
                  <p>JUN-19-2024</p>
                  <span>18:32:23</span>
                </div>
              </div>
            </div>

            <div className="security-details__container__content__tags">
              <div
                className={`security-details__container__content__tags__tab ${
                  currentTab === "Security guard Information"
                    ? "active-tab"
                    : ""
                }`}
                onClick={() => handleCurrentTab("Security guard Information")}
              >
                Security Info
              </div>

              <div
                className={`security-details__container__content__tags__tab ${
                  currentTab === "Incident" ? "active-tab" : ""
                }`}
                onClick={() => handleCurrentTab("Incident")}
              >
                Incident
              </div>

              <div
                className={`security-details__container__content__tags__tab ${
                  currentTab === "Medical History"
                    ? "active-tab"
                    : ""
                }`}
                onClick={() => handleCurrentTab("Medical History")}
              >
                Medical History
              </div>
            </div>

            {/* Security guard Information */}

            {currentTab === "Security guard Information" && (
              <>
                <div className="security-details__container__content__more-info">
                  <h2 className="security-details__container__content__more-info__title">
                    Contact Information
                  </h2>

                  <div className="security-details__container__content__more-info__grid">
                    <div>
                      <h2>Phone Number:</h2>
                      <p>08037234897</p>
                    </div>

                    <div>
                      <h2>Email Address:</h2>
                      <p>junior@gmail.com</p>
                    </div>

                    <div>
                      <h2>Last Known Address:</h2>
                      <p>No 16 Ajoke Street, Opebi, Ikeja</p>
                    </div>
                  </div>

                  <div className="security-details__container__content__more-info__grid">
                    <div>
                      <h2>Nationality:</h2>
                      <p>Nigerian</p>
                    </div>

                    <div>
                      <h2>State of Origin:</h2>
                      <p>Delta State</p>
                    </div>

                    <div>
                      <h2>LGA of Origin:</h2>
                      <p>Ika Northeast</p>
                    </div>
                  </div>

                  <h2 className="security-details__container__content__more-info__title">
                    Identity Details
                  </h2>

                  <div className="security-details__container__content__more-info__grid2">
                    <div>
                      <h2>BVN:</h2>
                      <p>
                        {" "}
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
                      </p>
                    </div>

                    <div>
                      <h2>NIN:</h2>
                      <p>
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
                      </p>
                    </div>

                    <div>
                      <h2>Driver's License Number:</h2>
                      <p>
                        {" "}
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
                      </p>
                    </div>

                    <div>
                      <h2>Passport Number:</h2>
                      <p>
                        {" "}
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
                      </p>
                    </div>
                  </div>

                  <div className="security-details__container__content__more-info__contract">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2106_68547)">
                        <path
                          d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                          fill="#64AFF3"
                        />
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

                  <h2 className="security-details__container__content__more-info__title">
                    Work Information
                  </h2>

                  <div className="security-details__container__content__more-info__grid">
                    <div>
                      <h2>Work Mode:</h2>
                      <p>Fulltime</p>
                    </div>

                    <div>
                      <h2>Start Date:</h2>
                      <p>Jun-12-2022</p>
                    </div>

                    <div>
                      <h2>Employer Name:</h2>
                      <p>Adewale Onugbo</p>
                    </div>
                  </div>

                  <h2 className="security-details__container__content__more-info__title">
                    Previous Employment
                  </h2>

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
              </>
            )}

            {/* Incident */}

            {currentTab === "Incident" && (
              <>
                <div className="security-details__container__content__incident-info">
                  <div className="security-details__container__content__incident-info__heading">
                    <div>Date:</div>
                    <div>Time of Incident:</div>
                    <div>Location of Violation:</div>
                    <div>Reported By:</div>
                    <div></div>
                  </div>

                  <div className="security-details__container__content__incident-info__grid">
                    <div>
                      <h2>Jun-03-2024</h2>
                      <p>18:32:23</p>
                    </div>

                    <div>
                      <h2>Stolen Money</h2>
                    </div>

                    <div>
                      <h2>Amadu Bello Way, Lekki</h2>
                    </div>

                    <div>
                      <h2>Okoroafor John</h2>
                    </div>

                    <div>
                      <span onClick={handleOpenReview}>View</span>
                    </div>
                  </div>

                  <div className="security-details__container__content__incident-info__grid">
                    <div>
                      <h2>Jun-04-2024</h2>
                      <p>13:02:56</p>
                    </div>

                    <div>
                      <h2>Murder</h2>
                    </div>

                    <div>
                      <h2>16B Allen Avenue, Ikeja</h2>
                    </div>

                    <div>
                      <h2>
                        <Image
                          alt=""
                          src="/assets/cdsr.png"
                          width={26}
                          height={26}
                          style={{ borderRadius: "50%" }}
                        />

                        <span>Okoro Iman</span>
                      </h2>
                    </div>

                    <div>
                      <span onClick={handleOpenReview}>View</span>
                    </div>
                  </div>

                  <div className="security-details__container__content__incident-info__grid">
                    <div>
                      <h2>Jun-05-2024</h2>
                      <p>20:14:17</p>
                    </div>

                    <div>
                      <h2>Stolen Money</h2>
                    </div>

                    <div>
                      <h2>Amadu Bello Way, Lekki</h2>
                    </div>

                    <div>
                      <h2>Adekunle Alaba</h2>
                    </div>

                    <div>
                      <span onClick={handleOpenReview}>View</span>
                    </div>
                  </div>

                  <div className="security-details__container__content__incident-info__grid">
                    <div>
                      <h2>Jun-05-2024</h2>
                      <p>21:03:23</p>
                    </div>

                    <div>
                      <h2>Murder</h2>
                    </div>

                    <div>
                      <h2>Amadu Bello Way, Lekki</h2>
                    </div>

                    <div>
                      <h2>
                        <Image
                          alt=""
                          src="/assets/security.png"
                          width={26}
                          height={26}
                          style={{ borderRadius: "50%" }}
                        />

                        <span>Ade Junior</span>
                      </h2>
                    </div>

                    <div>
                      <span onClick={handleOpenReview}>View</span>
                    </div>
                  </div>

                  <div className="security-details__container__content__incident-info__grid">
                    <div>
                      <h2>Jun-08-2024</h2>
                      <p>18:32:23</p>
                    </div>

                    <div>
                      <h2>Stolen Money</h2>
                    </div>

                    <div>
                      <h2>Amadu Bello Way, Lekki</h2>
                    </div>

                    <div>
                      <h2>
                        <Image
                          alt=""
                          src="/assets/cdsr.png"
                          width={26}
                          height={26}
                          style={{ borderRadius: "50%" }}
                        />

                        <span>Okoro Iman</span>
                      </h2>
                    </div>

                    <div>
                      <span onClick={handleOpenReview}>View</span>
                    </div>
                  </div>

                  <div className="security-details__container__content__incident-info__grid">
                    <div>
                      <h2>Jun-13-2024</h2>
                      <p>09:39:23</p>
                    </div>

                    <div>
                      <h2>Theft</h2>
                    </div>

                    <div>
                      <h2>Amadu Bello Way, Lekki</h2>
                    </div>

                    <div>
                      <h2>Okoroafor John</h2>
                    </div>

                    <div>
                      <span onClick={handleOpenReview}>View</span>
                    </div>
                  </div>

                  <div className="security-details__container__content__incident-info__grid">
                    <div>
                      <h2>Jun-16-2024</h2>
                      <p>18:32:23</p>
                    </div>

                    <div>
                      <h2>Stolen Money</h2>
                    </div>

                    <div>
                      <h2>Amadu Bello Way, Lekki</h2>
                    </div>

                    <div>
                      <h2>Okoroafor John</h2>
                    </div>

                    <div>
                      <span onClick={handleOpenReview}>View</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* medical details */}

            {currentTab === "Medical History" && (
              <>
                {!isAccessGranted && !isRequestSent && (
                  <div className="security-details__container__content__health-request">
                    <div className="security-details__container__content__health-request__heading">
                      <div>
                        <span>Pending</span>

                        <button onClick={handleReRequestAccess}>
                          Re-Request Access
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {isAccessGranted && !showVitals && (
                  <div className="security-details__container__content__health-granted">
                    <div className="security-details__container__content__health-granted__heading">
                      <div>
                        <span>
                          <svg
                            width="43"
                            height="42"
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
                        </span>

                        <span>Access Granted</span>

                        <button onClick={handleViewMedicalProfile}>
                          View Medical Profile
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {showVitals && (
                  <div className="security-details__container__content__vitals">
                    <div className="security-details__container__content__vitals__heading">
                      <div
                        className="security-details__container__content__vitals__heading__btn pointer"
                        onClick={() =>
                          (window.location.href = "/justice/dashboard/health")
                        }
                      >
                        Order Test
                      </div>

                      <div className="security-details__container__content__vitals__heading__text">
                        <span>Vitals</span>

                        <div className="security-details__container__content__vitals__heading__text__grid">
                          <div>
                            <h2>Blood Group</h2>
                            <span>O</span>
                          </div>

                          <div>
                            <h2>Height:</h2>
                            <span>1.93cm</span>
                          </div>

                          <div>
                            <h2>Weight:</h2>
                            <span>180kg</span>
                          </div>

                          <div>
                            <h2>Mass index:</h2>
                            <span>20.03BMI</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="security-details__container__content__vitals__test-result">
                      <div className="security-details__container__content__vitals__test-result__title">
                        Test Result
                      </div>

                      <div className="security-details__container__content__vitals__test-result__docs">
                        <div className="security-details__container__content__vitals__test-result__docs__contract">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_2106_68547)">
                              <path
                                d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                                fill="#64AFF3"
                              />
                              <path
                                d="M19.25 7H14.5V2.25L19.25 7Z"
                                fill="#E1F5FE"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2106_68547">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>

                          <div>
                            <h2>Test Result</h2>
                            <p>1.2 MB</p>
                          </div>
                        </div>

                        <div className="security-details__container__content__vitals__test-result__docs__contract">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_2106_68547)">
                              <path
                                d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                                fill="#64AFF3"
                              />
                              <path
                                d="M19.25 7H14.5V2.25L19.25 7Z"
                                fill="#E1F5FE"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2106_68547">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>

                          <div>
                            <h2>Test Result</h2>
                            <p>1.2 MB</p>
                          </div>
                        </div>

                        <div className="security-details__container__content__vitals__test-result__docs__contract">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_2106_68547)">
                              <path
                                d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                                fill="#64AFF3"
                              />
                              <path
                                d="M19.25 7H14.5V2.25L19.25 7Z"
                                fill="#E1F5FE"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2106_68547">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>

                          <div>
                            <h2>Test Result</h2>
                            <p>1.2 MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            <IncidentReview isOpen={isReviewOpen} onClose={handleCloseReview} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDetails;
