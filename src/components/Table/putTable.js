import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";

import ErrorMessage from "../misc/error-message";
import domain from "../../until/domain";

function EditTable({ tblEditorData, GetDataAPI, setTblEditorOpen }) {
  const [name, setName] = useState("");
  const [deposit, setDeposit] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (tblEditorData) {
      setName(tblEditorData.Tbl_name ? tblEditorData.Tbl_name : "");
      setDeposit(tblEditorData.Tbl_deposit ? tblEditorData.Tbl_deposit : "");
      setNumber(tblEditorData.Tbl_number ? tblEditorData.Tbl_number : 0);
      setStatus(tblEditorData.Tbl_status ? "Đang phục vụ" : "Tạm dừng phục vụ");
    }
  }, [tblEditorData]);

  async function SaveTable(e) {
    e.preventDefault();

    const tblData = {
      Tbl_name: name ? name : undefined,
      Tbl_deposit: deposit ? deposit : undefined,
      Tbl_number: number ? number : undefined,
      Tbl_status: status ? status : undefined,
    };

    try {
      await Axios.put(domain + `/table/${tblEditorData.Tbl_id}`, tblData);
    } catch (err) {
      if (err.response && err.response.data.errorMessage)
        setErrorMessage(err.response.data.errorMessage);
      return;
    }

    GetDataAPI();
    closeForm();
  }

  function closeForm() {
    setName("");
    setDeposit("");
    setNumber("");
    setErrorMessage(null);
    setStatus(true);
    setTblEditorOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employaee-post">
      <div className="titleModal">
        <h2>Thay đổi Bàn ăn</h2>
      </div>
      <form onSubmit={SaveTable}>
        <Table borderless>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="name">Tên Loại bàn</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="deposit">Tiền cọc</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="deposit"
                  type="text"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="number">Chổ ngồi</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="number"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="tf">Tình trạng sữ dụng</label>
              </th>
              <td>
                <select
                  id="tf"
                  className="formInput1"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="true">Chọn</option>
                  <option value="true">Bàn trống</option>
                  <option value="false">Bàn đã đặt</option>
                </select>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="btn-confirm">
          <Button type="submit" color="success" outline>
            Cập nhập
          </Button>
          <Button color="danger" outline type="button" onClick={closeForm}>
            Thoát
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditTable;
