import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";
import ErrorMessage from "../misc/error-message";
import { CONNECTION_STRING } from "../../config/index";

function GuestPost({ getGuests, setGuestEditorOpen, editGuestData }) {
  const [founderName, setFounderName] = useState("");
  const [founderEmail, setFounderEmail] = useState("");
  const [resName, setResName] = useState("");
  const [resAddress, setResAddress] = useState("");
  const [resPhone, setResPhone] = useState();
  const [resDescription, setResDescription] = useState();
  const [resTimeOpen, setResTimeOpen] = useState();
  const [resTimeClosed, setResTimeClosed] = useState();
  const [resImage, setResImage] = useState();
  const [resEmail, setResEmail] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [smallNavbar, setSmallNavbar] = useState(false);

  useEffect(() => {
    if (editGuestData) {
      setFounderName(
        editGuestData.Fdr_fullName ? editGuestData.Fdr_fullName : ""
      );
      setFounderEmail(editGuestData.Fdr_email ? editGuestData.Fdr_email : "");
      setResName(
        editGuestData.Restaurants[0].Res_name
          ? editGuestData.Restaurants[0].Res_name
          : ""
      );
      setResAddress(
        editGuestData.Restaurants[0].Res_address
          ? editGuestData.Restaurants[0].Res_address
          : ""
      );
      setResPhone(
        editGuestData.Restaurants[0].Res_phone
          ? editGuestData.Restaurants[0].Res_phone
          : ""
      );
      setResDescription(
        editGuestData.Restaurants[0].Res_description
          ? editGuestData.Restaurants[0].Res_description
          : ""
      );
      setResTimeOpen(
        editGuestData.Restaurants[0].Res_time_open
          ? editGuestData.Restaurants[0].Res_time_open
          : ""
      );
      setResTimeClosed(
        editGuestData.Restaurants[0].Res_time_closed
          ? editGuestData.Restaurants[0].Res_time_closed
          : ""
      );
      setResImage(
        editGuestData.Restaurants[0].Res_image
          ? editGuestData.Restaurants[0].Res_image
          : ""
      );
      setResEmail(
        editGuestData.Restaurants[0].Res_email
          ? editGuestData.Restaurants[0].Res_email
          : ""
      );
    }
  }, [editGuestData]);

  async function saveFounder(e) {
    e.preventDefault();
    const founderData = {
      Fdr_fullName: founderName ? founderName : undefined,
      Fdr_email: founderEmail ? founderEmail : undefined,
    };
    try {
      await Axios.put(CONNECTION_STRING + "/founder", founderData);
    } catch (err) {
      if (err.response && err.response.data.errorMessage)
        setErrorMessage(err.response.data.errorMessage);
      return;
    }
    getGuests();
    closeGuest();
  }

  async function saveRestaurant(e) {
    e.preventDefault();

    const RestaurantData = {
      Res_name: resName ? resName : undefined,
      Res_address: resAddress ? resAddress : undefined,
      Res_phone: resPhone ? resPhone : undefined,
      Res_description: resDescription ? resDescription : undefined,
      Res_time_open: resTimeOpen ? resTimeOpen : undefined,
      Res_time_closed: resTimeClosed ? resTimeClosed : undefined,
      Res_image: resImage ? resImage : undefined,
      Res_email: resEmail ? resEmail : undefined,
    };

    try {
      await Axios.put(
        CONNECTION_STRING +
          `/restaurant/${editGuestData.Restaurants[0].Res_id}`,
        RestaurantData
      );
    } catch (err) {
      if (err.response && err.response.data.errorMessage)
        setErrorMessage(err.response.data.errorMessage);
      return;
    }

    getGuests();
    closeGuest();
  }

  function closeGuest() {
    setFounderName("");
    setFounderEmail("");
    setResName("");
    setResAddress("");
    setResPhone("");
    setResDescription("");
    setResTimeOpen("");
    setResTimeClosed("");
    setResImage("");
    setResEmail("");
    setGuestEditorOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employee-post">
      <div className="titleModal">
        {!smallNavbar ? (
          <h2>Thông tin Nhà sáng lập</h2>
        ) : (
          <h2>Thông tin Nhà hàng</h2>
        )}

        <button onClick={() => setSmallNavbar(!smallNavbar)}>
          Chuyển Thông tin
        </button>
      </div>
      <div>
        {!smallNavbar ? (
          <form onSubmit={saveFounder}>
            <Table borderless>
              {errorMessage && <ErrorMessage message={errorMessage} />}
              <tbody>
                <tr>
                  <th scope="row">
                    <label htmlFor="founderName">Họ và Tên Nhà sáng Lập</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="founderName"
                      type="text"
                      value={founderName}
                      onChange={(e) => setFounderName(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="founderEmail">Email Nhà sáng lập</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="founderEmail"
                      type="email"
                      value={founderEmail}
                      onChange={(e) => setFounderEmail(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="btn-confirm">
              <Button type="submit" color="success" outline>
                Cập nhập
              </Button>
              <Button color="danger" outline type="button" onClick={closeGuest}>
                Thoát
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={saveRestaurant}>
            <Table borderless>
              {errorMessage && <ErrorMessage message={errorMessage} />}
              <tbody>
                <tr>
                  <th scope="row">
                    <label htmlFor="resName">Tên Nhà hàng</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="resName"
                      type="text"
                      value={resName}
                      onChange={(e) => setResName(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="resAddress">Địa chỉ nhà hàng</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="resAddress"
                      type="text"
                      value={resAddress}
                      onChange={(e) => setResAddress(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="resPhone">SĐT liên hệ</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="resPhone"
                      type="text"
                      value={resPhone}
                      onChange={(e) => setResPhone(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="resDescription">Miêu tả nhà hàng</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="resDescription"
                      type="text"
                      value={resDescription}
                      onChange={(e) => setResDescription(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="resTimeOpen">Thời gian mở cửa</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="resTimeOpen"
                      type="time"
                      value={resTimeOpen}
                      onChange={(e) => setResTimeOpen(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="resTimeClosed">Thời gian đóng cửa</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="resTimeClosed"
                      type="time"
                      value={resTimeClosed}
                      onChange={(e) => setResTimeClosed(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="resEmail">Email nhà hàng</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="resEmail"
                      type="email"
                      value={resEmail}
                      onChange={(e) => setResEmail(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="resImage">File hình ảnh</label>
                  </th>
                  <td>
                    <input
                      className="formInput"
                      id="resImage"
                      type="text"
                      value={resImage}
                      onChange={(e) => setResImage(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="btn-confirm">
              <Button type="submit" color="success" outline>
                Cập nhập
              </Button>
              <Button color="danger" outline type="button" onClick={closeGuest}>
                Thoát
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default GuestPost;
