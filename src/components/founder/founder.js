import React from "react";

import "./founder.css";

function Guest({ guest, editGuest }) {
  return (
    <>
      <thead>
      <tr class="border-cz">
        <th class="border-cz" >Email nhà hàng</th>
        <td class="border-cz">{guest.Fdr_email}</td>
      </tr>
      <tr  class="border-cz">
        <th  class="border-cz">Chủ nhà hàng</th>
        <td class="border-cz">{guest.Fdr_fullName}</td>
      </tr>
      <tr class="border-cz">
        <th class="border-cz">Tên nhà hàng</th>
        <td class="border-cz">{guest.Restaurants[0].Res_name}</td>
      </tr>
      <tr class="border-cz">
        <th  class="border-cz">Địa chỉ</th>
        <td class="border-cz">{guest.Restaurants[0].Res_address}</td>
      </tr>
      <tr class="border-cz">
        <th class="border-cz">Miêu tả nhà hàng</th>
        <td class="border-cz">{guest.Restaurants[0].Res_description}</td>
      </tr>
      <tr class="border-cz">
        <th class="border-cz">Email cá nhân</th>
        <td class="border-cz">{guest.Restaurants[0].Res_email}</td>
      </tr>
      <tr class="border-cz">
        <th class="border-cz">Liên hệ</th>
        <td class="border-cz">{guest.Restaurants[0].Res_phone}</td>
      </tr>
      <tr class="border-cz">
        <th  class="border-cz">Thời gian mở cửa</th>
        <td class="border-cz">{guest.Restaurants[0].Res_time_open}</td>
      </tr>
      <tr class="border-cz">
        <th class="border-cz">Thời gian đóng cửa</th>
        <td class="border-cz">{guest.Restaurants[0].Res_time_closed}</td>
      </tr>
      <tr class="border-cz">
        <th class="border-cz">Chi tiết</th>
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
      </thead>
    </>
  );
}

export default Guest;
