import axiosClient from './axiosClient';
const searchUserApi = {
    searchUser: (params) => {
        const url = "/search/users";
        return axiosClient.get(url, { params });
    },
    getUser: (userName) => {
        const url = `/users/${userName}`;
        return axiosClient.get(url);
    },
    getRepos: (userName, params) => {
        const url = `/users/${userName}/repos`;
        return axiosClient.get(url, { params });
    },
    getFollowers: (userName, params) => {
        const url = `/users/${userName}/followers`;
        return axiosClient.get(url, { params });
    },
    getFollowing: (userName, params) => {
        const url = `/users/${userName}/following`;
        return axiosClient.get(url, { params });
    },
    getGists: (userName, params) => {
        const url = `/users/${userName}/gists`;
        return axiosClient.get(url, { params });
    }
}

export default searchUserApi;