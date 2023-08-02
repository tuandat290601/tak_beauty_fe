import axiosClient from './axiosClient';

const courseApi = {
    getCourses: ({ data, signal }) => {
        const url = '/courses';
        return axiosClient.get(url, { query: data, signal });
    },

    getCourseDetails: (id) => {
        const url = '/courses';
        return axiosClient.get(`${url}?filters=id==${id}`);
    },

    deleteCourse: (id) => {
        const url = '/courses';
        return axiosClient.delete(`${url}?filters=id==${id}`);
    },

    updateCourse: (data) => {
        const { id } = data;
        const url = '/courses';
        return axiosClient.put(`${url}?filters=id==${id}`, data);
    },


    addNewCourse: (data) => {
        const url = '/courses';

        return axiosClient.post(url, data);
    },

};

export default courseApi;
