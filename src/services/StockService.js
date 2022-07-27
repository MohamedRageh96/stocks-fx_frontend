/* eslint-disable */
// eslint-disable-next-line
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.alphavantage.co",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getStock(symbol) {
    return apiClient.get(`query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=MV7K60M0XWHH1IUV`)
  },
  getForex(fromCur, toCur) {
    return apiClient.get(`query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCur}&to_currency=${toCur}&apikey=MV7K60M0XWHH1IUV`)
  },
};
