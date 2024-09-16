/* eslint-disable react/prop-types */
import { useState } from "react";

const SentSMS = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return; // Do nothing if the message is empty
    addMessage(message); // Pass the new message to the addMessage function
    setMessage(""); // Clear the input field
  };

  return (
    <div className="send-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          aria-label="Write a message"
          placeholder="Write message…"
          value={message}
          onChange={handleInputChange}
        />
        <button type="submit">
          <i className="fa fa-paper-plane" aria-hidden="true"></i> Send
        </button>
      </form>
    </div>
  );
};

export default SentSMS;
