import { Link } from "react-router-dom";
const UserList = () => {
  return (
    <div>
      <div className="chat-lists">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="Open"
            role="tabpanel"
            aria-labelledby="Open-tab"
          >
            <div className="chat-list">
              <Link to="#" className="d-flex align-items-center piggy">
                <div className="flex-shrink-0">
                  <img
                    className="img-fluid"
                    src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                    width="40px"
                    height="40px"
                    alt="user img"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h3>Sujeet Sharma</h3>
                  <p>front end developer</p>
                </div>
              </Link>

              <Link to="#" className="d-flex align-items-center piggy">
                <div className="flex-shrink-0">
                  <img
                    className="img-fluid"
                    src="https://cdn-icons-png.flaticon.com/512/706/706807.png"
                    width="40px"
                    height="40px"
                    alt="user img"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h3>Ramu yadav</h3>
                  <p>front end developer</p>
                </div>
              </Link>
            </div>
            {/* <!-- chat-list --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
