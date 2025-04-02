import axios from 'axios'

const axiosR = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})

export default axiosR
