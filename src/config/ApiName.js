// import { config, bodyParameters, AppUrl } from 'src/config/ApiName'

export const token = '8fa7cba604757ab7ead8423a7dc05fef80b49634'
export const AppUrl = '127.0.0.1:8000'
export const config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ' + token,
  },
}

export const bodyParameters = {
  // key: 'value',
}
