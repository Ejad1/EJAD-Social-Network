import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000
});

const ApiService = {
    // User services
    signUp: (userData, token) => {
        return axiosInstance.post('/signUp', userData, {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        });
    },
    login: (userData, token) => {
        return axiosInstance.post('/login', userData, {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        });
    },
    getUserInfos: (userId, token) => {
        return axiosInstance.get(`/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        });
    },

    // Publications services
    
}

export default ApiService;
