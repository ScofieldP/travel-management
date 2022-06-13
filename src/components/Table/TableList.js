import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import Createtable from "./postTable";
import EditTable from "./putTable";
import UserContext from "../../context/userContext";
import TableItem from "./TableItem";
import domain from "../../until/domain";

const TableList = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [tblCreateOpen, setTblCreateOpen] = useState(false);
  const [tblEditorOpen, setTblEditorOpen] = useState(false);
  const [tblEditorData, setTblEditorData] = useState(false);
  const [resID, setResID] = useState(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) setDataAPI([]);
    else GetDataAPI();
  }, [user]);

  async function GetDataAPI() {
    const getResID = !localStorage.res ? "" : JSON.parse(localStorage.res);
    if (getResID === null) {
      if (
        window.confirm(
          "Hãy chọn nhà hàng bạn muốn xem Bàn tại Mục tài khoản!!!"
        )
      ) {
        navigate("/");
      }
    } else {
      setResID(getResID.Res_id);
      const toFRes = await Axios.get(domain + `/table/${getResID.Res_id}`);
      setDataAPI(toFRes.data);
    }
  }
  function RenderTable() {
    let tblData = [...dataAPI];
    return tblData.map((tbl, i) => {
      return (
        <TableItem
          key={i}
          tbl={tbl}
          EditTbl={EditTbl}
          GetDataAPI={GetDataAPI}
        />
      );
    });
  }

  function EditTbl(resData) {
    setTblEditorData(resData);
    setTblEditorOpen(true);
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
              href="https://profile.vinhphancommunity.xyz/Login?redirect=http://localhost:3001"
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
                {!tblCreateOpen && (
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={() => setTblCreateOpen(true)}
                  >
                    <i className="material-icons">&#xE147;</i>
                    <span>Thêm Bàn</span>
                  </a>
                )}
                <Modal
                  isOpen={tblCreateOpen && user}
                  style={customStyles}
                  onRequestClose={!tblCreateOpen}
                  contentLabel="Example Modal"
                >
                  <Createtable
                    setTblCreateOpen={setTblCreateOpen}
                    GetDataAPI={GetDataAPI}
                    resID={resID}
                  />
                </Modal>

                <Modal
                  isOpen={tblEditorOpen && user}
                  style={customStyles}
                  onRequestClose={!tblEditorOpen}
                  contentLabel="Example Modal"
                >
                  <EditTable
                    setTblEditorOpen={setTblEditorOpen}
                    GetDataAPI={GetDataAPI}
                    tblEditorData={tblEditorData}
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
                        <h2>Thông tin Bàn ăn</h2>
                      </div>
                    </div>
                  </div>
                  {dataAPI.length > 0 ? (
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Tên bàn</th>
                          <th>Tình trạng bàn</th>
                          <th>Tiền cọc bàn</th>
                          <th>Số ghế</th>
                          <th>ThaoTác</th>
                        </tr>
                      </thead>
                      <tbody>{RenderTable()}</tbody>
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

export default TableList;
