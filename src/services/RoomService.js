import {httpClient} from "../config/AxiosHelper.js";

export const createRoomApi = async (roomDetail) =>{
    console.log("hi " + roomDetail );
    const response = await httpClient.post('/api/v1/rooms/', roomDetail , {
        headers: {
            'Content-Type': 'text/plain'
        }
        ,
        transformResponse: [ (data) => data ]
    });
    return response.data ;
}

export const joinChatApi = async (roomId) =>{
    const response = await httpClient.get(`/api/v1/rooms/${roomId}`);
    return response.data ;
}
export const getMessages = async (roomId , size=50, page = 1 ) =>{
    const response = await httpClient.get(`/api/v1/rooms/${roomId}/messages?size=${size}&page=${page}`);
    return response.data ;
}

export const getAttachment = async (fileName) =>{
    const response = await httpClient.get(`/blob/getBlob/${fileName}`);
    return response.data ;
}
export const sendAttachment = async (file) =>{
    const formData = new FormData();
    formData.append("file", file);
    const response = await httpClient.post(`/blob/uploadBlob`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data ;
}