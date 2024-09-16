import axios from "axios";

const API_URL = "http://localhost:5000"; // Replace with your backend URL

export const sendMessage = async (message) => {
  try {
    await axios.post(`${API_URL}/messages`, { message });
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
