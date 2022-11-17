import axios from "axios";
import { domain } from "./const";

export const getReq = (path, callBack) =>
  axios.get(`${domain}/${path}`).then(callBack);

export const postReq = (path, params, callBack) =>
  axios.post(`${domain}/${path}`, params).then(callBack);

export const putReq = (path, params, callBack) =>
  axios.put(`${domain}/${path}`, params).then(callBack);
