import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        'content-type': 'application/json',

    },
    paramsSerializer: params => queryString.stringify(params),

});

axiosClient.interceptors.request.use(async (config) => {
    return {
        ...config,
        headers: {
            //...customHeaders,  // auto attach token
            ...config.headers, // but you can override for some requests
        }
    };
})

axiosClient.interceptors.response.use(response => {
    if (response && response.data) {
        return {
            data: response.data,
            status: response.status
        };
    }

    return response;
}, error => {
    throw error;
});

export default axiosClient