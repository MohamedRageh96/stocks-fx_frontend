/* eslint-disable */
// eslint-disable-next-line
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getStock(symbol) {
    return apiClient.get(`&symbol=${symbol}&apikey=MV7K60M0XWHH1IUV`)
  },
};
