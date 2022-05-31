import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Modal from "react-modal";

import RestaurantItem from "./restaurantItem";
import PostRestaurant from "./postRestaurant";
import PutRestaurant from "./putRestaurant";
import PutFounder from "./putFounder";
import UserContext from "../../context/userContext";
import { CONNECTION_STRING } from "../../config/index";
import "./founder.css";
const ListFounder = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [resCreateOpen, setResCreateOpen] = useState(false);
  const [resEditorOpen, setResEditorOpen] = useState(false);
  const [founderEditorOpen, setFounderEditorOpen] = useState(false);
  const [resEditorData, setResEditorData] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) setDataAPI([]);
    else GetDataAPI();
  }, [user]);

  async function GetDataAPI() {
    const token = !localStorage.token ? "" : JSON.parse(localStorage.token);
    const guestRes = await Axios.get(
      CONNECTION_STRING + `/founder/byID/${token.data.token}`
    );
    console.log(guestRes.data);
    setDataAPI(guestRes.data);
    setRestaurant(guestRes.data[0].Restaurants);
  }

  function RenderRestaurant() {
    let resData = [...restaurant];
    return resData.map((res, i) => {
      return (
        <RestaurantItem
          key={i}
          res={res}
          EditRes={EditRes}
          GetDataAPI={GetDataAPI}
        />
      );
    });
  }

  function EditRes(resData) {
    setResEditorData(resData);
    setResEditorOpen(true);
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
                <h2>Điều hành hệ thống</h2>
              </div>
              <div className="col-sm-6">
                {!resCreateOpen && (
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={() => setResCreateOpen(true)}
                  >
                    <i className="material-icons">&#xE147;</i>
                    <span>Thêm nhà hàng</span>
                  </a>
                )}
                <Modal
                  isOpen={resCreateOpen && user}
                  style={customStyles}
                  onRequestClose={!resCreateOpen}
                  contentLabel="Example Modal"
                >
                  <PostRestaurant
                    setResCreateOpen={setResCreateOpen}
                    GetDataAPI={GetDataAPI}
                  />
                </Modal>

                <Modal
                  isOpen={resEditorOpen && user}
                  style={customStyles}
                  onRequestClose={!resEditorOpen}
                  contentLabel="Example Modal"
                >
                  <PutRestaurant
                    setResEditorOpen={setResEditorOpen}
                    GetDataAPI={GetDataAPI}
                    resEditorData={resEditorData}
                  />
                </Modal>
              </div>
            </div>
          </div>
          <div>
            {dataAPI.length > 0 ? (
              <>
                <div className="container-xl">
                  <div className="table-responsive">
                    <div className="table-wrapper">
                      <div className="table-title">
                        <div className="row">
                          <div className="col-sm-6">
                            <h2>Thông tin nhà sáng lập</h2>
                          </div>
                          <div className="col-sm-6">
                            <a
                              href="#addEmployeeModal"
                              className="btn btn-success"
                              data-toggle="modal"
                              onClick={() => setFounderEditorOpen(true)}
                            >
                              <i className="material-icons">&#xE147;</i>
                              <span>Cập nhập thông tin Nhà sáng lập</span>
                            </a>
                            <Modal
                              isOpen={founderEditorOpen && user}
                              style={customStyles}
                              onRequestClose={!founderEditorOpen}
                              contentLabel="Example Modal"
                            >
                              <PutFounder
                                setFounderEditorOpen={setFounderEditorOpen}
                                GetDataAPI={GetDataAPI}
                                dataAPI={dataAPI}
                              />
                            </Modal>
                          </div>
                        </div>
                      </div>
                      <table className="table table-striped table-hover bg-white w-75 jcenter">
                        <thead>
                          <tr>
                            <th className="csa">Tên nhà sáng lập</th>
                            <th className="csa">Địa chỉ mail</th>
                          </tr>
                          <tr>
                            <td className="csa">{dataAPI[0].Fdr_fullName}</td>
                            <td className="csa">{dataAPI[0].Fdr_email}</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>{" "}
                {/* container */}
              </>
            ) : (
              <h3>Không tìm thấy dữ liệu</h3>
            )}
          </div>

          <div>
            <div className="container-xl">
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-6">
                        <h2>Thông tin Nhà hàng nhà sáng lập sở hữu</h2>
                      </div>
                    </div>
                  </div>
                  {restaurant.length > 0 ? (
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Tên nhà hàng</th>
                          <th>Địa chỉ</th>
                          <th>Miêu tả </th>
                          <th>Email</th>
                          <th>Số điện thoại</th>
                          <th>Thời gian mở cửa</th>
                          <th>Thời gian đóng của</th>
                          <th>ThaoTác</th>
                        </tr>
                      </thead>
                      <tbody>{RenderRestaurant()}</tbody>
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

export default ListFounder;
