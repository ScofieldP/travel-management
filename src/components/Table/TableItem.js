import React from "react";
import Axios from "axios";
import domain from "../../util/domain";

function TableItem({ tbl, EditTbl, GetDataAPI }) {
  async function DeleteTable() {
    if (window.confirm(`Bạn có chắc muốn xóa ${tbl.Tbl_name}?`)) {
      await Axios.delete(domain + `/table/${tbl.Tbl_id}`);
      GetDataAPI();
    }
  }

  function GetTable() {
    localStorage.setItem("tbl", JSON.stringify(tbl));
  }

  return (
    <tr>
      <td>{tbl.Tbl_name}</td>
      <td>{tbl.Tbl_status ? "Bàn trống" : "Bàn đã đặt"}</td>
      <td>{tbl.Tbl_deposit}</td>
      <td>{tbl.Tbl_number}</td>
      <td>
        <a
          onClick={() => EditTbl(tbl)}
          href="#editEmployeeModal"
          className="edit"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Chỉnh sửa">
            &#xE254;
          </i>
        </a>
        <a
          onClick={DeleteTable}
          href="#deleteEmployeeModal"
          className="delete"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Xóa">
            &#xE872;
          </i>
        </a>
        <a
          onClick={GetTable}
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

export default TableItem;
