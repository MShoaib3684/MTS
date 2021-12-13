export const API_BASE_URL = "http://localhost:8080";


export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/Login')
export const SIGNUP = getApiUrl('/signup');