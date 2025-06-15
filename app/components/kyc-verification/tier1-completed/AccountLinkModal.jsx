import ReactConfetti from "react-confetti";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSurebankerToggle } from "../../../context/surebankerToogleModal";
import { useModal } from "../../../context/accountLinkProvider";
import styles from "./AccountLinkModal.module.scss";

const AccountLinkModal = () => {
  const { close } = useModal();
  const { open } = useSurebankerToggle();

  const [link, setLink] = useState("https://surebanker.ai/register");

  const handleOpen = () => {
    window.open(link, "_blank");
  };

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => setShowConfetti(false), 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={styles["account-link-modal"]}>
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
          colors={["#FF69B4", "#4BB543", "#FFD700", "#87CEEB"]}
          className={styles["confetti-container"]}
        />
      )}
      {/* <div className={styles['modal-content']}>
        <div className="space-y-6">
          <div className="flex flex-col space-x-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/tier-one.svg"
                alt="tier-1 logo"
                width={104}
                height={117}
                className={styles.logo}
              />
              <h1 className={styles.title}>Tier 1 KYC Completed</h1>
            </div>
            <p className={styles.description}>
              Fantastic! We see that you have an existing account with SureBanker. Do you want to link it?
            </p>

            <div className={styles['buttons']}>
              <button className={styles['btn-primary']} onClick={() => { open()}}>
                Yes Please
              </button>

              <button
                className={styles['btn-secondary']}
                onClick={() => {
                  close();
                  window.location.href = "/justice/dashboard";
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="face-successful__added-notif">
        <div className="face-successful__added-notif__heading">
          <Image
            src="/icons/tier-one.svg"
            alt="tier-1 logo"
            width={104}
            height={117}
            className={styles.logo}
          />

          <h2>Tier 1 KYC Completed</h2>
          <p>
            {/* Fantastic, we see that you have an existing account <br /> with
            SureBanker. Do you want to link it */}
            It looks like you don’t have an account with SureBanker <br /> yet.
            Would you like to register now?
          </p>
        </div>

        <div className="face-successful__added-notif__proceed">
          <div onClick={handleOpen}>Yes, Please</div>
          <div
            onClick={() => {
              close();
              window.location.href = "/justice/dashboard";
            }}
          >
            No
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountLinkModal;
