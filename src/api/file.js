import axiosFormData from "./axiosFormData";

const fileApi = {
  uploadFile: (file) => {
    const url = "/files";

    return axiosFormData.post(url, file);
  },
};

export default fileApi;
