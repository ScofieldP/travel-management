import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Modal from "react-modal";

import FounderPost from "./founderPost";
import FounderPut from "./founderPut";
import Founder from "./founder";
import "./founder.css";
import UserContext from "../../context/userContext";
import { CONNECTION_STRING } from "../../config/index";
import { Table } from "react-bootstrap";

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [guestCreateOpen, setGuestCreateOpen] = useState(false);
  const [guestEditorOpen, setGuestEditorOpen] = useState(false);
  const [editGuestData, setEditGuestData] = useState(null);

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) setGuests([]);
    else getGuests();
  }, [user]);

  async function getGuests() {
    const guestRes = await Axios.get(CONNECTION_STRING + "/founder/byID/");
    setGuests(guestRes.data);
  }

  function renderGuests() {
    let guestData = [...guests];
    return guestData.map((guest, i) => {
      return <Founder key={i} guest={guest} editGuest={editGuest} />;
    });
  }

  function editGuest(guestData) {
    setEditGuestData(guestData);
    setGuestEditorOpen(true);
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
      width: "auto",
    },
  };

  return (
    <>
      <div className="table-title1 room-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Thông tin Cá nhân và Nhà hàng</h2>
          </div>
          <div className="col-sm-6">
            <Modal
              isOpen={guestEditorOpen && user}
              style={customStyles}
              onRequestClose={!guestEditorOpen}
              contentLabel="Example Modal"
            >
              <FounderPut
                setGuestEditorOpen={setGuestEditorOpen}
                getGuests={getGuests}
                editGuestData={editGuestData}
              />
            </Modal>
          </div>
        </div>
      </div>

      {user !== null && (
        <Table className="w-75 bg-white jcenter ">
          {guests.length > 0 ? renderGuests() : <h3>Không có dữ liệu</h3>}
        </Table>
      )}
      {user === null && <h2>Hãy đăng nhập để thao tác trên hệ thống</h2>}
    </>
  );
};

export default GuestList;
