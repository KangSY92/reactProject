import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : 'http://localhost:8080',
    timeout : 10000,
    headers: {
        'Content-Type' : 'application/json'
    }
})

export default axiosInstance;