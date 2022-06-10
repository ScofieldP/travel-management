import React from "react";
import Axios from "axios";
import domain from "../../until/domain";

function TypeOfFood({ tof, EditTof, GetDataAPI }) {
  async function DeleteTypeofFood() {
    if (window.confirm(`Bạn có chắc muốn xóa ${tof.ToF_name}?`)) {
      await Axios.delete(domain + `/typeofFood/${tof.ToF_id}`);
      GetDataAPI();
    }
  }

  function GetTypeofFood() {
    localStorage.setItem("tof", JSON.stringify(tof));
  }

  return (
    <tr>
      <td>{tof.ToF_name}</td>
      <td>{tof.ToF_state ? "Đang bán" : "Tạm dừng bán"}</td>
      <td>
        <a
          onClick={() => EditTof(tof)}
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
