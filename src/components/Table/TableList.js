import React from 'react';

const TableList = () => {
    return (
        <>
        <div className="container-xl">
                <div className="table-responsive">
                  <div className="table-wrapper">
                  <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Quản lý bàn ăn</h2>
					</div>
					
				</div>
		</div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
                    <th>Tầng</th>
                    <th>Số bàn</th>
                    <th>Giá Phòng</th>
                    <th>Loại bàn</th>
                    <th>Tình trạng bàn</th>
                    <th>Ghi chú</th>
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

export default TableList;
