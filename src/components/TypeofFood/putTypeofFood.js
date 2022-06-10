import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";

import ErrorMessage from "../misc/error-message";
import domain from "../../until/domain";

function UpdateTypeOffood({ toFEditorData, GetDataAPI, setToFEditorOpen }) {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (toFEditorData) {
      setName(toFEditorData.ToF_name ? toFEditorData.ToF_name : "");
      setState(toFEditorData.ToF_state ? "Đang phục vụ" : "Tạm dừng phục vụ");
    }
  }, [toFEditorData]);

  async function saveRestaurant(e) {
    e.preventDefault();

    const toFData = {
      ToF_name: name ? name : undefined,
      ToF_state: state ? state : undefined,
    };

    try {
      await Axios.put(domain + `/typeofFood/${toFEditorData.ToF_id}`, toFData);
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
    setState("");
    setErrorMessage(null);
    setToFEditorOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employaee-post">
      <div className="titleModal">
        <h2>Cập nhập Loại thức ăn</h2>
      </div>
      <form onSubmit={saveRestaurant} border border-dark>
        <Table borderless>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="name">Tên nhà hàng</label>
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
                <label htmlFor="tf">Tình trạng hoạt động</label>
              </th>
              <td>
                <select
                  id="tf"
                  className="formInput1"
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="true">Chọn</option>
                  <option value="true">Đang bán</option>
                  <option value="false">Tạm dừng bán</option>
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

export default UpdateTypeOffood;
