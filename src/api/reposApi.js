import axiosClient from './axiosClient';
const reposApi = {
    getCommits: (fullName, params) => {
        const url = `/repos/${fullName}/commits`;
        return axiosClient.get(url, { params });
    }
}

export default reposApi;