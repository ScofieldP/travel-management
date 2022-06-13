import React from "react";
import Axios from "axios";
import domain from "../../until/domain";

function TypeOfFood({ food, EditFood, GetDataAPI }) {
  async function DeleteTypeofFood() {
    if (window.confirm(`Bạn có chắc muốn xóa ${food.Fd_name}?`)) {
      await Axios.delete(domain + `/food/${food.Fd_id}`);
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
      <td><img src={food.Fd_image} style={{width:'100px', height:'100px'}} alt=""/> </td>

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
