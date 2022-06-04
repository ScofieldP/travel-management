import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FounderList from "./components/founder/listFounder";
import TableList from "./components/Table/TableList";
import CustomerList from "./components/Customer/CustomerList";
import FoodList from "./components/Food/FoodList";
import BookingList from "./components/BookingTable/BookingList";
import OrderList from "./components/OrderFood/OrderList";
import Payment from "./components/Payment/Payment";
import TypeofFood from "./components/TypeofFood/typeofFoodList";
import Auth from "./components/Auth/login";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FounderList />} />
        <Route path="/table" element={<TableList />} />
        <Route path="/typeofFood" element={<TypeofFood />} />
        <Route path="/customer" element={<CustomerList />} />
        <Route path="/food" element={<FoodList />} />
        <Route path="/bookingTable" element={<BookingList />} />
        <Route path="/orderFood" element={<OrderList />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/login" element={<Auth />} />

        {/* <Route path="/roomRevenue">
              <div className="container-xl">
                  <div className="table-responsive">
                    <div className="table-wrapper">
                    <BillRoom payBill={true}/>
                    </div>
                  </div>
              </div>
          </Route>
            <Route path="/serviceRevenue">
            <div className="container-xl">
                  <div className="table-responsive">
                    <div className="table-wrapper">
                    <BillService payBill={true}/>
                    </div>
                  </div>
              </div>
            </Route> */}
        {/* <Route path="/login"><Login/></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
