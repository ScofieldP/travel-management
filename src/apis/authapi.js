import axios from "axios";

class AuthApi {
  getUser = (token) => {
    const url = "https://profile.vinhphancommunity.xyz/api/users/me";
    return axios.get(url, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
  saveOrders = (data) => {
    const url = "https://profile.vinhphancommunity.xyz/api/orders";
    return axios.post(url, data, {
      headers: {
        "content-type": "application/json",
      },
    });
  };
}

const authApi = new AuthApi();
export default authApi;
