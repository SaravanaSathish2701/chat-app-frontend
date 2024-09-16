import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../authutils";
import Box from "./Box";
import UserList from "./UserList";

const Dashboard = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="message-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="chat-area delicate">
              <div className="chatlist">
                <div className="modal-dialog-scrollable">
                  <div className="modal-content delicate">
                    <div className="chat-header">
                      <div className="msg-search">
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroup"
                          placeholder="Search"
                          aria-label="search"
                        />
                      </div>

                      <ul
                        className="nav nav-tabs delicate"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active delicate"
                            id="Open-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Open"
                            type="button"
                            role="tab"
                            aria-controls="Open"
                            aria-selected="true"
                          >
                            Online
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="modal-body moonLit">
                      <UserList />
                    </div>
                  </div>
                </div>
              </div>
              <Box />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
