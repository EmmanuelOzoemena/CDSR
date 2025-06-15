import axios from "axios";

export const requestAccess = async (
  firstName,
  middleName,
  lastName,
  dob,
  email,
  googleAddress,
  country,
  state,
  lga,
  gender,
  password,
  confirmPassword,
  phoneNumber,
  userType,
  businessName,
  businessType,
  businessCategory
) => {
  try {
    const formattedDob =
      dob && !isNaN(new Date(dob)) ? new Date(dob).toISOString() : null;

    const formattedPhoneNumber = phoneNumber?.startsWith("234")
      ? phoneNumber.slice(3)
      : phoneNumber;

    console.log({
      firstName,
      middleName,
      lastName,
      dob: formattedDob,
      email,
      googleAddress,
      country,
      state,
      lga,
      gender,
      password,
      confirmPassword,
      phoneNumber: formattedPhoneNumber,
      userType,
      businessName,
      businessType,
      businessCategory,
    });

    const res = await axios.post(`https://cdsr-be.vercel.app/auth/onboard-user`, {
      firstName,
      middleName,
      lastName,
      dob: formattedDob,
      email,
      googleAddress,
      country,
      state,
      lga,
      gender,
      password,
      confirmPassword,
      phoneNumber: formattedPhoneNumber,
      userType,
      businessName,
      businessType,
      businessCategory,
    });

    return res;
  } catch (error) {
    console.error("ERROR", error);
    return error?.response;
  }
};

export const login = async (email, password) => {
  console.log({ email, password });
  try {
    const res = await axios.post(`https://cdsr-be.vercel.app/auth/login-employee`, {
      email,
      password,
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const res = await axios.post(`https://cdsr-be.vercel.app/auth/verify-otp`, {
      email,
      otp,
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const requestOtp = async (email) => {
  try {
    const res = await axios.post(
      `https://cdsr-be.vercel.app/auth/resend/${email}`,
      {
        email,
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
