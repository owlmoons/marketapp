import axios from "axios";

const API_URL = "http://localhost:8080/auth"; // Update with your backend URL

// Function to handle Google login token
export const handleGoogleLogin = async (credential) => {
  const response = await axios.post(`${API_URL}/google`, { credential });
  return response.data;
};

export const signupUser = async (credential, userName) => {
  const response = await axios.post(`${API_URL}/signup`, {
    credential,
    userName,
  });
  return response.data;
};

// Function to check if email exists
export const checkEmailExists = async (email) => {
  const response = await axios.get(`${API_URL}/check-email/${email}`);
  return response.data; // This will be a boolean
};

// Function to check if username exists
export const checkUserNameExists = async (userName) => {
  const response = await axios.get(`${API_URL}/check-username/${userName}`);
  return response.data; // This will be a boolean
};

//to get the current user
export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/current-user`);
    return response.data; // This will return the user info (e.g., email, roles)
  } catch (error) {
    console.error("Error fetching current user", error);
    throw error; // Handle error appropriately (could show a notification, etc.)
  }
};