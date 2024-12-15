import axios from "axios";
export const baseURL = "http://20.255.48.137:8080";
export const httpClient = axios.create({
  baseURL: baseURL,

});
