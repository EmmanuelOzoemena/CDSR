"use client";

import CheckboxToggle from "./CheckboxToggle";
import { useState } from "react";
import ImageUploadComponent from "./upload-img/page";
import DatabaseModal from "./search/page";

export default function Suspect() {
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);
  const [minMatch, setMinMatch] = useState(0);
  const [maxMatch, setMaxMatch] = useState(100);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDatabases, setSelectedDatabases] = useState([]);
  const [date, setDate] = useState("");

  const handleAgeChange = (e, type) => {
    const value = parseInt(e.target.value);
    if (type === "min") {
      if (value <= maxAge) setMinAge(value);
    } else {
      if (value >= minAge) setMaxAge(value);
    }
  };

  const handleMatchChange = (e, type) => {
    const value = parseInt(e.target.value);
    if (type === "min") {
      if (value <= maxMatch) setMinMatch(value);
    } else {
      if (value >= minMatch) setMaxMatch(value);
    }
  };

  const handleInputClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveDatabases = (databases) => {
    setSelectedDatabases(databases); // Update the state with selected databases
  };


  const handleDateChange = (e) => {
    let inputDate = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-numeric characters
    if (inputDate.length > 8) inputDate = inputDate.slice(0, 8); // Limit input to 8 digits

    if (inputDate.length > 2) {
      inputDate = inputDate.slice(0, 2) + "-" + inputDate.slice(2);
    }
    if (inputDate.length > 5) {
      inputDate = inputDate.slice(0, 5) + "-" + inputDate.slice(5);
    }

    setDate(inputDate);
  };

  return (
    <div className="suspect">
      <div className="suspect__content">
        <div className="suspect__content__left">
          <div className="suspect__content__left__facial">
            <div className="facial-recognition-card">
              <div className="icon">
                <svg
                  width="80"
                  height="81"
                  viewBox="0 0 80 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.5"
                    width="80"
                    height="80"
                    rx="40"
                    fill="url(#paint0_linear_400_87399)"
                  />
                  <path
                    d="M38.6667 42.8333H40V37.5M45.3333 37.1667V35.1667M36 46.5C38 48.5 42 48.5 44 46.5M34.6667 37.1667V35.1667M36.5333 52.5C33.5467 52.5 32.0533 52.5 30.912 51.9187C29.9085 51.4073 29.0927 50.5915 28.5813 49.588C28 48.4467 28 46.9533 28 43.9667M52 43.9667C52 46.9533 52 48.4467 51.4187 49.588C50.9073 50.5915 50.0915 51.4073 49.088 51.9187C47.9467 52.5 46.4533 52.5 43.4667 52.5M43.4667 28.5C46.4533 28.5 47.9467 28.5 49.088 29.0813C50.0915 29.5927 50.9073 30.4085 51.4187 31.412C52 32.5533 52 34.0467 52 37.0333M36.5333 28.5C33.5467 28.5 32.0533 28.5 30.912 29.0813C29.9085 29.5927 29.0927 30.4085 28.5813 31.412C28 32.5533 28 34.0467 28 37.0333"
                    stroke="#009B07"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_400_87399"
                      x1="40"
                      y1="0.5"
                      x2="40"
                      y2="80.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#57FF86" stop-opacity="0.25" />
                      <stop offset="1" stop-color="#97FF57" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2>Facial Background Recognition</h2>

              {/* <div className="actions">
                <div className="action">
                  <div className="icon">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="30" cy="30" r="30" fill="#E5FFE7" />
                      <path
                        d="M35.5002 23.5C34.8902 23.5 34.3302 23.15 34.0502 22.61L33.3302 21.16C32.8702 20.25 31.6702 19.5 30.6502 19.5H28.3602C27.3302 19.5 26.1302 20.25 25.6702 21.16L24.9502 22.61C24.6702 23.15 24.1102 23.5 23.5002 23.5C21.3302 23.5 19.6102 25.33 19.7502 27.49L20.2702 35.75C20.3902 37.81 21.5002 39.5 24.2602 39.5H34.7402C37.5002 39.5 38.6002 37.81 38.7302 35.75L39.2502 27.49C39.3902 25.33 37.6702 23.5 35.5002 23.5ZM28.0002 24.75H31.0002C31.4102 24.75 31.7502 25.09 31.7502 25.5C31.7502 25.91 31.4102 26.25 31.0002 26.25H28.0002C27.5902 26.25 27.2502 25.91 27.2502 25.5C27.2502 25.09 27.5902 24.75 28.0002 24.75ZM29.5002 35.62C27.6402 35.62 26.1202 34.11 26.1202 32.24C26.1202 30.37 27.6302 28.86 29.5002 28.86C31.3702 28.86 32.8802 30.37 32.8802 32.24C32.8802 34.11 31.3602 35.62 29.5002 35.62Z"
                        fill="#009B07"
                      />
                    </svg>
                  </div>
                  <p>Use Camera</p>
                </div>

                <div className="action">
                  <div className="icon">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="30" cy="30" r="30" fill="#E5FFE7" />
                      <path
                        d="M31.3002 28.4499C31.1102 28.4499 30.9202 28.3799 30.7702 28.2299C30.4802 27.9399 30.4802 27.4599 30.7702 27.1699L38.9702 18.9699C39.2602 18.6799 39.7402 18.6799 40.0302 18.9699C40.3202 19.2599 40.3202 19.7399 40.0302 20.0299L31.8302 28.2299C31.6902 28.3699 31.5002 28.4499 31.3002 28.4499Z"
                        fill="#009B07"
                      />
                      <path
                        d="M35.33 29.2499H30.5C30.09 29.2499 29.75 28.9099 29.75 28.4999V23.6699C29.75 23.2599 30.09 22.9199 30.5 22.9199C30.91 22.9199 31.25 23.2599 31.25 23.6699V27.7499H35.33C35.74 27.7499 36.08 28.0899 36.08 28.4999C36.08 28.9099 35.74 29.2499 35.33 29.2499Z"
                        fill="#009B07"
                      />
                      <path
                        d="M32.5 40.25H26.5C21.07 40.25 18.75 37.93 18.75 32.5V26.5C18.75 21.07 21.07 18.75 26.5 18.75H28.5C28.91 18.75 29.25 19.09 29.25 19.5C29.25 19.91 28.91 20.25 28.5 20.25H26.5C21.89 20.25 20.25 21.89 20.25 26.5V32.5C20.25 37.11 21.89 38.75 26.5 38.75H32.5C37.11 38.75 38.75 37.11 38.75 32.5V30.5C38.75 30.09 39.09 29.75 39.5 29.75C39.91 29.75 40.25 30.09 40.25 30.5V32.5C40.25 37.93 37.93 40.25 32.5 40.25Z"
                        fill="#009B07"
                      />
                    </svg>
                  </div>
                  <p>Upload Image</p>
                </div> */}

                <ImageUploadComponent />
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="suspect__content__right">
          <h2>Find Matches</h2>

          <form action="">
            <div>
              <div className="search" onClick={handleInputClick}>
                <input type="text" placeholder="Select Database" readOnly />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#101828"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <DatabaseModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveDatabases}
              />

              {selectedDatabases.length > 0 && (
                <div className="selected-databases">
                  <ul>
                    {selectedDatabases.map((db, index) => (
                      <li key={index}>
                        {db}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
                            fill="#0E0E2C"
                          />
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="gender">
              <div className="gen-flex">
                <CheckboxToggle />
                <span>Male</span>
              </div>

              <div className="gen-flex">
                <CheckboxToggle />
                <span>Female</span>
              </div>
            </div>

            <div className="details">
              <div className="details-flex">
                <div className="input">
                  <input type="text" placeholder="Input First Name" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Input Middle Name" />
                </div>
              </div>

              <div className="details-flex">
                <div className="input">
                  <input type="text" placeholder="Input Last Name" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Input Alias" />
                </div>
              </div>

              <div className="details-flex">
                <div className="input">
                  <input type="text" placeholder="Input NIN" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Input BVN" />
                </div>
              </div>

              <div className="details-flex">
                <div className="input">
                  <select name="" id="">
                    <option selected disabled>
                      Select Region
                    </option>
                    <option value="north-east">North Central</option>
                    <option value="north-east">North East</option>
                    <option value="north-east">North West</option>
                    <option value="north-west">South East</option>
                    <option value="south-east">South South</option>
                    <option value="south-south">South West</option>
                  </select>
                </div>
                <div className="input">
                  <select name="" id="">
                    <option selected disabled>
                      Select State
                    </option>
                    <option value="">Abuja</option>
                    <option value="">Lagos</option>
                    <option value="">Kano</option>
                    <option value="">Anambra</option>
                  </select>
                </div>
              </div>

              <div className="details-flex">
                <div className="input">
                  <select name="" id="">
                    <option selected disabled>
                      Select L.G.A
                    </option>
                    <option value="">FCT</option>
                    <option value="">Ikeja</option>
                    <option value="">Kano</option>
                    <option value="">Awka</option>
                  </select>
                </div>
                <div className="input">
                  <select name="" id="">
                    <option selected disabled>
                      Select City
                    </option>
                    <option value="">Opebi</option>
                    <option value="">Opebi</option>
                    <option value="">Opebi</option>
                    <option value="">Opebi</option>
                  </select>
                </div>
              </div>
            </div>

            <h3>Date Range</h3>

            <div className="date-range">
              <div className="date-flex">
                <div>
                  <label>From</label>
                  <div className="input">
                    <input type="date" placeholder="MM/DD/YYYY" />

                    {/* <input
                      type="date"
                      value={date}
                      onChange={handleDateChange}
                      placeholder="MM-DD-YYYY"
                      className="date-input"
                      maxLength={10}
                    /> */}
                  </div>
                </div>

                <div>
                  <label>To</label>
                  <div className="input">
                    <input type="date" placeholder="MM/DD/YYYY" />

                    {/* <input
                      type="text"
                      value={date}
                      onChange={handleDateChange}
                      placeholder="MM-DD-YYYY"
                      className="date-input"
                      maxLength={10}
                    /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper">
              <div className="slider-container">
                <div className="slider-flex">
                  <h3>Age range</h3>
                  <div className="range-inputs">
                    <input
                      type="number"
                      value={minAge}
                      onChange={(e) => handleAgeChange(e, "min")}
                    />
                    <input
                      type="number"
                      value={maxAge}
                      onChange={(e) => handleAgeChange(e, "max")}
                    />
                  </div>
                </div>
                <div className="slider">
                  <div
                    className="progress"
                    style={{
                      left: `${(minAge / 100) * 100}%`,
                      right: `${100 - (maxAge / 100) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="range-input">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={minAge}
                    onChange={(e) => handleAgeChange(e, "min")}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={maxAge}
                    onChange={(e) => handleAgeChange(e, "max")}
                  />
                </div>
              </div>

              <div className="slider-container">
                <div className="slider-flex">
                  <h3>Match %</h3>
                  <div className="range-inputs">
                    <div>
                      <span>MIN</span>
                      <input
                        type="number"
                        value={minMatch}
                        onChange={(e) => handleMatchChange(e, "min")}
                      />
                    </div>
                    <div>
                      <span>MAX</span>
                      <input
                        type="number"
                        value={maxMatch}
                        onChange={(e) => handleMatchChange(e, "max")}
                      />
                    </div>
                  </div>
                </div>
                <div className="slider">
                  <div
                    className="progress"
                    style={{
                      left: `${(minMatch / 100) * 100}%`,
                      right: `${100 - (maxMatch / 100) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="range-input">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={minMatch}
                    onChange={(e) => handleMatchChange(e, "min")}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={maxMatch}
                    onChange={(e) => handleMatchChange(e, "max")}
                  />
                </div>
              </div>
            </div>

            <div
              className="search-btn"
              onClick={() =>
                (window.location.href = "/justice/dashboard/suspect/matches")
              }
            >
              Search
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
