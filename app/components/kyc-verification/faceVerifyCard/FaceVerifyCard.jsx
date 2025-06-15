"use client";
import { useModal } from "../../../context/accountLinkProvider";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import "./FaceVerifyCard.scss";

const steps = [
  {
    id: "initial",
    instruction:
      "Please keep your face centred on the screen and facing forward",
  },
  { id: "blink", instruction: "Blink your eyes" },
  { id: "turn", instruction: "Turn your head left/right" },
  { id: "smile", instruction: "Smile" },
  {
    id: "speak",
    instruction: "Speak the phrase displayed",
    phrase: "Something huge",
  },
];

const FaceVerification = ({ onComplete }) => {
  const { open } = useModal();
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [buttonText, setButtonText] = useState("Hold to Record");
  const [firstCapturedImage, setFirstCapturedImage] = useState("");
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: steps[currentStep].id === "speak",
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      if (steps[currentStep].id === "speak") {
        setupAudioRecording(stream);
      }
    } catch (err) {
      setError("Error accessing camera or microphone");
      console.error("Error accessing media devices:", err);
    }
  };

  const setupAudioRecording = (stream) => {
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      setButtonText("Complete");
      setIsRecording(false);
      sendAudioToAPI(audioBlob);
    };

    mediaRecorderRef.current = mediaRecorder;
  };

  const captureImage = () => {
    if (!videoRef.current) return "";
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(videoRef.current, 0, 0);
    const imageData = canvas.toDataURL("image/jpeg");

    if (currentStep === 0 && !firstCapturedImage) {
      setFirstCapturedImage(imageData);
    }

    return imageData;
  };

  const sendAudioToAPI = async (audioBlob) => {
    const imageData = captureImage();
    const payload = {
      step: steps[currentStep].id,
      imageData,
      audio: audioBlob,
    };

    console.log(payload);

    const mockResponse = {
      success: true,
      score: 85,
      message: "Mock verification successful",
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (!mockResponse.success) {
        throw new Error(mockResponse.message || "Verification failed");
      }

      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsComplete(true);
        onComplete?.();
      }
    } catch (err) {
      setError(err.message || "Verification failed");
    } finally {
      setIsProcessing(false);
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    setButtonText("Recording...");
    mediaRecorderRef.current?.start();
  };

  const stopRecording = () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop();
    }
  };

  useEffect(() => {
    startCamera();

    const videoElement = videoRef.current;

    return () => {
      if (videoElement?.srcObject instanceof MediaStream) {
        videoElement.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [currentStep]);

  return (
    <div className="face-verification">
      <div className="overlay" />

      <div className="modal-container">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="back-button"
            onClick={() => {
              open();
            }}
          >
            {/* <Image
              src="/icons/bvnBackBtn.svg"
              alt="arrow"
              width={30}
              height={10}
            />{" "} */}
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
            Back
          </button>

          <div className="content">
            {!isComplete ? (
              <div className="instructions">
                <div className="text-center">
                  <p className="instruction-text">
                    {steps[currentStep].instruction}
                  </p>
                  {steps[currentStep].phrase && (
                    <p>{steps[currentStep].phrase}</p>
                  )}
                </div>

                <div className="video-container">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="video-stream"
                  />
                </div>

                {error && <div className="error">{error}</div>}

                {steps[currentStep].id === "speak" ? (
                  <button
                    onMouseDown={startRecording}
                    onMouseUp={stopRecording}
                    disabled={isProcessing}
                    className="record-button"
                  >
                    {buttonText}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (currentStep === 0) {
                        captureImage();
                      }
                      setCurrentStep((prev) => prev + 1);
                    }}
                    disabled={isProcessing}
                    className="next-button"
                  >
                    {isProcessing ? "Processing..." : "Next"}
                  </button>
                )}
              </div>
            ) : (
              <div className="complete-screen">
                <div className="image-container">
                  {firstCapturedImage ? (
                    <img
                      src={firstCapturedImage}
                      alt="Captured face"
                      className="captured-face"
                    />
                  ) : (
                    <div className="placeholder">No image captured</div>
                  )}
                </div>
                <h2>Face Verification Complete</h2>
                <p>Your smile just unlocked a world of possibilities</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceVerification;
