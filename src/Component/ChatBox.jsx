/* eslint-disable react/prop-types */
const ChatBox = ({ messages }) => {
  return (
    <div className="msg-body">
      <ul>
        {messages.map((msg, index) => (
          <li key={index} className={msg.isSender ? "sender" : "receiver"}>
            <p>{msg.text}</p>
            <span className="time">{msg.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatBox;
