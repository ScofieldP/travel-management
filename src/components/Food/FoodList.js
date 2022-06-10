import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import PostFood from "./postFood";
import PutFood from "./putFood";
import TypeOfFood from "./fooditem";
import UserContext from "../../context/userContext";
import domain from "../../until/domain";

const ListFood = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [foodCreateOpen, setFoodCreateOpen] = useState(false);
  const [foodEditorOpen, setFoodEditorOpen] = useState(false);
  const [foodEditorData, setFoodEditorData] = useState(null);
  const [toFID, setTofID] = useState(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) setDataAPI([]);
    else GetDataAPI();
  }, [user]);

  async function GetDataAPI() {
    const getFoodID = !localStorage.tof ? "" : JSON.parse(localStorage.tof);
    if (getFoodID === null) {
      if (
        window.confirm(
          "Hãy chọn Loại thức ăn bạn mún xem tại Mục loại thức ăn!!!"
        )
      ) {
        navigate("/");
      }
    } else {
      setTofID(getFoodID.ToF_id);
      const toFRes = await Axios.get(domain + `/food/${getFoodID.ToF_id}`);
      setDataAPI(toFRes.data);
    }
  }

  function RenderFood() {
    let toFData = [...dataAPI];
    return toFData.map((food, i) => {
      return (
        <TypeOfFood
          key={i}
          food={food}
          EditFood={EditFood}
          GetDataAPI={GetDataAPI}
        />
      );
    });
  }

  function EditFood(foodData) {
    setFoodEditorData(foodData);
    setFoodEditorOpen(true);
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
          <div className="table-title1 room-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>Quản lý Thông tin</h2>
              </div>
              <div className="col-sm-6">
                {!foodCreateOpen && (
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={() => setFoodCreateOpen(true)}
                  >
                    <i className="material-icons">&#xE147;</i>
                    <span>Thêm món ăn</span>
                  </a>
                )}
                <Modal
                  isOpen={foodCreateOpen && user}
                  style={customStyles}
                  onRequestClose={!foodCreateOpen}
                  contentLabel="Example Modal"
                >
                  <PostFood
                    setFoodCreateOpen={setFoodCreateOpen}
                    GetDataAPI={GetDataAPI}
                    toFID={toFID}
                  />
                </Modal>

                <Modal
                  isOpen={foodEditorOpen && user}
                  style={customStyles}
                  onRequestClose={!foodEditorOpen}
                  contentLabel="Example Modal"
                >
                  <PutFood
                    setFoodEditorOpen={setFoodEditorOpen}
                    GetDataAPI={GetDataAPI}
                    foodEditorData={foodEditorData}
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
                        <h2>Thông tin Món Ăn</h2>
                      </div>
                    </div>
                  </div>
                  {dataAPI.length > 0 ? (
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Tên món ăn</th>
                          <th>Giá</th>
                          <th>Mô tả</th>
                          <th>Tình trạng món ăn</th>
                          <th>Hình minh họa</th>
                          <th>ThaoTác</th>
                        </tr>
                      </thead>
                      <tbody>{RenderFood()}</tbody>
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

export default ListFood;
