import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import UserContext from "../../context/userContext";
import { CONNECTION_STRING } from "../../config/index";
import { Table } from "react-bootstrap";

const ListTypeOfFood = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [toFCreateOpen, setTofCreateOpen] = useState(false);
  const [toFEditorOpen, setToFEditorOpen] = useState(false);
  const [toFEditorData, setToFEditorData] = useState(null);
  //const [resID, setResID] = useState(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) setDataAPI([]);
    else GetDataAPI();
  }, [user]);

  async function GetDataAPI() {
    const resID = !localStorage.res ? "" : JSON.parse(localStorage.res);
    if (resID === "") {
      if (
        window.confirm(
          "Hãy chọn nhà bạn muốn xem loại thức ăn tại Mục tài khoản!!!"
        )
      ) {
        navigate("/");
      }
    } else {
      const toFRes = await Axios.get(
        CONNECTION_STRING + `typeofFood/${resID.Res_id}/`
      );
      setDataAPI(toFRes.data);
    }
  }

  function RenderToF() {
    let toFData = [...dataAPI];
    return toFData.map((tof, i) => {
      return (
        // <RestaurantItem
        //   key={i}
        //   tof={tof}
        //   EditTof={EditTof}
        //   GetDataAPI={GetDataAPI}
        // />
        <>123</>
      );
    });
  }

  function EditTof(resData) {
    setToFEditorData(resData);
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
      width: "auto",
    },
  };

  return (
    <>
      {user === undefined ? (
        <>
          <h2>Hãy đăng nhập để thao tác trên hệ thống</h2>
        </>
      ) : (
        <>
          <div>
            <label>Thông tin Nhà hàng nhà sáng lập sở hữu</label>
            {restaurant.length > 0 ? (
              <Table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Loại thức ăn</th>
                    <th>Tình trạng phục vụ</th>
                  </tr>
                </thead>
                <tbody>{RenderToF()}</tbody>
              </Table>
            ) : (
              <h3>Không tìm thấy dữ liệu</h3>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default ListTypeOfFood;
