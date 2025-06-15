"use client";

import React, { useState } from "react";
import ReportedIncident from "../incident-added/page";
// import Image from "next/image";

const IncidentPayment = ({ isOpen, onClose }) => {
  
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);
  
  if (!isOpen) return null;
  const handleOpenUserRequest = () => {
      setUserRequestOpen(true);
    };

    const handleCloseUserRequest = () => {
      setUserRequestOpen(false);
    };

  return (
    <div className="payment">
      <div className="payment__overlay" onClick={onClose}></div>
      <div className="payment__content">
        <div className="payment__content__heading">
          <h2 className="payment__content__heading__title">Hi, Alexander</h2>

          <div className="payment__content__heading__flex">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.61803 20L4.61803 16H19.382L21.382 20H2.61803Z"
                  stroke="#666D76"
                  stroke-width="2"
                />
                <path
                  d="M2.61803 16L4.61803 12H19.382L21.382 16H2.61803Z"
                  stroke="#666D76"
                  stroke-width="2"
                />
                <path
                  d="M2.61803 12L6.61803 4H17.382L21.382 12H2.61803Z"
                  stroke="#666D76"
                  stroke-width="2"
                />
              </svg>

              <span>Registration</span>

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#DEE2E4" />
                <path
                  d="M8.93149 10.2205C8.99649 9.76983 9.12216 9.3755 9.30849 9.0375C9.49483 8.69517 9.72666 8.41133 10.004 8.186C10.2857 7.95633 10.6063 7.78517 10.966 7.6725C11.33 7.5555 11.72 7.497 12.136 7.497C12.5693 7.497 12.9593 7.55983 13.306 7.6855C13.657 7.80683 13.956 7.978 14.203 8.199C14.45 8.41567 14.6385 8.67133 14.7685 8.966C14.9028 9.26067 14.97 9.57917 14.97 9.9215C14.97 10.2205 14.9353 10.4848 14.866 10.7145C14.801 10.9398 14.7057 11.137 14.58 11.306C14.4543 11.475 14.2983 11.618 14.112 11.735C13.9257 11.852 13.7155 11.9495 13.4815 12.0275C14.0448 12.2052 14.4652 12.476 14.7425 12.84C15.0198 13.204 15.1585 13.6612 15.1585 14.2115C15.1585 14.6795 15.0718 15.0933 14.8985 15.453C14.7252 15.8127 14.4912 16.116 14.1965 16.363C13.9018 16.6057 13.5595 16.7898 13.1695 16.9155C12.7838 17.0412 12.3743 17.104 11.941 17.104C11.4687 17.104 11.057 17.0498 10.706 16.9415C10.355 16.8332 10.0495 16.6728 9.78949 16.4605C9.52949 16.2482 9.30849 15.9882 9.12649 15.6805C8.94449 15.3728 8.78849 15.0175 8.65849 14.6145L9.36699 14.322C9.55333 14.244 9.72666 14.2245 9.88699 14.2635C10.0517 14.2982 10.1708 14.3848 10.2445 14.5235C10.3225 14.6752 10.407 14.8247 10.498 14.972C10.5933 15.1193 10.706 15.2515 10.836 15.3685C10.966 15.4812 11.1177 15.5743 11.291 15.648C11.4687 15.7173 11.6788 15.752 11.9215 15.752C12.1945 15.752 12.4328 15.7087 12.6365 15.622C12.8402 15.531 13.0092 15.414 13.1435 15.271C13.2822 15.128 13.384 14.9698 13.449 14.7965C13.5183 14.6188 13.553 14.4412 13.553 14.2635C13.553 14.0382 13.5292 13.8345 13.4815 13.6525C13.4338 13.4662 13.3342 13.308 13.1825 13.178C13.0308 13.048 12.812 12.9462 12.526 12.8725C12.2443 12.7988 11.8652 12.762 11.3885 12.762V11.618C11.7828 11.6137 12.11 11.5768 12.37 11.5075C12.63 11.4382 12.8358 11.3428 12.9875 11.2215C13.1435 11.0958 13.2518 10.9463 13.3125 10.773C13.3732 10.5997 13.4035 10.409 13.4035 10.201C13.4035 9.759 13.28 9.42317 13.033 9.1935C12.786 8.96383 12.4567 8.849 12.045 8.849C11.8543 8.849 11.6788 8.87717 11.5185 8.9335C11.3582 8.9855 11.213 9.06133 11.083 9.161C10.9573 9.25633 10.8512 9.369 10.7645 9.499C10.6778 9.629 10.6128 9.772 10.5695 9.928C10.4958 10.1273 10.3983 10.2595 10.277 10.3245C10.16 10.3895 9.99316 10.4047 9.77649 10.37L8.93149 10.2205Z"
                  fill="#666D76"
                />
              </svg>
            </div>

            <div>
              <svg
                width="20"
                height="15"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.92857 12H1.5V1H16.5V7.6"
                  stroke="#009B07"
                  stroke-width="2"
                />
                <rect
                  x="8.5"
                  y="8"
                  width="15"
                  height="11"
                  stroke="#009B07"
                  stroke-width="2"
                />
                <path d="M2.5 4H16.5" stroke="#009B07" stroke-width="2" />
                <path d="M11.5 12H16.5" stroke="#009B07" stroke-width="2" />
                <path d="M11.5 15H14.5" stroke="#009B07" stroke-width="2" />
              </svg>

              <span style={{ color: "#009b07" }}>Payment Methods</span>
            </div>
          </div>
        </div>

        <div className="payment__content__hero">
          <h2 className="payment__content__hero__title">Payment Methods</h2>

          <div>
            Add Methods
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 3V15" stroke="#1C2224" stroke-width="2" />
              <path d="M3 9L15 9" stroke="#1C2224" stroke-width="2" />
            </svg>
          </div>
        </div>

        <div className="payment__content__reg">
          <h2>Registration Fee</h2>

          <h4>N4,800</h4>
        </div>

        <div className="payment__content__wallet">
          <h2 className="payment__content__wallet__title">Wallet</h2>

          <div className="payment__content__wallet__details">
            <div className="payment__content__wallet__details__amount">
              Wallet Balance
              <br />
              <span>N100,000</span>
            </div>

            <div className="payment__content__wallet__details__btn">
              Pay with Wallet
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M8.41651 10.9786C8.30568 10.9786 8.19484 10.9378 8.10734 10.8503C7.93818 10.6811 7.93818 10.4011 8.10734 10.232L11.339 7.00031L8.10734 3.76865C7.93818 3.59948 7.93818 3.31948 8.10734 3.15031C8.27651 2.98115 8.55651 2.98115 8.72568 3.15031L12.2665 6.69115C12.4357 6.86031 12.4357 7.14031 12.2665 7.30948L8.72568 10.8503C8.63818 10.9378 8.52734 10.9786 8.41651 10.9786Z"
                  fill="#DEFFE5"
                />
                <path
                  d="M11.8605 7.4375H2.04297C1.8038 7.4375 1.60547 7.23917 1.60547 7C1.60547 6.76083 1.8038 6.5625 2.04297 6.5625H11.8605C12.0996 6.5625 12.298 6.76083 12.298 7C12.298 7.23917 12.0996 7.4375 11.8605 7.4375Z"
                  fill="#DEFFE5"
                />
              </svg>
            </div>
          </div>

          <div className="payment__content__wallet__btn">
            Fund Wallet

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M8.41651 10.9786C8.30568 10.9786 8.19484 10.9378 8.10734 10.8503C7.93818 10.6811 7.93818 10.4011 8.10734 10.232L11.339 7.00031L8.10734 3.76865C7.93818 3.59948 7.93818 3.31948 8.10734 3.15031C8.27651 2.98115 8.55651 2.98115 8.72568 3.15031L12.2665 6.69115C12.4357 6.86031 12.4357 7.14031 12.2665 7.30948L8.72568 10.8503C8.63818 10.9378 8.52734 10.9786 8.41651 10.9786Z"
                fill="#DEFFE5"
              />
              <path
                d="M11.8605 7.4375H2.04297C1.8038 7.4375 1.60547 7.23917 1.60547 7C1.60547 6.76083 1.8038 6.5625 2.04297 6.5625H11.8605C12.0996 6.5625 12.298 6.76083 12.298 7C12.298 7.23917 12.0996 7.4375 11.8605 7.4375Z"
                fill="#DEFFE5"
              />
            </svg>
          </div>
        </div>

        <h2 className="payment__content__card-title">Card</h2>

        <div className="payment__content__card-section">
          <div className="payment__content__card-section__card">
            <div className="payment__content__card-section__card__heading">
              <div>**** 5969</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="20"
                viewBox="0 0 33 20"
                fill="none"
              >
                <path
                  d="M20.9621 17.8596H12.0391V2.13672H20.9622L20.9621 17.8596Z"
                  fill="#FF5F00"
                />
                <path
                  d="M12.6043 9.99939C12.6043 6.81001 14.1274 3.9689 16.4991 2.13796C14.7039 0.749996 12.4834 -0.00330127 10.1971 1.08757e-05C4.56528 1.08757e-05 0 4.47682 0 9.99939C0 15.522 4.56528 19.9988 10.1971 19.9988C12.4834 20.0021 14.704 19.2488 16.4993 17.8608C14.1277 16.0302 12.6043 13.1889 12.6043 9.99939Z"
                  fill="#EB001B"
                />
                <path
                  d="M33.0001 10.0013C33.0001 15.5239 28.4348 20.0007 22.803 20.0007C20.5164 20.004 18.2957 19.2507 16.5 17.8628C18.8724 16.0318 20.3955 13.1909 20.3955 10.0013C20.3955 6.8118 18.8724 3.97085 16.5 2.13992C18.2956 0.751991 20.5163 -0.00129009 22.8028 0.00196362C28.4347 0.00196362 33 4.47877 33 10.0013"
                  fill="#FFAC31"
                />
              </svg>
            </div>

            <div className="payment__content__card-section__card__details">
              <div className="holder">
                <span className="card-holder">Card Holder:</span> <br />
                Exp. date:
              </div>
              <div className="holder-info">
                <span className="card-holder">Alexander Plyuto</span> <br />
                05/24
              </div>
            </div>
          </div>

          <div className="payment__content__card-section__card">
            <div className="payment__content__card-section__card__heading">
              <div>**** 5969</div>

              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="39" height="39" stroke="#FFACAC" />
                <path
                  d="M15.926 28L15.0799 17H24.9201L24.074 28H15.926Z"
                  stroke="#FF5353"
                  stroke-width="2"
                />
                <path d="M20 19V26" stroke="#FF5353" stroke-width="2" />
                <path d="M13 13H17H23H27" stroke="#FF5353" stroke-width="2" />
                <path d="M18 12H22" stroke="#FF5353" stroke-width="2" />
              </svg>
            </div>

            <div className="payment__content__card-section__card__details">
              <div className="holder">
                <span className="card-holder">Card Holder:</span> <br />
                Exp. date:
              </div>
              <div className="holder-info">
                <span className="card-holder">Alexander Plyuto</span> <br />
                05/24
              </div>
            </div>
          </div>
        </div>

        <div className="payment__content__card-data">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#FFACAC" />
            <rect
              x="8.25"
              y="11.25"
              width="7.5"
              height="5.24991"
              stroke="#1C2224"
              stroke-width="1.5"
            />
            <path
              d="M9.75 10.5V9.74997C9.75 8.50735 10.7574 7.5 12 7.5C13.2426 7.5 14.25 8.50735 14.25 9.74997V10.5"
              stroke="#1C2224"
              stroke-width="1.5"
            />
          </svg>
          We do not store or process bank card data
        </div>

        <div
            className="review__content__container__button"
            onClick={handleOpenUserRequest}
          >
            Proceed
          </div>

          <ReportedIncident
            isOpen={isUserRequestOpen}
            onClose={handleCloseUserRequest}
          />
      </div>
    </div>
  );
};

export default IncidentPayment;
