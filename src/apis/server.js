import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3600",
  baseURL: "https://leareq-server.herokuapp.com/",
});