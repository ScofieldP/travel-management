import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";

import ErrorMessage from "../misc/error-message";
import domain from "../../until/domain";

function CreateRestaurant({ resEditorData, GetDataAPI, setResEditorOpen }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeOpen, setTimeOpen] = useState("");
  const [timeClose, setTimeClose] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (resEditorData) {
      setName(resEditorData.Res_name ? resEditorData.Res_name : "");
      setAddress(resEditorData.Res_address ? resEditorData.Res_address : "");
      setDescription(
        resEditorData.Res_description ? resEditorData.Res_description : ""
      );
      setEmail(resEditorData.Res_email ? resEditorData.Res_email : "");
      setPhone(resEditorData.Res_phone ? resEditorData.Res_phone : "");
      setTimeOpen(
        resEditorData.Res_time_open ? resEditorData.Res_time_open : ""
      );
      setTimeClose(
        resEditorData.Res_time_closed ? resEditorData.Res_time_closed : ""
      );
    }
  }, [resEditorData]);

  async function saveRestaurant(e) {
    e.preventDefault();

    const resData = {
      Res_name: name ? name : undefined,
      Res_address: address ? address : undefined,
      Res_description: description ? description : undefined,
      Res_email: email ? email : undefined,
      Res_phone: phone ? phone : undefined,
      Res_time_open: timeOpen ? timeOpen : undefined,
      Res_time_closed: timeClose ? timeClose : undefined,
      Res_image: "1",
    };

    try {
      const user = !localStorage.user ? "" : JSON.parse(localStorage.user);
      await Axios.put(
        domain + `/restaurant/${resEditorData.Res_id}/${user.userId}`,
        resData
      );
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
    setAddress("");
    setDescription("");
    setEmail("");
    setPhone("");
    setTimeOpen("");
    setTimeClose("");
    setErrorMessage(null);
    setResEditorOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employaee-post">
      <div className="titleModal">
        <h2>C???p nh???p th??ng tin nh?? h??ng</h2>
      </div>
      <form onSubmit={saveRestaurant} border border-dark>
        <Table borderless>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="name">T??n nh?? h??ng</label>
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
                <label htmlFor="address">?????a ch???</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="description">Mi??u t???</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
            <tr>
              <th scope="row">
                <label htmlFor="phone">S??? ??i???n tho???i</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="timeOpen">Th???i gian m??? c???a</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="timeOpen"
                  type="time"
                  value={timeOpen}
                  onChange={(e) => setTimeOpen(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="timeClose">Th???i gian ????ng c???a</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="timeClose"
                  type="time"
                  value={timeClose}
                  onChange={(e) => setTimeClose(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="btn-confirm">
          <Button type="submit" color="success" outline>
            C???p nh???p
          </Button>
          <Button color="danger" outline type="button" onClick={closeForm}>
            Tho??t
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateRestaurant;
