/* eslint-disable react/prop-types */
import MsgHead from "./MessageHead";
import ChatBox from "./ChatBox";
import SentSMS from "./SentSMS";

const Box = ({ messages, addMessage }) => {
  return (
    <div className="chatbox">
      <div className="modal-dialog-scrollable">
        <div className="modal-content delicate">
          <MsgHead />
          <div className="modal-body">
            <ChatBox messages={messages} />
          </div>
          <SentSMS addMessage={addMessage} />
        </div>
      </div>
    </div>
  );
};

export default Box;
