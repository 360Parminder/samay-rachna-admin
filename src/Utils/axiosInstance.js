import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_API_URL, // Replace with your API base URL
    // timeout: 1000, // Optional timeout
});

export default axiosInstance;