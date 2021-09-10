import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER
} from '../account/types'

const endPoint = '/api/user'

/* 로그인 aciton */
export function loginUser(dataToSubmit) {
  const request = axios.post(`${endPoint}/login`, dataToSubmit)
    .then(response => response.data)
    .catch(err => console.log(err))
  
  /* to reducer return */
  return {
    type: LOGIN_USER,
    payload: request
  }
}

/* 회원가입 aciton */
export function registerUser(dataToSubmit) {
  const request = axios.post(`${endPoint}/register`, dataToSubmit)
    .then(response => response.data)
    .catch(err => console.log(err))
  
  /* to reducer return */
  return {
    type: REGISTER_USER,
    payload: request
  }
  
}

/* 로그아웃 action */
export function logoutUser() {
  const request = axios.get(`${endPoint}/logout`)
    .then(response => response.data)
  
  return {
    type: LOGOUT_USER,
    payload : request
  }
}