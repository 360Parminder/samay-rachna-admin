import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9876', // Replace with your API base URL
    // timeout: 1000, // Optional timeout
});

export default axiosInstance;