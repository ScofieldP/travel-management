import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";

import ErrorMessage from "../misc/error-message";
import domain from "../../util/domain";

function PutFounder({ dataAPI, GetDataAPI, setFounderEditorOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (dataAPI) {
      setName(dataAPI[0].Fdr_fullName ? dataAPI[0].Fdr_fullName : "");
      setEmail(dataAPI[0].Fdr_email ? dataAPI[0].Fdr_email : "");
    }
  }, [dataAPI]);

  async function saveRestaurant(e) {
    e.preventDefault();

    const resData = {
      Fdr_fullName: name ? name : undefined,
      Fdr_email: email ? email : undefined,
    };

    try {
      const token = !localStorage.token ? "" : JSON.parse(localStorage.token);
      await Axios.put(domain + `/founder/${token.data.token}`, resData);
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
    setEmail("");
    setErrorMessage(null);
    setFounderEditorOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employee-post">
      <div className="titleModal">
        <h2>Cập nhập thông tin Nhà sáng lập</h2>
      </div>
      <form onSubmit={saveRestaurant}>
        <Table borderless>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="name">Tên nhà sáng lập</label>
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
                <label htmlFor="email">Email</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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

export default PutFounder;
