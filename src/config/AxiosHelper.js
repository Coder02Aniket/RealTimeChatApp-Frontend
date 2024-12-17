import axios from "axios";
export const baseURL = "https://chat-backend.eastasia.cloudapp.azure.com/";
export const httpClient = axios.create({
  baseURL: baseURL,

});
