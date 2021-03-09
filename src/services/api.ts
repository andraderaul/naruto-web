import axios from 'axios'
import { baseURL } from '../constants/endpoints'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default api
