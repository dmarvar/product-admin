import axios from "axios";
import { apiEndPoint } from "../utils/config.json";

axios.defaults.baseURL = apiEndPoint;

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    alert("Un error inesperado ocurrio");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
