import axios from "axios";
import { BASE_URL, config } from "./constant";

 const instance = axios.create({
    baseURL: BASE_URL,
    config : config
})

export default instance