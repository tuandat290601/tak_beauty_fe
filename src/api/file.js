import axiosClient from "./axiosClient";
import axiosFormData from "./axiosFormData";

const fileApi = {
  uploadFile: (file) => {
    const url = "/files";

    return axiosFormData.post(url, file);
  },

  deleteFile: (path) => {
    let formatedPath = path.replace("/images/", "");
    const url = `/files?path=${formatedPath}`;

    return axiosClient.delete(url);
  },
};

export default fileApi;
