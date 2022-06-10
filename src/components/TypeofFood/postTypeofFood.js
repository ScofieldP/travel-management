import React, { useState } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";

import ErrorMessage from "../misc/error-message";
import domain from "../../until/domain";

function CreatTypeofFood({ resID, GetDataAPI, setTofCreateOpen }) {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  async function saveRestaurant(e) {
    e.preventDefault();

    const toFData = {
      ToF_name: name ? name : undefined,
    };

    try {
      await Axios.post(domain + `/typeofFood/${resID}`, toFData);
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
    setErrorMessage(null);
    setTofCreateOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employaee-post">
      <div className="titleModal">
        <h2>Khởi tạo loại thức ăn</h2>
      </div>
      <form onSubmit={saveRestaurant}>
        <Table borderless>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="name">Tên loại thức ăn</label>
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

export default CreatTypeofFood;
