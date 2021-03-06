import React from "react";
import { Routes, Route } from "react-router-dom";

import FounderList from "./components/founder/listFounder";
import TableList from "./components/Table/TableList";
import CustomerList from "./components/Customer/CustomerList";
import FoodList from "./components/Food/FoodList";
import BookingList from "./components/BookingTable/BookingList";
import OrderList from "./components/OrderFood/OrderList";
import Payment from "./components/Payment/Payment";
import TypeofFood from "./components/TypeofFood/typeofFoodList";
import Auth from "./components/Auth/login";
import HistoryList from "./components/Statistic/historyList";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<FounderList />} />
      <Route path="/table" element={<TableList />} />
      <Route path="/typeofFood" element={<TypeofFood />} />
      <Route path="/customer" element={<CustomerList />} />
      <Route path="/food" element={<FoodList />} />
      <Route path="/bookingTable" element={<BookingList />} />
      <Route path="/orderFood" element={<OrderList />} />
      <Route path="/checkout" element={<Payment />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/history" element={<HistoryList />} />
    </Routes>
  );
}

export default Router;
