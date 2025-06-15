"use client";
import Image from "next/image";
import styles from "./BvnCard.module.scss";

const BvnVerificationCard = ({ onToggle, onNavigate }) => {
  return (
    <section className={styles.overlay} onClick={onToggle}>
      <div className={styles.card}>
        <div className={styles.content}>
          <button
            className={styles.backButton}
            onClick={() => {
              window.location.href = "/justice/dashboard";
            }}
          >
            <span>
              {/* <Image
                src="/icons/bvnBackBtn.svg"
                alt="arrow"
                width={30}
                height={10}
              /> */}

              <svg
                width="35"
                height="35"
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
                  fill-opacity="0.26"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="#E0E0E0"
                />
                <path
                  d="M22.5 15L17.5 20L22.5 25"
                  stroke="#101828"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Back
          </button>

          <div className={styles.textCenter}>
            <h1 className={styles.title}>Please enter your BVN</h1>
            <p className={styles.subtitle}>Enter BVN of business owner</p>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="bvn" className={styles.label}>
              Enter BVN
            </label>
            <input
              id="bvn"
              type="text"
              placeholder="0098984829222"
              className={styles.input}
            />
            <p className={styles.hint}>
              Dial <span className={styles.boldHint}>*565*0#</span> on your
              registered phone number to get your BVN
            </p>
          </div>

          <div className={styles.footer}>
            <button className={styles.proceedButton} onClick={onNavigate}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BvnVerificationCard;
