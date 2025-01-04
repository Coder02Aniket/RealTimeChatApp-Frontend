import axios from "axios";
export const baseURL = "http://localhost:8080";
export const httpClient = axios.create({
    baseURL: baseURL,
    headers:{
        'Access-Control-Allow-Origin': '*',

    }
});