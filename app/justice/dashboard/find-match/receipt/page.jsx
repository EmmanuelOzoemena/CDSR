"use client"

import React, { useState } from "react";
import IncidentReport from "../../incident/incident-report/page";

const Receipt = () => {
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);

    // if (!isOpen) return null;

    const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOpenUserRequest = () => {
    setUserRequestOpen(true);
  };

  const handleCloseUserRequest = () => {
    setUserRequestOpen(false);
  };

  const handleClose = () => {
    closeModal();
    window.location.reload();
  };

  return (
    <div className="receipt">
      <div className="receipt__overlay" onClick={handleClose}></div>
      <div className="receipt__added-notif">
        <div className="receipt__added-notif__heading">
          <svg
            width="71"
            height="70"
            viewBox="0 0 121 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60.4982"
              cy="59.631"
              r="59.631"
              fill="#009B07"
              fill-opacity="0.1"
            />
            <path
              d="M59.4387 31.2383C43.7926 31.2383 31.043 43.988 31.043 59.634C31.043 75.28 43.7926 88.0297 59.4387 88.0297C75.0847 88.0297 87.8344 75.28 87.8344 59.634C87.8344 43.988 75.0847 31.2383 59.4387 31.2383ZM73.0118 53.103L56.9115 69.2033C56.5139 69.6009 55.9744 69.828 55.4065 69.828C54.8386 69.828 54.2991 69.6009 53.9015 69.2033L45.8655 61.1674C45.0421 60.3439 45.0421 58.9809 45.8655 58.1574C46.689 57.3339 48.052 57.3339 48.8755 58.1574L55.4065 64.6884L70.0019 50.093C70.8254 49.2696 72.1883 49.2696 73.0118 50.093C73.8353 50.9165 73.8353 52.2511 73.0118 53.103Z"
              fill="#009B07"
            />
          </svg>

          <h2>Payment Receipt</h2>
        </div>

        <div className="receipt__added-notif__payment">
          <div className="receipt__added-notif__payment__flex">
            <div>
              <div>Ref Number</div>
              <div className="total">000085752257</div>
            </div>

            <div>
              <div>Payment Time</div>
              <div className="total">25-02-2023, 13:22:16</div>
            </div>

            <div>
              <div>Payment Method</div>
              <div className="total">Wallet Transfer</div>
            </div>

            <div>
              <div>Background Check by</div>
              <div className="total">Antonio Afam</div>
            </div>

            <div>
              <div>For</div>
              <div className="total">Nkem Okoro</div>
            </div>

            {/* <div>
              <div className="tax">Tax</div>
              <div className="tax">800.00</div>
            </div> */}

            <div>
              <div className="total">Amount</div>
              <div className="total">N54,800.00</div>
            </div>
          </div>
        </div>

        <div className="receipt__added-notif__pdf">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M5 8L10 13M10 13L15 8M10 13V1"
              stroke="#101828"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div>Get PDF Receipt</div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
