"use client";

import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { useFormik } from "formik"; // Not used in code
// import axios from "axios"; // Not used in code
// import Dashboard from "../dashboard/page"; // Not used directly
// import { login } from "../../apis/auth"; // Removed for now
// import jwt_decode from "jwt-decode"; // Not used in this file

export default function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenTwo, setModalOpenTwo] = useState(false);
  const [role, setRole] = useState("Employer");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleModalClose = (e) => {
    if (e.target.classList.contains("auth__modal")) {
      setModalOpen(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const response = await login(email, password);
      // if (response?.status === 201 && response?.data?.accessToken) {
      //   const token = response.data.accessToken;
      //   const userInfo = response.data.user;

      //   localStorage.setItem("token", token);
      //   document.cookie = `auth_token=${token}; path=/; max-age=${60 * 60 * 24 * 7};`;

      //   dispatch({
      //     type: "USER_LOGIN_SUCCESS",
      //     payload: { token, userInfo },
      //   });

      //   window.location.href = "/justice/dashboard";
      // } else if (
      //   response?.data?.statusCode === 401 ||
      //   response?.data?.statusCode === 403
      // ) {
      //   window.location.href = "/justice/unauthorized";
      // } else {
      //   alert(response?.data?.message || "Login failed. Please try again.");
      // }

      // alert("Login logic is disabled. Restore the login API call here.");

      // Simulate successful login
      window.location.href = "/justice/dashboard";
    } catch (error) {
      console.error("Login Error:", error);
      alert("An unexpected error occurred. Please check your connection.");
    }

    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const enteredOtp = otp.join("");

    try {
      // const response = await verifyOtp(email, enteredOtp);

      // if (response?.status === 201) {
      //   const token = response?.data?.token;
      //   localStorage.setItem("token", token);
      //   document.cookie = `auth_token=${token}; path=/; max-age=${60 * 60 * 24 * 7};`;

      //   dispatch({
      //     type: "USER_LOGIN_SUCCESS",
      //     payload: { token },
      //   });

      //   window.location.href = "/justice/login";
      // } else if (
      //   response?.data?.statusCode === 401 ||
      //   response?.data?.statusCode === 403
      // ) {
      //   window.location.href = "/justice/unauthorized";
      // } else {
      //   alert(response?.data?.message);
      // }

      alert("OTP verification is disabled. Restore the OTP API call here.");
    } catch (err) {
      console.error("OTP Error:", err);
    }

    setLoading(false);
  };

  const handleResendOtp = async () => {
    setLoading(true);

    try {
      // const response = await requestOtp(email);

      // if (response?.status === 201) {
      //   alert("A new OTP has been sent to your email");
      // } else if (
      //   response?.data?.statusCode === 401 ||
      //   response?.data?.statusCode === 403
      // ) {
      //   window.location.href = "/justice/unauthorized";
      // } else {
      //   alert("Unable to resend OTP");
      // }

      alert("Resend OTP logic disabled. Restore the requestOtp API call.");
    } catch (err) {
      console.error("Resend OTP Error:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  return (
    <main className="auth">
      <div className="auth__titte">
        <div>
          <Image
            alt=""
            src="/assets/logo.png"
            width={66.089}
            height={66.089}
            style={{ marginBottom: "10px" }}
          />
        </div>
        Centralised Domestic Staff Register <br />
        CDSR
        {/* <p>Powered by Nigerian Police Force (NPF)</p> */}
      </div>

      <form className="auth__form" onSubmit={handleLogin}>
        <h2 className="auth__form__title">Login as</h2>
        <h3 className="auth__form__subtitle">{role}</h3>

        <label htmlFor="" className="auth__form__label">
          Email*
        </label>

        <input
          type="text"
          name="email"
          className="auth__form__input"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="" className="auth__form__label">
          Password*
        </label>

        <OutlinedInput
          className="auth__form__input"
          required
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{ paddingLeft: 0, fontSize: "1.6rem" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />

        <h4 className="auth__form__caution">Must be at least 6 characters.</h4>

        <button className="auth__form__button" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>

        <div className="auth__form__account">
          <h5 className="auth__form__account__a-btn pointer">
            Don't have an account
          </h5>

          <h5
            className="auth__form__account__request pointer"
            onClick={() => (window.location.href = "/justice/request")}
          >
            Create a New Account
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0248 15.6829C11.8664 15.6829 11.7081 15.6246 11.5831 15.4996C11.3414 15.2579 11.3414 14.8579 11.5831 14.6163L16.1998 9.99961L11.5831 5.38294C11.3414 5.14128 11.3414 4.74128 11.5831 4.49961C11.8248 4.25794 12.2248 4.25794 12.4664 4.49961L17.5248 9.55794C17.7664 9.79961 17.7664 10.1996 17.5248 10.4413L12.4664 15.4996C12.3414 15.6246 12.1831 15.6829 12.0248 15.6829Z"
                fill="#009B07"
              />
              <path
                d="M16.9415 10.625H2.9165C2.57484 10.625 2.2915 10.3417 2.2915 10C2.2915 9.65833 2.57484 9.375 2.9165 9.375H16.9415C17.2832 9.375 17.5665 9.65833 17.5665 10C17.5665 10.3417 17.2832 10.625 16.9415 10.625Z"
                fill="#009B07"
              />
            </svg>
          </h5>
        </div>
      </form>

      {modalOpen && (
        <div className="auth__modal" onClick={handleModalClose}>
          <form className="auth__modal__inner" onSubmit={handleVerifyOtp}>
            <div className="auth__modal__inner__title">OTP Verification</div>
            <div className="auth__modal__inner__subtitle">
              Enter the OTP sent to {email}
            </div>

            <div className="auth__modal__inner__otp-group">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  className="auth__modal__inner__otp-group__input"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  maxLength={1}
                />
              ))}
            </div>

            <div
              className="auth__modal__inner__request pointer"
              onClick={handleResendOtp}
            >
              Request a new code
            </div>

            <button disabled={loading}>
              {loading ? "Loading..." : "Verify OTP"}
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
