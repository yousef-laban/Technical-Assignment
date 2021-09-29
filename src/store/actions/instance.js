import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/",
});
export default instance;
