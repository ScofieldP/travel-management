import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const customStyles = {
	content: {
	  top: '50%',
	  left: '50%',
	  right: 'auto',
	  bottom: 'auto',	
	  overflow: 'auto',
	  transform: 'translate(-50%, -50%)',
	  padding: '0px',
	  border: '0',
	},
  };
const FoodList = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
    return (
        <>
        <div className="container-xl">
                <div className="table-responsive">
                  <div className="table-wrapper">
                  <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Quản lý món ăn</h2>
					</div>
					<div className="col-sm-6">
					<a href="##"
								className="btn btn-primary"
								data-toggle="modal"
								onClick={openModal}
								>
								<span ><FontAwesomeIcon className="me-2" icon={ faCirclePlus} />Thêm nhân viên</span>
							</a>
    				    <Modal
							isOpen={modalIsOpen}
							onRequestClose={closeModal}
							style={customStyles}
							contentLabel="Example Modal">
							
							<div className="headerModal d-flex justify-content-between">
								<p className="text-white px-5">Thêm nhân viên</p>
                                <span className="text-white px-5" onClick={closeModal}>X</span>
							</div>
							<div className="option_change">
								<table className="table  ">
								<thead className="border border-white"> 
								<tbody>
                            <tr>
                                <th scope="row">
                                    <label htmlFor ='editor-name'>Họ và Tên</label>         
                                </th>
                            <td>
                                <input className='formInput' id = 'editor-name' 
                                type = 'text' />
                            </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label htmlFor ='editor-phoneNumber'>SĐT</label>
                                </th>
                            <td>
                                <input className='formInput' id = 'editor-phoneNumber' 
                                type = 'text' />
                            </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label htmlFor ='editor-nameOfRoom'>Email</label>                   
                                </th>
                            <td>
                                <input className='formInput'id = 'editor-nameOfRoom' 
                                type = 'text' />
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <label htmlFor ='editor-role'>Vai trò</label>
                            </th>
                            <td>
                            <input className='formInput' id = 'editor-role' 
                            type = 'text' />
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <label htmlFor ='editor-nameOfRoom'>Phòng Ban</label>                   
                            </th>
                            <td>
                            <input className='formInput' id = 'editor-nameOfRoom' 
                            type = 'text' />
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <label htmlFor ='editor-salary'>Lương</label>
                            </th>
                            <td>
                            <input className='formInput' id = 'editor-salary' 
                            type = 'number' 
                            />
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <label htmlFor ='editor-password'>Mật Khẩu</label>
                            </th>
                            <td>
                                <input className='formInput' id = 'editor-password' 
                                type = 'password' 
                            />
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <label htmlFor ='editor-passwordVery'>Xác Thực Mật Khẩu</label>
                            </th>
                            <td>
                                <input className='formInput' id = 'editor-passwordVery' 
                                type = 'password'
                            />
                            </td>
                        </tr>
                    </tbody>
			</thead>
								</table>
							</div>	
							</Modal>
					</div>
				</div>
		</div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
                    <th>Tên Dịch Vụ</th>
                    <th>Giá </th>
                    <th>Tình trạng</th>
                    <th>ThaoTác</th>
					</tr>
				</thead>
				
			</table>
                  </div>
                </div>
              </div>
        
	
        </>
    );
}

export default FoodList;
