import React from "react";
import Axios from "axios";
import { CONNECTION_STRING } from "../../config/index";

function Restaurant({ res, EditRes, GetDataAPI }) {
  async function DeleteRestaurant() {
    if (window.confirm(`Bạn có chắc muốn xóa dữ liệu của ${res.Res_name}?`)) {
      const token = !localStorage.token ? "" : JSON.parse(localStorage.token);
      await Axios.delete(
        CONNECTION_STRING + `/restaurant/${res.Res_id}/${token.data.token}`
      );
      GetDataAPI();
    }
  }

  function GetRestaurant() {
    localStorage.setItem("res", JSON.stringify(res));
  }

  return (
    <tr>
      <td>{res.Res_name}</td>
      <td>{res.Res_address}</td>
      <td>{res.Res_description}</td>
      <td>{res.Res_email}</td>
      <td>{res.Res_phone}</td>
      <td>{res.Res_time_open}</td>
      <td>{res.Res_time_closed}</td>
      <td>
        <a
          onClick={() => EditRes(res)}
          href="#editEmployeeModal"
          className="edit"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Chỉnh sửa">
            &#xE254;
          </i>
        </a>
        <a
          onClick={DeleteRestaurant}
          href="#deleteEmployeeModal"
          className="delete"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Xóa">
            &#xE872;
          </i>
        </a>
        <a
          onClick={GetRestaurant}
          href="#chooseEmployeeModal"
          className="delete"
          data-toggle="modal"
        >
          <i
            style={{ color: "green" }}
            className="material-icons"
            data-toggle="Chọn"
            title="Chọn"
          >
            &#xe147;
          </i>
        </a>
      </td>
    </tr>
  );
}

export default Restaurant;
