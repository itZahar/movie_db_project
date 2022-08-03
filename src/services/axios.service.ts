import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants";

const API_KEY = process.env.REACT_APP_API_KEY;

export type AxiosRes<T> = Promise<AxiosResponse<T>>
const axiosService = axios.create({baseURL:baseURL, params: {api_key: API_KEY}})

export {axiosService}