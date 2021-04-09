import axios from 'axios'

export const ajax = axios.create({
  headers: {
    source: 'h5',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true
})
