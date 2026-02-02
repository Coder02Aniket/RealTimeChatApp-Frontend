import axios from "axios";

// Use environment variable for baseURL, fallback to HTTP to avoid cert_date_invalid errors
export const baseURL = import.meta.env.VITE_API_BASE_URL || "http://chat-backend.eastasia.cloudapp.azure.com";

export const httpClient = axios.create({
    baseURL: baseURL,
    headers:{
        'Access-Control-Allow-Origin': '*',

    }
});