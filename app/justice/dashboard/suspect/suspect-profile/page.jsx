"use client";

import React, { useState } from "react";
import Image from "next/image";
import Menu from "../menu/page";
import CheckboxToggle from "../CheckboxToggle";

const ExcitingCase = ({ isOpen, onClose, text, maxLength }) => {
  // if (!isOpen) return null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const truncateString = (str, maxLength) => {
  //   if (str.length > maxLength) {
  //     return str.substring(0, maxLength) + "...";
  //   }
  //   return str;
  // };

  const assets = [
    {
      id: "EFCC/ABJ/INV/012/2024",
      description:
        "The EFCC conducted a raid on June 18, 2024, following a thorough investigation into allegat...",
      amount: "$10,000",
      status: "Checked In",
      image: "/assets/avatars/goods.png",
    },
    {
      id: "EFCC/ABJ/INV/012/2024",
      description:
        "The EFCC conducted a raid on June 18, 2024, following a thorough investigation into allegat...",
      amount: "₦10,000",
      status: "Checked Out",
      image: "/assets/avatars/goods.png",
    },
  ];

  return (
    <div className="suspect-profile">
      <div className="suspect-profile__heading">
        <h2>
          Dentention Number: <span>DT/NPF/DV2/LG/IKJ/OP/2892</span>
        </h2>

        <div className="suspect-profile__heading__titles">
          <div>
            Suspect Profiles
            <div className="underline"></div>
          </div>

          <div className="suspect-profile__heading__titles__appended">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13" cy="13" r="13" fill="#009B07" />
              <path
                d="M13.8423 7.81818V18H12.3011V9.35938H12.2415L9.8054 10.9503V9.47869L12.3459 7.81818H13.8423Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="suspect-profile__content">
        <div className="suspect-profile__header">
          <div className="suspect-profile__header__title">
            <span>Suspect Profile Created By:</span>
            <Image
              alt=""
              src="/assets/avatars/ava-niyi.png"
              width={24}
              height={24}
            />
            <h2>Ahmed Olaniyi</h2>
            <h3>Admin</h3>
          </div>

          <div className="suspect-profile__header__title">
            <h3>Status of case:</h3>
            <div className="court-btn">
              Filed in Court
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#3538CD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="more-btn" onClick={handleMenuToggle}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <rect width="50" height="50" rx="25" fill="#D0FFD3" />
                  <path
                    d="M30.5401 21.8106C32.1748 21.8106 33.5001 20.4854 33.5001 18.8506C33.5001 17.2159 32.1748 15.8906 30.5401 15.8906C28.9053 15.8906 27.5801 17.2159 27.5801 18.8506C27.5801 20.4854 28.9053 21.8106 30.5401 21.8106Z"
                    fill="#009B07"
                  />
                  <path
                    d="M19.46 21.8106C21.0948 21.8106 22.42 20.4854 22.42 18.8506C22.42 17.2159 21.0948 15.8906 19.46 15.8906C17.8252 15.8906 16.5 17.2159 16.5 18.8506C16.5 20.4854 17.8252 21.8106 19.46 21.8106Z"
                    fill="#009B07"
                  />
                  <path
                    d="M30.5401 34.1075C32.1748 34.1075 33.5001 32.7823 33.5001 31.1475C33.5001 29.5127 32.1748 28.1875 30.5401 28.1875C28.9053 28.1875 27.5801 29.5127 27.5801 31.1475C27.5801 32.7823 28.9053 34.1075 30.5401 34.1075Z"
                    fill="#009B07"
                  />
                  <path
                    d="M19.46 34.1075C21.0948 34.1075 22.42 32.7823 22.42 31.1475C22.42 29.5127 21.0948 28.1875 19.46 28.1875C17.8252 28.1875 16.5 29.5127 16.5 31.1475C16.5 32.7823 17.8252 34.1075 19.46 34.1075Z"
                    fill="#009B07"
                  />
                </g>
              </svg>
            </div>
            {/* {isMenuOpen && <Menu />} */}
          </div>
          {isMenuOpen && <Menu />}
        </div>

        <div className="suspect-profile__body">
          <div className="suspect-profile__body__left">
            <div className="heading">
              <h2>SUSPECT BIO</h2>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3327 10.7474V14.2474C13.3327 17.1641 12.166 18.3307 9.24935 18.3307H5.74935C2.83268 18.3307 1.66602 17.1641 1.66602 14.2474V10.7474C1.66602 7.83073 2.83268 6.66406 5.74935 6.66406H9.24935C12.166 6.66406 13.3327 7.83073 13.3327 10.7474Z"
                    fill="#667085"
                  />
                  <path
                    d="M14.2508 1.66406H10.7508C8.24733 1.66406 7.03919 2.52971 6.74673 4.61314C6.66931 5.16465 7.13077 5.6224 7.68769 5.6224H9.25078C12.7508 5.6224 14.3758 7.2474 14.3758 10.7474V12.3105C14.3758 12.8674 14.8335 13.3289 15.385 13.2514C17.4685 12.959 18.3341 11.7508 18.3341 9.2474V5.7474C18.3341 2.83073 17.1674 1.66406 14.2508 1.66406Z"
                    fill="#667085"
                  />
                </svg>
                copy
              </span>
            </div>

            <div className="suspect-details">
              <div className="suspect-photo">
                <div className="main-image">
                  <Image alt="Suspect" src="/assets/suspect-img.png" width={100} height={280} className="img" />
                </div>

                <div className="thumbnail-container">
                  <Image alt="Suspect" src="/assets/avatars/ava-sus2.png" width={100} height={280} className="img" />

                  <Image alt="Suspect" src="/assets/avatars/ava-sus4.png" width={100} height={280} className="img" />
                </div>
              </div>

              <div className="details">
                <div>
                  <div>
                    <h2>First Name:</h2>
                    <p>Frank</p>
                  </div>

                  <div>
                    <h2>Last Name:</h2>
                    <p>Ammadou</p>
                  </div>
                </div>

                <div>
                  <div>
                    <h2>Middle Name:</h2>
                    <p>Karfa</p>
                  </div>

                  <div>
                    <h2>Alias:</h2>
                    <p>Ororomo</p>
                  </div>
                </div>
              </div>

              <div className="other-detail">
                <div>
                  <h2>Phone Number:</h2>
                  <p>07034573670</p>
                </div>

                <div className="other-detail__email">
                  <h2>Email</h2>
                  <p>Frank.A@gmail.com</p>
                </div>

                <div>
                  <h2>Date Initiated:</h2>
                  <p>JUN-19-2024</p>
                  <h2>18:32:23</h2>
                </div>

                <div className="other-detail__associate">
                  <h2>Known Associates:</h2>
                  <p>Okoro Madu</p>
                  <p>Shekau Ahmed</p>
                  <p>Tope Adeniyi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="suspect-profile__body__right">
            <div className="heading">
              <div>
                <h2>Nationality:</h2>
                <span>Nigerian</span>
              </div>

              <div>
                <h2>State of Origin:</h2>
                <span>Lagos State</span>
              </div>

              <div>
                <h2>LGA of Origin:</h2>
                <span>Ikeja</span>
              </div>

              <div>
                <h2>Religion:</h2>
                <span>Christianity</span>
              </div>
            </div>

            <div className="heading">
              <div>
                <h2>Sex:</h2>
                <span>Male</span>
              </div>

              <div>
                <h2>Height:</h2>
                <span>1.73M</span>
              </div>

              <div>
                <h2>Weight:</h2>
                <span>130kg</span>
              </div>

              <div>
                <h2>Eye Colour:</h2>
                <span>Brown</span>
              </div>

              <div>
                <h2>Hair Colour:</h2>
                <span>Black</span>
              </div>
            </div>

            <div className="suspect-profile__body__right__attachment">
              <h2>Identifying Information</h2>
              <p>Attach documents, videos and audio relating to this case</p>

              <div className="id-info">
                <div>
                  <h2>BVN:</h2>
                  <h4>
                    77734792452{" "}
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
                  </h4>
                </div>

                <div>
                  <h2>NIN:</h2>
                  <h4>
                    222893959824{" "}
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
                  </h4>
                </div>

                <div>
                  <h2>Driver's License Number:</h2>
                  <h4>
                    KJ2893959824{" "}
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
                  </h4>
                </div>

                <div>
                  <h2>Passport Number:</h2>
                  <h4>
                    KJ2893959824{" "}
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
                  </h4>
                </div>
              </div>
            </div>

            <div className="suspect-profile__body__right__attachment">
              <h2>Arresting Station Details:</h2>

              <div className="heading">
                <div>
                  <h2>Name of Station:</h2>
                  <span>Allen Station</span>
                </div>

                <div>
                  <h2>Arresting Officer(s):</h2>
                  <span>
                    <Image
                      alt=""
                      src="/assets/avatars/ibro.png"
                      width={24}
                      height={24}
                    />
                    Audu Ibrahim
                  </span>
                </div>

                <div>
                  <h2>State Head:</h2>
                  <span>
                    <Image
                      alt=""
                      src="/assets/avatars/oye.png"
                      width={24}
                      height={24}
                    />
                    Adeola Oyetola
                  </span>
                </div>
              </div>

              <div className="heading">
                <div>
                  <h2>Police Division:</h2>
                  <span>Ikeja Division</span>
                </div>

                <div>
                  <h2>Police Command:</h2>
                  <span>Lagos State Command</span>
                </div>

                <div>
                  <h2>Police Zone:</h2>
                  <span>Zone 2(Lagos and Ogun)</span>
                </div>
              </div>
            </div>

            <div className="suspect-profile__body__right__fingerprints">
              <h2>Fingerprint:</h2>
              <p>Attach documents, videos and audio relating to this case</p>

              <Image
                alt=""
                src="/assets/avatars/f1.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f2.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f3.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f4.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f4.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f6.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f7.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f3.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f4.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f4.png"
                width={77}
                height={77}
              />

              <Image
                alt=""
                src="/assets/avatars/f2.png"
                width={77}
                height={77}
              />
            </div>

            <div className="suspect-profile__body__right__asset">
              <h2>Document Seized Asset</h2>

              <p>Document Seized Assets and Evidence relating to this case</p>
              <div className="asset">
                Link Asset
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99935 4.16406V15.8307M4.16602 9.9974H15.8327"
                    stroke="#009A29"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h2>Charge sheet and Case File</h2>

              <p>
                Chargeable offense, Please create a case file or Charge sheet
              </p>
              <div className="case-asset">
                Create Case File
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99935 4.16406V15.8307M4.16602 9.9974H15.8327"
                    stroke="#009A29"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h2>Dentention Details</h2>

              {/* Table */}

              <div className="suspect-profile__body__right__table">
                <table className="den-table">
                  <thead>
                    <tr>
                      <th>
                        <div className="entry-flex">
                          <CheckboxToggle />
                          <span>Entry Date</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M7.99992 3.3291V12.6624M7.99992 12.6624L12.6666 7.99577M7.99992 12.6624L3.33325 7.99577"
                              stroke="#667085"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </th>
                      <th>Detention No</th>
                      <th>Detention Location</th>
                      <th>Detention Status</th>
                      <th>Cell Number</th>
                      <th>Detention Duration</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      {
                        entry: "JAN-6-2024",
                        detentionNo: "DT/NPF/DV2/LG/IKJ/OP/2892",
                        detentionLoc: "Alien Police Station",
                        detentionSts: "Bailed",
                        cellNo: "14",
                        detentionDur: "3months",
                      },
                      {
                        entry: "JAN-6-2024",
                        detentionNo: "DT/NPF/DV2/LG/IKJ/OP/2893",
                        detentionLoc: "Illupeju Police Station",
                        detentionSts: "Escaped",
                        cellNo: "14",
                        detentionDur: "3months",
                      },

                      {
                        entry: "JAN-6-2024",
                        detentionNo: "DT/NPF/DV2/LG/IKJ/OP/2894",
                        detentionLoc: "G.R.A Police Station",
                        detentionSts: "Released",
                        cellNo: "14",
                        detentionDur: "3months",
                      },
                    ].map((user, index) => (
                      <tr key={index}>
                        <td>
                          <div className="entry-flex">
                            <CheckboxToggle />
                            <span>{user.entry}</span>
                          </div>
                        </td>
                        <td>{user.detentionNo}</td>
                        <td>{user.detentionLoc}</td>
                        <td>{user.detentionSts}</td>
                        <td>{user.cellNo}</td>
                        <td>{user.detentionDur}</td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M10.5001 10.8291C10.9603 10.8291 11.3334 10.456 11.3334 9.99577C11.3334 9.53553 10.9603 9.16243 10.5001 9.16243C10.0398 9.16243 9.66675 9.53553 9.66675 9.99577C9.66675 10.456 10.0398 10.8291 10.5001 10.8291Z"
                              stroke="#98A2B3"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.5001 4.99577C10.9603 4.99577 11.3334 4.62267 11.3334 4.16243C11.3334 3.7022 10.9603 3.3291 10.5001 3.3291C10.0398 3.3291 9.66675 3.7022 9.66675 4.16243C9.66675 4.62267 10.0398 4.99577 10.5001 4.99577Z"
                              stroke="#98A2B3"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.5001 16.6624C10.9603 16.6624 11.3334 16.2893 11.3334 15.8291C11.3334 15.3689 10.9603 14.9958 10.5001 14.9958C10.0398 14.9958 9.66675 15.3689 9.66675 15.8291C9.66675 16.2893 10.0398 16.6624 10.5001 16.6624Z"
                              stroke="#98A2B3"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* footer */}

              <div className="suspect-profile__body__right__footer">
                <div className="suspect-profile__body__right__footer__nav">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8346 10.0013H4.16797M4.16797 10.0013L10.0013 15.8346M4.16797 10.0013L10.0013 4.16797"
                      stroke="#344054"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {/* <div>Previous</div> */}
                </div>

                {/* pagination */}

                <div className="suspect-profile__body__right__footer__nav">
                  {/* <div>Next</div> */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16797 10.0013H15.8346M15.8346 10.0013L10.0013 4.16797M15.8346 10.0013L10.0013 15.8346"
                      stroke="#344054"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* table end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcitingCase;

// <table className="table">
//                 <thead>
//                   <tr>
//                     <th><CheckboxToggle /></th>
//                     <th>Entry Date</th>
//                     <th>Dentention No</th>
//                     <th>Dentention Location</th>
//                     <th>Dentention Status</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {assets.map((asset, index) => (
//                     <tr key={index}>
//                       <td>
//                         {/* <Image
//                           alt=""
//                           src={asset.image}
//                           width={36}
//                           height={36}
//                           // style={{ float: "left" }}
//                         /> */}

//                         <CheckboxToggle />
//                       </td>
//                       <td>
//                         <div className="link">{asset.id}</div>
//                       </td>
//                       <td>{asset.description}</td>
//                       <td>{asset.amount}</td>
//                       <td>{asset.status}</td>
//                       <td>
//                         <svg
//                           width="40"
//                           height="40"
//                           viewBox="0 0 40 40"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <g clip-path="url(#clip0_637_17613)">
//                             <path
//                               d="M16.666 19.9974H23.3327M28.3327 19.9974C28.3327 24.5998 24.6017 28.3307 19.9993 28.3307C15.397 28.3307 11.666 24.5998 11.666 19.9974C11.666 15.395 15.397 11.6641 19.9993 11.6641C24.6017 11.6641 28.3327 15.395 28.3327 19.9974Z"
//                               stroke="#667085"
//                               stroke-width="1.66667"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                             />
//                           </g>
//                           <defs>
//                             <clipPath id="clip0_637_17613">
//                               <rect
//                                 width="20"
//                                 height="20"
//                                 fill="white"
//                                 transform="translate(10 10)"
//                               />
//                             </clipPath>
//                           </defs>
//                         </svg>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
