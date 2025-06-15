"use client";

import jwt_decode from "jwt-decode";

const authState = {
  userInfo: {},
  token: null,
};

// Function to decode token safely
const tokenDecode = (token) => {
  if (!token) {
    console.error("No token provided for decoding.");
    return null;
  }

  try {
    const tokenDecoded = jwt_decode(token);

    const expTime = new Date(tokenDecoded.exp * 1000);
    if (new Date() > expTime) {
      console.warn("Token has expired.");
      return null;
    }

    return tokenDecoded;
  } catch (error) {
    console.error("Error decoding token: ", error);
    return null;
  }
};


// Check if running on the client-side
const isClient = typeof window !== "undefined";

if (isClient) {
  const getToken = localStorage.getItem("token");

  if (getToken) {
    const getInfo = tokenDecode(getToken);
    if (getInfo) {
      authState.token = getToken;
      authState.userInfo = getInfo;
    }
  }
}

export const authReducer = (state = authState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "USER_LOGIN_SUCCESS":
      if (!payload?.token) return state; // Prevent error if token is missing
      const userInfo = tokenDecode(payload.token);

      return {
        ...state,
        userInfo: userInfo ? { ...userInfo, ...payload.userInfo } : {},
        token: payload.token,
      };

    case "REGISTER_SUCCESS":
      if (!payload?.token) return state;
      const userInfos = tokenDecode(payload.token);
      return {
        ...state,
        userInfo: userInfos ? { ...userInfos, ...payload.userInfo } : {},
        token: payload.token,
      };

    case "KYC_SUBMIT_SUCCESS":
      if (!payload?.token) return state;
      const kycUserInfo = tokenDecode(payload.token);
      return {
        ...state,
        userInfo: kycUserInfo ? { ...kycUserInfo, ...payload.userInfo } : {},
        token: payload.token,
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        authenticate: false,
        userInfo: {},
        token: "",
        message: "Logout Successful",
      };

    default:
      return state;
  }
};
