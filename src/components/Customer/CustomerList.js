import React from 'react';

const CustomerList = () => {
    return (
        <>
        <div className="container-xl">
                <div className="table-responsive">
                  <div className="table-wrapper">
                  <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Quản lý khách hàng</h2>
					</div>
					
				</div>
		</div>
			<table className="table table-striped table-hover">
				<thead>
                <tr>
						<th>Họ và Tên</th>
						<th>SĐT</th>
						<th>Email</th>
						<th>Địa Chỉ</th>
						
					</tr>
				</thead>
				
			</table>
                  </div>
                </div>
              </div>
        
	
        </>
    );
}

export default CustomerList;
