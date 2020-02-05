import axios from "axios";
import { apiEndPoint } from "../utils/config.json";

// "apiEndPoint": "https://reactmusicplayer-ab9e4.firebaseio.com",
// "apiEndPoint": "https://wecommerceapi.azurewebsites.net",

let axiosInstance = axios.create({
  baseURL: apiEndPoint
});

axiosInstance.interceptors.response.use(
  res => res.data,
  error => {
    console.log(error.res);
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      console.log("Logging the error", error);
      // alert("Un error inesperado ocurrio");
    }
    return Promise.reject(error);
  }
);

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete
};
