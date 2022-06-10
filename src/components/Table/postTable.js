import React, { useState } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";

import ErrorMessage from "../misc/error-message";
import domain from "../../until/domain";

function Createtable({ resID, GetDataAPI, setTblCreateOpen }) {
  const [name, setName] = useState("");
  const [deposit, setDeposit] = useState("");
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  async function SaveTable(e) {
    e.preventDefault();

    const toFData = {
      Tbl_name: name ? name : undefined,
      Tbl_deposit: deposit ? deposit : undefined,
      Tbl_number: number ? number : undefined,
    };

    try {
      await Axios.post(domain + `/table/${resID}`, toFData);
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
    setTblCreateOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employaee-post">
      <div className="titleModal">
        <h2>Khởi tạo Bàn ăn</h2>
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
          </tbody>
        </Table>
        <div className="btn-confirm">
          <Button type="submit" color="success" outline>
            Tạo mới
          </Button>
          <Button color="danger" outline type="button" onClick={closeForm}>
            Thoát
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Createtable;
