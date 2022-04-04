import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeList = () => {
    return (
        <>
        <div className="container-xl">
                <div className="table-responsive">
                  <div className="table-wrapper">
                  <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Quản lý nhân viên</h2>
					</div>
					
				</div>
		</div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Họ và Tên</th>
						<th>Chức vụ</th>
						<th>Phòng Ban</th>
						<th>Email</th>
						<th>SĐT</th>
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

export default EmployeeList;
