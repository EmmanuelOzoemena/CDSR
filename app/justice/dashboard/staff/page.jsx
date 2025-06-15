"use client";

import { useState } from "react";
import Image from "next/image";
import NewSecurity from "./new-security/page";
import NewDriver from "./new-driver/page";
import NewStaff from "./new-staff/page";
import { usePathname } from "next/navigation";
import SecurityDetails from "./security-details/page";
import StaffDetails from "./staff-details/page";
import DriverDetails from "./driver-details/page";
import CheckboxToggle from "../find-match/CheckboxToggle";

export default function Staff() {
  const [activeTab, setActiveTab] = useState("userDetails");
  const [modalOpen, setModalOpen] = useState(false);
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("roles");
  const pathname = usePathname();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  // const handleCreateDepartment = () => {
  //   setModalOpen(false);
  // };

  const handleOpenUserRequest = () => {
    setUserRequestOpen(true);
  };

  const handleCloseUserRequest = () => {
    setUserRequestOpen(false);
  };

  const handleOpenDetails = () => {
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  const onTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="staff">
      <div className="staff__tabs">
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
            Staff List
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

          <div>{pathname?.split("/")[3] ? pathname?.split("/")[3] : ""}</div>
        </div>
      </div>

      <div className="staff__title">Staff List</div>

      <div className="staff__options">
        <div
          className={`user ${selectedTab === "domestic" ? "roles" : ""}`}
          onClick={() => onTabClick("domestic")}
        >
          Domestic Staff
        </div>
        <div
          className={`user ${selectedTab === "roles" ? "roles" : ""}`}
          onClick={() => onTabClick("roles")}
        >
          Security guard
        </div>
        <div
          className={`user ${selectedTab === "driver" ? "roles" : ""}`}
          onClick={() => onTabClick("driver")}
        >
          Driver
        </div>
      </div>

      {selectedTab === "domestic" && (
        <>
          <div className="staff__content">
            <div className="staff__content__header">
              <div className="staff__content__header__middle">
                <div
                  className={`user ${
                    activeTab === "userDetails" ? "roles" : ""
                  }`}
                  onClick={() => handleTabClick("userDetails")}
                >
                  Active
                </div>
                <div
                  className={`user ${activeTab === "roles" ? "roles" : ""}`}
                  onClick={() => handleTabClick("roles")}
                >
                  Pending
                </div>
                <div
                  className={`user ${activeTab === "suspended" ? "roles" : ""}`}
                  onClick={() => handleTabClick("suspended")}
                >
                  Suspended
                </div>
              </div>

              <form action="" className="staff__content__header__input">
                <input
                  type="text"
                  placeholder="Search Name or License Number"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
                    stroke="#101828"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </form>

              <button
                className="staff__content__header__button"
                // onClick={() => setModalOpen(true)}
                onClick={handleOpenUserRequest}
              >
                Add New Staff
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9987 3.3335V12.6668M3.33203 8.00016H12.6654"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* {modalOpen && <NewSecurity /> } */}
            <NewStaff
              isOpen={isUserRequestOpen}
              onClose={handleCloseUserRequest}
            />

            <StaffDetails isOpen={isDetailsOpen} onClose={handleCloseDetails} />

            {/* --------------- */}

            <div className="staff__content__body">
              <table className="staff-table">
                <thead>
                  <tr>
                    <th>
                      <div className="user-flex">
                        <div>
                          <CheckboxToggle />
                        </div>
                        <span>Name</span>

                        {/* <span>NAME</span> */}
                        <div>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.9987 1.33398V10.6673M5.9987 10.6673L10.6654 6.00065M5.9987 10.6673L1.33203 6.00065"
                              stroke="#667085"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>
                    <th>Address</th>

                    {/* <th>ADDRESS</th> */}

                    <th>
                      <div className="user-flex">
                        <span>Registration Date</span>

                        {/* <span>REGISTRATION DATE</span> */}
                        <div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.99967 12.6654V3.33203M7.99967 3.33203L3.33301 7.9987M7.99967 3.33203L12.6663 7.9987"
                              stroke="#667085"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>

                    <th>Work Mode</th>
                    {/* <th>WORK MODE</th> */}

                    <th>Employer</th>
                    {/* <th>EMPLOYER</th> */}

                    <th>Employment Status</th>
                    {/* <th>EMPLOYMENT STATUS</th> */}
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-20-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-20-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-20-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-19-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-19-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                  ].map((user, index) => (
                    <tr key={index}>
                      {/* <td data-cell="date initiated">
                  <div className="user-info">
                    <CheckboxToggle />
                    <div>
                      <h2>{user.date}</h2>
                    </div>
                  </div>
                </td> */}

                      <td onClick={handleOpenDetails}>
                        <div className="user-detail">
                          <CheckboxToggle />

                          <Image
                            alt=""
                            src="/assets/avatars/ava-niyi.png"
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%", float: "left" }}
                            className="staff-pic"
                          />
                          <div className="user-details">
                            <div className="user-name">{user.govName}</div>
                            <div className="user-email">{user.govEmail}</div>
                          </div>
                        </div>
                      </td>

                      <td data-cell="case no" onClick={handleOpenDetails}>
                        {user.address}
                      </td>

                      <td onClick={handleOpenDetails}>
                        <div className="reg-date">{user.regDate}</div>
                      </td>

                      <td data-cell="case status" onClick={handleOpenDetails}>
                        {user.workMode}
                      </td>

                      <td
                        data-cell="suspect status"
                        onClick={handleOpenDetails}
                      >
                        <span>{user.employer}</span>
                      </td>

                      <td data-cell="offences" onClick={handleOpenDetails}>
                        <div className="offence-flex">
                          <span
                            className={`status ${user.employmentStats
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {user.employmentStats}
                          </span>

                          <div className="offence-icons">
                            <span>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.5 4.9974H4.16667M4.16667 4.9974H17.5M4.16667 4.9974V16.6641C4.16667 17.1061 4.34226 17.53 4.65482 17.8426C4.96738 18.1551 5.39131 18.3307 5.83333 18.3307H14.1667C14.6087 18.3307 15.0326 18.1551 15.3452 17.8426C15.6577 17.53 15.8333 17.1061 15.8333 16.6641V4.9974H4.16667ZM6.66667 4.9974V3.33073C6.66667 2.8887 6.84226 2.46478 7.15482 2.15222C7.46738 1.83966 7.89131 1.66406 8.33333 1.66406H11.6667C12.1087 1.66406 12.5326 1.83966 12.8452 2.15222C13.1577 2.46478 13.3333 2.8887 13.3333 3.33073V4.9974M8.33333 9.16406V14.1641M11.6667 9.16406V14.1641"
                                  stroke="#667085"
                                  stroke-width="1.66667"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>

                            <span>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_517_14405)">
                                  <path
                                    d="M14.166 2.50286C14.3849 2.28399 14.6447 2.11037 14.9307 1.99192C15.2167 1.87347 15.5232 1.8125 15.8327 1.8125C16.1422 1.8125 16.4487 1.87347 16.7347 1.99192C17.0206 2.11037 17.2805 2.28399 17.4993 2.50286C17.7182 2.72173 17.8918 2.98156 18.0103 3.26753C18.1287 3.5535 18.1897 3.85999 18.1897 4.16952C18.1897 4.47905 18.1287 4.78555 18.0103 5.07152C17.8918 5.35748 17.7182 5.61732 17.4993 5.83619L6.24935 17.0862L1.66602 18.3362L2.91602 13.7529L14.166 2.50286Z"
                                    stroke="#667085"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_517_14405">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* footer */}

            <div className="staff__content__footer">
              <div className="staff__content__footer__nav">
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

                <div>Previous</div>
              </div>

              {/* pagination */}

              <div className="staff__content__footer__nav">
                <div>Next</div>
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
          </div>
        </>
      )}

      {selectedTab === "roles" && (
        <>
          <div className="staff__content">
            <div className="staff__content__header">
              <div className="staff__content__header__middle">
                <div
                  className={`user ${
                    activeTab === "userDetails" ? "roles" : ""
                  }`}
                  onClick={() => handleTabClick("userDetails")}
                >
                  Active
                </div>
                <div
                  className={`user ${activeTab === "roles" ? "roles" : ""}`}
                  onClick={() => handleTabClick("roles")}
                >
                  Pending
                </div>
                <div
                  className={`user ${activeTab === "suspended" ? "roles" : ""}`}
                  onClick={() => handleTabClick("suspended")}
                >
                  Suspended
                </div>
              </div>

              <form action="" className="staff__content__header__input">
                <input
                  type="text"
                  placeholder="Search Name or License Number"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
                    stroke="#101828"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </form>

              <button
                className="staff__content__header__button"
                // onClick={() => setModalOpen(true)}
                onClick={handleOpenUserRequest}
              >
                Add New Security guard
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9987 3.3335V12.6668M3.33203 8.00016H12.6654"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* {modalOpen && <NewSecurity /> } */}
            <NewSecurity
              isOpen={isUserRequestOpen}
              onClose={handleCloseUserRequest}
            />

            <SecurityDetails
              isOpen={isDetailsOpen}
              onClose={handleCloseDetails}
            />

            {/* --------------- */}

            <div className="staff__content__body">
              <table className="staff-table">
                <thead>
                  <tr>
                    <th>
                      <div className="user-flex">
                        <div>
                          <CheckboxToggle />
                        </div>
                        <span>Name</span>

                        {/* <span>NAME</span> */}
                        <div>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.9987 1.33398V10.6673M5.9987 10.6673L10.6654 6.00065M5.9987 10.6673L1.33203 6.00065"
                              stroke="#667085"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>
                    <th>Address</th>

                    {/* <th>ADDRESS</th> */}

                    <th>
                      <div className="user-flex">
                        <span>Registration Date</span>

                        {/* <span>REGISTRATION DATE</span> */}
                        <div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.99967 12.6654V3.33203M7.99967 3.33203L3.33301 7.9987M7.99967 3.33203L12.6663 7.9987"
                              stroke="#667085"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>

                    <th>Work Mode</th>
                    {/* <th>WORK MODE</th> */}

                    <th>Employer</th>
                    {/* <th>EMPLOYER</th> */}

                    <th>Employment Status</th>
                    {/* <th>EMPLOYMENT STATUS</th> */}
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-20-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-20-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-20-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-19-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-19-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                  ].map((user, index) => (
                    <tr key={index}>
                      {/* <td data-cell="date initiated">
                  <div className="user-info">
                    <CheckboxToggle />
                    <div>
                      <h2>{user.date}</h2>
                    </div>
                  </div>
                </td> */}

                      <td onClick={handleOpenDetails}>
                        <div className="user-detail">
                          <CheckboxToggle />

                          <Image
                            alt=""
                            src="/assets/avatars/ava-ade.png"
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%", float: "left" }}
                            className="staff-pic"
                          />
                          <div className="user-details">
                            <div className="user-name">{user.govName}</div>
                            <div className="user-email">{user.govEmail}</div>
                          </div>
                        </div>
                      </td>

                      <td data-cell="case no" onClick={handleOpenDetails}>
                        {user.address}
                      </td>

                      <td onClick={handleOpenDetails}>
                        <div className="reg-date">{user.regDate}</div>
                      </td>

                      <td data-cell="case status" onClick={handleOpenDetails}>
                        {user.workMode}
                      </td>

                      <td
                        data-cell="suspect status"
                        onClick={handleOpenDetails}
                      >
                        <span>{user.employer}</span>
                      </td>

                      <td data-cell="offences">
                        <div className="offence-flex">
                          <span
                            className={`status ${user.employmentStats
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {user.employmentStats}
                          </span>

                          <div className="offence-icons">
                            <span>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.5 4.9974H4.16667M4.16667 4.9974H17.5M4.16667 4.9974V16.6641C4.16667 17.1061 4.34226 17.53 4.65482 17.8426C4.96738 18.1551 5.39131 18.3307 5.83333 18.3307H14.1667C14.6087 18.3307 15.0326 18.1551 15.3452 17.8426C15.6577 17.53 15.8333 17.1061 15.8333 16.6641V4.9974H4.16667ZM6.66667 4.9974V3.33073C6.66667 2.8887 6.84226 2.46478 7.15482 2.15222C7.46738 1.83966 7.89131 1.66406 8.33333 1.66406H11.6667C12.1087 1.66406 12.5326 1.83966 12.8452 2.15222C13.1577 2.46478 13.3333 2.8887 13.3333 3.33073V4.9974M8.33333 9.16406V14.1641M11.6667 9.16406V14.1641"
                                  stroke="#667085"
                                  stroke-width="1.66667"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>

                            <span>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_517_14405)">
                                  <path
                                    d="M14.166 2.50286C14.3849 2.28399 14.6447 2.11037 14.9307 1.99192C15.2167 1.87347 15.5232 1.8125 15.8327 1.8125C16.1422 1.8125 16.4487 1.87347 16.7347 1.99192C17.0206 2.11037 17.2805 2.28399 17.4993 2.50286C17.7182 2.72173 17.8918 2.98156 18.0103 3.26753C18.1287 3.5535 18.1897 3.85999 18.1897 4.16952C18.1897 4.47905 18.1287 4.78555 18.0103 5.07152C17.8918 5.35748 17.7182 5.61732 17.4993 5.83619L6.24935 17.0862L1.66602 18.3362L2.91602 13.7529L14.166 2.50286Z"
                                    stroke="#667085"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_517_14405">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* footer */}

            <div className="staff__content__footer">
              <div className="staff__content__footer__nav">
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

                <div>Previous</div>
              </div>

              {/* pagination */}

              <div className="staff__content__footer__nav">
                <div>Next</div>
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
          </div>
        </>
      )}

      {selectedTab === "driver" && (
        <>
          <div className="staff__content">
            <div className="staff__content__header">
              <div className="staff__content__header__middle">
                <div
                  className={`user ${
                    activeTab === "userDetails" ? "roles" : ""
                  }`}
                  onClick={() => handleTabClick("userDetails")}
                >
                  Active
                </div>
                <div
                  className={`user ${activeTab === "roles" ? "roles" : ""}`}
                  onClick={() => handleTabClick("roles")}
                >
                  Pending
                </div>
                <div
                  className={`user ${activeTab === "suspended" ? "roles" : ""}`}
                  onClick={() => handleTabClick("suspended")}
                >
                  Suspended
                </div>
              </div>

              <form action="" className="staff__content__header__input">
                <input
                  type="text"
                  placeholder="Search Name or License Number"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
                    stroke="#101828"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </form>

              <button
                className="staff__content__header__button"
                // onClick={() => setModalOpen(true)}
                onClick={handleOpenUserRequest}
              >
                Add New Driver
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9987 3.3335V12.6668M3.33203 8.00016H12.6654"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* {modalOpen && <NewSecurity /> } */}
            <NewDriver
              isOpen={isUserRequestOpen}
              onClose={handleCloseUserRequest}
            />

            <DriverDetails
              isOpen={isDetailsOpen}
              onClose={handleCloseDetails}
            />

            {/* --------------- */}

            <div className="staff__content__body">
              <table className="staff-table">
                <thead>
                  <tr>
                    <th>
                      <div className="user-flex">
                        <div>
                          <CheckboxToggle />
                        </div>
                        <span>Name</span>

                        {/* <span>NAME</span> */}
                        <div>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.9987 1.33398V10.6673M5.9987 10.6673L10.6654 6.00065M5.9987 10.6673L1.33203 6.00065"
                              stroke="#667085"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>
                    <th>Address</th>

                    {/* <th>ADDRESS</th> */}

                    <th>
                      <div className="user-flex">
                        <span>Registration Date</span>

                        {/* <span>REGISTRATION DATE</span> */}
                        <div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.99967 12.6654V3.33203M7.99967 3.33203L3.33301 7.9987M7.99967 3.33203L12.6663 7.9987"
                              stroke="#667085"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>

                    <th>Work Mode</th>
                    {/* <th>WORK MODE</th> */}

                    <th>Employer</th>
                    {/* <th>EMPLOYER</th> */}

                    <th>Employment Status</th>
                    {/* <th>EMPLOYMENT STATUS</th> */}
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-21-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-20-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-20-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-20-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Employment",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-19-2024",
                      workMode: "Part time",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                    {
                      govName: "Adekunle Alaba",
                      govEmail: "Ad@untitledui.com",
                      address: "No 12 Ajana Street, Ojota, Lagos",
                      regDate: "JUN-19-2024",
                      workMode: "Fulltime",
                      employer: "Adekule Alaba",
                      employmentStats: "Unemployed",
                    },
                  ].map((user, index) => (
                    <tr key={index}>
                      {/* <td data-cell="date initiated">
                  <div className="user-info">
                    <CheckboxToggle />
                    <div>
                      <h2>{user.date}</h2>
                    </div>
                  </div>
                </td> */}

                      <td onClick={handleOpenDetails}>
                        <div className="user-detail">
                          <CheckboxToggle />

                          <Image
                            alt=""
                            src="/assets/avatars/ava-haru.png"
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%", float: "left" }}
                            className="staff-pic"
                          />
                          <div className="user-details">
                            <div className="user-name">{user.govName}</div>
                            <div className="user-email">{user.govEmail}</div>
                          </div>
                        </div>
                      </td>

                      <td data-cell="case no" onClick={handleOpenDetails}>
                        {user.address}
                      </td>

                      <td onClick={handleOpenDetails}>
                        <div className="reg-date">{user.regDate}</div>
                      </td>

                      <td data-cell="case status" onClick={handleOpenDetails}>
                        {user.workMode}
                      </td>

                      <td
                        data-cell="suspect status"
                        onClick={handleOpenDetails}
                      >
                        <span>{user.employer}</span>
                      </td>

                      <td data-cell="offences" onClick={handleOpenDetails}>
                        <div className="offence-flex">
                          <span
                            className={`status ${user.employmentStats
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {user.employmentStats}
                          </span>

                          <div className="offence-icons">
                            <span>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.5 4.9974H4.16667M4.16667 4.9974H17.5M4.16667 4.9974V16.6641C4.16667 17.1061 4.34226 17.53 4.65482 17.8426C4.96738 18.1551 5.39131 18.3307 5.83333 18.3307H14.1667C14.6087 18.3307 15.0326 18.1551 15.3452 17.8426C15.6577 17.53 15.8333 17.1061 15.8333 16.6641V4.9974H4.16667ZM6.66667 4.9974V3.33073C6.66667 2.8887 6.84226 2.46478 7.15482 2.15222C7.46738 1.83966 7.89131 1.66406 8.33333 1.66406H11.6667C12.1087 1.66406 12.5326 1.83966 12.8452 2.15222C13.1577 2.46478 13.3333 2.8887 13.3333 3.33073V4.9974M8.33333 9.16406V14.1641M11.6667 9.16406V14.1641"
                                  stroke="#667085"
                                  stroke-width="1.66667"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>

                            <span>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_517_14405)">
                                  <path
                                    d="M14.166 2.50286C14.3849 2.28399 14.6447 2.11037 14.9307 1.99192C15.2167 1.87347 15.5232 1.8125 15.8327 1.8125C16.1422 1.8125 16.4487 1.87347 16.7347 1.99192C17.0206 2.11037 17.2805 2.28399 17.4993 2.50286C17.7182 2.72173 17.8918 2.98156 18.0103 3.26753C18.1287 3.5535 18.1897 3.85999 18.1897 4.16952C18.1897 4.47905 18.1287 4.78555 18.0103 5.07152C17.8918 5.35748 17.7182 5.61732 17.4993 5.83619L6.24935 17.0862L1.66602 18.3362L2.91602 13.7529L14.166 2.50286Z"
                                    stroke="#667085"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_517_14405">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* footer */}

            <div className="staff__content__footer">
              <div className="staff__content__footer__nav">
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

                <div>Previous</div>
              </div>

              {/* pagination */}

              <div className="staff__content__footer__nav">
                <div>Next</div>
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
          </div>
        </>
      )}
    </div>
  );
}
