import axiosClient from './axiosClient';

const categoryApi = {
    getCategories: () => {
        const url = '/categories';
        return axiosClient.get(url);
    },

    postCategory: (data) => {
        const url = '/categories';
        return axiosClient.post(url, data);
    },

    updateCategoryById: (payload) => {
        const { id, data } = payload,
            url = `/categories/?filters=id==${id}`;
        return axiosClient.put(url, data);
    },

    deleteCategoryById: (id) => {
        const url = `/categories/?filters=id==${id}`;
        return axiosClient.delete(url);
    },
};

export default categoryApi;
