"use client";

import { useState } from "react";
import Image from "next/image";
import SuspectRetrieved from "../suspect-retrieved/page";

export default function Matches() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="matches">
      <div className="matches__title">Matches</div>
      {/* --------------- */}

      <div className="matches__filter">
        <div className="matches__filter__items">
          <span>Nigerian Police Force</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>Immigration</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>Male</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>Female</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>7775766518827</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>Frank</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>Karfa</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>Ammadou</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>Lagos</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>Ikeja</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>

        <div className="matches__filter__items">
          <span>Opebi</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>
      </div>

      <div className="matches__body">
        <table className="matches-table">
          <thead>
            <tr>
              <th>Match %</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Source Database</th>
              <th>Sex</th>
              <th>State</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                match: "99.9%",
                firstName: "Frank",
                imageUrl: "/assets/frank.png",
                middleName: "Karfa",
                lastName: "Ammadou",
                sourceDb: "Nigeria Police Force",
                sex: "Male",
                state: "Lagos State",
                retrieve: "Retrieve Profile",
              },
              {
                match: "96.8%",
                // match: "99.9%",
                firstName: "Frank",
                imageUrl: "/assets/frank.png",
                middleName: "Karfa",
                lastName: "Ammadou",
                sourceDb: "EFCC",
                sex: "Male",
                state: "Lagos State",
                retrieve: "Retrieve Profile",
              },
              {
                match: "93.4%",
                // match: "99.9%",
                firstName: "Frank",
                imageUrl: "/assets/frank.png",
                middleName: "Karfa",
                lastName: "Ammadou",
                sourceDb: "Immigration",
                sex: "Male",
                state: "Plateau State",
                retrieve: "Retrieve Profile",
              },
              {
                match: "93%",
                // match: "99.9%",
                firstName: "Frank",
                imageUrl: "/assets/frank.png",
                middleName: "Karfa",
                lastName: "Ammadou",
                sourceDb: "DSS",
                sex: "Male",
                state: "Oyo State",
                retrieve: "",
              },
              {
                match: "92.8%",
                // match: "99.9%",
                firstName: "Frank",
                imageUrl: "/assets/frank.png",
                middleName: "Karfa",
                lastName: "Ammadou",
                sourceDb: "BVN",
                sex: "Male",
                state: "Lagos",
                retrieve: "",
              },
              {
                match: "92.2%",
                // match: "99.9%",
                firstName: "Frank",
                imageUrl: "/assets/frank.png",
                middleName: "Karfa",
                lastName: "Ammadou",
                sourceDb: "NIN",
                sex: "Male",
                state: "Lagos",
                retrieve: "",
              },
              {
                match: "90%",
                // match: "99.9%",
                firstName: "Frank",
                imageUrl: "/assets/frank.png",
                middleName: "Karfa",
                lastName: "Ammadou",
                sourceDb: "Driver License",
                sex: "Male",
                state: "Oyo State",
                retrieve: "",
              },
              {
                // match: "11%",
                match: "99.9%",
                firstName: "Joy",
                imageUrl: "/assets/joy.png",
                middleName: "Ngozi",
                lastName: "Amadi",
                sourceDb: "Nigeria Police Force",
                sex: "Female",
                state: "Niger State",
                retrieve: "",
              },
              {
                // match: "9%",
                match: "99.9%",
                firstName: "Mustapha",
                imageUrl: "/assets/mustafa.png",
                middleName: "NIL",
                lastName: "Hammed",
                sourceDb: "Immigration",
                sex: "Male",
                state: "Plateau State",
                retrieve: "Retrieve Profile",
              },
              {
                // match: "5%",
                match: "99.9%",
                firstName: "Jessica",
                imageUrl: "/assets/jessica.png",
                middleName: "Ayomide",
                lastName: "Adebowale",
                sourceDb: "Nigeria Police Force",
                sex: "Female",
                state: "Niger State",
                retrieve: "",
              },
            ].map((user, index) => (
              <tr key={index}>
                <td>
                  {/* <h2>{user.match}</h2> */}
                  {/* <span
                    className={`match ${user.match
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {user.match}
                  </span> */}
                  <div className="match">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6"
                        stroke="#12B76A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>{user.match}</span>
                  </div>
                </td>
                <td>
                  <div className="first-name">
                    <Image
                      alt=""
                      src={user.imageUrl}
                      width={34}
                      height={34}
                      style={{ float: "left" }}
                    />
                    <h2>{user.firstName}</h2>
                  </div>
                  {/* <h2>{user.firstName}</h2> */}
                </td>
                <td
                    onClick={() => {
                    window.location.href = `/justice/dashboard/suspect/suspect-profile`
                }}
                  >{user.middleName}</td>
                <td
                    onClick={() => {
                    window.location.href = `/justice/dashboard/suspect/suspect-profile`
                }}
                  >{user.lastName}</td>
                <td
                    onClick={() => {
                    window.location.href = `/justice/dashboard/suspect/suspect-profile`
                }}
                  >{user.sourceDb}</td>
                <td
                    onClick={() => {
                    window.location.href = `/justice/dashboard/suspect/suspect-profile`
                }}
                  >{user.sex}</td>
                <td
                    onClick={() => {
                    window.location.href = `/justice/dashboard/suspect/suspect-profile`
                }}
                  >{user.state}</td>
                <td>
                  <div className="retrieve" 
                  
                  onClick={handleOpenModal}
                //   onClick={() => {
                //     window.location.href = `/justice/dashboard/suspect/suspect-profile`
                // }}
                  >
                    {user.retrieve}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* footer */}

      <div className="matches__footer">
        <div className="matches__footer__nav">
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

        <div className="matches__footer__nav">
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

      {isModalOpen && (
        <SuspectRetrieved isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
}
