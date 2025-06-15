"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SecurityDetails from "../staff/security-details/page";
import BackgroundCheck from "./background-check/page";
import Passed from "./passed/page";
import CheckboxToggle from "./CheckboxToggle";
// import CheckboxToggle from "../../admin/add-role/CheckboxToggle";

export default function Staff() {
  const [activeTab, setActiveTab] = useState("userDetails");
  const [modalOpen, setModalOpen] = useState(false);
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);
  const pathname = usePathname();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isBgPassedOpen, setBgPassedOpen] = useState(false);

  
  const handleOpenBgPassed = () => {
    setBgPassedOpen(true);
  };

  const handleCloseBgPassed = () => {
    setBgPassedOpen(false);
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

  const handleOpenDetails = () => {
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="staff">
      <div className="staff__title">Background Check History</div>

      <div className="staff__content">
        <div className="staff__content__header">
          <div className="staff__content__header__middle">
            <div
              className={`user ${activeTab === "userDetails" ? "roles" : ""}`}
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
            <input type="text" placeholder="Search Name or License Number" />
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
            Background Check
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
        <BackgroundCheck
          isOpen={isUserRequestOpen}
          onClose={handleCloseUserRequest}
        />

        <SecurityDetails isOpen={isDetailsOpen} onClose={handleCloseDetails} />

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

                <th>
                  <div className="user-flex">
                    <span>Date of Submission</span>

                    {/* <span>DATE OF SUBMISSION</span> */}
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

                <th>Job Role</th>
                {/* <th>JOB ROLE</th> */}

                <th>Employer</th>
                {/* <th>EMPLOYER</th> */}

                <th>Work Mode</th>
                {/* <th>WORK MODE</th> */}

                <th>Status</th>
                {/* <th>STATUS</th> */}

                <th></th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Domestic Staff",
                  regDate: "JUN-21-2024",
                  workMode: "Fulltime",
                  employer: "Adekule Alaba",
                  employmentStats: "Pending",
                },
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Domestic Staff",
                  regDate: "JUN-21-2024",
                  workMode: "Fulltime",
                  employer: "Adekule Alaba",
                  employmentStats: "Pending",
                },
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Driver",
                  regDate: "JUN-21-2024",
                  workMode: "Part time",
                  employer: "Adekule Alaba",
                  employmentStats: "Passed",
                },
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Security Guard",
                  regDate: "JUN-21-2024",
                  workMode: "Part time",
                  employer: "Adekule Alaba",
                  employmentStats: "Flagged",
                },
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Security Guard",
                  regDate: "JUN-21-2024",
                  workMode: "Fulltime",
                  employer: "Adekule Alaba",
                  employmentStats: "Passed",
                },
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Driver",
                  regDate: "JUN-20-2024",
                  workMode: "Part time",
                  employer: "Adekule Alaba",
                  employmentStats: "Flagged",
                },
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Domestic Staff",
                  regDate: "JUN-20-2024",
                  workMode: "Fulltime",
                  employer: "Adekule Alaba",
                  employmentStats: "Passed",
                },
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Driver",
                  regDate: "JUN-20-2024",
                  workMode: "Fulltime",
                  employer: "Adekule Alaba",
                  employmentStats: "Flagged",
                },
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Security Guard",
                  regDate: "JUN-19-2024",
                  workMode: "Part time",
                  employer: "Adekule Alaba",
                  employmentStats: "Pending",
                },
                {
                  govName: "Adekunle Alaba",
                  govEmail: "Ad@untitledui.com",
                  jobRole: "Domestic Staff",
                  regDate: "JUN-19-2024",
                  workMode: "Fulltime",
                  employer: "Adekule Alaba",
                  employmentStats: "Passed",
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

                  <td onClick={handleOpenBgPassed}>
                    <div className="user-detail">
                      <CheckboxToggle />

                      <Image
                        alt=""
                        src="/assets/avatars/ava-ade.png"
                        width={40}
                        height={40}
                        style={{ borderRadius: "50%", float: "left" }}
                      />
                      <div className="user-details">
                        <div className="user-name">{user.govName}</div>
                        <div className="user-email">{user.govEmail}</div>
                      </div>
                    </div>
                  </td>

                  <td onClick={handleOpenBgPassed}>
                    <div className="reg-date">{user.regDate}</div>
                  </td>

                  <td data-cell="case no" onClick={handleOpenBgPassed}>
                    {user.jobRole}
                  </td>

                  <td data-cell="suspect status" onClick={handleOpenBgPassed}>
                    <span>{user.employer}</span>
                  </td>

                  <td data-cell="case status" onClick={handleOpenBgPassed}>
                    {user.workMode}
                  </td>

                  <td data-cell="offences" onClick={handleOpenBgPassed}>
                    <div className="offence-flex">
                      <span
                        className={`status ${user.employmentStats
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {user.employmentStats}
                      </span>
                    </div>
                  </td>

                  <td onClick={handleOpenBgPassed}>
                    <div className="offence-icons">
                      {/* <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M0.833984 10.0007C0.833984 10.0007 4.16732 3.33398 10.0007 3.33398C15.834 3.33398 19.1673 10.0007 19.1673 10.0007C19.1673 10.0007 15.834 16.6673 10.0007 16.6673C4.16732 16.6673 0.833984 10.0007 0.833984 10.0007Z"
                            stroke="#667085"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.0007 12.5007C11.3814 12.5007 12.5006 11.3814 12.5006 10.0007C12.5006 8.61994 11.3814 7.50065 10.0007 7.50065C8.61994 7.50065 7.50065 8.61994 7.50065 10.0007C7.50065 11.3814 8.61994 12.5007 10.0007 12.5007Z"
                            stroke="#667085"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span> */}

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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Passed
            isOpen={isBgPassedOpen}
            onClose={handleCloseBgPassed}
          />
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
    </div>
  );
}
