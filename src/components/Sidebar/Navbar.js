import React,{ useState } from 'react';
import {
     faBed,
     faUserFriends,
     faBars,
     faAngleDoubleLeft,
     faCrown,
     faFilter,
     faFunnelDollar,
     faCheckSquare,
     faShoppingCart,
     faHeartBroken,
     faPoll,
     faCommentDollar,
     faSearchDollar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navbar.css';


function Navbar({openNavbar, setOpenNavbar}) {

    const [openList, setOpenList] = useState(false);
    const [openListNav, setOpenListNav] = useState(false);

    return(
    <>
        <div className={openNavbar?'sidebar':'sidebar open'} >
            <div className="logo-details">
                <div className="logo_name">Quản lý khách sạn</div>
                <i className='bx bx-menu' id="btn" onClick={() => setOpenNavbar(!openNavbar)}>
                    <FontAwesomeIcon icon={openNavbar ? faBars : faAngleDoubleLeft} />
                </i>
            </div>
            <ul className="nav-list">
                <li>
                    <a href ="/">

                        <i className='bx bx-user' ><FontAwesomeIcon icon={faUserFriends} /></i>
                        <span className="links_name">Nhân viên</span>
                    </a>           
                    <span className="tooltip">Nhân viên</span>
                </li>
                <li>
                    <a href ="/room">
                        <i className='bx bx-user' ><FontAwesomeIcon icon={faBed} /></i>
                        <span className="links_name">Phòng</span>
                    </a>            
                    <span className="tooltip">Phòng</span>
                </li>
                <li>
                    <a href ="/customer">
                        <i className='bx bx-user' ><FontAwesomeIcon icon={faCrown} /></i>
                        <span className="links_name">Khách hàng</span>
                    </a>           
                    <span className="tooltip">Khách hàng</span>
                </li>
                <li>
                    <a href ="/service">
                        <i className='bx bx-user' ><FontAwesomeIcon icon={faShoppingCart} /></i>
                        <span className="links_name">Dịch vụ</span>
                    </a>           
                    <span className="tooltip">Dịch vụ</span>
                </li>

                {/* list menu */}
                <li onClick={() => setOpenList(!openList)}>
                    <a href='#menu'>
                        <i className='bx bx-grid-alt'><FontAwesomeIcon icon={faFilter} /></i>
                        <span className="links_name">Chức năng</span>
                    </a>
                    <span className="tooltip">Chức năng</span>
                </li>
                
                <li className={openList&&!openNavbar?'subNav':'subNavClose'}>
                    <a href = "/bookingRoom">
                        <i className='bx bx-grid-alt'><FontAwesomeIcon icon={faCheckSquare} /></i>
                        <span className="links_name">Đặt phòng</span>
                    </a>
                    <span className="tooltip">Đặt phòng</span>
                </li>
                <li className={openList&&!openNavbar?'subNav':'subNavClose'}>
                    <a href = "/checkoutRoom">
                        <i className='bx bx-grid-alt'><FontAwesomeIcon icon={faHeartBroken} /></i>
                        <span className="links_name">Trả phòng</span>
                    </a>
                    <span className="tooltip">Trả phòng</span>
                </li>
                <li className={openList&&!openNavbar?'subNav':'subNavClose'}>
                    <a href = "/bookingService">
                        <i className='bx bx-grid-alt'><FontAwesomeIcon icon={faFunnelDollar} /></i>
                        <span className="links_name">Đặt dịch vụ</span>
                    </a>
                    <span className="tooltip">Đặt dịch vụ</span> 
                </li>
                <li className={openList&&!openNavbar?'subNav':'subNavClose'}>
                    <a href = "/checkoutService">
                        <i className='bx bx-grid-alt'><FontAwesomeIcon icon={faFunnelDollar} /></i>
                        <span className="links_name">Thanh toán dịch vụ</span>
                    </a>
                    <span className="tooltip">Thanh toán dịch vụ</span> 
                </li>
                
                
                {/* list menu */}
                <li onClick={() => setOpenListNav(!openListNav)}>
                    <a href='#baocao'>
                        <i className='bx bx-grid-alt'><FontAwesomeIcon icon={faCommentDollar} /></i>
                        <span className="links_name">Báo cáo</span>
                    </a>
                    <span className="tooltip">Báo cáo</span>
                </li>
                
                <li className={openListNav&&!openNavbar?'subNav':'subNavClose'}>
                    <a href = "/roomRevenue">
                        <i className='bx bx-grid-alt'><FontAwesomeIcon icon={faPoll} /></i>
                        <span className="links_name">Doanh thu phòng</span>
                    </a>
                    <span className="tooltip">Doanh thu phòng</span>
                </li>
                <li className={openListNav&&!openNavbar?'subNav':'subNavClose'}>
                    <a href = "/serviceRevenue">
                        <i className='bx bx-grid-alt'><FontAwesomeIcon icon={faSearchDollar} /></i>
                        <span className="links_name">Doanh thu dịch vụ</span>
                    </a>
                    <span className="tooltip">Doanh thu dịch vụ</span>
                </li>
            </ul>
        </div>
    </>
    )
}
export default Navbar