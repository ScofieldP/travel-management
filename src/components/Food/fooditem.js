import React from "react";
import Axios from "axios";
import { CONNECTION_STRING } from "../../config/index";

function TypeOfFood({ food, EditFood, GetDataAPI }) {
  async function DeleteTypeofFood() {
    if (window.confirm(`Bạn có chắc muốn xóa ${food.Fd_name}?`)) {
      await Axios.delete(CONNECTION_STRING + `/food/${food.Fd_id}`);
      GetDataAPI();
    }
  }

  function GetTypeofFood() {
    localStorage.setItem("tof", JSON.stringify(food));
  }

  return (
    <tr>
      <td>{food.Fd_name}</td>
      <td>
        {food.Fd_price}/ {food.Fd_measureUnit}
      </td>
      <td>{food.Fd_description}</td>
      <td>{food.Fd_foodStatus ? "Đang phục vụ" : "Tạm dừng phục vụ"}</td>
      <td>{food.Fd_image ? "Có hình" : "Không có hình"}</td>

      <td>
        <a
          onClick={() => EditFood(food)}
          href="#editEmployeeModal"
          className="edit"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Chỉnh sửa">
            &#xE254;
          </i>
        </a>
        <a
          onClick={DeleteTypeofFood}
          href="#deleteEmployeeModal"
          className="delete"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Xóa">
            &#xE872;
          </i>
        </a>
        <a
          onClick={GetTypeofFood}
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

export default TypeOfFood;
