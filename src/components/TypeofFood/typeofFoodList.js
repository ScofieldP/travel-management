import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import UserContext from "../../context/userContext";
import TypeOfFoodItem from "./typeOfFoodItem";
import PostTypeOfFood from "./postTypeofFood";
import PutTypeOfFood from "./putTypeofFood";
import domain from "../../until/domain";

const ListTypeOfFood = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [toFCreateOpen, setTofCreateOpen] = useState(false);
  const [toFEditorOpen, setToFEditorOpen] = useState(false);
  const [toFEditorData, setToFEditorData] = useState(null);
  const [resID, setResID] = useState(null);
  const user = !localStorage.user ? "" : JSON.parse(localStorage.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) GetDataAPI();
  }, []);

  async function GetDataAPI() {
    const getResID = !localStorage.res ? "" : JSON.parse(localStorage.res);
    if (getResID === "") {
      if (
        window.confirm(
          "Hãy chọn nhà hàng bạn muốn xem Loại thức ăn tại Mục tài khoản!!!"
        )
      ) {
        navigate("/");
      }
    } else {
      setResID(getResID.Res_id);
      const toFRes = await Axios.get(domain + `/typeofFood/${getResID.Res_id}`);
      setDataAPI(toFRes.data);
    }
  }

  function RenderToF() {
    let toFData = [...dataAPI];
    return toFData.map((tof, i) => {
      return (
        <TypeOfFoodItem
          key={i}
          tof={tof}
          EditTof={EditTof}
          GetDataAPI={GetDataAPI}
        />
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
      {user === null ? (
        <>
          <h2 className="m-0">
            {" "}
            <a
              href="https://profile.vinhphancommunity.xyz/Login?redirect=http://g08-restaurant-traveloka.surge.sh"
              className="text-decoration-none"
            >
              Hãy đăng nhập để thao tác trên hệ thống
            </a>
          </h2>
        </>
      ) : (
        <>
          <div className="table-title1 room-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>Quản lý Thông tin</h2>
              </div>
              <div className="col-sm-6">
                {!toFCreateOpen && (
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={() => setTofCreateOpen(true)}
                  >
                    <i className="material-icons">&#xE147;</i>
                    <span>Thêm loại thức ăn</span>
                  </a>
                )}
                <Modal
                  isOpen={toFCreateOpen && user}
                  style={customStyles}
                  onRequestClose={!toFCreateOpen}
                  contentLabel="Example Modal"
                >
                  <PostTypeOfFood
                    setTofCreateOpen={setTofCreateOpen}
                    GetDataAPI={GetDataAPI}
                    resID={resID}
                  />
                </Modal>

                <Modal
                  isOpen={toFEditorOpen && user}
                  style={customStyles}
                  onRequestClose={!toFEditorOpen}
                  contentLabel="Example Modal"
                >
                  <PutTypeOfFood
                    setToFEditorOpen={setToFEditorOpen}
                    GetDataAPI={GetDataAPI}
                    toFEditorData={toFEditorData}
                  />
                </Modal>
              </div>
            </div>
          </div>
          <div>
            <div className="container-xl">
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-6">
                        <h2>Thông tin Loại món ăn</h2>
                      </div>
                    </div>
                  </div>
                  {dataAPI.length > 0 ? (
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Loại món ăn</th>
                          <th>Tình trạng hoạt động</th>
                          <th>ThaoTác</th>
                        </tr>
                      </thead>
                      <tbody>{RenderToF()}</tbody>
                    </table>
                  ) : (
                    <h3>Không tìm thấy dữ liệu</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ListTypeOfFood;
