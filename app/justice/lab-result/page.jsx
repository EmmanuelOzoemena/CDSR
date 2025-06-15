"use client"

import React, { useState } from "react";
import SelectedBox from "../dashboard/health/selected";

const LabResult = () => {
//   const [activeTab, setActiveTab] = useState("saveNext");

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName === activeTab ? null : tabName);
//   };

  return (
    <div className="lab-result">
      <div className="lab-result__title">Lab Test Result</div>

      <div className="lab-result__information">
        <div className="lab-result__information__personal-info">
          <div className="lab-result__information__personal-info__heading">
            PERSONAL INFORMATION
            <svg
              width="30"
              height="30"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="35"
                height="35"
                rx="7.5"
                stroke="#CBCBCB"
              />
              <g clip-path="url(#clip0_2119_90607)">
                <path
                  d="M22.168 10.4989C22.3868 10.2801 22.6467 10.1065 22.9326 9.98801C23.2186 9.86956 23.5251 9.80859 23.8346 9.80859C24.1442 9.80859 24.4507 9.86956 24.7366 9.98801C25.0226 10.1065 25.2824 10.2801 25.5013 10.4989C25.7202 10.7178 25.8938 10.9777 26.0122 11.2636C26.1307 11.5496 26.1917 11.8561 26.1917 12.1656C26.1917 12.4751 26.1307 12.7816 26.0122 13.0676C25.8938 13.3536 25.7202 13.6134 25.5013 13.8323L14.2513 25.0823L9.66797 26.3323L10.918 21.7489L22.168 10.4989Z"
                  stroke="#101828"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2119_90607">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(8 8)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="lab-result__information__personal-info__details">
            <div className="lab-result__information__personal-info__details__heading">
              <div className="lab-result__information__personal-info__details__heading__pic">
                OE
              </div>

              <div className="lab-result__information__personal-info__details__heading__text">
                <h2>Patient Name</h2>
                <span>Okorafor Emmanuel Afolabi</span>
              </div>
            </div>

            <div className="lab-result__information__personal-info__details__main">
              <div>
                <h2>Date of Birth</h2>
                <span>June/28/1990</span>
              </div>

              <div>
                <h2>Sex</h2>
                <span>Male</span>
              </div>

              <div>
                <h2>Intake No</h2>
                <span>LG2878781</span>
              </div>
            </div>

            <div className="lab-result__information__personal-info__details__main">
              <div>
                <h2>BVN</h2>
                <span>21480048392</span>
              </div>

              <div>
                <h2>NIN</h2>
                <span>37248743244</span>
              </div>

              <div>
                <h2>Passport No</h2>
                <span>67726300092</span>
              </div>
            </div>

            <div className="lab-result__information__personal-info__details__main">
              <div>
                <h2>Primary Address</h2>
                <span>No 24 Ajana Street, Opebi Ikeja </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-result__information__intake-info">
          <div className="lab-result__information__intake-info__heading">
            INTAKE INFORMATION
          </div>

          <div className="lab-result__information__intake-info__details">
            <div className="lab-result__information__intake-info__details__main-content">
              <div className="lab-result__information__intake-info__details__main-content__title">
                Intake Health Professional
              </div>

              <div className="lab-result__information__intake-info__details__main-content__main">
                <div>
                  <h2>First Name</h2>
                  <span>Chukwu</span>
                </div>

                <div>
                  <h2>Middle Name</h2>
                  <span>Lato</span>
                </div>

                <div>
                  <h2>Last Name</h2>
                  <span>Ikemefuna</span>
                </div>
              </div>

              <div className="lab-result__information__intake-info__details__main-content__main">
                <div>
                  <h2>Email Address</h2>
                  <span>chukwu@gmail.com</span>
                </div>

                <div>
                  <h2>Phone Number</h2>
                  <span>07037288294</span>
                </div>

                <div>
                  <h2>Title / Position</h2>
                  <span>Surgeon</span>
                </div>
              </div>

              <div className="lab-result__information__intake-info__details__main-content__main">
                <div>
                  <h2>License Number</h2>
                  <span>34792048264</span>
                </div>

                <div>
                  <h2>Date of Intake</h2>
                  <span>June/04/2024</span>
                </div>
              </div>
            </div>

            <div className="lab-result__information__intake-info__details__main-content2">
              <div className="lab-result__information__intake-info__details__main-content2__title">
                Hospital Information
              </div>

              <div className="lab-result__information__intake-info__details__main-content2__main">
                <div>
                  <h2>Name of Hospital</h2>
                  <span>St. John's Andrew</span>
                </div>

                <div>
                  <h2>Hospital License Number</h2>
                  <span>DR274915549</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lab-result__main">
        {/* from left - right (first section) */}

        <div className="lab-result__main__grid">
          <div className="lab-result__main__grid__box">
            <div className="lab-result__main__grid__box__heading">
              <svg
                width="20"
                height="21"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.75" width="24" height="24" rx="12" fill="#008706" />
                <g clip-path="url(#clip0_2119_89026)">
                  <path
                    d="M13.2702 7.75V8.993C13.2702 9.867 13.2702 10.304 13.3777 10.7235C13.4842 11.1435 13.6942 11.5285 14.1137 12.2985L14.6817 13.3425C15.7507 15.3055 16.2852 16.2875 15.8467 17.015L15.8397 17.026C15.3952 17.75 14.2632 17.75 12.0002 17.75C9.73716 17.75 8.60516 17.75 8.16016 17.026L8.15366 17.015C7.71516 16.2875 8.24966 15.3055 9.31866 13.3425L9.88666 12.2985C10.3067 11.5285 10.5157 11.1435 10.6227 10.7235C10.7297 10.3035 10.7297 9.867 10.7297 8.9935V7.75M10.5002 14.751L10.5047 14.75M13.5002 15.751L13.5047 15.75M10.0002 7.75H14.0002"
                    stroke="white"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 12.528C10.25 11.9515 11.05 12.367 12 12.909C13.25 13.622 14 13.075 14.25 12.5575"
                    stroke="white"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2119_89026">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(6 6.75)"
                    />
                  </clipPath>
                </defs>
              </svg>
              CLINICAL CHEMISTRY
            </div>

            <div className="lab-result__main__grid__box__title">GLUCOSE</div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (FLU) GLUCOSE (RANDOM / FASTING)
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (EDTA) HbA1c
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (FLU) 2HPP
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__title">LIVER FUNCTION</div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) LIVER FUNCTION TEST
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) ALT
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) ALP
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) TOTAL BILIRUBIN
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) DIRECT BILIRUBIN
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) ALBUMIN
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) GLOBULIN
              <span>N5,000</span>
            </div>
          </div>
        </div>

        {/* from left - right (second section) */}

        <div className="lab-result__main__grid">
          <div className="lab-result__main__grid__box">
            <div className="lab-result__main__grid__box__heading">
              <svg
                width="20"
                height="21"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.75" width="24" height="24" rx="12" fill="#008706" />
                <g clip-path="url(#clip0_2119_89026)">
                  <path
                    d="M13.2702 7.75V8.993C13.2702 9.867 13.2702 10.304 13.3777 10.7235C13.4842 11.1435 13.6942 11.5285 14.1137 12.2985L14.6817 13.3425C15.7507 15.3055 16.2852 16.2875 15.8467 17.015L15.8397 17.026C15.3952 17.75 14.2632 17.75 12.0002 17.75C9.73716 17.75 8.60516 17.75 8.16016 17.026L8.15366 17.015C7.71516 16.2875 8.24966 15.3055 9.31866 13.3425L9.88666 12.2985C10.3067 11.5285 10.5157 11.1435 10.6227 10.7235C10.7297 10.3035 10.7297 9.867 10.7297 8.9935V7.75M10.5002 14.751L10.5047 14.75M13.5002 15.751L13.5047 15.75M10.0002 7.75H14.0002"
                    stroke="white"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 12.528C10.25 11.9515 11.05 12.367 12 12.909C13.25 13.622 14 13.075 14.25 12.5575"
                    stroke="white"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2119_89026">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(6 6.75)"
                    />
                  </clipPath>
                </defs>
              </svg>
              CLINICAL CHEMISTRY
            </div>

            <div className="lab-result__main__grid__box__title">GLUCOSE</div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (FLU) GLUCOSE (RANDOM / FASTING)
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (EDTA) HbA1c
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (FLU) 2HPP
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__title">LIPID PROFILE</div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) LIPID PROFILE
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) CHOLESTEROL HOL
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) CHOLESTEROL LDL
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) CHOLESTEROL TOTAL
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) TRIGLYCERIDES
              <span>N5,000</span>
            </div>
          </div>
        </div>

        {/* from left - right (third section) */}

        <div className="lab-result__main__grid">
          <div className="lab-result__main__grid__box">
            <div className="lab-result__main__grid__box__heading">
              <svg
                width="20"
                height="21"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.75" width="24" height="24" rx="12" fill="#008706" />
                <g clip-path="url(#clip0_2119_89026)">
                  <path
                    d="M13.2702 7.75V8.993C13.2702 9.867 13.2702 10.304 13.3777 10.7235C13.4842 11.1435 13.6942 11.5285 14.1137 12.2985L14.6817 13.3425C15.7507 15.3055 16.2852 16.2875 15.8467 17.015L15.8397 17.026C15.3952 17.75 14.2632 17.75 12.0002 17.75C9.73716 17.75 8.60516 17.75 8.16016 17.026L8.15366 17.015C7.71516 16.2875 8.24966 15.3055 9.31866 13.3425L9.88666 12.2985C10.3067 11.5285 10.5157 11.1435 10.6227 10.7235C10.7297 10.3035 10.7297 9.867 10.7297 8.9935V7.75M10.5002 14.751L10.5047 14.75M13.5002 15.751L13.5047 15.75M10.0002 7.75H14.0002"
                    stroke="white"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 12.528C10.25 11.9515 11.05 12.367 12 12.909C13.25 13.622 14 13.075 14.25 12.5575"
                    stroke="white"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2119_89026">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(6 6.75)"
                    />
                  </clipPath>
                </defs>
              </svg>
              CLINICAL CHEMISTRY
            </div>

            <div className="lab-result__main__grid__box__title">GLUCOSE</div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (FLU) GLUCOSE (RANDOM / FASTING)
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (EDTA) HbA1c
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (FLU) 2HPP
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__title">KIDNEY</div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) ELECTROLYTE
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) UREA
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) CREATININE
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) URIC ACID
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) CREATININE CLEARANCE
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) URINARY PROTEIN, 24HRS
              <span>N5,000</span>
            </div>
          </div>
        </div>

        {/* from left - right (fourth section) */}

        <div className="lab-result__main__grid">
          <div className="lab-result__main__grid__box">
            <div className="lab-result__main__grid__box__heading">
              <svg
                width="20"
                height="21"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.75" width="24" height="24" rx="12" fill="#008706" />
                <g clip-path="url(#clip0_2119_89026)">
                  <path
                    d="M13.2702 7.75V8.993C13.2702 9.867 13.2702 10.304 13.3777 10.7235C13.4842 11.1435 13.6942 11.5285 14.1137 12.2985L14.6817 13.3425C15.7507 15.3055 16.2852 16.2875 15.8467 17.015L15.8397 17.026C15.3952 17.75 14.2632 17.75 12.0002 17.75C9.73716 17.75 8.60516 17.75 8.16016 17.026L8.15366 17.015C7.71516 16.2875 8.24966 15.3055 9.31866 13.3425L9.88666 12.2985C10.3067 11.5285 10.5157 11.1435 10.6227 10.7235C10.7297 10.3035 10.7297 9.867 10.7297 8.9935V7.75M10.5002 14.751L10.5047 14.75M13.5002 15.751L13.5047 15.75M10.0002 7.75H14.0002"
                    stroke="white"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 12.528C10.25 11.9515 11.05 12.367 12 12.909C13.25 13.622 14 13.075 14.25 12.5575"
                    stroke="white"
                    stroke-width="0.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2119_89026">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(6 6.75)"
                    />
                  </clipPath>
                </defs>
              </svg>
              CLINICAL CHEMISTRY
            </div>

            <div className="lab-result__main__grid__box__title">CARDIAC MAKERS</div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) CKMB
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) CK
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) CRP
              <span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) TROPONIN I<span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) TROPONIN T<span>N5,000</span>
            </div>

            <div className="lab-result__main__grid__box__options">
              <SelectedBox />
              (SST) MYOGBOLIN
              <span>N5,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabResult;
