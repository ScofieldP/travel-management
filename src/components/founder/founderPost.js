import React, { useState } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";
import ErrorMessage from "../misc/error-message";

function GuestPost({ getGuests, setGuestCreateOpen }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState();
  const [address, setAddress] = useState("");
  const [IDCard, setIDCard] = useState();
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  async function saveRoom(e) {
    e.preventDefault();

    const guestData = {
      name: name ? name : undefined,
      phoneNumber: phoneNumber ? phoneNumber : undefined,
      email: email ? email : undefined,
      address: address ? address : undefined,
      IDCard: IDCard ? IDCard : undefined,
      password: password ? password : undefined,
      passwordVerify: passwordVerify ? passwordVerify : undefined,
    };

    try {
      await Axios.post("http://localhost:5000/customer", guestData);
    } catch (err) {
      if (err.response && err.response.data.errorMessage)
        setErrorMessage(err.response.data.errorMessage);
      return;
    }

    getGuests();
    closeGuest();
  }

  function closeGuest() {
    setName("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
    setIDCard(false);
    setPassword("");
    setPasswordVerify("");
    setGuestCreateOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employee-post">
      <div className="titleModal">
        <h2>Thêm khách hàng </h2>
      </div>
      <form onSubmit={saveRoom}>
        <Table borderless>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="number">Họ và Tên</label>
              </th>
              <td>
                <input
                  className="formInput"
                  id="number"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="floor">SĐT</label>
              </th>
              <td>
                <input
                  className="formInput"
                  id="floor"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="price">Email</label>
              </th>
              <td>
                <input
                  className="formInput"
                  id="price"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="price">Địa Chỉ</label>
              </th>
              <td>
                <input
                  className="formInput"
                  id="price"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="price">CMND/CCCD</label>
              </th>
              <td>
                <input
                  className="formInput"
                  id="price"
                  type="text"
                  value={IDCard}
                  onChange={(e) => setIDCard(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="price">Mật Khẩu</label>
              </th>
              <td>
                <input
                  className="formInput"
                  id="price"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="price">Xác thực Mật khẩu</label>
              </th>
              <td>
                <input
                  className="formInput"
                  id="price"
                  type="password"
                  value={passwordVerify}
                  onChange={(e) => setPasswordVerify(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="btn-confirm">
          <Button type="submit" color="success" outline>
            Tạo mới
          </Button>
          <Button color="danger" outline type="button" onClick={closeGuest}>
            Thoát
          </Button>
        </div>
      </form>
    </div>
  );
}

export default GuestPost;
