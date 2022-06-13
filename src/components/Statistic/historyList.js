import React, { useEffect, useState } from "react";
import authApi from "../../apis/authapi";
const HistoryList = () => {
  useEffect(() => {
    const hisdb = async () => {
      const response = await authApi.getdata();
      console.log(response);
    };
    hisdb();
  }, []);
  return <></>;
};
export default HistoryList;
