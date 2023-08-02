import axiosFormData from './axiosFormData'

export const fileApi = {
    uploadFile: (file) => {
        const url = "/";

        return axiosFormData.post(url, file)
    }
}