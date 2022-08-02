import axios from "axios";
import {baseURL} from "../constants";

const API_KEY = process.env.REACT_APP_API_KEY;
export type AxiosResponse<T> = Promise<AxiosResponse<T>>
const axiosService = axios.create({baseURL:baseURL,params:{api_key:API_KEY}})

export {axiosService}