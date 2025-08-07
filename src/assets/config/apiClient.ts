import api from "../js/apiUrl";
import axios from "axios";

const conn = axios.create({
    baseURL: api.BASE_URL,
    headers: {
      "Content-Type": "application/json"
    }
  })
  
  
  export default conn
