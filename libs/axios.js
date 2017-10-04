import axios from 'axios'

let instance = axios.create({
  baseURL: `/`
})

export default instance
