import axiosClient from './axiosClient';

const productApi = {
    getProducts: ({ data, signal }) => {
        const url = '/products';
        return axiosClient.get(url, { query: data, signal });
    },

    getProductDetails: (id) => {
        const url = '/products';
        return axiosClient.get(`${url}?filters=id==${id}`);
    },

    deleteProduct: (id) => {
        const url = '/products';
        return axiosClient.delete(`${url}?filters=id==${id}`);
    },

    updateProduct: (data) => {
        const { id } = data;
        const url = '/products';
        return axiosClient.put(`${url}?filters=id==${id}`, data);
    },


    addNewProduct: (data) => {
        const url = 'api/products';

        return axiosClient.post(url, data);
    },

};

export default productApi;
