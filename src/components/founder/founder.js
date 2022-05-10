import React from "react";

import "./founder.css";

function Guest({ guest, editGuest }) {
  return (
    <>
      <tr>
        <th>Địa chỉ email Chủ nhà hàng</th>
        <td>{guest.Fdr_email}</td>
      </tr>
      <tr>
        <th>Tên Chủ nhà hàng</th>
        <td>{guest.Fdr_fullName}</td>
      </tr>
      <tr>
        <th>Tên Nhà hàng</th>
        <td>{guest.Restaurants[0].Res_name}</td>
      </tr>
      <tr>
        <th>Địa chỉ</th>
        <td>{guest.Restaurants[0].Res_address}</td>
      </tr>
      <tr>
        <th>Miêu tả nhà hàng</th>
        <td>{guest.Restaurants[0].Res_description}</td>
      </tr>
      <tr>
        <th>Địa chỉ mail</th>
        <td>{guest.Restaurants[0].Res_email}</td>
      </tr>
      <tr>
        <th>SĐT Liên hệ</th>
        <td>{guest.Restaurants[0].Res_phone}</td>
      </tr>
      <tr>
        <th>Thời gian mở cửa</th>
        <td>{guest.Restaurants[0].Res_time_open}</td>
      </tr>
      <tr>
        <th>Thời gian đóng cửa</th>
        <td>{guest.Restaurants[0].Res_time_closed}</td>
      </tr>
      <tr>
        <th>Chức năng</th>
        <td>
          <a
            onClick={() => editGuest(guest)}
            href="#editEmployeeModal"
            className="edit"
            data-toggle="modal"
          >
            <i
              className="material-icons"
              data-toggle="tooltip"
              title="Chỉnh sửa"
            >
              &#xE254;
            </i>
          </a>
        </td>
      </tr>
    </>
  );
}

export default Guest;
