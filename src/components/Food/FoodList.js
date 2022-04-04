import React from 'react';

const FoodList = () => {
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
