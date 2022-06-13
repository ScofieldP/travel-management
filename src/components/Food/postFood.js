import React, { useState } from "react";
import Axios from "axios";
import { Table, Button } from "reactstrap";

import ErrorMessage from "../misc/error-message";
import domain from "../../until/domain";

function CreatTypeofFood({ toFID, GetDataAPI, setFoodCreateOpen }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [measureUnit, setMeasureUnit] = useState("");
  const [description, setDescription] = useState("");
  const [foodStatus, setFoodStatus] = useState(true);
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  async function saveRestaurant(e) {
    e.preventDefault();

    const foodData = {
      Fd_name: name ? name : undefined,
      Fd_price: price ? price : undefined,
      Fd_measureUnit: measureUnit ? measureUnit : undefined,
      Fd_description: description ? description : undefined,
      Fd_foodStatus: foodStatus ? foodStatus : true,
      Fd_image: image ? image : undefined,
    };

    try {
      await Axios.post(domain + `/food/${toFID}`, foodData);
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
    setPrice("");
    setMeasureUnit("");
    setDescription("");
    setErrorMessage(null);
    setFoodCreateOpen(false);
  }

  return (
    <div onClick={() => setErrorMessage(null)} className="employaee-post">
      <div className="titleModal">
        <h2>Thêm món ăn</h2>
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
            <tr>
              <th scope="row">
                <label htmlFor="price">Giá</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="measureUnit">Đơn vị thành tiền</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="measureUnit"
                  type="text"
                  value={measureUnit}
                  onChange={(e) => setMeasureUnit(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="description">Miêu tả món ăn</label>
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
                <label htmlFor="image">Link hình</label>
              </th>
              <td>
                <input
                  className="formInput1"
                  id="image"
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
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
