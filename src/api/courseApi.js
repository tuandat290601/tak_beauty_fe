import axiosClient from './axiosClient';

const courseApi = {
    getCourses: ({ payload, signal }) => {
        const url = `/courses?currentPage=${payload.currentPage ?? 1}&pageSize=${payload.pageSize ?? 10
            }&filters=${encodeURIComponent(payload.filters ?? "")}`
        return axiosClient.get(url, { signal });
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
