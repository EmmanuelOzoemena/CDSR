"use client";
import Image from "next/image";
import styles from "./KYCVerificationCard.module.scss";

const KYCVerificationCard = ({ onNavigate }) => {
  return (
    <section className={`${styles.overlay}`} onClick={onNavigate}>
      <div className={`${styles.card}`}>
        <div className={`${styles.content}`}>
          {/* Header Section */}
          <div className={`${styles.header}`}>
            <Image
              src="/icons/tier-one.svg"
              alt="tier-1 logo"
              width={104}
              height={117}
            />
            <div className={styles.textCenter}>
              <h1 className={styles.title}>You&apos;re almost there 😍</h1>
              <p className={styles.subtitle}>
                Complete your KYC to activate your IDCerify Business Account
              </p>
            </div>
          </div>

          {/* Verification Steps */}
          <div className={`${styles.steps}`}>
            <div className={`${styles.step}`}>
              {/* <Image
                src="/icons/kycBank.svg"
                alt="bank"
                width={24}
                height={24}
              /> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 1L2 6V8H21V6M16 10V17H19V10M2 22H21V19H2M10 10V17H13V10M4 10V17H7V10H4Z"
                  fill="#009b07"
                />
              </svg>
              
              <div>
                <h2 className={styles.stepTitle}>BVN</h2>
                <p className={styles.stepDescription}>
                  Please provide us with your BVN number respectively.
                </p>
              </div>
            </div>

            <div className={`${styles.step}`}>
              {/* <Image
                src="/icons/kycUser.svg"
                alt="user"
                width={30}
                height={10}
              /> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.6504 19.405C20.2024 19.29 20.5324 18.712 20.2574 18.218C19.6514 17.131 18.6974 16.175 17.4774 15.447C15.9054 14.509 13.9784 14 11.9984 14C10.0184 14 8.09144 14.508 6.51944 15.447C5.29944 16.175 4.34544 17.131 3.73944 18.218C3.46444 18.712 3.79444 19.29 4.34644 19.405C9.39321 20.4569 14.6027 20.4569 19.6494 19.405"
                  fill="#009b07"
                />
                <path
                  d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                  fill="#009b07"
                />
              </svg>

              <div>
                <h2 className={styles.stepTitle}>Face Verification</h2>
                <p className={styles.stepDescription}>
                  Get a face shot by following the instructions that will be
                  provided.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className={`${styles.footer}`}>
            <p className={styles.footerText}>
              By clicking on Accept and Proceed, you consent to provide us with
              the requested data.
            </p>
            <button className={styles.proceedButton} onClick={onNavigate}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCVerificationCard;
