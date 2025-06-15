"use client";

import { useState } from "react";
import Image from "next/image";
import NewSecurity from "../staff/new-security/page";
import { usePathname } from "next/navigation";
import ConfirmStaff from "./modal";
import IncidentReport from "./incident-report/page";
import IncidentReview from "./incident-details/page";
import CheckboxToggle from "../find-match/CheckboxToggle";

export default function Incident() {
  const [activeTab, setActiveTab] = useState("userDetails");
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);
  const [isReviewOpen, setReviewOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  const handleOpenReview = () => {
    setReviewOpen(true);
  };

  const handleCloseReview = () => {
    setReviewOpen(false);
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

  return (
    <div className="incident">
      <div className="incident__tabs">
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
            Incident
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

      <div className="incident__title">
        Incident Report
        <form action="" className="incident__content__header__input">
          <input type="text" placeholder="Search Name or Incident Number" />
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
      </div>

      <div className="incident__content">
        <div className="incident__content__header">
          <div className="incident__content__header__middle">
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

          <form action="" className="incident__content__header__input">
            <input type="text" placeholder="Search Name or Incident Number" />
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
            className="incident__content__header__button"
            // onClick={() => setModalOpen(true)}
            onClick={handleOpenUserRequest}
          >
            Report Incident
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
        <IncidentReport
          // ConfirmStaff
          isOpen={isUserRequestOpen}
          onClose={handleCloseUserRequest}
        />

        {/* --------------- */}

        <div className="incident__content__body">
          <table className="incident-table">
            <thead>
              <tr>
                <th>
                  <div className="user-flex">
                    <div>
                      <CheckboxToggle />
                    </div>
                    <span>Incident Number</span>
                    {/* INICIDENT NUMBER */}
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
                    <span>Reported Date</span>
                    {/* REPORTED DATE */}
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

                <th>Incident Category</th>
                {/* INCIDENT CATEGORY */}

                <th>Reported By:</th>
                {/* REPORTED BY: */}

                <th>Current Status</th>
                {/* CURRENT STATUS */}

                <th>Assigned CDSR Agent</th>
                {/* ASSIGNED CDSR AGENT */}
                <th></th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  incidentNo: "CDSR240919TH001",
                  category: "Theft",
                  reportedDate: "JUN-21-2024",
                  reportedTime: "12:32 PM",
                  priority: "Not Set",
                  reportedBy: "Adekunle Alaba",
                  assignAgent: "Okoro Adanna",
                  currentStat: "Incident Reported",
                },
                {
                  incidentNo: "CDSR240919TH002",
                  category: "Murder",
                  reportedDate: "JUN-21-2024",
                  reportedTime: "12:32 PM",
                  priority: "Not Set",
                  reportedBy: "Adekunle Alaba",
                  assignAgent: "Okoro Adanna",
                  currentStat: "Incident Assigned",
                },
                {
                  incidentNo: "CDSR240919TH003",
                  category: "Theft",
                  reportedDate: "JUN-21-2024",
                  reportedTime: "12:32 PM",
                  priority: "Not Set",
                  reportedBy: "Emmanuel Ebuka",
                  assignAgent: "Adekunle Alaba",
                  currentStat: "Ongoing Investigation",
                },
                {
                  incidentNo: "CDSR240919TH004",
                  category: "Stolen Money",
                  reportedDate: "JUN-21-2024",
                  reportedTime: "12:32 PM",
                  priority: "High",
                  reportedBy: "Emmanuel Ebuka",
                  assignAgent: "Adekule Alaba",
                  currentStat: "Ongoing Prosecution",
                },
                {
                  incidentNo: "CDSR240919TH005",
                  category: "Stolen Money",
                  reportedDate: "JUN-21-2024",
                  reportedTime: "12:32 PM",
                  priority: "Medium",
                  reportedBy: "Adekunle Alaba",
                  assignAgent: "Okoro Adanna",
                  currentStat: "Closed",
                },
                {
                  incidentNo: "CDSR240919TH006",
                  category: "Stolen Money",
                  reportedDate: "JUN-20-2024",
                  reportedTime: "12:32 PM",
                  priority: "Medium",
                  reportedBy: "Emmanuel Ebuka",
                  assignAgent: "Adekule Alaba",
                  currentStat: "Convicted",
                },
                {
                  incidentNo: "CDSR240919TH007",
                  category: "Theft",
                  reportedDate: "JUN-20-2024",
                  reportedTime: "12:32 PM",
                  priority: "High",
                  reportedBy: "Adekunle Alaba",
                  assignAgent: "Adekule Alaba",
                  currentStat: "Acquitted",
                },
                {
                  incidentNo: "CDSR240919TH008",
                  category: "Theft",
                  reportedDate: "JUN-20-2024",
                  reportedTime: "12:32 PM",
                  priority: "Low",
                  reportedBy: "Adekunle Alaba",
                  assignAgent: "Okoro Adanna",
                  currentStat: "Withdrawn",
                },
                {
                  incidentNo: "CDSR240919TH009",
                  category: "Murder",
                  reportedDate: "JUN-19-2024",
                  reportedTime: "12:32 PM",
                  priority: "Medium",
                  reportedBy: "Emmanuel Ebuka",
                  assignAgent: "Okoro Adanna",
                  currentStat: "No Case",
                },
                {
                  incidentNo: "CDSR240919TH010",
                  category: "Theft",
                  reportedDate: "JUN-19-2024",
                  reportedTime: "12:32 PM",
                  priority: "Not Set",
                  reportedBy: "Adekunle Alaba",
                  assignAgent: "Adekule Alaba",
                  currentStat: "Case Rejected",
                },
              ].map((user, index) => (
                <tr key={index}>
                  <td>
                    <div className="reg-date">{user.incidentNo}</div>
                  </td>

                  {/* <td>
                    <div className="user-detail">
                      <div className="user-details">
                        <div className="user-name">{user.reportedDate}</div>
                        <div className="user-email">{user.reportedTime}</div>
                      </div>
                    </div>
                  </td> */}

                  <td data-cell="case no" onClick={handleOpenReview}>
                    {user.reportedDate}
                  </td>

                  <td data-cell="case no" onClick={handleOpenReview}>
                    {user.category}
                  </td>

                  <td data-cell="case-status" onClick={handleOpenReview}>
                    {user.reportedBy}
                  </td>

                  <td data-cell="offences" onClick={handleOpenReview}>
                    <div className="offence-flex">
                      <span
                        className={`status ${user.currentStat
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {user.currentStat}
                      </span>
                    </div>
                  </td>

                  <td data-cell="suspect-status" onClick={handleOpenReview}>
                    <span>{user.assignAgent}</span>

                    {/* <div className="offence-icons">
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              stroke="#667085"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div> */}
                  </td>

                  <td>
                    <div className="svg-flex pointer">
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

                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          stroke="#667085"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}

              <IncidentReview
                isOpen={isReviewOpen}
                onClose={handleCloseReview}
              />
            </tbody>
          </table>
        </div>

        {/* footer */}

        <div className="incident__content__footer">
          <div className="incident__content__footer__nav">
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

          <div className="incident__content__footer__nav">
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
