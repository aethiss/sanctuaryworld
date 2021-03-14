/* eslint-disable no-undef */
import axios from 'axios'
import { pathOr } from 'ramda'
import { getCookie } from '../../libs/cookieHelper'

export const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/`,
  timeout: 5000,
  headers: {
    accept: 'application/json',
    // 'Content-Type': 'application/json',
  },
})

const extractErrorMsg = (error) => {
  const defaultMessage = 'Undefined error'
  return pathOr(defaultMessage, ['response', 'data', 'data', 0, 'messages', 0, 'message'], error)
}

API.interceptors.request.use(
  (config) => {
    // We should use only client side request, but we like defensive code !
    const token = getCookie("token");
    if (token) config.headers["Authorization"] = "Bearer " + token;
    if (config.method.toLowerCase() !== "get") config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // console.log('interceptor Error', error.response.data)
    if (error.response && error.response.status >= 400) {
      if (error.response.status === 401) {
        throw ({
          data: "Session Expired, please Login Again",
          status: 401,
        })
      }
      throw ({
        data: extractErrorMsg(error),
        status: error.response.status || 501,
      })
    }
    throw (error)
  },
)

export const callAPI = async (url, method = 'GET', params, token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  switch (method) {
    case 'GET':
      return await API.get(url)
    case 'POST':
      return await API.post(url, params)
    case 'PUT':
      return await API.put(url, params)
    case 'DELETE':
      return await API.delete(url)
    default:
      return await API.get(url)
  }
}
