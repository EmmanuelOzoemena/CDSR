"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SelectedBox from "./selected";
// import CheckboxToggle from "../suspect/CheckboxToggle";
import PaymentReview from "./payment-review/page";
import pricingData from "./pricingData";

const Health = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("saveNext");
  const [selectedCount, setSelectedCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // const [test, setTest] = useState([])

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Getting the selected test to display in a the next modal
  // const [selectedTest, setSelectedTest] = useState(null)
  const [selectedTests, setSelectedTests] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const totalPayment = totalPrice + 1000;

  // const handleCheckboxToggle = (e, price, test) => {
  //   const isSelected = e.target.checked;
  //   setSelectedCount((prevCount) => prevCount + (isSelected ? 1 : -1));

  //   setTotalPrice((prevPrice) => prevPrice + (isSelected ? price : -price));

  //   setSelectedTests((prevTests) => {
  //     if (isSelected) {
  //       return [...prevTests, { test, price }];
  //     } else {
  //       return prevTests.filter((t) => t.test !== test);
  //     }
  //   });
   
  // };

  const handleCheckboxToggle = (e, price, test) => {
    const isSelected = e.target.checked;
    
    setSelectedCount((prevCount) => prevCount + (isSelected ? 1 : -1));
  
    setTotalPrice((prevPrice) => prevPrice + (isSelected ? price : -price));
  
    setSelectedTests((prevTests) => {
      if (isSelected) {
        return [...prevTests, { test, price }];
      } else {
        return prevTests.filter((t) => t.test !== test);
      }
    });
  };


  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  // useEffect(() => {
  //   setTest(testInfo)
  // }, [])

  // console.log(test)

  // useEffect(() => {
  //   const fetchPricingData = async () => {
  //     const response = await fetch('/path/to/pricingData.json');
  //     const data = await response.json();
  //     setPricingData(data);
  //   };
  
  //   fetchPricingData();
  // }, []);
  

  return (
    <div className="health">
      <div className="health__tabs">
        <div className="dashboard__inner__main__nav">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer"
            onClick={() => (window.location.href = "/justice/dashboard")}
          >
            <path
              d="M10.0211 3.40985L7.14109 1.39485C6.35609 0.844847 5.15109 0.874847 4.39609 1.45985L1.89109 3.41485C1.39109 3.80485 0.996094 4.60485 0.996094 5.23485V8.68485C0.996094 9.95985 2.03109 10.9998 3.30609 10.9998H8.69609C9.97109 10.9998 11.0061 9.96485 11.0061 8.68985V5.29985C11.0061 4.62485 10.5711 3.79485 10.0211 3.40985ZM6.37609 8.99985C6.37609 9.20485 6.20609 9.37485 6.00109 9.37485C5.79609 9.37485 5.62609 9.20485 5.62609 8.99985V7.49985C5.62609 7.29485 5.79609 7.12485 6.00109 7.12485C6.20609 7.12485 6.37609 7.29485 6.37609 7.49985V8.99985Z"
              fill="#99A2BB"
            />
          </svg>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
              fill="#99A2BB"
            />
          </svg>

          <div
            className="pointer"
            onClick={() => (window.location.href = "/justice/dashboard/staff")}
          >
            Health
          </div>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
              fill="#99A2BB"
            />
          </svg>

          <div>
            {/* {pathname?.split("/")[3] ? pathname?.split("/")[3] : ""} */}
            Health Centre Management
          </div>
        </div>
      </div>

      {activeTab === "saveNext" && (
        <>
          <div className="health__title">Health</div>
          <div className="health__sub-title">
            Selected Test({selectedCount})
          </div>

          <div className="health__heading-btn">
            <div className="health__heading-btn__cancel pointer">Cancel</div>

            <div
              className={`health__heading-btn__save pointer
        ${activeTab === "saveNext" ? "saveAndNext" : ""} 
       `}
              onClick={() => handleTabClick("saveAndNext")}
            >
              Save & Next
            </div>
          </div>

          <div className="health__main">
            {/* from left - right (first section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  PACKAGE
                </div>

                {/* Map over the pricingData to generate checkboxes */}

              {/* {Object.keys(pricingData).map((key) => (
                <div key={key} className="health__main__grid__box__options">
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, pricingData[key], key)}
                  />
                  {key.replace(/_/g, ' ').toUpperCase()}
                  <span>N{pricingData[key]}</span>
                </div>
              ))} */}

              
<div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, 'STI PROFILE')}
                  />
                  STI PROFILE
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, 'FULL BLOOD COUNT')}
                  />
                  FULL BLOOD COUNT
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000, 'NANNY/DOMESTIC STAFF SCREENING')}
                  />
                  NANNY/DOMESTIC STAFF SCREENING
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000, 'COMPREHENSIVE MALE')}
                  />
                  COMPREHENSIVE MALE
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000, 'COMPREHENSIVE FEMALE')}
                  />
                  COMPREHENSIVE FEMALE
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 3000, 'FOODHANDLERS SCREENING')}
                  />
                  FOODHANDLERS SCREENING
                  <span>N3,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, 'PRE EMPLOYMENT SCREENING')}
                  />
                  PRE EMPLOYMENT SCREENING
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000, 'PRE MARTIAL SCREENING')}
                  />
                  PRE MARTIAL SCREENING
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000, 'FERTILITY SCREENING')}
                  />
                  FERTILITY SCREENING
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000, 'HORMONAL PROFILE')}
                  />
                  HORMONAL PROFILE
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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

                <div className="health__main__grid__box__title">GLUCOSE</div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 1500, ' (FLU) GLUCOSE (RANDOM / FASTING)')}
                  />
                  (FLU) GLUCOSE (RANDOM / FASTING)
                  <span>N1,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(EDTA) HbA1c')}
                  />
                  (EDTA) HbA1c
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 3000, '(FLU) 2HPP')}
                  />
                  (FLU) 2HPP
                  <span>N3,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(FLU) OGTT-75G STANDARD')}
                  />
                  (FLU) OGTT-75G STANDARD
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__title">
                  LIVER FUNCTION
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) LIVER FUNCTION TEST')}
                  />
                  (SST) LIVER FUNCTION TEST
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(SST) ALT')}
                  />
                  (SST) ALT
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(SST) AST')}
                  />
                  (SST) AST
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 3000, '(SST) ALP')}
                  />
                  (SST) ALP
                  <span>N3,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 1500, '(SST) TOTAL BILIRUBIN')}
                  />
                  (SST) TOTAL BILIRUBIN
                  <span>N1,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 1500, '(SST) DIRECT BILIRUBIN')}
                  />
                  (SST) DIRECT BILIRUBIN
                  <span>N1,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(SST) TOTAL PROTEIN')}
                  />
                  (SST) TOTAL PROTEIN
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 1500, '(SST) ALBUMIN')}
                  />
                  (SST) ALBUMIN
                  <span>N1,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(SST) GLOBULIN')}
                  />
                  (SST) GLOBULIN
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__title">
                  LIPID PROFILE
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) LIPID PROFILE')}
                  />
                  (SST) LIPID PROFILE
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(SST) CHOLESTEROL HOL')}
                  />
                  (SST) CHOLESTEROL HOL
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(SST) CHOLESTEROL LDL')}
                  />
                  (SST) CHOLESTEROL LDL
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(SST) CHOLESTEROL TOTAL')}
                  />
                  (SST) CHOLESTEROL TOTAL
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2500, '(SST) TRIGLYCERIDES')}
                  />
                  (SST) TRIGLYCERIDES
                  <span>N2,500</span>
                </div>

                <div className="health__main__grid__box__title">KIDNEY</div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4500, '(SST) ELECTROLYTE, UREA, CREATININE')}
                  />
                  (SST) ELECTROLYTE, UREA, CREATININE
                  <span>N4500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 1500, '(SST) ELECTROLYTE')}
                  />
                  (SST) ELECTROLYTE
                  <span>N1,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 1500, '(SST) UREA')}
                  />
                  (SST) UREA
                  <span>N1,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 1500, '(SST) CREATININE')}
                  />
                  (SST) CREATININE
                  <span>N1,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(SST) URIC ACID')}
                  />
                  (SST) URIC ACID
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000, '(SST) CREATININE CLEARANCE')}
                  />
                  (SST) CREATININE CLEARANCE
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) URINARY PROTEIN, 24HRS')}
                  />
                  (SST) URINARY PROTEIN, 24HRS
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__title">
                  CARDIAC MAKERS
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) CKMB')}
                  />
                  (SST) CKMB
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2000, '(SST) CK')}
                  />
                  (SST) CK
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2500, '(SST) CRP')}
                  />
                  (SST) CRP
                  <span>N2,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) TROPONIN I')}
                  />
                  (SST) TROPONIN I<span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) TROPONIN T')}
                  />
                  (SST) TROPONIN T<span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) MYOGBOLIN')}
                  />
                  (SST) MYOGBOLIN
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  ENDOCRINOLOGY / IMMUNOLOGY
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) 17-0H PROGESTERONE')}
                  />
                  (SST) 17-0H PROGESTERONE
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000, '(SST) ACTH')}
                  />
                  (SST) ACTH
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000, '(SST) ALDOSTERONE')}
                  />
                  (SST) ALDOSTERONE
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) ANA')}
                  />
                  (SST) ANA
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, ' (SST) Anti CCP')}
                  />
                  (SST) Anti CCP
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000, '(SST) ANTI-MULLERIAN HORMONE')}
                  />
                  (SST) ANTI-MULLERIAN HORMONE
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) BETA HcG, QUALITATIVE')}
                  />
                  (SST) BETA HcG, QUALITATIVE
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) BETA HcG, QUANTITATIVE')}
                  />
                  (SST) BETA HcG, QUANTITATIVE
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) C3 COMPLEMENT')}
                  />
                  (SST) C3 COMPLEMENT
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) C4 COMPLEMENT')}
                  />
                  (SST) C4 COMPLEMENT
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) CORTISOL (AM / PM)')}
                  />
                  (SST) CORTISOL (AM / PM)
                  <span>N5,000</span>
                </div>
              </div>
            </div>

            {/* from left - right (second section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  ENDOCRINOLOGY / IMMUNOLOGY
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) DHEAs')}
                  />
                  (SST) DHEAs
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000, '(SST) ESTRADIOL')}
                  />
                  (SST) ESTRADIOL
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 3500, '(SST) ESTRIOL')}
                  />
                  (SST) ESTRIOL
                  <span>N3,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) FREE T3 / T3')}
                  />
                  (SST) FREE T3 / T3
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000, '(SST) FREE T4 / T4')}
                  />
                  (SST) FREE T4 / T4
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) FSH')}
                  />
                  (SST) FSH
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) GROWTH HORMONE')}
                  />
                  (SST) GROWTH HORMONE
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 2500, '(SST) IgA')}
                  />
                  (SST) IgA
                  <span>N2,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) IgE')}
                  />
                  (SST) IgE
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 3000, '(SST) IgG')}
                  />
                  (SST) IgG
                  <span>N3,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 3500, '(SST) IgM')}
                  />
                  (SST) IgM
                  <span>N3,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000, '(SST) INSULIN (Fasting / Post Prandial)')}
                  />
                  (SST) INSULIN (Fasting / Post Prandial)
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000, '(SST) PARATHYROID HORMONE')}
                  />
                  (SST) PARATHYROID HORMONE
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) PROGESTERONE')}
                  />
                  (SST) PROGESTERONE
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4500, '(SST) PROLACTIN')}
                  />
                  (SST) PROLACTIN
                  <span>N4,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4500, '(SST) TESTOSTERONE')}
                  />
                  (SST) TESTOSTERONE
                  <span>N4,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) THYROID FUNCTION TESTS')}
                  />
                  (SST) THYROID FUNCTION TESTS
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000, '(SST) VARICELLA ZOSTER IgG')}
                  />
                  (SST) VARICELLA ZOSTER IgG
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000, '(SST) VARICELLA ZOSTER IgM')}
                  />
                  (SST) VARICELLA ZOSTER IgM
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 3500, '(SST) VARICELLA ZOSTER IgA')}
                  />
                  (SST) VARICELLA ZOSTER IgA
                  <span>N3,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000, '(SST) RUBELLA IgG')}
                  />
                  (SST) RUBELLA IgG
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000, '(SST) RUBELA IgM')}
                  />
                  (SST) RUBELA IgM
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000, '(SST) FOLLICLE STIMULATING HORMONE')}
                  />
                  (SST) FOLLICLE STIMULATING HORMONE
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000, '(SST) LUTEINISING HORMONE')}
                  />
                  (SST) LUTEINISING HORMONE
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000, '(SST) ESTROGEN')}
                  />
                  (SST) ESTROGEN
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000, '(SST) ANTIDIURETIC')}
                  />
                  (SST) ANTIDIURETIC
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  SEROLOGY
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) H PYLORI ANTIBODY')}
                  />
                  (SST) H PYLORI ANTIBODY
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) TOXOPLASMA IgM')}
                  />
                  (SST) TOXOPLASMA IgM
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) TOXOPLASMA IgG')}
                  />
                  (SST) TOXOPLASMA IgG
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4500, '(SST) HERPES 1 IgG')}
                  />
                  (SST) HERPES 1 IgG
                  <span>N4,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) HERPES 1 IgM')}
                  />
                  (SST) HERPES 1 IgM
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000, '(SST) HERPES 2 IgG')}
                  />
                  (SST) HERPES 2 IgG
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000, '(SST) HERPES 2 IgM')}
                  />
                  (SST) HERPES 2 IgM
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000, '(SST) CHLAMYDIA IgM')}
                  />
                  (SST) CHLAMYDIA IgM
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000, '(SST) CHLAMYDIA IgM')}
                  />
                  (SST) CHLAMYDIA IgM
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000, '(SST) TOUCH PANEL')}
                  />
                  (SST) TOUCH PANEL
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4500, '(SST) RENIN')}
                  />
                  (SST) RENIN
                  <span>N4,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4500, '(SST) MUMPS IgM')}
                  />
                  (SST) MUMPS IgM
                  <span>N4,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5500, '(SST) MUMPS IgG')}
                  />
                  (SST) MUMPS IgG
                  <span>N5,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6500, '(SST) BRUCELLA IgG')}
                  />
                  (SST) BRUCELLA IgG
                  <span>N6,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6500, '(SST) BRUCELLA IgM')}
                  />
                  (SST) BRUCELLA IgM
                  <span>N6,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000, '(SST) ANTI DELTA IgG')}
                  />
                  (SST) ANTI DELTA IgG
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6500, '(SST) BRUCELLA IgM')}
                  />
                  (SST) BRUCELLA IgM
                  <span>N6,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000, '(SST) ANTI DELTA IgM')}
                  />
                  (SST) ANTI DELTA IgM
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8500, '(SST) ANTI HAV IgM')}
                  />
                  (SST) ANTI HAV IgM
                  <span>N8,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8500, '(SST) ANTI HBC IgM')}
                  />
                  (SST) ANTI HBC IgM
                  <span>N8,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7500, '(SST) ANTI Hbe')}
                  />
                  (SST) ANTI Hbe
                  <span>N7,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000, '(SST) ANTI HCV ANTIBODY')}
                  />
                  (SST) ANTI HCV ANTIBODY
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000, '(SST) ANTI-CCP')}
                  />
                  (SST) ANTI-CCP
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, 'VDRL/SYPHILLIS')}
                  />
                  VDRL/SYPHILLIS
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  HEPATITIS VIRUSES
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000, '(SST) HBsAg RAPID')}
                  />
                  (SST) HBsAg RAPID
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000, '(SST) HEPATITIS B PROFILE')}
                  />
                  (SST) HEPATITIS B PROFILE
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 15000, '(SST) HEPATITIS B VIRAL LOAD')}
                  />
                  (SST) HEPATITIS B VIRAL LOAD
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000, '(SST) HEPATITIS C VIRAL LOAD')}
                  />
                  (SST) HEPATITIS C VIRAL LOAD
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000, '(SST) HEPA B SURFACE ANTIGEN (Qty)')}
                  />
                  (SST) HEPA B SURFACE ANTIGEN (Qty)
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000, 'HEPATITS A (RAPID)')}
                  />
                  HEPATITS A (RAPID)
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000, 'HEPATITS C (RAPID)')}
                  />
                  HEPATITS C (RAPID)
                  <span>N6,000</span>
                </div>
              </div>
            </div>

            {/* from left - right (third section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  TUBERCULOSIS
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7500, 'MANTOUX TEST')}
                  />
                  MANTOUX TEST
                  <span>N7,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6500, '(SST) SERUM TB')}
                  />
                  (SST) SERUM TB
                  <span>N6,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000, '(SST) TB IgM')}
                  />
                  (SST) TB IgM
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 3000, '(SST) TB QUANTFERON GOLD')}
                  />
                  (SST) TB QUANTFERON GOLD
                  <span>N3,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 12000, '(UNV) ZN - AFB')}
                  />
                  (UNV) ZN - AFB
                  <span>N12,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  HIV
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000, '(EDTA) CD4 COUNT')}
                  />
                  (EDTA) CD4 COUNT
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000, '(SST) HIV 1&11 P24 ANTIGEN')}
                  />
                  (SST) HIV 1&11 P24 ANTIGEN
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 15000)}
                  />
                  (SST) HIV 1&11 ANIBODY
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 15000)}
                  />
                  (SST) HIV 1&11 RAPID
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 15000)}
                  />
                  (EDTA) HIV VIRAL LOAD
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  MICROLOGY
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9500)}
                  />
                  (Faec) H. PYLORI ANTIGEN
                  <span>N9,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4500)}
                  />
                  (UNV) URINE-M/C/S
                  <span>N4,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4500)}
                  />
                  (UNV) URINE ANALYSIS - MICROSCOPY ONLY
                  <span>N4,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000)}
                  />
                  REAL TIME PCR BODY FLUID
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000)}
                  />
                  HIGH VAGINAL SWAB M/C/S
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000)}
                  />
                  URETHRAL SWAB M/C/S
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  THROAT SWAB M/C/S
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  SPUTUM M/C/S
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000)}
                  />
                  EAR SWAB M/C/S
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4500)}
                  />
                  EYE SWAB M/C/S
                  <span>N4,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000)}
                  />
                  STOOL M/C/S
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  MALARIA PARASITE
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  WIDAL
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  CHLAMYDIA
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5500)}
                  />
                  GONORRHOEA
                  <span>N5,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000)}
                  />
                  WOUND M/C/S
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  ASPIRATE M/C/S
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000)}
                  />
                  BLOOD CULTURE M/C/S
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000)}
                  />
                  ENDOCERVICAL SMEAR M/C/S
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7500)}
                  />
                  SEMEN ANALYSIS SEMEN M/C/S
                  <span>N7,500</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  DRUG ASSAYS
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6500)}
                  />
                  (UNV) AMPHETAMINE
                  <span>N6,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6500)}
                  />
                  (UNV) METHAMPHETAMINE
                  <span>N6,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  (UNV) TRAMADOL
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 15000)}
                  />
                  (UNV) OPIATES
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 3000)}
                  />
                  (UNV) ECSTASY
                  <span>N3,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000)}
                  />
                  (UNV) BENZODIAZEPINES
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8500)}
                  />
                  (UNV) BARBITURATES
                  <span>N8,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 25000)}
                  />
                  (UNV) COCAINE
                  <span>N25,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 25000)}
                  />
                  (UNV) CANNABIS
                  <span>N25,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 18000)}
                  />
                  (UNV) TRICYCLIC ANTIDEPRESSANTS
                  <span>N18,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  TUMOR MARKERS
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 16000)}
                  />
                  (SST) AFP
                  <span>N16,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 12000)}
                  />
                  (SST) B2 MICROGLOBULIN
                  <span>N12,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000)}
                  />
                  (SST) CA 15-3 (Breast)
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8500)}
                  />
                  (SST) CA 19.9 (Pancreas)
                  <span>N8,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  (SST) CA-125 (Ovary)
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6350)}
                  />
                  (SST) MYOGBOLIN
                  <span>N6,350</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  (SST) PSA FREE
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  (SST) PSA, TOTAL
                  <span>N5,000</span>
                </div>
              </div>
            </div>

            {/* from left - right (fourth section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  XRAY
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000)}
                  />
                  CHEST (PA ONLY)
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000)}
                  />
                  SINUSES
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  Chest (PA & LAT)
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000)}
                  />
                  THORACIC SPINE (AP & LAT)
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 12000)}
                  />
                  LUMBO-Sacral
                  <span>N12,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 12000)}
                  />
                  CERVICAL SPINE (All views)
                  <span>N12,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 15000)}
                  />
                  STERNUM
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 50000)}
                  />
                  SKULL (All Views)
                  <span>N50,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 12000)}
                  />
                  FOOT
                  <span>N12,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 14000)}
                  />
                  ANKLE JOINT (AP & LAT)
                  <span>N14,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 25000)}
                  />
                  WHOLE ABDOMEN (erect & Supine)
                  <span>N25,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000)}
                  />
                  PARANASAL SINUSES
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  POST-NATAL
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6500)}
                  />
                  SPACE SOFT TISSUE NECK
                  <span>N6,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000)}
                  />
                  PELVIS
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000)}
                  />
                  JOINT
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  EXTREMITIES
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  XRAY(Special)
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000)}
                  />
                  HSG
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  IVU
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8500)}
                  />
                  BARIUM MEAL
                  <span>N8,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  MCUG RUCG
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000)}
                  />
                  RUCG
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000)}
                  />
                  BARIUM MEAL AND FOLLOW THROUGH
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000)}
                  />
                  BARIUM SWALLOW
                  <span>N4,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000)}
                  />
                  SINOGRAM
                  <span>N6,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000)}
                  />
                  MCUG
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6500)}
                  />
                  BARIUM ENEMA
                  <span>N6,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000)}
                  />
                  PELVIMETRY
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000)}
                  />
                  LOOPOGRAM
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6700)}
                  />
                  CYSTO URETHROGRAM
                  <span>N6,700</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  ULTRASOUND SCAN
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000)}
                  />
                  FOLICLE MONITORING
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  GYN/OBS
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  TRANSVAGINAL SCAN
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 8000)}
                  />
                  PELVIS
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  TRASFRONTANELLE
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7500)}
                  />
                  TESTES/SCROTAL
                  <span>N7,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000)}
                  />
                  ABDOMEN
                  <span>N6,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000)}
                  />
                  NECK
                  <span>N7,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000)}
                  />
                  SOFT TISSUE
                  <span>N4,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000)}
                  />
                  THYROID
                  <span>N4,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000)}
                  />
                  ABDOMEN
                  <span>N4,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  ABDOMEN & PELVIS CHEST
                  <span>N9,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  BIOPHYSICAL PROFILE
                  <span>N9,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 9000)}
                  />
                  MUSCULOSKELETAL USS
                  <span>N9,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 10000)}
                  />
                  OCCULAR SCAN
                  <span>N10,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 6000)}
                  />
                  BREAST (BILATERAL)
                  <span>N6,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 7000)}
                  />
                  JOINT USS
                  <span>N7,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 5000)}
                  />
                  AROMALY USS
                  <span>N5,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 4000)}
                  />
                  SMALL PARTS
                  <span>N4,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 15000)}
                  />
                  SONOHYSTEROGRAPHY
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  CARDIAC TEST
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 12000)}
                  />
                  ECO Pre & Post (Adult)
                  <span>N12,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 15000)}
                  />
                  ECG Pre & Post (Pediatric)
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 35000)}
                  />
                  ECHOCARDIOGRAPHY (ADULT)
                  <span>N35,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxToggle(e, 25000)}
                  />
                  ECHOCARDIOGRAPHY (Pediatric)
                  <span>N25,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="health__footer">
            <div className="health__footer__main">
              <div className="health__footer__main__total">
                <h2>Total</h2>
                <span>(Include admin fee)</span>
              </div>

              <div className="health__footer__main__total">
                {/* <h2>N21,000.00</h2> */}

                <h2>Total: N{totalPrice.toLocaleString()}</h2>
              </div>

              <div className="health__footer__main__btn">
                <div className="health__footer__main__btn__cancel pointer">
                  Cancel
                </div>

                <div
                  className={`health__footer__main__btn__save pointer
        ${activeTab === "saveNext" ? "saveAndNext" : ""} 
       `}
                  onClick={() => handleTabClick("saveAndNext")}
                >
                  Save & Next
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === "saveAndNext" && (
        <>
          <div className="health__title">Health</div>
          <div className="health__heading-btn">
            <div className="health__heading-btn__cancel pointer">Cancel</div>

            <div
              className={`health__heading-btn__save pointer
              ${activeTab === "saveAndNext" ? "savedDetails" : ""}`}
              onClick={() => handleTabClick("savedDetails")}
            >
              Save & Next
            </div>
          </div>

          <div className="health__information">
            <div className="health__information__personal-info">
              <div className="health__information__personal-info__heading">
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

              <div className="health__information__personal-info__details">
                <div className="health__information__personal-info__details__heading">
                  <div className="health__information__personal-info__details__heading__pic">
                    OE
                  </div>

                  <div className="health__information__personal-info__details__heading__text">
                    <h2>Patient Name</h2>
                    <span>Okorafor Emmanuel Afolabi</span>
                  </div>
                </div>

                <div className="health__information__personal-info__details__main">
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

                <div className="health__information__personal-info__details__main">
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

                <div className="health__information__personal-info__details__main">
                  <div>
                    <h2>Primary Address</h2>
                    <span>No 24 Ajana Street, Opebi Ikeja </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="health__information__intake-info">
              <div className="health__information__intake-info__heading">
                INTAKE INFORMATION
              </div>

              <div className="health__information__intake-info__details">
                <div className="health__information__intake-info__details__main-content">
                  <div className="health__information__intake-info__details__main-content__title">
                    Intake Health Professional
                  </div>

                  <div className="health__information__intake-info__details__main-content__main">
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

                  <div className="health__information__intake-info__details__main-content__main">
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

                  <div className="health__information__intake-info__details__main-content__main">
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

                <div className="health__information__intake-info__details__main-content2">
                  <div className="health__information__intake-info__details__main-content2__title">
                    Hospital Information
                  </div>

                  <div className="health__information__intake-info__details__main-content2__main">
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

          <div className="health__main">
            {/* from left - right (first section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  PACKAGE
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  FULL BLOOD COUNT
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  NANNY/DOMESTIC STAFF SCREENING
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  COMPREHENSIVE MALE
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  XRAY
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  CERVICAL SPINE (All views)
                  <span>N12,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  SINUSES
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  Chest (PA & LAT)
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  STERNUM
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  ANKLE JOINT (AP & LAT)
                  <span>N14,000</span>
                </div>
              </div>
            </div>

            {/* from left - right (second section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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

                <div className="health__main__grid__box__title">GLUCOSE</div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (FLU) GLUCOSE (RANDOM / FASTING)
                  <span>N1,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (EDTA) HbA1c
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__title">
                  LIVER FUNCTION
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (SST) LIVER FUNCTION TEST
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (SST) ALT
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (SST) AST
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__title">KIDNEY</div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (SST) ELECTROLYTE, UREA, CREATININE
                  <span>N4,500</span>
                </div>
              </div>
            </div>

            {/* from left - right (third section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  SEROLOGY
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (SST) H PYLORI ANTIBODY
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (SST) TOXOPLASMA IgM
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  HIV
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (EDTA) CD4 COUNT
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (SST) HIV 1&11 P24 ANTIGEN
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  (SST) HIV 1&11 ANIBODY
                  <span>N15,000</span>
                </div>
              </div>
            </div>

            {/* from left - right (fourth section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  ULTRASOUND SCAN
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  FOLICLE MONITORING
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  GYN/OBS
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  TRANSVAGINAL SCAN
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  PELVIS
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  TRASFRONTANELLE
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  TESTES/SCROTAL
                  <span>N7,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  ABDOMEN
                  <span>N6,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  NECK
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  <SelectedBox />
                  ABDOMEN & PELVIS CHEST
                  <span>N9,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="health__footer">
            <div className="health__footer__main">
              <div className="health__footer__main__total">
                <h2>Total</h2>
                <span>(Include admin fee)</span>
              </div>

              <div className="health__footer__main__total">
                {/* <h2>N21,000.00</h2> */}

                <h2>Total: N{totalPrice.toLocaleString()}</h2>
              </div>

              <div className="health__footer__main__btn">
                <div className="health__footer__main__btn__cancel pointer">
                  Cancel
                </div>

                <div
                  className={`health__heading-btn__save pointer
                  ${activeTab === "saveAndNext" ? "savedDetails" : ""} `}
                  onClick={() => handleTabClick("savedDetails")}
                >
                Save & Next
              </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === "savedDetails" && (
        <>
          <div className="health__title">Health</div>
          <div className="health__more-info">
            <div className="health__more-info__intake-info">
              <div className="health__more-info__intake-info__heading">
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

              <div className="health__more-info__intake-info__details">
                <div className="health__more-info__intake-info__details__main-content">
                  <div className="health__more-info__intake-info__details__main-content__main">
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

                    <div>
                      <h2>Date of Birth</h2>
                      <span>June/28/1990</span>
                    </div>

                    <div>
                      <h2>Age / Sex</h2>
                      <span>23 / M</span>
                    </div>

                    <div>
                      <h2>Intake No</h2>
                      <span>LG2872879</span>
                    </div>
                  </div>

                  <div className="health__more-info__intake-info__details__main-content__main">
                    <div>
                      <h2>Email Address</h2>
                      <span>chukwu@gmail.com</span>
                    </div>

                    <div>
                      <h2>Primary Address</h2>
                      <span>No 24 Ajana Str, Opebi, Ikeja</span>
                    </div>

                    <div>
                      <h2>NIN</h2>
                      <span>34792048264</span>
                    </div>

                    <div>
                      <h2>Phone Number</h2>
                      <span>07037288294</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="health__more-info__intake-info">
              <div className="health__more-info__intake-info__heading">
                INTAKE INFORMATION
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

              <div className="health__more-info__intake-info__details">
                <div className="health__more-info__intake-info__details__main-content">
                  <div className="health__more-info__intake-info__details__main-content__main">
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

                    <div>
                      <h2>Email Address</h2>
                      <span>chukwu@gmail.com</span>
                    </div>

                    <div>
                      <h2>Phone Number</h2>
                      <span>07037288294</span>
                    </div>
                  </div>

                  <div className="health__more-info__intake-info__details__main-content__main">
                    <div>
                      <h2>License No:</h2>
                      <span>34792048264</span>
                    </div>

                    <div>
                      <h2>Date of intake</h2>
                      <span>June/04/2024</span>
                    </div>

                    <div>
                      <h2>Name of Hospital</h2>
                      <span>St John's Andrew</span>
                    </div>

                    <div>
                      <h2>Hospital License No:</h2>
                      <span>DR274915549</span>
                    </div>

                    <div>
                      <h2>Title / Position</h2>
                      <span>Surgeon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="health__main">
            {/* from left - right (first section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  PACKAGE
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  FULL BLOOD COUNT
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  NANNY/DOMESTIC STAFF SCREENING
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  COMPREHENSIVE MALE
                  <span>N10,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  XRAY
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  CERVICAL SPINE (All views)
                  <span>N12,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  SINUSES
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  Chest (PA & LAT)
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  STERNUM
                  <span>N15,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  ANKLE JOINT (AP & LAT)
                  <span>N14,000</span>
                </div>
              </div>
            </div>

            {/* from left - right (second section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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

                <div className="health__main__grid__box__title">GLUCOSE</div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (FLU) GLUCOSE (RANDOM / FASTING)
                  <span>N1,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (EDTA) HbA1c
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__title">
                  LIVER FUNCTION
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (SST) LIVER FUNCTION TEST
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (SST) ALT
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (SST) AST
                  <span>N2,000</span>
                </div>

                <div className="health__main__grid__box__title">KIDNEY</div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (SST) ELECTROLYTE, UREA, CREATININE
                  <span>N4,500</span>
                </div>
              </div>
            </div>

            {/* from left - right (third section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  SEROLOGY
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (SST) H PYLORI ANTIBODY
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (SST) TOXOPLASMA IgM
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  HIV
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (EDTA) CD4 COUNT
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (SST) HIV 1&11 P24 ANTIGEN
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  (SST) HIV 1&11 ANIBODY
                  <span>N15,000</span>
                </div>
              </div>
            </div>

            {/* from left - right (fourth section) */}

            <div className="health__main__grid">
              <div className="health__main__grid__box">
                <div className="health__main__grid__box__heading">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.75"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#008706"
                    />
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
                  ULTRASOUND SCAN
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  FOLICLE MONITORING
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  GYN/OBS
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  TRANSVAGINAL SCAN
                  <span>N5,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  PELVIS
                  <span>N8,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  TRASFRONTANELLE
                  <span>N9,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  TESTES/SCROTAL
                  <span>N7,500</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  ABDOMEN
                  <span>N6,000</span>
                </div>
                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  NECK
                  <span>N7,000</span>
                </div>

                <div className="health__main__grid__box__options">
                  {/* <CheckboxToggle /> */}
                  {/* <SelectedBox /> */}
                  ABDOMEN & PELVIS CHEST
                  <span>N9,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="health__info-footer">
            <div className="health__info-footer__main">
              <div className="health__info-footer__main__title">
                Payment Summary
              </div>

              <div>
                <h2>Test Fee</h2>
                <span>N{totalPrice.toLocaleString()}.00</span>
              </div>

              <div>
                <h2>Registration Fee</h2>
                <span>N1,000.00</span>
              </div>

              <div className="health__info-footer__main__total">
                <div>
                  <h2>
                    Total
                    {/* <br /> 
  <span>(include admin fee)</span> */}
                  </h2>
                  <h3>N{totalPayment.toLocaleString()}.00</h3>
                </div>
              </div>
            </div>

            <div
              className={`health__info-footer__btn pointer
${activeTab === "savedDetails" ? "resultDetails" : ""} 
`}
              // onClick={() => handleTabClick("resultDetails")}

              onClick={openModal}
            >
              Finish
            </div>

            <PaymentReview 
              isOpen={isModalOpen} 
              onClose={closeModal} 
              totalPayment={totalPayment} 
            />


          </div>
        </>
      )}

      {activeTab === "resultDetails" && (
        <>
          <div className="health__title">Lab Test Result</div>

          <div className="health__heading-btn">
            <div
              className="health__heading-btn__print pointer"
              // onClick={() => (window.location.href = "/justice/lab-result")}
            >
              Print
            </div>
          </div>

          <div className="health__more-info">
            <div className="health__more-info__intake-info">
              <div className="health__more-info__intake-info__heading">
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

              <div className="health__more-info__intake-info__details">
                <div className="health__more-info__intake-info__details__main-content">
                  <div className="health__more-info__intake-info__details__main-content__main">
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

                    <div>
                      <h2>Date of Birth</h2>
                      <span>June/28/1990</span>
                    </div>

                    <div>
                      <h2>Age / Sex</h2>
                      <span>23 / M</span>
                    </div>

                    <div>
                      <h2>Intake No</h2>
                      <span>LG2872879</span>
                    </div>
                  </div>

                  <div className="health__more-info__intake-info__details__main-content__main">
                    <div>
                      <h2>Email Address</h2>
                      <span>chukwu@gmail.com</span>
                    </div>

                    <div>
                      <h2>Primary Address</h2>
                      <span>No 24 Ajana Str, Opebi, Ikeja</span>
                    </div>

                    <div>
                      <h2>NIN</h2>
                      <span>34792048264</span>
                    </div>

                    <div>
                      <h2>Phone Number</h2>
                      <span>07037288294</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="health__more-info__intake-info">
              <div className="health__more-info__intake-info__heading">
                INTAKE INFORMATION
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

              <div className="health__more-info__intake-info__details">
                <div className="health__more-info__intake-info__details__main-content">
                  <div className="health__more-info__intake-info__details__main-content__main">
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

                    <div>
                      <h2>Email Address</h2>
                      <span>chukwu@gmail.com</span>
                    </div>

                    <div>
                      <h2>Phone Number</h2>
                      <span>07037288294</span>
                    </div>
                  </div>

                  <div className="health__more-info__intake-info__details__main-content__main">
                    <div>
                      <h2>License No:</h2>
                      <span>34792048264</span>
                    </div>

                    <div>
                      <h2>Date of intake</h2>
                      <span>June/04/2024</span>
                    </div>

                    <div>
                      <h2>Name of Hospital</h2>
                      <span>St John's Andrew</span>
                    </div>

                    <div>
                      <h2>Hospital License No:</h2>
                      <span>DR274915549</span>
                    </div>

                    <div>
                      <h2>Title / Position</h2>
                      <span>Surgeon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="health__test-result">
            <div className="health__test-result__heading">
              <div>HAEMATOLOGY</div>

              <div>
                <h2>
                  COLLECTION DATE/TIME:
                  <span>Jun/28/1990 16:28</span>
                </h2>
              </div>

              <div>
                <h2>
                  RECIEVED DATE/TIME:
                  <span>Jun/28/1990 16:28</span>
                </h2>
              </div>

              <div>
                <h2>
                  REPORT DATE/TIME:
                  <span>Jun/28/1990 16:28</span>
                </h2>
              </div>
            </div>

            <div className="health__test-result__main">
              <table class="health__test-result__main__table">
                <thead>
                  <tr>
                    <th>TEST</th>
                    <th>RESULT</th>
                    <th>REF RANGE</th>
                    <th>TEST</th>
                    <th>RESULT</th>
                    <th>REF RANGE</th>
                    <th>TEST</th>
                    <th>RESULT</th>
                  </tr>
                </thead>

                <tbody>
                  {/* row 1 */}

                  <tr>
                    <td>HAEMATOCRIT (PCV)</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                      34
                    </td>

                    <td>F 35-47% M 42 - 52%</td>

                    <td>PLATELET COUNT</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>150,000 - 400,000/MM³</td>

                    <td>BLOOD GROUP</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>
                  </tr>

                  {/* row 2 */}

                  <tr>
                    <td>HAEMOGBLOBIN (HB)</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>12 - 18G/DL</td>

                    <td>RBC COUNT</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>4 - 6XX 100³/L</td>

                    <td>GENOTYPE</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>
                  </tr>

                  {/* row 3 */}

                  <tr>
                    <td>
                      T.WHITE BLOOD CELL
                      {/* (TWBC) */}
                    </td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                      5000
                    </td>

                    <td>4000 - 11000³MM³</td>

                    <td>RETICS</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>0 - 2%</td>

                    <td>SICKLING TEST</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>
                  </tr>

                  {/* row 4 */}

                  <tr>
                    <td>NEUTROPHILS</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>50 - 70%</td>

                    <td>MCV</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>80-90/L</td>

                    <td>
                      COOMBS TEST
                      {/* (DIRECT) */}
                    </td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>
                  </tr>

                  {/* row 5 */}

                  <tr>
                    <td>LYMPHOCYTES</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                      50%
                    </td>

                    <td>25 - 40%</td>

                    <td>MCH</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>25 - 32 PG</td>

                    <td>
                      COOMBS TEST
                      {/* (INDIRECT) */}
                    </td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>
                  </tr>

                  {/* row 6 */}

                  <tr>
                    <td>MONOCYLTES</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>2 - 10%</td>

                    <td>MCHC</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>32 - 36 g/dL</td>
                  </tr>

                  {/* row 7 */}

                  <tr>
                    <td>EDSINOPHILS</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>1 - 6%</td>

                    <td>BLEEDING TIME</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>up to 5 min</td>
                  </tr>

                  {/* row 8 */}

                  <tr>
                    <td>BASOPHILS</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>0 - 1%</td>

                    <td>CLOTHING TIME</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>8 - 15 min</td>
                  </tr>

                  {/* row 9 */}

                  <tr>
                    <td>ESR</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>F 0-10min/hr M 0-10min/hr</td>

                    <td>RETICS</td>

                    <td>
                      {/* <input type="text" placeholder="Enter Result" /> */}
                    </td>

                    <td>10 - 14 min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="health__test-result__footer">
              <div className="health__test-result__footer__title">
                Blood Film Comment
              </div>

              <form action="">
                <div>
                  <label>Red Blood Cell (RBC):</label>

                  <div>
                    <input type="text" placeholder="Enter RBC" />
                  </div>
                </div>

                <div>
                  <label>White Blood Cell (WBC):</label>

                  <div>
                    <input type="text" placeholder="Enter WBC" />
                  </div>
                </div>

                <div>
                  <label>Platelets:</label>

                  <div>
                    <input type="text" placeholder="Enter Platelets" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <section>
            <div className="health__test-result2">
              <div className="health__test-result2__heading">
                <div>SERALOGY</div>
              </div>

              <div className="health__test-result2__main">
                <table class="health__test-result2__main__table">
                  <thead>
                    <tr>
                      <th>INVESTIGATION</th>
                      <th>RESULT</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* row 1 */}

                    <tr>
                      <td>RHEUMATOID FACTOR</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 2 */}

                    <tr>
                      <td>HEP. B SURFACE ANTIGEN</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 3 */}

                    <tr>
                      <td>HEPATITIS A VIRUS</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 4 */}

                    <tr>
                      <td>HEPATITIS C VIRUS</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 5 */}

                    <tr>
                      <td>FAECAL OCCULT BLOOD</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 6 */}

                    <tr>
                      <td>ANTI-STREPTOLYSINO TITRE</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 7 */}

                    <tr>
                      <td>PROSTATE SPECIFIC ANTIGEN (PSA)</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 8 */}

                    <tr>
                      <td>HIV 1 & 2</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                        Negative
                      </td>
                    </tr>

                    {/* row 9 */}

                    <tr>
                      <td>VDRL</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 10 */}

                    <tr>
                      <td>MANTOLIX / HEAF TEST</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 11 */}

                    <tr>
                      <td>CHLAMYDIA</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 12 */}

                    <tr>
                      <td>BLOOD TB</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>

                    {/* row 13 */}

                    <tr>
                      <td>PREGNANCY TEST (BHCG)</td>

                      <td>
                        {/* <select>
              <option selected disabled>
                N/A
              </option>
              <option>Positive</option>
              <option>Negative</option>
            </select> */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="health__test-result">
                <div className="health__test-result__heading">
                  <div>PARASITOLOGY</div>
                </div>

                <div className="health__test-result__main">
                  <table class="health__test-result__main__table">
                    <thead>
                      <tr>
                        <th>MALARIA PARASITE</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* row 1 */}

                      <tr>
                        <td>STOOL APPEARANCE</td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>
                      </tr>

                      {/* row 2 */}

                      <tr>
                        <td>MICROSCOPY</td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>
                      </tr>

                      {/* row 3 */}

                      <tr>
                        <td>MICROFLARIA (BLOOD)</td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>
                      </tr>

                      {/* row 4 */}

                      <tr>
                        <td>MICROFLARIA (SKIN SNIP)</td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="health__test-result">
                <div className="health__test-result__heading">
                  <div>WIDAL TEST</div>
                </div>

                <div className="health__test-result__main">
                  <table class="health__test-result__main__table">
                    <thead>
                      <tr>
                        <th>ANTIGEN</th>
                        <th>"O"</th>
                        <th>"H"</th>
                        <th>COMMENTS</th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* row 1 */}

                      <tr>
                        <td>Salmonella typhl</td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>

                        <td>
                          {/* <input type="text" placeholder="Enter Comment" /> */}
                        </td>
                      </tr>

                      {/* row 2 */}

                      <tr>
                        <td>S. paratyphl A</td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>

                        <td>
                          {/* <input type="text" placeholder="Enter Comment" /> */}
                        </td>
                      </tr>

                      {/* row 3 */}

                      <tr>
                        <td>S. paratyphl B</td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>

                        <td>
                          {/* <input type="text" placeholder="Enter Comment" /> */}
                        </td>
                      </tr>

                      {/* row 4 */}

                      <tr>
                        <td>S. paratyphl C</td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>

                        <td>
                          {/* <input type="text" placeholder="Enter Result" /> */}
                        </td>

                        <td>
                          {/* <input type="text" placeholder="Enter Comment" /> */}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Health;
