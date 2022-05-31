import React, { useState } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";

import ErrorMessage from "../misc/error-message";
import { CONNECTION_STRING } from "../../config/index";

function CreateRestaurant({ GetDataAPI, setResCreateOpen }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeOpen, setTimeOpen] = useState("");
  const [timeClose, setTimeClose] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

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
      const token = !localStorage.token ? "" : JSON.parse(localStorage.token);
      await Axios.post(
        CONNECTION_STRING + `/restaurant/${token.data.token}`,
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
    setResCreateOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employaee-post">
      <div className="titleModal">
        <h2>Khởi tạo nhà hàng</h2>
      </div>
      <form onSubmit={saveRestaurant}>
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
                <label htmlFor="address">Địa chỉ</label>
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
                <label htmlFor="description">Miêu tả</label>
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
                <label htmlFor="phone">Số điện thoại</label>
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
                <label htmlFor="timeOpen">Thời gian mở cửa</label>
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
                <label htmlFor="timeClose">Thời gian đóng của</label>
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

export default CreateRestaurant;
