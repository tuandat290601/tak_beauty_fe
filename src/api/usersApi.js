import axiosClient from './axiosClient';

const usersApi = {
    forgotPassword: (data) => {
        const url = '/users/forgotPassword';
        return axiosClient.post(url, data, { params: data });
    },

    setPassword: (data) => {
        const url = '/users/setPassword';
        return axiosClient.put(url, data, { params: data });
    },

    registerUser: (data) => {
        const url = '/users';
        return axiosClient.post(url, data);
    },

    changePassword: (data) => {
        const url = '/users/changePassword';
        return axiosClient.post(url, data, { params: data });
    },

    updateUser: (data) => {
        const { id, body } = data;
        const url = '/users';
        return axiosClient.put(`${url}/${id}`, body);
    },

    genOtpToChangeEmail: (data) => {
        const { id, newEmail, oldPassword } = data;
        const url = '/users';
        return axiosClient.put(`${url}/${id}/genOtpToChangeEmail?newEmail=${newEmail}&oldPassword=${oldPassword}`);
    },

    confirmOtpToChangeEmail: (data) => {
        const { id, newEmail, otp, oldPassword } = data;
        const url = '/users';
        return axiosClient.put(
            `${url}/${id}/confirmOtpToChangeEmail?newEmail=${newEmail}&otp=${otp}&oldPassword=${oldPassword}`
        );
    },

    userAddress: (params) => {
        const url = '/userAddresses/myAddress';
        return axiosClient.get(url, { params });
    },

    deleteUserAddress: (id) => {
        const url = '/userAddresses';
        return axiosClient.delete(`${url}/${id}`);
    },

    checkPhoneIsHave: (data) => {
        const { id, newPhone } = data;
        const url = '/users';
        return axiosClient.put(`${url}/${id}/checkPhoneIsHave`, newPhone);
    },

    changePhone: (data) => {
        const { id, newPhone } = data;
        const url = '/users';
        return axiosClient.put(`${url}/${id}/changePhone`, newPhone);
    },

    getUsers: (data) => {
        const url = '/users';
        return axiosClient.get(url, { params: data });
    },

    addUserAddress: (data) => {
        const url = '/userAddresses';
        return axiosClient.post(url, data);
    },

    updateUserAddress: (data) => {
        const { id } = data;
        const url = `/userAddresses/${id}`;
        return axiosClient.put(url, data);
    },

    addNewUser: (data) => {
        const { roleId, isSendToMail, body } = data;
        const url = '/users';
        return axiosClient.post(`${url}?roleId=${roleId}&isSendToMail=${isSendToMail}`, body);
    },

    deleteUser: (data) => {
        const { id } = data;
        const url = '/users';
        return axiosClient.delete(`${url}/${id}`);
    },

    updateFCMClientToken: (data) => {
        const url = `/users/updateFCMClientToken`;
        return axiosClient.put(url, data);
    },

    getUserDetail: (data) => {
        const { id } = data;
        const url = `/users/${id}`;
        return axiosClient.get(url);
    }
};

export let updateUser = usersApi.updateUser;

export default usersApi;
