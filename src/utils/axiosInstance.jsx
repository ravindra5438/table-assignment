import axios from "axios";
const instance = axios.create({
  baseURL: "https://node-js-server-x62d.onrender.com/api/v1",
});

export default instance;