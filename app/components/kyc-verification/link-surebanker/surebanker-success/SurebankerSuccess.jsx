import Image from "next/image";
import styles from "./SurebankerSuccess,module.scss"

const SureBankerSuccess = () => {

  return (
    <section className={styles.sureBankerSuccess}>
      <div className={styles.container}>
        {/* <div className="relative left-[26rem]">
          <button onClick={() => (window.location.href = "/user/dashboard")}>
            <Image
              src="/icons/closeBtn.svg"
              alt="close btn"
              width={30}
              height={10}
            />
          </button>
        </div> */}
        <div className={styles.textContent}>
          {/* Header Section */}
          <div className={styles.header}>
            <Image
              src="/icons/sb-success.svg"
              alt="surebanker success logo"
              width={160}
              height={10}
            />
          </div>

          <div className={styles.textContent}>
            <div className={styles.title}>
              <p>Well done, SureBanker Wallet Linked</p>
            </div>

            <div className={styles.iconContainer}>
              <Image
                src="/icons/red-circle.svg"
                alt="red circle"
                width={40}
                height={10}
              />

              <Image
                src="/icons/eight-sign.svg"
                alt="cross"
                width={40}
                height={10}
              />

              <Image
                src="/icons/surebanker-icon.svg"
                alt="shield"
                width={40}
                height={10}
              />
            </div>

            {/* Footer Section */}
            <div className={styles.footer}>
              <button
                className={styles.doneButton}
                onClick={() => {
                  localStorage.setItem("complete", "true");
                  window.location.href = "/justice/dashboard";
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SureBankerSuccess;
