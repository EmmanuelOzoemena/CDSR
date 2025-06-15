import React, { useState } from "react";
import Image from "next/image";
import KYCVerificationCard from "../kyc-verification/kyc-verification-card";
import BvnVerificationCard from "../kyc-verification/bvn/BvnCard";
import BtnOtpVerification from "../kyc-verification/bvnOtp/BvnOtp";
import FaceVerifyModal from "../kyc-verification/faceVerifyModal/FaceVerifyModal";
import FaceVerification from "../kyc-verification/faceVerifyCard/FaceVerifyCard";
import SureBankerOtp from "../kyc-verification/link-surebanker/surebanker-otp/SurebankerOtp";
import SureBankerSuccess from "../kyc-verification/link-surebanker/surebanker-success/SurebankerSuccess";
import { useModal } from "../../context/accountLinkProvider";
import AccountLinkModal from "../kyc-verification/tier1-completed/AccountLinkModal";
import { useSurebankerToggle } from "../../context/surebankerToogleModal";
import { useSurebankerToggleSuccess } from "../../context/surebankerToggleSuccessModal";
import styles from "./KycBanner.module.scss";

const KycBanner = () => {
  const [navigate, setNavigate] = useState("kyc");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { openModal } = useModal();

  const { openModal: justOpen } = useSurebankerToggle();

  const { openModal: justOpenSuccess } = useSurebankerToggleSuccess();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCompleteVerification = () => {
    console.log("Verification complete!");
    setNavigate("accountLink");
    openModal();
  };

  return (
    <section className={styles.kycBanner}>
      <main className={styles.main}>
        {/* <Image
          src="/icons/grayShield.svg"
          alt="tier-1 logo"
          width={80}
          height={10}
        /> */}

        {/* <div className={styles.textContent}>
          <h1 className={styles.heading}>
            You’re almost there 😍
          </h1>
          <p className={styles.description}>
            Complete your KYC to activate your IDCerify Business Account
          </p>
        </div> */}

        <button className={styles.completeButton} onClick={handleToggleModal}>
          Complete Your KYC
        </button>
      </main>
      
      <div className={styles.modalContainer}>
        {isModalOpen === true && navigate === "kyc" ? (
          <KYCVerificationCard onNavigate={() => setNavigate("bvn")} />
        ) : navigate === "bvn" ? (
          <BvnVerificationCard
            onToggle={handleToggleModal}
            onNavigate={() => setNavigate("bvnOtp")}
          />
        ) : navigate === "bvnOtp" ? (
          <BtnOtpVerification
            onToggle={handleToggleModal}
            onNavigate={() => setNavigate("faceModal")}
          />
        ) : navigate === "faceModal" ? (
          <FaceVerifyModal
            onToggle={handleToggleModal}
            onNavigate={() => setNavigate("faceScan")}
          />
        ) : navigate === "faceScan" ? (
          <FaceVerification
            onClose={handleCloseModal}
            onComplete={handleCompleteVerification}
          />
        ) : null}

        {navigate === "accountLink" && <AccountLinkModal />}

        {justOpen && <SureBankerOtp />}

        {justOpenSuccess && <SureBankerSuccess />}
      </div>
    </section>
  );
};

export default KycBanner;
