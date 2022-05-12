import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Modal from "react-modal";

import PostTypeofFood from "./postTypeofFood";
import PutTypeofFood from "./putTypeOfFood";
import TypeofFood from "./typeOfFood";
import "../founder/founder.css";
import UserContext from "../../context/UserContext";

import { CONNECTION_STRING } from "../../config";

const GuestList = () => {
  const [typeofFood, setTypeofFood] = useState([]);
  const [ToFCreateOpen, setToFCreateOpen] = useState(false);
  const [ToFEditorOpen, setToFEditorOpen] = useState(false);
  const [editToFData, setEditToFData] = useState(null);
  const [IdRes, setIdRes] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) setTypeofFood([]);
    else GetToF();
  }, [user]);

  async function GetToF() {
    const toFRes = await Axios.get(CONNECTION_STRING + "/typeofFood/" + IdRes);
    setTypeofFood(toFRes.data);
  }

  async function GetListRes() {
    const resList = await Axios.get(
      CONNECTION_STRING + "/restaurant/byFounder"
    );
    setTypeofFood(toFRes.data);
  }

  function renderGuests() {
    let guestData = [...typeofFood];
    return guestData.map((guest, i) => {
      return (
        <TypeofFood
          key={i}
          guest={guest}
          getGuests={GetToF}
          editGuest={editGuest}
        />
      );
    });
  }

  function editGuest(guestData) {
    setEditToFData(guestData);
    setToFEditorOpen(true);
  }

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
      <div className="table-title room-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Danh sách khách hàng</h2>
          </div>
          <div className="col-sm-6">
            {!ToFCreateOpen && user && (
              <a
                href="#addEmployeeModal"
                className="btn btn-success"
                data-toggle="modal"
                onClick={() => setToFCreateOpen(true)}
              >
                <i className="material-icons">&#xE147;</i>
                <span>Thêm khách hàng</span>
              </a>
            )}
            <Modal
              isOpen={ToFCreateOpen && user}
              style={customStyles}
              onRequestClose={!ToFCreateOpen}
              contentLabel="Example Modal"
            >
              <PostTypeofFood
                setGuestCreateOpen={setToFCreateOpen}
                getGuests={GetToF}
              />
            </Modal>

            <Modal
              isOpen={ToFEditorOpen && user}
              style={customStyles}
              onRequestClose={!ToFEditorOpen}
              contentLabel="Example Modal"
            >
              <PutTypeofFood
                setGuestEditorOpen={setToFEditorOpen}
                getGuests={GetToF}
                editGuestData={editToFData}
              />
            </Modal>
          </div>
        </div>
      </div>

      {user !== null && (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Họ và Tên</th>
              <th>SĐT</th>
              <th>Email</th>
              <th>Địa Chỉ</th>
              <th>CMND/CCCD</th>
              <th>ThaoTác</th>
            </tr>
          </thead>
          <tbody>
            {typeofFood.length > 0 ? renderGuests() : <h3>Không có dữ liệu</h3>}
          </tbody>
        </table>
      )}
      {user === null && <h2>Hãy đăng nhập để thao tác trên hệ thống</h2>}
    </>
  );
};

export default GuestList;
