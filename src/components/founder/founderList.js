import React, { useContext, useState } from "react";
import Modal from "react-modal";

import FounderPut from "./founderPut";
import UserContext from "../../context/userContext";
import "./founderList.css";

function FounderList() {
  // function
  const [founderPutOpen, setFounderPutOpen] = useState(false);
  const { userEmail, user } = useContext(UserContext);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "0",
    },
  };

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Quản lý nhân viên</h2>
          </div>
          <div className="col-sm-6">
            {user && (
              <a
                href="#addEmployeeModal"
                className="btn btn-success"
                data-toggle="modal"
                onClick={() => setFounderPutOpen(true)}
              >
                <i className="material-icons">&#xE147;</i>
                <span>Thêm Nhân viên</span>
              </a>
            )}
            <Modal
              isOpen={founderPutOpen && user}
              style={customStyles}
              onRequestClose={!founderPutOpen}
              contentLabel="Example Modal"
            >
              <FounderPut setFounderPutOpen={setFounderPutOpen} />
            </Modal>
          </div>
        </div>
      </div>
      {user !== undefined ? (
        <div className="employTable">
          <h2>Hồ sơ nhân viên</h2>
          <table>
            <tr>
              <th>Tên nhân viên</th>
              <td>{user}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{userEmail}</td>
            </tr>
          </table>
        </div>
      ) : (
        <h2>Hãy đăng nhập để thao tác trên hệ thống</h2>
      )}
    </>
  );
}

export default FounderList;
