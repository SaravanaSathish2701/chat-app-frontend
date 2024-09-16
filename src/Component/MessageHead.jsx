const MsgHead = () => {
  return (
    <div className="msg-head">
      <div className="row">
        <div className="col-8">
          <div className="d-flex align-items-center">
            <span className="chat-icon">
              <img
                className="img-fluid"
                src="https://mehedihtml.com/chatbox/assets/img/arroleftt.svg"
                alt="Back arrow"
              />
            </span>
            <div className="flex-shrink-0">
              <img
                className="img-fluid"
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                width="40px"
                alt="User avatar"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h3>Sujeet Sharma</h3>
              <p>Front-end Developer</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul className="moreoption">
            <li className="navbar nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Action</button>
                </li>
                <li>
                  <button className="dropdown-item">Another action</button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item">Something else here</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MsgHead;
