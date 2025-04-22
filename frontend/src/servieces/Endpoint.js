import axios from "axios";

export const BaseUrl = "http://localhost:8000";
const instance = axios.create({
    baseURL: BaseUrl,
    withCredentials: true,

});
export const get = async (url,params) => instance.get(url,params);
export const post = async (url,data) => instance.post(url,data);
export const patch = async (url,data) => instance.patch(url,data);
export const del  =  async(url) => instance.delete(url);

