import React, { useContext, useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../misc/error-message";
import { CONNECTION_STRING } from "../../config";
import UserContext from "../../context/userContext";
import "./founderPut.css";

function FounderPut({ setFounderPutOpen }) {
  const [createName, setCreateName] = useState("");
  const [createEmail, setCreateEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const { userEmail, user, userId } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCreateName(user ? user : "");
    setCreateEmail(userEmail ? userEmail : "");
  }, "");

  async function saveFounders(e) {
    e.preventDefault();

    const founderData = {
      Fdr_fullName: createName ? createName : undefined,
      Fdr_email: createEmail ? createEmail : undefined,
    };

    try {
      await Axios.put(`${CONNECTION_STRING}/founder/${userId}`, founderData);
    } catch (err) {
      if (err.response && err.response.data.errorMessage)
        setErrorMessage(err.response.data.errorMessage);
      return;
    }
    closeFounder();
  }

  function closeFounder() {
    navigate("/");
    setCreateName("");
    setCreateEmail("");
    setFounderPutOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employee-post">
      <div className="titleModal">
        <h2>Thông tin nhân viên </h2>
      </div>

      <form onSubmit={saveFounders}>
        <Table borderless>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="editor-name">Họ và Tên</label>
              </th>
              <td>
                <input
                  className="formInput"
                  id="editor-name"
                  type="text"
                  value={createName}
                  onChange={(e) => setCreateName(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="btn-confirm">
          <Button type="submit" color="success" outline>
            Cập Nhập
          </Button>
          <Button color="danger" outline type="button" onClick={closeFounder}>
            Thoát
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FounderPut;
