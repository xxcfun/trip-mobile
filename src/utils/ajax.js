import axios from 'axios'

export const ajax = axios.create({
  headers: {
    source: 'h5',
    icode: 'abcd',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true
})
