import React from "react";

import Axios from "axios";

function Guest({ guest, getGuests, editGuest }) {
  async function deleteEmployee() {
    if (window.confirm("Bạn có chắc muốn xóa dữ liệu Khách hàng này?")) {
      await Axios.delete(`http://localhost:5000/customer/${guest._id}`);
      getGuests();
    }
  }

  function getEmployee() {
    localStorage.setItem("guest", JSON.stringify(guest));
  }

  return (
    <tr>
      <td>{guest.name}</td>
      <td>{guest.phoneNumber}</td>
      <td>{guest.email}</td>
      <td>{guest.address}</td>
      <td>{guest.IDCard}</td>
      <td>
        <a
          onClick={() => editGuest(guest)}
          href="#editEmployeeModal"
          className="edit"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Chỉnh sửa">
            &#xE254;
          </i>
        </a>
        <a
          onClick={deleteEmployee}
          href="#deleteEmployeeModal"
          className="delete"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Xóa">
            &#xE872;
          </i>
        </a>
        <a
          onClick={getEmployee}
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

export default Guest;
