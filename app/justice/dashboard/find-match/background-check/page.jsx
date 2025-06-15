"use client";

import { useState, useRef } from "react";
import Image from "next/image";
// import Review from "../review/page";
import axios from "axios";
import Review from "../../staff/review/page";
// import DatabaseModal from "../../suspect/search/page";
import BgPayment from "../review/page";
import CheckboxToggle from "../CheckboxToggle";
import ImageUploadComponent from "../upload-img/page";

const BackgroundCheck = () => {
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);
  const [minMatch, setMinMatch] = useState(0);
  const [maxMatch, setMaxMatch] = useState(100);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDatabases, setSelectedDatabases] = useState([]);
  const [date, setDate] = useState("");
  const [images, setImages] = useState([]);
  const [mugLoading, setMugLoading] = useState(false);
  const mediaRef = useRef("");
  const [activeTab, setActiveTab] = useState("saveNext");
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);
  const [employmentForms, setEmploymentForms] = useState([]);
  const [isRequestSubmitted, setIsResquestSubmitted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // if (!isOpen) return null;

  const handleSubmitRequest = () => {
    setIsResquestSubmitted(true);
  };

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
    setSelectedDatabases(databases);
  };

  const handleDateChange = (e) => {
    let inputDate = e.target.value.replace(/[^0-9]/g, "");
    if (inputDate.length > 8) inputDate = inputDate.slice(0, 8);

    if (inputDate.length > 2) {
      inputDate = inputDate.slice(0, 2) + "-" + inputDate.slice(2);
    }
    if (inputDate.length > 5) {
      inputDate = inputDate.slice(0, 5) + "-" + inputDate.slice(5);
    }

    setDate(inputDate);
  };

  const handleAddEmploymentForm = () => {
    setEmploymentForms([...employmentForms, {}]);
  };

  const handleMugShotUpload = (e, docType) => {
    setMugLoading(true);

    let files = e.target.files;

    const fileToUri = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(null, reader.result);
      };
      reader.onerror = function (error) {
        cb(error, null);
      };
    };

    if (files) {
      for (let i = 0; i < files.length; i++) {
        fileToUri(files[0], (err, result) => {
          if (result) {
            console.log("result", result);

            axios
              .post(
                `https://kaxl3c7ehj.execute-api.us-east-1.amazonaws.com/dev/v1/upload`,
                {
                  user: "teddy",
                  media_type: docType,
                  contents: result,
                }
                // ,{
                //   headers: {
                //     Authorization: `Bearer ${auth ? auth.token : ""}`,
                //   },
                // }
              )
              .then((response) => {
                console.log("response file uploaded", response);
                if (response?.status === 200) {
                  const temp = images;
                  temp.unshift({ url: response?.data?.body?.data });
                  setImages([...temp]);
                }
                setMugLoading(false);
              })
              .catch((err) => {
                console.log("ERRRR", err);
                setMugLoading(false);
                alert("Mugshot upload failed. please try again");
              });
          }
        });
      }
    }
  };

  const handleMugshotRemove = (index) => {
    console.log("index", index);
    const temp = images;
    console.log("temp", temp);
    temp?.splice(index, 1);
    setImages([...temp]);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  const handleOpenUserRequest = () => {
    setUserRequestOpen(true);
  };

  const handleCloseUserRequest = () => {
    setUserRequestOpen(false);
  };

  return (
    <div className="background-check">
      <div className="background-check__overlay" onClick={closeModal}></div>
      <div className="background-check__content">
        <header className="background-check__content__header">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={closeModal}
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
            <h2>Background Check</h2>
          </div>

          <div>
            <button className="close-button" onClick={closeModal}>
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

            <button className="close-button" onClick={closeModal}>
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

        <div className="background-check__content__main">
          <div className="background-check__content__main__upload">
            <div className="background-check__content__main__upload__facial">
              <div className="background-check__content__main__upload__facial__card">
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
                        <stop
                          offset="1"
                          stop-color="#97FF57"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h2>Facial Background Recognition</h2>

                <ImageUploadComponent />
              </div>
            </div>
          </div>

          <div className="background-check__content__main__matches">
            <h2>Background Check Request Form</h2>

            <form action="">
              {/* <div>
                <div className="search" onClick={handleInputClick}>
                  <input type="text" placeholder="Select Database" readOnly />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                  closeModal={handleCloseModal}
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
              </div> */}

              <div className="checkbox">
                <div className="gen-flex">
                  <CheckboxToggle />
                  <span>Address History</span>
                </div>

                <div className="gen-flex">
                  <CheckboxToggle />
                  <span>Criminal History</span>
                </div>

                <div className="gen-flex">
                  <CheckboxToggle />
                  <span>Employment History</span>
                </div>

                <div className="gen-flex">
                  <CheckboxToggle />
                  <span>Sexual Criminal History</span>
                </div>

                <div className="gen-flex">
                  <CheckboxToggle />
                  <span>Medical History</span>
                </div>

                <div className="gen-flex">
                  <CheckboxToggle />
                  <span>Finanicial Crime History</span>
                </div>

                <div className="gen-flex">
                  <CheckboxToggle />
                  <span>Education History</span>
                </div>

                <div className="gen-flex">
                  <CheckboxToggle />
                  <span>Prison/Jail History</span>
                </div>
              </div>

              <div className="details">
                <div className="input">
                  <input type="text" placeholder="Input First Name" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Input Middle Name" />
                </div>
              </div>

              <div className="details">
                <div className="input">
                  <input type="text" placeholder="Input Last Name" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Input Alias" />
                </div>
              </div>

              <div className="details">
                <div className="input">
                  <input type="text" placeholder="Input NIN" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Input BVN" />
                </div>
              </div>

              <div className="details">
                <div className="input">
                  <input type="text" placeholder="Input Phone Number" />
                </div>
                <div className="input">
                  <input type="email" placeholder="Input Email Address" />
                </div>
              </div>

              <div className="note">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 9H11V7H13M13 17H11V11H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                    fill="#FF8A00"
                  />
                </svg>

                <p>
                  Please note an authorisation request will be sent to the
                  person above, before your request is processed
                </p>
              </div>

              {!isRequestSubmitted && (
                <div className="search-btn" onClick={handleSubmitRequest}>
                  Submit Request
                </div>
              )}
            </form>
          </div>
        </div>

        {isRequestSubmitted && (
          <>
            <hr />

            <div className="background-check__content__payment">
              <div className="background-check__content__payment__flex">
                <div>
                  <div>Address History</div>
                  <div>N14,000.00</div>
                </div>

                <div>
                  <div>Employement History</div>
                  <div>N20,000.00</div>
                </div>

                <div>
                  <div>Medical History</div>
                  <div>N20,000.00</div>
                </div>

                <div>
                  <div className="tax">Tax</div>
                  <div className="tax">800.00</div>
                </div>

                <div>
                  <div className="total">Total</div>
                  <div className="total">N54,800.00</div>
                </div>
              </div>

              <div className="search-btn" onClick={handleOpenUserRequest}>
                Make Payment
              </div>

              <BgPayment
                isOpen={isUserRequestOpen}
                closeModal={handleCloseUserRequest}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BackgroundCheck;
