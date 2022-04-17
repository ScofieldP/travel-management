import React, { useState } from "react";
import {
  faGift,
  faBars,
  faAngleDoubleLeft,
  faCrown,
  faFilter,
  faCheckSquare,
  faPoll,
  faCommentDollar,
  faSearchDollar,
  faUtensils,
  faBowlRice,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";

function Navbar({ openNavbar, setOpenNavbar }) {
  const [openList, setOpenList] = useState(false);
  const [openListNav, setOpenListNav] = useState(false);

  return (
    <>
      <div className={openNavbar ? "sidebar" : "sidebar open"}>
        <div className="logo-details">
          <div className="logo_name">Nhà hàng</div>
          <i
            className="bx bx-menu"
            id="btn"
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            <FontAwesomeIcon icon={openNavbar ? faBars : faAngleDoubleLeft} />
          </i>
        </div>
        <ul className="nav-list">
          <li>
            <a href="/typeofFood">
              <i className="bx bx-user">
                <FontAwesomeIcon icon={faUtensils} />
              </i>
              <span className="links_name">Loại món ăn</span>
            </a>
            <span className="tooltip">Loại món ăn</span>
          </li>
          <li>
            <a href="/food">
              <i className="bx bx-user">
                <FontAwesomeIcon icon={faBowlRice} />
              </i>
              <span className="links_name">Món ăn</span>
            </a>
            <span className="tooltip">Món ăn</span>
          </li>
          <li>
            <a href="/table">
              <i className="bx bx-user">
                <FontAwesomeIcon icon={faTable} />
              </i>
              <span className="links_name">Bàn ăn</span>
            </a>
            <span className="tooltip">Bàn ăn</span>
          </li>

          {/* list menu */}
          <li onClick={() => setOpenList(!openList)}>
            <a href="#menu">
              <i className="bx bx-grid-alt">
                <FontAwesomeIcon icon={faFilter} />
              </i>
              <span className="links_name">Ưu đãi</span>
            </a>
            <span className="tooltip">Ưu đãi</span>
          </li>

          <li className={openList && !openNavbar ? "subNav" : "subNavClose"}>
            <a href="/voucher">
              <i className="bx bx-grid-alt">
                <FontAwesomeIcon icon={faCheckSquare} />
              </i>
              <span className="links_name">Voucher</span>
            </a>
            <span className="tooltip">Voucher</span>
          </li>
          <li className={openList && !openNavbar ? "subNav" : "subNavClose"}>
            <a href="/gift">
              <i className="bx bx-grid-alt">
                <FontAwesomeIcon icon={faGift} />
              </i>
              <span className="links_name">Gift</span>
            </a>
            <span className="tooltip">Gift</span>
          </li>
          <li className={openList && !openNavbar ? "subNav" : "subNavClose"}>
            <a href="/checkout">
              <i className="bx bx-grid-alt">
                <FontAwesomeIcon icon={faCrown} />
              </i>
              <span className="links_name">Stripe/Paypal</span>
            </a>
            <span className="tooltip">Stripe/Paypal</span>
          </li>

          {/* list menu */}
          <li onClick={() => setOpenListNav(!openListNav)}>
            <a href="#baocao">
              <i className="bx bx-grid-alt">
                <FontAwesomeIcon icon={faCommentDollar} />
              </i>
              <span className="links_name">Thống kê</span>
            </a>
            <span className="tooltip">Thống kê</span>
          </li>

          <li className={openListNav && !openNavbar ? "subNav" : "subNavClose"}>
            <a href="/roomRevenue">
              <i className="bx bx-grid-alt">
                <FontAwesomeIcon icon={faPoll} />
              </i>
              <span className="links_name">Doanh thu</span>
            </a>
            <span className="tooltip">Doanh thu</span>
          </li>
          <li className={openListNav && !openNavbar ? "subNav" : "subNavClose"}>
            <a href="/serviceRevenue">
              <i className="bx bx-grid-alt">
                <FontAwesomeIcon icon={faSearchDollar} />
              </i>
              <span className="links_name">Lịch sử giao dịch</span>
            </a>
            <span className="tooltip">Lịch sử giao dịch</span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
